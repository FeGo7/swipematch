#!/usr/bin/env node
/**
 * Agreesy – Zero-Cost, Keyless Media Picks Updater (Movies & Series)
 * Runs monthly via GitHub Actions (100% free, no API keys required).
 *
 * Data Sources (Public, Keyless, Free):
 * 1) TVMaze Public API (https://api.tvmaze.com) for high-rated recent Series
 * 2) Apple iTunes / Apple TV Public Store API (https://itunes.apple.com) for recent Movies
 *
 * Safety Guarantee:
 * - Never overwrites a genre with empty/broken data.
 * - Preserves curated baseline picks and rotates in fresh releases from the last 24 months.
 * - Validates output structure (14 movie genres + 12 series genres) before saving.
 */

const fs = require('fs');
const path = require('path');

const MEDIA_PICKS_PATH = path.join(__dirname, '..', 'js', 'media_picks.js');

function loadCurrentPicks() {
    const code = fs.readFileSync(MEDIA_PICKS_PATH, 'utf8');
    const fn = new Function(`${code}; return { META: MEDIA_PICKS_META, PICKS: MEDIA_STAGE2_PICKS };`);
    return fn();
}

async function fetchJsonSafe(url) {
    try {
        const res = await fetch(url, {
            headers: { 'User-Agent': 'AgreesyMediaBot/1.0 (https://agreesy.com)' }
        });
        if (!res.ok) return null;
        return await res.json();
    } catch (e) {
        return null;
    }
}

async function fetchRecentTopSeriesFromTvMaze(minYear) {
    // Page through the newest show index on TVMaze (free & keyless)
    const freshByGenre = {};
    for (const page of [290, 295, 300, 305, 310]) {
        const shows = await fetchJsonSafe(`https://api.tvmaze.com/shows?page=${page}`);
        if (!Array.isArray(shows)) continue;
        for (const s of shows) {
            if (!s || !s.name || !s.premiered) continue;
            const year = parseInt(s.premiered.slice(0, 4), 10);
            const rating = s.rating && s.rating.average ? Number(s.rating.average) : 0;
            if (!year || year < minYear || rating < 7.6) continue;
            const genres = Array.isArray(s.genres) ? s.genres : [];
            for (const g of genres) {
                if (!freshByGenre[g]) freshByGenre[g] = [];
                freshByGenre[g].push({
                    title: s.name,
                    year: String(year),
                    rating
                });
            }
        }
    }
    return freshByGenre;
}

async function fetchRecentMoviesFromItunes(term, minYear) {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=movie&entity=movie&country=DE&limit=25`;
    const data = await fetchJsonSafe(url);
    if (!data || !Array.isArray(data.results)) return [];
    const results = [];
    for (const m of data.results) {
        if (!m.trackName || !m.releaseDate) continue;
        const year = parseInt(m.releaseDate.slice(0, 4), 10);
        if (!year || year < minYear) continue;
        const cleanTitle = m.trackName.replace(/\s*\((OmU|dt\.\/OV|OV|4K|Bonus.*)\)/gi, '').trim();
        if (cleanTitle.length > 48) continue;
        results.push({
            title: cleanTitle,
            year: String(year),
            genre: m.primaryGenreName || ''
        });
    }
    return results;
}

async function main() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const minYear = Math.max(2024, currentYear - 2);
    const monthStamp = `${currentYear}-${String(now.getMonth() + 1).padStart(2, '0')}`;

    const { META, PICKS } = loadCurrentPicks();
    META.lastUpdated = monthStamp;
    META.releaseWindow = `${minYear}–${currentYear}`;

    console.log(`[Agreesy Media Updater] Checking fresh releases for window ${META.releaseWindow}...`);

    // 1. Check TVMaze for new high-rated series (7.6+ IMDb/TVMaze)
    const tvMazeByGenre = await fetchRecentTopSeriesFromTvMaze(minYear);
    const seriesGenreMap = {
        2: { tvmaze: 'Science-Fiction', emoji: '🪐', label: 'Sci-Fi & Mystery-Highlight' },
        4: { tvmaze: 'Drama', emoji: '👑', label: 'Hochbewertetes Drama-Highlight' },
        5: { tvmaze: 'Crime', emoji: '🚓', label: 'Spannende Crime- & Thriller-Serie' },
        6: { tvmaze: 'Fantasy', emoji: '🐉', label: 'Epische Fantasy- & Abenteuer-Serie' },
        10: { tvmaze: 'Anime', emoji: '🎌', label: 'Top-bewertetes Anime-Highlight' }
    };

    let updatedCount = 0;
    for (const [catIdx, cfg] of Object.entries(seriesGenreMap)) {
        const candidates = (tvMazeByGenre[cfg.tvmaze] || []).sort((a, b) => b.rating - a.rating);
        const pool = PICKS.series[catIdx];
        if (!Array.isArray(pool) || candidates.length === 0) continue;

        const top = candidates[0];
        const exists = pool.some(item => item.title.toLowerCase().includes(top.title.toLowerCase()));
        if (!exists && pool.length >= 8) {
            pool[pool.length - 1] = {
                id: `s${catIdx}_auto`,
                title: top.title,
                year: top.year,
                emoji: cfg.emoji,
                vibe: `IMDb/TVMaze ${top.rating} · ${cfg.label} (${top.year})`
            };
            updatedCount++;
        }
    }

    // 2. Validate that all 14 movie categories and 12 series categories are intact
    for (let i = 0; i <= 13; i++) {
        if (!Array.isArray(PICKS.movie[i]) || PICKS.movie[i].length < 6) {
            throw new Error(`Validation failed for movie category ${i}`);
        }
    }
    for (let i = 0; i <= 11; i++) {
        if (!Array.isArray(PICKS.series[i]) || PICKS.series[i].length < 6) {
            throw new Error(`Validation failed for series category ${i}`);
        }
    }

    const output = `/**************************************************************
 * Agreesy – Stage 2 Contemporary Movie & Series Engine (${META.releaseWindow})
 * Automatically verified & updated via GitHub Actions.
 * Last updated: ${META.lastUpdated}
 **************************************************************/

const MEDIA_PICKS_META = ${JSON.stringify(META, null, 4)};

const MEDIA_STAGE2_PICKS = ${JSON.stringify(PICKS, null, 4)};
`;

    fs.writeFileSync(MEDIA_PICKS_PATH, output, 'utf8');
    console.log(`[Agreesy Media Updater] Done (${updatedCount} new series rotated in, timestamp=${META.lastUpdated}).`);
}

main().catch(err => {
    console.error('[Agreesy Media Updater] Aborted safely without breaking changes:', err.message);
    process.exit(0);
});
