/**************************************************************
 * EasyAgree – Clean Apple-style Iconography & Logo Concepts
 **************************************************************/

const LOGO_VARIANTS = {
    checkCards: {
        id: 'checkCards',
        title: { de: '1. Konsens-Karten (Apple Style)', en: '1. Consensus Cards', es: '1. Cartas de Consenso' },
        desc: { de: 'Zwei überlappende Karten mit dezentem Apple-Blau-Akzent: Sofortige Einigung.', en: 'Two overlapping cards with subtle Apple blue accent: Instant alignment.', es: 'Dos cartas con acento azul Apple: Acuerdo inmediato.' },
        svgSmall: `
            <svg viewBox="0 0 36 36" fill="none" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <rect x="7" y="9" width="16" height="21" rx="3.5" transform="rotate(-12 7 9)" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.2"/>
                <rect x="15" y="6" width="16" height="21" rx="3.5" transform="rotate(12 15 6)" fill="currentColor" fill-opacity="0.95" stroke="currentColor" stroke-width="1.2"/>
                <circle cx="21" cy="18" r="5" fill="#0071E3"/>
                <path d="M19 18L20.5 19.5L23.5 16.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        svgLarge: `
            <svg viewBox="0 0 48 48" fill="none" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="12" width="22" height="28" rx="4.5" transform="rotate(-12 9 12)" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
                <rect x="20" y="8" width="22" height="28" rx="4.5" transform="rotate(12 20 8)" fill="currentColor" fill-opacity="0.95" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="28" cy="24" r="7" fill="#0071E3"/>
                <path d="M25 24L27 26L31.5 21.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `
    },
    puzzleSnap: {
        id: 'puzzleSnap',
        title: { de: '2. Puzzle Match', en: '2. Puzzle Match', es: '2. Puzzle Match' },
        desc: { de: 'Zwei Puzzleteile, die nahtlos ineinandergleiten: Zwei Meinungen, ein klares Ergebnis.', en: 'Two puzzle pieces clicking together: Two inputs, one clear decision.', es: 'Dos piezas encajando: Dos opiniones, una sola decisión.' },
        svgSmall: `
            <svg viewBox="0 0 36 36" fill="none" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10C6 7.8 7.8 6 10 6H18V13.5C16 13.5 14.5 15 14.5 17C14.5 19 16 20.5 18 20.5V28H10C7.8 28 6 26.2 6 24V10Z" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
                <path d="M30 12C30 9.8 28.2 8 26 8H19.5V14.5C21.5 14.5 23 16 23 18C23 20 21.5 21.5 19.5 21.5V30H26C28.2 30 30 28.2 30 26V12Z" fill="currentColor" stroke="currentColor" stroke-width="1.2"/>
                <circle cx="18.8" cy="17.5" r="2.2" fill="#0071E3"/>
            </svg>
        `,
        svgLarge: `
            <svg viewBox="0 0 48 48" fill="none" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 13C8 10.2 10.2 8 13 8H23V18C20.5 18 18.5 20 18.5 22.5C18.5 25 20.5 27 23 27V38H13C10.2 38 8 35.8 8 33V13Z" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
                <path d="M40 15C40 12.2 37.8 10 35 10H25.5V19.5C28 19.5 30 21.5 30 24C30 26.5 28 28.5 25.5 28.5V40H35C37.8 40 40 37.8 40 35V15Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="24.2" cy="23.5" r="3" fill="#0071E3"/>
            </svg>
        `
    },
    intersectionTarget: {
        id: 'intersectionTarget',
        title: { de: '3. Schnittmenge (Overlap)', en: '3. Overlap', es: '3. Intersección' },
        desc: { de: 'Minimalistische Geometrie: Der Trefferpunkt im Zentrum.', en: 'Minimal geometric intersection: Alignment in the center.', es: 'Intersección geométrica limpia.' },
        svgSmall: `
            <svg viewBox="0 0 36 36" fill="none" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="10" width="16" height="20" rx="3.5" transform="rotate(-15 8 10)" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
                <rect x="14" y="6" width="16" height="20" rx="3.5" transform="rotate(15 14 6)" fill="currentColor" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
                <circle cx="19.5" cy="17.5" r="4.5" fill="#0071E3"/>
                <circle cx="19.5" cy="17.5" r="1.8" fill="white"/>
            </svg>
        `,
        svgLarge: `
            <svg viewBox="0 0 48 48" fill="none" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="13" width="22" height="27" rx="4.5" transform="rotate(-15 10 13)" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
                <rect x="19" y="8" width="22" height="27" rx="4.5" transform="rotate(15 19 8)" fill="currentColor" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="26" cy="23" r="6" fill="#0071E3"/>
                <circle cx="26" cy="23" r="2.5" fill="white"/>
            </svg>
        `
    }
};

let currentLogoId = localStorage.getItem('easyagree_logo') || 'checkCards';

function getActiveLogo() {
    return LOGO_VARIANTS[currentLogoId] || LOGO_VARIANTS.checkCards;
}

function setActiveLogo(logoId) {
    if (!LOGO_VARIANTS[logoId]) {
        logoId = 'checkCards';
    }
    currentLogoId = logoId;
    localStorage.setItem('easyagree_logo', logoId);

    // Header-Icon sofort aktualisieren
    const headerIconEl = document.getElementById('header-logo-icon');
    if (headerIconEl) {
        headerIconEl.innerHTML = LOGO_VARIANTS[logoId].svgSmall;
    }

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
        card.className = `p-4 rounded-2xl glass cursor-pointer transition transform active:scale-98 flex flex-col items-center text-center border ${
            isSelected
                ? 'border-[#0071E3] ring-2 ring-[#0071E3]/20 bg-[#0071E3]/5'
                : 'border-black/[0.04] dark:border-white/[0.08] hover:border-[#0071E3]/40'
        }`;

        card.innerHTML = `
            <div class="w-14 h-14 rounded-2xl bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F] flex items-center justify-center shadow-sm mb-3">
                ${v.svgLarge}
            </div>
            <h4 class="font-bold text-xs mb-1 text-slate-900 dark:text-white flex items-center gap-1.5">
                ${v.title[currentLang] || v.title.de}
                ${isSelected ? '<span class="text-[9px] bg-[#0071E3] text-white px-2 py-0.5 rounded-full font-bold">Aktiv</span>' : ''}
            </h4>
            <p class="text-[11px] text-[#86868B] leading-relaxed">${v.desc[currentLang] || v.desc.de}</p>
        `;
        container.appendChild(card);
    });
}
