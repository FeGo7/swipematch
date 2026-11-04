/**************************************************************
 * SyncSwipe – Dark & Light Theme Controller
 **************************************************************/

function getPreferredTheme() {
    const savedTheme = localStorage.getItem('syncswipe_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
    }
    return 'dark'; // Standardmäßig Dark Mode
}

function setTheme(theme) {
    const htmlEl = document.documentElement;
    const themeBtn = document.getElementById('theme-toggle-btn');

    if (theme === 'dark') {
        htmlEl.classList.add('dark');
        htmlEl.classList.remove('light');
        if (themeBtn) {
            themeBtn.innerHTML = '☀️';
            themeBtn.title = 'Switch to Light Mode';
        }
    } else {
        htmlEl.classList.remove('dark');
        htmlEl.classList.add('light');
        if (themeBtn) {
            themeBtn.innerHTML = '🌙';
            themeBtn.title = 'Switch to Dark Mode';
        }
    }

    localStorage.setItem('syncswipe_theme', theme);
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
}

// Sofort initialisieren, um Flackern beim Laden zu verhindern
(function initThemeImmediately() {
    const theme = getPreferredTheme();
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();
