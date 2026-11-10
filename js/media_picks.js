/**************************************************************
 * Agreesy – Stage 2 Contemporary Movie & Series Engine (2024–2026)
 * Easily maintainable catalog of current releases per genre.
 * Last updated: 2026-Q1
 *
 * Rules:
 * - "movie" (and alias "streaming") cards ONLY suggest concrete MOVIES (2024–2026).
 *   (Exception: movie card #4 is explicitly "90s/2000s Cult Classics").
 * - "series" cards ONLY suggest concrete SERIES / new seasons (2024–2026).
 **************************************************************/

const MEDIA_PICKS_META = {
    lastUpdated: '2026-03',
    releaseWindow: '2024–2026'
};

const MEDIA_STAGE2_PICKS = {
    movie: {
        // 0: Mindfuck-Thriller mit Plot-Twist (2024-2026 Movies ONLY)
        0: [
            { id: 'm0_1', title: 'Conclave', year: '2024', emoji: '🗝️', vibe: 'Oscar-Hit · Vatikan-Verschwörung & krasser Twist' },
            { id: 'm0_2', title: 'Blink Twice', year: '2024', emoji: '🏝️', vibe: 'Psycho-Thriller · Milliardärs-Insel mit dunklem Geheimnis' },
            { id: 'm0_3', title: 'Carry-On', year: '2024', emoji: '✈️', vibe: 'Hochspannung · Erpressung am Flughafen-Sicherheitsscanner' },
            { id: 'm0_4', title: 'Caddo Lake', year: '2024', emoji: '🛶', vibe: 'Mindfuck-Mystery · Verschwinden im Sumpf & Zeiträtsel' },
            { id: 'm0_5', title: 'Black Bag', year: '2025', emoji: '🕵️', vibe: 'Spionage-Thriller · Soderbergh-Verwirrspiel unter Agenten-Eheleuten' },
            { id: 'm0_6', title: 'Drop', year: '2025', emoji: '📱', vibe: 'Echtzeit-Thriller · Tödliche AirDrop-Nachrichten beim ersten Date' },
            { id: 'm0_7', title: 'Companion', year: '2025', emoji: '🤖', vibe: 'Sci-Fi-Thriller · Wochenendtrip am See eskaliert völlig' },
            { id: 'm0_8', title: 'Juror #2', year: '2024', emoji: '⚖️', vibe: 'Moral-Thriller · Geschworener erkennt eigene Schuld im Mordprozess' }
        ],
        // 1: Gute-Laune-Komödie (2024-2026 Movies ONLY)
        1: [
            { id: 'm1_1', title: 'The Fall Guy', year: '2024', emoji: '🕶️', vibe: 'Action-Comedy · Ryan Gosling als Stuntman auf Abwegen' },
            { id: 'm1_2', title: 'Hit Man', year: '2024', emoji: '🎭', vibe: 'Smart & Witzig · Fake-Auftragskiller verliebt sich in Kundin' },
            { id: 'm1_3', title: 'One of Them Days', year: '2025', emoji: '💸', vibe: 'Buddy-Comedy · 12 Stunden Chaos, um die Miete zu retten' },
            { id: 'm1_4', title: 'Jackpot!', year: '2024', emoji: '🎰', vibe: 'Action-Spaß · Lottogewinn in LA mit verrückter Kopfgeldjagd' },
            { id: 'm1_5', title: 'icky Stanicky', year: '2024', emoji: '🍻', vibe: 'Kult-Klamauk · Erfundener bester Freund wird plötzlich real' },
            { id: 'm1_6', title: 'You\'re Cordially Invited', year: '2025', emoji: '🎂', vibe: 'Hochzeits-Chaos · Zwei Familien buchen dieselbe Trauminsel' },
            { id: 'm1_7', title: 'Thelma', year: '2024', emoji: '🛵', vibe: 'Feel-Good-Hit · 93-jährige Oma auf Rachemission gegen Telefonbetrüger' },
            { id: 'm1_8', title: 'Brothers', year: '2024', emoji: '🚐', vibe: 'Chaos-Komödie · Ungleiche Zwillingsbrüder auf schrägem Raubzug' }
        ],
        // 2: Packende True-Crime-Doku (2024-2026 Feature Docs ONLY)
        2: [
            { id: 'm2_1', title: 'What Jennifer Did', year: '2024', emoji: '🚨', vibe: 'True-Crime-Film · Verhörprotokolle eines schockierenden Falls' },
            { id: 'm2_2', title: 'Lover, Stalker, Killer', year: '2024', emoji: '💻', vibe: 'True-Crime-Doku · Online-Dating wird zum jahrelangen Albtraum' },
            { id: 'm2_3', title: 'Chaos: The Manson Murders', year: '2025', emoji: '📂', vibe: 'Enthüllungs-Doku · Errol Morris deckt völlig neue Hintergründe auf' },
            { id: 'm2_4', title: 'The Menendez Brothers', year: '2024', emoji: '🎙️', vibe: 'True-Crime-Film · Die Brüder sprechen erstmals selbst über den Fall' },
            { id: 'm2_5', title: 'Sweet Bobby: My Catfish Nightmare', year: '2024', emoji: '🕵️‍♀️', vibe: 'Mindfuck-Doku · Einer der unglaublichsten Identitätsbetrüge Europas' },
            { id: 'm2_6', title: 'Jailbreak: Love on the Run', year: '2024', emoji: '🚓', vibe: 'True-Crime-Film · Gefängnisbeamtin flieht mit verurteiltem Häftling' },
            { id: 'm2_7', title: 'Into the Fire: The Lost Daughter', year: '2024', emoji: '🔥', vibe: 'Gänsehaut-Doku · Eine Mutter klärt auf eigene Faust ein Verbrechen auf' },
            { id: 'm2_8', title: 'Con Mum', year: '2025', emoji: '🥂', vibe: 'True-Crime-Doku · Luxus-Hochstaplerin taucht als verlorene Mutter auf' }
        ],
        // 3: Sci-Fi oder Action-Blockbuster (2024-2026 Movies ONLY)
        3: [
            { id: 'm3_1', title: 'Dune: Part Two', year: '2024', emoji: '🏜️', vibe: 'Heimkino-Gigant · Episches Sci-Fi-Meisterwerk von Denis Villeneuve' },
            { id: 'm3_2', title: 'Furiosa: A Mad Max Saga', year: '2024', emoji: '🔥', vibe: 'High-Octane Action · Nonstop-Adrenalin im Wasteland' },
            { id: 'm3_3', title: 'Mickey 17', year: '2025', emoji: '🚀', vibe: 'Sci-Fi-Highlight · Robert Pattinson als geklonter Weltraum-Arbeiter' },
            { id: 'm3_4', title: 'Civil War', year: '2024', emoji: '📸', vibe: 'A24-Blockbuster · Packender Roadtrip durch ein gespaltenes Amerika' },
            { id: 'm3_5', title: 'Gladiator II', year: '2024', emoji: '⚔️', vibe: 'Arena-Blockbuster · Kolosseum-Spektakel von Ridley Scott' },
            { id: 'm3_6', title: 'The Gorge', year: '2025', emoji: '🏞️', vibe: 'Sci-Fi-Action · Zwei Scharfschützen bewachen eine mysteriöse Schlucht' },
            { id: 'm3_7', title: 'Alien: Romulus', year: '2024', emoji: '👽', vibe: 'Sci-Fi-Spannung · Zurück zu den düsteren Weltraum-Wurzeln' },
            { id: 'm3_8', title: 'Kingdom of the Planet of the Apes', year: '2024', emoji: '🦍', vibe: 'Abenteuer-Blockbuster · Gigantische Bilder & neue Ära' }
        ],
        // 4: Kultfilm aus den 90ern / 2000ern (Explicit Nostalgia Category)
        4: [
            { id: 'm4_1', title: 'Ocean\'s Eleven', year: '2001', emoji: '🎰', vibe: 'Kult-Klassiker · Der coolste Casino-Raubzug aller Zeiten' },
            { id: 'm4_2', title: 'The Matrix', year: '1999', emoji: '🕶️', vibe: 'Sci-Fi-Meilenstein · Rote oder blaue Pille?' },
            { id: 'm4_3', title: 'Catch Me If You Can', year: '2002', emoji: '✈️', vibe: 'Feel-Good-Kult · DiCaprio & Tom Hanks im genialen Katz-und-Maus-Spiel' },
            { id: 'm4_4', title: 'Gladiator', year: '2000', emoji: '⚔️', vibe: 'Epos · Gänsehaut-Soundtrack von Hans Zimmer' },
            { id: 'm4_5', title: '10 Dinge, die ich an dir hasse', year: '1999', emoji: '🎸', vibe: '90er-RomCom-Kult · Heath Ledger & Julia Stiles' },
            { id: 'm4_6', title: 'The Dark Knight', year: '2008', emoji: '🦇', vibe: 'Meisterwerk · Heath Ledger als legendärer Joker' },
            { id: 'm4_7', title: 'Pulp Fiction', year: '1994', emoji: '🍔', vibe: 'Tarantino-Kult · Coole Dialoge & legendärer Soundtrack' },
            { id: 'm4_8', title: 'Der Teufel trägt Prada', year: '2006', emoji: '👠', vibe: '2000er-Liebling · Meryl Streep & Anne Hathaway in Bestform' }
        ],
        // 5: Grusel-, Mystery- oder Smarter Horrorfilm (2024-2026 Movies ONLY)
        5: [
            { id: 'm5_1', title: 'Heretic', year: '2024', emoji: '🕯️', vibe: 'Smart Horror · Hugh Grant in einem teuflisch cleveren Katz-und-Maus-Spiel' },
            { id: 'm5_2', title: 'Longlegs', year: '2024', emoji: '🗂️', vibe: 'Mystery-Horror · Düsterer FBI-Okkult-Thriller im 90er-Stil' },
            { id: 'm5_3', title: 'The Substance', year: '2024', emoji: '💉', vibe: 'Kult-Schocker · Demi Moore im extremsten Body-Horror-Hit des Jahres' },
            { id: 'm5_4', title: 'Nosferatu', year: '2024', emoji: '🦇', vibe: 'Gothic-Meisterwerk · Atmosphärischer Gänsehaut-Film von Robert Eggers' },
            { id: 'm5_5', title: 'A Quiet Place: Day One', year: '2024', emoji: '🤫', vibe: 'Survival-Horror · Tag 1 der Invasion mitten in New York' },
            { id: 'm5_6', title: 'Presence', year: '2025', emoji: '👻', vibe: 'Mystery-Experiment · Spukhaus-Thriller komplett aus Geister-Perspektive' },
            { id: 'm5_7', title: 'Smile 2', year: '2024', emoji: '😈', vibe: 'Hochspannung · Popstar gerät in einen unaufhaltsamen Albtraum' },
            { id: 'm5_8', title: 'Speak No Evil', year: '2024', emoji: '🏡', vibe: 'Psycho-Grusel · Wochenendbesuch bei Urlaubsbekannten kippt insBöse' }
        ],
        // 6: Krimi-Rätsel à la Knives Out (2024-2026 Movies ONLY)
        6: [
            { id: 'm6_1', title: 'Wake Up Dead Man: A Knives Out Mystery', year: '2025', emoji: '🔍', vibe: 'Whodunit-Highlight · Benoit Blancs neuester, düsterster Rätselfall' },
            { id: 'm6_2', title: 'Conclave', year: '2024', emoji: '🗳️', vibe: 'Rätsel hinter verschlossenen Türen · Wer sabotiert die Papstwahl?' },
            { id: 'm6_3', title: 'The Thursday Murder Club', year: '2025', emoji: '🕵️‍♀️', vibe: 'Cozy-Crime-Hit · Vier clevere Senioren lösen einen echten Mordfall' },
            { id: 'm6_4', title: 'Juror #2', year: '2024', emoji: '⚖️', vibe: 'Gerichts-Krimi · Clint Eastwoods packendes Indizien-Rätsel' },
            { id: 'm6_5', title: 'A Haunting in Venice', year: '2024', emoji: '🎭', vibe: 'Agatha-Christie-Flair · Hercule Poirot ermittelt im nächtlichen Palazzo' },
            { id: 'm6_6', title: 'Reunion', year: '2024', emoji: '🥂', vibe: 'Whodunit-Comedy · Mord beim eingeschneiten Klassentreffen' },
            { id: 'm6_7', title: 'Greedy People', year: '2024', emoji: '💰', vibe: 'Krimi-Komödie · Kleinstadt-Polizisten, eine Leiche & eine Million Dollar' },
            { id: 'm6_8', title: 'Knox Goes Away', year: '2024', emoji: '🧩', vibe: 'Neo-Noir-Rätsel · Michael Keaton im Wettlauf gegen das eigene Gedächtnis' }
        ],
        // 7: Meisterwerk-Animation (2024-2026 Movies ONLY)
        7: [
            { id: 'm7_1', title: 'The Wild Robot (Der wilde Roboter)', year: '2024', emoji: '🤖', vibe: 'Meisterwerk · Visuell überwältigend, witzig & voller Herz' },
            { id: 'm7_2', title: 'Flow', year: '2024', emoji: '🐈‍⬛', vibe: 'Oscar-Gewinner · Magische Reise einer kleinen schwarzen Katze ohne ein Wort' },
            { id: 'm7_3', title: 'Inside Out 2 (Alles steht Kopf 2)', year: '2024', emoji: '🧠', vibe: 'Pixar-Hit · Neue Emotionen sorgen für brillantes Gefühlschaos' },
            { id: 'm7_4', title: 'Wallace & Gromit: Vengeance Most Fowl', year: '2024', emoji: '🐧', vibe: 'Kult-Stop-Motion · Bösewicht-Pinguin Feathers McGraw ist zurück' },
            { id: 'm7_5', title: 'Memoir of a Snail', year: '2024', emoji: '🐌', vibe: 'Indie-Perle · Tiefgründige, warmherzige Stop-Motion-Tragikomödie' },
            { id: 'm7_6', title: 'Transformers One', year: '2024', emoji: '⚡', vibe: 'Überraschungs-Hit · Rasant animierte Origin-Story auf Cybertron' },
            { id: 'm7_7', title: 'Orion and the Dark', year: '2024', emoji: '🌙', vibe: 'DreamWorks-Perle · Einfallsreiches Abenteuer durch die Nacht' },
            { id: 'm7_8', title: 'The Boy and the Heron', year: '2024', emoji: '🦩', vibe: 'Studio Ghibli · Hayao Miyazakis bildgewaltiges Fantasy-Meisterwerk' }
        ],
        // 8: Rom-Com oder Liebesfilm mit gutem Humor (2024-2026 Movies ONLY)
        8: [
            { id: 'm8_1', title: 'Anyone But You (Wo die Lüge hinfällt)', year: '2024', emoji: '🏖️', vibe: 'Rom-Com-Hit · Sydney Sweeney & Glen Powell als Fake-Paar in Australien' },
            { id: 'm8_2', title: 'We Live in Time', year: '2024', emoji: '🎠', vibe: 'Herz & Humor · Florence Pugh & Andrew Garfield mit unglaublicher Chemie' },
            { id: 'm8_3', title: 'The Idea of You', year: '2024', emoji: '🎤', vibe: 'Prime-Liebling · Anne Hathaway in einer charmanten Sommer-Romanze' },
            { id: 'm8_4', title: 'Upgraded', year: '2024', emoji: '✈️', vibe: 'Wohlfühl-RomCom · Zufälliges First-Class-Upgrade führt zu Liebeswirren in London' },
            { id: 'm8_5', title: 'Fly Me to the Moon', year: '2024', emoji: '🌙', vibe: 'Retro-Charme · Scarlett Johansson & Channing Tatum beim Apollo-11-Countdown' },
            { id: 'm8_6', title: 'Bridget Jones: Mad About the Boy', year: '2025', emoji: '📓', vibe: 'Comeback · Witzig, warmherzig und voller britischem Selbstironie-Charme' },
            { id: 'm8_7', title: 'Materialists', year: '2025', emoji: '💍', vibe: 'A24-RomCom · Dakota Johnson, Pedro Pascal & Chris Evans in New York' },
            { id: 'm8_8', title: 'La Dolce Villa', year: '2025', emoji: '🍋', vibe: 'Italien-Romantik · 1-Euro-Haus in der Toskana sorgt für Urlaubsgefühle' }
        ],
        // 9: Atemberaubende Natur-, Weltraum- oder Reisereportage (2024-2026 Docs ONLY)
        9: [
            { id: 'm9_1', title: 'Wilding', year: '2024', emoji: '🦌', vibe: 'Natur-Wunder · Wie ein Paar ein ganzes Landgut zurück in echte Wildnis verwandelt' },
            { id: 'm9_2', title: 'Skywalkers: A Love Story', year: '2024', emoji: '🏙️', vibe: 'Schwindelfrei · Spektakuläre 4K-Aufnahmen auf den höchsten Wolkenkratzern der Welt' },
            { id: 'm9_3', title: 'The Remarkable Life of Ibelin', year: '2024', emoji: '🌌', vibe: 'Preisgekrönt · Eine der bewegendsten Dokumentationen der letzten Jahre' },
            { id: 'm9_4', title: 'Apollo 13: Survival', year: '2024', emoji: '🚀', vibe: 'Weltraum-Doku · Originalaufnahmen & Funkverkehr der dramatischsten NASA-Mission' },
            { id: 'm9_5', title: 'The Blue Angels', year: '2024', emoji: '✈️', vibe: 'IMAX-Feeling · Atemberaubende Cockpit-Aufnahmen in 4K' },
            { id: 'm9_6', title: 'Billy & Molly: An Otter Love Story', year: '2024', emoji: '🦦', vibe: 'National Geographic · Herzerwärmende Naturaufnahme auf den Shetlandinseln' },
            { id: 'm9_7', title: 'Mountain Queen: The Summits of Lhakpa Sherpa', year: '2024', emoji: '🏔️', vibe: 'Everest-Doku · Gigantische Himalaya-Bilder & unglaubliche Lebensgeschichte' },
            { id: 'm9_8', title: 'Ocean with David Attenborough', year: '2025', emoji: '🐋', vibe: '4K-Meisterwerk · Attenboroughs neueste Reise in die Tiefsee' }
        ],
        // 10: Heist-Movie (Bankraub, Casino-Trick & coole Gangster) (2024-2026 Movies ONLY)
        10: [
            { id: 'm10_1', title: 'The Instigators', year: '2024', emoji: '💰', vibe: 'Heist-Action · Matt Damon & Casey Affleck bei einem chaotischen Raubüberfall' },
            { id: 'm10_2', title: 'Wolfs', year: '2024', emoji: '🐺', vibe: 'Cooles Duo · George Clooney & Brad Pitt als rivalisierende Unterwelt-Fixer' },
            { id: 'm10_3', title: 'Den of Thieves 2: Pantera', year: '2025', emoji: '💎', vibe: 'Diamanten-Raub · Gerard Butler plant den größten Coup an der Côte d\'Azur' },
            { id: 'm10_4', title: 'Lift', year: '2024', emoji: '✈️', vibe: 'High-Tech-Heist · Goldraub aus einem Passagierflugzeug in 12.000 Metern Höhe' },
            { id: 'm10_5', title: 'Hit Man', year: '2024', emoji: '🕶️', vibe: 'Cleverer Trick · Täuschungsmanöver, falsche Identitäten & ein perfekter Plan' },
            { id: 'm10_6', title: 'Riff Raff', year: '2025', emoji: '🥃', vibe: 'Gangster-Comedy · Ruhestand eines Ex-Kriminellen wird an Silvester gesprengt' },
            { id: 'm10_7', title: 'Love Lies Bleeding', year: '2024', emoji: '💪', vibe: 'A24-Crime · Pulsierender Neo-Noir-Thriller in der Wüste von New Mexico' },
            { id: 'm10_8', title: 'The Amateur', year: '2025', emoji: '💻', vibe: 'Smarter Rache-Plan · CIA-Kryptograf (Rami Malek) überlistet Profis weltweit' }
        ],
        // 11: Preisgekröntes Highlight (Oscar-Gewinner / A24-Film) (2024-2026 Movies ONLY)
        11: [
            { id: 'm11_1', title: 'Anora', year: '2024', emoji: '🏆', vibe: '5× Oscar-Gewinner · Rasante, urkomische & berührende Palme-d\'Or-Sensation' },
            { id: 'm11_2', title: 'Challengers', year: '2024', emoji: '🎾', vibe: 'Kino-Rausch · Zendaya im elektrisierenden Liebesdreieck mit treibendem Beat' },
            { id: 'm11_3', title: 'A Real Pain', year: '2024', emoji: '🎒', vibe: 'Oscar-prämiert · Kieran Culkin & Jesse Eisenberg als ungleiche Cousins auf Reise' },
            { id: 'm11_4', title: 'The Brutalist', year: '2024', emoji: '🏛️', vibe: 'Oscar-Meisterwerk · Adrien Brody in einem monumentalen Kino-Epos' },
            { id: 'm11_5', title: 'Civil War', year: '2024', emoji: '📷', vibe: 'A24-Highlight · Intensives Kino, das noch tagelang nachwirkt' },
            { id: 'm11_6', title: 'Past Lives', year: '2024', emoji: '🌃', vibe: 'A24-Perle · Einer der schönsten, klügsten Filme über Schicksal & Liebe' },
            { id: 'm11_7', title: 'Sing Sing', year: '2024', emoji: '🎭', vibe: 'Kritiker-Liebling · Colman Domingo in einer tief bewegenden wahren Geschichte' },
            { id: 'm11_8', title: 'Anatomy of a Fall (Anatomie eines Falls)', year: '2024', emoji: '❄️', vibe: 'Oscar-Gewinner · Fesselndes Gerichts- & Beziehungsdrama in den Alpen' }
        ],
        // 12: Survival-, Abenteuer- oder Katastrophen-Thriller (2024-2026 Movies ONLY)
        12: [
            { id: 'm12_1', title: 'Twisters', year: '2024', emoji: '🌪️', vibe: 'Katastrophen-Action · Glen Powell & Daisy Edgar-Jones mitten im Monster-Tornado' },
            { id: 'm12_2', title: 'Society of the Snow (Die Schneegesellschaft)', year: '2024', emoji: '🏔️', vibe: 'Survival-Meisterwerk · Unglaublicher Überlebenskampf in den Anden' },
            { id: 'm12_3', title: 'Last Breath', year: '2025', emoji: '🤿', vibe: 'Tiefsee-Survival · Wettlauf gegen die Zeit 100 Meter unter der Nordsee' },
            { id: 'm12_4', title: 'Arthur the King', year: '2024', emoji: '🐕', vibe: 'Abenteuer nach wahrer Geschichte · 700 km durch den Dschungel mit Streunerhund' },
            { id: 'm12_5', title: 'Eden', year: '2024', emoji: '🏝️', vibe: 'Insel-Thriller · Aussteiger-Paradies auf den Galápagos-Inseln eskaliert' },
            { id: 'm12_6', title: 'Land of Bad', year: '2024', emoji: '🚁', vibe: 'Survival-Action · Russell Crowe & Liam Hemsworth hinter feindlichen Linien' },
            { id: 'm12_7', title: 'One Fast Move', year: '2024', emoji: '🏍️', vibe: 'Adrenalin · Packendes Motorrad-Renn-Drama auf Prime Video' },
            { id: 'm12_8', title: 'Elevation', year: '2024', emoji: '⛰️', vibe: 'Sci-Fi-Survival · Überleben in den Rocky Mountains oberhalb von 2.400 Metern' }
        ],
        // 13: Biopic / Wahre Geschichte (Musik, Sport oder Genie) (2024-2026 Movies ONLY)
        13: [
            { id: 'm13_1', title: 'A Complete Unknown', year: '2024', emoji: '🎸', vibe: 'Musik-Biopic · Timothée Chalamet als junger Bob Dylan im New York der 60er' },
            { id: 'm13_2', title: 'Better Man', year: '2024', emoji: '🎤', vibe: 'Kreativ & Mitreißend · Das spektakulär inszenierte Robbie-Williams-Biopic' },
            { id: 'm13_3', title: 'Dune / Oppenheimer Double – Oppenheimer', year: '2024', emoji: '💥', vibe: '7× Oscar-Sieger · Christopher Nolans packendes Biopic-Meisterwerk' },
            { id: 'm13_4', title: 'Unstoppable', year: '2024', emoji: '🥇', vibe: 'Sport-Triumph · Wahre Geschichte des Ringers Anthony Robles auf Prime Video' },
            { id: 'm13_5', title: 'One Life', year: '2024', emoji: '🚂', vibe: 'Gänsehaut pur · Anthony Hopkins in einer unglaublichen wahren Rettungsgeschichte' },
            { id: 'm13_6', title: 'Young Woman and the Sea', year: '2024', emoji: '🏊‍♀️', vibe: 'Sport-Biopic · Daisy Ridley durchschwimmt als erste Frau den Ärmelkanal' },
            { id: 'm13_7', title: 'Saturday Night', year: '2024', emoji: '📺', vibe: 'Echtzeit-Biopic · Die chaotischen 90 Minuten vor der allerersten SNL-Show' },
            { id: 'm13_8', title: 'The Iron Claw', year: '2024', emoji: '🤼', vibe: 'A24-Drama · Zac Efron & Jeremy Allen White in der wahren Geschichte der Von-Erich-Brüder' }
        ]
    },

    series: {
        // 0: Spannende Miniserie (1 Staffel) (2024-2026 Series ONLY)
        0: [
            { id: 's0_1', title: 'Adolescence', year: '2025', emoji: '🎬', vibe: 'Meisterwerk in 4 Folgen · Jede Episode in einer einzigen Einstellung gedreht' },
            { id: 's0_2', title: 'The Day of the Jackal', year: '2024', emoji: '🎯', vibe: 'Hochspannung · Eddie Redmayne im rasanten Katz-und-Maus-Spiel quer durch Europa' },
            { id: 's0_3', title: 'Baby Reindeer (Rentierbaby)', year: '2024', emoji: '🦌', vibe: 'Emmy-Sensation · Wahre, abgründige Stalking-Geschichte in 7 kurzen Folgen' },
            { id: 's0_4', title: 'Ripley', year: '2024', emoji: '🇮🇹', vibe: 'Edler Thriller · Andrew Scott als Hochstapler an der italienischen Amalfiküste' },
            { id: 's0_5', title: 'Presumed Innocent (Aus Mangel an Beweisen)', year: '2024', emoji: '⚖️', vibe: 'Justiz-Thriller · Jake Gyllenhaal wird selbst zum Hauptverdächtigen im Mordfall' },
            { id: 's0_6', title: 'Black Doves', year: '2024', emoji: '🕊️', vibe: 'Spionage-Miniserie · Keira Knightley & Ben Whishaw im winterlichen London' },
            { id: 's0_7', title: 'Zero Day', year: '2025', emoji: '💻', vibe: 'Polit-Thriller · Robert De Niro jagt die Drahtzieher einer landesweiten Cyber-Attacke' },
            { id: 's0_8', title: 'A Good Girl\'s Guide to Murder', year: '2024', emoji: '🔍', vibe: 'Whodunit-Miniserie · 6 spannende Folgen zum Miträtseln' }
        ],
        // 1: Witzige Comfort-Sitcom (2024-2026 Series ONLY)
        1: [
            { id: 's1_1', title: 'Nobody Wants This', year: '2024', emoji: '🎙️', vibe: 'Feel-Good-Hit · Kristen Bell & Adam Brody in der charmantesten Comedy-Serie des Jahres' },
            { id: 's1_2', title: 'The Studio', year: '2025', emoji: '🎬', vibe: 'Hollywood-Comedy · Seth Rogen verzweifelt als neuer Chef eines Chaos-Filmstudios' },
            { id: 's1_3', title: 'A Man on the Inside (Undercover im Seniorenheim)', year: '2024', emoji: '🕵️‍♂️', vibe: 'Herzerwärmend & Witzig · Ted Danson ermittelt undercover in einer Seniorenresidenz' },
            { id: 's1_4', title: 'Running Point', year: '2025', emoji: '🏀', vibe: 'Sport-Comedy · Kate Hudson übernimmt überraschend ein Profi-Basketballteam' },
            { id: 's1_5', title: 'Shrinking (Staffel 2)', year: '2024', emoji: '🛋️', vibe: 'Herausragend · Jason Segel & Harrison Ford zwischen Lachen und Rührung' },
            { id: 's1_6', title: 'St. Denis Medical', year: '2024', emoji: '🩺', vibe: 'Mockumentary-Sitcom · Wie „The Office“, nur mitten im Krankenhaus-Alltag' },
            { id: 's1_7', title: 'Hacks (Staffel 3)', year: '2024', emoji: '🎤', vibe: 'Emmy-Sieger · Messerscharfer Humor hinter den Kulissen von Las Vegas' },
            { id: 's1_8', title: 'Only Murders in the Building (Staffel 4)', year: '2024', emoji: '🏢', vibe: 'Cozy-Crime-Comedy · Steve Martin, Martin Short & Selena Gomez ermitteln wieder' }
        ],
        // 2: Dark Mystery oder Sci-Fi-Rätsel (2024-2026 Series ONLY)
        2: [
            { id: 's2_1', title: 'Severance (Staffel 2)', year: '2025', emoji: '🛗', vibe: 'Sci-Fi-Phänomen · Das genialste Mystery-Rätsel im aktuellen Streaming' },
            { id: 's2_2', title: 'Fallout', year: '2024', emoji: '☢️', vibe: 'Prime-Video-Megahit · Schwarzer Humor, Bunker-Geheimnisse & grandiose Endzeit-Welt' },
            { id: 's2_3', title: 'Silo (Staffel 2)', year: '2024', emoji: '🔩', vibe: 'Cliffhanger-Garantie · Was liegt wirklich außerhalb des unterirdischen Bunkers?' },
            { id: 's2_4', title: '3 Body Problem', year: '2024', emoji: '🪐', vibe: 'Sci-Fi-Rätsel · Mysteriöse Countdowns & eine Bedrohung aus den Tiefen des Alls' },
            { id: 's2_5', title: 'Dark Matter', year: '2024', emoji: '🚪', vibe: 'Mindfuck-Sci-Fi · Ein Physiker wird in eine Parallelversion seines eigenen Lebens entführt' },
            { id: 's2_6', title: 'Paradise', year: '2025', emoji: '🏛️', vibe: 'Rätsel-Thriller · Der spektakulärste Pilotfolgen-Twist des Jahres' },
            { id: 's2_7', title: 'From (Staffel 3)', year: '2024', emoji: '🌲', vibe: 'Mystery-Suchtgefahr · Eine Kleinstadt, die niemanden wieder gehen lässt' },
            { id: 's2_8', title: 'Bodies', year: '2024', emoji: '⏳', vibe: 'Zeitreise-Krimi · Vier Detektive finden in vier Epochen exakt dieselbe Leiche' }
        ],
        // 3: Reality-TV, Dating-Show oder Survival (2024-2026 Series ONLY)
        3: [
            { id: 's3_1', title: '7 vs. Wild: Crashed (Staffel 4)', year: '2024', emoji: '✈️', vibe: 'Survival-Hit · Flugzeugwrack-Aussetzung bei eisiger Kälte in Neuseeland' },
            { id: 's3_2', title: 'Beast Games', year: '2024', emoji: '💰', vibe: 'Prime-Rekordshow · 1.000 Teilnehmer kämpfen um 5 Millionen Dollar' },
            { id: 's3_3', title: 'The Traitors (Die Verräter)', year: '2024', emoji: '🗡️', vibe: 'Psychospiel · Wer lügt allen mitten ins Gesicht?' },
            { id: 's3_4', title: 'Love Is Blind: Germany', year: '2025', emoji: '💍', vibe: 'Dating-Experiment · Verloben, ohne sich vorher jemals gesehen zu haben' },
            { id: 's3_5', title: 'Squid Game: The Challenge', year: '2024', emoji: '🦑', vibe: 'Nervenkitzel · Echte Kandidaten in den kultigen Spielen um 4,56 Mio. Dollar' },
            { id: 's3_6', title: 'LOL: Last One Laughing (Neue Staffeln)', year: '2025', emoji: '😂', vibe: '6 Stunden nicht lachen · Perfekt zum Abschalten auf der Couch' },
            { id: 's3_7', title: 'Million Dollar Secret', year: '2025', emoji: '🧳', vibe: 'Bluff-Reality · Einer im Luxus-Resort versteckt heimlich eine Million Dollar' },
            { id: 's3_8', title: 'Kaulitz & Kaulitz', year: '2024', emoji: '🥂', vibe: 'Guilty-Pleasure-Hit · Unterhaltsamer Blick hinter die Kulissen in LA' }
        ],
        // 4: Hochbewertetes Prestige-Drama / Mafia (2024-2026 Series ONLY)
        4: [
            { id: 's4_1', title: 'The Penguin', year: '2024', emoji: '🐧', vibe: 'IMDb 8.7 · Colin Farrell im düsteren Mafia-Aufstieg in Gotham City' },
            { id: 's4_2', title: 'The Gentlemen', year: '2024', emoji: '🥃', vibe: 'Guy-Ritchie-Style · Britischer Adel trifft auf ein unterirdisches Imperium' },
            { id: 's4_3', title: 'Landman', year: '2024', emoji: '🛢️', vibe: 'Prestige-Drama · Billy Bob Thornton im Milliarden-Geschäft der texanischen Öl-Barone' },
            { id: 's4_4', title: 'The Bear (Staffel 3)', year: '2024', emoji: '🔪', vibe: 'Ausnahme-Serie · Hochspannung, Perfektionismus & Emotionen in der Sterneküche' },
            { id: 's4_5', title: 'MobLand', year: '2025', emoji: '🕴️', vibe: 'Gangster-Drama · Tom Hardy, Pierce Brosnan & Helen Mirren im Londoner Unterweltkrieg' },
            { id: 's4_6', title: 'Squid Game (Staffel 2)', year: '2024', emoji: '🎭', vibe: 'Welt-Event · Gi-hun kehrt zurück in das tödliche Spiel' },
            { id: 's4_7', title: 'The Pitt', year: '2025', emoji: '🏥', vibe: 'Echtzeit-Drama · 15 Stunden Schicht in der Notaufnahme – jede Folge 1 Stunde' },
            { id: 's4_8', title: 'Mr. & Mrs. Smith', year: '2024', emoji: '💼', vibe: 'Prime-Highlight · Donald Glover & Maya Erskine als frisch verheiratete Spione' }
        ],
        // 5: Düsterer Skandi-Krimi oder Detektiv-Serie (2024-2026 Series ONLY)
        5: [
            { id: 's5_1', title: 'Dept. Q', year: '2025', emoji: '📁', vibe: 'Cold-Case-Thriller · Neues Ermittlerteam rollt ungelöste Fälle in Edinburgh auf' },
            { id: 's5_2', title: 'Slow Horses (Staffel 4)', year: '2024', emoji: '🧥', vibe: 'IMDb-Liebling · Gary Oldman als brillant-abgehalfterter MI5-Chef' },
            { id: 's5_3', title: 'True Detective: Night Country', year: '2024', emoji: '❄️', vibe: 'Eisige Spannung · Jodie Foster ermittelt in der ewigen Polarnacht Alaskas' },
            { id: 's5_4', title: 'The Åre Murders (Die Åre-Morde)', year: '2025', emoji: '🏔️', vibe: 'Schwedischer Nordic Noir · Spurensuche im verschneiten Skigebiet' },
            { id: 's5_5', title: 'The Breakthrough (Der Durchbruch)', year: '2025', emoji: '🧬', vibe: 'Skandi-Krimi nach wahrem Fall · Wie ein Ahnenforscher einen 16 Jahre alten Doppelmord löst' },
            { id: 's5_6', title: 'Criminal Record', year: '2024', emoji: '🚓', vibe: 'London-Thriller · Zwei Ermittler prallen bei einem alten Mordgeständnis aufeinander' },
            { id: 's5_7', title: 'Cross', year: '2024', emoji: '🧩', vibe: 'Prime-Krimi · Detective Alex Cross jagt einen extrem manipulativen Serienmörder' },
            { id: 's5_8', title: 'Under the Bridge', year: '2024', emoji: '🌉', vibe: 'Atmosphärischer Crime · Lily Gladstone ermittelt in einem schockierenden Kriminalfall' }
        ],
        // 6: Fantasy-, Mittelalter- oder Historien-Epos (2024-2026 Series ONLY)
        6: [
            { id: 's6_1', title: 'Shōgun', year: '2024', emoji: '⚔️', vibe: '18× Emmy-Rekordsieger · Monumentales Meisterwerk im feudalen Japan' },
            { id: 's6_2', title: 'House of the Dragon (Staffel 2)', year: '2024', emoji: '🐉', vibe: 'Fantasy-Blockbuster · Der Tanz der Drachen bricht mit voller Wucht aus' },
            { id: 's6_3', title: 'Der Herr der Ringe: Die Ringe der Macht (Staffel 2)', year: '2024', emoji: '💍', vibe: 'Prime-Epos · Saurons Aufstieg und die Belagerung von Eregion' },
            { id: 's6_4', title: '1923 (Staffel 2)', year: '2025', emoji: '🐎', vibe: 'Western-Epos · Harrison Ford & Helen Mirren verteidigen die Yellowstone-Ranch' },
            { id: 's6_5', title: 'A Thousand Blows', year: '2025', emoji: '🥊', vibe: 'Peaky-Blinders-Macher · Untergrund-Boxen & Banden im viktorianischen London' },
            { id: 's6_6', title: 'American Primeval', year: '2025', emoji: '🏹', vibe: 'Rau & Packend · Überlebenskampf im gesetzlosen Wilden Westen 1857' },
            { id: 's6_7', title: 'Dune: Prophecy', year: '2024', emoji: '🌙', vibe: 'Sci-Fi-Historie · Machtspiele der Schwesternschaft 10.000 Jahre vor Paul Atreides' },
            { id: 's6_8', title: 'Those About to Die', year: '2024', emoji: '🏛️', vibe: 'Antikes Rom · Anthony Hopkins, Wagenrennen und Intrigen im Circus Maximus' }
        ],
        // 7: Koch-Show, Back-Wettbewerb oder Food-Reise (2024-2026 Series ONLY)
        7: [
            { id: 's7_1', title: 'Culinary Class Wars', year: '2024', emoji: '👨‍🍳', vibe: 'Mega-Hit · 100 Köche treten im spektakulärsten Kochduell der Welt gegeneinander an' },
            { id: 's7_2', title: 'Somebody Feed Phil (Staffel 7)', year: '2024', emoji: '🍜', vibe: 'Gute Laune & Hunger · Kulinarische Weltreise von Kyoto bis Schottland' },
            { id: 's7_3', title: 'Chef\'s Table: Noodles', year: '2024', emoji: '🍝', vibe: 'Food-Porn in 4K · Die besten Pasta- und Nudelmeister der Welt' },
            { id: 's7_4', title: 'Stanley Tucci: Searching for Italy / Tucci in Italy', year: '2025', emoji: '🍷', vibe: 'Dolce Vita pur · Reisen, Wein und unfassbar gutes italienisches Essen' },
            { id: 's7_5', title: 'Is It Cake? (Staffel 3)', year: '2024', emoji: '🎂', vibe: 'Mitraten auf der Couch · Täuschend echte Alltagsgegenstände aus Kuchen' },
            { id: 's7_6', title: 'Dinner Time Live with David Chang', year: '2024', emoji: '🔥', vibe: 'Ungeschnitten & Locker · Kochen für prominente Gäste ohne Drehbuch' },
            { id: 's7_7', title: 'Clarkson\'s Farm (Staffel 3)', year: '2024', emoji: '🚜', vibe: 'Prime-Publikumsliebling · Urkomisches Chaos auf der eigenen Farm & im Hofladen' },
            { id: 's7_8', title: 'With Love, Meghan / Bite Size Food Docs', year: '2025', emoji: '🍋', vibe: 'Entspanntes Lifestyle-Kochen · Leichte Rezepte & Gastgeber-Ideen' }
        ],
        // 8: Anthologie-Serie (Jede Folge eine eigene Story) (2024-2026 Series ONLY)
        8: [
            { id: 's8_1', title: 'Black Mirror (Staffel 7)', year: '2025', emoji: '🪞', vibe: 'Kult-Anthologie · 6 brandneue, eigenständige Sci-Fi- & Psycho-Geschichten' },
            { id: 's8_2', title: 'Secret Level', year: '2024', emoji: '🎮', vibe: 'Prime-Highlight · 15 bildgewaltige Kurzfilme von den „Love, Death & Robots“-Machern' },
            { id: 's8_3', title: 'Fargo (Staffel 5)', year: '2024', emoji: '❄️', vibe: 'Abgeschlossene Staffel · Juno Temple & Jon Hamm in einer rabenschwarzen Entführungsstory' },
            { id: 's8_4', title: 'Love, Death & Robots (Neue Folgen)', year: '2025', emoji: '🤖', vibe: '15-Minuten-Meisterwerke · Jede Folge ein eigener Stil und ein krasser Twist' },
            { id: 's8_5', title: 'True Detective: Night Country', year: '2024', emoji: '🔦', vibe: 'Eigenständiger Fall · Komplett unabhängig von früheren Staffeln schaubar' },
            { id: 's8_6', title: 'Feud: Capote vs. The Swans', year: '2024', emoji: '🦢', vibe: 'Abgeschlossene Miniserie · Skandal in der New Yorker High Society' },
            { id: 's8_7', title: 'Monsters: The Lyle and Erik Menendez Story', year: '2024', emoji: '🌴', vibe: 'Anthologie-Staffel · Hochspannend inszenierter True-Crime-Fall in Beverly Hills' },
            { id: 's8_8', title: 'The White Lotus (Staffel 3 – Thailand)', year: '2025', emoji: '🌺', vibe: 'Neue Urlaubsgäste, neues Luxusresort, neues Todesopfer' }
        ],
        // 9: Mitreißende Sport- oder Backstage-Dokuserie (2024-2026 Series ONLY)
        9: [
            { id: 's9_1', title: 'Formula 1: Drive to Survive (Staffel 7)', year: '2025', emoji: '🏎️', vibe: 'Adrenalin hinter den Kulissen · Fahrerwechsel, Rivalitäten & Highspeed-Drama' },
            { id: 's9_2', title: 'Starting 5', year: '2024', emoji: '🏀', vibe: 'NBA Hautnah · LeBron James, Jayson Tatum & Co. durch eine komplette Saison begleitet' },
            { id: 's9_3', title: 'Sprint', year: '2024', emoji: '⚡', vibe: 'Hundertstelsekunden · Die schnellsten Menschen der Welt auf dem Weg zu Olympia-Gold' },
            { id: 's9_4', title: 'Court of Gold', year: '2025', emoji: '🥇', vibe: 'Gänsehaut-Doku · Hinter den Kulissen des dramatischsten Basketball-Turniers bei Olympia' },
            { id: 's9_5', title: 'Receiver', year: '2024', emoji: '🏈', vibe: 'Von den „Quarterback“-Machern · Spektakuläre NFL-Einblicke auf und neben dem Platz' },
            { id: 's9_6', title: 'Simone Biles Rising', year: '2024', emoji: '🤸‍♀️', vibe: 'Inspirierend · Das große Comeback der erfolgreichsten Turnerin aller Zeiten' },
            { id: 's9_7', title: 'Pop Star Academy: KATSEYE', year: '2024', emoji: '🎤', vibe: 'Backstage-Drama · Knallhartes Casting und Training einer globalen Popgruppe' },
            { id: 's9_8', title: 'Senna', year: '2024', emoji: '🏁', vibe: 'Packende Miniserie · Das Leben der Formel-1-Legende Ayrton Senna' }
        ],
        // 10: Starke Anime- oder Adult-Animation-Serie (2024-2026 Series ONLY)
        10: [
            { id: 's10_1', title: 'Arcane (Staffel 2)', year: '2024', emoji: '💥', vibe: 'IMDb 9.0 Meisterwerk · Das bildgewaltige große Finale von Vi und Jinx' },
            { id: 's10_2', title: 'Invincible (Staffel 3)', year: '2025', emoji: '🦸‍♂️', vibe: 'Prime-Megahit · Kompromisslose Superhelden-Action für Erwachsene' },
            { id: 's10_3', title: 'Solo Leveling (Staffel 1 & 2)', year: '2025', emoji: '🗡️', vibe: 'Anime-Phänomen · Vom schwächsten Jäger der Welt zur unaufhaltsamen Macht' },
            { id: 's10_4', title: 'Dan Da Dan', year: '2024', emoji: '🛸', vibe: 'Kreativ-Feuerwerk · Abgedrehte Mischung aus Aliens, Geistern, Action & Humor' },
            { id: 's10_5', title: 'Frieren: Beyond Journey\'s End', year: '2024', emoji: '🪄', vibe: '#1 auf MyAnimeList · Wunderschönes, tiefgründiges Fantasy-Meisterwerk' },
            { id: 's10_6', title: 'Creature Commandos', year: '2024', emoji: '🐺', vibe: 'James Gunns DC-Start · Schräges Monster-Einsatzteam mit coolem Soundtrack' },
            { id: 's10_7', title: 'Common Side Effects', year: '2025', emoji: '🍄', vibe: 'Adult-Swim-Thriller · Zwei Außenseiter entdecken einen Pilz, der jede Krankheit heilt' },
            { id: 's10_8', title: 'Tomb Raider: The Legend of Lara Croft', year: '2024', emoji: '🏹', vibe: 'Abenteuer-Animation · Rasante Schatzjagd rund um den Globus' }
        ],
        // 11: Urlaubs-Intrigen & Gesellschafts-Satire (White Lotus Vibe) (2024-2026 Series ONLY)
        11: [
            { id: 's11_1', title: 'The White Lotus (Staffel 3)', year: '2025', emoji: '🌺', vibe: 'Das Original · Luxus-Wellnessresort in Thailand, dunkle Geheimnisse & bissige Satire' },
            { id: 's11_2', title: 'The Perfect Couple (Ein neuer Sommer)', year: '2024', emoji: '🥂', vibe: 'Strand-Krimi · Nicole Kidman & eine Milliardärs-Hochzeit auf Nantucket mit Leiche' },
            { id: 's11_3', title: 'Palm Royale', year: '2024', emoji: '🌴', vibe: 'High-Society-Intrigen · Kristen Wiig kämpft sich in den exklusivsten Club von Palm Beach' },
            { id: 's11_4', title: 'Sirens', year: '2025', emoji: '🛥️', vibe: 'Luxus-Insel-Satire ·Julianne Moore auf einem dekadenten Insel-Anwesen' },
            { id: 's11_5', title: 'Bad Monkey', year: '2024', emoji: '🐒', vibe: 'Florida-Keys-Vibe · Vince Vaughn in einem sonnigen, schrägen Krimi unter Reichen' },
            { id: 's11_6', title: 'Apples Never Fall', year: '2024', emoji: '🎾', vibe: 'Familien-Geheimnisse · Wohlhabende Tennis-Dynastie in Florida unter Verdacht' },
            { id: 's11_7', title: 'Rivals', year: '2024', emoji: '🍾', vibe: 'Skandalös & Unterhaltsam · Machtkämpfe und Affären der britischen TV-Elite' },
            { id: 's11_8', title: 'The Franchise', year: '2024', emoji: '🎥', vibe: 'Messerscharfe Satire · Das absurde Chaos hinter den Kulissen eines Blockbuster-Drehs' }
        ]
    }
};
