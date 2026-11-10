/**************************************************************
 * SwipeMatch – Core Application Logic & Dynamic Shuffle Engine
 * Supports:
 * 1) Dynamic 8-Card Random Pool Sampling & Fisher-Yates Shuffle
 * 2) Classic Sudden-Death Match Mode (mode: 'match')
 * 3) Anti-Match & Fair Chores Split Mode (mode: 'chores')
 * 4) Custom Quick-Deck Creator encoded 100% in URL Hash (#c=...)
 **************************************************************/

const CARDS_PER_ROUND = 8; // Zieht pro Runde 8 zufällige Karten aus großen Pools

// 45 CODENAMES FÜR 100% GENDER-NEUTRALE & GLEICHBERECHTIGTE SPIELER (Heist & Apple Aesthetic)
const CODENAMES = [
    { name: "Gold", dot: "#EAB308" },
    { name: "Silver", dot: "#94A3B8" },
    { name: "Titan", dot: "#64748B" },
    { name: "Onyx", dot: "#1E293B" },
    { name: "Ruby", dot: "#E11D48" },
    { name: "Jade", dot: "#059669" },
    { name: "Amber", dot: "#D97706" },
    { name: "Cobalt", dot: "#2563EB" },
    { name: "Opal", dot: "#06B6D4" },
    { name: "Carbon", dot: "#334155" },
    { name: "Chrome", dot: "#64748B" },
    { name: "Platin", dot: "#A1A1AA" },
    { name: "Midnight", dot: "#1E1B4B" },
    { name: "Slate", dot: "#475569" },
    { name: "Indigo", dot: "#4F46E5" },
    { name: "Mint", dot: "#10B981" },
    { name: "Copper", dot: "#B45309" },
    { name: "Bronze", dot: "#92400E" },
    { name: "Smoke", dot: "#71717A" },
    { name: "Sage", dot: "#84CC16" },
    { name: "Shadow", dot: "#18181B" },
    { name: "Coral", dot: "#F43F5E" },
    { name: "Ice", dot: "#38BDF8" },
    { name: "Nova", dot: "#F59E0B" },
    { name: "Echo", dot: "#6366F1" },
    { name: "Orion", dot: "#3B82F6" },
    { name: "Atlas", dot: "#0EA5E9" },
    { name: "Zenith", dot: "#8B5CF6" },
    { name: "Eclipse", dot: "#0F172A" },
    { name: "Solar", dot: "#FBBF24" },
    { name: "Frost", dot: "#7DD3FC" },
    { name: "Thunder", dot: "#EAB308" },
    { name: "Vortex", dot: "#6D28D9" },
    { name: "Apex", dot: "#0D9488" },
    { name: "Phantom", dot: "#6B7280" },
    { name: "Pulse", dot: "#0284C7" },
    { name: "Volt", dot: "#EAB308" },
    { name: "Nitro", dot: "#EF4444" },
    { name: "Zero", dot: "#09090B" },
    { name: "Drift", dot: "#065F46" },
    { name: "Ghost", dot: "#9CA3AF" },
    { name: "Matrix", dot: "#22C55E" },
    { name: "Raven", dot: "#171717" },
    { name: "Jet", dot: "#0369A1" },
    { name: "Flash", dot: "#FACC15" }
];

function getRandomCodename() {
    return CODENAMES[Math.floor(Math.random() * CODENAMES.length)];
}

function getUserProfile() {
    const customName = localStorage.getItem('easyagree_user_name');
    if (customName && customName.trim()) {
        return { name: customName.trim(), dot: '#0071E3', isCustom: true };
    }
    const savedCodenameStr = localStorage.getItem('easyagree_codename');
    if (savedCodenameStr) {
        try {
            return JSON.parse(savedCodenameStr);
        } catch (e) {}
    }
    const initial = getRandomCodename();
    localStorage.setItem('easyagree_codename', JSON.stringify(initial));
    return initial;
}

function setUserProfileName(name) {
    if (name && name.trim()) {
        localStorage.setItem('easyagree_user_name', name.trim());
    } else {
        localStorage.removeItem('easyagree_user_name');
    }
    updateProfileUI();
}

function rerollCodename() {
    localStorage.removeItem('easyagree_user_name');
    const newCodename = getRandomCodename();
    localStorage.setItem('easyagree_codename', JSON.stringify(newCodename));
    updateProfileUI();
    const input = document.getElementById('profile-name-input');
    const dotEl = document.getElementById('profile-modal-dot');
    const aliasEl = document.getElementById('profile-current-alias');
    if (input) input.value = '';
    if (dotEl) dotEl.style.backgroundColor = newCodename.dot;
    if (aliasEl) aliasEl.innerText = newCodename.name;
}

function updateProfileUI() {
    const profile = getUserProfile();
    const nameEl = document.getElementById('user-profile-name');
    const dotEl = document.getElementById('user-profile-dot');
    if (nameEl) nameEl.innerText = profile.name;
    if (dotEl) dotEl.style.backgroundColor = profile.dot;
}

function openProfileModal() {
    const modal = document.getElementById('modal-profile');
    const input = document.getElementById('profile-name-input');
    const dotEl = document.getElementById('profile-modal-dot');
    const aliasEl = document.getElementById('profile-current-alias');
    const profile = getUserProfile();

    // Ensure we also read the underlying codename for the Alias display
    let codenameObj = profile;
    const savedCodenameStr = localStorage.getItem('easyagree_codename');
    if (savedCodenameStr) {
        try {
            codenameObj = JSON.parse(savedCodenameStr);
        } catch (e) {}
    }

    if (input) input.value = profile.isCustom ? profile.name : '';
    if (dotEl) dotEl.style.backgroundColor = codenameObj.dot || profile.dot;
    if (aliasEl) aliasEl.innerText = codenameObj.name || profile.name;
    if (modal) modal.classList.remove('hidden');
}

function closeProfileModal() {
    localStorage.setItem('agreesy_profile_initialized', '1');
    const modal = document.getElementById('modal-profile');
    if (modal) modal.classList.add('hidden');
}

function saveProfileName() {
    const input = document.getElementById('profile-name-input');
    if (input) {
        setUserProfileName(input.value);
    }
    localStorage.setItem('agreesy_profile_initialized', '1');
    closeProfileModal();
}

// 0-BYTE WEB AUDIO SYNTHESIZER (Walt Disney, Hans Zimmer & John Carmack)
let audioCtx = null;
function getAudioContext() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function playSwipeClick(isLike) {
    try {
        if (navigator.vibrate) navigator.vibrate(isLike ? 16 : 10);
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        const now = ctx.currentTime;
        const freq = isLike ? 587.33 : 329.63; // D5 vs E4
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * (isLike ? 1.25 : 0.75), now + 0.04);
        
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        
        osc.start(now);
        osc.stop(now + 0.04);
    } catch (e) {}
}

function playMatchChime() {
    try {
        if (navigator.vibrate) navigator.vibrate([40, 80, 140]);
        const ctx = getAudioContext();
        if (!ctx) return;
        
        // Warm Major Triad Chime: C5, E5, G5, C6
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            const now = ctx.currentTime + (idx * 0.06);
            osc.frequency.setValueAtTime(freq, now);
            
            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.85);
            
            osc.start(now);
            osc.stop(now + 0.85);
        });
    } catch (e) {}
}

