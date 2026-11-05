/**************************************************************
 * Agreesy – Dark & Light Theme Controller (Unslop Warm Ramp)
 **************************************************************/

const ICON_SUN = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const ICON_MOON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

function getPreferredTheme() {
    const savedTheme = localStorage.getItem('syncswipe_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
    }
    return 'dark';
}

function setTheme(theme) {
    const htmlEl = document.documentElement;
    const themeBtn = document.getElementById('theme-toggle-btn');

    if (theme === 'dark') {
        htmlEl.classList.add('dark');
        htmlEl.classList.remove('light');
        if (themeBtn) {
            themeBtn.innerHTML = ICON_SUN;
            themeBtn.title = 'Helles Design';
        }
    } else {
        htmlEl.classList.remove('dark');
        htmlEl.classList.add('light');
        if (themeBtn) {
            themeBtn.innerHTML = ICON_MOON;
            themeBtn.title = 'Dunkles Design';
        }
    }

    localStorage.setItem('syncswipe_theme', theme);
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
}

(function initThemeImmediately() {
    const theme = getPreferredTheme();
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();
