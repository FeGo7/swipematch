/**************************************************************
 * SwipeMatch – Core Application Logic & Dynamic Shuffle Engine
 * Supports:
 * 1) Dynamic 8-Card Random Pool Sampling & Fisher-Yates Shuffle
 * 2) Classic Sudden-Death Match Mode (mode: 'match')
 * 3) Anti-Match & Fair Chores Split Mode (mode: 'chores')
 * 4) Custom Quick-Deck Creator encoded 100% in URL Hash (#c=...)
 **************************************************************/

const CARDS_PER_ROUND = 8; // Zieht pro Runde 8 zufällige Karten aus großen Pools

let currentLang = 'de';
let currentDeckId = null;
let currentCardIndex = 0;
let activeRoundCards = []; // Die für diese Runde gezogenen & gemischten Karten
let partnerRoundCardIds = null; // Welche Karten-IDs Spieler 1 in seiner Runde hatte
let myLikes = [];          // Card-IDs mit JA-Swipe
let partnerLikes = null;   // null = Spieler 1; Array = Spieler 2
let matchedCard = null;
let timerInterval = null;
let timeLeft = 30;
let selectedCategory = 'all';

// Custom Deck Builder State
let customDeckMode = 'match';
let customOptionCount = 3;

// Chores / Anti-Match Resolution State
let currentChoresSummary = {
    voluntary: [],     // { card, owner: 'p1' | 'p2' | 'both' }
    antiMatches: [],   // { card, assignedTo: null | 'p1' | 'p2' }
    resolved: false
};

const CUSTOM_CARD_GRADIENTS = [
    "from-rose-600 to-orange-500",
    "from-indigo-600 to-blue-500",
    "from-emerald-600 to-teal-500",
    "from-purple-600 to-pink-500",
    "from-amber-500 to-red-500",
    "from-cyan-600 to-sky-500"
];
const CUSTOM_CARD_EMOJIS = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣"];

/**************************************************************
 * 0. HELPERS: UTF-8 BASE64 & FISHER-YATES SHUFFLE
 **************************************************************/
function encodeBase64Utf8(str) {
    return btoa(encodeURIComponent(str));
}

function decodeBase64Utf8(b64) {
    return decodeURIComponent(atob(b64));
}

function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

/**************************************************************
 * 1. INITIALIZATION & LIFECYCLE
 **************************************************************/
window.addEventListener('DOMContentLoaded', () => {
    // 1. Theme-Controller starten
    if (typeof initThemeImmediately === 'function') {
        initThemeImmediately();
    }
    const theme = getPreferredTheme();
    setTheme(theme);

    // 2. Sprache bestimmen (Priorität: Gespeicherte Wahl -> Browser-Systemsprache -> 'de')
    currentLang = detectInitialLanguage();
    setLang(currentLang);

    // 3. Partner-Herausforderung via Hash prüfen (#m=... oder #c=...)
    checkIncomingChallenge();

    // 4. Logo initialisieren & Showcase rendern
    if (typeof setActiveLogo === 'function') {
        setActiveLogo(currentLogoId);
    }

    // 5. Touch-Gesten für mobiles Wischen
    initTouchSwipe();
});

function detectInitialLanguage() {
    const saved = localStorage.getItem('syncswipe_lang');
    if (saved && I18N[saved]) {
        return saved;
    }
    const browserLang = (navigator.language || 'de').slice(0, 2).toLowerCase();
    return I18N[browserLang] ? browserLang : 'de';
}

/**************************************************************
 * 2. URL DECODER & PARTNER-SYNC (0-Byte Backend)
 **************************************************************/
function checkIncomingChallenge() {
    const hash = window.location.hash;

    // FALL 1: Standard-Deck Challenge (#m=deckId:likes:roundPool)
    if (hash && hash.startsWith('#m=')) {
        try {
            const encoded = hash.replace('#m=', '');
            const decodedStr = atob(encoded); // Format: "dinner:0,14,5:14,3,0,19,5,8,11,2"
            const parts = decodedStr.split(':');
            const deckId = parts[0];
            const likesStr = parts[1] || '';
            const poolStr = parts[2] || '';

            if (DECKS[deckId]) {
                currentDeckId = deckId;
                partnerLikes = likesStr ? likesStr.split(',').filter(s => s !== '').map(Number) : [];
                partnerRoundCardIds = poolStr ? poolStr.split(',').filter(s => s !== '').map(Number) : null;

                if (DECKS[deckId].category) {
                    selectedCategory = DECKS[deckId].category;
                }

                const banner = document.getElementById('p2-welcome-banner');
                if (banner) banner.classList.remove('hidden');

                renderCategoryFilter();
                renderDeckList();
                return;
            }
        } catch (e) {
            console.warn("Ungültiger Herausforderungs-Link (#m=)", e);
        }
    }

    // FALL 2: Eigenes Blitz-Deck Challenge (#c=...)
    if (hash && hash.startsWith('#c=')) {
        try {
            const encoded = hash.replace('#c=', '');
            const payload = JSON.parse(decodeBase64Utf8(encoded));
            // payload: { t: title, m: mode, o: [opt1, opt2, ...], l: [0, 2] }
            if (payload && Array.isArray(payload.o) && payload.o.length >= 2) {
                registerCustomDeckInMemory(payload.t, payload.m || 'match', payload.o);
                currentDeckId = 'custom';
                partnerLikes = Array.isArray(payload.l) ? payload.l.map(Number) : [];
                partnerRoundCardIds = null;
                selectedCategory = 'all';

                const banner = document.getElementById('p2-welcome-banner');
                if (banner) banner.classList.remove('hidden');

                renderCategoryFilter();
                renderDeckList();
                return;
            }
        } catch (e) {
            console.warn("Ungültiger Custom-Deck-Link (#c=)", e);
        }
    }

    renderCategoryFilter();
    renderDeckList();
}