let currentLang = 'de';
let currentDeckId = null;
let currentCardIndex = 0;
let activeRoundCards = []; // Die für diese Runde gezogenen & gemischten Karten
let partnerRoundCardIds = null; // Welche Karten-IDs Spieler 1 in seiner Runde hatte
let partnerSenderName = null;   // Name oder Codename des Partners
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
    "from-slate-900 to-slate-800",
    "from-blue-900 to-slate-900",
    "from-emerald-900 to-slate-900",
    "from-indigo-900 to-slate-900",
    "from-neutral-900 to-stone-900",
    "from-sky-900 to-slate-900"
];
const CUSTOM_CARD_EMOJIS = ["1", "2", "3", "4", "5", "6"];

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

    // 2b. Profil & Codename anzeigen + beim allerersten Öffnen nach Namen/Alias fragen
    updateProfileUI();
    if (!localStorage.getItem('agreesy_profile_initialized')) {
        openProfileModal();
    }

    // 3. Partner-Herausforderung via Hash prüfen (#m=... oder #c=...)
    checkIncomingChallenge();

    // 3b. Direkter Deck-Start via SEO-Landingpage (?deck=dinner oder #deck=dinner)
    checkDirectDeckParam();

    // 4. Logo initialisieren & Showcase rendern
    if (typeof setActiveLogo === 'function') {
        setActiveLogo(currentLogoId);
    }

    // 5. Touch-Gesten für mobiles Wischen
    initTouchSwipe();

    // 6. PWA Installation Handler (OS-spezifisch)
    initPwaInstall();
});

function detectInitialLanguage() {
    const search = window.location.search;
    if (search) {
        const p = new URLSearchParams(search);
        const l = p.get('lang');
        if (l && I18N[l.toLowerCase()]) return l.toLowerCase();
    }
    const saved = localStorage.getItem('syncswipe_lang');
    if (saved && I18N[saved]) {
        return saved;
    }
    const candidateLanguages = (navigator.languages && navigator.languages.length)
        ? navigator.languages
        : [navigator.language || 'en'];

    for (const lang of candidateLanguages) {
        if (!lang) continue;
        const code = lang.slice(0, 2).toLowerCase();
        if (I18N[code]) {
            return code;
        }
    }
    return 'en';
}

/**************************************************************
 * 2. URL DECODER & PARTNER-SYNC (0-Byte Backend)
 **************************************************************/
