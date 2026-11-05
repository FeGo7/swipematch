/**************************************************************
 * Agreesy – Flat Geometric Brand Marks (Unslop Standard)
 * Pure single-color vector glyphs without gradient tiles or glows
 **************************************************************/

const LOGO_VARIANTS = {
    convergenceCheck: {
        id: 'convergenceCheck',
        title: { de: '1. Convergence Check', en: '1. Convergence Check', es: '1. Convergence Check' },
        desc: { de: 'Zwei parallele Impulse verschmelzen zu einem gemeinsamen Haken.', en: 'Two parallel paths converging into a single checkmark.', es: 'Dos caminos convergiendo en una decisión.' },
        svgSmall: `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12.5L9.5 18L20 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 7.5L9.5 13" stroke="currentColor" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="19.5" cy="17.5" r="1.75" fill="#E05A3A"/>
            </svg>
        `,
        svgLarge: `
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12.5L9.5 18L20 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 7.5L9.5 13" stroke="currentColor" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="19.5" cy="17.5" r="1.75" fill="#E05A3A"/>
            </svg>
        `
    },
    vennMark: {
        id: 'vennMark',
        title: { de: '2. Schnittmenge', en: '2. Intersection', es: '2. Intersección' },
        desc: { de: 'Zwei klare Kreise mit dem Konsenspunkt in der Mitte.', en: 'Two clean circles with the consensus dot at the center.', es: 'Dos círculos limpios con el punto central.' },
        svgSmall: `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.5" cy="12" r="6" stroke="currentColor" stroke-width="1.75"/>
                <circle cx="14.5" cy="12" r="6" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.75"/>
                <circle cx="12" cy="12" r="1.75" fill="#E05A3A"/>
            </svg>
        `,
        svgLarge: `
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.5" cy="12" r="6" stroke="currentColor" stroke-width="1.75"/>
                <circle cx="14.5" cy="12" r="6" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.75"/>
                <circle cx="12" cy="12" r="1.75" fill="#E05A3A"/>
            </svg>
        `
    },
    monogramDot: {
        id: 'monogramDot',
        title: { de: '3. agree.sy Monogramm', en: '3. agree.sy Monogram', es: '3. Monograma agree.sy' },
        desc: { de: 'Geometrisches a mit dem charakteristischen Punkt von @agree.sy.', en: 'Geometric lowercase a with the signature @agree.sy dot.', es: 'Monograma geométrico con punto.' },
        svgSmall: `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.5" cy="12.5" r="5.5" stroke="currentColor" stroke-width="2"/>
                <path d="M15 7V18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="19.5" cy="17.5" r="1.8" fill="#E05A3A"/>
            </svg>
        `,
        svgLarge: `
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.5" cy="12.5" r="5.5" stroke="currentColor" stroke-width="2"/>
                <path d="M15 7V18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="19.5" cy="17.5" r="1.8" fill="#E05A3A"/>
            </svg>
        `
    }
};

let currentLogoId = localStorage.getItem('agreesy_logo') || 'convergenceCheck';

function getActiveLogo() {
    return LOGO_VARIANTS[currentLogoId] || LOGO_VARIANTS.convergenceCheck;
}

function setActiveLogo(logoId) {
    if (!LOGO_VARIANTS[logoId]) {
        logoId = 'convergenceCheck';
    }
    currentLogoId = logoId;
    localStorage.setItem('agreesy_logo', logoId);

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
}

document.addEventListener('DOMContentLoaded', () => {
    setActiveLogo(currentLogoId);
});
