/**************************************************************
 * SwipeMatch – Saubere, meisterhafte Logo-Konzepte
 **************************************************************/

const LOGO_VARIANTS = {
    checkCards: {
        id: 'checkCards',
        title: { de: '1. Swipe-Karten mit Match-Haken (Favorit)', en: '1. Swipe Cards + Match Check', es: '1. Cartas Swipe + Check' },
        desc: { de: 'Zwei cleane, abgerundete Karten in Wisch-Bewegung mit einem satten Haken im Zentrum: Entscheidung getroffen!', en: 'Two clean, rounded swipe cards with a bold checkmark badge in the center: Decision made!', es: 'Dos cartas limpias en movimiento de swipe con un check central: ¡Decisión tomada!' },
        svgSmall: `
            <svg viewBox="0 0 36 36" fill="none" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <!-- Hintere Karte (nach links geneigt) -->
                <rect x="7" y="9" width="16" height="21" rx="3.5" transform="rotate(-14 7 9)" fill="white" fill-opacity="0.35" stroke="white" stroke-width="1.2"/>
                <!-- Vordere Karte (nach rechts gewischt - Swipe Right = JA) -->
                <rect x="15" y="6" width="16" height="21" rx="3.5" transform="rotate(14 15 6)" fill="white" fill-opacity="0.95" stroke="white" stroke-width="1.2"/>
                <!-- Klarer, zentrierter Match-Check-Badge -->
                <circle cx="21" cy="18" r="6" fill="#10B981" stroke="white" stroke-width="1.5"/>
                <path d="M18.2 18.2L20.2 20.2L24 16.2" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        svgLarge: `
            <svg viewBox="0 0 48 48" fill="none" class="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="12" width="22" height="28" rx="4.5" transform="rotate(-14 9 12)" fill="white" fill-opacity="0.35" stroke="white" stroke-width="1.5"/>
                <rect x="20" y="8" width="22" height="28" rx="4.5" transform="rotate(14 20 8)" fill="white" fill-opacity="0.95" stroke="white" stroke-width="1.5"/>
                <circle cx="28" cy="24" r="8.5" fill="#10B981" stroke="white" stroke-width="2"/>
                <path d="M24 24L27 27L32.5 21" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `
    },
    puzzleSnap: {
        id: 'puzzleSnap',
        title: { de: '2. Echtes 2-Teile-Puzzle (Das perfekte Match)', en: '2. 2-Piece Puzzle Snap (The Match)', es: '2. Puzzle de 2 Piezas (El Match)' },
        desc: { de: 'Zwei echte, perfekt gezeichnete Puzzleteile, die nahtlos ineinandergleiten: Zwei Meinungen ergeben ein Ganzes.', en: 'Two iconic puzzle pieces sliding together seamlessly: Two inputs forming one clear decision.', es: 'Dos piezas de puzzle que encajan a la perfección formando una sola decisión.' },
        svgSmall: `
            <svg viewBox="0 0 36 36" fill="none" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <!-- Linkes Puzzleteil (mit Aussparung) -->
                <path d="M6 10C6 7.8 7.8 6 10 6H18V13.5C16 13.5 14.5 15 14.5 17C14.5 19 16 20.5 18 20.5V28H10C7.8 28 6 26.2 6 24V10Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="1.2"/>
                <!-- Rechtes Puzzleteil (mit passender Nase, gleitet hinein) -->
                <path d="M30 12C30 9.8 28.2 8 26 8H19.5V14.5C21.5 14.5 23 16 23 18C23 20 21.5 21.5 19.5 21.5V30H26C28.2 30 30 28.2 30 26V12Z" fill="white" stroke="white" stroke-width="1.2"/>
                <!-- Zentraler Klick-Funke / Match-Punkt -->
                <circle cx="18.8" cy="17.5" r="2.2" fill="#10B981"/>
            </svg>
        `,
        svgLarge: `
            <svg viewBox="0 0 48 48" fill="none" class="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 13C8 10.2 10.2 8 13 8H23V18C20.5 18 18.5 20 18.5 22.5C18.5 25 20.5 27 23 27V38H13C10.2 38 8 35.8 8 33V13Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="1.5"/>
                <path d="M40 15C40 12.2 37.8 10 35 10H25.5V19.5C28 19.5 30 21.5 30 24C30 26.5 28 28.5 25.5 28.5V40H35C37.8 40 40 37.8 40 35V15Z" fill="white" stroke="white" stroke-width="1.5"/>
                <circle cx="24.2" cy="23.5" r="3.2" fill="#10B981"/>
            </svg>
        `
    },
    intersectionTarget: {
        id: 'intersectionTarget',
        title: { de: '3. Schnittmengen-Treffer (Venn-Karten)', en: '3. Overlap Target (Venn Cards)', es: '3. Intersección de Cartas' },
        desc: { de: 'Zwei geometrisch klare Karten, die sich kreuzen: Genau in der Mitte (Schnittmenge) leuchtet das Match.', en: 'Two geometric cards crossing: Right in the sweet spot overlap shines the mutual match.', es: 'Dos cartas geométricas que se cruzan revelando la coincidencia exacta.' },
        svgSmall: `
            <svg viewBox="0 0 36 36" fill="none" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <!-- Karte links oben nach rechts unten -->
                <rect x="8" y="10" width="16" height="20" rx="3.5" transform="rotate(-15 8 10)" fill="white" fill-opacity="0.35" stroke="white" stroke-width="1.2"/>
                <!-- Karte rechts oben nach links unten -->
                <rect x="14" y="6" width="16" height="20" rx="3.5" transform="rotate(15 14 6)" fill="white" fill-opacity="0.8" stroke="white" stroke-width="1.2"/>
                <!-- Schnittpunkt / Treffer-Target -->
                <circle cx="19.5" cy="17.5" r="5" fill="#10B981" stroke="white" stroke-width="1.5"/>
                <circle cx="19.5" cy="17.5" r="2" fill="white"/>
            </svg>
        `,
        svgLarge: `
            <svg viewBox="0 0 48 48" fill="none" class="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="13" width="22" height="27" rx="4.5" transform="rotate(-15 10 13)" fill="white" fill-opacity="0.35" stroke="white" stroke-width="1.5"/>
                <rect x="19" y="8" width="22" height="27" rx="4.5" transform="rotate(15 19 8)" fill="white" fill-opacity="0.8" stroke="white" stroke-width="1.5"/>
                <circle cx="26" cy="23.5" r="7.5" fill="#10B981" stroke="white" stroke-width="2"/>
                <circle cx="26" cy="23.5" r="3" fill="white"/>
            </svg>
        `
    }
};

let currentLogoId = localStorage.getItem('swipematch_logo') || 'puzzleSnap';

function getActiveLogo() {
    return LOGO_VARIANTS[currentLogoId] || LOGO_VARIANTS.puzzleSnap;
}

function setActiveLogo(logoId) {
    if (!LOGO_VARIANTS[logoId]) {
        logoId = 'puzzleSnap';
    }
    currentLogoId = logoId;
    localStorage.setItem('swipematch_logo', logoId);

    // Header-Icon sofort aktualisieren
    const headerIconEl = document.getElementById('header-logo-icon');
    if (headerIconEl) {
        headerIconEl.innerHTML = LOGO_VARIANTS[logoId].svgSmall;
    }

    // Showcase-Selektor aktualisieren
    renderLogoShowcase();
}

function cycleNextLogo() {
    const keys = Object.keys(LOGO_VARIANTS);
    const nextIdx = (keys.indexOf(currentLogoId) + 1) % keys.length;
    setActiveLogo(keys[nextIdx]);
}

function renderLogoShowcase() {
    const container = document.getElementById('logo-showcase-container');
    if (!container) return;

    container.innerHTML = '';
    Object.values(LOGO_VARIANTS).forEach(v => {
        const isSelected = (v.id === currentLogoId);
        const card = document.createElement('div');
        card.onclick = () => setActiveLogo(v.id);
        card.className = `p-4 rounded-2xl glass cursor-pointer transition transform active:scale-95 flex flex-col items-center text-center border ${
            isSelected
                ? 'border-emerald-500/80 ring-2 ring-emerald-500/30 bg-emerald-500/10 scale-102'
                : 'border-white/10 hover:border-white/20'
        }`;

        card.innerHTML = `
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-500 to-orange-500 flex items-center justify-center shadow-lg shadow-rose-500/30 mb-3">
                ${v.svgLarge}
            </div>
            <h4 class="font-extrabold text-sm mb-1 text-slate-900 dark:text-white flex items-center gap-1.5">
                ${v.title[currentLang] || v.title.de}
                ${isSelected ? '<span class="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold">Aktiv</span>' : ''}
            </h4>
            <p class="text-xs opacity-70 leading-relaxed">${v.desc[currentLang] || v.desc.de}</p>
        `;
        container.appendChild(card);
    });
}