/**************************************************************
 * 3. INTERNATIONALIZATION (i18n) & UI TEXT REFRESH
 **************************************************************/
function setLang(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    localStorage.setItem('syncswipe_lang', lang);

    const langBtnLabel = document.getElementById('lang-btn-label');
    if (langBtnLabel) {
        langBtnLabel.innerText = lang.toUpperCase();
    }

    ['de', 'en', 'es'].forEach(code => {
        const opt = document.getElementById(`lang-opt-${code}`);
        if (opt) {
            if (code === lang) {
                opt.className = "w-full text-left px-2.5 py-2 rounded-xl text-xs font-black flex items-center justify-between bg-rose-500/15 text-rose-500 transition";
            } else {
                opt.className = "w-full text-left px-2.5 py-2 rounded-xl text-xs font-bold flex items-center justify-between hover:bg-slate-500/10 transition opacity-80 hover:opacity-100";
            }
        }
    });

    const t = I18N[lang];
    const setText = (id, val) => {
        const el = document.getElementById(id);
        if (el && val !== undefined) el.innerText = val;
    };
    const setHtml = (id, val) => {
        const el = document.getElementById(id);
        if (el && val !== undefined) el.innerHTML = val;
    };

    setText('t-badge', t.badge);
    setHtml('t-hero-title', t.heroTitle);
    setText('t-hero-sub', t.heroSub);
    setText('t-p2-badge', t.p2Badge);
    setText('t-p2-title', t.p2Title);
    setText('t-p2-sub', t.p2Sub);
    setText('t-nope-hint', t.nopeHint);
    setText('t-like-hint', t.likeHint);
    setText('t-share-title', t.shareTitle);
    setText('t-share-sub', t.shareSub);
    setText('t-share-link-label', t.shareLinkLabel);
    setText('t-wa-btn', t.waBtn);
    setText('t-copy-btn', t.copyBtn);
    setText('t-pass-phone', t.passPhone);
    setText('t-match-badge', t.matchBadge);
    setText('t-match-title', t.matchTitle);
    setText('t-match-sub', t.matchSub);
    setText('t-notify-partner', t.notifyPartner);
    setText('btn-continue-swiping', t.continueSwiping);
    setText('t-nomatch-title', t.nomatchTitle);
    setText('t-nomatch-sub', t.nomatchSub);
    setText('t-new-random-round-btn', t.newRandomRoundBtn);
    setText('t-random-pick-btn', t.randomPickBtn);
    setText('t-retry-btn', t.retryBtn);
    setText('t-footer', t.footerText);

    // Custom Deck Creator Texts
    setText('t-custom-btn-title', t.customDeckBtnTitle);
    setText('t-custom-btn-sub', t.customDeckBtnSub);
    setText('t-custom-modal-title', t.customModalTitle);
    setText('t-custom-modal-sub', t.customModalSub);
    setText('t-custom-mode-label', t.customModeLabel);
    setText('t-custom-mode-match', t.customModeMatch);
    setText('t-custom-mode-chores', t.customModeChores);
    setText('t-custom-options-label', t.customOptionsLabel);
    setText('btn-add-custom-option', t.customAddOption);
    setText('t-custom-start-btn', t.customStartBtn);
    setText('t-custom-cancel-btn', t.customCancelBtn);

    const customTitleInput = document.getElementById('custom-deck-title');
    if (customTitleInput) {
        customTitleInput.placeholder = t.customTitlePlaceholder;
    }

    // Chores / Anti-Match Screen Texts
    setText('t-chores-badge', t.choresResultBadge);
    setText('t-chores-title', t.choresResultTitle);
    setText('t-chores-sub', t.choresResultSub);
    setText('t-chores-voluntary-title', t.choresVoluntaryTitle);
    setText('t-chores-antimatch-title', t.choresAntiMatchTitle);
    setText('btn-chores-roulette', t.choresRouletteBtn);
    setText('t-chores-share-wa', t.choresShareWaBtn);
    setText('t-chores-back-btn', t.retryBtn);

    renderCategoryFilter();
    renderDeckList();
    if (typeof renderLogoShowcase === 'function') {
        renderLogoShowcase();
    }

    if (!document.getElementById('screen-game').classList.contains('hidden') && currentDeckId) {
        renderCurrentCard();
    }
    if (!document.getElementById('screen-chores-result').classList.contains('hidden') && currentDeckId) {
        renderChoresSummaryUI();
    }
}