function checkIncomingChallenge() {
    const hash = window.location.hash;
    const fullHref = window.location.href;

    // Check sender name from URL (&from=...)
    if (fullHref.includes('from=')) {
        const match = fullHref.match(/from=([^&/#]+)/);
        if (match) {
            partnerSenderName = decodeURIComponent(match[1]);
        }
    }

    // FALL 1: Standard-Deck Challenge (#m=deckId:likes:roundPool)
    if (hash && hash.startsWith('#m=')) {
        try {
            const raw = hash.replace('#m=', '').split('&')[0];
            const decodedStr = atob(raw); // Format: "dinner:0,14,5:14,3,0,19,5,8,11,2"
            const parts = decodedStr.split(':');
            const deckId = parts[0];
            const likesStr = parts[1] || '';
            const poolStr = parts[2] || '';
            const customIdeaEncoded = parts[3] || '';

            if (DECKS[deckId]) {
                if (customIdeaEncoded) {
                    const ideaText = decodeURIComponent(customIdeaEncoded);
                    DECKS[deckId].cards = DECKS[deckId].cards.filter(c => c.id !== 999);
                    DECKS[deckId].cards.push({
                        id: 999,
                        emoji: '✨',
                        tag: { de: 'Vorschlag', en: 'Suggestion', es: 'Sugerencia' },
                        title: { de: ideaText, en: ideaText, es: ideaText },
                        desc: { de: 'Eigene Idee für diese Runde', en: 'Custom idea for this round', es: 'Idea propia para esta ronda' }
                    });
                }
                currentDeckId = deckId;
                partnerLikes = likesStr ? likesStr.split(',').filter(s => s !== '').map(Number) : [];
                partnerRoundCardIds = poolStr ? poolStr.split(',').filter(s => s !== '').map(Number) : null;

                if (DECKS[deckId].category) {
                    selectedCategory = DECKS[deckId].category;
                }

                // Jobs & Monte: SOFORTIGER START FÜR SPIELER 2 (Direkt in Karte 1!)
                setTimeout(() => {
                    startGame(deckId);
                }, 80);
                return;
            }
        } catch (e) {
            console.warn("Ungültiger Herausforderungs-Link (#m=)", e);
        }
    }

    // FALL 2: Eigenes Blitz-Deck Challenge (#c=...)
    if (hash && hash.startsWith('#c=')) {
        try {
            const raw = hash.replace('#c=', '').split('&')[0];
            const payload = JSON.parse(decodeBase64Utf8(raw));
            if (payload && Array.isArray(payload.o) && payload.o.length >= 2) {
                registerCustomDeckInMemory(payload.t, payload.m || 'match', payload.o);
                currentDeckId = 'custom';
                partnerLikes = Array.isArray(payload.l) ? payload.l.map(Number) : [];
                partnerRoundCardIds = null;
                selectedCategory = 'all';

                // Jobs & Monte: SOFORTIGER START FÜR SPIELER 2
                setTimeout(() => {
                    startGame('custom');
                }, 80);
                return;
            }
        } catch (e) {
            console.warn("Ungültiger Custom-Deck-Link (#c=)", e);
        }
    }

    renderCategoryFilter();
    renderDeckList();
}

function checkDirectDeckParam() {
    const hash = window.location.hash;
    const search = window.location.search;
    if (hash && (hash.startsWith('#m=') || hash.startsWith('#c='))) {
        return; // Partner-Herausforderung hat Vorrang
    }
    let targetDeck = null;
    if (search) {
        const params = new URLSearchParams(search);
        targetDeck = params.get('deck');
    }
    if (!targetDeck && hash && hash.startsWith('#deck=')) {
        targetDeck = hash.replace('#deck=', '');
    }
    if (targetDeck && DECKS[targetDeck]) {
        localStorage.setItem('agreesy_profile_initialized', 'true');
        closeProfileModal();
        setTimeout(() => {
            startGame(targetDeck);
        }, 80);
    }
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

    ['de', 'en', 'es', 'fr', 'it'].forEach(code => {
        const opt = document.getElementById(`lang-opt-${code}`);
        if (opt) {
            if (code === lang) {
                opt.className = "w-full text-left px-2.5 py-2 rounded-xl text-xs font-semibold flex items-center justify-between bg-[#0071E3]/10 text-[#0071E3] dark:text-[#0A84FF] transition";
            } else {
                opt.className = "w-full text-left px-2.5 py-2 rounded-xl text-xs font-medium flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/10 transition text-slate-700 dark:text-neutral-300";
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
    const isChoresActive = currentDeckId && DECKS[currentDeckId] && DECKS[currentDeckId].mode === 'chores';
    setText('t-nope-hint', `← ${isChoresActive ? t.choreNopeHint : t.nopeHint}`);
    setText('t-like-hint', `${isChoresActive ? t.choreLikeHint : t.likeHint} →`);
    setText('t-btn-swipe-no', isChoresActive ? t.swipeChoreBtnNo : t.swipeBtnNo);
    setText('t-btn-swipe-yes', isChoresActive ? t.swipeChoreBtnYes : t.swipeBtnYes);
    const btnSwipeNoBtn = document.getElementById('btn-swipe-no');
    const btnSwipeYesBtn = document.getElementById('btn-swipe-yes');
    if (btnSwipeNoBtn) btnSwipeNoBtn.setAttribute('aria-label', isChoresActive ? t.swipeChoreBtnNo : t.swipeBtnNo);
    if (btnSwipeYesBtn) btnSwipeYesBtn.setAttribute('aria-label', isChoresActive ? t.swipeChoreBtnYes : t.swipeBtnYes);
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
    setText('t-footer-guides', t.footerGuides);
    setText('t-footer-impressum', t.footerImpressum);
    setText('t-footer-datenschutz', t.footerDatenschutz);

    // Screen P1 Zero
    setText('t-p1zero-title', t.p1ZeroTitle);
    setText('t-p1zero-sub', t.p1ZeroSub);
    setText('t-p1zero-fresh-btn', t.p1ZeroFreshBtn);
    setText('t-p1zero-idea-label', t.p1ZeroIdeaLabel);
    const p1IdeaInput = document.getElementById('p1-custom-idea-input');
    if (p1IdeaInput) p1IdeaInput.placeholder = t.p1ZeroPlaceholder;
    setText('t-p1zero-inject-btn', t.p1ZeroInjectBtn);
    setText('t-p1zero-back-btn', t.retryBtn);

    // Screen Suspense / Matching
    setText('t-matching-title', t.matchingTitle);
    setText('t-matching-sub', t.matchingSub);

    // Screen No Match
    setText('t-nomatch-wa-btn', t.noMatchWaBtn);
    setText('t-nomatch-idea-label', t.noMatchIdeaLabel);
    const p2CounterInput = document.getElementById('p2-counter-idea-input');
    if (p2CounterInput) p2CounterInput.placeholder = t.p1ZeroPlaceholder;
    setText('t-nomatch-send-btn', t.noMatchSendBtn);
    setText('t-new-round-btn', t.noMatchNewRoundBtn);

    // Chores & Legal Modals
    setText('t-chores-deal-text', t.choresDealText);
    setText('legal-modal-close-btn', t.modalClose);

    // 3 Primary Hero Scenarios
    setText('t-hero-food-title', t.heroFoodTitle);
    setText('t-hero-food-sub', t.heroFoodSub);
    setText('t-hero-food-btn', t.heroFoodBtn);
    setText('t-hero-movie-title', t.heroMovieTitle);
    setText('t-hero-movie-sub', t.heroMovieSub);
    setText('t-hero-movie-btn', t.heroMovieBtn);
    setText('t-hero-chores-title', t.heroChoresTitle);
    setText('t-hero-chores-sub', t.heroChoresSub);
    setText('t-hero-chores-btn', t.heroChoresBtn);
    setText('t-all-categories-toggle', t.allCategoriesToggle);

    // Onboarding Profile Modal
    setText('profile-modal-title', t.onboardingTitle);
    setText('profile-modal-badge', t.onboardingBadge);
    setText('profile-modal-sub', t.onboardingSub);
    setText('profile-alias-label', t.onboardingAliasLabel);
    setText('profile-reroll-btn-text', t.onboardingRerollBtn);
    setText('profile-custom-label', t.onboardingCustomLabel);
    setText('profile-submit-btn-text', t.onboardingSubmitBtn);
    const profileNameInput = document.getElementById('profile-name-input');
    if (profileNameInput && t.onboardingPlaceholder) {
        profileNameInput.placeholder = t.onboardingPlaceholder;
    }

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

    // PWA Install Texts
    setText('t-pwa-banner-title', t.pwaBannerTitle);
    setText('t-pwa-banner-sub', t.pwaBannerSub);
    setText('t-pwa-banner-btn', t.pwaBannerBtn);
    setText('t-footer-pwa', t.pwaFooterBtn);
    setText('pwa-modal-title', t.pwaModalTitle);
    setText('pwa-modal-sub', t.pwaModalSub);
    setHtml('pwa-ios-step1', t.pwaIosStep1);
    setHtml('pwa-ios-step2', t.pwaIosStep2);
    setHtml('pwa-ios-step3', t.pwaIosStep3);
    setText('pwa-android-btn-text', t.pwaAndroidBtn);
    setHtml('pwa-android-step1', t.pwaAndroidStep1);
    setHtml('pwa-android-step2', t.pwaAndroidStep2);
    setText('pwa-desktop-btn-text', t.pwaDesktopBtn);
    setHtml('pwa-desktop-step1', t.pwaDesktopStep1);
    setText('pwa-modal-close-btn', t.pwaCloseBtn);

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
 * 4. KATEGORIEN-FILTER, LINE ICONS & DECK-LISTE (Unslop Standard)
 **************************************************************/
function getCategoryLineIcon(category) {
    switch (category) {
        case 'food':
            return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`;
        case 'entertainment':
            return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>`;
        case 'activity':
            return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`;
        case 'chores':
            return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`;
        case 'trips':
            return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>`;
        default:
            return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`;
    }
}

function renderCategoryFilter() {
    const container = document.getElementById('category-filter');
    if (!container) return;
    container.innerHTML = '';

    CATEGORIES.forEach(cat => {
        const isSelected = (selectedCategory === cat.id);
        const btn = document.createElement('button');
        btn.onclick = () => selectCategory(cat.id);
        btn.className = `px-3 py-1.5 rounded-[8px] text-[12px] transition-colors whitespace-nowrap ${
            isSelected
                ? 'btn-primary font-medium'
                : 'surface-raised text-secondary-role hover:text-primary-role font-normal'
        }`;
        btn.innerText = cat.label[currentLang] || cat.label.de;
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

    // Eindeutige Decks nach deck.id filtern (verhindert Duplikate durch Aliase wie streaming/chores)
    const allDecks = Array.from(new Map(Object.values(DECKS).map(d => [d.id, d])).values());

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
        const totalPool = deck.cards.length;
        const sampleCount = Math.min(CARDS_PER_ROUND, totalPool);
        const poolText = totalPool > sampleCount ? `${sampleCount} / ${totalPool}` : `${totalPool}`;

        const row = document.createElement('button');
        row.onclick = () => startGame(deck.id);
        row.className = `w-full p-3.5 rounded-[10px] row-card text-left flex items-center justify-between gap-3 ${
            isPartnerDeck ? 'border-[#E05A3A]' : ''
        } ${dimOtherDecks ? 'opacity-40' : ''}`;

        row.innerHTML = `
            <div class="flex items-center gap-3 min-w-0">
                <div class="w-5 h-5 flex items-center justify-center text-secondary-role shrink-0">
                    ${getCategoryLineIcon(deck.category)}
                </div>
                <div class="min-w-0">
                    <div class="font-medium text-[14px] text-primary-role truncate">
                        ${deck.title[currentLang] || deck.title.de}
                    </div>
                    <div class="text-[12px] text-secondary-role truncate mt-0.5">
                        ${deck.sub[currentLang] || deck.sub.de}
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-2 text-muted-role shrink-0">
                <span class="text-[11px] font-mono tabular-nums">${isPartnerDeck ? (I18N[currentLang]?.partnerDeckActive || 'Aktiv') : poolText}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
        `;
        container.appendChild(row);
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
        matchBtn.className = "w-full p-3 rounded-[10px] text-left text-[13px] font-medium border transition-colors flex items-center justify-between surface-raised border-[var(--border-strong)] text-primary-role";
        choresBtn.className = "w-full p-3 rounded-[10px] text-left text-[13px] font-normal border transition-colors flex items-center justify-between surface border-[var(--border)] text-secondary-role";
        if (matchCheck) matchCheck.innerText = "●";
        if (choresCheck) choresCheck.innerText = "○";
    } else {
        choresBtn.className = "w-full p-3 rounded-[10px] text-left text-[13px] font-medium border transition-colors flex items-center justify-between surface-raised border-[var(--border-strong)] text-primary-role";
        matchBtn.className = "w-full p-3 rounded-[10px] text-left text-[13px] font-normal border transition-colors flex items-center justify-between surface border-[var(--border)] text-secondary-role";
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
        row.className = "flex items-center gap-2.5";
        row.innerHTML = `
            <span class="w-5 text-right text-[12px] font-mono tabular-nums text-muted-role">${String(idx + 1).padStart(2, '0')}</span>
            <input type="text" maxlength="50" value="${val.replace(/"/g, '&quot;')}" placeholder="${t.customOptionPlaceholder} ${idx + 1}" class="custom-opt-input flex-1 surface rounded-[8px] px-3 py-2 text-[13px] font-normal focus:outline-none focus:border-[var(--text-secondary)] text-primary-role placeholder:text-muted-role">
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
    const cleanTitle = (rawTitle && rawTitle.trim()) ? rawTitle.trim() : "Eigene Abstimmung";
    const cards = optionsArray.map((optText, idx) => ({
        id: idx,
        emoji: "",
        bg: "",
        tag: { de: cleanTitle, en: cleanTitle, es: cleanTitle },
        title: { de: optText, en: optText, es: optText },
        desc: {
            de: mode === 'chores' ? "Aufgabe zuteilen" : "Option zur Abstimmung",
            en: mode === 'chores' ? "Assign task" : "Option for this round",
            es: mode === 'chores' ? "Asignar tarea" : "Opción de la ronda"
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
        icon: "",
        gradient: "",
        title: { de: cleanTitle, en: cleanTitle, es: cleanTitle },
        sub: {
            de: `${optionsArray.length} eigene Optionen`,
            en: `${optionsArray.length} custom options`,
            es: `${optionsArray.length} opciones propias`
        },
        cards: cards
    };
}

function startCustomDeck() {
    // Carmack Sanity Check: Truncate to avoid exploding WhatsApp 2048-char URL boundary
    const rawTitle = (document.getElementById('custom-deck-title').value || '').trim().slice(0, 60);
    const rawOptions = Array.from(document.querySelectorAll('.custom-opt-input'))
        .map(el => el.value.trim().slice(0, 60))
        .filter(Boolean)
        .slice(0, 8);

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

    if (partnerLikes !== null && Array.isArray(partnerRoundCardIds) && partnerRoundCardIds.length > 0) {
        const subset = partnerRoundCardIds
            .map(id => deck.cards.find(c => c.id === id))
            .filter(Boolean);
        if (subset.length > 0) {
            return shuffleArray(subset);
        }
    }

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
        partnerSenderName = null;
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

    const p2LiveEl = document.getElementById('p2-live-indicator');
    const p2TextEl = document.getElementById('p2-live-text');
    if (p2LiveEl && p2TextEl) {
        if (partnerLikes !== null) {
            const sender = partnerSenderName || "Person 1";
            p2TextEl.innerText = `${sender} hat bereits gewählt`;
            p2LiveEl.classList.remove('hidden');
        } else {
            p2LiveEl.classList.add('hidden');
        }
    }

    renderCurrentCard();
    startTimer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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
    if (display) display.innerText = String(timeLeft).padStart(2, '0');
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

    const numCurrent = String(currentCardIndex + 1).padStart(2, '0');
    const numTotal = String(activeRoundCards.length).padStart(2, '0');

    const progressEl = document.getElementById('game-progress-text');
    if (progressEl) {
        progressEl.innerText = `${numCurrent} / ${numTotal}`;
    }

    const indexMonoEl = document.getElementById('card-index-mono');
    if (indexMonoEl) {
        indexMonoEl.innerText = numCurrent;
    }

    // Update Signature Convergence Dots
    const dotLeft = document.getElementById('sig-dot-left');
    const dotRight = document.getElementById('sig-dot-right');
    if (dotLeft && dotRight) {
        const ratio = currentCardIndex / Math.max(1, activeRoundCards.length);
        const offsetPct = Math.round(ratio * 46);
        dotLeft.style.left = `${offsetPct}%`;
        dotRight.style.right = `${offsetPct}%`;
    }

    const modePill = document.getElementById('game-mode-pill');
    if (modePill) {
        modePill.innerText = isChoresMode ? t.modeChoreBadge : (deck.title[currentLang] || deck.title.de);
        modePill.className = "font-sans text-[12px] text-muted-role";
    }

    const nopeHintEl = document.getElementById('t-nope-hint');
    const likeHintEl = document.getElementById('t-like-hint');
    if (nopeHintEl && likeHintEl) {
        nopeHintEl.innerText = `← ${isChoresMode ? t.choreNopeHint : t.nopeHint}`;
        likeHintEl.innerText = `${isChoresMode ? t.choreLikeHint : t.likeHint} →`;
    }

    const btnNoSpan = document.getElementById('t-btn-swipe-no');
    const btnYesSpan = document.getElementById('t-btn-swipe-yes');
    if (btnNoSpan) btnNoSpan.innerText = isChoresMode ? t.swipeChoreBtnNo : t.swipeBtnNo;
    if (btnYesSpan) btnYesSpan.innerText = isChoresMode ? t.swipeChoreBtnYes : t.swipeBtnYes;
    const btnNoEl = document.getElementById('btn-swipe-no');
    const btnYesEl = document.getElementById('btn-swipe-yes');
    if (btnNoEl) btnNoEl.setAttribute('aria-label', isChoresMode ? t.swipeChoreBtnNo : t.swipeBtnNo);
    if (btnYesEl) btnYesEl.setAttribute('aria-label', isChoresMode ? t.swipeChoreBtnYes : t.swipeBtnYes);

    const cardEl = document.getElementById('active-card');
    if (cardEl) {
        cardEl.style.transform = '';
        cardEl.style.transition = '';
        cardEl.style.opacity = '1';
        cardEl.className = "w-full h-[360px] rounded-[16px] p-6 flex flex-col justify-between items-start text-left surface relative z-10 overflow-hidden card-enter";
    }

    const stackNextEl = document.getElementById('stack-next-card');
    if (stackNextEl) {
        if (currentCardIndex + 1 < activeRoundCards.length) {
            stackNextEl.style.opacity = '0.5';
            stackNextEl.style.transform = 'translateY(8px) scale(0.96)';
        } else {
            stackNextEl.style.opacity = '0';
            stackNextEl.style.transform = 'translateY(0) scale(0.92)';
        }
    }

    document.getElementById('card-tag').innerText = card.tag[currentLang] || card.tag.de;
    document.getElementById('card-emoji').innerHTML = card.emoji || getCategoryLineIcon(deck.category);
    document.getElementById('card-title').innerText = card.title[currentLang] || card.title.de;
    document.getElementById('card-desc').innerText = card.desc[currentLang] || card.desc.de;
}

/**************************************************************
 * 6. SWIPE ACTIONS, SUDDEN-DEATH MATCH & ANTI-MATCH ENGINE
 **************************************************************/
function handleSwipe(isLike) {
    playSwipeClick(isLike);
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

        // SUDDEN DEATH CHECK (Nur im klassischen Match-Modus!)
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

    // FALL A: Spieler 1 ist fertig -> Geheim-Link generieren mit &from=MyName
    if (partnerLikes === null) {
        // Wenn Spieler 1 im Match-Modus 0-mal JA gewischt hat -> Zwischenscreen für neue Karten oder eigene Idee
        if (deck.mode !== 'chores' && myLikes.length === 0) {
            const inputEl = document.getElementById('p1-custom-idea-input');
            if (inputEl) inputEl.value = '';
            showScreen('screen-p1-zero');
            return;
        }

        const baseUrl = window.location.origin + window.location.pathname;
        let shareUrl = '';
        const roundIds = activeRoundCards.map(c => c.id);
        const myName = getUserProfile().name;

        if (currentDeckId === 'custom' && deck.customMeta) {
            const payload = {
                t: deck.customMeta.t,
                m: deck.customMeta.m,
                o: deck.customMeta.o,
                l: myLikes
            };
            shareUrl = `${baseUrl}#c=${encodeBase64Utf8(JSON.stringify(payload))}&from=${encodeURIComponent(myName)}`;
        } else {
            // Format: deckId:likedIds:roundCardIds
            const encodedPayload = btoa(`${currentDeckId}:${myLikes.join(',')}:${roundIds.join(',')}`);
            shareUrl = `${baseUrl}#m=${encodedPayload}&from=${encodeURIComponent(myName)}`;
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
    const p2InputEl = document.getElementById('p2-counter-idea-input');
    if (p2InputEl) p2InputEl.value = '';
    showScreen('screen-nomatch');
}

// Fall A: Spieler 1 platziert eine eigene Idee direkt in diese Runde
function injectPlayer1CustomIdea() {
    const inputEl = document.getElementById('p1-custom-idea-input');
    const ideaText = inputEl ? inputEl.value.trim() : '';
    if (!ideaText) {
        if (inputEl) inputEl.focus();
        return;
    }
    const deck = DECKS[currentDeckId];
    if (!deck) return;

    deck.cards = deck.cards.filter(c => c.id !== 999);
    const customCard = {
        id: 999,
        emoji: '✨',
        tag: { de: 'Vorschlag', en: 'Suggestion', es: 'Sugerencia' },
        title: { de: ideaText, en: ideaText, es: ideaText },
        desc: { de: 'Eigene Idee für diese Runde', en: 'Custom idea for this round', es: 'Idea propia para esta ronda' }
    };
    deck.cards.push(customCard);

    if (activeRoundCards.length >= 8) {
        activeRoundCards[activeRoundCards.length - 1] = customCard;
    } else {
        activeRoundCards.push(customCard);
    }
    myLikes = [999];

    const baseUrl = window.location.origin + window.location.pathname;
    const roundIds = activeRoundCards.map(c => c.id);
    const myName = getUserProfile().name;
    const encodedPayload = btoa(`${currentDeckId}:${myLikes.join(',')}:${roundIds.join(',')}:${encodeURIComponent(ideaText)}`);
    const shareUrl = `${baseUrl}#m=${encodedPayload}&from=${encodeURIComponent(myName)}`;

    document.getElementById('share-url-input').value = shareUrl;
    showScreen('screen-share');
}

// Fall B: Spieler 2 gibt per WhatsApp Bescheid, dass es 0 Treffer gab
function notifyNoMatchViaWhatsApp() {
    const baseUrl = window.location.origin + window.location.pathname;
    const t = I18N[currentLang];
    const noMatchMsg = t.waNoMatchText || "Wir hatten in dieser Runde leider keine Übereinstimmung 😅 Lass uns 8 frische Karten probieren oder eine neue Runde starten:";
    const text = encodeURIComponent(`${noMatchMsg}\n${baseUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

// Fall B: Spieler 2 schickt direkt eine Gegenidee in einer neuen Runde zurück
function sendCounterIdeaFromNoMatch() {
    const inputEl = document.getElementById('p2-counter-idea-input');
    const ideaText = inputEl ? inputEl.value.trim() : '';
    if (!ideaText) {
        if (inputEl) inputEl.focus();
        return;
    }
    const deck = DECKS[currentDeckId];
    if (!deck) return;

    deck.cards = deck.cards.filter(c => c.id !== 999);
    const customCard = {
        id: 999,
        emoji: '✨',
        tag: { de: 'Gegenidee', en: 'Counter Idea', es: 'Propuesta' },
        title: { de: ideaText, en: ideaText, es: ideaText },
        desc: { de: 'Eigener Vorschlag für unsere Runde', en: 'Suggested for our round', es: 'Sugerencia para nuestra ronda' }
    };
    deck.cards.push(customCard);

    const otherCards = shuffleArray(deck.cards.filter(c => c.id !== 999)).slice(0, 7);
    activeRoundCards = [...otherCards, customCard];
    partnerLikes = null;
    partnerRoundCardIds = null;
    myLikes = [999];

    const baseUrl = window.location.origin + window.location.pathname;
    const roundIds = activeRoundCards.map(c => c.id);
    const myName = getUserProfile().name;
    const encodedPayload = btoa(`${currentDeckId}:${myLikes.join(',')}:${roundIds.join(',')}:${encodeURIComponent(ideaText)}`);
    const shareUrl = `${baseUrl}#m=${encodedPayload}&from=${encodeURIComponent(myName)}`;

    document.getElementById('share-url-input').value = shareUrl;
    const t = I18N[currentLang];
    const counterMsg = t.waCounterIdeaText || "Wir hatten eben leider keine Übereinstimmung 😅 Ich habe eine neue Runde mit einer eigenen Idee gestartet – wisch mal kurz durch:";
    const text = encodeURIComponent(`${counterMsg}\n${shareUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
    showScreen('screen-share');
}

function triggerMatchScreen(card) {
    matchedCard = card;
    const suspenseEl = document.getElementById('screen-suspense');
    if (suspenseEl) {
        suspenseEl.classList.remove('hidden');
        if (navigator.vibrate) navigator.vibrate([25, 40, 25]);
        setTimeout(() => {
            suspenseEl.classList.add('hidden');
            revealMatchScreen(card);
        }, 1100);
    } else {
        revealMatchScreen(card);
    }
}

function revealMatchScreen(card) {
    showScreen('screen-match');
    playMatchChime();

    // Jony Ive Feedback: Haptic Feedback auf Smartphones
    if ('vibrate' in navigator) {
        try { navigator.vibrate([40, 60, 140]); } catch (e) {}
    }

    if (typeof confetti === 'function') {
        confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.6 }
        });
    }

    const deck = DECKS[currentDeckId];
    const winnerCardEl = document.getElementById('winner-card');
    if (winnerCardEl) {
        // Warmer Magie-Glow auf der Sieger-Karte
        winnerCardEl.className = "w-full rounded-[16px] p-6 mb-5 flex flex-col items-start text-left surface border-[#E05A3A]/40 shadow-[0_0_35px_-5px_rgba(224,90,58,0.25)] transition-all";
    }
    document.getElementById('winner-emoji').innerHTML = card.emoji || getCategoryLineIcon(deck ? deck.category : 'all');
    document.getElementById('winner-title').innerText = card.title[currentLang] || card.title.de;
    document.getElementById('winner-desc').innerText = card.desc[currentLang] || card.desc.de;

    const partiesEl = document.getElementById('winner-parties');
    if (partiesEl) {
        const p1Name = partnerSenderName || "Person 1";
        const p2Name = getUserProfile().name;
        partiesEl.innerText = `${p1Name} & ${p2Name}`;
    }

    const actionBtn = document.getElementById('winner-action-btn');
    const actionText = document.getElementById('winner-action-text');
    const secondaryBtn = document.getElementById('winner-secondary-deal-btn');
    const secondaryText = document.getElementById('winner-secondary-deal-text');

    if (actionBtn && actionText) {
        const cat = deck ? deck.category : 'all';
        const titleStr = card.title[currentLang] || card.title.de || 'Idee';
        const query = encodeURIComponent(card.title.de || card.title.en || titleStr);

        const t = I18N[currentLang] || I18N.de;
        if (cat === 'food') {
            actionBtn.href = `https://www.lieferando.de/lieferservice/essen/${query}`;
            actionText.innerText = `${titleStr} ${t.winnerOrderFood || 'bei Lieferando bestellen'}`;
            if (secondaryBtn && secondaryText) {
                secondaryBtn.href = `https://www.amazon.de/s?k=${query}+zutaten+kochbuch&tag=f05b1-21`;
                const secPattern = t.winnerFoodSecondary || 'Zutaten & Koch-Sets für {title} (Amazon)';
                secondaryText.innerText = secPattern.replace('{title}', titleStr);
                secondaryBtn.classList.remove('hidden');
            }
        } else if (cat === 'entertainment') {
            actionBtn.href = `https://www.amazon.de/s?k=${query}&i=instant-video&tag=f05b1-21`;
            actionText.innerText = `${titleStr} ${t.winnerStreamPrime || 'auf Prime Video streamen'}`;
            if (secondaryBtn && secondaryText) {
                secondaryBtn.href = `https://www.amazon.de/s?k=kino+snack+box+popcorn&tag=f05b1-21`;
                secondaryText.innerText = t.winnerSnackBox || 'Passende Heimkino-Snackbox bestellen';
                secondaryBtn.classList.remove('hidden');
            }
        } else if (cat === 'activity') {
            actionBtn.href = `https://www.getyourguide.de/s/?q=${query}`;
            actionText.innerText = `${titleStr} – ${t.winnerActivities || 'Erlebnisse & Tickets ansehen'}`;
            if (secondaryBtn && secondaryText) {
                secondaryBtn.href = `https://www.amazon.de/s?k=${query}+paar+date+spiel&tag=f05b1-21`;
                secondaryText.innerText = `Passendes Zubehör & Date-Boxen bei Amazon`;
                secondaryBtn.classList.remove('hidden');
            }
        } else if (cat === 'trips') {
            actionBtn.href = `https://www.booking.com/searchresults.de.html?ss=${query}`;
            actionText.innerText = `${titleStr} – Booking.com`;
            if (secondaryBtn && secondaryText) {
                secondaryBtn.href = `https://www.amazon.de/s?k=${query}+reise+geschenk&tag=f05b1-21`;
                secondaryText.innerText = `Reise-Gadgets & Geschenk-Sets bei Amazon`;
                secondaryBtn.classList.remove('hidden');
            }
        } else {
            actionBtn.href = `https://www.amazon.de/s?k=${query}&tag=f05b1-21`;
            actionText.innerText = `${titleStr} – ${t.winnerOpenAction || 'Direkt online entdecken'}`;
            if (secondaryBtn) {
                secondaryBtn.classList.add('hidden');
            }
        }
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
}

function renderChoresSummaryUI() {
    const t = I18N[currentLang];
    const volListEl = document.getElementById('chores-voluntary-list');
    const antiListEl = document.getElementById('chores-antimatch-list');
    const rouletteBtn = document.getElementById('btn-chores-roulette');
    const p1Name = partnerSenderName || "Person 1";
    const p2Name = getUserProfile().name;

    if (!volListEl || !antiListEl) return;
    volListEl.innerHTML = '';
    antiListEl.innerHTML = '';

    if (currentChoresSummary.voluntary.length === 0) {
        volListEl.innerHTML = `<div class="text-muted-role py-1">${t.choresNone || "Keine"}</div>`;
    } else {
        currentChoresSummary.voluntary.forEach(item => {
            const title = item.card.title[currentLang] || item.card.title.de;
            let badgeText = t.choresBothWant;
            if (item.owner === 'p1') badgeText = p1Name;
            if (item.owner === 'p2') badgeText = p2Name;

            const row = document.createElement('div');
            row.className = "flex items-center justify-between gap-2 p-2.5 rounded-[8px] surface-raised";
            row.innerHTML = `
                <span class="font-medium text-primary-role">${title}</span>
                <span class="text-[11px] font-mono text-secondary-role whitespace-nowrap">${badgeText}</span>
            `;
            volListEl.appendChild(row);
        });
    }

    if (currentChoresSummary.antiMatches.length === 0) {
        antiListEl.innerHTML = `<div class="text-[#349B6B] font-medium py-1">${t.choresNoAntiMatch}</div>`;
        if (rouletteBtn) rouletteBtn.classList.add('hidden');
    } else {
        currentChoresSummary.antiMatches.forEach(item => {
            const title = item.card.title[currentLang] || item.card.title.de;
            let statusText = t.choresOpen || "Offen";
            if (item.assignedTo === 'p1') statusText = p1Name;
            if (item.assignedTo === 'p2') statusText = p2Name;

            const row = document.createElement('div');
            row.className = "flex items-center justify-between gap-2 p-2.5 rounded-[8px] surface-raised";
            row.innerHTML = `
                <span class="font-medium text-primary-role">${title}</span>
                <span class="text-[11px] font-mono text-secondary-role whitespace-nowrap">${statusText}</span>
            `;
            antiListEl.appendChild(row);
        });

        if (rouletteBtn) {
            if (currentChoresSummary.resolved) {
                rouletteBtn.innerText = t.choresRouletteDone;
                rouletteBtn.className = "w-full h-10 rounded-[8px] surface-raised text-secondary-role font-medium text-[13px] cursor-default";
            } else {
                rouletteBtn.classList.remove('hidden');
                rouletteBtn.innerText = t.choresRouletteBtn;
                rouletteBtn.className = "w-full h-10 rounded-[8px] btn-primary font-medium text-[13px]";
            }
        }
    }
}

function resolveChoresAntiMatches() {
    if (!currentChoresSummary.antiMatches.length) return;

    // MrBeast / Haptic Roulette Vibration
    if ('vibrate' in navigator) {
        try { navigator.vibrate([60, 40, 60, 40, 160]); } catch (e) {}
    }

    let nextPlayer = Math.random() < 0.5 ? 'p1' : 'p2';
    const indices = currentChoresSummary.antiMatches.map((_, idx) => idx).sort(() => Math.random() - 0.5);

    indices.forEach(idx => {
        currentChoresSummary.antiMatches[idx].assignedTo = nextPlayer;
        nextPlayer = (nextPlayer === 'p1') ? 'p2' : 'p1';
    });

    currentChoresSummary.resolved = true;
    renderChoresSummaryUI();
}

function shareChoresPlanViaWhatsApp() {
    if (!currentChoresSummary.resolved && currentChoresSummary.antiMatches.length > 0) {
        resolveChoresAntiMatches();
    }

    const t = I18N[currentLang];
    const p1Name = partnerSenderName || "Person 1";
    const p2Name = getUserProfile().name;
    const lines = [t.waChoresSummaryHeader, `${p1Name} & ${p2Name}`, ""];

    currentChoresSummary.voluntary.forEach(item => {
        const title = item.card.title[currentLang] || item.card.title.de;
        const who = item.owner === 'p1' ? p1Name : (item.owner === 'p2' ? p2Name : t.choresBothWant);
        lines.push(`• ${title}: ${who}`);
    });

    currentChoresSummary.antiMatches.forEach(item => {
        const title = item.card.title[currentLang] || item.card.title.de;
        const who = item.assignedTo === 'p1' ? p1Name : p2Name;
        lines.push(`• ${title}: ${who}`);
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
    const myName = getUserProfile().name;
    const t = I18N[currentLang];
    const challengeMsg = t.waChallengeText || "Ich habe meine Auswahl getroffen. Schau mal rein, wo wir übereinstimmen:";
    const text = encodeURIComponent(`${myName}: ${challengeMsg}\n${url}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function sendWinnerToPartner() {
    if (!matchedCard) return;
    const p1Name = partnerSenderName || (I18N[currentLang]?.choresPlayer1 || "Person 1");
    const p2Name = getUserProfile().name;
    const title = matchedCard.title[currentLang] || matchedCard.title.en || matchedCard.title.de;
    const prefix = I18N[currentLang]?.waWinnerText || "Gemeinsame Wahl:";
    const shareUrl = "https://agreesy.com";
    const shareText = `🎉 ${prefix} ${title}! (${p1Name} & ${p2Name})\n30s-Entscheidung auf Agreesy: ${shareUrl}`;

    if (navigator.share) {
        navigator.share({
            title: `Agreesy Match: ${title}`,
            text: `🎉 ${prefix} ${title}! (${p1Name} & ${p2Name})`,
            url: shareUrl
        }).catch(() => {
            window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
        });
    } else {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
    }
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
        'screen-p1-zero',
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
    const closeBtn = document.getElementById('legal-modal-close-btn');
    if (!modal || !titleEl || !contentEl) return;

    const t = I18N[currentLang] || I18N.de;
    if (closeBtn) closeBtn.innerText = t.modalClose || 'Schließen';

    const LEGAL_DATA = {
        impressum: {
            de: {
                title: "Impressum",
                html: `<div><h4 class="font-medium text-primary-role mb-1">Angaben gemäß § 5 DDG</h4><p>Felix Gooßens<br>E-Mail: <a href="mailto:felix.goossens@aol.com" class="text-primary-role underline">felix.goossens@aol.com</a><br>Webseite: <a href="https://agreesy.com" class="text-primary-role underline">agreesy.com</a></p></div><div><h4 class="font-medium text-primary-role mb-1">Verantwortlich für den Inhalt</h4><p>Felix Gooßens</p></div><div><h4 class="font-medium text-primary-role mb-1">Haftung für Inhalte und Links</h4><p>Die Inhalte dieser Web-App wurden mit größter Sorgfalt erstellt. Für externe Links zu Webseiten Dritter übernehmen wir keine Haftung; für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p></div><div><h4 class="font-medium text-primary-role mb-1">Affiliate- und Werbehinweis</h4><p>Diese Web-App enthält sogenannte Affiliate-Links (u. a. zu Amazon und Partnershops über Netzwerke wie Skimlinks). Wenn Sie über einen dieser Links einen Kauf tätigen, erhalten wir gegebenenfalls eine geringe Provision – für Sie entstehen keinerlei Mehrkosten.</p></div>`
            },
            en: {
                title: "Legal Notice",
                html: `<div><h4 class="font-medium text-primary-role mb-1">Operator Information (§ 5 DDG)</h4><p>Felix Gooßens<br>Email: <a href="mailto:felix.goossens@aol.com" class="text-primary-role underline">felix.goossens@aol.com</a><br>Website: <a href="https://agreesy.com" class="text-primary-role underline">agreesy.com</a></p></div><div><h4 class="font-medium text-primary-role mb-1">Responsible for Content</h4><p>Felix Gooßens</p></div><div><h4 class="font-medium text-primary-role mb-1">Liability for Content & Links</h4><p>The contents of this web application have been compiled with great care. We assume no liability for the contents of external third-party links; the respective provider is always responsible for the contents of linked pages.</p></div><div><h4 class="font-medium text-primary-role mb-1">Affiliate Disclosure</h4><p>This web application contains affiliate links (e.g. to Amazon and partner merchants via networks like Skimlinks). If you make a purchase through these links, we may receive a small commission at no extra cost to you.</p></div>`
            },
            es: {
                title: "Aviso Legal",
                html: `<div><h4 class="font-medium text-primary-role mb-1">Información legal (§ 5 DDG)</h4><p>Felix Gooßens<br>Email: <a href="mailto:felix.goossens@aol.com" class="text-primary-role underline">felix.goossens@aol.com</a><br>Sitio web: <a href="https://agreesy.com" class="text-primary-role underline">agreesy.com</a></p></div><div><h4 class="font-medium text-primary-role mb-1">Responsable del contenido</h4><p>Felix Gooßens</p></div><div><h4 class="font-medium text-primary-role mb-1">Responsabilidad de contenidos y enlaces</h4><p>Los contenidos de esta app han sido elaborados con sumo cuidado. No asumimos responsabilidad por enlaces externos a terceros; el responsable es siempre el proveedor de cada página enlazada.</p></div><div><h4 class="font-medium text-primary-role mb-1">Aviso de afiliados</h4><p>Esta aplicación contiene enlaces de afiliados (como Amazon y tiendas colaboradoras a través de redes como Skimlinks). Si realizas una compra a través de ellos, podemos recibir una pequeña comisión sin coste adicional para ti.</p></div>`
            },
            fr: {
                title: "Mentions Légales",
                html: `<div><h4 class="font-medium text-primary-role mb-1">Informations légales (§ 5 DDG)</h4><p>Felix Gooßens<br>E-mail : <a href="mailto:felix.goossens@aol.com" class="text-primary-role underline">felix.goossens@aol.com</a><br>Site web : <a href="https://agreesy.com" class="text-primary-role underline">agreesy.com</a></p></div><div><h4 class="font-medium text-primary-role mb-1">Responsable du contenu</h4><p>Felix Gooßens</p></div><div><h4 class="font-medium text-primary-role mb-1">Responsabilité des contenus et liens</h4><p>Le contenu de cette application web a été créé avec le plus grand soin. Nous déclinons toute responsabilité quant aux liens externes ; l'exploitant de chaque site lié en est toujours seul responsable.</p></div><div><h4 class="font-medium text-primary-role mb-1">Mention d'affiliation</h4><p>Cette application web contient des liens d'affiliation (notamment vers Amazon et boutiques partenaires via des réseaux comme Skimlinks). Si vous effectuez un achat, nous pouvons percevoir une commission sans frais supplémentaires pour vous.</p></div>`
            },
            it: {
                title: "Note Legali",
                html: `<div><h4 class="font-medium text-primary-role mb-1">Informazioni legali (§ 5 DDG)</h4><p>Felix Gooßens<br>Email: <a href="mailto:felix.goossens@aol.com" class="text-primary-role underline">felix.goossens@aol.com</a><br>Sito web: <a href="https://agreesy.com" class="text-primary-role underline">agreesy.com</a></p></div><div><h4 class="font-medium text-primary-role mb-1">Responsabile dei contenuti</h4><p>Felix Gooßens</p></div><div><h4 class="font-medium text-primary-role mb-1">Responsabilità per contenuti e link</h4><p>I contenuti di questa applicazione sono stati preparati con la massima cura. Non ci assumiamo alcuna responsabilità per i contenuti dei link esterni; il rispettivo gestore è sempre responsabile dei siti collegati.</p></div><div><h4 class="font-medium text-primary-role mb-1">Informativa affiliazione</h4><p>Questa applicazione web contiene link di affiliazione (tra cui Amazon e partner tramite reti come Skimlinks). Se effettui un acquisto, potremmo ricevere una commissione senza alcun costo aggiuntivo per te.</p></div>`
            }
        },
        datenschutz: {
            de: {
                title: "Datenschutzerklärung",
                html: `<div><h4 class="font-medium text-primary-role mb-1">1. Datenschutz auf einen Blick</h4><p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Anwendung folgt dem Grundsatz der Datensparsamkeit („Zero-Server Engine“): Wir erfassen und speichern keine personenbezogenen Daten auf eigenen Servern.</p></div><div><h4 class="font-medium text-primary-role mb-1">2. Verantwortliche Stelle</h4><p>Felix Gooßens<br>E-Mail: <a href="mailto:felix.goossens@aol.com" class="text-primary-role underline">felix.goossens@aol.com</a></p></div><div><h4 class="font-medium text-primary-role mb-1">3. Funktionsweise und lokale Speicherung</h4><p>Die Auswahl Ihrer Karten und Präferenzen verbleibt rein clientseitig in Ihrem Browser. Zur Synchronisation mit Ihrem Gegenüber wird der Spielstand Base64-kodiert im URL-Fragment (#m=...) abgelegt und direkt per Link geteilt. Es findet keine serverseitige Speicherung statt.</p></div><div><h4 class="font-medium text-primary-role mb-1">4. Hosting und CDN</h4><p>Diese Web-App wird über Cloudflare Pages (Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107, USA) gehostet. Beim Aufruf der Seite werden technisch notwendige Server-Logfiles verarbeitet.</p></div><div><h4 class="font-medium text-primary-role mb-1">5. Externe Links</h4><p>Wenn Sie auf externe Partner-Links klicken, gelten die Datenschutzbestimmungen der jeweiligen Zielanbieter.</p></div>`
            },
            en: {
                title: "Privacy Policy",
                html: `<div><h4 class="font-medium text-primary-role mb-1">1. Privacy at a Glance</h4><p>We take the protection of your personal data seriously. This application follows a strict zero-server privacy standard: we do not collect or store any personal data on centralized servers.</p></div><div><h4 class="font-medium text-primary-role mb-1">2. Data Controller</h4><p>Felix Gooßens<br>Email: <a href="mailto:felix.goossens@aol.com" class="text-primary-role underline">felix.goossens@aol.com</a></p></div><div><h4 class="font-medium text-primary-role mb-1">3. How It Works & Local Storage</h4><p>Your card picks remain entirely client-side in your local browser. For 2-player synchronization, round state is encoded into the URL hash fragment (#m=...) and shared directly peer-to-peer. No database or server storage is used.</p></div><div><h4 class="font-medium text-primary-role mb-1">4. Hosting & CDN</h4><p>This web app is hosted via Cloudflare Pages (Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107, USA) with standard encrypted delivery.</p></div><div><h4 class="font-medium text-primary-role mb-1">5. External Partner Links</h4><p>If you click on external partner links (such as Amazon or food delivery services), the privacy terms of those destination sites apply.</p></div>`
            },
            es: {
                title: "Política de Privacidad",
                html: `<div><h4 class="font-medium text-primary-role mb-1">1. Privacidad de un vistazo</h4><p>Nos tomamos muy en serio la protección de tus datos. Esta aplicación sigue un estándar de privacidad sin servidor: no recopilamos ni almacenamos datos personales en servidores propios.</p></div><div><h4 class="font-medium text-primary-role mb-1">2. Responsable</h4><p>Felix Gooßens<br>Email: <a href="mailto:felix.goossens@aol.com" class="text-primary-role underline">felix.goossens@aol.com</a></p></div><div><h4 class="font-medium text-primary-role mb-1">3. Funcionamiento y almacenamiento local</h4><p>Tus selecciones se procesan exclusivamente en tu navegador. Para sincronizar con tu pareja o amigo, el estado se codifica en el enlace (#m=...) y se comparte de persona a persona.</p></div><div><h4 class="font-medium text-primary-role mb-1">4. Alojamiento y CDN</h4><p>Alojado en Cloudflare Pages (Cloudflare Inc., San Francisco, CA, EE. UU.).</p></div><div><h4 class="font-medium text-primary-role mb-1">5. Enlaces externos</h4><p>Al hacer clic en enlaces externos asociados se aplican las políticas de privacidad de los respectivos proveedores.</p></div>`
            },
            fr: {
                title: "Politique de Confidentialité",
                html: `<div><h4 class="font-medium text-primary-role mb-1">1. La protection des données en un coup d'œil</h4><p>Nous prenons la protection de vos données très au sérieux. Cette application fonctionne selon le principe du zéro-serveur : nous ne collectons ni ne stockons aucune donnée personnelle sur nos serveurs.</p></div><div><h4 class="font-medium text-primary-role mb-1">2. Responsable du traitement</h4><p>Felix Gooßens<br>E-mail : <a href="mailto:felix.goossens@aol.com" class="text-primary-role underline">felix.goossens@aol.com</a></p></div><div><h4 class="font-medium text-primary-role mb-1">3. Fonctionnement et stockage local</h4><p>Vos choix restent entièrement stockés localement dans votre navigateur. Pour la synchronisation à deux, les choix sont encodés directement dans l'URL (#m=...) et partagés de personne à personne.</p></div><div><h4 class="font-medium text-primary-role mb-1">4. Hébergement et CDN</h4><p>Hébergé via Cloudflare Pages (Cloudflare Inc., San Francisco, CA, États-Unis).</p></div><div><h4 class="font-medium text-primary-role mb-1">5. Liens externes</h4><p>Si vous cliquez sur des liens partenaires externes, les politiques de confidentialité des sites de destination s'appliquent.</p></div>`
            },
            it: {
                title: "Informativa sulla Privacy",
                html: `<div><h4 class="font-medium text-primary-role mb-1">1. La privacy in breve</h4><p>Prendiamo molto sul serio la protezione dei tuoi dati personali. Questa applicazione segue il principio zero-server: non raccogliamo né memorizziamo dati personali su server centralizzati.</p></div><div><h4 class="font-medium text-primary-role mb-1">2. Titolare del trattamento</h4><p>Felix Gooßens<br>Email: <a href="mailto:felix.goossens@aol.com" class="text-primary-role underline">felix.goossens@aol.com</a></p></div><div><h4 class="font-medium text-primary-role mb-1">3. Funzionamento e memorizzazione locale</h4><p>Le tue scelte rimangono esclusivamente nel tuo browser. Per la sincronizzazione di coppia, le selezioni vengono codificate direttamente nel link (#m=...) e condivise da persona a persona.</p></div><div><h4 class="font-medium text-primary-role mb-1">4. Hosting e CDN</h4><p>Ospitato tramite Cloudflare Pages (Cloudflare Inc., San Francisco, CA, USA).</p></div><div><h4 class="font-medium text-primary-role mb-1">5. Link esterni</h4><p>Cliccando su link esterni di partner si applicano le condizioni di privacy dei rispettivi fornitori.</p></div>`
            }
        }
    };

    const doc = (LEGAL_DATA[type] && (LEGAL_DATA[type][currentLang] || LEGAL_DATA[type].de)) || LEGAL_DATA.impressum.de;
    titleEl.innerText = doc.title;
    contentEl.innerHTML = doc.html;

    modal.classList.remove('hidden');
}

function closeLegalModal() {
    const modal = document.getElementById('modal-legal');
    if (modal) modal.classList.add('hidden');
}

/**************************************************************
 * 12. PWA INSTALLATION CONTROLLER (OS-Tailored UX)
 **************************************************************/
let deferredPwaPrompt = null;
let currentPwaTab = 'ios';

function isRunningStandalone() {
    return (window.matchMedia('(display-mode: standalone)').matches) ||
           (window.navigator.standalone === true) ||
           document.referrer.includes('android-app://');
}

function detectUserPlatform() {
    const ua = navigator.userAgent || navigator.vendor || window.opera || '';
    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
        return 'ios';
    }
    if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
        return 'ios';
    }
    if (/android/i.test(ua)) {
        return 'android';
    }
    return 'desktop';
}

function initPwaInstall() {
    if (isRunningStandalone()) {
        const footerBtn = document.getElementById('footer-pwa-btn');
        if (footerBtn) footerBtn.classList.add('hidden');
        return;
    }

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPwaPrompt = e;
        updatePwaDirectInstallButtons(true);
        checkAndShowPwaBanner();
    });

    window.addEventListener('appinstalled', () => {
        deferredPwaPrompt = null;
        dismissPwaBanner(true);
        const footerBtn = document.getElementById('footer-pwa-btn');
        if (footerBtn) footerBtn.classList.add('hidden');
    });

    setTimeout(() => {
        checkAndShowPwaBanner();
    }, 2500);
}

function checkAndShowPwaBanner() {
    if (isRunningStandalone()) return;
    const dismissedAt = localStorage.getItem('agreesy_pwa_dismissed');
    if (dismissedAt) {
        const diffDays = (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60 * 24);
        if (diffDays < 7) {
            return;
        }
    }
    const banner = document.getElementById('pwa-install-banner');
    if (banner) {
        banner.classList.remove('hidden');
    }
}

function dismissPwaBanner(permanent) {
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.classList.add('hidden');
    localStorage.setItem('agreesy_pwa_dismissed', Date.now().toString());
}

function handlePwaInstallClick() {
    if (deferredPwaPrompt) {
        triggerNativeInstallPrompt();
    } else {
        openPwaModal();
    }
}

function triggerNativeInstallPrompt() {
    if (!deferredPwaPrompt) {
        openPwaModal();
        return;
    }
    deferredPwaPrompt.prompt();
    deferredPwaPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            dismissPwaBanner(true);
            closePwaModal();
        }
        deferredPwaPrompt = null;
        updatePwaDirectInstallButtons(false);
    });
}

function updatePwaDirectInstallButtons(available) {
    const androidBtn = document.getElementById('pwa-android-install-direct-btn');
    const desktopBtn = document.getElementById('pwa-desktop-install-direct-btn');
    if (androidBtn) {
        if (available) {
            androidBtn.classList.remove('hidden');
            androidBtn.classList.add('flex');
        } else {
            androidBtn.classList.add('hidden');
            androidBtn.classList.remove('flex');
        }
    }
    if (desktopBtn) {
        if (available) {
            desktopBtn.classList.remove('hidden');
            desktopBtn.classList.add('flex');
        } else {
            desktopBtn.classList.add('hidden');
            desktopBtn.classList.remove('flex');
        }
    }
}

function openPwaModal(forcedTab) {
    const modal = document.getElementById('modal-pwa-install');
    if (!modal) return;
    
    const targetTab = forcedTab || detectUserPlatform();
    switchPwaTab(targetTab);
    updatePwaDirectInstallButtons(!!deferredPwaPrompt);
    modal.classList.remove('hidden');
}

function closePwaModal() {
    const modal = document.getElementById('modal-pwa-install');
    if (modal) modal.classList.add('hidden');
}

function switchPwaTab(tab) {
    currentPwaTab = tab;
    const tabs = ['ios', 'android', 'desktop'];
    tabs.forEach(t => {
        const btn = document.getElementById(`pwa-tab-${t}`);
        const content = document.getElementById(`pwa-content-${t}`);
        if (btn) {
            if (t === tab) {
                btn.className = "flex-1 py-1.5 rounded-[8px] text-[12px] font-semibold text-center transition-all surface text-primary-role shadow-sm border border-[var(--border)]";
            } else {
                btn.className = "flex-1 py-1.5 rounded-[8px] text-[12px] font-medium text-center transition-all text-secondary-role hover:text-primary-role";
            }
        }
        if (content) {
            if (t === tab) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        }
    });
}
