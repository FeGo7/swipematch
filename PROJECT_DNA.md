# 🧬 PROJECT DNA: SwipeMatch (MVP v1.1)

> **Dokumenten-Zweck:** Technische & strategische System-Dokumentation (Single Source of Truth) für das Advisory-Board, Produktmanagement und Entwickler-Team.  
> **Status:** Funktionsfähiges, dreisprachiges Zero-Server MVP (`v1.1` – Dynamic Shuffle & Anti-Match Engine)  
> **Live-URL:** [https://swipematch-128.pages.dev](https://swipematch-128.pages.dev)  
> **Repository:** [https://github.com/FeGo7/swipematch](https://github.com/FeGo7/swipematch) (Cloudflare Pages CI/CD)  
> **Letztes Audit:** November 2026

---

## 1. 🎯 Executive Summary & USP

### 1.1 Mission & Problemstellung
Paare, WG-Mitbewohner und Freundesgruppen verschwenden täglich wertvolle Zeit und Nerven mit wiederkehrender Mikro-Entscheidungsparalyse (*„Was essen wir heute?“*, *„Was schauen wir auf Netflix?“*, *„Wo treffen wir uns?“*, *„Wer putzt das Bad / wer geht einkaufen?“*). Klassische Umfragetools sind zu bürokratisch, erfordern App-Downloads, Accounts oder verlangen endloses Tippen.

### 1.2 Die Lösung: SwipeMatch
**SwipeMatch** überträgt die aus Dating-Apps gelernte, dopamingesteuerte **Links-/Rechts-Wischmechanik** auf alltägliche Konsens- und Pflicht-Entscheidungen – kombiniert mit einer **zustandslosen URL-Hash-Architektur (Zero-Server Engine)**.

### 1.3 Kernversprechen & USPs
1. **„30s Konsens ohne Login“:** Kein App-Store-Download, keine Registrierung, keine Cookies/Tracking-Banner. Öffnen → Wischen → Link per WhatsApp teilen → Treffer feiern.
2. **Dual-Mode Decision Engine (Match + Anti-Match):**
   - **❤️ Match-Modus (`mode: 'match'`):** Positive Konsensfindung (Essen, Filme, Dates). Beim **ersten gemeinsamen JA** bricht das Spiel im *Sudden-Death*-Verfahren sofort mit Konfetti und direktem Action-Link (Google Maps, Rezept, Streaming-Suche) ab.
   - **💥 Anti-Match & Deal-Modus (`mode: 'chores'`):** Löst das Trittbrettfahrer-Problem im Haushalt und Alltag (*„Wer macht was?“*). Beide Spieler wischen durch alle Karten (`💪 Mach ich!` vs. `🙅 Bloß nicht!`). Aufgaben, bei denen **beide NEIN** wischen, werden als **Anti-Matches** isoliert und per **1-Klick 50:50 Fair-Roulette** automatisch und streitfrei zugelost.
3. **100 % Serverlose Synchronisation (`0,00 €` Infrastrukturkosten):** Der gesamte Spielzustand von Spieler 1 (Deck-ID, gelikte Karten-IDs sowie der gezogene Zufalls-Pool oder eigene Optionen) wird Base64-kodiert im URL-Fragment (`#m=...` bzw. `#c=...`) an Spieler 2 übertragen. Es existiert kein Backend-Bottleneck; die App skaliert statisch von 10 auf 10.000.000 Nutzer ohne laufende Serverkosten.
4. **Hohe Wiederspielbarkeit (Dynamic Pool Sampler):** Statt statischer Listen zieht die Engine pro Runde **8 zufällig gemischte Karten** aus großen Themen-Pools (aktuell **174 kuratierte Karten in 14 Decks**), sodass keine Runde der vorherigen gleicht.

### 1.4 Primäre Zielgruppen
- **Paare (20–45 Jahre):** Tägliche Abendessen-, Streaming-, Date-Night- und Haushalts-Abstimmung.
- **WGs & Haushalte:** Faire Verteilung unbeliebter Pflichten (Einkaufen, Putzen, Müll, Pfand).
- **Freundesgruppen:** Schnelle Einigung auf Treffpunkte, Bars, Spieleabende oder Wochenend-Trips per WhatsApp-Gruppenlink.

---

## 2. 🛠️ Tech-Stack & Architektur

### 2.1 Architektur-Paradigma
Das Projekt folgt bewusst einer **Zero-Build, Dependency-Light Vanilla-JS-Architektur**. Es wird kein Bundler (Webpack/Vite) und kein schweres UI-Framework benötigt – die Anwendung startet verzögerungsfrei in jedem modernen mobilen und Desktop-Browser.

```
Der Entscheider/
├── index.html          # Single-Page App-Shell, 7 Screen-Container, CSS-Animationen & Glassmorphism
├── PROJECT_DNA.md      # Technische & strategische Architektur-Dokumentation
└── js/
    ├── theme.js        # Dark/Light-Mode Controller (mit FOUC-Prevention & System-Fallback)
    ├── i18n.js         # Dreisprachiges Wörterbuch (DE, EN, ES) & Kategorien-Definition
    ├── decks.js        # Kuratierte Kartendatenbank (14 Decks, 174 trilinguale Karten)
    ├── logos.js        # Interaktiver SVG-Branding-Controller (3 Live-Logo-Varianten)
    └── app.js          # Core State Machine, Shuffle-Sampler, URL-Codec, Match- & Anti-Match-Engine
```

### 2.2 Externe Libraries & Assets (via CDN)
| Ressource | Einbindung | Zweck |
| :--- | :--- | :--- |
| **Tailwind CSS** | `https://cdn.tailwindcss.com` (`darkMode: 'class'`) | Utility-first Styling, Responsive Mobile-First Layout (`max-w-md`), Gradient-System |
| **Canvas Confetti** | `canvas-confetti@1.6.0` (jsDelivr CDN) | Visuelle Belohnung (Partikel-Explosion) bei Match-Treffern und ausgelosten Anti-Matches |
| **Google Fonts** | `Plus Jakarta Sans` (Weights: 400, 600, 700, 800) | Moderne, hochlesbare geometrische Sans-Serif-Typografie |

### 2.3 UI/UX, CSS-Glassmorphism & Theme-System
- **Glassmorphism-Designsystem (`.glass` in `index.html`):**
  - **Dark Mode (`html.dark`):** Tiefdunkler Hintergrund (`#090D16`), halbtransparente Flächen (`rgba(255, 255, 255, 0.06)`), `backdrop-filter: blur(16px)` und feine Lichtkanten (`border: 1px solid rgba(255, 255, 255, 0.12)`).
  - **Light Mode (`html:not(.dark)`):** Heller Slate-Hintergrund (`#F8FAFC`), milchglasartige Karten (`rgba(255, 255, 255, 0.85)`), dezente Schlagschatten und dunkle Typografie (`#0F172A`).
- **FOUC-freier Theme-Controller (`js/theme.js`):**
  - Eine Immediately Invoked Function Expression (`initThemeImmediately()`) setzt die Klasse `dark` sofort beim Laden, bevor das erste Frame gerendert wird.
  - Prioritätskette: `localStorage.getItem('syncswipe_theme')` → `window.matchMedia('(prefers-color-scheme: light)')` → Fallback `'dark'`.
- **Hardware-beschleunigte Karten-Animationen (`index.html`):**
  - `.card-enter` (`popIn` mit `cubic-bezier(0.175, 0.885, 0.32, 1.275)`)
  - `.swipe-left` (`flyLeft`: `translateX(-140%) rotate(-18deg)`)
  - `.swipe-right` (`flyRight`: `translateX(140%) rotate(18deg)`)

---

## 3. 📦 Feature-Inventar & Status Quo

Alle nachfolgenden Features sind in Version `v1.1` **vollständig implementiert und funktionsfähig**:

### 3.1 Single-Page Screen-Architektur (`index.html`)
Die App steuert über `showScreen(screenId)` insgesamt **7 logische Screens**:
1. **`#screen-home` (Start & Deck-Browser):** Hero-Section, Partner-Challenge-Banner (`#p2-welcome-banner`), Custom-Deck-CTA, horizontal scrollbarer Kategorien-Filter, dynamische Deck-Liste mit Pool-Badges und einklappbarer Branding-Tester.
2. **`#screen-custom` (Custom Quick-Deck Creator):** Formular für eigene Abstimmungen (Frage-Titel, Modus-Wahl Match vs. Pflichten/Anti-Match, 2–6 dynamische Textfelder).
3. **`#screen-game` (Active Swiping Arena):** 30-Sekunden-Countdown mit animierter Fortschrittsleiste (`#timer-bar`), Karten-Zähler (`Karte X / 8`), Modus-Indikator-Pille, Touch-fähige 3D-Karte (`#active-card`) und Nein/Ja-Action-Buttons (`✖️` / `❤️` bzw. `💪`).
4. **`#screen-share` (Player 1 Lock-In & Share):** Versiegelungs-Screen nach Abschluss von Runde 1 mit Read-Only-Linkfeld, **1-Klick WhatsApp-Share**, **Clipboard-Copy** und **„Handy direkt übergeben“ (Pass-and-Play-Modus)**.
5. **`#screen-match` (Winner & Action-Hook Screen):** Konfetti-Screen bei gemeinsamem Treffer, Gewinner-Karte, direkter **External-Action-Button** (z. B. Google Maps Umkreissuche, Rezept-Suche), WhatsApp-Bestätigungs-Button an Spieler 1 sowie *„Weiterwischen für weitere Treffer“*.
6. **`#screen-nomatch` (Zero-Match Fallback & Tie-Breaker):** Erscheint, wenn im Match-Modus 0 Überschneidungen vorliegen. Bietet zwei Auswege:
   - `🔀 8 neue Zufalls-Karten aus diesem Deck ziehen` (`startFreshShuffleRound()`)
   - `🎲 Zufall entscheiden lassen (Schicksals-Wurf)` (`pickRandomCardFallback()`)
7. **`#screen-chores-result` (Haushalts- & Anti-Match-Auswertung):** Zweigeteilte Übersicht in *„✅ Freiwillig geklärt“* (inkl. Teamwork-Markierung) und *„💥 ANTI-MATCH! (Beide haben NEIN gewischt)“*, ausgestattet mit dem **50:50 Fair-Roulette-Button** und WhatsApp-Plan-Export.

### 3.2 Kuratierte Deck-Bibliothek (`js/decks.js`)
Aktuell umfasst die Datenbank **14 Decks in 6 Kategorien mit insgesamt 174 Karten** (jede Karte komplett übersetzt in `de`, `en`, `es` inkl. individuellem Farbverlauf, Emoji, Tag und Action-URL):

| Kategorie | Deck-ID | Titel (DE) | Spiel-Modus | Karten-Pool |
| :--- | :--- | :--- | :--- | :---: |
| **🍔 Essen & Drinks** (`food`) | `dinner` | Abendessen-Retter | `match` | **22** |
| **🍔 Essen & Drinks** (`food`) | `delivery` | Lieferdienst-Duell | `match` | **16** |
| **🍔 Essen & Drinks** (`food`) | `quickcook` | 15-Min Vorrats-Küche | `match` | **14** |
| **🍔 Essen & Drinks** (`food`) | `drinks` | Bar & Drinks heute Abend | `match` | **12** |
| **🎬 Watch & Play** (`entertainment`) | `movie` | Streaming-Abend | `match` | **14** |
| **🎬 Watch & Play** (`entertainment`) | `series` | Serien-Binge Finder | `match` | **12** |
| **🎬 Watch & Play** (`entertainment`) | `gaming` | Zocken & Spieleabend | `match` | **10** |
| **🥂 Treffen & Dates** (`activity`) | `weekend` | Wochenend-Vibe | `match` | **12** |
| **🥂 Treffen & Dates** (`activity`) | `meetup` | Wo treffen wir uns heute? | `match` | **10** |
| **🥂 Treffen & Dates** (`activity`) | `datenight` | Date-Night Deluxe | `match` | **10** |
| **🧹 Alltag & Pflichten** (`chores`) | `household` | Haushalts-Deal (Mit Anti-Match!) | `chores` | **12** |
| **🧹 Alltag & Pflichten** (`chores`) | `whoseturn` | Wer muss jetzt ran? (Drückeberger-Check) | `chores` | **10** |
| **✈️ Trips & Geschenke** (`trips`) | `vacation` | Urlaubs- & Trip-Kompass | `match` | **10** |
| **✈️ Trips & Geschenke** (`trips`) | `gifts` | Geschenk- & Wunsch-Matcher | `match` | **10** |
| **GESAMT** | **14 Decks** | | | **174 Karten** |

### 3.3 Internationalisierung (`js/i18n.js`) & Custom Dropdown
- Vollständige Unterstützung für **Deutsch (`de`)**, **Englisch (`en`)** und **Spanisch (`es`)**.
- Automatische Spracherkennung beim Erststart via `navigator.language` mit Persistenz in `localStorage` (`syncswipe_lang`).
- Eigenentwickeltes Glassmorphism-Dropdown (`#lang-dropdown-wrapper`), das Betriebssystem-Darstellungsfehler (wie fehlende Flaggen-Emojis unter Windows oder ungestylte native `<select>`-Boxen) komplett umgeht.

### 3.4 Interaktives Branding-System (`js/logos.js`)
- Beinhaltet 3 skalierbare Vektor-Logovarianten (`checkCards`, `puzzleSnap` [Default], `intersectionTarget`), die per Klick im Header oder über das aufklappbare Showcase-Menü zur Laufzeit gewechselt und in `localStorage` (`swipematch_logo`) gespeichert werden können.

---

## 4. 🧠 Datenstrukturen & Logik

### 4.1 Deck- & Karten-Schema (`js/decks.js`)
Jedes Deck in `DECKS` ist über seinen Schlüssel adressierbar und hält ein Array aus Karten mit festen numerischen IDs (`0` bis `N-1`). Diese kompakten Integer-IDs sind entscheidend, um die URL-Payloads extrem kurz zu halten:

```javascript
{
  id: "dinner",
  category: "food",           // 'food' | 'entertainment' | 'activity' | 'chores' | 'trips'
  mode: "match",              // 'match' (Sudden Death) | 'chores' (Anti-Match & 50:50 Split)
  icon: "🍔",
  gradient: "from-orange-500 to-rose-600",
  title: { de: "...", en: "...", es: "..." },
  sub:   { de: "...", en: "...", es: "..." },
  cards: [
    {
      id: 0,                  // Eindeutiger Integer innerhalb des Decks
      emoji: "🍝",
      bg: "from-amber-600 to-red-700",
      tag:         { de: "...", en: "...", es: "..." },
      title:       { de: "...", en: "...", es: "..." },
      desc:        { de: "...", en: "...", es: "..." },
      actionLabel: { de: "...", en: "...", es: "..." },
      actionUrl:   "https://www.google.com/..."
    }
  ]
}
```

### 4.2 Dynamic Shuffle & 8-Karten-Pool-Sampler (`buildActiveRoundCards`)
Um Monotonie bei großen Decks (z. B. 22 Karten in `dinner`) zu verhindern und gleichzeitig die 30-Sekunden-Regel einzuhalten, arbeitet `js/app.js` mit `CARDS_PER_ROUND = 8`:
1. **Spieler 1 startet ein Deck:**
   - Alle Karten des Decks werden per **Fisher-Yates-Algorithmus** (`shuffleArray()`) gemischt.
   - Es werden die ersten `8` Karten (`activeRoundCards`) gezogen.
2. **Synchronisation für Spieler 2:**
   - Beim Abschluss von Spieler 1 werden sowohl dessen Likes (`myLikes`) als auch die gezogenen 8 Karten-IDs (`roundIds`) im URL-Hash kodiert.
   - Öffnet Spieler 2 den Link, rekonstruiert `buildActiveRoundCards()` exakt diese 8 Karten anhand von `partnerRoundCardIds` – mischt deren Reihenfolge aber erneut per `shuffleArray()`, damit Spieler 2 nicht weiß, in welcher Reihenfolge Spieler 1 gewischt hat.

### 4.3 Zustandslose URL-Hash-Protokolle (`#m=` und `#c=`)

#### A. Standard-Deck-Protokoll (`#m=...`)
- **Rohformat vor Kodierung:** `<deckId>:<likedCardIds>:<roundPoolCardIds>`
- **Beispiel:** `dinner:0,14,5:14,3,0,19,5,8,11,2`
  - Deck: `dinner`
  - Spieler 1 hat mit JA gestimmt für Karte `0`, `14` und `5`.
  - In der 8er-Runde von Spieler 1 befanden sich die Karten `14, 3, 0, 19, 5, 8, 11, 2`.
- **Kodierung:** `btoa("dinner:0,14,5:14,3,0,19,5,8,11,2")` → ergibt einen kurzen Hash wie `#m=ZGlubmVyOjAsMTQsNToxNCwzLDAsMTksNSw4LDExLDI=`.
- **Abwärtskompatibilität:** Der Decoder in `checkIncomingChallenge()` akzeptiert auch Links ohne dritten Parameter (`deckId:likes`).

#### B. Custom Quick-Deck-Protokoll (`#c=...`)
- Für nutzergenerierte Decks wird ein kompaktes JSON-Objekt erzeugt:
  ```json
  {
    "t": "Wer geht einkaufen?",
    "m": "chores",
    "o": ["REWE holen", "Getränkemarkt", "Pfand wegbringen"],
    "l": [0]
  }
  ```
- **UTF-8-Sicherheit:** Da natives `btoa()` bei Umlauten (`äöü`), spanischen Akzenten oder Emojis einen `InvalidCharacterError` wirft, nutzt `js/app.js` die Wrapper `encodeBase64Utf8(str)` (`btoa(encodeURIComponent(str))`) und `decodeBase64Utf8(b64)` (`decodeURIComponent(atob(b64))`).

### 4.4 Entscheidungs-Algorithmen (Match vs. Chores)

1. **Match-Modus (`deck.mode === 'match'`):**
   - Sobald Spieler 2 bei einer Karte nach rechts wischt (`isLike === true`), prüft `handleSwipe()`, ob `partnerLikes.includes(card.id)` wahr ist.
   - **Treffer (Sudden Death):** Der Timer stoppt sofort, `triggerMatchScreen(card)` feuert Konfetti ab und präsentiert die Gewinner-Karte. Über `continueSwiping()` kann Spieler 2 bei Bedarf trotzdem die restlichen Karten des 8er-Sets weiterspielen.
   - **Kein Treffer nach 8 Karten:** `showScreen('screen-nomatch')` bietet das Ziehen von 8 neuen Karten oder den gewichteten Zufalls-Tie-Breaker (`pickRandomCardFallback()`), der vorrangig aus der Vereinigungsmenge `partnerLikes ∪ myLikes` lost.

2. **Pflichten- & Anti-Match-Modus (`deck.mode === 'chores'`):**
   - Hier wird der Sudden-Death-Abbruch deaktiviert (`deck.mode !== 'chores'`), damit jede Aufgabe im Set von beiden Spielern bewertet wird.
   - Nach der letzten Karte kategorisiert `triggerChoresResultScreen()` jede Karte $c$:
     - $c \in \text{P1} \land c \in \text{P2} \implies$ **Teamwork** (`owner: 'both'`)
     - $c \in \text{P1} \land c \notin \text{P2} \implies$ **Spieler 1 übernimmt freiwillig** (`owner: 'p1'`)
     - $c \notin \text{P1} \land c \in \text{P2} \implies$ **Spieler 2 übernimmt freiwillig** (`owner: 'p2'`)
     - $c \notin \text{P1} \land c \notin \text{P2} \implies$ **💥 ANTI-MATCH!** (`antiMatches`)
   - **Fairer 50:50-Algorithmus (`resolveChoresAntiMatches()`):** Mischt die Indizes aller Anti-Matches zufällig, bestimmt den Startspieler per Münzwurf (`Math.random() < 0.5`) und weist die Aufgaben streng alternierend (`p1`, `p2`, `p1`, `p2` ...) zu, sodass bei z. B. 4 Anti-Matches garantiert jeder exakt 2 Aufgaben erhält.

### 4.5 Lokale Zustandsspeicherung (`localStorage`)
Die App speichert bewusst keine personenbezogenen Daten, nutzt aber drei Schlüssel für UX-Komfort:
- `syncswipe_theme`: `'dark'` | `'light'`
- `syncswipe_lang`: `'de'` | `'en'` | `'es'`
- `swipematch_logo`: `'puzzleSnap'` | `'checkCards'` | `'intersectionTarget'`

---

## 5. 🚀 Offenes Backlog & Nächste Meilensteine

Für das Entwickler- und Produkt-Team gliedert sich die weitere Roadmap in 4 priorisierte Ausbaustufen:

### Meilenstein 1: Go-Live, Hosting & Rich Social Previews (Kurzfristig / Prio 1)
- [ ] **Produktions-Deployment (Static Hosting):** Live-Schaltung auf **Vercel**, **Cloudflare Pages** oder **GitHub Pages** unter einer einprägsamen Domain (da die aktuelle `file:///`-URL lokal nicht per WhatsApp klickbar ist).
- [ ] **OpenGraph- & WhatsApp-Link-Vorschau:** Hinzufügen von `<meta property="og:title">`, `<meta property="og:description">` und einem attraktiven `og:image`-Vorschaubild in `index.html`, damit geteilte Links in WhatsApp/iMessage als klickstarke Preview-Card erscheinen.
- [ ] **Web Share API Integration (`navigator.share`):** Auf iOS und Android zunächst das native System-Share-Sheet (für WhatsApp, Signal, Telegram, AirDrop, iMessage) aufrufen, mit `wa.me` als Fallback für Desktop-Browser.
- [ ] **PWA-Readiness (`manifest.json` & Icons):** App-Manifest und Apple-Touch-Icons hinterlegen, damit Paare sich SwipeMatch direkt als App-Icon auf den Home-Screen legen können.

### Meilenstein 2: UX-Polishing & Physik-Feeling (Mittelfristig / Prio 2)
- [ ] **Kontinuierliches Drag-Tracking (`touchmove` / Pointer-Events):** Aktuell wertet `initTouchSwipe()` die Geste bei `touchend` ab `55px` Differenz aus. Ein flüssiges Mitziehen der Karte unter dem Finger (inkl. leichter Neigung und grünem/rotem Overlay-Stempel *„JA“* / *„NEIN“* während des Ziehens) erhöht das native App-Gefühl massiv.
- [ ] **Haptisches & Akustisches Feedback:** Dezentes `navigator.vibrate(15)` beim Swipen und `navigator.vibrate([40, 60, 100])` beim Match (auf unterstützten Android-Geräten) sowie optionale, abschaltbare Pop-/Snap-Soundeffekte.
- [ ] **Spieler-Namen in der URL (Optional):** Kleines, optionales Eingabefeld vor dem Teilen (*„Dein Vorname“*), damit im Banner von Spieler 2 steht: *„Felix hat schon vorgelegt!“* und in der Haushalts-Auslosung echte Namen statt *„Spieler 1 / Spieler 2“* erscheinen.

### Meilenstein 3: Echter Echtzeit-Multiplayer & Gruppen-Modus (3+ Personen) (Prio 3)
- [ ] **Asynchroner 2-Wege-Rückkanal oder Live-Room (Optional):** Aktuell erfährt Spieler 2 das Match zuerst und meldet es per 1-Klick-WhatsApp an Spieler 1 zurück. Über einen leichtgewichtigen, kostenlosen Realtime-Dienst (z. B. PartyKit, Supabase Realtime oder Firebase) oder WebRTC könnte Spieler 1 das Match live auf seinem eigenen Screen aufpoppen sehen, sobald Spieler 2 wischt.
- [ ] **Gruppen-Modus (3 bis 8 Personen für WGs & Freundeskreise):** Erweiterung der Logik von 2 Spielern auf $N$ Teilnehmer (z. B. über einen kurzen 4-stelligen Raum-Code), bei dem die Karte mit den meisten `JA`-Stimmen gewinnt.

### Meilenstein 4: Performance-Härtung & Monetarisierungs-Hooks (Aktiviert & Live)
- [x] **Tailwind Build-Step & Carmack Zero-Bloat PWA:** Runtime `cdn.tailwindcss.com` abgelöst durch statisch vorkompiliertes `css/style.min.css` (41 KB), PWA `manifest.json` und cache-first `sw.js` Service Worker aktiv.
- [x] **Skimlinks Automated Affiliate Integration:** Skimlinks-Script (`https://s.skimresources.com/js/312295X1800881.skimlinks.js`) in `index.html` eingebunden. Wandelt ausgehende Klicks zu Lieferando, UberEats, OpenTable clientseitig on-the-fly in vergütete Affiliate-Weiterleitungen um.
- [x] **Direkte Amazon Partner-ID (`f05b1-21`):** In `js/decks.js` für 100 % Provisionsmarge ohne Aggregator-Abzug integriert:
  - *Spiele & Konsolen (`gaming`):* Catan, Exit-Games, Kartenspiele, Lego Botanicals direkt verlinkt.
  - *Geschenke & Gadgets (`gifts`):* Trending Gadgets, Instax Sofortbildkameras, Bestseller.
  - *Filme & Leihen (`movie`):* Gezielte Prime Video Instant-Video Leih- & Kauf-Links mit transparenter Kennzeichnung.
- [x] **Kontextsensitive CTA-Buttons auf dem Winner-Screen (`#winner-action-btn`):** Echte, vertrauenswürdige Buttons (z. B. *„🍕 Bei Lieferando bestellen“*, *„🎬 Auf Prime Video leihen“*, *„🎲 Spiel auf Amazon ansehen“*) statt generischer Platzhalter.