function toggleLangMenu(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById('lang-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

function selectLang(lang) {
    setLang(lang);
    const menu = document.getElementById('lang-menu');
    if (menu) {
        menu.classList.add('hidden');
    }
}

document.addEventListener('click', (e) => {
    const wrapper = document.getElementById('lang-dropdown-wrapper');
    const menu = document.getElementById('lang-menu');
    if (menu && !menu.classList.contains('hidden') && wrapper && !wrapper.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

/**************************************************************
 * 4. KATEGORIEN-FILTER & DECK-LISTE
 **************************************************************/
function renderCategoryFilter() {
    const container = document.getElementById('category-filter');
    if (!container) return;
    container.innerHTML = '';

    CATEGORIES.forEach(cat => {
        const isSelected = (selectedCategory === cat.id);
        const btn = document.createElement('button');
        btn.onclick = () => selectCategory(cat.id);
        btn.className = `px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
            isSelected
                ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md shadow-rose-500/25 scale-105'
                : 'glass opacity-75 hover:opacity-100 dark:text-slate-300 text-slate-700'
        }`;
        btn.innerHTML = `<span>${cat.icon}</span> <span>${cat.label[currentLang] || cat.label.de}</span>`;
        container.appendChild(btn);
    });
}

function selectCategory(catId) {
    selectedCategory = catId;
    renderCategoryFilter();
    renderDeckList();
}

function renderDeckList() {
    const container = document.getElementById('deck-list');
    if (!container) return;
    container.innerHTML = '';
    const t = I18N[currentLang];

    const allDecks = Object.values(DECKS);

    const filteredDecks = allDecks.filter(deck => {
        if (deck.id === 'custom' && currentDeckId !== 'custom') return false;
        if (partnerLikes !== null && currentDeckId === deck.id) return true;
        if (selectedCategory === 'all') return true;
        return deck.category === selectedCategory;
    });

    filteredDecks.sort((a, b) => {
        if (partnerLikes !== null) {
            if (a.id === currentDeckId) return -1;
            if (b.id === currentDeckId) return 1;
        }
        return 0;
    });

    filteredDecks.forEach(deck => {
        const isPartnerDeck = (partnerLikes !== null && currentDeckId === deck.id);
        const dimOtherDecks = (partnerLikes !== null && currentDeckId !== deck.id);
        const isChoresMode = (deck.mode === 'chores');
        const totalPool = deck.cards.length;
        const sampleCount = Math.min(CARDS_PER_ROUND, totalPool);

        const poolText = totalPool > sampleCount
            ? `🔀 ${sampleCount} / ${totalPool} ${t.cardsCountSuffix}`
            : `${totalPool} ${t.cardsCountSuffix}`;

        const modeBadgeHtml = isChoresMode
            ? `<span class="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-500 dark:text-amber-300 border border-amber-500/30 font-extrabold uppercase whitespace-nowrap">🧹 ${t.modeChoreBadge} • ${poolText}</span>`
            : `<span class="text-[10px] px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-500 dark:text-rose-300 font-bold uppercase whitespace-nowrap">${poolText}</span>`;

        const categoryObj = CATEGORIES.find(c => c.id === deck.category);
        const categoryLabel = (categoryObj ? (categoryObj.label[currentLang] || categoryObj.label.de) : deck.category).toUpperCase();

        const cardContainer = document.createElement('div');
        cardContainer.onclick = () => startGame(deck.id);
        cardContainer.className = `w-full p-5 rounded-3xl text-left cursor-pointer transition-all duration-300 transform active:scale-[0.98] relative overflow-hidden group shadow-lg ${
            isPartnerDeck 
                ? 'bg-gradient-to-br ' + deck.gradient + ' ring-4 ring-rose-400/50 shadow-2xl scale-[1.02] text-white' 
                : 'glass hover:border-slate-300/80 dark:hover:border-white/20 hover:shadow-2xl'
        } ${dimOtherDecks ? 'opacity-35 grayscale' : ''}`;

        cardContainer.innerHTML = `
            <!-- Apple Subtle Ambient Gradient Background Accent -->
            <div class="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-gradient-to-tr ${deck.gradient} opacity-10 dark:opacity-20 blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>

            <!-- Top Eyebrow Row -->
            <div class="flex items-center justify-between mb-3 relative z-10">
                <span class="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900/5 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                    ${categoryLabel}
                </span>
                ${isPartnerDeck ? '<span class="text-[10px] bg-white text-slate-950 px-2.5 py-0.5 rounded-full font-black uppercase shadow animate-pulse">⚡ Partner wartet</span>' : modeBadgeHtml}
            </div>

            <!-- Main Content Area -->
            <div class="flex items-start justify-between gap-4 mb-4 relative z-10">
                <div class="flex-1 pr-1">
                    <h3 class="font-extrabold text-lg text-slate-900 dark:text-white leading-snug tracking-tight mb-1 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                        ${deck.title[currentLang] || deck.title.de}
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        ${deck.sub[currentLang] || deck.sub.de}
                    </p>
                </div>
                <div class="w-[52px] h-[52px] rounded-2xl bg-gradient-to-tr ${deck.gradient} flex items-center justify-center text-2xl shadow-lg shadow-black/20 shrink-0 text-white transform group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                    ${deck.icon}
                </div>
            </div>

            <!-- Bottom Action Row (Apple Capsule Pill) -->
            <div class="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-white/5 relative z-10 text-xs">
                <span class="text-[11px] opacity-60 font-semibold">
                    ${isChoresMode ? '💥 Anti-Match & Roulette' : '⏱️ 30s Schnell-Konsens'}
                </span>
                <span class="px-3.5 py-1 rounded-full ${isPartnerDeck ? 'bg-white text-slate-950' : 'bg-slate-900/5 dark:bg-white/10 group-hover:bg-rose-500 group-hover:text-white text-slate-900 dark:text-white'} font-bold transition-all duration-200 flex items-center gap-1">
                    Starten <span>→</span>
                </span>
            </div>
        `;
        container.appendChild(cardContainer);
    });
}

/**************************************************************
 * 4B. CUSTOM QUICK-DECK CREATOR (100% URL-ENCODED)
 **************************************************************/
function openCustomDeckModal() {
    customDeckMode = 'match';
    customOptionCount = 3;
    const titleInput = document.getElementById('custom-deck-title');
    if (titleInput) titleInput.value = '';

    setCustomDeckMode('match');
    renderCustomOptionInputs(['', '', '']);
    showScreen('screen-custom');
}

function setCustomDeckMode(mode) {
    customDeckMode = (mode === 'chores') ? 'chores' : 'match';
    const matchBtn = document.getElementById('custom-mode-match-btn');
    const choresBtn = document.getElementById('custom-mode-chores-btn');
    const matchCheck = document.getElementById('custom-mode-match-check');
    const choresCheck = document.getElementById('custom-mode-chores-check');

    if (customDeckMode === 'match') {
        matchBtn.className = "w-full p-3 rounded-2xl text-left text-xs font-bold border transition flex items-center justify-between bg-rose-500/15 border-rose-500 text-rose-500 dark:text-rose-300";
        choresBtn.className = "w-full p-3 rounded-2xl text-left text-xs font-bold border transition flex items-center justify-between glass border-transparent opacity-75";
        if (matchCheck) matchCheck.innerText = "●";
        if (choresCheck) choresCheck.innerText = "○";
    } else {
        choresBtn.className = "w-full p-3 rounded-2xl text-left text-xs font-bold border transition flex items-center justify-between bg-amber-500/15 border-amber-500 text-amber-500 dark:text-amber-300";
        matchBtn.className = "w-full p-3 rounded-2xl text-left text-xs font-bold border transition flex items-center justify-between glass border-transparent opacity-75";
        if (choresCheck) choresCheck.innerText = "●";
        if (matchCheck) matchCheck.innerText = "○";
    }
}

function renderCustomOptionInputs(existingValues) {
    const container = document.getElementById('custom-options-container');
    if (!container) return;
    container.innerHTML = '';
    const t = I18N[currentLang];

    existingValues.forEach((val, idx) => {
        const row = document.createElement('div');
        row.className = "flex items-center gap-2";
        row.innerHTML = `
            <span class="w-7 text-center text-sm font-extrabold opacity-60">${CUSTOM_CARD_EMOJIS[idx] || '🔹'}</span>
            <input type="text" maxlength="50" value="${val.replace(/"/g, '&quot;')}" placeholder="${t.customOptionPlaceholder} ${idx + 1}" class="custom-opt-input flex-1 glass rounded-xl px-3.5 py-2.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-rose-500 dark:text-white text-slate-900 placeholder:opacity-50">
        `;
        container.appendChild(row);
    });

    const addBtn = document.getElementById('btn-add-custom-option');
    if (addBtn) {
        if (existingValues.length >= 6) {
            addBtn.classList.add('hidden');
        } else {
            addBtn.classList.remove('hidden');
        }
    }
}

function addCustomOptionInput() {
    const inputs = Array.from(document.querySelectorAll('.custom-opt-input')).map(el => el.value);
    if (inputs.length >= 6) return;
    inputs.push('');
    renderCustomOptionInputs(inputs);
}

function registerCustomDeckInMemory(rawTitle, mode, optionsArray) {
    const cleanTitle = (rawTitle && rawTitle.trim()) ? rawTitle.trim() : "Blitz-Entscheidung ⚡";
    const cards = optionsArray.map((optText, idx) => ({
        id: idx,
        emoji: CUSTOM_CARD_EMOJIS[idx] || "✨",
        bg: CUSTOM_CARD_GRADIENTS[idx % CUSTOM_CARD_GRADIENTS.length],
        tag: { de: cleanTitle, en: cleanTitle, es: cleanTitle },
        title: { de: optText, en: optText, es: optText },
        desc: {
            de: mode === 'chores' ? "Rechts = Mach ich! • Links = Bloß nicht!" : "Rechts = Ja, gerne! • Links = Heute nicht",
            en: mode === 'chores' ? "Right = I'll do it! • Left = No way!" : "Right = Hell yes! • Left = Not today",
            es: mode === 'chores' ? "Derecha = ¡Yo lo hago! • Izquierda = ¡Paso!" : "Derecha = ¡Sí! • Izquierda = Hoy no"
        },
        actionLabel: {
            de: "Auf Google suchen",
            en: "Search on Google",
            es: "Buscar en Google"
        },
        actionUrl: `https://www.google.com/search?q=${encodeURIComponent(optText)}`
    }));

    DECKS['custom'] = {
        id: 'custom',
        category: 'all',
        mode: mode === 'chores' ? 'chores' : 'match',
        customMeta: {
            t: cleanTitle,
            m: mode === 'chores' ? 'chores' : 'match',
            o: optionsArray
        },
        icon: "⚡",
        gradient: "from-rose-500 to-orange-500",
        title: { de: cleanTitle, en: cleanTitle, es: cleanTitle },
        sub: {
            de: `Eigenes Blitz-Deck (${optionsArray.length} Optionen)`,
            en: `Custom Quick-Deck (${optionsArray.length} options)`,
            es: `Mazo Personalizado (${optionsArray.length} opciones)`
        },
        cards: cards
    };
}

function startCustomDeck() {
    const rawTitle = document.getElementById('custom-deck-title').value;
    const rawOptions = Array.from(document.querySelectorAll('.custom-opt-input'))
        .map(el => el.value.trim())
        .filter(Boolean);

    if (rawOptions.length < 2) {
        const firstEmpty = document.querySelector('.custom-opt-input');
        if (firstEmpty) firstEmpty.focus();
        return;
    }

    partnerLikes = null;
    partnerRoundCardIds = null;
    window.history.replaceState(null, null, window.location.pathname);
    registerCustomDeckInMemory(rawTitle, customDeckMode, rawOptions);
    startGame('custom');
}

/**************************************************************
 * 5. GAME CONTROLLER, DYNAMIC SHUFFLE SAMPLER & TIMER
 **************************************************************/
function buildActiveRoundCards(deck) {
    if (!deck || !Array.isArray(deck.cards)) return [];

    // FALL 1: Spieler 2 öffnet einen Link mit festgelegtem 8er-Pool von Spieler 1
    if (partnerLikes !== null && Array.isArray(partnerRoundCardIds) && partnerRoundCardIds.length > 0) {
        const subset = partnerRoundCardIds
            .map(id => deck.cards.find(c => c.id === id))
            .filter(Boolean);
        // Auch für Spieler 2 mischen, damit die Reihenfolge spannend bleibt!
        if (subset.length > 0) {
            return shuffleArray(subset);
        }
    }

    // FALL 2: Spieler 1 startet eine neue Runde -> Mische alle Karten im Pool & ziehe bis zu 8 Karten
    const shuffledPool = shuffleArray(deck.cards);
    if (deck.id === 'custom') {
        return shuffledPool;
    }
    return shuffledPool.slice(0, Math.min(CARDS_PER_ROUND, shuffledPool.length));
}

function startGame(deckId) {
    if (partnerLikes !== null && deckId !== currentDeckId) {
        partnerLikes = null;
        partnerRoundCardIds = null;
        window.history.replaceState(null, null, window.location.pathname);
    }
    currentDeckId = deckId;
    const deck = DECKS[currentDeckId];
    if (!deck) return;

    activeRoundCards = buildActiveRoundCards(deck);
    currentCardIndex = 0;
    myLikes = [];
    matchedCard = null;

    showScreen('screen-game');
    renderCurrentCard();
    startTimer();
}

// Zieht aus demselben Deck sofort 8 komplett neue Zufalls-Karten (für Spieler 1)
function startFreshShuffleRound() {
    if (!currentDeckId || !DECKS[currentDeckId]) {
        resetToHome();
        return;
    }
    partnerLikes = null;
    partnerRoundCardIds = null;
    window.history.replaceState(null, null, window.location.pathname);
    const banner = document.getElementById('p2-welcome-banner');
    if (banner) banner.classList.add('hidden');
    startGame(currentDeckId);
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    updateTimerUI();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishSwipingRound();
        }
    }, 1000);
}

function updateTimerUI() {
    const display = document.getElementById('timer-display');
    const bar = document.getElementById('timer-bar');
    if (display) display.innerText = timeLeft;
    if (bar) {
        const pct = Math.max(0, (timeLeft / 30) * 100);
        bar.style.width = pct + '%';
    }
}

function renderCurrentCard() {
    const deck = DECKS[currentDeckId];
    if (!deck || !activeRoundCards.length) return;
    const card = activeRoundCards[currentCardIndex];
    if (!card) return;
    const t = I18N[currentLang];
    const isChoresMode = (deck.mode === 'chores');

    const progressEl = document.getElementById('game-progress-text');
    if (progressEl) {
        progressEl.innerText = `${t.cardWord} ${currentCardIndex + 1} / ${activeRoundCards.length}`;
    }

    const modePill = document.getElementById('game-mode-pill');
    if (modePill) {
        if (isChoresMode) {
            modePill.innerText = `🧹 ${t.modeChoreBadge}`;
            modePill.className = "text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-extrabold uppercase";
        } else {
            modePill.innerText = `${t.shuffleBadge} (${deck.cards.length} ${t.cardsCountSuffix})`;
            modePill.className = "text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-extrabold uppercase";
        }
    }

    const nopeHintEl = document.getElementById('t-nope-hint');
    const likeHintEl = document.getElementById('t-like-hint');
    const yesBtnEl = document.getElementById('btn-swipe-yes');
    if (nopeHintEl && likeHintEl) {
        nopeHintEl.innerText = isChoresMode ? t.choreNopeHint : t.nopeHint;
        likeHintEl.innerText = isChoresMode ? t.choreLikeHint : t.likeHint;
    }
    if (yesBtnEl) {
        yesBtnEl.innerText = isChoresMode ? "💪" : "❤️";
    }

    const cardEl = document.getElementById('active-card');
    if (cardEl) {
        cardEl.style.transform = '';
        cardEl.style.transition = '';
        cardEl.style.opacity = '1';
        cardEl.style.boxShadow = '';
        cardEl.className = `w-full h-96 rounded-3xl p-6 flex flex-col justify-between items-center text-center shadow-2xl border border-white/20 relative overflow-hidden card-enter bg-gradient-to-br ${card.bg} text-white`;
    }

    document.getElementById('card-tag').innerText = card.tag[currentLang] || card.tag.de;
    document.getElementById('card-emoji').innerText = card.emoji;
    document.getElementById('card-title').innerText = card.title[currentLang] || card.title.de;
    document.getElementById('card-desc').innerText = card.desc[currentLang] || card.desc.de;
}

/**************************************************************
 * 6. SWIPE ACTIONS, SUDDEN-DEATH MATCH & ANTI-MATCH ENGINE
 **************************************************************/
function handleSwipe(isLike) {
    const deck = DECKS[currentDeckId];
    if (!deck || !activeRoundCards.length) return;
    const card = activeRoundCards[currentCardIndex];
    if (!card) return;
    const cardEl = document.getElementById('active-card');

    if (cardEl) {
        cardEl.classList.remove('card-enter');
        cardEl.classList.add(isLike ? 'swipe-right' : 'swipe-left');
    }

    if (isLike) {
        myLikes.push(card.id);

        // SUDDEN DEATH CHECK (Nur im klassischen Match-Modus! Im Chores-Modus werden alle 8 gezogenen Karten durchgegangen)
        if (deck.mode !== 'chores' && partnerLikes !== null && partnerLikes.includes(card.id)) {
            clearInterval(timerInterval);
            setTimeout(() => {
                triggerMatchScreen(card);
            }, 220);
            return;
        }
    }

    setTimeout(() => {
        currentCardIndex++;
        if (currentCardIndex < activeRoundCards.length) {
            renderCurrentCard();
        } else {
            clearInterval(timerInterval);
            finishSwipingRound();
        }
    }, 220);
}

function finishSwipingRound() {
    const deck = DECKS[currentDeckId];
    if (!deck) return;

    // FALL A: Spieler 1 ist fertig -> Geheim-Link generieren (inkl. den gezogenen 8 Karten-IDs!)
    if (partnerLikes === null) {
        const baseUrl = window.location.origin + window.location.pathname;
        let shareUrl = '';
        const roundIds = activeRoundCards.map(c => c.id);

        if (currentDeckId === 'custom' && deck.customMeta) {
            const payload = {
                t: deck.customMeta.t,
                m: deck.customMeta.m,
                o: deck.customMeta.o,
                l: myLikes
            };
            shareUrl = `${baseUrl}#c=${encodeBase64Utf8(JSON.stringify(payload))}`;
        } else {
            // Format: deckId:likedIds:roundCardIds
            const encodedPayload = btoa(`${currentDeckId}:${myLikes.join(',')}:${roundIds.join(',')}`);
            shareUrl = `${baseUrl}#m=${encodedPayload}`;
        }

        document.getElementById('share-url-input').value = shareUrl;
        showScreen('screen-share');
        return;
    }

    // FALL B: Spieler 2 ist fertig im Chores / Anti-Match Modus -> Auswertungs- & Roulette-Screen zeigen
    if (deck.mode === 'chores') {
        triggerChoresResultScreen();
        return;
    }

    // FALL C: Spieler 2 ist fertig im Match-Modus ohne gemeinsamen Treffer
    showScreen('screen-nomatch');
}

function triggerMatchScreen(card) {
    matchedCard = card;
    showScreen('screen-match');

    if (typeof confetti === 'function') {
        confetti({
            particleCount: 90,
            spread: 75,
            origin: { y: 0.6 }
        });
    }

    const winnerCardEl = document.getElementById('winner-card');
    if (winnerCardEl) {
        winnerCardEl.className = `w-full rounded-3xl p-6 mb-6 flex flex-col items-center text-center shadow-2xl border border-white/20 bg-gradient-to-br ${card.bg} text-white`;
    }
    document.getElementById('winner-emoji').innerText = card.emoji;
    document.getElementById('winner-title').innerText = card.title[currentLang] || card.title.de;
    document.getElementById('winner-desc').innerText = card.desc[currentLang] || card.desc.de;

    const actionBtn = document.getElementById('winner-action-btn');
    if (actionBtn) {
        actionBtn.href = card.actionUrl;
        document.getElementById('winner-action-text').innerText = card.actionLabel[currentLang] || card.actionLabel.de;
    }

    const continueBtn = document.getElementById('btn-continue-swiping');
    if (continueBtn) {
        if (currentCardIndex + 1 < activeRoundCards.length) {
            continueBtn.classList.remove('hidden');
        } else {
            continueBtn.classList.add('hidden');
        }
    }
}

function continueSwiping() {
    currentCardIndex++;
    if (currentCardIndex < activeRoundCards.length) {
        showScreen('screen-game');
        renderCurrentCard();
        startTimer();
    } else {
        showScreen('screen-nomatch');
    }
}

// Schicksals-Wurf (Tie-Breaker bei 0 Matches)
function pickRandomCardFallback() {
    const deck = DECKS[currentDeckId];
    if (!deck || !deck.cards.length) return;

    const basePool = activeRoundCards.length > 0 ? activeRoundCards : deck.cards;
    const combinedIds = Array.from(new Set([...(partnerLikes || []), ...myLikes]));
    const likedPool = combinedIds.length > 0
        ? basePool.filter(c => combinedIds.includes(c.id))
        : [];

    const finalPool = likedPool.length > 0 ? likedPool : basePool;
    const randomCard = finalPool[Math.floor(Math.random() * finalPool.length)] || deck.cards[0];
    triggerMatchScreen(randomCard);
}

/**************************************************************
 * 6B. CHORES & ANTI-MATCH ENGINE (Haushalt / Wer ist dran?)
 **************************************************************/
function triggerChoresResultScreen() {
    const deck = DECKS[currentDeckId];
    if (!deck) return;

    const evaluatedCards = activeRoundCards.length > 0 ? activeRoundCards : deck.cards;
    const voluntary = [];
    const antiMatches = [];

    evaluatedCards.forEach(card => {
        const p1Liked = partnerLikes && partnerLikes.includes(card.id);
        const p2Liked = myLikes.includes(card.id);

        if (p1Liked && p2Liked) {
            voluntary.push({ card, owner: 'both' });
        } else if (p1Liked) {
            voluntary.push({ card, owner: 'p1' });
        } else if (p2Liked) {
            voluntary.push({ card, owner: 'p2' });
        } else {
            // Beide haben NEIN gewischt -> ANTI-MATCH!
            antiMatches.push({ card, assignedTo: null });
        }
    });

    currentChoresSummary = {
        voluntary,
        antiMatches,
        resolved: antiMatches.length === 0
    };

    showScreen('screen-chores-result');
    renderChoresSummaryUI();

    if (antiMatches.length === 0 && typeof confetti === 'function') {
        confetti({ particleCount: 70, spread: 65, origin: { y: 0.6 } });
    }
}

function renderChoresSummaryUI() {
    const t = I18N[currentLang];
    const volListEl = document.getElementById('chores-voluntary-list');
    const antiListEl = document.getElementById('chores-antimatch-list');
    const rouletteBtn = document.getElementById('btn-chores-roulette');

    if (!volListEl || !antiListEl) return;
    volListEl.innerHTML = '';
    antiListEl.innerHTML = '';

    // 1. Freiwillige Aufgaben rendern
    if (currentChoresSummary.voluntary.length === 0) {
        volListEl.innerHTML = `<div class="opacity-60 italic py-1">–</div>`;
    } else {
        currentChoresSummary.voluntary.forEach(item => {
            const title = item.card.title[currentLang] || item.card.title.de;
            let badgeText = t.choresBothWant;
            let badgeClass = "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
            if (item.owner === 'p1') {
                badgeText = `💪 ${t.choresPlayer1}`;
                badgeClass = "bg-indigo-500/20 text-indigo-300 border-indigo-500/30";
            } else if (item.owner === 'p2') {
                badgeText = `💪 ${t.choresPlayer2}`;
                badgeClass = "bg-teal-500/20 text-teal-300 border-teal-500/30";
            }

            const row = document.createElement('div');
            row.className = "flex items-center justify-between gap-2 p-2 rounded-xl bg-black/10 dark:bg-white/5";
            row.innerHTML = `
                <div class="flex items-center gap-2 font-bold">
                    <span class="text-base">${item.card.emoji}</span>
                    <span>${title}</span>
                </div>
                <span class="text-[10px] px-2 py-0.5 rounded-full border font-extrabold whitespace-nowrap ${badgeClass}">${badgeText}</span>
            `;
            volListEl.appendChild(row);
        });
    }

    // 2. Anti-Matches rendern
    if (currentChoresSummary.antiMatches.length === 0) {
        antiListEl.innerHTML = `<div class="text-emerald-400 font-bold py-1">${t.choresNoAntiMatch}</div>`;
        if (rouletteBtn) rouletteBtn.classList.add('hidden');
    } else {
        currentChoresSummary.antiMatches.forEach(item => {
            const title = item.card.title[currentLang] || item.card.title.de;
            let statusHtml = `<span class="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/25 text-rose-300 font-extrabold whitespace-nowrap">💥 Anti-Match</span>`;

            if (item.assignedTo === 'p1') {
                statusHtml = `<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/25 text-amber-300 font-extrabold whitespace-nowrap">${t.choresAssignedToP1}</span>`;
            } else if (item.assignedTo === 'p2') {
                statusHtml = `<span class="text-[10px] px-2 py-0.5 rounded-full bg-rose-500 text-white font-extrabold whitespace-nowrap">${t.choresAssignedToP2}</span>`;
            }

            const row = document.createElement('div');
            row.className = "flex items-center justify-between gap-2 p-2 rounded-xl bg-black/15 dark:bg-white/5";
            row.innerHTML = `
                <div class="flex items-center gap-2 font-bold">
                    <span class="text-base">${item.card.emoji}</span>
                    <span>${title}</span>
                </div>
                ${statusHtml}
            `;
            antiListEl.appendChild(row);
        });

        if (rouletteBtn) {
            if (currentChoresSummary.resolved) {
                rouletteBtn.innerText = t.choresRouletteDone;
                rouletteBtn.className = "w-full py-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-extrabold text-xs cursor-default";
            } else {
                rouletteBtn.classList.remove('hidden');
                rouletteBtn.innerText = t.choresRouletteBtn;
                rouletteBtn.className = "w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 text-white font-extrabold text-xs shadow-lg shadow-rose-500/25 transition active:scale-95";
            }
        }
    }
}

function resolveChoresAntiMatches() {
    if (!currentChoresSummary.antiMatches.length) return;

    let nextPlayer = Math.random() < 0.5 ? 'p1' : 'p2';
    const indices = currentChoresSummary.antiMatches.map((_, idx) => idx).sort(() => Math.random() - 0.5);

    indices.forEach(idx => {
        currentChoresSummary.antiMatches[idx].assignedTo = nextPlayer;
        nextPlayer = (nextPlayer === 'p1') ? 'p2' : 'p1';
    });

    currentChoresSummary.resolved = true;
    renderChoresSummaryUI();

    if (typeof confetti === 'function') {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
}

function shareChoresPlanViaWhatsApp() {
    if (!currentChoresSummary.resolved && currentChoresSummary.antiMatches.length > 0) {
        resolveChoresAntiMatches();
    }

    const t = I18N[currentLang];
    const lines = [t.waChoresSummaryHeader, ""];

    currentChoresSummary.voluntary.forEach(item => {
        const title = item.card.title[currentLang] || item.card.title.de;
        const who = item.owner === 'p1' ? t.choresPlayer1 : (item.owner === 'p2' ? t.choresPlayer2 : t.choresBothWant);
        lines.push(`✅ ${item.card.emoji} *${title}*: ${who}`);
    });

    currentChoresSummary.antiMatches.forEach(item => {
        const title = item.card.title[currentLang] || item.card.title.de;
        const who = item.assignedTo === 'p1' ? t.choresPlayer1 : t.choresPlayer2;
        lines.push(`🎲 ${item.card.emoji} *${title}* (Ausgelost): ${who}`);
    });

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

/**************************************************************
 * 7. SHARING & HELPERS
 **************************************************************/
function copyShareLink() {
    const input = document.getElementById('share-url-input');
    input.select();
    navigator.clipboard.writeText(input.value);
    const t = I18N[currentLang];
    document.getElementById('t-copy-btn').innerText = t.copiedBtn;
}

function shareViaWhatsApp() {
    const url = document.getElementById('share-url-input').value;
    const t = I18N[currentLang];
    const text = encodeURIComponent(`${t.waChallengeText}\n${url}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function sendWinnerToPartner() {
    if (!matchedCard) return;
    const t = I18N[currentLang];
    const title = matchedCard.title[currentLang] || matchedCard.title.de;
    const text = encodeURIComponent(`${t.waWinnerText} ${matchedCard.emoji} *${title}*!`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function simulatePartnerRightHere() {
    const url = document.getElementById('share-url-input').value;
    window.location.hash = url.split('#')[1];
    checkIncomingChallenge();
    showScreen('screen-home');
}

function resetToHome() {
    clearInterval(timerInterval);
    partnerLikes = null;
    partnerRoundCardIds = null;
    currentDeckId = null;
    activeRoundCards = [];
    window.history.replaceState(null, null, window.location.pathname);
    const banner = document.getElementById('p2-welcome-banner');
    if (banner) banner.classList.add('hidden');
    renderDeckList();
    showScreen('screen-home');
}

function showScreen(screenId) {
    [
        'screen-home',
        'screen-custom',
        'screen-game',
        'screen-share',
        'screen-match',
        'screen-nomatch',
        'screen-chores-result'
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById(screenId);
    if (target) target.classList.remove('hidden');
}

/**************************************************************
 * 8. TOUCH SWIPE GESTURES (Apple Fluid Physics & Dynamic Drag)
 **************************************************************/
function initTouchSwipe() {
    const cardEl = document.getElementById('active-card');
    if (!cardEl) return;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let isDragging = false;

    cardEl.addEventListener('touchstart', (e) => {
        if (!e.touches || e.touches.length === 0) return;
        startX = e.touches[0].screenX;
        startY = e.touches[0].screenY;
        currentX = startX;
        isDragging = true;
        cardEl.style.transition = 'none';
    }, { passive: true });

    cardEl.addEventListener('touchmove', (e) => {
        if (!isDragging || !e.touches || e.touches.length === 0) return;
        currentX = e.touches[0].screenX;
        const currentY = e.touches[0].screenY;
        const dx = currentX - startX;
        const dy = currentY - startY;

        // Apple fluid rotation & translation
        const rotation = (dx * 0.07).toFixed(2);
        cardEl.style.transform = `translate3d(${dx}px, ${dy * 0.25}px, 0) rotate(${rotation}deg)`;

        // Tactile glow feedback
        if (dx > 25) {
            cardEl.style.boxShadow = `0 20px 45px rgba(16, 185, 129, ${Math.min(0.45, dx / 200)})`;
        } else if (dx < -25) {
            cardEl.style.boxShadow = `0 20px 45px rgba(244, 63, 94, ${Math.min(0.45, Math.abs(dx) / 200)})`;
        } else {
            cardEl.style.boxShadow = '';
        }
    }, { passive: true });

    cardEl.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        const dx = currentX - startX;

        if (Math.abs(dx) > 65) {
            // Apple spring exit animation
            cardEl.style.transition = 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.28s ease';
            cardEl.style.transform = dx > 0 
                ? 'translate3d(120vw, 20px, 0) rotate(22deg)' 
                : 'translate3d(-120vw, 20px, 0) rotate(-22deg)';
            cardEl.style.opacity = '0';
            setTimeout(() => {
                cardEl.style.transition = '';
                cardEl.style.transform = '';
                cardEl.style.opacity = '1';
                cardEl.style.boxShadow = '';
                handleSwipe(dx > 0);
            }, 250);
        } else {
            // Spring bounce back to center
            cardEl.style.transition = 'transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease';
            cardEl.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
            cardEl.style.boxShadow = '';
            setTimeout(() => {
                cardEl.style.transition = '';
            }, 350);
        }
    }, { passive: true });
}

/**************************************************************
 * 9. LEGAL MODALS (Impressum & Datenschutz)
 **************************************************************/
function openLegalModal(type) {
    const modal = document.getElementById('modal-legal');
    const titleEl = document.getElementById('legal-modal-title');
    const contentEl = document.getElementById('legal-modal-content');
    if (!modal || !titleEl || !contentEl) return;

    if (type === 'impressum') {
        titleEl.innerText = currentLang === 'de' ? 'Impressum' : (currentLang === 'es' ? 'Aviso Legal' : 'Legal Notice / Imprint');
        contentEl.innerHTML = `
            <div>
                <h4 class="font-bold text-white mb-1">Angaben gemäß § 5 TMG / DDG:</h4>
                <p>Felix Gooßens<br>
                E-Mail: <a href="mailto:felix.goossens@aol.com" class="text-amber-400 underline">felix.goossens@aol.com</a><br>
                Webseite: <a href="https://swipematch-128.pages.dev" class="text-amber-400 underline">swipematch-128.pages.dev</a></p>
            </div>
            <div>
                <h4 class="font-bold text-white mb-1">Verantwortlich für den Inhalt:</h4>
                <p>Felix Gooßens</p>
            </div>
            <div>
                <h4 class="font-bold text-white mb-1">Haftung für Inhalte & Links:</h4>
                <p>Die Inhalte dieser Web-App wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Für externe Links zu Webseiten Dritter übernehmen wir keine Haftung; für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>
            </div>
            <div>
                <h4 class="font-bold text-white mb-1">Affiliate- & Werbehinweis:</h4>
                <p>Diese Web-App enthält sogenannte Affiliate-Links (u. a. zu Amazon und Partnershops über Netzwerke wie Skimlinks). Wenn Sie über einen dieser Links einen Kauf oder eine Bestellung tätigen, erhalten wir gegebenenfalls eine geringe Provision. Für Sie entstehen dadurch keinerlei Mehrkosten.</p>
            </div>
        `;
    } else {
        titleEl.innerText = currentLang === 'de' ? 'Datenschutzerklärung' : (currentLang === 'es' ? 'Política de Privacidad' : 'Privacy Policy');
        contentEl.innerHTML = `
            <div>
                <h4 class="font-bold text-white mb-1">1. Datenschutz auf einen Blick</h4>
                <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Anwendung folgt dem Grundsatz der Datensparsamkeit („Zero-Server Engine“): Wir erfassen und speichern keine personenbezogenen Daten auf eigenen Servern.</p>
            </div>
            <div>
                <h4 class="font-bold text-white mb-1">2. Verantwortliche Stelle</h4>
                <p>Felix Gooßens<br>
                E-Mail: <a href="mailto:felix.goossens@aol.com" class="text-amber-400 underline">felix.goossens@aol.com</a></p>
            </div>
            <div>
                <h4 class="font-bold text-white mb-1">3. Funktionsweise & Lokale Speicherung</h4>
                <p>Die Auswahl Ihrer Spielkarten und Präferenzen verbleibt rein clientseitig in Ihrem Browser. Zur Synchronisation mit Ihrem Spielpartner wird der Spielstand kryptografisch Base64-kodiert im URL-Fragment (#m=...) abgelegt und direkt via WhatsApp/Link geteilt. Es findet keine serverseitige Speicherung statt.</p>
            </div>
            <div>
                <h4 class="font-bold text-white mb-1">4. Hosting & Content Delivery Network (CDN)</h4>
                <p>Diese Web-App wird über Cloudflare Pages (Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107, USA) gehostet. Beim Aufruf der Seite werden technisch notwendige Server-Logfiles verarbeitet.</p>
            </div>
            <div>
                <h4 class="font-bold text-white mb-1">5. Externe Links & Partnernetzwerke</h4>
                <p>Wenn Sie auf externe Partner-Links (z. B. Amazon, Lieferando, Google Maps) klicken, verlassen Sie unsere Anwendung. Für die Datenverarbeitung auf den Zielseiten gelten die Datenschutzbestimmungen der jeweiligen Anbieter.</p>
            </div>
        `;
    }

    modal.classList.remove('hidden');
}

function closeLegalModal() {
    const modal = document.getElementById('modal-legal');
    if (modal) modal.classList.add('hidden');
}
