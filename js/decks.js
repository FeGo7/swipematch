/**************************************************************
 * SwipeMatch – Deck & Card Database (ID-basiert für 0-Byte Sync)
 * Unterstützt mode: "match" (Konsens) & mode: "chores" (Anti-Match / Fair-Split)
 **************************************************************/

const DECKS = {
    "dinner": {
        "id": "dinner",
        "category": "food",
        "mode": "match",
        "icon": "🍔",
        "gradient": "from-orange-500 to-rose-600",
        "title": {
            "de": "Abendessen-Retter",
            "en": "Dinner Savior",
            "es": "¿Qué cenamos hoy?",
            "fr": "Sauveur du Dîner",
            "it": "Salva-Cena"
        },
        "sub": {
            "de": "8 schnelle Ideen gegen den Hunger",
            "en": "8 quick cravings compared",
            "es": "8 ideas rápidas sin discutir",
            "fr": "8 envies rapides sans prise de tête",
            "it": "8 idee veloci per decidere senza discutere"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "🍝",
                "bg": "from-amber-600 to-red-700",
                "tag": {
                    "de": "20 Min Selbstkochen",
                    "en": "20m Home Cooked",
                    "es": "20 min en casa",
                    "fr": "Fait maison en 20 min",
                    "it": "Fatto in casa in 20 min"
                },
                "title": {
                    "de": "Cremige Pasta / Carbonara",
                    "en": "Creamy Pasta Night",
                    "es": "Pasta Cremosa",
                    "fr": "Soirée Pâtes Crémeuses",
                    "it": "Serata Pasta Cremosa"
                },
                "desc": {
                    "de": "Schnell, warm, glücklich machend – geht immer.",
                    "en": "Fast comfort food that never disappoints.",
                    "es": "Rápido, reconfortante y delicioso.",
                    "fr": "Le réconfort rapide qui ne déçoit jamais.",
                    "it": "Comfort food veloce che non delude mai."
                },
                "actionLabel": {
                    "de": "5-Zutaten Blitz-Rezept öffnen",
                    "en": "Get 15-Min Recipe",
                    "es": "Ver receta rápida",
                    "fr": "Voir la recette express (15 min)",
                    "it": "Vedi ricetta express (15 min)"
                },
                "actionUrl": "https://www.google.com/search?q=schnelle+cremige+pasta+rezept"
            },
            {
                "id": 1,
                "emoji": "🍕",
                "bg": "from-rose-600 to-orange-600",
                "tag": {
                    "de": "Ofen oder Lieferdienst",
                    "en": "Delivery or Oven",
                    "es": "Horno o Delivery",
                    "fr": "Livraison ou Four",
                    "it": "Consegna o Forno"
                },
                "title": {
                    "de": "Heiße Pizza & Couch",
                    "en": "Hot Pizza Night",
                    "es": "Noche de Pizza",
                    "fr": "Soirée Pizza Chaude",
                    "it": "Serata Pizza Calda"
                },
                "desc": {
                    "de": "Null Abwasch, maximaler Käse-Faktor.",
                    "en": "Zero dishes, maximum cheese.",
                    "es": "Cero platos sucios, máximo queso.",
                    "fr": "Zéro vaisselle, fromage fondant à volonté.",
                    "it": "Zero piatti da lavare, formaggio filante al massimo."
                },
                "actionLabel": {
                    "de": "Pizzerien in der Nähe prüfen",
                    "en": "Find Top Pizza Nearby",
                    "es": "Buscar pizzerías cerca",
                    "fr": "Trouver les meilleures pizzas",
                    "it": "Trova le migliori pizzerie vicine"
                },
                "actionUrl": "https://www.google.com/maps/search/Pizza"
            },
            {
                "id": 2,
                "emoji": "🍣",
                "bg": "from-emerald-600 to-teal-800",
                "tag": {
                    "de": "Frisch & Leicht",
                    "en": "Fresh & Light",
                    "es": "Fresco y Ligero",
                    "fr": "Frais & Léger",
                    "it": "Fresco & Leggero"
                },
                "title": {
                    "de": "Sushi oder Poke Bowl",
                    "en": "Sushi / Poke Bowl",
                    "es": "Sushi o Poke Bowl",
                    "fr": "Sushi ou Poke Bowl",
                    "it": "Sushi o Poke Bowl"
                },
                "desc": {
                    "de": "Lachs, Avocado, Reis & Sojasauce.",
                    "en": "Salmon, avocado, rice & soy glaze.",
                    "es": "Salmón, aguacate y arroz.",
                    "fr": "Saumon, avocat, riz et sauce soja.",
                    "it": "Salmone, avocado, riso e salsa di soia."
                },
                "actionLabel": {
                    "de": "Sushi & Bowls in der Nähe",
                    "en": "Find Sushi / Bowls",
                    "es": "Buscar Sushi cerca",
                    "fr": "Trouver sushis & bowls",
                    "it": "Trova sushi & bowl nelle vicinanze"
                },
                "actionUrl": "https://www.google.com/maps/search/Sushi+Poke+Bowl"
            },
            {
                "id": 3,
                "emoji": "🌮",
                "bg": "from-yellow-600 to-orange-700",
                "tag": {
                    "de": "Fingerfood",
                    "en": "Hands-On Fun",
                    "es": "Manos a la obra",
                    "fr": "Convivial & Ludique",
                    "it": "Divertente & Conviviale"
                },
                "title": {
                    "de": "Wraps, Tacos oder Burritos",
                    "en": "Tacos & Loaded Wraps",
                    "es": "Tacos o Fajitas",
                    "fr": "Tacos & Wraps Gourmands",
                    "it": "Tacos & Wraps Farciti"
                },
                "desc": {
                    "de": "Alles auf den Tisch stellen und selbst rollen.",
                    "en": "Put everything on the table and roll your own.",
                    "es": "Todo a la mesa y que cada uno arme el suyo.",
                    "fr": "On pose tout sur la table et chacun roule le sien.",
                    "it": "Mettiamo tutto in tavola e ognuno compone il suo."
                },
                "actionLabel": {
                    "de": "Zutaten-Checkliste ansehen",
                    "en": "Quick Taco Checklist",
                    "es": "Ver ingredientes",
                    "fr": "Checklist tacos express",
                    "it": "Checklist veloce per tacos"
                },
                "actionUrl": "https://www.google.com/search?q=wraps+selber+machen+ideen"
            },
            {
                "id": 4,
                "emoji": "🍔",
                "bg": "from-red-700 to-stone-800",
                "tag": {
                    "de": "Soulfood",
                    "en": "Cheat Meal",
                    "es": "Capricho",
                    "fr": "Repas Plaisir",
                    "it": "Sgarro Goloso"
                },
                "title": {
                    "de": "Saftige Burger & Süßkartoffel-Pommes",
                    "en": "Smash Burgers & Fries",
                    "es": "Hamburguesa con Patatas",
                    "fr": "Smash Burgers & Frites",
                    "it": "Smash Burger & Patatine"
                },
                "desc": {
                    "de": "Heute zählen wir keine Kalorien.",
                    "en": "Calories don't count tonight.",
                    "es": "Hoy no se cuentan calorías.",
                    "fr": "Les calories ne comptent pas ce soir.",
                    "it": "Stasera le calorie non si contano."
                },
                "actionLabel": {
                    "de": "Beste Burger-Spots finden",
                    "en": "Best Burgers Nearby",
                    "es": "Buscar hamburgueserías",
                    "fr": "Meilleurs burgers à proximité",
                    "it": "Migliori burger nelle vicinanze"
                },
                "actionUrl": "https://www.google.com/maps/search/Burger"
            },
            {
                "id": 5,
                "emoji": "🍜",
                "bg": "from-fuchsia-700 to-indigo-900",
                "tag": {
                    "de": "Würzig & Warm",
                    "en": "Spicy & Warm",
                    "es": "Exótico",
                    "fr": "Épicé & Réconfortant",
                    "it": "Speziato & Avvolgente"
                },
                "title": {
                    "de": "Thai-Curry oder Ramen",
                    "en": "Thai Curry or Ramen",
                    "es": "Curry Tailandés o Wok",
                    "fr": "Curry Thaï ou Ramen Chaud",
                    "it": "Curry Thai o Ramen Fumante"
                },
                "desc": {
                    "de": "Kokosmilch, Gemüse, Hähnchen oder Tofu.",
                    "en": "Coconut milk, veggies & aromatic spices.",
                    "es": "Leche de coco, verduras y especias.",
                    "fr": "Lait de coco, légumes croquants et épices parfumées.",
                    "it": "Latte di cocco, verdure e spezie profumate."
                },
                "actionLabel": {
                    "de": "Asia-Food / Rezept öffnen",
                    "en": "Find Asian Food",
                    "es": "Ver opciones asiáticas",
                    "fr": "Trouver des restos asiatiques",
                    "it": "Trova ristoranti asiatici"
                },
                "actionUrl": "https://www.google.com/search?q=schnelles+thai+curry+rezept"
            },
            {
                "id": 6,
                "emoji": "🥗",
                "bg": "from-lime-600 to-emerald-800",
                "tag": {
                    "de": "Gesund & Proteinreich",
                    "en": "Clean & High Protein",
                    "es": "Sano y Ligero",
                    "fr": "Sain & Protéiné",
                    "it": "Sano & Proteico"
                },
                "title": {
                    "de": "Großer Caesar-Salad / Ofengemüse",
                    "en": "Loaded Caesar / Oven Veggies",
                    "es": "Ensalada César o Verduras al Horno",
                    "fr": "Grande Salade Caesar / Légumes Rôtis",
                    "it": "Caesar Salad Ricca / Verdure al Forno"
                },
                "desc": {
                    "de": "Leichtes Bauchgefühl für guten Schlaf.",
                    "en": "Feel great afterwards, zero food coma.",
                    "es": "Cena ligera para dormir genial.",
                    "fr": "Se sentir léger après manger, zéro coup de fatigue.",
                    "it": "Leggeri dopo cena, zero pesantezza."
                },
                "actionLabel": {
                    "de": "Schnelles Dressing-Rezept",
                    "en": "Quick Recipe",
                    "es": "Ver receta rápida",
                    "fr": "Recette rapide",
                    "it": "Ricetta veloce"
                },
                "actionUrl": "https://www.google.com/search?q=caesar+salad+schnell+rezept"
            },
            {
                "id": 7,
                "emoji": "🍳",
                "bg": "from-sky-600 to-blue-800",
                "tag": {
                    "de": "10-Minuten-Klassiker",
                    "en": "10-Min Saver",
                    "es": "En 10 minutos",
                    "fr": "Sauveur en 10 min",
                    "it": "Salvacena in 10 min"
                },
                "title": {
                    "de": "Stullen-Brett & Strammer Max",
                    "en": "Breakfast for Dinner",
                    "es": "Tostas con Huevo y Aguacate",
                    "fr": "Tartines Chaudes & Œufs au Plat",
                    "it": "Tagliere di Toast & Uova all'Occhio"
                },
                "desc": {
                    "de": "Frisches Brot, Spiegelei, Avocado oder Käseplatte.",
                    "en": "Sourdough, eggs, avocado & zero stress.",
                    "es": "Pan crujiente, huevos y cero estrés.",
                    "fr": "Bon pain au levain, œufs, avocat et zéro stress.",
                    "it": "Pane casereccio, uova, avocado e zero stress."
                },
                "actionLabel": {
                    "de": "Ideen für warmes Abendbrot",
                    "en": "View Topping Ideas",
                    "es": "Ver ideas de tostas",
                    "fr": "Idées de garnitures",
                    "it": "Idee sfiziose per toast"
                },
                "actionUrl": "https://www.google.com/search?q=stullen+abendbrot+ideen"
            },
            {
                "id": 8,
                "emoji": "🥟",
                "bg": "from-amber-600 to-orange-800",
                "tag": {
                    "de": "Seelenfutter",
                    "en": "Comfort Classic",
                    "es": "Clásico Casero",
                    "fr": "Classique Réconfortant",
                    "it": "Classico Rustico"
                },
                "title": {
                    "de": "Käsespätzle oder Schupfnudeln aus der Pfanne",
                    "en": "Cheesy Spaetzle & Crispy Onions",
                    "es": "Ñoquis o Pasta Gratinada con Queso",
                    "fr": "Spätzle au Fromage & Oignons Frits",
                    "it": "Gnocchetti al Formaggio Fuso & Cipolla"
                },
                "desc": {
                    "de": "Geschmolzener Bergkäse und Röstzwiebeln – pures Glück.",
                    "en": "Melted alpine cheese and crispy fried onions.",
                    "es": "Queso fundido y cebolla crujiente.",
                    "fr": "Fromage fondant et oignons croustillants à la poêle.",
                    "it": "Formaggio fuso filante e cipolle croccanti in padella."
                },
                "actionLabel": {
                    "de": "15-Min Käsespätzle Rezept",
                    "en": "Quick Recipe",
                    "es": "Ver receta rápida",
                    "fr": "Recette express",
                    "it": "Ricetta express"
                },
                "actionUrl": "https://www.google.com/search?q=kaesespaetzle+schnell+pfanne+rezept"
            },
            {
                "id": 9,
                "emoji": "🥙",
                "bg": "from-red-600 to-amber-700",
                "tag": {
                    "de": "Auf die Hand",
                    "en": "Streetfood King",
                    "es": "Streetfood",
                    "fr": "Roi de la Streetfood",
                    "it": "Re dello Street Food"
                },
                "title": {
                    "de": "Döner, Dürüm oder Halloumi-Tasche",
                    "en": "Kebab, Shawarma or Halloumi Wrap",
                    "es": "Kebab, Dürüm o Falafel",
                    "fr": "Kebab, Shawarma ou Sandwich Halloumi",
                    "it": "Kebab, Piadina o Panino con Halloumi"
                },
                "desc": {
                    "de": "Knuspriges Brot, Knoblauchsauce und null Abwasch.",
                    "en": "Crispy bread, garlic sauce & zero kitchen mess.",
                    "es": "Pan crujiente, salsa de ajo y cero fregar.",
                    "fr": "Pain croustillant, sauce blanche et zéro cuisine à nettoyer.",
                    "it": "Pane croccante, salsa allo yogurt e cucina impeccabile."
                },
                "actionLabel": {
                    "de": "Döner in der Nähe finden",
                    "en": "Find Kebab Nearby",
                    "es": "Buscar Kebab cerca",
                    "fr": "Trouver un bon kebab",
                    "it": "Trova kebab / street food vicino"
                },
                "actionUrl": "https://www.google.com/maps/search/Doener+Kebab"
            },
            {
                "id": 10,
                "emoji": "🍛",
                "bg": "from-orange-600 to-red-900",
                "tag": {
                    "de": "Würzig & Warm",
                    "en": "Rich & Creamy",
                    "es": "Especiado",
                    "fr": "Riche & Onctueux",
                    "it": "Ricco & Cremoso"
                },
                "title": {
                    "de": "Butter Chicken oder Rotes Linsen-Dal mit Naan",
                    "en": "Butter Chicken or Lentil Dal + Naan",
                    "es": "Butter Chicken o Curry con Pan Naan",
                    "fr": "Butter Chicken ou Dal de Lentilles + Naan",
                    "it": "Butter Chicken o Dal di Lenticchie + Naan"
                },
                "desc": {
                    "de": "Cremige Sauce, Reis und warmes Fladenbrot zum Dippen.",
                    "en": "Creamy spiced sauce and warm flatbread.",
                    "es": "Salsa cremosa especiada con pan caliente.",
                    "fr": "Sauce parfumée onctueuse et pain naan tout chaud.",
                    "it": "Salsa speziata e cremosa con pane naan caldo."
                },
                "actionLabel": {
                    "de": "Rezept oder Inder finden",
                    "en": "Recipe or Delivery",
                    "es": "Receta o restaurante",
                    "fr": "Recette ou livraison",
                    "it": "Ricetta o consegna a domicilio"
                },
                "actionUrl": "https://www.google.com/search?q=butter+chicken+oder+linsen+dal+schnell"
            },
            {
                "id": 11,
                "emoji": "🥔",
                "bg": "from-yellow-600 to-amber-800",
                "tag": {
                    "de": "Aus dem Ofen",
                    "en": "Oven Baked",
                    "es": "Al horno",
                    "fr": "Cuit au Four",
                    "it": "Al Forno"
                },
                "title": {
                    "de": "Gefüllte Ofenkartoffel (Kumpir) mit Sour Cream",
                    "en": "Loaded Baked Potato (Kumpir)",
                    "es": "Patata Asada Rellena (Kumpir)",
                    "fr": "Pomme de Terre au Four Farcie (Kumpir)",
                    "it": "Patata al Forno Farcita (Kumpir)"
                },
                "desc": {
                    "de": "Mit Butter, Käse, Mais, Kräuterquark oder Lachs.",
                    "en": "Fluffy potato loaded with butter, cheese & sour cream.",
                    "es": "Con mantequilla, queso, maíz y crema agria.",
                    "fr": "Pomme de terre fondante, beurre, fromage et crème fraîche.",
                    "it": "Patata morbida con burro, formaggio fuso e salsa."
                },
                "actionLabel": {
                    "de": "Top Kumpir-Füllungen",
                    "en": "Topping Ideas",
                    "es": "Ideas de relleno",
                    "fr": "Idées de garnitures",
                    "it": "Idee per la farcitura"
                },
                "actionUrl": "https://www.google.com/search?q=kumpir+ofenkartoffel+fuellung+ideen"
            },
            {
                "id": 12,
                "emoji": "🥧",
                "bg": "from-amber-500 to-stone-700",
                "tag": {
                    "de": "Knusprig & Dünn",
                    "en": "15-Min Oven",
                    "es": "15 min al horno",
                    "fr": "15 min au Four",
                    "it": "15 min al Forno"
                },
                "title": {
                    "de": "Elsässer Flammkuchen (Klassisch oder Feta-Feige)",
                    "en": "Crispy Tarte Flambée (Flammkuchen)",
                    "es": "Coca Crujiente o Flammkuchen",
                    "fr": "Tarte Flambée Croustillante",
                    "it": "Torta Salata o Schiacciata Croccante"
                },
                "desc": {
                    "de": "Fertigteig ausrollen, Schmand drauf, 12 Minuten in den Ofen.",
                    "en": "Roll out dough, sour cream, bacon or feta, 12 mins in oven.",
                    "es": "Masa fina, crema fresca y al horno 12 minutos.",
                    "fr": "Pâte fine, crème, lardons ou feta-figues, 12 min au four.",
                    "it": "Base sottile, formaggio fresco, speck o verdure, 12 min al forno."
                },
                "actionLabel": {
                    "de": "Flammkuchen-Ideen öffnen",
                    "en": "Flammkuchen Toppings",
                    "es": "Ideas de ingredientes",
                    "fr": "Garnitures de tarte flambée",
                    "it": "Idee per torte salate"
                },
                "actionUrl": "https://www.google.com/search?q=flammkuchen+belag+ideen"
            },
            {
                "id": 13,
                "emoji": "🧀",
                "bg": "from-yellow-500 to-red-700",
                "tag": {
                    "de": "Kino-Feeling zuhause",
                    "en": "Couch Sharing",
                    "es": "Para compartir",
                    "fr": "À Partager sur le Canapé",
                    "it": "Da Condividere sul Divano"
                },
                "title": {
                    "de": "Überbackene Nacho-Pfanne mit Salsa & Guacamole",
                    "en": "Loaded Sheet-Pan Nachos",
                    "es": "Nachos Gratinados con Guacamole",
                    "fr": "Plaque de Nachos Gratinés",
                    "it": "Teglia di Nachos Gratinati"
                },
                "desc": {
                    "de": "Tortilla-Chips, Jalapeños, Hack/Bohnen & dick Käse überbacken.",
                    "en": "Tortilla chips, melted cheddar, jalapeños & guac.",
                    "es": "Nachos con mucho cheddar fundido y guacamole.",
                    "fr": "Tortillas, cheddar fondu, piments jalapeños et guacamole.",
                    "it": "Chips di mais, cheddar fuso, jalapeños e guacamole fresco."
                },
                "actionLabel": {
                    "de": "Nacho-Blech Rezept",
                    "en": "Sheet-Pan Nachos",
                    "es": "Ver receta de nachos",
                    "fr": "Recette nachos au four",
                    "it": "Ricetta nachos al forno"
                },
                "actionUrl": "https://www.google.com/search?q=ueberbackene+nachos+ofen+rezept"
            },
            {
                "id": 14,
                "emoji": "🍲",
                "bg": "from-red-700 to-rose-950",
                "tag": {
                    "de": "Aus dem Ofen",
                    "en": "Italian Soulfood",
                    "es": "Clásico al horno",
                    "fr": "Saveurs Italiennes",
                    "it": "Tradizione Italiana"
                },
                "title": {
                    "de": "Heiße Lasagne oder Cannelloni",
                    "en": "Baked Lasagna & Garlic Bread",
                    "es": "Lasaña Caliente Gratinada",
                    "fr": "Lasagnes Dorées & Pain à l'Ail",
                    "it": "Lasagne al Forno Dorate"
                },
                "desc": {
                    "de": "Schicht für Schicht geschmolzener Käse und Bolognese/Gemüse.",
                    "en": "Layers of pasta, rich sauce and bubbling cheese.",
                    "es": "Capas de pasta, salsa rica y queso gratinado.",
                    "fr": "Couches de pâtes fondantes, sauce riche et fromage gratiné.",
                    "it": "Strati di pasta, ragù saporito e besciamella gratinata."
                },
                "actionLabel": {
                    "de": "Italiener oder Rezept öffnen",
                    "en": "Find Lasagna",
                    "es": "Buscar lasaña",
                    "fr": "Trouver des lasagnes",
                    "it": "Trova lasagne artigianali"
                },
                "actionUrl": "https://www.google.com/search?q=schnelle+pfannen+lasagne+rezept"
            },
            {
                "id": 15,
                "emoji": "🌿",
                "bg": "from-teal-600 to-emerald-900",
                "tag": {
                    "de": "Frisch & Knackig",
                    "en": "Fresh & Light",
                    "es": "Fresco y Ligero",
                    "fr": "Frais & Croquant",
                    "it": "Fresco & Aromatico"
                },
                "title": {
                    "de": "Vietnamesische Sommerrollen oder Reisnudelsalat",
                    "en": "Vietnamese Noodle Bowl / Rolls",
                    "es": "Rollitos Vietnamitas o Ensalada de Fideos",
                    "fr": "Rouleaux de Printemps ou Bo Bun",
                    "it": "Involtini Primavera Freschi o Bo Bun"
                },
                "desc": {
                    "de": "Mit Erdnuss-Dip, Minze, Gurke, Mango und Tofu/Garnelen.",
                    "en": "Peanut sauce, fresh herbs, mango & rice noodles.",
                    "es": "Salsa de cacahuete, hierbas frescas y mango.",
                    "fr": "Sauce cacahuète, herbes fraîches, mangue et vermicelles de riz.",
                    "it": "Salsa alle arachidi, erbe fresche, mango e vermicelli di riso."
                },
                "actionLabel": {
                    "de": "Erdnuss-Dip & Rezept",
                    "en": "Peanut Sauce Recipe",
                    "es": "Ver receta",
                    "fr": "Recette sauce cacahuète",
                    "it": "Ricetta salsa di arachidi"
                },
                "actionUrl": "https://www.google.com/search?q=reisnudelsalat+erdnusssauce+rezept"
            },
            {
                "id": 16,
                "emoji": "🧆",
                "bg": "from-amber-600 to-emerald-900",
                "tag": {
                    "de": "Teilen & Dippen",
                    "en": "Mediterranean",
                    "es": "Mediterráneo",
                    "fr": "Méditerranéen",
                    "it": "Mediterraneo"
                },
                "title": {
                    "de": "Mezze-Abend: Hummus, Falafel, Oliven & Fladenbrot",
                    "en": "Mediterranean Mezze Platter",
                    "es": "Tabla Mezze: Hummus, Falafel y Pita",
                    "fr": "Plateau de Mezzés & Houmous",
                    "it": "Tagliere di Mezze & Hummus"
                },
                "desc": {
                    "de": "Viele kleine Schälchen auf den Tisch und gemütlich snacken.",
                    "en": "Hummus, feta, olives, falafel & warm pita bread.",
                    "es": "Hummus, queso feta, aceitunas y pan pita caliente.",
                    "fr": "Houmous, feta, olives, falafels et pain pita chaud.",
                    "it": "Hummus, feta, olive, falafel e pane pita caldo."
                },
                "actionLabel": {
                    "de": "Mezze-Ideen ansehen",
                    "en": "Mezze Platter Ideas",
                    "es": "Ideas de picoteo",
                    "fr": "Idées de plateau mezzé",
                    "it": "Idee per il tagliere di mezze"
                },
                "actionUrl": "https://www.google.com/search?q=mezze+platte+abendessen+ideen"
            },
            {
                "id": 17,
                "emoji": "🥞",
                "bg": "from-amber-500 to-orange-700",
                "tag": {
                    "de": "Herzhaft oder Süß",
                    "en": "Sweet or Savory",
                    "es": "Dulce o Salado",
                    "fr": "Sucré ou Salé",
                    "it": "Dolce o Salato"
                },
                "title": {
                    "de": "Pfannkuchen / Crêpes (mit Käse-Schinken oder Nutella)",
                    "en": "Savory & Sweet Crêpes / Pancakes",
                    "es": "Crepes Salados y Dulces",
                    "fr": "Crêpes / Pancakes Salés ou Sucrés",
                    "it": "Crêpe o Pancake Dolci o Salati"
                },
                "desc": {
                    "de": "Erst einen herzhaften mit Käse, danach einen süßen als Nachtisch!",
                    "en": "Start with cheese & ham, finish with Nutella!",
                    "es": "Primero uno de jamón y queso, luego uno dulce.",
                    "fr": "On commence avec jambon-fromage, on termine au chocolat !",
                    "it": "Si comincia con formaggio e prosciutto, si chiude con la Nutella!"
                },
                "actionLabel": {
                    "de": "5-Min Pfannkuchenteig",
                    "en": "Quick Batter Recipe",
                    "es": "Receta de masa rápida",
                    "fr": "Pâte à crêpes rapide",
                    "it": "Pastella veloce per crêpe"
                },
                "actionUrl": "https://www.google.com/search?q=pfannkuchen+grundrezept+schnell"
            },
            {
                "id": 18,
                "emoji": "🥖",
                "bg": "from-orange-600 to-stone-800",
                "tag": {
                    "de": "Knusprig überbacken",
                    "en": "Melted Subs",
                    "es": "Bocadillos calientes",
                    "fr": "Sandwich Chaud",
                    "it": "Panino Caldo"
                },
                "title": {
                    "de": "Heiße Ofen-Baguettes / Panini / Grilled Cheese",
                    "en": "Hot Melted Panini / Grilled Cheese",
                    "es": "Paninis o Sándwich Cubano Fundido",
                    "fr": "Panini Chaud / Grilled Cheese Croustillant",
                    "it": "Panini Caldi / Toast Grigliato con Formaggio"
                },
                "desc": {
                    "de": "Ciabatta oder Toast mit Pesto, Tomate und Mozzarella knusprig rösten.",
                    "en": "Sourdough or ciabatta with pesto & melted mozzarella.",
                    "es": "Pan crujiente con pesto, tomate y mozzarella fundida.",
                    "fr": "Pain croustillant au levain, pesto et mozzarella fondante.",
                    "it": "Pane tostato croccante con pesto e mozzarella filante."
                },
                "actionLabel": {
                    "de": "Grilled-Cheese Ideen",
                    "en": "Best Panini Combos",
                    "es": "Ideas de sándwiches",
                    "fr": "Meilleures idées panini",
                    "it": "Migliori combinazioni per toast"
                },
                "actionUrl": "https://www.google.com/search?q=grilled+cheese+sandwich+ideen"
            },
            {
                "id": 19,
                "emoji": "🎃",
                "bg": "from-orange-500 to-amber-800",
                "tag": {
                    "de": "Warm & Cremig",
                    "en": "Cozy Bowl",
                    "es": "Cuchara caliente",
                    "fr": "Bol Réconfortant",
                    "it": "Zuppa Calda"
                },
                "title": {
                    "de": "Cremige Tomaten- oder Kürbissuppe mit Knoblauchbrot",
                    "en": "Creamy Tomato Soup & Garlic Bread",
                    "es": "Crema Caliente con Pan de Ajo",
                    "fr": "Soupe Crémeuse Tomate / Potiron & Pain Grillé",
                    "it": "Vellutata di Zucca o Pomodoro & Crostini"
                },
                "desc": {
                    "de": "Wärmt von innen, perfekt mit geröstetem Baguette zum Dippen.",
                    "en": "Warm, comforting bowl with crunchy garlic bread.",
                    "es": "Reconfortante y perfecta para mojar pan.",
                    "fr": "Un bol fumant bien doux avec du pain aillé croustillant.",
                    "it": "Un piatto fumante e confortevole con crostini dorati all'aglio."
                },
                "actionLabel": {
                    "de": "Schnelles Suppen-Rezept",
                    "en": "20-Min Soup Recipe",
                    "es": "Receta en 20 minutos",
                    "fr": "Recette soupe en 20 min",
                    "it": "Ricetta vellutata in 20 min"
                },
                "actionUrl": "https://www.google.com/search?q=schnelle+tomatensuppe+rezept"
            },
            {
                "id": 20,
                "emoji": "🐟",
                "bg": "from-cyan-700 to-slate-900",
                "tag": {
                    "de": "Vom Blech",
                    "en": "One Sheet-Pan",
                    "es": "Todo en una bandeja",
                    "fr": "Tout sur une Plaque",
                    "it": "Tutto in una Teglia"
                },
                "title": {
                    "de": "Ofen-Lachs (oder Halloumi) mit Rosmarin-Kartoffeln",
                    "en": "Sheet-Pan Salmon & Crispy Potatoes",
                    "es": "Salmón o Halloumi al Horno con Patatas",
                    "fr": "Pavé de Saumon au Four & Pommes de Terre",
                    "it": "Salmone al Forno con Patate al Rosmarino"
                },
                "desc": {
                    "de": "Alles auf ein Backblech, der Ofen macht die komplette Arbeit.",
                    "en": "Toss everything on one tray – oven does the work.",
                    "es": "Todo a la bandeja y el horno hace el trabajo.",
                    "fr": "On met tout sur la plaque du four et on laisse cuire sans effort.",
                    "it": "Metti tutto in teglia e lascia fare al forno."
                },
                "actionLabel": {
                    "de": "Blech-Rezept öffnen",
                    "en": "Sheet-Pan Recipe",
                    "es": "Ver receta al horno",
                    "fr": "Recette au four express",
                    "it": "Ricetta al forno express"
                },
                "actionUrl": "https://www.google.com/search?q=ofenlachs+mit+kartoffeln+vom+blech"
            },
            {
                "id": 21,
                "emoji": "🍷",
                "bg": "from-rose-800 to-stone-900",
                "tag": {
                    "de": "0% Kochen",
                    "en": "Zero Cooking",
                    "es": "Sin cocinar",
                    "fr": "Zéro Cuisson",
                    "it": "Zero Cottura"
                },
                "title": {
                    "de": "Tapas-, Käse- & Antipasti-Brett auf der Couch",
                    "en": "Charcuterie, Cheese & Tapas Board",
                    "es": "Tabla de Quesos, Ibéricos y Picoteo",
                    "fr": "Planche Fromages, Charcuterie & Tapas",
                    "it": "Tagliere di Formaggi, Salumi & Tapas"
                },
                "desc": {
                    "de": "Baguette, Oliven, guter Käse, Trauben und Dips – Urlaubsfeeling.",
                    "en": "Crusty bread, olives, cheeses, grapes & dips.",
                    "es": "Pan rico, quesos, aceitunas y cero cocinar.",
                    "fr": "Pain frais, olives, fromages choisis, raisins et tartinades.",
                    "it": "Pane fragrante, olive, formaggi stagionati, uva e salumi."
                },
                "actionLabel": {
                    "de": "Ideen für die perfekte Platte",
                    "en": "Board Styling Ideas",
                    "es": "Ideas para la tabla",
                    "fr": "Inspiration pour jolie planche",
                    "it": "Idee per comporre il tagliere"
                },
                "actionUrl": "https://www.google.com/search?q=antipasti+kaeseplatte+ideen"
            }
        ]
    },
    "delivery": {
        "id": "delivery",
        "category": "food",
        "mode": "match",
        "icon": "🛵",
        "gradient": "from-red-500 to-amber-500",
        "title": {
            "de": "Lieferdienst-Duell",
            "en": "Takeout Showdown",
            "es": "Duelo de Delivery",
            "fr": "Duel de Livraison",
            "it": "Sfida Consegna a Domicilio"
        },
        "sub": {
            "de": "Was bestellen oder holen wir uns heute?",
            "en": "What are we ordering in tonight?",
            "es": "¿Qué pedimos a domicilio hoy?",
            "fr": "Qu'est-ce qu'on commande ce soir ?",
            "it": "Cosa ordiniamo a domicilio stasera?"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "🥙",
                "bg": "from-amber-700 to-red-800",
                "tag": {
                    "de": "Streetfood-König",
                    "en": "Streetfood King",
                    "es": "Rey del Streetfood",
                    "fr": "Roi de la Streetfood",
                    "it": "Re dello Street Food"
                },
                "title": {
                    "de": "Döner, Dürüm oder Falafel-Teller",
                    "en": "Kebab, Shawarma or Falafel",
                    "es": "Kebab, Dürüm o Falafel",
                    "fr": "Kebab, Shawarma ou Assiette Falafel",
                    "it": "Kebab, Shawarma o Piatto Falafel"
                },
                "desc": {
                    "de": "Mit scharfer Sauce, Knoblauch und ordentlich Salat.",
                    "en": "Garlic sauce, crispy bread, pure satisfaction.",
                    "es": "Con salsa de ajo y bien cargado.",
                    "fr": "Sauce à l'ail, pain bien chaud, satisfaction immédiate.",
                    "it": "Salsa all'aglio, pane croccante e gusto pieno."
                },
                "actionLabel": {
                    "de": "Beste Dönerläden in der Nähe",
                    "en": "Find Kebab Nearby",
                    "es": "Buscar Kebab cerca",
                    "fr": "Trouver un bon kebab",
                    "it": "Trova kebab nelle vicinanze"
                },
                "actionUrl": "https://www.google.com/maps/search/Kebab+Doener"
            },
            {
                "id": 1,
                "emoji": "🍕",
                "bg": "from-rose-600 to-red-800",
                "tag": {
                    "de": "Italienischer Klassiker",
                    "en": "Italian Classic",
                    "es": "Clásico Italiano",
                    "fr": "Classique Italien",
                    "it": "Classico Italiano"
                },
                "title": {
                    "de": "Steinofen-Pizza vom Italiener",
                    "en": "Wood-Fired Pizza",
                    "es": "Pizza al Horno de Leña",
                    "fr": "Pizza au Feu de Bois",
                    "it": "Pizza Napoletana al Forno a Legna"
                },
                "desc": {
                    "de": "Dünner Boden, geschmolzener Mozzarella, heiß im Karton.",
                    "en": "Crispy crust, melted mozzarella, zero dishes.",
                    "es": "Masa crujiente y queso fundido.",
                    "fr": "Pâte alvéolée, mozzarella fondante, zéro vaisselle.",
                    "it": "Cornicione alto, mozzarella fusa e zero piatti da lavare."
                },
                "actionLabel": {
                    "de": "🍕 Bei Lieferando bestellen",
                    "en": "Order Pizza on Delivery",
                    "es": "Pedir Pizza a domicilio",
                    "fr": "Commander une pizza",
                    "it": "Ordina pizza a domicilio"
                },
                "actionUrl": "https://www.lieferando.de/lieferservice/pizza"
            },
            {
                "id": 2,
                "emoji": "🍛",
                "bg": "from-orange-600 to-amber-800",
                "tag": {
                    "de": "Seelenwärmer",
                    "en": "Comfort Spice",
                    "es": "Aromático",
                    "fr": "Épices Réconfortantes",
                    "it": "Spezie Avvolgenti"
                },
                "title": {
                    "de": "Indisches Curry & warmes Naan-Brot",
                    "en": "Indian Curry & Garlic Naan",
                    "es": "Curry Indio y Pan Naan",
                    "fr": "Curry Indien & Naan à l'Ail Chaud",
                    "it": "Curry Indiano & Pane Naan all'Aglio"
                },
                "desc": {
                    "de": "Butter Chicken, Tikka Masala oder Dal mit Knoblauch-Naan.",
                    "en": "Butter chicken, palak paneer & fluffy naan.",
                    "es": "Tikka Masala y pan naan recién hecho.",
                    "fr": "Butter chicken, palak paneer et naans croustillants.",
                    "it": "Butter chicken, palak paneer e naan soffice."
                },
                "actionLabel": {
                    "de": "🍛 Bei Lieferando bestellen",
                    "en": "Order Indian on Delivery",
                    "es": "Pedir comida india",
                    "fr": "Commander indien",
                    "it": "Ordina indiano a domicilio"
                },
                "actionUrl": "https://www.lieferando.de/lieferservice/indisch"
            },
            {
                "id": 3,
                "emoji": "🥢",
                "bg": "from-emerald-700 to-cyan-900",
                "tag": {
                    "de": "Asiatisch",
                    "en": "Asian Craving",
                    "es": "Sabor Asiático",
                    "fr": "Envie Asiatique",
                    "it": "Voglia di Orientale"
                },
                "title": {
                    "de": "Pad Thai, Gebratene Nudeln oder Pho",
                    "en": "Pad Thai, Wok Noodles or Pho",
                    "es": "Pad Thai, Wok o Ramen",
                    "fr": "Pad Thaï, Nouilles Wok ou Soupe Phở",
                    "it": "Pad Thai, Noodles Saltati o Phở"
                },
                "desc": {
                    "de": "Frisch aus dem Wok mit Erdnüssen, Limette oder Brühe.",
                    "en": "Fresh from the wok with peanuts & lime.",
                    "es": "Recién salido del wok con toque cítrico.",
                    "fr": "Tout juste sorti du wok avec cacahuètes et citron vert.",
                    "it": "Saltato al wok con arachidi tostate e lime fresco."
                },
                "actionLabel": {
                    "de": "🥢 Bei Lieferando bestellen",
                    "en": "Order Asian on Delivery",
                    "es": "Pedir comida asiática",
                    "fr": "Commander asiatique",
                    "it": "Ordina asiatico a domicilio"
                },
                "actionUrl": "https://www.lieferando.de/lieferservice/asiatisch"
            },
            {
                "id": 4,
                "emoji": "🍗",
                "bg": "from-yellow-600 to-red-700",
                "tag": {
                    "de": "Knusper-Faktor",
                    "en": "Crispy Crunch",
                    "es": "Crujiente",
                    "fr": "Super Croustillant",
                    "it": "Croccantezza Pura"
                },
                "title": {
                    "de": "Crispy Chicken, Wings & Loaded Fries",
                    "en": "Korean Fried Chicken & Fries",
                    "es": "Pollo Crujiente y Patatas",
                    "fr": "Poulet Frit Croustillant & Frites Maison",
                    "it": "Pollo Fritto Croccante & Patatine Fritte"
                },
                "desc": {
                    "de": "Außen knusprig, innen saftig – perfekt zum Film.",
                    "en": "Ultra crispy with dipping sauces.",
                    "es": "Crujiente por fuera, ideal con salsas.",
                    "fr": "Panure ultra croustillante avec sauces à tremper.",
                    "it": "Panatura extra croccante con salse a scelta."
                },
                "actionLabel": {
                    "de": "Chicken & Burger Spots",
                    "en": "Find Fried Chicken",
                    "es": "Buscar pollo crujiente",
                    "fr": "Trouver du poulet frit",
                    "it": "Trova pollo fritto vicino"
                },
                "actionUrl": "https://www.google.com/maps/search/Fried+Chicken+Burger"
            },
            {
                "id": 5,
                "emoji": "🌯",
                "bg": "from-lime-700 to-green-900",
                "tag": {
                    "de": "Mexikanisch",
                    "en": "Mexican Fiesta",
                    "es": "Fiesta Mexicana",
                    "fr": "Fiesta Mexicaine",
                    "it": "Fiesta Messicana"
                },
                "title": {
                    "de": "Fette Burritos, Quesadillas & Guacamole",
                    "en": "Loaded Burritos & Quesadillas",
                    "es": "Burritos, Nachos y Guacamole",
                    "fr": "Gros Burritos, Quesadillas & Guacamole",
                    "it": "Burritos Farciti, Quesadillas & Guacamole"
                },
                "desc": {
                    "de": "Mit Nachos, Salsa, Sour Cream und viel Avocado.",
                    "en": "Stuffed with rice, beans, cheese & guac.",
                    "es": "Con nachos, crema agria y guacamole.",
                    "fr": "Riz savoureux, haricots noirs, fromage et avocat crémeux.",
                    "it": "Pieni di riso speziato, fagioli neri, formaggio e guacamole."
                },
                "actionLabel": {
                    "de": "Mexikaner in der Nähe",
                    "en": "Find Mexican Food",
                    "es": "Buscar mexicano cerca",
                    "fr": "Trouver mexicain",
                    "it": "Trova ristoranti messicani"
                },
                "actionUrl": "https://www.google.com/maps/search/Mexican+Burrito"
            },
            {
                "id": 6,
                "emoji": "🍣",
                "bg": "from-teal-600 to-slate-900",
                "tag": {
                    "de": "Frisch gerollt",
                    "en": "Sushi Night",
                    "es": "Noche de Sushi",
                    "fr": "Soirée Sushis",
                    "it": "Serata Sushi"
                },
                "title": {
                    "de": "Große Sushi-Box (Maki, Inside-Out & Crunchy Rolls)",
                    "en": "Sushi Platter & Crunchy Rolls",
                    "es": "Bandeja de Sushi y Crunchy Rolls",
                    "fr": "Plateau de Sushis & Rouleaux Croustillants",
                    "it": "Gran Piatto di Sushi & Crunch Rolls"
                },
                "desc": {
                    "de": "Stäbchen bereitlegen, Sojasauce & Wasabi – leicht und edel.",
                    "en": "Chopsticks ready, soy sauce, ginger & crispy rolls.",
                    "es": "Palillos listos, salsa de soja y rolls crujientes.",
                    "fr": "Baguettes en main, sauce soja, gingembre et rolls dorés.",
                    "it": "Bacchette pronte, salsa di soia, zenzero e roll croccanti."
                },
                "actionLabel": {
                    "de": "🍣 Bei Lieferando bestellen",
                    "en": "Order Sushi on Delivery",
                    "es": "Pedir Sushi a domicilio",
                    "fr": "Commander des sushis",
                    "it": "Ordina sushi a domicilio"
                },
                "actionUrl": "https://www.lieferando.de/lieferservice/sushi"
            },
            {
                "id": 7,
                "emoji": "🍔",
                "bg": "from-red-700 to-stone-900",
                "tag": {
                    "de": "Cheat-Day",
                    "en": "Smash Burger",
                    "es": "Burger Gourmet",
                    "fr": "Smash Burger",
                    "it": "Smash Burger"
                },
                "title": {
                    "de": "Smash-Burger mit Bacon, Cheese & Trüffel-Mayo",
                    "en": "Double Smash Burger & Loaded Fries",
                    "es": "Smash Burger con Patatas y Salsas",
                    "fr": "Double Smash Burger & Frites Truffées",
                    "it": "Double Smash Burger & Patatine al Tartufo"
                },
                "desc": {
                    "de": "Brioche-Bun, geschmolzener Cheddar und knusprige Pommes.",
                    "en": "Brioche bun, melted cheddar and crispy fries.",
                    "es": "Pan brioche, cheddar fundido y patatas crujientes.",
                    "fr": "Pain brioché, cheddar fondu et frites bien chaudes.",
                    "it": "Bun brioche, cheddar filante e patatine dorate."
                },
                "actionLabel": {
                    "de": "🍔 Bei Lieferando bestellen",
                    "en": "Order Burger on Delivery",
                    "es": "Pedir Burger a domicilio",
                    "fr": "Commander un burger",
                    "it": "Ordina burger a domicilio"
                },
                "actionUrl": "https://www.lieferando.de/lieferservice/burger"
            },
            {
                "id": 8,
                "emoji": "🥗",
                "bg": "from-emerald-600 to-teal-900",
                "tag": {
                    "de": "Frisch & Bunt",
                    "en": "Hawaiian Bowl",
                    "es": "Fresco y Sano",
                    "fr": "Bowl Hawaïen",
                    "it": "Bowl Hawaiana"
                },
                "title": {
                    "de": "Frische Poke Bowl (Lachs, Tuna oder Crispy Tofu)",
                    "en": "Custom Hawaiian Poke Bowl",
                    "es": "Poke Bowl (Salmón, Atún o Tofu)",
                    "fr": "Poke Bowl Frais sur Mesure",
                    "it": "Poke Bowl Personalizzata"
                },
                "desc": {
                    "de": "Warmer Sushi-Reis, Mango, Edamame, Avocado und Spicy-Mayo.",
                    "en": "Sushi rice, mango, edamame, avocado & spicy mayo.",
                    "es": "Arroz de sushi, mango, edamame, aguacate y salsas.",
                    "fr": "Riz à sushi, mangue, edamame, avocat et sauce épicée.",
                    "it": "Riso sushi, salmone, mango, edamame, avocado e salsa mayo piccante."
                },
                "actionLabel": {
                    "de": "Poke-Bowl Läden zeigen",
                    "en": "Find Poke Bowls",
                    "es": "Buscar Poke Bowl cerca",
                    "fr": "Trouver des poke bowls",
                    "it": "Trova poke bowl vicino"
                },
                "actionUrl": "https://www.google.com/maps/search/Poke+Bowl"
            },
            {
                "id": 9,
                "emoji": "🍜",
                "bg": "from-amber-700 to-stone-900",
                "tag": {
                    "de": "Heiße Brühe",
                    "en": "Japanese Soulfood",
                    "es": "Sopa Japonesa",
                    "fr": "Réconfort Japonais",
                    "it": "Cucina Giapponese"
                },
                "title": {
                    "de": "Japanische Ramen-Suppe oder Udon-Nudeln + Gyoza",
                    "en": "Japanese Ramen Bowl & Crispy Gyoza",
                    "es": "Ramen Japonés y Gyozas Crujientes",
                    "fr": "Bol de Ramen Fumant & Gyozas Dorés",
                    "it": "Ramen Fumante & Gyoza Croccanti"
                },
                "desc": {
                    "de": "Kräftige Brühe, zarte Nudeln, mariniertes Ei und Teigtaschen.",
                    "en": "Rich broth, noodles, marinated egg & dumplings.",
                    "es": "Caldo intenso, fideos, huevo marinado y gyozas.",
                    "fr": "Bouillon riche, nouilles, œuf mariné et raviolis croustillants.",
                    "it": "Brodo saporito, tagliolini, uovo marinato e ravioli alla piastra."
                },
                "actionLabel": {
                    "de": "Ramen in der Nähe finden",
                    "en": "Find Ramen Nearby",
                    "es": "Buscar Ramen cerca",
                    "fr": "Trouver un ramen",
                    "it": "Trova ramen nelle vicinanze"
                },
                "actionUrl": "https://www.google.com/maps/search/Ramen+Restaurant"
            },
            {
                "id": 10,
                "emoji": "🫒",
                "bg": "from-sky-600 to-blue-950",
                "tag": {
                    "de": "Urlaubs-Geschmack",
                    "en": "Greek Grill",
                    "es": "Sabor Griego",
                    "fr": "Grillades Grecques",
                    "it": "Grigliata Greca"
                },
                "title": {
                    "de": "Griechisch: Gyros-Pita, Souvlaki, Bifteki & Tzatziki",
                    "en": "Greek Gyros, Souvlaki & Tzatziki",
                    "es": "Griego: Gyros, Souvlaki y Tzatziki",
                    "fr": "Gyros Grec, Souvlaki & Tzatzíki",
                    "it": "Gyros Pita Greco, Souvlaki & Tzatziki"
                },
                "desc": {
                    "de": "Ordentlich Knoblauch-Tzatziki, Krautsalat, Feta und Pita-Brot.",
                    "en": "Grilled meats or halloumi, pita bread & creamy tzatziki.",
                    "es": "Pan pita caliente, feta, patatas y mucho tzatziki.",
                    "fr": "Viandes grillées ou halloumi, pain pita et tzatzíki bien frais.",
                    "it": "Carne alla griglia o halloumi, pane pita e tzatziki fresco."
                },
                "actionLabel": {
                    "de": "Griechen in der Nähe suchen",
                    "en": "Find Greek Food",
                    "es": "Buscar restaurante griego",
                    "fr": "Trouver grec",
                    "it": "Trova cucina greca"
                },
                "actionUrl": "https://www.google.com/maps/search/Greek+Restaurant+Gyros"
            },
            {
                "id": 11,
                "emoji": "🧆",
                "bg": "from-yellow-600 to-emerald-950",
                "tag": {
                    "de": "Orientalisch",
                    "en": "Middle Eastern",
                    "es": "Oriental",
                    "fr": "Saveurs du Liban",
                    "it": "Sapori Libanesi"
                },
                "title": {
                    "de": "Libanesisch: Schawarma, Hummus, Halloumi & Taboulé",
                    "en": "Lebanese Shawarma & Mezze Box",
                    "es": "Libanés: Shawarma, Hummus y Falafel",
                    "fr": "Shawarma Libanais & Boîte de Mezzés",
                    "it": "Shawarma Libanese & Box di Mezze"
                },
                "desc": {
                    "de": "Sesamsauce (Tahini), Granatapfel, Knusper-Falafel und Fladenbrot.",
                    "en": "Tahini, pomegranate, crispy falafel and warm flatbread.",
                    "es": "Salsa tahini, falafel crujiente y pan recién hecho.",
                    "fr": "Tahini, grenade, falafels croustillants et taboulé frais.",
                    "it": "Tahina, melograno, falafel croccanti e pane piatto caldo."
                },
                "actionLabel": {
                    "de": "Schawarma & Falafel finden",
                    "en": "Find Lebanese Food",
                    "es": "Buscar comida libanesa",
                    "fr": "Trouver libanais",
                    "it": "Trova cucina libanese"
                },
                "actionUrl": "https://www.google.com/maps/search/Lebanese+Shawarma+Falafel"
            },
            {
                "id": 12,
                "emoji": "🍖",
                "bg": "from-stone-700 to-red-950",
                "tag": {
                    "de": "Rauchig & Deftig",
                    "en": "Smokehouse BBQ",
                    "es": "Barbacoa",
                    "fr": "Barbecue Américain",
                    "it": "BBQ Americano"
                },
                "title": {
                    "de": "Spare Ribs, Pulled Pork Burger & Coleslaw",
                    "en": "BBQ Spare Ribs & Pulled Pork",
                    "es": "Costillas BBQ y Pulled Pork",
                    "fr": "Travers de Porc BBQ & Effiloché Tendre",
                    "it": "Costine BBQ & Pulled Pork Morbido"
                },
                "desc": {
                    "de": "Butterzart vom Grill mit rauchiger BBQ-Sauce und Maiskolben.",
                    "en": "Fall-off-the-bone ribs, smoky sauce & mac and cheese.",
                    "es": "Salsa barbacoa ahumada, costillas tiernas y patatas.",
                    "fr": "Viande ultra fondante, sauce fumée et coleslaw frais.",
                    "it": "Costine tenerissime, salsa barbecue affumicata e coleslaw."
                },
                "actionLabel": {
                    "de": "BBQ & Steakhouses suchen",
                    "en": "Find BBQ Nearby",
                    "es": "Buscar BBQ cerca",
                    "fr": "Trouver barbecue",
                    "it": "Trova BBQ nelle vicinanze"
                },
                "actionUrl": "https://www.google.com/maps/search/BBQ+Spare+Ribs+Burger"
            },
            {
                "id": 13,
                "emoji": "🥟",
                "bg": "from-red-600 to-rose-950",
                "tag": {
                    "de": "Häppchen-Himmel",
                    "en": "Dumpling Feast",
                    "es": "Dim Sum",
                    "fr": "Festin de Dim Sum",
                    "it": "Banchetto Dim Sum"
                },
                "title": {
                    "de": "Dim Sum, Bao Buns & Knusper-Ente",
                    "en": "Steamed Dim Sum & Fluffy Bao Buns",
                    "es": "Dim Sum, Bao Buns y Pato Crujiente",
                    "fr": "Bao Buns Vapeur & Dim Sum Croustillants",
                    "it": "Bao Buns Soffici & Dim Sum al Vapore"
                },
                "desc": {
                    "de": "Gedämpfte Teigtaschen, fluffige Hefebrötchen und Hoisin-Sauce.",
                    "en": "Steamed dumplings, fluffy bao buns & crispy duck.",
                    "es": "Empanadillas al vapor, pan bao esponjoso y salsa hoisin.",
                    "fr": "Raviolis vapeur, brioches bao moelleuses et canard laqué.",
                    "it": "Ravioli cotti a vapore, panini bao soffici e anatra croccante."
                },
                "actionLabel": {
                    "de": "Dim Sum & China-Restaurants",
                    "en": "Find Dim Sum / Bao",
                    "es": "Buscar Dim Sum cerca",
                    "fr": "Trouver dim sum / bao",
                    "it": "Trova dim sum / bao"
                },
                "actionUrl": "https://www.google.com/maps/search/Dim+Sum+Chinese+Restaurant"
            },
            {
                "id": 14,
                "emoji": "🍝",
                "bg": "from-amber-600 to-red-900",
                "tag": {
                    "de": "Trattoria zuhause",
                    "en": "Pasta Delivery",
                    "es": "Pasta Italiana",
                    "fr": "Pâtes au Four",
                    "it": "Primi della Tradizione"
                },
                "title": {
                    "de": "Überbackene Rigatoni al Forno / Trüffel-Pasta + Tiramisu",
                    "en": "Baked Pasta al Forno + Tiramisu",
                    "es": "Pasta al Forno Gratinada + Tiramisú",
                    "fr": "Gratin de Pâtes au Four + Tiramisù",
                    "it": "Pasta al Forno Gratinata + Tiramisù"
                },
                "desc": {
                    "de": "Heiße Pasta aus dem Steinofen und ein Tiramisu zum Teilen hinterher.",
                    "en": "Oven-baked cheesy pasta and a tiramisu to share.",
                    "es": "Pasta gratinada al horno y tiramisú de postre.",
                    "fr": "Plat de pâtes bien gratiné et part de tiramisù à partager.",
                    "it": "Rigatoni al forno ricchi di mozzarella e tiramisù della casa."
                },
                "actionLabel": {
                    "de": "Italiener in der Nähe",
                    "en": "Find Italian Delivery",
                    "es": "Buscar restaurante italiano",
                    "fr": "Trouver un italien",
                    "it": "Trova cucina italiana a domicilio"
                },
                "actionUrl": "https://www.google.com/maps/search/Italienisches+Restaurant"
            },
            {
                "id": 15,
                "emoji": "🌱",
                "bg": "from-green-600 to-emerald-950",
                "tag": {
                    "de": "100% Pflanzlich & Geil",
                    "en": "Plant-Based Craving",
                    "es": "100% Veggie",
                    "fr": "Envie Végétale",
                    "it": "Voglia Vegetale"
                },
                "title": {
                    "de": "Vegan Comfort Food (Beyond Burger, Seitan-Döner, Bowls)",
                    "en": "Plant-Based Smash Burger or Vegan Kebab",
                    "es": "Comida Vegana (Burger, Kebab o Bowl)",
                    "fr": "Smash Burger Végétal ou Kebab Seitan",
                    "it": "Smash Burger 100% Vegetale o Kebab Vegan"
                },
                "desc": {
                    "de": "Voller Geschmack, kreative Saucen und null Fresskoma.",
                    "en": "All the flavor and crunch without the heavy food coma.",
                    "es": "Todo el sabor y salsas brutales sin pesadez.",
                    "fr": "Tout le croustillant et les saveurs, sans sensation de lourdeur.",
                    "it": "Gusto pieno e croccantezza senza appesantirsi."
                },
                "actionLabel": {
                    "de": "Beste Veggie-Spots suchen",
                    "en": "Find Vegan / Veggie Spots",
                    "es": "Buscar sitios veggie cerca",
                    "fr": "Trouver restos vegan / veggie",
                    "it": "Trova locali vegan / veggie"
                },
                "actionUrl": "https://www.google.com/maps/search/Vegan+Restaurant"
            }
        ]
    },
    "quickcook": {
        "id": "quickcook",
        "category": "food",
        "mode": "match",
        "icon": "🍳",
        "gradient": "from-amber-500 to-yellow-600",
        "title": {
            "de": "15-Min Vorrats-Küche",
            "en": "15-Min Pantry Meals",
            "es": "Cocina en 15 Minutos",
            "fr": "Cuisine du Placard en 15 min",
            "it": "Cucina Dispensa in 15 Minuti"
        },
        "sub": {
            "de": "Schnell selbst kochen ohne großen Einkauf",
            "en": "Fast home cooking with minimal effort",
            "es": "Rápido en casa sin complicarse",
            "fr": "Cuisiner vite fait avec ce qu'on a",
            "it": "Piatti veloci con quel che c'è in casa"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "🥘",
                "bg": "from-red-600 to-orange-700",
                "tag": {
                    "de": "Nur 1 Pfanne",
                    "en": "One-Pan Wonder",
                    "es": "Una sola sartén",
                    "fr": "Plat Unique Express",
                    "it": "Tutto in Padella"
                },
                "title": {
                    "de": "Shakshuka (Eier in Tomaten-Paprika-Sauce)",
                    "en": "Shakshuka & Crusty Bread",
                    "es": "Shakshuka con Pan Crujiente",
                    "fr": "Shakshuka Épicée & Pain Croustillant",
                    "it": "Shakshuka con Uova & Pane Croccante"
                },
                "desc": {
                    "de": "Dosentomaten, Gewürze, Eier rein und mit Brot dippen.",
                    "en": "Poached eggs in spiced tomato sauce.",
                    "es": "Huevos escalfados en salsa de tomate especiada.",
                    "fr": "Œufs pochés dans une sauce tomate parfumée et piment doux.",
                    "it": "Uova in camicia in salsa di pomodoro speziata."
                },
                "actionLabel": {
                    "de": "Shakshuka Blitz-Rezept",
                    "en": "View Recipe",
                    "es": "Ver receta rápida",
                    "fr": "Voir la recette",
                    "it": "Vedi ricetta"
                },
                "actionUrl": "https://www.google.com/search?q=shakshuka+schnell+rezept"
            },
            {
                "id": 1,
                "emoji": "🧀",
                "bg": "from-amber-600 to-yellow-700",
                "tag": {
                    "de": "Käse-Liebe",
                    "en": "Melted Cheese",
                    "es": "Mucho Queso",
                    "fr": "Fromage Fondu",
                    "it": "Formaggio Filante"
                },
                "title": {
                    "de": "Knusprige Käse-Quesadillas / Nachos",
                    "en": "Crispy Cheese Quesadillas",
                    "es": "Quesadillas o Nachos Gratinados",
                    "fr": "Quesadillas Dorées au Fromage",
                    "it": "Quesadillas Croccanti al Formaggio"
                },
                "desc": {
                    "de": "Tortillas in der Pfanne mit Käse, Mais & Bohnen anrösten.",
                    "en": "Pan-toasted tortillas with melted cheese & corn.",
                    "es": "Tortillas doradas en sartén con queso fundido.",
                    "fr": "Tortillas toastées à la poêle avec fromage fondant et maïs.",
                    "it": "Tortillas tostate in padella con formaggio filante."
                },
                "actionLabel": {
                    "de": "Quesadilla Ideen öffnen",
                    "en": "Quesadilla Ideas",
                    "es": "Ideas de quesadillas",
                    "fr": "Idées de quesadillas",
                    "it": "Idee per quesadillas"
                },
                "actionUrl": "https://www.google.com/search?q=quesadillas+pfanne+schnell"
            },
            {
                "id": 2,
                "emoji": "🥔",
                "bg": "from-emerald-600 to-teal-700",
                "tag": {
                    "de": "12 Minuten",
                    "en": "12 Minutes",
                    "es": "En 12 minutos",
                    "fr": "Prêt en 12 min",
                    "it": "Pronto in 12 min"
                },
                "title": {
                    "de": "Gebratene Gnocchi-Pfanne mit Tomaten",
                    "en": "Crispy Pan-Fried Gnocchi",
                    "es": "Gnocchis Salteados en Sartén",
                    "fr": "Gnocchis Poêlés aux Tomates Cerises",
                    "it": "Gnocchi Dorati in Padella con Pomodorini"
                },
                "desc": {
                    "de": "Gnocchi direkt in Butter/Olivenöl knusprig braten + Mozzarella.",
                    "en": "Pan-seared gnocchi with cherry tomatoes & basil.",
                    "es": "Gnocchis dorados con tomates cherry y mozzarella.",
                    "fr": "Gnocchis dorés au beurre avec tomates cerises et basilic frais.",
                    "it": "Gnocchi spadellati dorati con pomodorini e basilico."
                },
                "actionLabel": {
                    "de": "Gnocchi-Pfanne Rezept",
                    "en": "Quick Gnocchi Recipe",
                    "es": "Ver receta de gnocchis",
                    "fr": "Recette gnocchis express",
                    "it": "Ricetta gnocchi veloci"
                },
                "actionUrl": "https://www.google.com/search?q=gnocchi+pfanne+schnell+rezept"
            },
            {
                "id": 3,
                "emoji": "🍚",
                "bg": "from-orange-600 to-stone-800",
                "tag": {
                    "de": "Reste-Retter",
                    "en": "Fridge Cleaner",
                    "es": "Cero desperdicio",
                    "fr": "Anti-Gaspillage",
                    "it": "Svuota-Frigo"
                },
                "title": {
                    "de": "Egg Fried Rice (Gebratener Asia-Reis)",
                    "en": "Golden Egg Fried Rice",
                    "es": "Arroz Frito Estilo Asiático",
                    "fr": "Riz Sauté aux Œufs Dorés",
                    "it": "Riso Saltato all'Uovo (Egg Fried Rice)"
                },
                "desc": {
                    "de": "Reis, Ei, Sojasauce, Frühlingszwiebeln und was der Kühlschrank hergibt.",
                    "en": "Rice, eggs, soy sauce, sesame & veggies.",
                    "es": "Arroz, huevo, salsa de soja y verduras.",
                    "fr": "Riz blanc, œufs battus, sauce soja, sésame et petits légumes.",
                    "it": "Riso, uova, salsa di soia, sesamo e verdure croccanti."
                },
                "actionLabel": {
                    "de": "Fried Rice Trick ansehen",
                    "en": "5-Min Fried Rice Guide",
                    "es": "Ver truco de arroz frito",
                    "fr": "Guide riz sauté en 5 min",
                    "it": "Guida al riso saltato in 5 min"
                },
                "actionUrl": "https://www.google.com/search?q=egg+fried+rice+schnell+rezept"
            },
            {
                "id": 4,
                "emoji": "🌿",
                "bg": "from-green-600 to-emerald-800",
                "tag": {
                    "de": "Klassiker",
                    "en": "Pantry Staple",
                    "es": "Clásico infalible",
                    "fr": "Base du Placard",
                    "it": "Classico da Dispensa"
                },
                "title": {
                    "de": "Pasta mit Pesto, Pinienkernen & Burrata",
                    "en": "Pesto Pasta with Burrata",
                    "es": "Pasta al Pesto con Burrata",
                    "fr": "Pâtes au Pesto & Burrata Crémeuse",
                    "it": "Pasta al Pesto & Burrata Cremosa"
                },
                "desc": {
                    "de": "Minimaler Aufwand, schmeckt wie im Urlaub in Italien.",
                    "en": "Minimal effort, tastes like an Italian holiday.",
                    "es": "Mínimo esfuerzo, máximo sabor italiano.",
                    "fr": "Effort minimal, goût digne de vacances en Italie.",
                    "it": "Zero fatica, sapore che sa di vacanze italiane."
                },
                "actionLabel": {
                    "de": "Upgrade-Tipps für Pesto-Pasta",
                    "en": "Pesto Upgrade Tips",
                    "es": "Ideas para mejorar tu pasta",
                    "fr": "Astuces pour booster le pesto",
                    "it": "Consigli per esaltare il pesto"
                },
                "actionUrl": "https://www.google.com/search?q=pesto+pasta+pimpen+ideen"
            },
            {
                "id": 5,
                "emoji": "🧄",
                "bg": "from-yellow-600 to-amber-900",
                "tag": {
                    "de": "4 Zutaten",
                    "en": "4 Ingredients",
                    "es": "4 Ingredientes",
                    "fr": "4 Ingrédients",
                    "it": "4 Ingredienti"
                },
                "title": {
                    "de": "Spaghetti Aglio e Olio (mit Chili & viel Parmesan)",
                    "en": "Spaghetti Aglio, Olio e Peperoncino",
                    "es": "Spaghetti Aglio e Olio con Guindilla",
                    "fr": "Spaghetti Ail, Huile d'Olive & Piment",
                    "it": "Spaghetti Aglio, Olio e Peperoncino"
                },
                "desc": {
                    "de": "Olivenöl, Knoblauch, Chili und Petersilie – in 10 Minuten fertig.",
                    "en": "Olive oil, garlic, chili flakes & parmesan in 10 mins.",
                    "es": "Aceite de oliva, ajo, guindilla y parmesano en 10 min.",
                    "fr": "Huile d'olive vierge, ail doré, piment et parmesan en 10 min.",
                    "it": "Olio buono, aglio dorato, peperoncino e tanto parmigiano in 10 min."
                },
                "actionLabel": {
                    "de": "Perfektes Aglio e Olio Rezept",
                    "en": "10-Min Recipe",
                    "es": "Ver receta original",
                    "fr": "Recette en 10 min",
                    "it": "Ricetta in 10 min"
                },
                "actionUrl": "https://www.google.com/search?q=spaghetti+aglio+e+olio+original+rezept"
            },
            {
                "id": 6,
                "emoji": "🧀",
                "bg": "from-rose-600 to-purple-900",
                "tag": {
                    "de": "Aus dem Ofen",
                    "en": "TikTok Classic",
                    "es": "Éxito al horno",
                    "fr": "Classique Viral",
                    "it": "Classico Virale"
                },
                "title": {
                    "de": "Baked Feta Pasta mit Kirschtomaten",
                    "en": "Oven-Baked Feta & Cherry Tomato Pasta",
                    "es": "Pasta con Queso Feta y Tomates al Horno",
                    "fr": "Pâtes Feta Rôtie & Tomates Cerises",
                    "it": "Pasta con Feta al Forno & Pomodorini"
                },
                "desc": {
                    "de": "Feta und Tomaten mit Olivenöl in den Ofen, Nudeln drunterheben – fertig.",
                    "en": "Roast feta & tomatoes until creamy, toss with pasta.",
                    "es": "Feta y tomatitos al horno hasta que quede cremoso.",
                    "fr": "Feta et tomates rôties au four jusqu'à texture crémeuse.",
                    "it": "Inforna feta e pomodorini finché sono cremosi, unisci la pasta."
                },
                "actionLabel": {
                    "de": "Baked Feta Rezept",
                    "en": "View Recipe",
                    "es": "Ver receta",
                    "fr": "Voir la recette",
                    "it": "Vedi ricetta"
                },
                "actionUrl": "https://www.google.com/search?q=baked+feta+pasta+rezept"
            },
            {
                "id": 7,
                "emoji": "🍳",
                "bg": "from-amber-500 to-orange-700",
                "tag": {
                    "de": "Protein-Kick",
                    "en": "8-Min Meal",
                    "es": "En 8 minutos",
                    "fr": "Repas en 8 min",
                    "it": "Piatto in 8 min"
                },
                "title": {
                    "de": "Fluffiges Käse-Omelett oder Rührei auf Röstbrot",
                    "en": "Fluffy Cheese Omelette & Sourdough",
                    "es": "Tortilla Francesa Jugosa o Huevos Revueltos",
                    "fr": "Omelette Moelleuse au Fromage & Pain Toasté",
                    "it": "Omelette Morbida al Formaggio & Pane Tostato"
                },
                "desc": {
                    "de": "Mit Schnittlauch, Feta, Champignons oder Tomaten in 8 Minuten auf dem Teller.",
                    "en": "Eggs, herbs, melted cheese and toasted bread.",
                    "es": "Con queso fundido, hierbas y pan tostado.",
                    "fr": "Œufs battus, herbes, fromage coulant et bon pain grillé.",
                    "it": "Uova soffici, erbe fresche, formaggio fuso e pane tostato."
                },
                "actionLabel": {
                    "de": "Omelett-Füllungen ansehen",
                    "en": "Omelette Ideas",
                    "es": "Ideas de relleno",
                    "fr": "Idées d'omelettes",
                    "it": "Idee per l'omelette"
                },
                "actionUrl": "https://www.google.com/search?q=omelett+fuellung+ideen+abendessen"
            },
            {
                "id": 8,
                "emoji": "🥟",
                "bg": "from-teal-600 to-slate-900",
                "tag": {
                    "de": "3 Minuten Kochzeit",
                    "en": "3-Min Boil",
                    "es": "Listo en 5 min",
                    "fr": "Cuisson 3 min",
                    "it": "Cottura 3 min"
                },
                "title": {
                    "de": "Frische Tortellini in Salbei-Butter oder Sahnesauce",
                    "en": "Fresh Tortellini in Sage Butter / Cream",
                    "es": "Tortellini Frescos a la Crema o Mantequilla",
                    "fr": "Tortellini Frais Beurre de Sauge ou Crème",
                    "it": "Tortellini Freschi al Burro e Salvia o Panna"
                },
                "desc": {
                    "de": "Kühlregal-Tortellini brauchen nur 3 Minuten – Parmesan drüber, fertig!",
                    "en": "Fresh tortellini cook in 3 minutes flat.",
                    "es": "Los tortellini frescos se hacen en solo 3 minutos.",
                    "fr": "Les tortellini frais cuisent en exactement 3 minutes chrono.",
                    "it": "I tortellini freschi cuociono in 3 minuti esatti."
                },
                "actionLabel": {
                    "de": "5-Min Tortellini-Saucen",
                    "en": "Quick Sauce Ideas",
                    "es": "Salsas en 5 minutos",
                    "fr": "Sauces rapides pour tortellini",
                    "it": "Salse veloci per tortellini"
                },
                "actionUrl": "https://www.google.com/search?q=tortellini+schnelle+sauce+rezept"
            },
            {
                "id": 9,
                "emoji": "🥜",
                "bg": "from-orange-700 to-red-900",
                "tag": {
                    "de": "Cremig & Würzig",
                    "en": "10-Min Wok",
                    "es": "10 min en sartén",
                    "fr": "Wok en 10 min",
                    "it": "Wok in 10 min"
                },
                "title": {
                    "de": "10-Min Erdnussbutter-Asia-Nudeln (Spicy Peanut Noodles)",
                    "en": "10-Min Spicy Peanut Butter Noodles",
                    "es": "Fideos Asiáticos con Salsa de Cacahuete",
                    "fr": "Nouilles Sauce Cacahuète Pimentée",
                    "it": "Noodles Speziati al Burro d'Arachidi"
                },
                "desc": {
                    "de": "Erdnussbutter, Sojasauce, Knoblauch, Chili & heißes Nudelwasser verrühren.",
                    "en": "Peanut butter, soy sauce, chili oil & noodles.",
                    "es": "Crema de cacahuete, soja, toque picante y fideos.",
                    "fr": "Beurre de cacahuète, sauce soja, huile pimentée et nouilles.",
                    "it": "Burro di arachidi, salsa di soia, olio al peperoncino e noodles."
                },
                "actionLabel": {
                    "de": "Erdnuss-Nudeln Rezept",
                    "en": "Peanut Noodle Recipe",
                    "es": "Ver receta rápida",
                    "fr": "Recette nouilles cacahuète",
                    "it": "Ricetta noodles alle arachidi"
                },
                "actionUrl": "https://www.google.com/search?q=schnelle+erdnuss+nudeln+sojasauce+rezept"
            },
            {
                "id": 10,
                "emoji": "🐟",
                "bg": "from-sky-600 to-indigo-900",
                "tag": {
                    "de": "Vorratskammer-Held",
                    "en": "Pantry Hero",
                    "es": "De despensa",
                    "fr": "Héros du Placard",
                    "it": "Re della Dispensa"
                },
                "title": {
                    "de": "Thunfisch-Pasta oder Kichererbsen-Salat (Mediterran)",
                    "en": "Mediterranean Tuna Pasta or Chickpea Salad",
                    "es": "Pasta con Atún o Ensalada Mediterránea",
                    "fr": "Pâtes au Thon ou Salade de Pois Chiches",
                    "it": "Pasta al Tonno o Insalata di Ceci Mediterranea"
                },
                "desc": {
                    "de": "Alles aus dem Vorratsschrank: Oliven, Kapern, Zwiebeln, Tomaten.",
                    "en": "Made 100% from pantry staples in 12 minutes.",
                    "es": "Con ingredientes que siempre hay en la despensa.",
                    "fr": "Fait à 100% avec les conserves du placard en 12 minutes.",
                    "it": "Preparato al 100% con ingredienti della dispensa in 12 min."
                },
                "actionLabel": {
                    "de": "Vorrats-Rezept öffnen",
                    "en": "Pantry Recipe",
                    "es": "Ver receta",
                    "fr": "Recette de placard",
                    "it": "Ricetta da dispensa"
                },
                "actionUrl": "https://www.google.com/search?q=schnelle+thunfisch+pasta+rezept"
            },
            {
                "id": 11,
                "emoji": "🥪",
                "bg": "from-yellow-600 to-stone-800",
                "tag": {
                    "de": "Heiß & Knusprig",
                    "en": "Sandwich Lover",
                    "es": "Tostado",
                    "fr": "Passion Sandwich",
                    "it": "Amanti del Toast"
                },
                "title": {
                    "de": "Club-Sandwich, Croque Monsieur oder Hawaii-Toast",
                    "en": "Loaded Club Sandwich or Croque Monsieur",
                    "es": "Sándwich Club o Croque Monsieur Gratinado",
                    "fr": "Club Sandwich Chaud ou Croque-Monsieur",
                    "it": "Club Sandwich Caldo o Toast Gratinato"
                },
                "desc": {
                    "de": "Dreistöckig belegt oder mit dick Käse im Ofen/Kontaktgrill geröstet.",
                    "en": "Triple-decker toasted sandwich with melted cheese.",
                    "es": "Sándwich caliente con queso fundido y crujiente.",
                    "fr": "Pain toasté doré à étages avec fromage fondu et jambon.",
                    "it": "Toast a strati dorato con formaggio fuso filante."
                },
                "actionLabel": {
                    "de": "Heiße Sandwich-Ideen",
                    "en": "Hot Sandwich Recipes",
                    "es": "Ideas de sándwiches",
                    "fr": "Recettes sandwichs chauds",
                    "it": "Ricette sandwich caldi"
                },
                "actionUrl": "https://www.google.com/search?q=warme+sandwiches+abendessen+ideen"
            },
            {
                "id": 12,
                "emoji": "🍜",
                "bg": "from-rose-600 to-amber-800",
                "tag": {
                    "de": "6-Minuten-Hack",
                    "en": "Viral Upgrade",
                    "es": "Truco rápido",
                    "fr": "Version Améliorée",
                    "it": "Upgrade Goloso"
                },
                "title": {
                    "de": "Pimped Instant-Ramen (mit Ei, Frühlingszwiebeln & Sesam)",
                    "en": "Upgraded Gourmet Instant Ramen",
                    "es": "Ramen Instantáneo Mejorado con Huevo",
                    "fr": "Ramen Instantanés Façon Chef",
                    "it": "Ramen Istantaneo Gourmet"
                },
                "desc": {
                    "de": "Ramen-Päckchen + wachsweiches Ei, Butter, Knoblauch und Sesamöl.",
                    "en": "Add a soft-boiled egg, butter, garlic & green onions.",
                    "es": "Añadir huevo poché, cebolleta, sésamo y toque cremoso.",
                    "fr": "Ajoute un œuf mollet, du beurre, de l'ail et de la ciboule.",
                    "it": "Aggiungi un uovo sodo morbido, burro, aglio e cipollotto."
                },
                "actionLabel": {
                    "de": "Ramen-Upgrade Tricks",
                    "en": "Ramen Upgrade Guide",
                    "es": "Trucos para mejorar ramen",
                    "fr": "Guide pour booster ses ramen",
                    "it": "Guida per arricchire il ramen"
                },
                "actionUrl": "https://www.google.com/search?q=instant+ramen+pimpen+ideen"
            },
            {
                "id": 13,
                "emoji": "🥣",
                "bg": "from-orange-500 to-red-800",
                "tag": {
                    "de": "1 Topf, 15 Min",
                    "en": "One-Pot Cozy",
                    "es": "Una sola olla",
                    "fr": "Cocooning One-Pot",
                    "it": "Tutto in Pentola"
                },
                "title": {
                    "de": "Schnelles Rote-Linsen-Curry mit Kokosmilch",
                    "en": "15-Min Red Lentil Coconut Curry",
                    "es": "Curry Rápido de Lentejas Rojas y Coco",
                    "fr": "Curry de Lentilles Corail au Lait de Coco",
                    "it": "Curry di Lenticchie Rosse & Latte di Cocco"
                },
                "desc": {
                    "de": "Rote Linsen kochen in 10 Minuten weich – Kokosmilch & Currypaste dazu!",
                    "en": "Red lentils cook in 10 mins flat with coconut milk.",
                    "es": "Las lentejas rojas se hacen en 10 min con leche de coco.",
                    "fr": "Les lentilles corail cuisent en 10 min dans le lait de coco doux.",
                    "it": "Le lenticchie rosse cuociono in 10 min nel latte di cocco profumato."
                },
                "actionLabel": {
                    "de": "15-Min Linsen-Curry Rezept",
                    "en": "15-Min Curry Recipe",
                    "es": "Ver receta rápida",
                    "fr": "Recette curry en 15 min",
                    "it": "Ricetta curry in 15 min"
                },
                "actionUrl": "https://www.google.com/search?q=rotes+linsen+kokos+curry+15+minuten"
            }
        ]
    },
    "drinks": {
        "id": "drinks",
        "category": "food",
        "mode": "match",
        "icon": "🍹",
        "gradient": "from-pink-500 to-purple-600",
        "title": {
            "de": "Bar & Drinks heute Abend",
            "en": "Drinks & Night Out",
            "es": "¿Dónde tomamos algo?",
            "fr": "Bars & Verre ce Soir",
            "it": "Dove Andiamo a Bere?"
        },
        "sub": {
            "de": "Wo stoßen wir heute zusammen an?",
            "en": "Where are we grabbing a drink tonight?",
            "es": "¿Qué plan de copas apetece hoy?",
            "fr": "Où est-ce qu'on trinque ce soir ?",
            "it": "Dove brindiamo stasera?"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "🍻",
                "bg": "from-amber-700 to-stone-900",
                "tag": {
                    "de": "Locker & Bodenständig",
                    "en": "Casual Vibe",
                    "es": "Ambiente relajado",
                    "fr": "Ambiance Détente",
                    "it": "Atmosfera Informale"
                },
                "title": {
                    "de": "Gemütlicher Pub oder Eckkneipe",
                    "en": "Cozy Local Pub / Taproom",
                    "es": "Pub o Bar de Cervezas",
                    "fr": "Pub de Quartier Chaleureux",
                    "it": "Pub di Quartiere o Birreria Accogliente"
                },
                "desc": {
                    "de": "Frisch gezapftes Bier, gute Musik und entspannt quatschen.",
                    "en": "Draft beer, zero dress code, great talk.",
                    "es": "Cerveza tirada, cero postureo y buena charla.",
                    "fr": "Bière pression fraîche, zéro chichi, bonnes conversations.",
                    "it": "Birra alla spina, zero formalità e chiacchiere sincere."
                },
                "actionLabel": {
                    "de": "Pubs in der Nähe finden",
                    "en": "Find Pubs Nearby",
                    "es": "Buscar pubs cerca",
                    "fr": "Trouver des pubs à proximité",
                    "it": "Trova pub nelle vicinanze"
                },
                "actionUrl": "https://www.google.com/maps/search/Pub+Bar"
            },
            {
                "id": 1,
                "emoji": "🍸",
                "bg": "from-fuchsia-700 to-purple-950",
                "tag": {
                    "de": "Drinks mit Stil",
                    "en": "Fancy Cocktails",
                    "es": "Cócteles con estilo",
                    "fr": "Cocktails Travaillés",
                    "it": "Cocktail Raffinati"
                },
                "title": {
                    "de": "Stylische Cocktailbar",
                    "en": "Craft Cocktail Lounge",
                    "es": "Coctelería de Autor",
                    "fr": "Bar à Cocktails Chic & Feutré",
                    "it": "Cocktail Bar Elegante & Luci Soffuse"
                },
                "desc": {
                    "de": "Espresso Martini, Negroni oder Sour bei gedimmtem Licht.",
                    "en": "Espresso Martinis, Negronis & dim lights.",
                    "es": "Buenos cócteles y luz tenue.",
                    "fr": "Espresso Martinis, Negronis et lumière tamisée.",
                    "it": "Espresso Martini, Negroni a regola d'arte e luci soffuse."
                },
                "actionLabel": {
                    "de": "Beste Cocktailbars suchen",
                    "en": "Top Cocktail Bars",
                    "es": "Buscar coctelerías",
                    "fr": "Top bars à cocktails",
                    "it": "Migliori cocktail bar"
                },
                "actionUrl": "https://www.google.com/maps/search/Cocktail+Bar"
            },
            {
                "id": 2,
                "emoji": "🍷",
                "bg": "from-rose-800 to-slate-900",
                "tag": {
                    "de": "Genuss & Deep Talk",
                    "en": "Classy & Cozy",
                    "es": "Vino y Picoteo",
                    "fr": "Chic & Douillet",
                    "it": "Elegante & Intimo"
                },
                "title": {
                    "de": "Weinbar mit Käse & Antipasti",
                    "en": "Wine Bar & Charcuterie",
                    "es": "Bar de Vinos y Tapas",
                    "fr": "Bar à Vin & Planche Apéro",
                    "it": "Enoteca con Tagliere & Calice di Vino"
                },
                "desc": {
                    "de": "Ein gutes Glas Wein und Kleinigkeiten zum Teilen.",
                    "en": "Great glass of wine and snacks to share.",
                    "es": "Una buena copa de vino y algo de picar.",
                    "fr": "Bon verre de vin et délices à grignoter à deux.",
                    "it": "Un buon bicchiere di vino e stuzzichini da condividere."
                },
                "actionLabel": {
                    "de": "Weinbars in der Nähe",
                    "en": "Find Wine Bars",
                    "es": "Buscar bares de vinos",
                    "fr": "Trouver un bar à vin",
                    "it": "Trova enoteche vicine"
                },
                "actionUrl": "https://www.google.com/maps/search/Wine+Bar"
            },
            {
                "id": 3,
                "emoji": "🍾",
                "bg": "from-indigo-700 to-slate-900",
                "tag": {
                    "de": "Frische Luft",
                    "en": "Urban Stroll",
                    "es": "Al aire libre",
                    "fr": "Balade Urbaine",
                    "it": "Passeggiata in Città"
                },
                "title": {
                    "de": "Späti-Drinks & Aussichtspunkt",
                    "en": "Corner-Shop Drinks & Viewpoint",
                    "es": "Algo fresco en un mirador o parque",
                    "fr": "Verres à Emporter & Spot Panoramique",
                    "it": "Bevanda da Asporto & Vista Panoramica"
                },
                "desc": {
                    "de": "Kaltgetränk auf die Hand und an einen schönen Platz setzen.",
                    "en": "Grab cold drinks and sit by the water or park.",
                    "es": "Pillar algo frío y sentarse en un sitio bonito.",
                    "fr": "Boissons fraîches prises au kiosque et pause au bord de l'eau.",
                    "it": "Prendi qualcosa di fresco e siediti in riva al fiume o al parco."
                },
                "actionLabel": {
                    "de": "Schöne Plätze in der Nähe",
                    "en": "Find Viewpoints / Parks",
                    "es": "Ver parques o miradores",
                    "fr": "Trouver de beaux points de vue",
                    "it": "Trova punti panoramici / parchi"
                },
                "actionUrl": "https://www.google.com/maps/search/Park+Viewpoint"
            },
            {
                "id": 4,
                "emoji": "🏠",
                "bg": "from-teal-700 to-slate-900",
                "tag": {
                    "de": "0 € Bar-Rechnung",
                    "en": "Home Bartender",
                    "es": "En casa",
                    "fr": "Barman Maison",
                    "it": "Barman a Casa"
                },
                "title": {
                    "de": "Home-Bar: Selbst Drinks mixen",
                    "en": "DIY Cocktail Night at Home",
                    "es": "Montar el bar en casa",
                    "fr": "Soirée Cocktails Maison",
                    "it": "Serata Cocktail Fatti in Casa"
                },
                "desc": {
                    "de": "Eigene Musik, Balkon oder Couch und Aperol/Gin Tonic selber machen.",
                    "en": "Our own playlist, balcony or couch, half the price.",
                    "es": "Nuestra música, sofá o terraza y cero colas.",
                    "fr": "Notre playlist, canapé ou balcon, deux fois moins cher.",
                    "it": "La nostra musica, divano o balcone, a metà prezzo."
                },
                "actionLabel": {
                    "de": "3-Zutaten Cocktail-Rezepte",
                    "en": "Easy 3-Ingredient Drinks",
                    "es": "Cócteles fáciles en casa",
                    "fr": "Cocktails faciles à 3 ingrédients",
                    "it": "Cocktail facili con 3 ingredienti"
                },
                "actionUrl": "https://www.google.com/search?q=einfache+cocktails+mit+3+zutaten"
            },
            {
                "id": 5,
                "emoji": "🌇",
                "bg": "from-orange-500 to-rose-800",
                "tag": {
                    "de": "Über den Dächern",
                    "en": "Skyline View",
                    "es": "Con vistas",
                    "fr": "Vue Skyline",
                    "it": "Vista sui Tetti"
                },
                "title": {
                    "de": "Rooftop-Bar oder Dachterrasse",
                    "en": "Rooftop Bar with City Views",
                    "es": "Terraza Rooftop con Vistas",
                    "fr": "Rooftop avec Vue sur la Ville",
                    "it": "Rooftop Bar con Vista Panoramica"
                },
                "desc": {
                    "de": "Drinks mit Blick über die Stadt und die Lichter am Abend.",
                    "en": "Drinks overlooking the city skyline.",
                    "es": "Tomar algo viendo las luces de la ciudad.",
                    "fr": "Prendre un verre en admirant les lumières de la ville.",
                    "it": "Un drink ammirando le luci e i tetti della città."
                },
                "actionLabel": {
                    "de": "Rooftop-Bars suchen",
                    "en": "Find Rooftop Bars",
                    "es": "Buscar rooftops cerca",
                    "fr": "Trouver des rooftops",
                    "it": "Trova rooftop bar"
                },
                "actionUrl": "https://www.google.com/maps/search/Rooftop+Bar"
            },
            {
                "id": 6,
                "emoji": "🍺",
                "bg": "from-emerald-700 to-stone-900",
                "tag": {
                    "de": "Draußen sitzen",
                    "en": "Open Air",
                    "es": "Terraza",
                    "fr": "En Plein Air",
                    "it": "All'Aperto"
                },
                "title": {
                    "de": "Biergarten, Strandbar oder Außenterrasse",
                    "en": "Beer Garden or Waterfront Terrace",
                    "es": "Terraza al Aire Libre o Chiringuito",
                    "fr": "Terrasse ensoleillée ou Guinguette",
                    "it": "Birreria all'Aperto o Terrazza sul Fiume"
                },
                "desc": {
                    "de": "Unter Lichterketten draußen sitzen mit kaltem Bier oder Schorle.",
                    "en": "Sit outside under string lights with cold drinks.",
                    "es": "Sentarse al fresco con buen ambiente.",
                    "fr": "S'asseoir dehors sous les lampions avec un verre bien frais.",
                    "it": "Sotto le luci all'aperto con qualcosa di fresco da bere."
                },
                "actionLabel": {
                    "de": "Biergärten & Terrassen finden",
                    "en": "Find Beer Gardens",
                    "es": "Buscar terrazas cerca",
                    "fr": "Trouver des terrasses",
                    "it": "Trova locali all'aperto"
                },
                "actionUrl": "https://www.google.com/maps/search/Biergarten+Strandbar"
            },
            {
                "id": 7,
                "emoji": "🍊",
                "bg": "from-orange-500 to-red-600",
                "tag": {
                    "de": "Dolce Vita",
                    "en": "Aperitivo Hour",
                    "es": "Hora del Aperitivo",
                    "fr": "Heure de l'Apéro",
                    "it": "Ora dell'Aperitivo"
                },
                "title": {
                    "de": "Italienischer Aperitivo (Aperol, Limoncello Spritz & Oliven)",
                    "en": "Italian Aperitivo (Spritz & Olives)",
                    "es": "Tardeo de Aperol Spritz y Picoteo",
                    "fr": "Aperitivo Italien (Spritz & Olives)",
                    "it": "Aperitivo Italiano (Spritz, Calice & Stuzzichini)"
                },
                "desc": {
                    "de": "Spritz auf Eis, ein paar Oliven und Chips – wie in Mailand.",
                    "en": "Ice-cold Spritz, olives and little bites.",
                    "es": "Spritz bien frío con aceitunas y snacks.",
                    "fr": "Spritz bien glacé, olives et petits bouchées salées.",
                    "it": "Spritz ghiacciato, olive saporite e piccoli assaggi salati."
                },
                "actionLabel": {
                    "de": "Aperitivo-Bars in der Nähe",
                    "en": "Find Aperitivo Spots",
                    "es": "Buscar sitios de aperitivo",
                    "fr": "Trouver un bar à apéro",
                    "it": "Trova posti per aperitivo"
                },
                "actionUrl": "https://www.google.com/maps/search/Aperitivo+Bar+Italian"
            },
            {
                "id": 8,
                "emoji": "🍀",
                "bg": "from-green-700 to-stone-950",
                "tag": {
                    "de": "Stimmung & Live-Vibe",
                    "en": "Lively Crowd",
                    "es": "Ambiente animado",
                    "fr": "Ambiance Animée",
                    "it": "Serata Vivace"
                },
                "title": {
                    "de": "Irish Pub (Guinness, Cider, Live-Musik oder Quiz)",
                    "en": "Irish Pub (Guinness, Cider & Live Music)",
                    "es": "Irish Pub (Pinta, Música o Quiz)",
                    "fr": "Pub Irlandais (Guinness & Musique Live)",
                    "it": "Irish Pub (Guinness, Sidro & Musica dal Vivo)"
                },
                "desc": {
                    "de": "Immer gute Laune, volle Tische und null Steifheit.",
                    "en": "Great energy, cold pints and live music.",
                    "es": "Buen rollo garantizado y pintas bien frías.",
                    "fr": "Super énergie, pintes fraîches et concerts acoustiques.",
                    "it": "Bella energia, pinte fresche e musica dal vivo."
                },
                "actionLabel": {
                    "de": "Irish Pub in der Nähe",
                    "en": "Find Irish Pubs",
                    "es": "Buscar Irish Pub cerca",
                    "fr": "Trouver un pub irlandais",
                    "it": "Trova pub irlandesi"
                },
                "actionUrl": "https://www.google.com/maps/search/Irish+Pub"
            },
            {
                "id": 9,
                "emoji": "🎤",
                "bg": "from-purple-600 to-pink-700",
                "tag": {
                    "de": "Eskalations-Potenzial",
                    "en": "Zero Shame",
                    "es": "Risas aseguradas",
                    "fr": "Zéro Honte",
                    "it": "Zero Inibizioni"
                },
                "title": {
                    "de": "Karaoke-Bar oder Musik-Kneipe",
                    "en": "Karaoke Bar or Late-Night Music Bar",
                    "es": "Bar de Karaoke o Música en Vivo",
                    "fr": "Bar Karaoké ou Bar Musical Nocturne",
                    "it": "Karaoke Bar o Locale con Musica"
                },
                "desc": {
                    "de": "Mitgrölen zu 2000er-Hits – egal ob man singen kann oder nicht.",
                    "en": "Belt out 2000s throwbacks and laugh all night.",
                    "es": "Cantar temazos a pleno pulmón y reírse.",
                    "fr": "Chanter les tubes des années 2000 et rigoler toute la nuit.",
                    "it": "Cantare a squarciagola i successi anni 2000 e ridere insieme."
                },
                "actionLabel": {
                    "de": "Karaoke- & Musikbars suchen",
                    "en": "Find Karaoke / Music Bars",
                    "es": "Buscar Karaoke cerca",
                    "fr": "Trouver un bar karaoké / musical",
                    "it": "Trova locali karaoke / musica"
                },
                "actionUrl": "https://www.google.com/maps/search/Karaoke+Live+Music+Bar"
            },
            {
                "id": 10,
                "emoji": "🍋",
                "bg": "from-cyan-600 to-teal-900",
                "tag": {
                    "de": "0,0% Kater morgen",
                    "en": "Zero Hangover",
                    "es": "Cero resaca",
                    "fr": "Zéro Gueule de Bois",
                    "it": "Zero Postumi"
                },
                "title": {
                    "de": "Fancy Mocktails, Hausgemachte Limos oder Eiskaffee-Date",
                    "en": "Craft Mocktails, Iced Matcha or Virgin Mojito",
                    "es": "Mocktails Sin Alcohol o Café Helado",
                    "fr": "Mocktails Créatifs, Chaï Glacé ou Virgin Mojito",
                    "it": "Mocktail Sfiziosi, Tè Freddo o Caffè Gourmet"
                },
                "desc": {
                    "de": "Voller Bar-Genuss mit frischer Minze & Limette – morgen topfit aufwachen.",
                    "en": "All the flavor and vibe, 100% fresh tomorrow morning.",
                    "es": "Todo el sabor y ambiente, mañana frescos al 100%.",
                    "fr": "Tout le plaisir et le style, 100% frais demain matin.",
                    "it": "Tutto il gusto e l'atmosfera, freschissimi domani mattina."
                },
                "actionLabel": {
                    "de": "Beste Mocktail-Rezepte & Cafés",
                    "en": "Mocktail Ideas",
                    "es": "Ideas de mocktails",
                    "fr": "Idées de mocktails",
                    "it": "Idee per mocktail sfiziosi"
                },
                "actionUrl": "https://www.google.com/search?q=beste+mocktails+rezepte+alkoholfrei"
            },
            {
                "id": 11,
                "emoji": "☕",
                "bg": "from-stone-700 to-amber-950",
                "tag": {
                    "de": "Koffein & Nachtleben",
                    "en": "Late Night Buzz",
                    "es": "Noche con ritmo",
                    "fr": "Énergie Nocturne",
                    "it": "Caffè & Glamour"
                },
                "title": {
                    "de": "Espresso-Martini oder Late-Night Café-Bar",
                    "en": "Espresso Martini Lounge",
                    "es": "Bar de Espresso Martini y Copas",
                    "fr": "Lounge Espresso Martini & Café Nocturne",
                    "it": "Lounge con Espresso Martini & Bar Notturno"
                },
                "desc": {
                    "de": "Wenn man müde ist, aber der Abend noch nicht vorbei sein soll!",
                    "en": "Wake up and keep the night going in style.",
                    "es": "El combo perfecto de café y cóctel para seguir la noche.",
                    "fr": "Se réveiller et prolonger la soirée avec style.",
                    "it": "Darsi la carica e continuare la serata con classe."
                },
                "actionLabel": {
                    "de": "Bars in der Nähe zeigen",
                    "en": "Find Lounge Bars",
                    "es": "Buscar bares cerca",
                    "fr": "Trouver des lounges",
                    "it": "Trova lounge bar"
                },
                "actionUrl": "https://www.google.com/maps/search/Lounge+Bar"
            }
        ]
    },
    "movie": {
        "id": "movie",
        "category": "entertainment",
        "mode": "match",
        "icon": "🎬",
        "gradient": "from-indigo-500 to-purple-600",
        "title": {
            "de": "Streaming-Abend",
            "en": "Movie Night Vibe",
            "es": "Noche de Película",
            "fr": "Soirée Film & Popcorn",
            "it": "Serata Film & Divano"
        },
        "sub": {
            "de": "Welches Genre gewinnt heute auf der Couch?",
            "en": "Stop scrolling Netflix for 40 minutes",
            "es": "Decidid qué ver en 30 segundos",
            "fr": "Fini de scroller Netflix pendant 40 minutes",
            "it": "Basta scorrere Netflix per 40 minuti senza scegliere"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "🕵️‍♂️",
                "bg": "from-slate-700 to-slate-900",
                "tag": {
                    "de": "Spannung pur",
                    "en": "Edge of your seat",
                    "es": "Suspense puro",
                    "fr": "En Haleine",
                    "it": "Col Fiato Sospeso"
                },
                "title": {
                    "de": "Mindfuck-Thriller mit Plot-Twist",
                    "en": "Plot-Twist Psychological Thriller",
                    "es": "Thriller con giro inesperado",
                    "fr": "Thriller Psychologique à Rebondissements",
                    "it": "Thriller Psicologico con Colpo di Scena"
                },
                "desc": {
                    "de": "Mitraten bis zur letzten Minute.",
                    "en": "Guessing who did it until the final scene.",
                    "es": "Adivinar el final hasta el último minuto.",
                    "fr": "Deviner qui est le coupable jusqu'à la dernière scène.",
                    "it": "Cercare di capire il colpevole fino all'ultima inquadratura."
                },
                "actionLabel": {
                    "de": "Top Thriller-Empfehlungen öffnen",
                    "en": "See Top Thrillers",
                    "es": "Ver mejores thrillers",
                    "fr": "Voir les meilleurs thrillers",
                    "it": "Migliori thriller da vedere"
                },
                "actionUrl": "https://www.google.com/search?q=beste+thriller+filme+mit+plot+twist+streaming"
            },
            {
                "id": 1,
                "emoji": "😂",
                "bg": "from-amber-500 to-orange-600",
                "tag": {
                    "de": "Kopf ausschalten",
                    "en": "Brain Off",
                    "es": "Cero estrés",
                    "fr": "Détente Totale",
                    "it": "Risate & Relax"
                },
                "title": {
                    "de": "Gute-Laune-Komödie",
                    "en": "Feel-Good Comedy",
                    "es": "Comedia para reírse",
                    "fr": "Comédie Feel-Good Légère",
                    "it": "Commedia Spensierata & Buonumore"
                },
                "desc": {
                    "de": "Einfach lachen, abschalten und Snacks vernichten.",
                    "en": "Zero heavy drama, just laughs.",
                    "es": "Nada de dramas, solo risas.",
                    "fr": "Zéro prise de tête, juste des rires complices.",
                    "it": "Zero drammi pesanti, solo risate sincere."
                },
                "actionLabel": {
                    "de": "Aktuelle Comedy-Hits zeigen",
                    "en": "Top Comedies Streaming",
                    "es": "Ver comedias recomendadas",
                    "fr": "Comédies à voir en streaming",
                    "it": "Commedie in streaming"
                },
                "actionUrl": "https://www.google.com/search?q=beste+komoedien+streaming+aktuell"
            },
            {
                "id": 2,
                "emoji": "🔪",
                "bg": "from-red-800 to-neutral-900",
                "tag": {
                    "de": "Wahre Begebenheit",
                    "en": "Real Cases",
                    "es": "Casos reales",
                    "fr": "Faits Réels",
                    "it": "Casi Reali"
                },
                "title": {
                    "de": "Packende True-Crime-Doku",
                    "en": "True Crime Documentary",
                    "es": "Documental True Crime",
                    "fr": "Documentaire True Crime Captivant",
                    "it": "Documentario True Crime Avvincente"
                },
                "desc": {
                    "de": "Unglaubliche echte Kriminalfälle & Ermittlungen.",
                    "en": "Wild real-life investigations.",
                    "es": "Crímenes reales que parecen ficción.",
                    "fr": "Des enquêtes réelles et des histoires hallucinantes.",
                    "it": "Indagini reali che superano la fantasia."
                },
                "actionLabel": {
                    "de": "Beste True-Crime-Dokus finden",
                    "en": "Best True Crime Docs",
                    "es": "Ver mejores True Crime",
                    "fr": "Meilleurs docs true crime",
                    "it": "Migliori documentari true crime"
                },
                "actionUrl": "https://www.google.com/search?q=beste+true+crime+dokus+netflix+prime"
            },
            {
                "id": 3,
                "emoji": "🚀",
                "bg": "from-violet-700 to-indigo-950",
                "tag": {
                    "de": "Heimkino-Gefühl",
                    "en": "Big Screen Vibe",
                    "es": "Acción Épica",
                    "fr": "Grand Spectacle",
                    "it": "Effetto Cinema"
                },
                "title": {
                    "de": "Sci-Fi oder Action-Blockbuster",
                    "en": "Sci-Fi / Action Blockbuster",
                    "es": "Ciencia Ficción o Acción",
                    "fr": "Blockbuster Sci-Fi ou Action Spectaculaire",
                    "it": "Blockbuster Sci-Fi o Film d'Azione"
                },
                "desc": {
                    "de": "Starke Bilder, fetter Sound, andere Welten.",
                    "en": "Epic visuals, huge sound, pure escapism.",
                    "es": "Efectos brutales y pura adrenalina.",
                    "fr": "Effets visuels épatants, gros son, immersion totale.",
                    "it": "Effetti visivi spettacolari, gran sonoro ed evasione totale."
                },
                "actionLabel": {
                    "de": "Top Sci-Fi & Action-Hits",
                    "en": "Top Sci-Fi Blockbusters",
                    "es": "Ver éxitos de acción",
                    "fr": "Blockbusters recommandés",
                    "it": "Migliori blockbuster sci-fi"
                },
                "actionUrl": "https://www.google.com/search?q=beste+scifi+action+filme+streaming"
            },
            {
                "id": 4,
                "emoji": "🍿",
                "bg": "from-pink-600 to-rose-800",
                "tag": {
                    "de": "Nostalgie",
                    "en": "2000s Throwback",
                    "es": "Nostalgia",
                    "fr": "Nostalgie Années 90/2000",
                    "it": "Nostalgia Anni 90/2000"
                },
                "title": {
                    "de": "Kultfilm aus den 90ern / 2000ern",
                    "en": "90s / 2000s Cult Classic",
                    "es": "Clásico de los 90 / 2000",
                    "fr": "Film Culte des Années 90 ou 2000",
                    "it": "Grande Classico Anni '90 o 2000"
                },
                "desc": {
                    "de": "Ein Film, den man schon kennt und trotzdem liebt.",
                    "en": "A comfort movie we both already love.",
                    "es": "Una película mítica que nunca falla.",
                    "fr": "Un film doudou qu'on connaît déjà par cœur.",
                    "it": "Un film del cuore che entrambi amiamo già."
                },
                "actionLabel": {
                    "de": "🎬 Auf Prime Video leihen/streamen",
                    "en": "Rent/Stream on Prime Video",
                    "es": "Ver en Prime Video",
                    "fr": "Louer / regarder en streaming",
                    "it": "Guarda su Prime Video"
                },
                "actionUrl": "https://www.amazon.de/s?k=kultfilme+90er+2000er&i=instant-video&tag=f05b1-21"
            },
            {
                "id": 5,
                "emoji": "👻",
                "bg": "from-zinc-800 to-red-950",
                "tag": {
                    "de": "Gänsehaut",
                    "en": "Spooky Vibe",
                    "es": "Escalofríos",
                    "fr": "Frissons & Mystère",
                    "it": "Brividi & Mistero"
                },
                "title": {
                    "de": "Grusel-, Mystery- oder Smarter Horrorfilm",
                    "en": "Smart Horror or Supernatural Mystery",
                    "es": "Terror Psicológico o Misterio",
                    "fr": "Film d'Horreur Malin ou Mystère Surnaturel",
                    "it": "Horror Intelligente o Mistero Soprannaturale"
                },
                "desc": {
                    "de": "Licht komplett aus, Decke bis zur Nase ziehen und mitfiebern.",
                    "en": "Lights off, blanket pulled up, spooky atmosphere.",
                    "es": "Luces apagadas y tensión en el sofá.",
                    "fr": "Lumières éteintes, plaid remonté jusqu'au nez.",
                    "it": "Luci spente, coperta fin sopra gli occhi e brividi."
                },
                "actionLabel": {
                    "de": "Beste Mystery- & Horrorfilme",
                    "en": "Top Smart Horror Movies",
                    "es": "Ver películas de misterio/terror",
                    "fr": "Meilleurs films d'angoisse",
                    "it": "Migliori horror d'autore"
                },
                "actionUrl": "https://www.google.com/search?q=beste+smart+horror+mystery+filme+streaming"
            },
            {
                "id": 6,
                "emoji": "🕵️‍♀️",
                "bg": "from-amber-700 to-stone-900",
                "tag": {
                    "de": "Wer war der Täter?",
                    "en": "Whodunit Puzzle",
                    "es": "¿Quién fue?",
                    "fr": "Énigme Policière",
                    "it": "Giallo alla Knives Out"
                },
                "title": {
                    "de": "Krimi-Rätsel à la ‚Knives Out‘ / Agatha Christie",
                    "en": "Whodunit Murder Mystery (Knives Out Style)",
                    "es": "Misterio de Detectives (Estilo Knives Out)",
                    "fr": "Enquête Policière façon 'À Couteaux Tirés'",
                    "it": "Giallo con Delitto stile 'Cena con Delitto'"
                },
                "desc": {
                    "de": "Ein Mord, 8 Verdächtige – wer löst den Fall zuerst von der Couch aus?",
                    "en": "One crime, a room full of suspects – guess the killer!",
                    "es": "Un crimen, muchos sospechosos y a investigar.",
                    "fr": "Un manoir, des suspects suspects – à nous de trouver le coupable !",
                    "it": "Un delitto, una stanza piena di sospettati: indovina l'assassino!"
                },
                "actionLabel": {
                    "de": "Whodunit-Filme finden",
                    "en": "Best Whodunit Movies",
                    "es": "Películas de misterio",
                    "fr": "Meilleurs whodunits",
                    "it": "Migliori film d'indagine"
                },
                "actionUrl": "https://www.google.com/search?q=filme+wie+knives+out+whodunit"
            },
            {
                "id": 7,
                "emoji": "✨",
                "bg": "from-sky-600 to-indigo-900",
                "tag": {
                    "de": "Herz & Humor",
                    "en": " Pixar / Ghibli Vibe",
                    "es": "Animación Top",
                    "fr": "Chef-d'Œuvre Visuel",
                    "it": "Capolavoro d'Animazione"
                },
                "title": {
                    "de": "Meisterwerk-Animation (Pixar, Ghibli, Spider-Verse)",
                    "en": "Animated Masterpiece (Pixar, Ghibli, Spider-Verse)",
                    "es": "Joya de Animación (Pixar, Ghibli, Spider-Verse)",
                    "fr": "Bijou d'Animation (Pixar, Ghibli, Spider-Verse)",
                    "it": "Capolavoro d'Animazione (Pixar, Ghibli, Spider-Verse)"
                },
                "desc": {
                    "de": "Visuell beeindruckend, clever und voller Herz.",
                    "en": "Visually stunning, clever and full of heart.",
                    "es": "Visualmente increíble y con gran historia.",
                    "fr": "Visuellement somptueux, intelligent et émouvant.",
                    "it": "Visivamente magnifico, intelligente e ricco di cuore."
                },
                "actionLabel": {
                    "de": "Beste Animationsfilme prüfen",
                    "en": "Top Animated Movies",
                    "es": "Mejores películas de animación",
                    "fr": "Films d'animation à voir",
                    "it": "Migliori film d'animazione"
                },
                "actionUrl": "https://www.google.com/search?q=beste+animationsfilme+fuer+erwachsene"
            },
            {
                "id": 8,
                "emoji": "💘",
                "bg": "from-rose-500 to-pink-800",
                "tag": {
                    "de": "Herzklopfen & Witz",
                    "en": "Rom-Com Night",
                    "es": "Comedia Romántica",
                    "fr": "Comédie Romantique",
                    "it": "Rom-Com Brillante"
                },
                "title": {
                    "de": "Rom-Com oder Liebesfilm mit gutem Humor",
                    "en": "Sharp & Funny Romantic Comedy",
                    "es": "Comedia Romántica con Buen Humor",
                    "fr": "Comédie Romantique Brillante & Drôle",
                    "it": "Commedia Romantica Spassosa & Intelligente"
                },
                "desc": {
                    "de": "Charmant, witzig und null Kitsch-Überdosis.",
                    "en": "Charming, witty and guaranteed good vibes.",
                    "es": "Divertida, con química y buen rollo.",
                    "fr": "Charme, répliques bien senties et bonne humeur garantie.",
                    "it": "Dialoghi brillanti, risate e romanticismo garantito."
                },
                "actionLabel": {
                    "de": "Beste Rom-Coms auf Streaming",
                    "en": "Best Modern Rom-Coms",
                    "es": "Mejores comedias románticas",
                    "fr": "Meilleures comédies romantiques",
                    "it": "Migliori commedie romantiche"
                },
                "actionUrl": "https://www.google.com/search?q=beste+romcoms+streaming"
            },
            {
                "id": 9,
                "emoji": "🌍",
                "bg": "from-emerald-700 to-cyan-950",
                "tag": {
                    "de": "Staunen & Abschalten",
                    "en": " Jaw-Dropping Nature",
                    "es": "Naturaleza y Mundo",
                    "fr": "Nature Époustouflante",
                    "it": "Natura in 4K"
                },
                "title": {
                    "de": "Atemberaubende Natur-, Weltraum- oder Reisereportage",
                    "en": "4K Nature, Ocean or Space Documentary",
                    "es": "Documental de Naturaleza, Viajes o Universo",
                    "fr": "Documentaire Nature 4K, Océans ou Espace",
                    "it": "Documentario Natura in 4K, Oceani o Spazio"
                },
                "desc": {
                    "de": "Gigantische 4K-Aufnahmen zum Runterkommen und Staunen.",
                    "en": "Incredible 4K footage to unwind and marvel at.",
                    "es": "Imágenes espectaculares en 4K para desconectar.",
                    "fr": "Images magnifiques pour s'évader et s'émerveiller.",
                    "it": "Immagini spettacolari per rilassarsi e restare a bocca aperta."
                },
                "actionLabel": {
                    "de": "Beste Natur- & Weltraum-Dokus",
                    "en": "Top Nature Docs",
                    "es": "Mejores documentales",
                    "fr": "Top documentaires nature",
                    "it": "Migliori documentari natura"
                },
                "actionUrl": "https://www.google.com/search?q=beste+natur+und+weltraum+dokus+streaming"
            },
            {
                "id": 10,
                "emoji": "🏦",
                "bg": "from-yellow-600 to-zinc-900",
                "tag": {
                    "de": "Smarter Plan",
                    "en": "Heist & Con-Artists",
                    "es": "Robos y Estafas",
                    "fr": "Braquage Malin",
                    "it": "Colpo Perfetto"
                },
                "title": {
                    "de": "Heist-Movie (Bankraub, Casino-Trick & coole Gangster)",
                    "en": "Slick Heist Movie (Ocean's Eleven Style)",
                    "es": "Película de Atracos Perfectos y Estafas",
                    "fr": "Film de Braquage Stylé (Façon Ocean's Eleven)",
                    "it": "Film di Rapina & Truffe stile Ocean's Eleven"
                },
                "desc": {
                    "de": "Coole Musik, ein unmöglicher Tresor und ein genialer Trick.",
                    "en": "Cool soundtrack, impossible vault and a clever twist.",
                    "es": "Un plan maestro, ritmo rápido y giros.",
                    "fr": "Bande-son cool, coffre-fort inviolable et coup monté génial.",
                    "it": "Colonna sonora impeccabile, piano geniale e finale a sorpresa."
                },
                "actionLabel": {
                    "de": "Beste Heist-Movies zeigen",
                    "en": "Top Heist Movies",
                    "es": "Mejores películas de atracos",
                    "fr": "Top films de braquage",
                    "it": "Migliori film di rapina"
                },
                "actionUrl": "https://www.google.com/search?q=beste+heist+movies+bankraub+filme"
            },
            {
                "id": 11,
                "emoji": "🏆",
                "bg": "from-purple-700 to-slate-900",
                "tag": {
                    "de": "Kritiker-Liebling",
                    "en": "Oscar / A24 Vibe",
                    "es": "Cine Premiado",
                    "fr": "Pépite Indé / Oscar",
                    "it": "Cinema d'Autore / Oscar"
                },
                "title": {
                    "de": "Preisgekröntes Highlight (Oscar-Gewinner / A24-Film)",
                    "en": "Award-Winning Indie / Oscar Highlight",
                    "es": "Película Premiada (Óscar / Cine Indie)",
                    "fr": "Film Récompensé aux Oscars ou Pépite A24",
                    "it": "Film da Oscar o Gioiello Indipendente A24"
                },
                "desc": {
                    "de": "Ein außergewöhnlicher Film, über den man noch tagelang redet.",
                    "en": "A standout movie you'll talk about for days.",
                    "es": "Un peliculón del que hablaréis durante días.",
                    "fr": "Une œuvre marquante dont on reparle encore des jours après.",
                    "it": "Un film indimenticabile di cui continuerete a parlare per giorni."
                },
                "actionLabel": {
                    "de": "Aktuelle Kritiker-Highlights",
                    "en": "Top A24 & Oscar Movies",
                    "es": "Ver películas premiadas",
                    "fr": "Films primés à voir",
                    "it": "Migliori film premiati"
                },
                "actionUrl": "https://www.google.com/search?q=beste+oscar+a24+filme+streaming"
            },
            {
                "id": 12,
                "emoji": "🏔️",
                "bg": "from-teal-700 to-stone-900",
                "tag": {
                    "de": "Puls auf 180",
                    "en": "Survival & Adventure",
                    "es": "Supervivencia",
                    "fr": "Survie & Aventure",
                    "it": "Sopravvivenza & Avventura"
                },
                "title": {
                    "de": "Survival-, Abenteuer- oder Katastrophen-Thriller",
                    "en": "High-Stakes Survival & Adventure Movie",
                    "es": "Aventura Extrema o Supervivencia",
                    "fr": "Thriller d'Aventure et Survie Extrême",
                    "it": "Thriller di Sopravvivenza & Grande Avventura"
                },
                "desc": {
                    "de": "Mensch gegen Natur, Bergsteigen, Dschungel oder offenes Meer.",
                    "en": "Against all odds in the wild, mountains or ocean.",
                    "es": "Adrenalina pura en la naturaleza o el mar.",
                    "fr": "Seuls face aux éléments dans la nature sauvage ou en mer.",
                    "it": "Lotta contro gli elementi nella natura selvaggia o in mare aperto."
                },
                "actionLabel": {
                    "de": "Beste Survival-Filme",
                    "en": "Best Survival Movies",
                    "es": "Mejores películas de supervivencia",
                    "fr": "Films de survie captivants",
                    "it": "Migliori film di avventura"
                },
                "actionUrl": "https://www.google.com/search?q=beste+survival+abenteuer+filme"
            },
            {
                "id": 13,
                "emoji": "🎬",
                "bg": "from-rose-700 to-amber-900",
                "tag": {
                    "de": "Unglaubliche Biografie",
                    "en": "Based on True Events",
                    "es": "Historia Real",
                    "fr": "Histoire Vraie",
                    "it": "Ispirato a Fatti Reali"
                },
                "title": {
                    "de": "Biopic / Wahre Geschichte (Musik, Sport oder Genie)",
                    "en": "Inspiring True Story / Biopic",
                    "es": "Basada en Hechos Reales / Biopic",
                    "fr": "Biopic Inspirant / Basé sur une Histoire Vraie",
                    "it": "Biopic Ispirante o Storia Vera Incredibile"
                },
                "desc": {
                    "de": "Mitreißende Filme über echte Legenden, Skandale oder Rekorde.",
                    "en": "Incredible real-life legends, scandals or triumphs.",
                    "es": "Historias reales increíbles que inspiran.",
                    "fr": "Des légendes réelles du sport, de la musique ou de la science.",
                    "it": "Storie vere di campioni, geni o scandali che lasciano il segno."
                },
                "actionLabel": {
                    "de": "Top Filme nach wahrer Geschichte",
                    "en": "Best True Story Movies",
                    "es": "Películas basadas en hechos reales",
                    "fr": "Meilleurs biopics",
                    "it": "Migliori film biografici"
                },
                "actionUrl": "https://www.google.com/search?q=beste+filme+nach+wahrer+begebenheit"
            }
        ]
    },
    "series": {
        "id": "series",
        "category": "entertainment",
        "mode": "match",
        "icon": "📺",
        "gradient": "from-purple-600 to-pink-600",
        "title": {
            "de": "Serien-Binge Finder",
            "en": "Series Binge Finder",
            "es": "Maratón de Series",
            "fr": "Trouveur de Série à Binger",
            "it": "La Prossima Serie da Binge-Watching"
        },
        "sub": {
            "de": "Welche Serie schauen wir als Nächstes?",
            "en": "What show are we binge-watching next?",
            "es": "¿Qué serie empezamos hoy?",
            "fr": "Quelle série commence-t-on ensemble ce soir ?",
            "it": "Quale serie iniziamo a guardare insieme?"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "⏳",
                "bg": "from-indigo-700 to-slate-900",
                "tag": {
                    "de": "Abgeschlossen in 6 Folgen",
                    "en": "1-Weekend Miniseries",
                    "es": "Miniserie corta",
                    "fr": "Mini-série d'un Week-end",
                    "it": "Miniserie da un Weekend"
                },
                "title": {
                    "de": "Spannende Miniserie (1 Staffel)",
                    "en": "Gripping Limited Miniseries",
                    "es": "Miniserie de una sola temporada",
                    "fr": "Mini-série Haletante en 1 Saison",
                    "it": "Miniserie Avvincente (1 Sola Stagione)"
                },
                "desc": {
                    "de": "Kein 5-Staffeln-Commitment – straffe Story mit echtem Finale.",
                    "en": "Full story in 6-8 episodes, zero filler.",
                    "es": "Historia cerrada en pocos capítulos.",
                    "fr": "Toute l'histoire bouclée en 6 à 8 épisodes intenses.",
                    "it": "Storia completa in 6-8 episodi, zero riempitivi."
                },
                "actionLabel": {
                    "de": "Beste Miniserien ansehen",
                    "en": "Best Miniseries Now",
                    "es": "Ver mejores miniseries",
                    "fr": "Meilleures mini-séries du moment",
                    "it": "Migliori miniserie adesso"
                },
                "actionUrl": "https://www.google.com/search?q=beste+miniserien+netflix+aktuell"
            },
            {
                "id": 1,
                "emoji": "🛋️",
                "bg": "from-amber-600 to-orange-700",
                "tag": {
                    "de": "20-Minuten-Folgen",
                    "en": "20-Min Episodes",
                    "es": "Capítulos de 20 min",
                    "fr": "Épisodes de 20 min",
                    "it": "Episodi da 20 min"
                },
                "title": {
                    "de": "Witzige Comfort-Sitcom",
                    "en": "Feel-Good Sitcom",
                    "es": "Sitcom ligera para reír",
                    "fr": "Sitcom Doudou & Réconfortante",
                    "it": "Sitcom Confortevole & Divertente"
                },
                "desc": {
                    "de": "Perfekt beim Essen oder zum Einschlafen ohne Stress.",
                    "en": "Easy watching while eating dinner.",
                    "es": "Ideal mientras cenamos sin pensar mucho.",
                    "fr": "Facile à regarder en dînant sur le canapé.",
                    "it": "Perfetta da guardare mentre si cena sul divano."
                },
                "actionLabel": {
                    "de": "Beliebteste Sitcoms zeigen",
                    "en": "Top Sitcoms List",
                    "es": "Ver mejores sitcoms",
                    "fr": "Top sitcoms populaires",
                    "it": "Migliori sitcom leggere"
                },
                "actionUrl": "https://www.google.com/search?q=beste+comedy+serien+sitcoms+streaming"
            },
            {
                "id": 2,
                "emoji": "🌀",
                "bg": "from-cyan-800 to-slate-950",
                "tag": {
                    "de": "Cliffhanger-Garantie",
                    "en": "Cliffhanger Alert",
                    "es": "Puro Misterio",
                    "fr": "Gros Cliffhangers",
                    "it": "Rischio Notte in Bianco"
                },
                "title": {
                    "de": "Dark Mystery oder Sci-Fi-Rätsel",
                    "en": "Dark Mystery / Sci-Fi Puzzle",
                    "es": "Misterio Oscuro o Sci-Fi",
                    "fr": "Casse-tête Mystère Sombre ou Sci-Fi",
                    "it": "Mistero Dark o Enigma Sci-Fi"
                },
                "desc": {
                    "de": "Nach jeder Folge sagen: ‚Okay, EINE schauen wir noch!‘",
                    "en": "Makes you say 'just one more episode' at 1 AM.",
                    "es": "De las que dices 'venga, un capítulo más'.",
                    "fr": "Celui qui fait dire 'allez, juste un dernier épisode' à 1h du matin.",
                    "it": "Quello che a mezzanotte vi fa dire 'dai, solo un'altra puntata'."
                },
                "actionLabel": {
                    "de": "Top Mystery-Serien finden",
                    "en": "Top Mystery Shows",
                    "es": "Series de misterio top",
                    "fr": "Séries à énigme recommandées",
                    "it": "Migliori serie mistery"
                },
                "actionUrl": "https://www.google.com/search?q=beste+mystery+serien+streaming"
            },
            {
                "id": 3,
                "emoji": "🏝️",
                "bg": "from-pink-600 to-rose-700",
                "tag": {
                    "de": "Guilty Pleasure",
                    "en": "Guilty Pleasure",
                    "es": "Placer culpable",
                    "fr": "Plaisir Coupable",
                    "it": "Piacere Colpevole"
                },
                "title": {
                    "de": "Reality-TV, Dating-Show oder Survival",
                    "en": "Trash TV, Reality or Survival Show",
                    "es": "Reality Show o Supervivencia",
                    "fr": "Télé-Réalité, Dating Show ou Survie",
                    "it": "Reality TV, Dating Show o Reality di Sopravvivenza"
                },
                "desc": {
                    "de": "Mitlästern, fremdschämen oder mitfiebern auf der Couch.",
                    "en": "Zero brain cells required, maximum entertainment.",
                    "es": "Cero esfuerzo mental, puro salseo o aventura.",
                    "fr": "Zéro neurone requis, divertissement garanti à 100%.",
                    "it": "Zero pensieri, massimo divertimento e commenti sarcastici."
                },
                "actionLabel": {
                    "de": "Aktuelle Reality- & Survival-Hits",
                    "en": "Trending Reality Shows",
                    "es": "Ver realities del momento",
                    "fr": "Séries de télé-réalité tendances",
                    "it": "Reality show del momento"
                },
                "actionUrl": "https://www.google.com/search?q=beste+survival+reality+shows+streaming"
            },
            {
                "id": 4,
                "emoji": "👑",
                "bg": "from-emerald-800 to-stone-900",
                "tag": {
                    "de": "Großes Kino",
                    "en": "Prestige Drama",
                    "es": "Drama Épico",
                    "fr": "Drame Prestigieux",
                    "it": "Serie Capolavoro"
                },
                "title": {
                    "de": "Hochbewertetes Prestige-Drama / Mafia",
                    "en": "High-Rated Crime / Prestige Drama",
                    "es": "Gran Drama Criminal o Histórico",
                    "fr": "Drame Policier Prestigieux Noté 8.5+",
                    "it": "Dramma Prestigioso / Serie Mafia Pluripremiata"
                },
                "desc": {
                    "de": "IMDb 8.5+, geniale Schauspieler und packende Intrigen.",
                    "en": "IMDb 8.5+ masterpieces everybody talks about.",
                    "es": "Obras maestras con nota alta en IMDb.",
                    "fr": "Des chefs-d'œuvre télévisuels dont tout le monde parle.",
                    "it": "I capolavori con voto 8.5+ su IMDb di cui tutti parlano."
                },
                "actionLabel": {
                    "de": "Bestbewertete Serien prüfen",
                    "en": "Top Rated Series",
                    "es": "Series mejor valoradas",
                    "fr": "Séries les mieux notées",
                    "it": "Serie TV con voti più alti"
                },
                "actionUrl": "https://www.google.com/search?q=beste+serien+aller+zeiten+imdb"
            },
            {
                "id": 5,
                "emoji": "🚓",
                "bg": "from-slate-700 to-blue-950",
                "tag": {
                    "de": "Spurensuche",
                    "en": "Nordic Noir / Detective",
                    "es": "Investigación",
                    "fr": "Polar Nordique / Enquête",
                    "it": "Giallo Nordico / Detective"
                },
                "title": {
                    "de": "Düsterer Skandi-Krimi oder Detektiv-Serie",
                    "en": "Gripping Detective / Nordic Noir Series",
                    "es": "Serie Policiaca o Thriller Nórdico",
                    "fr": "Polar Nordique Sombre ou Série d'Enquête",
                    "it": "Poliziesco Nordico o Serie Investigativa"
                },
                "desc": {
                    "de": "Atmosphärisch, rätselhaft und voller falscher Fährten.",
                    "en": "Moody atmosphere, smart detectives and plot twists.",
                    "es": "Atmósfera intensa y giros en cada episodio.",
                    "fr": "Ambiance brumeuse, détectives brillants et faux-semblants.",
                    "it": "Atmosfere cupe, detective brillanti e indagini senza sosta."
                },
                "actionLabel": {
                    "de": "Beste Krimi-Serien zeigen",
                    "en": "Best Detective Shows",
                    "es": "Mejores series policiacas",
                    "fr": "Meilleures séries policières",
                    "it": "Migliori serie poliziesche"
                },
                "actionUrl": "https://www.google.com/search?q=beste+krimi+detektiv+serien+streaming"
            },
            {
                "id": 6,
                "emoji": "🐉",
                "bg": "from-amber-700 to-red-950",
                "tag": {
                    "de": "Epische Welten",
                    "en": "Fantasy / History",
                    "es": "Épica y Fantasía",
                    "fr": "Fantasy / Histoire",
                    "it": "Fantasy / Storico"
                },
                "title": {
                    "de": "Fantasy-, Mittelalter- oder Historien-Epos",
                    "en": "Epic Fantasy or Historical Series",
                    "es": "Serie Épica de Fantasía o Historia",
                    "fr": "Fresque Fantasy Épique ou Drame Historique",
                    "it": "Grande Saga Fantasy o Storica"
                },
                "desc": {
                    "de": "Königreiche, Schlachten, Intrigen und große Abenteuer.",
                    "en": "Kingdoms, battles, intrigue and massive world-building.",
                    "es": "Reinos, batallas, intrigas y grandes mundos.",
                    "fr": "Royaumes, batailles, intrigues politiques et mondes grandioses.",
                    "it": "Regni, battaglie, intrighi e ambientazioni mozzafiato."
                },
                "actionLabel": {
                    "de": "Top Fantasy & Historien-Serien",
                    "en": "Top Fantasy / History",
                    "es": "Ver series épicas",
                    "fr": "Séries d'époque et fantasy",
                    "it": "Migliori serie fantasy / storiche"
                },
                "actionUrl": "https://www.google.com/search?q=beste+fantasy+historien+serien"
            },
            {
                "id": 7,
                "emoji": "👨‍🍳",
                "bg": "from-orange-600 to-stone-900",
                "tag": {
                    "de": "Wettkampf & Appetit",
                    "en": "Cooking / Bake Show",
                    "es": "Competición",
                    "fr": "Cuisine & Compétition",
                    "it": "Cucina & Sfide"
                },
                "title": {
                    "de": "Koch-Show, Back-Wettbewerb oder Food-Reise",
                    "en": "Culinary Competition or Streetfood Doc",
                    "es": "Programa de Cocina o Viajes Gastronómicos",
                    "fr": "Compétition Culinaire ou Docu Streetfood",
                    "it": "Gara di Cucina o Docu Street Food nel Mondo"
                },
                "desc": {
                    "de": "Entspannt zuschauen, wie Profis kochen oder um die Welt reisen.",
                    "en": "Watch chefs battle it out or explore world street food.",
                    "es": "Disfrutar viendo retos de cocina o street food.",
                    "fr": "Des chefs qui s'affrontent ou des voyages culinaires gourmands.",
                    "it": "Chef stellati sotto pressione o viaggi gastronomici irresistibili."
                },
                "actionLabel": {
                    "de": "Beste Food-Shows finden",
                    "en": "Top Food & Cooking Shows",
                    "es": "Mejores programas de cocina",
                    "fr": "Top émissions culinaires",
                    "it": "Migliori serie sulla cucina"
                },
                "actionUrl": "https://www.google.com/search?q=beste+kochshows+food+serien+netflix"
            },
            {
                "id": 8,
                "emoji": "🛸",
                "bg": "from-violet-700 to-slate-950",
                "tag": {
                    "de": "Jede Folge neu",
                    "en": "Anthology Series",
                    "es": "Capítulos independientes",
                    "fr": "Série Anthologique",
                    "it": "Serie Antologica"
                },
                "title": {
                    "de": "Anthologie-Serie (wie Black Mirror / Love, Death & Robots)",
                    "en": "Mind-Bending Anthology (Black Mirror Style)",
                    "es": "Serie Antológica (Estilo Black Mirror)",
                    "fr": "Anthologie Vertigineuse (Style Black Mirror)",
                    "it": "Serie Antologica Sorprendente (Stile Black Mirror)"
                },
                "desc": {
                    "de": "Jede Folge hat eine komplett eigene, krasse Geschichte!",
                    "en": "Every episode is a brand-new standalone story.",
                    "es": "Cada episodio es una historia totalmente nueva.",
                    "fr": "Chaque épisode raconte une histoire totalement autonome.",
                    "it": "Ogni puntata è una storia a sé stante con un cast diverso."
                },
                "actionLabel": {
                    "de": "Anthologie-Serien entdecken",
                    "en": "Best Anthology Shows",
                    "es": "Ver series antológicas",
                    "fr": "Meilleures anthologies",
                    "it": "Migliori serie antologiche"
                },
                "actionUrl": "https://www.google.com/search?q=serien+wie+black+mirror+anthologie"
            },
            {
                "id": 9,
                "emoji": "🏎️",
                "bg": "from-red-600 to-zinc-900",
                "tag": {
                    "de": "Echte Emotionen",
                    "en": "Sports & Adrenaline",
                    "es": "Adrenalina real",
                    "fr": "Sport & Adrénaline",
                    "it": "Sport & Adrenalina"
                },
                "title": {
                    "de": "Mitreißende Sport- oder Backstage-Dokuserie",
                    "en": "Behind-the-Scenes Sports Docuseries",
                    "es": "Docuserie Deportiva (Estilo Drive to Survive)",
                    "fr": "Série Documentaire Sportive dans les Coulisses",
                    "it": "Docuserie Sportiva Dietro le Quinte"
                },
                "desc": {
                    "de": "Selbst wenn man den Sport nicht schaut – das Drama hinter den Kulissen packt jeden.",
                    "en": "High stakes, rivalries and behind-the-scenes drama.",
                    "es": "Drama real, rivalidades y emoción detrás de las cámaras.",
                    "fr": "Enjeux monumentaux, rivalités intenses et émotions brutes.",
                    "it": "Rivalità accese, tensione alle stelle e retroscena emozionanti."
                },
                "actionLabel": {
                    "de": "Beste Sport-Dokuserien",
                    "en": "Top Sports Docuseries",
                    "es": "Mejores docuseries deportivas",
                    "fr": "Top docu-séries sportives",
                    "it": "Migliori serie sullo sport"
                },
                "actionUrl": "https://www.google.com/search?q=beste+sport+dokuserien+netflix+prime"
            },
            {
                "id": 10,
                "emoji": "🎌",
                "bg": "from-rose-600 to-indigo-950",
                "tag": {
                    "de": "Kult & Action",
                    "en": "Anime / Adult Animation",
                    "es": "Anime / Animación",
                    "fr": "Animation Adulte / Anime",
                    "it": "Anime / Animazione Adulta"
                },
                "title": {
                    "de": "Starke Anime- oder Adult-Animation-Serie (Arcane, Cyberpunk)",
                    "en": "Hit Anime or Adult Animation (Arcane / Invincible)",
                    "es": "Anime Top o Animación para Adultos (Arcane)",
                    "fr": "Anime Culte ou Animation Adulte (Arcane)",
                    "it": "Anime Fenomenale o Animazione per Adulti (Arcane)"
                },
                "desc": {
                    "de": "Packende Storys, krasse Action und extrem hoher Suchtfaktor.",
                    "en": "Incredible visuals, fast pacing and addictive stories.",
                    "es": "Acción brutal, ritmo rápido e historias adictivas.",
                    "fr": "Graphismes éblouissants, rythme effréné et intrigue mature.",
                    "it": "Grafica pazzesca, ritmo travolgente e storie indimenticabili."
                },
                "actionLabel": {
                    "de": "Top Anime & Animations-Serien",
                    "en": "Top Animated Series",
                    "es": "Ver mejores series de animación",
                    "fr": "Meilleures séries animées",
                    "it": "Migliori serie animate"
                },
                "actionUrl": "https://www.google.com/search?q=beste+anime+und+animationsserien+netflix"
            },
            {
                "id": 11,
                "emoji": "🏖️",
                "bg": "from-teal-600 to-amber-900",
                "tag": {
                    "de": "Luxus & Abgründe",
                    "en": "Satire & Mystery",
                    "es": "Sátira y Misterio",
                    "fr": "Satire & Mystère",
                    "it": "Satira & Intrigo"
                },
                "title": {
                    "de": "Urlaubs-Intrigen & Gesellschafts-Satire (White Lotus Vibe)",
                    "en": "Dark Comedy & Resort Mystery (White Lotus Vibe)",
                    "es": "Comedia Negra e Intrigas (Estilo White Lotus)",
                    "fr": "Comédie Noire & Mystère Balnéaire (Style White Lotus)",
                    "it": "Satira Sociale & Mistero in Vacanza (Stile White Lotus)"
                },
                "desc": {
                    "de": "Schöne Kulisse, schräge Charaktere und bissiger Humor.",
                    "en": "Gorgeous locations, eccentric characters & dark humor.",
                    "es": "Sitios de lujo, personajes locos y humor ácido.",
                    "fr": "Hôtels de luxe somptueux, personnages excentriques et humour piquant.",
                    "it": "Resort da sogno, personaggi eccentrici e humor nerissimo."
                },
                "actionLabel": {
                    "de": "Ähnliche Serien finden",
                    "en": "Shows Like White Lotus",
                    "es": "Series estilo White Lotus",
                    "fr": "Séries style White Lotus",
                    "it": "Serie simili a White Lotus"
                },
                "actionUrl": "https://www.google.com/search?q=serien+wie+the+white+lotus"
            }
        ]
    },
    "gaming": {
        "id": "gaming",
        "category": "entertainment",
        "mode": "match",
        "icon": "🎮",
        "gradient": "from-violet-600 to-indigo-600",
        "title": {
            "de": "Zocken & Spieleabend",
            "en": "Game Night Picker",
            "es": "Noche de Juegos",
            "fr": "Jeux & Soirée Manette",
            "it": "Serata Giochi & Console"
        },
        "sub": {
            "de": "Konsole, Karten oder Duell am Tisch?",
            "en": "Console, board games or trivia duel?",
            "es": "¿Consola, cartas o juego de mesa?",
            "fr": "Console, cartes ou duel sur la table ?",
            "it": "Console, carte o sfida sul tavolo?"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "🏎️",
                "bg": "from-red-600 to-orange-600",
                "tag": {
                    "de": "Gnadenloses Duell",
                    "en": "Pure Rivalry",
                    "es": "Pique total",
                    "fr": "Rivalité Pure",
                    "it": "Pura Sfida"
                },
                "title": {
                    "de": "Fun-Racer oder Sport-Duell (Mario Kart / FIFA)",
                    "en": "Mario Kart / Arcade Vs. Duel",
                    "es": "Mario Kart o Duelo Arcade",
                    "fr": "Mario Kart ou Duel Sportif d'Arcade",
                    "it": "Mario Kart o Sfida Sportiva (FIFA / Smash)"
                },
                "desc": {
                    "de": "Freundschaft auf Probe stellen – Verlierer holt die Getränke!",
                    "en": "Loser fetches the next round of snacks!",
                    "es": "¡El que pierde trae las bebidas!",
                    "fr": "Le perdant va chercher la prochaine tournée de snacks !",
                    "it": "Chi perde va a preparare i prossimi snack!"
                },
                "actionLabel": {
                    "de": "Beste Couch-Vs-Games",
                    "en": "Best Local Vs Games",
                    "es": "Mejores juegos versus",
                    "fr": "Meilleurs jeux versus à deux",
                    "it": "Migliori giochi vs per due"
                },
                "actionUrl": "https://www.google.com/search?q=beste+lokale+multiplayer+spiele+zu+zweit"
            },
            {
                "id": 1,
                "emoji": "🤝",
                "bg": "from-emerald-600 to-teal-800",
                "tag": {
                    "de": "Teamwork-Test",
                    "en": "Co-Op Chaos",
                    "es": "Cooperativo",
                    "fr": "Co-op sur Canapé",
                    "it": "Cooperazione sul Divano"
                },
                "title": {
                    "de": "Couch-Koop zusammen meistern",
                    "en": "Couch Co-Op Adventure",
                    "es": "Aventura Cooperativa en Sofá",
                    "fr": "Aventure Complice en Co-op Locale",
                    "it": "Avventura Cooperativa sul Divano"
                },
                "desc": {
                    "de": "Zusammen rätseln oder kochen (It Takes Two, Overcooked, Split Fiction).",
                    "en": "Solve puzzles or survive kitchen chaos together.",
                    "es": "Superar retos en equipo sin gritarse.",
                    "fr": "Résoudre des énigmes ou survivre au chaos en cuisine ensemble.",
                    "it": "Risolvere enigmi o sopravvivere al caos in cucina insieme."
                },
                "actionLabel": {
                    "de": "Top Koop-Spiele für 2+",
                    "en": "Best Couch Co-Op Games",
                    "es": "Mejores juegos cooperativos",
                    "fr": "Top jeux en coopération",
                    "it": "Migliori giochi coop"
                },
                "actionUrl": "https://www.google.com/search?q=best+couch+coop+games"
            },
            {
                "id": 2,
                "emoji": "🃏",
                "bg": "from-amber-600 to-stone-800",
                "tag": {
                    "de": "Analog & Schnell",
                    "en": "Cards & Dice",
                    "es": "Sin pantallas",
                    "fr": "Cartes & Dés",
                    "it": "Carte & Dadi"
                },
                "title": {
                    "de": "Schnelles Karten- oder Würfelspiel",
                    "en": "Fast Card or Dice Game",
                    "es": "Juego Rápido de Cartas o Dados",
                    "fr": "Jeu de Cartes ou Dés Rapide & Fun",
                    "it": "Gioco di Carte o Dadi Veloce"
                },
                "desc": {
                    "de": "Uno, Skyjo, Kniffel, Exploding Kittens oder Cabo am Tisch.",
                    "en": "Uno, Yahtzee, Exploding Kittens & good music.",
                    "es": "Uno, dados, cartas y música de fondo.",
                    "fr": "Uno, Yahtzee, Exploding Kittens avec bonne musique en fond.",
                    "it": "Uno, Yahtzee, Exploding Kittens e buona musica."
                },
                "actionLabel": {
                    "de": "🃏 Kartenspiele auf Amazon",
                    "en": "Card Games on Amazon",
                    "es": "Juegos de cartas en Amazon",
                    "fr": "Jeux de cartes sur Amazon",
                    "it": "Giochi di carte su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=kartenspiele+fuer+zwei&tag=f05b1-21"
            },
            {
                "id": 3,
                "emoji": "🧠",
                "bg": "from-blue-600 to-indigo-900",
                "tag": {
                    "de": "Wer weiß mehr?",
                    "en": "Brain Battle",
                    "es": "Batalla mental",
                    "fr": "Bataille de Méninges",
                    "it": "Sfida di Cervelli"
                },
                "title": {
                    "de": "Quiz-, Schätz- oder Musik-Raten (Hitster)",
                    "en": "Music Guess / Trivia Quiz",
                    "es": "Quiz de Música o Preguntas",
                    "fr": "Blind Test Musical ou Quiz de Culture G",
                    "it": "Quiz Musicale o Sfida di Curiosità"
                },
                "desc": {
                    "de": "Songs erraten, Quiz-Duell oder GeoGuessr am Bildschirm.",
                    "en": "Guess the song year, GeoGuessr or pub quiz.",
                    "es": "Adivinar canciones, años o GeoGuessr.",
                    "fr": "Deviner l'année d'une chanson, GeoGuessr ou ambiance pub quiz.",
                    "it": "Indovinare l'anno di una canzone, GeoGuessr o quiz da pub."
                },
                "actionLabel": {
                    "de": "Online-Quiz / GeoGuessr starten",
                    "en": "Play Quiz / Music Game",
                    "es": "Abrir quiz online",
                    "fr": "Lancer un quiz ou blind test",
                    "it": "Gioca a quiz o gioco musicale"
                },
                "actionUrl": "https://www.google.com/search?q=online+quiz+zu+zweit+spielen"
            },
            {
                "id": 4,
                "emoji": "♟️",
                "bg": "from-stone-700 to-amber-950",
                "tag": {
                    "de": "Taktik & Aufbau",
                    "en": "Strategy Board Game",
                    "es": "Estrategia",
                    "fr": "Jeu de Plateau Stratégique",
                    "it": "Gioco da Tavolo Strategico"
                },
                "title": {
                    "de": "Strategie-Brettspiel (Catan, Carcassonne, Zug um Zug)",
                    "en": "Strategy Board Game Night",
                    "es": "Juego de Mesa de Estrategia (Catán, Carcassonne)",
                    "fr": "Soirée Grand Jeu de Société (Catan, Aventuriers)",
                    "it": "Serata Gioco da Tavolo (Catan, Ticket to Ride)"
                },
                "desc": {
                    "de": "Spielbrett aufbauen, Snacks bereitstellen und taktisch gewinnen.",
                    "en": "Set up the board, grab snacks and outsmart each other.",
                    "es": "Desplegar el tablero, picoteo y estrategia.",
                    "fr": "Déballer le plateau, ouvrir un paquet de gâteaux et réfléchir.",
                    "it": "Apri la plancia, prepara gli stuzzichini e studia la mossa."
                },
                "actionLabel": {
                    "de": "♟️ Brettspiele auf Amazon",
                    "en": "Board Games on Amazon",
                    "es": "Juegos de mesa en Amazon",
                    "fr": "Jeux de société sur Amazon",
                    "it": "Giochi da tavolo su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=Catan+Brettspiel&tag=f05b1-21"
            },
            {
                "id": 5,
                "emoji": "🕵️",
                "bg": "from-zinc-800 to-red-950",
                "tag": {
                    "de": "Rätsel lösen",
                    "en": "Escape & Crime",
                    "es": "Escape en casa",
                    "fr": "Escape Game & Enquête",
                    "it": "Escape Room & Delitto"
                },
                "title": {
                    "de": "Exit-Game / Krimi-Akte am Wohnzimmertisch lösen",
                    "en": "Escape Room Box / Unsolved Case File",
                    "es": "Escape Room de Mesa o Caso Criminal",
                    "fr": "Escape Game en Boîte / Dossier Criminel",
                    "it": "Escape Room da Tavolo / Risolvere un Delitto"
                },
                "desc": {
                    "de": "Zusammen Hinweise kombinieren, Codes knacken und den Täter finden.",
                    "en": "Crack codes, examine clues and solve the mystery.",
                    "es": "Descifrar pistas en equipo y resolver el caso.",
                    "fr": "Déchiffrer des indices, examiner des pièces à conviction à deux.",
                    "it": "Decifrare indizi, analizzare prove e risolvere il caso a casa."
                },
                "actionLabel": {
                    "de": "🕵️ Exit-Games auf Amazon",
                    "en": "Exit Games on Amazon",
                    "es": "Juegos Exit en Amazon",
                    "fr": "Jeux d'enquête sur Amazon",
                    "it": "Giochi escape room su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=exit+game+krimispiel&tag=f05b1-21"
            },
            {
                "id": 6,
                "emoji": "🎉",
                "bg": "from-pink-600 to-purple-900",
                "tag": {
                    "de": "Minispiel-Chaos",
                    "en": "Party Game",
                    "es": "Risas y Minijuegos",
                    "fr": "Jeu d'Ambiance",
                    "it": "Party Game"
                },
                "title": {
                    "de": "Mario Party, Jackbox oder Smartphone-Partyspiel",
                    "en": "Mario Party / Jackbox Party Pack",
                    "es": "Mario Party o Juegos con el Móvil",
                    "fr": "Mario Party ou Jackbox sur Téléphone",
                    "it": "Mario Party o Jackbox con Smartphone"
                },
                "desc": {
                    "de": "Kurze, witzige Minispiele gegeneinander – perfekt auch mit Freunden.",
                    "en": "Hilarious quick minigames with zero learning curve.",
                    "es": "Minijuegos rápidos para morirse de risa.",
                    "fr": "Mini-jeux hilarants et prise en main immédiate.",
                    "it": "Mini-giochi divertentissimi senza regole complicate."
                },
                "actionLabel": {
                    "de": "Beste Party-Games zeigen",
                    "en": "Top Party Games",
                    "es": "Ver juegos de fiesta",
                    "fr": "Top jeux d'ambiance",
                    "it": "Migliori party game"
                },
                "actionUrl": "https://www.google.com/search?q=beste+party+games+konsole+handy"
            },
            {
                "id": 7,
                "emoji": "🔦",
                "bg": "from-slate-800 to-indigo-950",
                "tag": {
                    "de": "Ein Controller, 2 Köpfe",
                    "en": "Interactive Story",
                    "es": "Película Interactiva",
                    "fr": "Histoire Interactive",
                    "it": "Storia Interattiva"
                },
                "title": {
                    "de": "Story-Game zusammen entscheiden (Until Dawn, Life is Strange)",
                    "en": "Interactive Story Game (You Both Decide)",
                    "es": "Juego de Historia Interactiva (Decidís Juntos)",
                    "fr": "Jeu Narratif dont Vous Décidez les Choix",
                    "it": "Gioco Narrativo a Scelte Condivise"
                },
                "desc": {
                    "de": "Wie ein spannender Film, aber ihr trefft gemeinsam jede Entscheidung!",
                    "en": "Plays like a movie where you vote on every choice.",
                    "es": "Como una serie pero vosotros tomáis cada decisión.",
                    "fr": "Comme un film interactif où l'on vote à deux pour chaque décision.",
                    "it": "Come un film in cui votate insieme ogni singola decisione."
                },
                "actionLabel": {
                    "de": "Beste Story-Spiele für Paare",
                    "en": "Top Interactive Story Games",
                    "es": "Mejores juegos narrativos",
                    "fr": "Top jeux narratifs",
                    "it": "Migliori storie interattive"
                },
                "actionUrl": "https://www.google.com/search?q=beste+interaktive+story+spiele+zu+zweit"
            },
            {
                "id": 8,
                "emoji": "💬",
                "bg": "from-rose-600 to-orange-800",
                "tag": {
                    "de": "Null Material nötig",
                    "en": "Deep Talk & Laughs",
                    "es": "Charla y Risas",
                    "fr": "Discussion Complice & Rires",
                    "it": "Chiacchiere & Risate"
                },
                "title": {
                    "de": "Entweder-Oder / 36 Fragen / Wer-würde-eher Challenge",
                    "en": "Would You Rather / Deep Questions Game",
                    "es": "Reto de Preguntas / ¿Qué Preferirías?",
                    "fr": "Tu Préfères ? / Questions pour Se Redécouvrir",
                    "it": "Preferiresti...? / Domande Profonde a Due"
                },
                "desc": {
                    "de": "Mit einem Glas Wein auf die Couch und überraschende Fragen stellen.",
                    "en": "Pour a drink and ask hilarious or deep questions.",
                    "es": "Una copa en el sofá y preguntas sorprendentes.",
                    "fr": "Prendre un verre et se poser des questions drôles ou profondes.",
                    "it": "Un drink in mano e tante domande curiose o divertenti."
                },
                "actionLabel": {
                    "de": "Fragen-Generator öffnen",
                    "en": "Open Question List",
                    "es": "Ver lista de preguntas",
                    "fr": "Liste de questions ouvertes",
                    "it": "Lista di domande per coppie"
                },
                "actionUrl": "https://www.google.com/search?q=entweder+oder+fragen+paare+freunde"
            },
            {
                "id": 9,
                "emoji": "🧩",
                "bg": "from-teal-600 to-emerald-900",
                "tag": {
                    "de": "Entspannt & Fokussiert",
                    "en": "Cozy & Chill",
                    "es": "Relax y Puzle",
                    "fr": "Détente & Zen",
                    "it": "Relax & Concentrazione"
                },
                "title": {
                    "de": "Puzzle, Lego-Set oder Wort-Duell (Scrabble / Wordle)",
                    "en": "Lego Build, Puzzle + Podcast or Word Duel",
                    "es": "Lego, Puzle con Podcast o Duelo de Palabras",
                    "fr": "Lego, Puzzle + Podcast ou Scrabble",
                    "it": "Lego, Puzzle + Podcast o Duello a Parole"
                },
                "desc": {
                    "de": "Guter Podcast oder Musik im Hintergrund und zusammen bauen/rätseln.",
                    "en": "Put on a great podcast or playlist and build together.",
                    "es": "Poner buena música o podcast y construir juntos.",
                    "fr": "Mettre un bon podcast ou une playlist et construire ensemble.",
                    "it": "Un bel podcast o playlist di sottofondo e costruire insieme."
                },
                "actionLabel": {
                    "de": "🧩 Lego & Puzzles auf Amazon",
                    "en": "Lego & Puzzles on Amazon",
                    "es": "Lego y puzles en Amazon",
                    "fr": "Lego & Puzzles sur Amazon",
                    "it": "Lego & Puzzle su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=lego+sets+erwachsene+botanicals&tag=f05b1-21"
            }
        ]
    },
    "weekend": {
        "id": "weekend",
        "category": "activity",
        "mode": "match",
        "icon": "🥂",
        "gradient": "from-emerald-500 to-teal-600",
        "title": {
            "de": "Wochenend-Vibe",
            "en": "Weekend Plan",
            "es": "Plan de Fin de Semana",
            "fr": "Vibe du Week-end",
            "it": "Piani per il Weekend"
        },
        "sub": {
            "de": "Worauf haben wir heute wirklich Lust?",
            "en": "Match your energy level in 30s",
            "es": "¿Qué nos apetece hacer hoy?",
            "fr": "Qu'est-ce qu'on a vraiment envie de faire aujourd'hui ?",
            "it": "Cosa ci va davvero di fare oggi?"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "☕",
                "bg": "from-amber-700 to-stone-800",
                "tag": {
                    "de": "Frische Luft & Koffein",
                    "en": "Fresh Air",
                    "es": "Aire libre",
                    "fr": "Grand Air",
                    "it": "Aria Aperta"
                },
                "title": {
                    "de": "Coffee-to-go & langer Spaziergang",
                    "en": "Coffee Walk & Talk",
                    "es": "Café para llevar y paseo",
                    "fr": "Balade Café à la Main & Discussion",
                    "it": "Passeggiata con Caffè da Asporto"
                },
                "desc": {
                    "de": "Handys in die Tasche, guter Kaffee und 1 Stunde raus.",
                    "en": "Phones away, good coffee, 1 hour outside.",
                    "es": "Desconectar una hora caminando.",
                    "fr": "Téléphones rangés, bon café chaud, 1h dehors.",
                    "it": "Telefoni in tasca, un buon caffè caldo e un'ora all'aria aperta."
                },
                "actionLabel": {
                    "de": "Schöne Cafés in der Nähe",
                    "en": "Best Cafés Nearby",
                    "es": "Cafeterías cerca",
                    "fr": "Meilleurs cafés à proximité",
                    "it": "Migliori caffetterie vicine"
                },
                "actionUrl": "https://www.google.com/maps/search/Cafe"
            },
            {
                "id": 1,
                "emoji": "🛋️",
                "bg": "from-blue-800 to-slate-900",
                "tag": {
                    "de": "0% Verpflichtung",
                    "en": "Zero Guilt",
                    "es": "Modo Cueva",
                    "fr": "Zéro Culpabilité",
                    "it": "Zero Sensi di Colpa"
                },
                "title": {
                    "de": "Offizieller Jogginghosen-Tag",
                    "en": "100% Cozy Couch Day",
                    "es": "Día oficial de sofá y manta",
                    "fr": "Journée Canapé & Plaid 100% Assumée",
                    "it": "Giornata Divano & Tuta 100% Ufficiale"
                },
                "desc": {
                    "de": "Wir sagen alles ab und bleiben ohne schlechtes Gewissen drinnen.",
                    "en": "Stay in without an ounce of guilt.",
                    "es": "Cero planes fuera, relax total en casa.",
                    "fr": "Rester à la maison sans la moindre culpabilité.",
                    "it": "Restare a casa sotto il piumone senza sensi di colpa."
                },
                "actionLabel": {
                    "de": "Lieferdienst-Radar öffnen",
                    "en": "Check Food Delivery",
                    "es": "Pedir algo rico a casa",
                    "fr": "Voir options de livraison",
                    "it": "Ordina cibo a domicilio"
                },
                "actionUrl": "https://www.google.com/maps/search/Restaurant+Delivery"
            },
            {
                "id": 2,
                "emoji": "🎲",
                "bg": "from-purple-700 to-indigo-900",
                "tag": {
                    "de": "Duell-Modus",
                    "en": "Friendly Rivalry",
                    "es": "Modo Pique",
                    "fr": "Rivalité Amicale",
                    "it": "Sfida tra Noi"
                },
                "title": {
                    "de": "Spieleabend & Drinks zu zweit",
                    "en": "Board Games / Mario Kart & Drinks",
                    "es": "Juegos de mesa o consola + Copas",
                    "fr": "Jeux de Société / Mario Kart & Verre à Deux",
                    "it": "Giochi da Tavolo / Mario Kart & Drink a Due"
                },
                "desc": {
                    "de": "Verlierer räumt morgen die Küche auf!",
                    "en": "Loser makes breakfast tomorrow!",
                    "es": "¡El que pierde invita al desayuno!",
                    "fr": "Le perdant prépare le petit-déjeuner demain matin !",
                    "it": "Chi perde prepara la colazione domani mattina!"
                },
                "actionLabel": {
                    "de": "Beste 2-Spieler-Spiele ansehen",
                    "en": "Top 2-Player Games",
                    "es": "Juegos para 2 personas",
                    "fr": "Top jeux à deux joueurs",
                    "it": "Migliori giochi per due"
                },
                "actionUrl": "https://www.google.com/search?q=beste+spiele+fuer+2+personen"
            },
            {
                "id": 3,
                "emoji": "🍽️",
                "bg": "from-rose-700 to-red-900",
                "tag": {
                    "de": "Rausgehen",
                    "en": "Dress Up",
                    "es": "Salir fuera",
                    "fr": "Sortie Resto",
                    "it": "Serata Fuori"
                },
                "title": {
                    "de": "Spontanes Date im Restaurant",
                    "en": "Spontaneous Dinner Date",
                    "es": "Cena espontánea fuera",
                    "fr": "Dîner Spontané au Restaurant",
                    "it": "Cena Spontanea Fuori al Ristorante"
                },
                "desc": {
                    "de": "Schick machen und uns bedienen lassen.",
                    "en": "Get out of the house and get served.",
                    "es": "Salir de casa y que nos sirvan.",
                    "fr": "S'habiller un peu, sortir de la maison et se faire servir.",
                    "it": "Vestirsi carini, uscire di casa e farsi servire."
                },
                "actionLabel": {
                    "de": "Freie Tische in der Nähe suchen",
                    "en": "Find Restaurants Nearby",
                    "es": "Buscar restaurantes cerca",
                    "fr": "Trouver des restaurants proches",
                    "it": "Trova ristoranti nei paraggi"
                },
                "actionUrl": "https://www.google.com/maps/search/Restaurant"
            },
            {
                "id": 4,
                "emoji": "🛍️",
                "bg": "from-amber-600 to-orange-800",
                "tag": {
                    "de": "Stöbern & Schätze",
                    "en": "Sunday Stroll",
                    "es": "Mercadillo",
                    "fr": "Balade du Dimanche",
                    "it": "Domenica Curiosa"
                },
                "title": {
                    "de": "Flohmarkt, Wochenmarkt oder Streetfood-Festival",
                    "en": "Flea Market or Streetfood Market",
                    "es": "Mercadillo, Rastro o Streetfood",
                    "fr": "Marché aux Puces, Brocante ou Streetfood",
                    "it": "Mercatino Vintage, Fiera o Street Food"
                },
                "desc": {
                    "de": "Mit einem Kaffee durch die Stände schlendern und Kleinigkeiten probieren.",
                    "en": "Stroll through stalls with coffee and street food.",
                    "es": "Pasear entre puestos con un café y picar algo.",
                    "fr": "Flâner entre les stands avec un café et goûter des délices.",
                    "it": "Passeggiare tra i banchi con un caffè e curiosare."
                },
                "actionLabel": {
                    "de": "Märkte in der Nähe prüfen",
                    "en": "Find Markets Nearby",
                    "es": "Buscar mercados cerca",
                    "fr": "Trouver des marchés proches",
                    "it": "Trova mercati nelle vicinanze"
                },
                "actionUrl": "https://www.google.com/search?q=flohmarkt+wochenmarkt+heute+in+der+naehe"
            },
            {
                "id": 5,
                "emoji": "🥞",
                "bg": "from-yellow-500 to-amber-700",
                "tag": {
                    "de": "Ausgiebig genießen",
                    "en": "Brunch Lovers",
                    "es": "Brunch de finde",
                    "fr": "Gourmands du Brunch",
                    "it": "Amanti del Brunch"
                },
                "title": {
                    "de": "Großer Wochenend-Brunch (Pancakes, Eggs Benedict & Mimosa)",
                    "en": "Big Weekend Brunch Out",
                    "es": "Gran Brunch (Pancakes, Huevos y Café)",
                    "fr": "Grand Brunch Gourmand du Week-end",
                    "it": "Grande Brunch Fuori del Weekend"
                },
                "desc": {
                    "de": "Frühstück und Mittagessen in einem – entspannt in den Tag starten.",
                    "en": "Pancakes, avocado toast and fresh coffee.",
                    "es": "Tostadas, tortitas y empezar el día sin prisa.",
                    "fr": "Pancakes moelleux, œufs bénédicte, toasts avocat et bon café.",
                    "it": "Pancake soffici, uova alla Benedict e buon caffè espresso."
                },
                "actionLabel": {
                    "de": "Beste Brunch-Cafés suchen",
                    "en": "Best Brunch Spots",
                    "es": "Buscar sitios de brunch",
                    "fr": "Meilleurs spots pour bruncher",
                    "it": "Migliori posti per brunch"
                },
                "actionUrl": "https://www.google.com/maps/search/Brunch+Cafe"
            },
            {
                "id": 6,
                "emoji": "🚴",
                "bg": "from-emerald-600 to-green-900",
                "tag": {
                    "de": "Raus in die Natur",
                    "en": "Active Outdoors",
                    "es": "Ruta y Naturaleza",
                    "fr": "Sortie Nature",
                    "it": "Aria Aperta Attiva"
                },
                "title": {
                    "de": "Kleine Fahrradtour oder Wanderung ins Grüne",
                    "en": "Bike Ride or Scenic Hike",
                    "es": "Ruta en Bici o Senderismo",
                    "fr": "Balade à Vélo ou Randonnée au Vert",
                    "it": "Giro in Bici o Passeggiata nel Verde"
                },
                "desc": {
                    "de": "Kopf frei pusten, neue Strecke testen und unterwegs einkehren.",
                    "en": "Fresh air, scenic trail and a stop for cake or beer.",
                    "es": "Aire puro, buena ruta y parada para tomar algo.",
                    "fr": "Air frais, sentier nature et pause gourmande en chemin.",
                    "it": "Aria pulita, sentieri panoramici e una pausa per uno spuntino."
                },
                "actionLabel": {
                    "de": "Schöne Routen in der Nähe",
                    "en": "Find Trails Nearby",
                    "es": "Ver rutas cercanas",
                    "fr": "Trouver des sentiers",
                    "it": "Trova percorsi e sentieri"
                },
                "actionUrl": "https://www.google.com/maps/search/Hiking+Area+Park"
            },
            {
                "id": 7,
                "emoji": "🧖",
                "bg": "from-cyan-600 to-blue-900",
                "tag": {
                    "de": "Tiefenentspannung",
                    "en": "Wellness Day",
                    "es": "Relax y Agua",
                    "fr": "Journée Bien-être",
                    "it": "Giornata Benessere"
                },
                "title": {
                    "de": "Therme, Sauna oder Hallenbad/Freibad",
                    "en": "Thermal Spa, Sauna or Pool Day",
                    "es": "Día de Spa, Termas o Piscina",
                    "fr": "Bains Thermaux, Sauna ou Journée Spa",
                    "it": "Terme, Sauna o Pomeriggio Relax in Piscina"
                },
                "desc": {
                    "de": "Bademantel an, warmes Wasser und 4 Stunden Kurzurlaub.",
                    "en": "Warm water, sauna and 4 hours of pure vacation.",
                    "es": "Albornoz, agua caliente y desconexión total.",
                    "fr": "Eau chaude, sauna relaxant et 4h de coupure totale.",
                    "it": "Acqua calda, vapore rilassante e 4 ore di vacanza totale."
                },
                "actionLabel": {
                    "de": "Thermen & Bäder finden",
                    "en": "Find Spas & Pools",
                    "es": "Buscar termas o spa",
                    "fr": "Trouver des thermes & spas",
                    "it": "Trova terme e centri benessere"
                },
                "actionUrl": "https://www.google.com/maps/search/Therme+Sauna+Schwimmbad"
            },
            {
                "id": 8,
                "emoji": "🖼️",
                "bg": "from-indigo-600 to-slate-900",
                "tag": {
                    "de": "Kultur & Inspiration",
                    "en": "Culture Fix",
                    "es": "Cultura",
                    "fr": "Pause Culture",
                    "it": "Un Tocco di Cultura"
                },
                "title": {
                    "de": "Coole Ausstellung, Museum oder Planetarium",
                    "en": "Exhibition, Museum or Planetarium",
                    "es": "Exposición, Museo o Planetario",
                    "fr": "Exposition Inspirante, Musée ou Planétarium",
                    "it": "Mostra d'Arte, Museo o Planetario"
                },
                "desc": {
                    "de": "Mal wieder neuen Input holen – ideal auch bei Regenwetter.",
                    "en": "Discover something inspiring together.",
                    "es": "Descubrir algo nuevo y diferente juntos.",
                    "fr": "Découvrir ensemble quelque chose de captivant.",
                    "it": "Scoprire insieme qualcosa di stimolante e nuovo."
                },
                "actionLabel": {
                    "de": "Museen & Ausstellungen zeigen",
                    "en": "Find Exhibitions",
                    "es": "Ver museos cerca",
                    "fr": "Trouver des expositions",
                    "it": "Trova mostre in città"
                },
                "actionUrl": "https://www.google.com/maps/search/Museum+Exhibition"
            },
            {
                "id": 9,
                "emoji": "🚗",
                "bg": "from-sky-600 to-indigo-950",
                "tag": {
                    "de": "Mini-Abenteuer",
                    "en": "Daytrip",
                    "es": "Escapada de día",
                    "fr": "Escapade d'un Jour",
                    "it": "Gita Fuori Porta"
                },
                "title": {
                    "de": "Spontaner Tagesausflug (See, Burg oder Nachbarstadt)",
                    "en": "Spontaneous Daytrip to a Lake or Castle",
                    "es": "Excursión a un Pueblo, Lago o Castillo",
                    "fr": "Excursion Spontanée (Lac, Château ou Ville Voisine)",
                    "it": "Gita Giornaliera Spontanea (Lago, Borgo o Città Vicina)"
                },
                "desc": {
                    "de": "Playlist an, 45 Minuten rausfahren und etwas Neues sehen.",
                    "en": "45-minute drive, great playlist and a new view.",
                    "es": "Buena música y descubrir un sitio a menos de 1 hora.",
                    "fr": "45 min de route, super playlist et dépaysement garanti.",
                    "it": "45 minuti di strada, ottima musica e paesaggi nuovi."
                },
                "actionLabel": {
                    "de": "Ausflugsziele in der Umgebung",
                    "en": "Daytrip Ideas Nearby",
                    "es": "Ideas de excursión",
                    "fr": "Idées d'excursions autour",
                    "it": "Idee per gite fuori porta"
                },
                "actionUrl": "https://www.google.com/search?q=ausflugsziele+in+der+naehe"
            },
            {
                "id": 10,
                "emoji": "🧺",
                "bg": "from-lime-600 to-emerald-900",
                "tag": {
                    "de": "Sonne & Decke",
                    "en": "Park Picnic",
                    "es": "Pícnic",
                    "fr": "Pique-Nique au Soleil",
                    "it": "Picnic al Parco"
                },
                "title": {
                    "de": "Picknick im Park oder am Seeufer",
                    "en": "Sun Picnic by the Lake or Park",
                    "es": "Pícnic al Sol en el Parque o Lago",
                    "fr": "Pique-Nique au Parc ou au Bord d'un Lac",
                    "it": "Picnic al Sole al Parco o in Riva al Lago"
                },
                "desc": {
                    "de": "Decke, Baguette, Erdbeeren, Dips und kalte Getränke einpacken.",
                    "en": "Blanket, fresh bread, berries and cold drinks.",
                    "es": "Manta, algo rico de picar y bebidas frías.",
                    "fr": "Grande nappe, baguette fraîche, fruits et boissons fraîches.",
                    "it": "Coperta sull'erba, focaccia fragrante, frutta e bibite fresche."
                },
                "actionLabel": {
                    "de": "Schönste Parks & Seen",
                    "en": "Find Parks & Lakes",
                    "es": "Buscar parques o lagos",
                    "fr": "Trouver des parcs et lacs",
                    "it": "Trova parchi e laghi"
                },
                "actionUrl": "https://www.google.com/maps/search/Park+See"
            },
            {
                "id": 11,
                "emoji": "🧁",
                "bg": "from-pink-600 to-rose-900",
                "tag": {
                    "de": "Duftet herrlich",
                    "en": "Cozy Kitchen",
                    "es": "Hornear en casa",
                    "fr": "Cuisine Douillette",
                    "it": "Profumo di Dolci"
                },
                "title": {
                    "de": "Zusammen Backen (Zimtschnecken, Kuchen oder Pizza-Teig)",
                    "en": "Bake Together (Cinnamon Rolls or Cake)",
                    "es": "Hornear Juntos (Rollos de Canela o Tarta)",
                    "fr": "Pâtisser Ensemble (Brioches, Gâteau ou Focaccia)",
                    "it": "Infornare Insieme (Torta, Brioche o Pizza Fatta in Casa)"
                },
                "desc": {
                    "de": "Die ganze Wohnung riecht fantastisch und danach wird warm probiert.",
                    "en": "Make the whole home smell amazing.",
                    "es": "Que toda la casa huela increíble y comerlo recién hecho.",
                    "fr": "Parfumer tout l'appartement de douces odeurs de cuisson.",
                    "it": "Rendere tutta la casa profumata di dolci caldi."
                },
                "actionLabel": {
                    "de": "Zimtschnecken & Back-Ideen",
                    "en": "Baking Recipes",
                    "es": "Recetas fáciles de repostería",
                    "fr": "Recettes faciles de pâtisserie",
                    "it": "Ricette facili per dolci"
                },
                "actionUrl": "https://www.google.com/search?q=zimtschnecken+schnell+backen+rezept"
            }
        ]
    },
    "meetup": {
        "id": "meetup",
        "category": "activity",
        "mode": "match",
        "icon": "📍",
        "gradient": "from-cyan-500 to-blue-600",
        "title": {
            "de": "Wo treffen wir uns heute?",
            "en": "Where Should We Meet?",
            "es": "¿Dónde quedamos hoy?",
            "fr": "Où Se Retrouve-t-on ?",
            "it": "Dove Ci Incontriamo Oggi?"
        },
        "sub": {
            "de": "Perfekt für Freunde & spontane Treffen",
            "en": "Quick spot finder for friends & couples",
            "es": "Decidir punto de encuentro en 30s",
            "fr": "Idéal pour amis et sorties spontanées",
            "it": "Perfetto per amici e incontri spontanei"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "🌳",
                "bg": "from-emerald-600 to-green-900",
                "tag": {
                    "de": "Draußen & Entspannt",
                    "en": "Outdoors",
                    "es": "Aire libre",
                    "fr": "En Extérieur",
                    "it": "All'Aperto"
                },
                "title": {
                    "de": "Im Park oder am Wasser treffen",
                    "en": "Hangout at the Park / Waterfront",
                    "es": "Quedar en el Parque o Río/Playa",
                    "fr": "Posés au Parc ou au Bord de l'Eau",
                    "it": "Ritrovo al Parco o Lungofiume"
                },
                "desc": {
                    "de": "Snacks oder Getränke mitnehmen und in die Sonne/Abendluft setzen.",
                    "en": "Grab snacks & drinks and chill outside.",
                    "es": "Llevar algo de beber y sentarse al aire libre.",
                    "fr": "Prendre de quoi grignoter, boire un coup et discuter posés.",
                    "it": "Prendiamo qualcosa da bere e stuzzicare e ci rilassiamo fuori."
                },
                "actionLabel": {
                    "de": "Parks in der Nähe zeigen",
                    "en": "Find Parks Nearby",
                    "es": "Ver parques cercanos",
                    "fr": "Trouver des parcs proches",
                    "it": "Trova parchi nelle vicinanze"
                },
                "actionUrl": "https://www.google.com/maps/search/Park"
            },
            {
                "id": 1,
                "emoji": "🥐",
                "bg": "from-amber-600 to-yellow-800",
                "tag": {
                    "de": "Kaffee & Süßes",
                    "en": "Coffee & Pastry",
                    "es": "Café y Dulce",
                    "fr": "Café & Douceurs",
                    "it": "Caffè & Dolci"
                },
                "title": {
                    "de": "Neues Café oder Zimtschnecken-Spot",
                    "en": "Try a New Café or Bakery",
                    "es": "Probar una Cafetería Nueva",
                    "fr": "Tester un Nouveau Café ou Salon de Thé",
                    "it": "Provare una Nuova Caffetteria o Pasticceria"
                },
                "desc": {
                    "de": "Cappuccino, Iced Latte oder frisches Gebäck probieren.",
                    "en": "Iced latte, cinnamon rolls & catching up.",
                    "es": "Buen café, algo dulce y ponernos al día.",
                    "fr": "Chaï latte, pâtisseries fraîches et rattraper le temps perdu.",
                    "it": "Cappuccino, brioche calde e chiacchiere rilassate."
                },
                "actionLabel": {
                    "de": "Top-bewertete Cafés suchen",
                    "en": "Top Rated Cafés",
                    "es": "Cafeterías mejor valoradas",
                    "fr": "Cafés les mieux notés",
                    "it": "Migliori caffetterie"
                },
                "actionUrl": "https://www.google.com/maps/search/Specialty+Coffee+Bakery"
            },
            {
                "id": 2,
                "emoji": "🎱",
                "bg": "from-indigo-700 to-purple-900",
                "tag": {
                    "de": "Action & Spaß",
                    "en": "Activity Spot",
                    "es": "Algo activo",
                    "fr": "Lieu d'Activité",
                    "it": "Divertimento & Giochi"
                },
                "title": {
                    "de": "Billard, Darts, Tischtennis oder Bowling",
                    "en": "Pool, Darts or Bowling",
                    "es": "Billar, Dardos o Bolera",
                    "fr": "Billard, Fléchettes ou Bowling",
                    "it": "Biliardo, Freccette o Bowling"
                },
                "desc": {
                    "de": "Nebenbei quatschen und eine lockere Runde gegeneinander spielen.",
                    "en": "Casual drinks with a fun game on the side.",
                    "es": "Charlar mientras echamos una partida.",
                    "fr": "Boire un verre tout en jouant tranquillement.",
                    "it": "Bere qualcosa mentre si fa una partita senza pensieri."
                },
                "actionLabel": {
                    "de": "Billard / Bowling in der Nähe",
                    "en": "Find Pool / Bowling",
                    "es": "Buscar billar o bolera",
                    "fr": "Trouver billard / bowling",
                    "it": "Trova biliardi / bowling"
                },
                "actionUrl": "https://www.google.com/maps/search/Billard+Bowling+Darts"
            },
            {
                "id": 3,
                "emoji": "🎟️",
                "bg": "from-rose-700 to-stone-900",
                "tag": {
                    "de": "Große Leinwand",
                    "en": "Big Screen",
                    "es": "Pantalla grande",
                    "fr": "Grand Écran",
                    "it": "Grande Schermo"
                },
                "title": {
                    "de": "Spontan ins Kino (mit Nachos / Popcorn)",
                    "en": "Spontaneous Cinema Trip",
                    "es": "Ir al Cine con Palomitas",
                    "fr": "Cinéma Spontané avec Popcorn Chaud",
                    "it": "Cinema Spontaneo con Popcorn & Bibite"
                },
                "desc": {
                    "de": "Mal wieder echtes Kino-Feeling statt nur Streaming zuhause.",
                    "en": "Fresh popcorn, huge screen, phones off.",
                    "es": "Palomitas recién hechas y pantalla gigante.",
                    "fr": "Popcorn croustillant, écran géant, portables éteints.",
                    "it": "Popcorn caldo, schermo gigante e telefoni spenti."
                },
                "actionLabel": {
                    "de": "Aktuelles Kinoprogramm prüfen",
                    "en": "Check Movie Showtimes",
                    "es": "Ver cartelera de cine",
                    "fr": "Séances de cinéma ce soir",
                    "it": "Orari cinema stasera"
                },
                "actionUrl": "https://www.google.com/search?q=kinoprogramm+heute+in+der+naehe"
            },
            {
                "id": 4,
                "emoji": "🏡",
                "bg": "from-teal-700 to-slate-900",
                "tag": {
                    "de": "Gemütlich & Privat",
                    "en": "Home Hangout",
                    "es": "En casa",
                    "fr": "À la Maison",
                    "it": "A Casa di Qualcuno"
                },
                "title": {
                    "de": "Bei jemandem zuhause kochen oder bestellen",
                    "en": "Chill & Cook at Home",
                    "es": "Quedar en casa y pedir/cocinar",
                    "fr": "Cuisiner ou Commander Chez l'Un de Nous",
                    "it": "Cucinare o Ordinare a Casa di Qualcuno"
                },
                "desc": {
                    "de": "Kein Stress mit Reservierungen – Musik an und gemütlich machen.",
                    "en": "Zero reservation stress, comfy clothes & music.",
                    "es": "Cero estrés de reservas, música y relax.",
                    "fr": "Zéro stress de réservation, tenue confortable et bonne musique.",
                    "it": "Zero stress da prenotazione, vestiti comodi e musica nostra."
                },
                "actionLabel": {
                    "de": "Rezept- oder Liefer-Ideen",
                    "en": "Group Food Ideas",
                    "es": "Ideas para cenar en grupo",
                    "fr": "Idées de plats à partager",
                    "it": "Idee cibo per gruppi"
                },
                "actionUrl": "https://www.google.com/search?q=schnelles+essen+fuer+freunde+kochen"
            },
            {
                "id": 5,
                "emoji": "🌮",
                "bg": "from-orange-600 to-red-800",
                "tag": {
                    "de": "Jeder isst worauf er Lust hat",
                    "en": "Food Hall",
                    "es": "Mercado Gastronómico",
                    "fr": "Halle Gourmande",
                    "it": "Mercato Coperto"
                },
                "title": {
                    "de": "Food-Market / Markthalle mit verschiedenen Ständen",
                    "en": "Streetfood Hall / Indoor Market",
                    "es": "Mercado Gastronómico / Streetfood",
                    "fr": "Halle Gourmande / Marché Couvert Streetfood",
                    "it": "Food Hall / Mercato Gastronomico con Stand Vari"
                },
                "desc": {
                    "de": "Perfekt für Gruppen: Jeder holt sich seinen Favoriten und man sitzt zusammen.",
                    "en": "Everyone grabs their favorite food and sits together.",
                    "es": "Cada uno pide lo que quiera y nos sentamos juntos.",
                    "fr": "Chacun choisit son stand préféré et on mange tous ensemble.",
                    "it": "Ognuno prende quel che vuole dal proprio stand preferito."
                },
                "actionLabel": {
                    "de": "Food-Markets suchen",
                    "en": "Find Food Halls",
                    "es": "Buscar mercados gastronómicos",
                    "fr": "Trouver des halles gourmandes",
                    "it": "Trova food hall vicine"
                },
                "actionUrl": "https://www.google.com/maps/search/Markthalle+Food+Market"
            },
            {
                "id": 6,
                "emoji": "🍻",
                "bg": "from-amber-700 to-stone-900",
                "tag": {
                    "de": "Klassischer Treffpunkt",
                    "en": "Casual Drinks",
                    "es": "Terraza o Pub",
                    "fr": "Verre Convivial",
                    "it": "Bere Qualcosa"
                },
                "title": {
                    "de": "Biergarten, Stammkneipe oder Tapas-Bar",
                    "en": "Beer Garden, Local Pub or Tapas Bar",
                    "es": "Terraza, Cervecería o Bar de Tapas",
                    "fr": "Terrasse, Bar de Quartier ou Bar à Tapas",
                    "it": "Birreria, Bar Storico o Tapas Bar"
                },
                "desc": {
                    "de": "Unkompliziert zusammensitzen, anstoßen und Neuigkeiten austauschen.",
                    "en": "Grab a table, order pitchers or tapas and catch up.",
                    "es": "Unas cañas, raciones para compartir y ponernos al día.",
                    "fr": "Trouver une grande table, commander des tapas et trinquer.",
                    "it": "Tavolo grande, stuzzichini da condividere e brindisi insieme."
                },
                "actionLabel": {
                    "de": "Bars & Biergärten finden",
                    "en": "Find Bars & Terraces",
                    "es": "Buscar terrazas cerca",
                    "fr": "Trouver des bars et terrasses",
                    "it": "Trova locali e terrazze"
                },
                "actionUrl": "https://www.google.com/maps/search/Tapas+Bar+Biergarten"
            },
            {
                "id": 7,
                "emoji": "🍦",
                "bg": "from-pink-500 to-purple-800",
                "tag": {
                    "de": "Kurzes Treffen",
                    "en": "Quick Sweet Catchup",
                    "es": "Paseo y Helado",
                    "fr": "Douceur Sucrée",
                    "it": "Pausa Golosa"
                },
                "title": {
                    "de": "Eisdiele / Frozen Yogurt & Spaziergang durchs Viertel",
                    "en": "Ice Cream / Boba Walk Through Town",
                    "es": "Heladería y Paseo por el Centro",
                    "fr": "Glacier Artisanal & Balade dans le Quartier",
                    "it": "Gelateria Artigianale & Passeggiata in Centro"
                },
                "desc": {
                    "de": "Zwei Kugeln auf die Hand und entspannt durch das liebste Viertel laufen.",
                    "en": "Grab two scoops and stroll through a cool neighborhood.",
                    "es": "Un buen helado en mano y paseo tranquilo.",
                    "fr": "Prendre deux boules gourmandes et marcher en papotant.",
                    "it": "Coppetta o cono due gusti e passeggiata rilassata."
                },
                "actionLabel": {
                    "de": "Beste Eisdielen in der Nähe",
                    "en": "Top Ice Cream Spots",
                    "es": "Buscar heladerías top",
                    "fr": "Meilleurs glaciers",
                    "it": "Migliori gelaterie"
                },
                "actionUrl": "https://www.google.com/maps/search/Eisdiele+Gelato"
            },
            {
                "id": 8,
                "emoji": "🧗",
                "bg": "from-sky-600 to-indigo-950",
                "tag": {
                    "de": "Auspowern",
                    "en": "Sporty Hangout",
                    "es": "Plan deportivo",
                    "fr": "Sortie Sportive",
                    "it": "Incontro Sportivo"
                },
                "title": {
                    "de": "Bouldern, Padel-Tennis, Basketball oder Laufrunde",
                    "en": "Bouldering, Padel, Spikeball or Run Club",
                    "es": "Pádel, Rocódromo o Deporte Juntos",
                    "fr": "Escalade de Bloc, Padel ou Footing Ensemble",
                    "it": "Bouldering, Padel, Basket o Corsetta Insieme"
                },
                "desc": {
                    "de": "Erst zusammen schwitzen, danach schmeckt das Kaltgetränk doppelt so gut!",
                    "en": "Move together first, cold drinks right after!",
                    "es": "Hacer algo de deporte y luego tomar algo bien frío.",
                    "fr": "Se dépenser ensemble d'abord, verre bien mérité juste après !",
                    "it": "Muoversi insieme prima, bibita fresca meritata subito dopo!"
                },
                "actionLabel": {
                    "de": "Boulderhalle / Plätze finden",
                    "en": "Find Sports Spots",
                    "es": "Buscar pistas o rocódromo",
                    "fr": "Trouver des salles de sport",
                    "it": "Trova centri sportivi"
                },
                "actionUrl": "https://www.google.com/maps/search/Bouldern+Padel+Sport"
            },
            {
                "id": 9,
                "emoji": "🎲",
                "bg": "from-violet-700 to-slate-900",
                "tag": {
                    "de": "Rätseln & Trinken",
                    "en": "Quiz or Boardgames",
                    "es": "Juegos y Copas",
                    "fr": "Quiz & Jeux",
                    "it": "Quiz o Giochi da Tavolo"
                },
                "title": {
                    "de": "Kneipen-Quiz (Pub Quiz) oder Spiele-Café",
                    "en": "Pub Quiz Night or Board Game Café",
                    "es": "Pub Quiz o Cafetería de Juegos",
                    "fr": "Soirée Pub Quiz ou Bar à Jeux de Société",
                    "it": "Pub Quiz della Serata o Bar dei Giochi da Tavolo"
                },
                "desc": {
                    "de": "Als Team gegen andere Tische antreten oder neue Spiele testen.",
                    "en": "Team up for trivia night or try new board games.",
                    "es": "Competir en equipo en un trivial o probar juegos.",
                    "fr": "Faire équipe pour le quiz ou tester de nouveaux jeux.",
                    "it": "Fare squadra per il quiz a premi o provare nuovi giochi da tavolo."
                },
                "actionLabel": {
                    "de": "Spiele-Cafés & Pub-Quiz suchen",
                    "en": "Find Quiz / Game Cafés",
                    "es": "Buscar bares de juegos",
                    "fr": "Trouver bars à jeux / quiz",
                    "it": "Trova bar con giochi / quiz"
                },
                "actionUrl": "https://www.google.com/maps/search/Board+Game+Cafe+Pub+Quiz"
            }
        ]
    },
    "datenight": {
        "id": "datenight",
        "category": "activity",
        "mode": "match",
        "icon": "❤️",
        "gradient": "from-rose-500 to-pink-600",
        "title": {
            "de": "Date-Night Deluxe",
            "en": "Date Night Sparks",
            "es": "Cita Especial",
            "fr": "Soirée Romantique Deluxe",
            "it": "Date Night Speciale"
        },
        "sub": {
            "de": "Schluss mit Standard – Zeit für euch zwei",
            "en": "Break the routine with a special night",
            "es": "Salir de la rutina en pareja",
            "fr": "Fini la routine – un vrai moment rien qu'à deux",
            "it": "Basta con la solita routine: tempo solo per voi due"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "🌅",
                "bg": "from-orange-500 to-rose-700",
                "tag": {
                    "de": "Romantisch & Locker",
                    "en": "Golden Hour",
                    "es": "Atardecer",
                    "fr": "Golden Hour",
                    "it": "Ora d'Oro"
                },
                "title": {
                    "de": "Sonnenuntergangs-Spot mit Lieblingsgetränk",
                    "en": "Sunset Viewpoint + Drinks",
                    "es": "Mirador al Atardecer con Bebidas",
                    "fr": "Coucher de Soleil Panoramique & Verre à Deux",
                    "it": "Punto Panoramico al Tramonto con Drink"
                },
                "desc": {
                    "de": "Decke und zwei Drinks einpacken und den Ausblick genießen.",
                    "en": "Pack two drinks and watch the city lights come on.",
                    "es": "Llevar dos bebidas y disfrutar de las vistas.",
                    "fr": "Emporter deux verres et regarder la ville s'illuminer.",
                    "it": "Due calici pronti e guardare le luci della città accendersi."
                },
                "actionLabel": {
                    "de": "Aussichtspunkte finden",
                    "en": "Find Sunset Spots",
                    "es": "Buscar miradores cerca",
                    "fr": "Trouver des spots coucher de soleil",
                    "it": "Trova posti panoramici"
                },
                "actionUrl": "https://www.google.com/maps/search/Aussichtspunkt+Viewpoint"
            },
            {
                "id": 1,
                "emoji": "👨‍🍳",
                "bg": "from-red-600 to-amber-700",
                "tag": {
                    "de": "Team-Erlebnis",
                    "en": "Kitchen Date",
                    "es": "Reto en cocina",
                    "fr": "Rendez-vous en Cuisine",
                    "it": "Cucinare Insieme"
                },
                "title": {
                    "de": "2-Gänge Koch-Duell mit Musik & Wein",
                    "en": "2-Course Cooking Date + Wine",
                    "es": "Cocinar juntos con Vino y Música",
                    "fr": "Cuisiner un Menu 2 Plats avec Musique & Vin",
                    "it": "Cucinare in Due con Buona Musica & Vino"
                },
                "desc": {
                    "de": "Einer macht Vorspeise oder Hauptgang, der andere das Dessert!",
                    "en": "One handles the main, one does dessert!",
                    "es": "Uno hace el plato principal y el otro el postre.",
                    "fr": "L'un s'occupe du plat principal, l'autre du dessert !",
                    "it": "Uno prepara il piatto forte, l'altro pensa al dolce!"
                },
                "actionLabel": {
                    "de": "Date-Night Rezepte ansehen",
                    "en": "Date Night Recipes",
                    "es": "Recetas para una cita",
                    "fr": "Recettes pour dîner en amoureux",
                    "it": "Ricette per cena romantica"
                },
                "actionUrl": "https://www.google.com/search?q=romantisches+abendessen+zu+zweit+rezept"
            },
            {
                "id": 2,
                "emoji": "🧖‍♀️",
                "bg": "from-teal-600 to-cyan-900",
                "tag": {
                    "de": "100% Entspannung",
                    "en": "Pure Relax",
                    "es": "Relax total",
                    "fr": "Détente Absolue",
                    "it": "Puro Relax"
                },
                "title": {
                    "de": "Therme, Sauna oder Home-Spa Abend",
                    "en": "Spa, Sauna or Home Massage Night",
                    "es": "Termas, Spa o Masaje en Casa",
                    "fr": "Spa, Sauna Nocturne ou Massage à la Maison",
                    "it": "Terme, Sauna o Serata Massaggi a Casa"
                },
                "desc": {
                    "de": "Abschalten, warmes Wasser oder gegenseitige Massage zuhause.",
                    "en": "Unwind completely in warm water or at home.",
                    "es": "Desconectar del mundo y relajarse.",
                    "fr": "Se relaxer complètement dans l'eau chaude ou sous un plaid.",
                    "it": "Staccare completamente la spina tra acqua calda e relax."
                },
                "actionLabel": {
                    "de": "Thermen & Spas in der Nähe",
                    "en": "Find Spas Nearby",
                    "es": "Buscar spa o termas",
                    "fr": "Trouver des spas",
                    "it": "Trova terme e spa vicine"
                },
                "actionUrl": "https://www.google.com/maps/search/Therme+Spa+Sauna"
            },
            {
                "id": 3,
                "emoji": "🍦",
                "bg": "from-indigo-600 to-violet-900",
                "tag": {
                    "de": "Spontan & Süß",
                    "en": "Late Night Vibe",
                    "es": "Plan nocturno",
                    "fr": "Vibe Nocturne",
                    "it": "Atmosfera Notturna"
                },
                "title": {
                    "de": "Night-Drive oder Abend-Spaziergang + Eis/Dessert",
                    "en": "Late-Night Walk or Drive + Dessert",
                    "es": "Paseo Nocturno + Helado o Postre",
                    "fr": "Balade Nocturne en Voiture / à Pied + Dessert",
                    "it": "Giro Notturno in Auto o a Piedi + Dolce"
                },
                "desc": {
                    "de": "Abends noch mal raus, gute Playlist und ein Dessert holen.",
                    "en": "Good playlist, night air and a sweet treat.",
                    "es": "Buena playlist, aire fresco y algo dulce.",
                    "fr": "Bonne playlist, fraîcheur de la nuit et douce gourmandise.",
                    "it": "Musica giusta, aria fresca della notte e un dolce goloso."
                },
                "actionLabel": {
                    "de": "Eisdielen & Dessert-Spots",
                    "en": "Find Late Dessert",
                    "es": "Buscar heladerías o postres",
                    "fr": "Trouver desserts nocturnes",
                    "it": "Trova dolci aperti fino a tardi"
                },
                "actionUrl": "https://www.google.com/maps/search/Ice+Cream+Dessert"
            },
            {
                "id": 4,
                "emoji": "🕯️",
                "bg": "from-rose-700 to-stone-900",
                "tag": {
                    "de": "Neues ausprobieren",
                    "en": "New Restaurant",
                    "es": "Restaurante Nuevo",
                    "fr": "Nouveau Restaurant",
                    "it": "Ristorante Mai Provato"
                },
                "title": {
                    "de": "Candle-Light-Dinner in einem Restaurant, wo wir noch nie waren",
                    "en": "Dinner at a Brand-New Restaurant",
                    "es": "Cenar en un Restaurante Nuevo para Ambos",
                    "fr": "Dîner aux Chandelles dans un Nouveau Resto",
                    "it": "Cena a Lume di Candela in un Posto Nuovo"
                },
                "desc": {
                    "de": "Schick anziehen, Smartphones weglegen und eine neue Küche testen.",
                    "en": "Dress up, phones away, and try a spot we've never visited.",
                    "es": "Arreglarse, guardar los móviles y probar un sitio nuevo.",
                    "fr": "Se faire beau, téléphones coupés, et tester une adresse inconnue.",
                    "it": "Vestirsi eleganti, via i telefoni e scoprire un ristorante mai visto."
                },
                "actionLabel": {
                    "de": "Top-Restaurants in der Nähe",
                    "en": "Find Top Restaurants",
                    "es": "Ver restaurantes recomendados",
                    "fr": "Trouver de bonnes tables",
                    "it": "Trova ottimi ristoranti"
                },
                "actionUrl": "https://www.google.com/maps/search/Romantic+Restaurant"
            },
            {
                "id": 5,
                "emoji": "⛳",
                "bg": "from-purple-600 to-indigo-950",
                "tag": {
                    "de": "Spielerisch",
                    "en": "Playful Rivalry",
                    "es": "Cita divertida",
                    "fr": "Rivalité Complice",
                    "it": "Sfida Giocosa"
                },
                "title": {
                    "de": "Schwarzlicht-Minigolf, Bowling oder Arcade-Halle",
                    "en": "Neon Mini-Golf, Bowling or Arcade Date",
                    "es": "Minigolf Nocturno, Bolera o Recreativos",
                    "fr": "Mini-Golf Fluo, Bowling ou Soirée Arcade",
                    "it": "Mini-Golf al Buio, Bowling o Sala Giochi"
                },
                "desc": {
                    "de": "Kleine Wette abschließen: Der Gewinner darf den nächsten Film oder Drink bestimmen!",
                    "en": "Friendly bet: Winner picks the drinks afterwards!",
                    "es": "¡El que gane elige dónde tomamos la copa después!",
                    "fr": "Pari complice : le gagnant se fait offrir le prochain verre !",
                    "it": "Scommessa amichevole: chi vince sceglie cosa bere dopo!"
                },
                "actionLabel": {
                    "de": "Minigolf & Bowling suchen",
                    "en": "Find Mini-Golf / Bowling",
                    "es": "Buscar minigolf o bolera",
                    "fr": "Trouver mini-golf / bowling",
                    "it": "Trova mini-golf / bowling"
                },
                "actionUrl": "https://www.google.com/maps/search/Schwarzlicht+Minigolf+Bowling"
            },
            {
                "id": 6,
                "emoji": "🎭",
                "bg": "from-amber-600 to-red-900",
                "tag": {
                    "de": "Bühne & Live-Gefühl",
                    "en": "Live Stage",
                    "es": "En directo",
                    "fr": "Scène & Rires",
                    "it": "Spettacolo dal Vivo"
                },
                "title": {
                    "de": "Comedy-Club, Stand-Up, Varieté oder kleines Konzert",
                    "en": "Stand-Up Comedy Club or Live Acoustic Show",
                    "es": "Club de Comedia (Monólogos) o Concierto",
                    "fr": "Comedy Club, Stand-Up ou Petit Concert Acoustique",
                    "it": "Comedy Club, Cabaret o Piccolo Concerto Acustico"
                },
                "desc": {
                    "de": "Zusammen Tränen lachen oder Live-Musik mit einem Drink erleben.",
                    "en": "Laugh until it hurts or enjoy live music with a drink.",
                    "es": "Reírse a carcajadas con un monólogo o música en vivo.",
                    "fr": "Rire aux larmes ou écouter de la musique live un verre à la main.",
                    "it": "Ridere a crepapelle o godersi musica dal vivo con un drink."
                },
                "actionLabel": {
                    "de": "Events heute Abend prüfen",
                    "en": "Check Tonight's Shows",
                    "es": "Ver espectáculos hoy",
                    "fr": "Voir les spectacles ce soir",
                    "it": "Spettacoli dal vivo stasera"
                },
                "actionUrl": "https://www.google.com/search?q=comedy+konzert+heute+abend"
            },
            {
                "id": 7,
                "emoji": "🍷",
                "bg": "from-fuchsia-700 to-slate-900",
                "tag": {
                    "de": "Wohnzimmer-Erlebnis",
                    "en": "Home Tasting",
                    "es": "Cata en Casa",
                    "fr": "Dégustation Maison",
                    "it": "Degustazione a Casa"
                },
                "title": {
                    "de": "Blind-Tasting zuhause (3 Weine, Käse, Schokolade oder Craft-Beer)",
                    "en": "DIY Blind Tasting at Home (Wine, Cheese or Chocolate)",
                    "es": "Cata a Ciegas en Casa (Vinos, Quesos o Chocolate)",
                    "fr": "Dégustation à l'Aveugle (Vins, Fromages, Chocolats)",
                    "it": "Degustazione alla Cieca a Casa (Vino, Formaggi, Cioccolato)"
                },
                "desc": {
                    "de": "3 besondere Sorten holen, Augen verbinden und Punkte von 1–10 vergeben!",
                    "en": "Pick 3 special bottles or snacks and rate them 1–10!",
                    "es": "Comprar 3 variedades especiales y puntuarlas del 1 al 10.",
                    "fr": "Choisir 3 produits spéciaux et leur donner une note de 1 à 10 !",
                    "it": "Prendete 3 bottiglie o formaggi speciali e date i voti da 1 a 10!"
                },
                "actionLabel": {
                    "de": "Ideen für Home-Tasting",
                    "en": "Home Tasting Guide",
                    "es": "Ideas para cata en casa",
                    "fr": "Guide pour dégustation à la maison",
                    "it": "Guida per degustazione casalinga"
                },
                "actionUrl": "https://www.google.com/search?q=wein+und+kaese+tasting+zuhause+machen"
            },
            {
                "id": 8,
                "emoji": "🌌",
                "bg": "from-slate-800 to-blue-950",
                "tag": {
                    "de": "Magisch & Ruhig",
                    "en": "Stargazing",
                    "es": "Bajo las estrellas",
                    "fr": "Sous les Étoiles",
                    "it": "Sotto le Stelle"
                },
                "title": {
                    "de": "Sterne gucken / Nacht-Picknick mit Decke & Thermoskanne",
                    "en": "Stargazing or Balcony Blanket Date",
                    "es": "Ver las Estrellas o Cita Nocturna en Terraza",
                    "fr": "Observer les Étoiles avec Plaid & Thermos",
                    "it": "Guardare le Stelle con Coperta & Tisana Calda"
                },
                "desc": {
                    "de": "Dick einpacken, Musik leise an und in den Nachthimmel schauen.",
                    "en": "Cozy blanket, warm tea or wine, and look up at the stars.",
                    "es": "Manta, copa o té caliente y mirar las estrellas.",
                    "fr": "Plaid bien chaud, thé fumant ou vin, et contemplation du ciel.",
                    "it": "Coperta calda, tè fumante o vino buono e sguardo al cielo."
                },
                "actionLabel": {
                    "de": "Sternenhimmel-App / Spots",
                    "en": "Stargazing Tips",
                    "es": "Ver mapa estelar",
                    "fr": "Conseils pour regarder les étoiles",
                    "it": "Consigli per ammirare le stelle"
                },
                "actionUrl": "https://www.google.com/search?q=sterne+beobachten+orte+tipps"
            },
            {
                "id": 9,
                "emoji": "⛺",
                "bg": "from-orange-600 to-stone-900",
                "tag": {
                    "de": "Kissenburg-Romantik",
                    "en": "Cozy Indoor Camp",
                    "es": "Cine en el suelo",
                    "fr": "Campement Douillet au Salon",
                    "it": "Picnic sul Tappeto"
                },
                "title": {
                    "de": "Wohnzimmer-Picknick mit Lichterkette & Fingerfood",
                    "en": "Living Room Floor Picnic + Fairy Lights",
                    "es": "Pícnic en la Alfombra con Velas y Picoteo",
                    "fr": "Pique-Nique au Sol du Salon avec Guirlandes Lumineuses",
                    "it": "Picnic sul Pavimento del Salotto & Lucine Soffuse"
                },
                "desc": {
                    "de": "Decken und alle Kissen auf den Boden, Kerzen an und mit den Händen essen.",
                    "en": "All pillows on the floor, candles lit, finger food & movies.",
                    "es": "Cojines al suelo, velas y cena de picoteo.",
                    "fr": "Tous les coussins par terre, bougies allumées, bouchées et film.",
                    "it": "Cuscini a terra, candele profumate, stuzzichini e bel film."
                },
                "actionLabel": {
                    "de": "Fingerfood-Ideen öffnen",
                    "en": "Fingerfood Ideas",
                    "es": "Ideas de picoteo",
                    "fr": "Idées de bouchées apéro",
                    "it": "Idee stuzzichini da divano"
                },
                "actionUrl": "https://www.google.com/search?q=fingerfood+zu+zweit+abendessen"
            }
        ]
    },
    "household": {
        "id": "household",
        "category": "chores",
        "mode": "chores",
        "icon": "🧹",
        "gradient": "from-teal-500 to-emerald-600",
        "title": {
            "de": "Haushalts-Deal (Mit Anti-Match!)",
            "en": "Chore Splitter (Anti-Match!)",
            "es": "Reparto del Hogar (¡Anti-Match!)",
            "fr": "Partage des Tâches (Avec Anti-Match !)",
            "it": "Divisione Compiti di Casa (Con Anti-Match!)"
        },
        "sub": {
            "de": "Wer übernimmt was? Wo beide NEIN wischen, entscheidet das Los!",
            "en": "Swipe YES on tasks you'll do. Mutual NO triggers fair tie-breaker!",
            "es": "Desliza SÍ a lo que haces. ¡Doble NO se sortea al 50%!",
            "fr": "Qui s'occupe de quoi ? Si les deux disent NON, le sort décide !",
            "it": "Chi fa cosa? Se entrambi rifiutate col NO, decide la sorte!"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "🛒",
                "bg": "from-sky-600 to-blue-900",
                "tag": {
                    "de": "Versorgung",
                    "en": "Groceries",
                    "es": "Supermercado",
                    "fr": "Courses & Sacs",
                    "it": "Spesa al Supermercato"
                },
                "title": {
                    "de": "Einkaufen gehen & Taschen schleppen",
                    "en": "Grocery Shopping & Carrying Bags",
                    "es": "Ir al Supermercado y Cargar Bolsas",
                    "fr": "Faire les courses & porter les sacs",
                    "it": "Fare la spesa e portare su le buste"
                },
                "desc": {
                    "de": "Rechts = Mach ich heute! Links = Bitte nicht ich!",
                    "en": "Swipe Right = I'll do it! Left = Please not me!",
                    "es": "Derecha = ¡Yo voy! Izquierda = ¡Paso!",
                    "fr": "Swipe à droite = Je m'en charge ! À gauche = Pitié pas moi !",
                    "it": "Destra = Me ne occupo io! Sinistra = Ti prego io no!"
                },
                "actionLabel": {
                    "de": "Einkaufsliste öffnen",
                    "en": "Done",
                    "es": "Listo",
                    "fr": "Compris",
                    "it": "Fatto"
                },
                "actionUrl": "#"
            },
            {
                "id": 1,
                "emoji": "🍽️",
                "bg": "from-emerald-600 to-teal-900",
                "tag": {
                    "de": "Küchen-Dienst",
                    "en": "Kitchen Duty",
                    "es": "Cocina",
                    "fr": "Cuisine & Vaisselle",
                    "it": "Cucina & Lavastoviglie"
                },
                "title": {
                    "de": "Küche aufräumen & Spülmaschine",
                    "en": "Clean Kitchen & Dishwasher",
                    "es": "Recoger Cocina y Lavavajillas",
                    "fr": "Ranger la cuisine & vider le lave-vaisselle",
                    "it": "Pulire la cucina e svuotare la lavastoviglie"
                },
                "desc": {
                    "de": "Arbeitsflächen abwischen, Geschirr ein-/ausräumen.",
                    "en": "Wipe counters and load/unload dishwasher.",
                    "es": "Limpiar encimera y poner/vaciar lavavajillas.",
                    "fr": "Nettoyer les plans de travail et ranger la vaisselle propre.",
                    "it": "Passare i piani e sistemare piatti e bicchieri."
                },
                "actionLabel": {
                    "de": "Erledigt",
                    "en": "Done",
                    "es": "Listo",
                    "fr": "Compris",
                    "it": "Fatto"
                },
                "actionUrl": "#"
            },
            {
                "id": 2,
                "emoji": "🧹",
                "bg": "from-purple-600 to-indigo-900",
                "tag": {
                    "de": "Boden-Action",
                    "en": "Floors",
                    "es": "Suelos",
                    "fr": "Sols",
                    "it": "Pavimenti"
                },
                "title": {
                    "de": "Staubsaugen & Boden wischen",
                    "en": "Vacuuming & Mopping Floors",
                    "es": "Pasar la Aspiradora y Fregar",
                    "fr": "Passer l'aspirateur & la serpillère",
                    "it": "Passare l'aspirapolvere e lavare i pavimenti"
                },
                "desc": {
                    "de": "Einmal durch alle Zimmer für frisches Barfuß-Gefühl.",
                    "en": "Quick vacuum run through the rooms.",
                    "es": "Dejar el suelo impecable en toda la casa.",
                    "fr": "Un coup d'aspirateur rapide dans toutes les pièces.",
                    "it": "Una passata veloce di aspirapolvere in tutte le stanze."
                },
                "actionLabel": {
                    "de": "Erledigt",
                    "en": "Done",
                    "es": "Listo",
                    "fr": "Compris",
                    "it": "Fatto"
                },
                "actionUrl": "#"
            },
            {
                "id": 3,
                "emoji": "🧺",
                "bg": "from-pink-600 to-rose-900",
                "tag": {
                    "de": "Textil-Pflege",
                    "en": "Laundry",
                    "es": "Colada",
                    "fr": "Linge",
                    "it": "Bucato"
                },
                "title": {
                    "de": "Wäsche waschen, aufhängen & falten",
                    "en": "Wash, Hang & Fold Laundry",
                    "es": "Lavar, Tender y Doblar Ropa",
                    "fr": "Laver, étendre & plier le linge",
                    "it": "Lavare, stendere e piegare il bucato"
                },
                "desc": {
                    "de": "Maschine anwerfen und den Wäscheberg besiegen.",
                    "en": "Conquer the laundry basket today.",
                    "es": "Acabar con la montaña de ropa.",
                    "fr": "Venir à bout du panier à linge aujourd'hui.",
                    "it": "Affrontare e svuotare la cesta dei panni oggi."
                },
                "actionLabel": {
                    "de": "Erledigt",
                    "en": "Done",
                    "es": "Listo",
                    "fr": "Compris",
                    "it": "Fatto"
                },
                "actionUrl": "#"
            },
            {
                "id": 4,
                "emoji": "🗑️",
                "bg": "from-amber-600 to-stone-900",
                "tag": {
                    "de": "Kurzer Gang raus",
                    "en": "Quick Outside Run",
                    "es": "Bajar a la calle",
                    "fr": "Poubelles & Tri",
                    "it": "Spazzatura & Differenziata"
                },
                "title": {
                    "de": "Müll, Altpapier & Altglas runterbringen",
                    "en": "Take Out Trash & Recycling",
                    "es": "Bajar la Basura y Reciclaje",
                    "fr": "Sortir les poubelles & le recyclage",
                    "it": "Buttare la spazzatura, carta e vetro"
                },
                "desc": {
                    "de": "In 5 Minuten erledigt, aber keiner geht gern zur Tonne.",
                    "en": "Takes 5 minutes, yet nobody wants to go.",
                    "es": "Son 5 minutos pero nadie quiere ir.",
                    "fr": "Ça prend 5 minutes, mais personne n'a envie d'y aller.",
                    "it": "Ci vogliono 5 minuti, ma nessuno vuole mai scendere."
                },
                "actionLabel": {
                    "de": "Erledigt",
                    "en": "Done",
                    "es": "Listo",
                    "fr": "Compris",
                    "it": "Fatto"
                },
                "actionUrl": "#"
            },
            {
                "id": 5,
                "emoji": "🫧",
                "bg": "from-cyan-600 to-blue-950",
                "tag": {
                    "de": "Glanz-Faktor",
                    "en": "Bathroom",
                    "es": "Baño",
                    "fr": "Salle de Bain",
                    "it": "Bagno & Specchio"
                },
                "title": {
                    "de": "Bad, Waschbecken & Spiegel putzen",
                    "en": "Clean Bathroom & Mirror",
                    "es": "Limpiar el Baño y Espejo",
                    "fr": "Nettoyer la salle de bain, le lavabo & le miroir",
                    "it": "Pulire il bagno, lavandino e specchio"
                },
                "desc": {
                    "de": "Einmal auf Hochglanz bringen für Hotel-Feeling.",
                    "en": "Make the sink and mirror sparkle again.",
                    "es": "Dejar el baño reluciente como un hotel.",
                    "fr": "Faire briller le lavabo, la douche et le miroir.",
                    "it": "Far brillare lavandino, rubinetti e specchio."
                },
                "actionLabel": {
                    "de": "Erledigt",
                    "en": "Done",
                    "es": "Listo",
                    "fr": "Compris",
                    "it": "Fatto"
                },
                "actionUrl": "#"
            },
            {
                "id": 6,
                "emoji": "🛏️",
                "bg": "from-indigo-600 to-slate-900",
                "tag": {
                    "de": "Hotel-Gefühl",
                    "en": "Fresh Sheets",
                    "es": "Dormitorio",
                    "fr": "Draps Propres",
                    "it": "Lenzuola Fresche"
                },
                "title": {
                    "de": "Betten frisch beziehen & Schlafzimmer lüften",
                    "en": "Change Bed Sheets & Air Out Bedroom",
                    "es": "Cambiar las Sábanas y Ventilar",
                    "fr": "Changer les draps & aérer la chambre",
                    "it": "Cambiare le lenzuola e arieggiare la camera"
                },
                "desc": {
                    "de": "Nichts schläft sich besser als frische Bettwäsche am Abend!",
                    "en": "Nothing beats sleeping in fresh sheets tonight.",
                    "es": "Dormir hoy en sábanas recién puestas.",
                    "fr": "Rien ne vaut le bonheur de dormir dans des draps frais ce soir.",
                    "it": "Niente batte la sensazione di dormire in lenzuola pulite stasera."
                },
                "actionLabel": {
                    "de": "Erledigt",
                    "en": "Done",
                    "es": "Listo",
                    "fr": "Compris",
                    "it": "Fatto"
                },
                "actionUrl": "#"
            },
            {
                "id": 7,
                "emoji": "🍾",
                "bg": "from-lime-700 to-stone-900",
                "tag": {
                    "de": "Flaschen-Mission",
                    "en": "Bottle Return",
                    "es": "Envases",
                    "fr": "Verre & Boissons",
                    "it": "Bottiglie & Bibite"
                },
                "title": {
                    "de": "Pfandflaschen wegbringen & Getränke holen",
                    "en": "Return Empty Bottles & Buy Drinks",
                    "es": "Devolver Envases y Comprar Bebidas",
                    "fr": "Déposer le verre / consigne & racheter de l'eau",
                    "it": "Portare il vetro al cassonetto & comprare l'acqua"
                },
                "desc": {
                    "de": "Die Pfandtüte in der Ecke endlich in Guthaben verwandeln.",
                    "en": "Turn that bag of empty bottles into cash.",
                    "es": "Vaciar la bolsa de botellas acumuladas.",
                    "fr": "Débarrasser la réserve de bouteilles vides.",
                    "it": "Liberare l'ingresso dalle bottiglie e casse vuote."
                },
                "actionLabel": {
                    "de": "Erledigt",
                    "en": "Done",
                    "es": "Listo",
                    "fr": "Compris",
                    "it": "Fatto"
                },
                "actionUrl": "#"
            },
            {
                "id": 8,
                "emoji": "🍳",
                "bg": "from-orange-600 to-red-900",
                "tag": {
                    "de": "Chefkoch heute",
                    "en": "Chef Duty",
                    "es": "Cocinar hoy",
                    "fr": "Chef Cuisinier",
                    "it": "Ai Fornelli"
                },
                "title": {
                    "de": "Heute das Kochen / Essen machen übernehmen",
                    "en": "Cook Dinner Tonight",
                    "es": "Encargarse de Hacer la Cena Hoy",
                    "fr": "Cuisiner le repas de ce soir",
                    "it": "Cucinare la cena stasera per entrambi"
                },
                "desc": {
                    "de": "Einer kocht lecker, der andere darf die Füße hochlegen.",
                    "en": "One cooks the meal, the other relaxes.",
                    "es": "Uno cocina rico y el otro descansa.",
                    "fr": "L'un prépare le dîner avec amour, l'autre souffle.",
                    "it": "Uno si mette ai fornelli, l'altro si rilassa."
                },
                "actionLabel": {
                    "de": "Erledigt",
                    "en": "Done",
                    "es": "Listo",
                    "fr": "Compris",
                    "it": "Fatto"
                },
                "actionUrl": "#"
            },
            {
                "id": 9,
                "emoji": "🪴",
                "bg": "from-emerald-700 to-green-950",
                "tag": {
                    "de": "Grüner Daumen",
                    "en": "Plants & Surfaces",
                    "es": "Plantas y Polvo",
                    "fr": "Plantes & Poussière",
                    "it": "Piante & Polvere"
                },
                "title": {
                    "de": "Pflanzen gießen & Staub wischen (Regale / TV)",
                    "en": "Water Plants & Dust Surfaces",
                    "es": "Regar las Plantas y Quitar el Polvo",
                    "fr": "Arroser les plantes & faire la poussière",
                    "it": "Innaffiare le piante e spolverare i mobili"
                },
                "desc": {
                    "de": "Damit die Zimmerpflanzen überleben und der Fernseher glänzt.",
                    "en": "Keep the houseplants alive and shelves clean.",
                    "es": "Que las plantas sobrevivan y los muebles brillen.",
                    "fr": "Garder les plantes vertes en vie et dépoussiérer les étagères.",
                    "it": "Mantenere vive le piante verdi e pulire mensole e TV."
                },
                "actionLabel": {
                    "de": "Erledigt",
                    "en": "Done",
                    "es": "Listo",
                    "fr": "Compris",
                    "it": "Fatto"
                },
                "actionUrl": "#"
            },
            {
                "id": 10,
                "emoji": "🧊",
                "bg": "from-sky-700 to-slate-900",
                "tag": {
                    "de": "Ordnungs-Check",
                    "en": "Fridge & Couch",
                    "es": "Orden rápido",
                    "fr": "Salon & Frigo",
                    "it": "Salotto & Frigo"
                },
                "title": {
                    "de": "Wohnzimmer-Reset & Kühlschrank ausmisten",
                    "en": "Tidy Living Room & Clear Fridge",
                    "es": "Ordenar el Salón y Revisar la Nevera",
                    "fr": "Ranger le salon & trier le frigo",
                    "it": "Riordinare il salotto & controllare il frigo"
                },
                "desc": {
                    "de": "Decken falten, Gläser wegräumen und Abgelaufenes aussortieren.",
                    "en": "Fold blankets, clear cups and check the fridge.",
                    "es": "Doblar mantas, recoger vasos y ordenar nevera.",
                    "fr": "Plier les plaids, débarrasser les tasses et vérifier les dates.",
                    "it": "Piegare i plaid, togliere le tazze e pulire il ripiano del frigo."
                },
                "actionLabel": {
                    "de": "Erledigt",
                    "en": "Done",
                    "es": "Listo",
                    "fr": "Compris",
                    "it": "Fatto"
                },
                "actionUrl": "#"
            },
            {
                "id": 11,
                "emoji": "📦",
                "bg": "from-amber-700 to-zinc-900",
                "tag": {
                    "de": "Versand-Helden",
                    "en": "Returns & Packages",
                    "es": "Paquetes",
                    "fr": "Colis & Retours",
                    "it": "Resi & Pacchi"
                },
                "title": {
                    "de": "Retouren & Pakete zur Packstation / Post bringen",
                    "en": "Drop Off Returns & Packages",
                    "es": "Llevar Paquetes o Devoluciones a Correos",
                    "fr": "Déposer les retours et colis au relais postal",
                    "it": "Portare i pacchi di reso alle poste o al locker"
                },
                "desc": {
                    "de": "Bevor die Rückgabefrist abläuft schnell wegbringen!",
                    "en": "Drop off those return boxes before the deadline!",
                    "es": "Llevar las cajas antes de que pase el plazo.",
                    "fr": "Déposer enfin ces cartons avant la date limite !",
                    "it": "Spedire finalmente quei resi prima che scada il termine!"
                },
                "actionLabel": {
                    "de": "Erledigt",
                    "en": "Done",
                    "es": "Listo",
                    "fr": "Compris",
                    "it": "Fatto"
                },
                "actionUrl": "#"
            }
        ]
    },
    "whoseturn": {
        "id": "whoseturn",
        "category": "chores",
        "mode": "chores",
        "icon": "⚡",
        "gradient": "from-amber-500 to-red-600",
        "title": {
            "de": "Wer muss jetzt ran? (Drückeberger-Check)",
            "en": "Whose Turn Is It? (No Excuses)",
            "es": "¿A quién le toca hoy?",
            "fr": "À Qui le Tour ? (Zéro Défile)",
            "it": "A Chi Tocca Adesso? (Zero Scuse)"
        },
        "sub": {
            "de": "Einkaufen, Fahren, Aufstehen – inklusive Anti-Match-Auslosung!",
            "en": "Errands, driving, getting up – with automatic tie-breaker!",
            "es": "Recados rápidos con sorteo automático si nadie quiere",
            "fr": "Courses, volant, se lever : tirage au sort si personne ne veut !",
            "it": "Commissioni, guidare, alzarsi: estrazione equa se nessuno vuole!"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "🏃‍♂️",
                "bg": "from-orange-600 to-red-800",
                "tag": {
                    "de": "Kurze Mission",
                    "en": "Quick Errand",
                    "es": "Recado rápido",
                    "fr": "Course Express",
                    "it": "Commissione Veloce"
                },
                "title": {
                    "de": "Schnell noch zum Supermarkt / Bäcker flitzen",
                    "en": "Quick Run to the Store / Bakery",
                    "es": "Bajar un momento a comprar pan / súper",
                    "fr": "Aller vite à la supérette ou à la boulangerie",
                    "it": "Volare al supermercato o dal fornaio al volo"
                },
                "desc": {
                    "de": "Rechts = Ich geh schon! Links = Ich bleib sitzen!",
                    "en": "Right = I'll go! Left = I'm staying on the couch!",
                    "es": "Derecha = ¡Voy yo! Izquierda = ¡No me muevo!",
                    "fr": "Droite = J'y vais ! Gauche = Je reste au chaud sur le canapé !",
                    "it": "Destra = Ci vado io! Sinistra = Resto piantato sul divano!"
                },
                "actionLabel": {
                    "de": "Okay",
                    "en": "Okay",
                    "es": "Vale",
                    "fr": "D'accord",
                    "it": "Accetto"
                },
                "actionUrl": "#"
            },
            {
                "id": 1,
                "emoji": "🚗",
                "bg": "from-slate-700 to-slate-950",
                "tag": {
                    "de": "Chauffeur-Ehre",
                    "en": "Designated Driver",
                    "es": "Conductor hoy",
                    "fr": "Conducteur Désigné",
                    "it": "Autista Designato"
                },
                "title": {
                    "de": "Heute Abend fahren / abholen",
                    "en": "Be the Designated Driver Tonight",
                    "es": "Conducir hoy / Llevar el coche",
                    "fr": "Prendre le volant & conduire ce soir",
                    "it": "Guidare l'auto stasera per entrambi"
                },
                "desc": {
                    "de": "Wer übernimmt heute das Steuer?",
                    "en": "Who is taking the wheel tonight?",
                    "es": "¿Quién se encarga de conducir hoy?",
                    "fr": "Qui prend le volant pour l'aller et le retour ?",
                    "it": "Chi si mette al volante stasera?"
                },
                "actionLabel": {
                    "de": "Okay",
                    "en": "Okay",
                    "es": "Vale",
                    "fr": "D'accord",
                    "it": "Accetto"
                },
                "actionUrl": "#"
            },
            {
                "id": 2,
                "emoji": "🔔",
                "bg": "from-indigo-600 to-purple-900",
                "tag": {
                    "de": "Es hat geklingelt",
                    "en": "Doorbell Rang",
                    "es": "Suena el timbre",
                    "fr": "On a Sonné !",
                    "it": "Hanno Suonato!"
                },
                "title": {
                    "de": "Zur Tür gehen & Lieferdienst / Paket annehmen",
                    "en": "Answer the Door / Grab Delivery",
                    "es": "Abrir la puerta al repartidor",
                    "fr": "Ouvrir la porte & réceptionner la livraison / le colis",
                    "it": "Andare ad aprire alla porta e prendere la consegna"
                },
                "desc": {
                    "de": "Aus der gemütlichen Decke schälen und zur Tür gehen.",
                    "en": "Leave the cozy couch and answer the door.",
                    "es": "Salir del sofá para recoger el pedido.",
                    "fr": "Quitter le canapé douillet pour aller ouvrir.",
                    "it": "Alzarsi dal comodo divano e andare ad aprire."
                },
                "actionLabel": {
                    "de": "Okay",
                    "en": "Okay",
                    "es": "Vale",
                    "fr": "D'accord",
                    "it": "Accetto"
                },
                "actionUrl": "#"
            },
            {
                "id": 3,
                "emoji": "🍿",
                "bg": "from-emerald-600 to-teal-900",
                "tag": {
                    "de": "Couch-Service",
                    "en": "Couch Butler",
                    "es": "Servicio de sofá",
                    "fr": "Majordome Canapé",
                    "it": "Maggiordomo da Divano"
                },
                "title": {
                    "de": "Aufstehen & Snacks / Getränke für beide holen",
                    "en": "Get Up & Fetch Snacks/Drinks",
                    "es": "Levantarse a por snacks y bebidas",
                    "fr": "Se lever pour apporter boissons & snacks aux deux",
                    "it": "Alzarsi e portare snack / da bere per entrambi"
                },
                "desc": {
                    "de": "Einmal in die Küche gehen und Nachschub liefern.",
                    "en": "Kitchen run to restock the couch.",
                    "es": "Ir a la cocina y traer provisiones.",
                    "fr": "Aller-retour en cuisine pour ravitailler le salon.",
                    "it": "Spedizione in cucina per rifornire la postazione divano."
                },
                "actionLabel": {
                    "de": "Okay",
                    "en": "Okay",
                    "es": "Vale",
                    "fr": "D'accord",
                    "it": "Accetto"
                },
                "actionUrl": "#"
            },
            {
                "id": 4,
                "emoji": "📞",
                "bg": "from-rose-600 to-pink-900",
                "tag": {
                    "de": "Orga-Held",
                    "en": "Organizer",
                    "es": "Organizador",
                    "fr": "Organisation",
                    "it": "Organizzatore"
                },
                "title": {
                    "de": "Anrufen, reservieren oder Bestellung aufgeben",
                    "en": "Make the Phone Call / Reservation",
                    "es": "Llamar para reservar o hacer el pedido",
                    "fr": "Passer le coup de fil / faire la réservation",
                    "it": "Telefonare per prenotare o fare l'ordine"
                },
                "desc": {
                    "de": "Für alle mit Telefon-Allergie: Wer regelt die Buchung?",
                    "en": "Who handles the phone call or booking?",
                    "es": "¿Quién se encarga de llamar o reservar?",
                    "fr": "Qui prend son courage à deux mains pour téléphoner ?",
                    "it": "Chi si prende la briga di fare la telefonata?"
                },
                "actionLabel": {
                    "de": "Okay",
                    "en": "Okay",
                    "es": "Vale",
                    "fr": "D'accord",
                    "it": "Accetto"
                },
                "actionUrl": "#"
            },
            {
                "id": 5,
                "emoji": "☕",
                "bg": "from-amber-600 to-stone-900",
                "tag": {
                    "de": "Morgen-Held",
                    "en": "Morning Coffee",
                    "es": "Café de mañana",
                    "fr": "Café du Matin",
                    "it": "Caffè del Mattino"
                },
                "title": {
                    "de": "Morgen früh zuerst aufstehen & Kaffee machen",
                    "en": "Get Up First & Make Morning Coffee",
                    "es": "Levantarse Primero y Hacer el Café",
                    "fr": "Se lever le premier demain & préparer le café chaud",
                    "it": "Alzarsi prima domattina & preparare il caffè"
                },
                "desc": {
                    "de": "Der andere darf 15 Minuten länger im warmen Bett bleiben!",
                    "en": "The other person gets 15 extra minutes in bed!",
                    "es": "El otro se queda 15 minutos más en la cama.",
                    "fr": "L'autre gagne 15 minutes supplémentaires sous la couette !",
                    "it": "L'altra persona guadagna 15 minuti di letto extra!"
                },
                "actionLabel": {
                    "de": "Okay",
                    "en": "Okay",
                    "es": "Vale",
                    "fr": "D'accord",
                    "it": "Accetto"
                },
                "actionUrl": "#"
            },
            {
                "id": 6,
                "emoji": "🐕",
                "bg": "from-green-700 to-teal-950",
                "tag": {
                    "de": "Frische Luft",
                    "en": "Pet / Evening Walk",
                    "es": "Paseo / Mascota",
                    "fr": "Balade Animaux",
                    "it": "Animali Domestici"
                },
                "title": {
                    "de": "Gassi-Runde / Haustier füttern / Kurzer Abendgang",
                    "en": "Walk the Dog / Feed Pets",
                    "es": "Sacar al Perro / Dar de Comer a la Mascota",
                    "fr": "Sortir le chien / nourrir les animaux",
                    "it": "Portare fuori il cane / dare la pappa agli animali"
                },
                "desc": {
                    "de": "Noch mal kurz in die Jacke schlüpfen oder den Napf füllen.",
                    "en": "Put on a jacket or fill up the food bowl.",
                    "es": "Ponerse la chaqueta un momento o llenar el cuenco.",
                    "fr": "Enfiler son manteau ou remplir la gamelle.",
                    "it": "Mettersi la giacca per il giretto o riempire la ciotola."
                },
                "actionLabel": {
                    "de": "Okay",
                    "en": "Okay",
                    "es": "Vale",
                    "fr": "D'accord",
                    "it": "Accetto"
                },
                "actionUrl": "#"
            },
            {
                "id": 7,
                "emoji": "🥡",
                "bg": "from-red-600 to-amber-900",
                "tag": {
                    "de": "Selbstabholer",
                    "en": "Pickup Run",
                    "es": "Recoger pedido",
                    "fr": "Récupérer la Commande",
                    "it": "Ritiro Asporto"
                },
                "title": {
                    "de": "Essen selbst abholen fahren (statt 1 Stunde auf Lieferdienst warten)",
                    "en": "Go Pick Up the Takeout Order",
                    "es": "Ir a Recoger la Comida (Más Rápido)",
                    "fr": "Aller chercher le repas à emporter en voiture / à pied",
                    "it": "Andare a ritirare la cena d'asporto"
                },
                "desc": {
                    "de": "Geht doppelt so schnell und das Essen kommt noch richtig heiß an!",
                    "en": "Twice as fast and the food stays piping hot!",
                    "es": "Llega el doble de rápido y mucho más caliente.",
                    "fr": "Deux fois plus rapide et le repas reste brûlant !",
                    "it": "Molto più veloce del rider e il cibo arriva bollente!"
                },
                "actionLabel": {
                    "de": "Okay",
                    "en": "Okay",
                    "es": "Vale",
                    "fr": "D'accord",
                    "it": "Accetto"
                },
                "actionUrl": "#"
            },
            {
                "id": 8,
                "emoji": "⛽",
                "bg": "from-cyan-700 to-slate-900",
                "tag": {
                    "de": "Auto-Pflicht",
                    "en": "Car Care",
                    "es": "Coche",
                    "fr": "Entretien Voiture",
                    "it": "Cura dell'Auto"
                },
                "title": {
                    "de": "Auto tanken / laden oder durch die Waschstraße fahren",
                    "en": "Refuel / Charge or Wash the Car",
                    "es": "Echar Gasolina / Cargar o Lavar el Coche",
                    "fr": "Faire le plein / recharger ou laver la voiture",
                    "it": "Fare benzina / ricaricare o lavare l'auto"
                },
                "desc": {
                    "de": "Damit bei der nächsten Fahrt nicht sofort die Reserveleuchte blinkt.",
                    "en": "So the tank isn't on zero for the next trip.",
                    "es": "Para no salir en reserva en el próximo viaje.",
                    "fr": "Pour ne pas être à sec au prochain grand départ.",
                    "it": "Così il serbatoio non è a zero alla prossima partenza."
                },
                "actionLabel": {
                    "de": "Okay",
                    "en": "Okay",
                    "es": "Vale",
                    "fr": "D'accord",
                    "it": "Accetto"
                },
                "actionUrl": "#"
            },
            {
                "id": 9,
                "emoji": "🔌",
                "bg": "from-violet-700 to-indigo-950",
                "tag": {
                    "de": "Vor dem Einschlafen",
                    "en": "Night Check",
                    "es": "Ronda nocturna",
                    "fr": "Tour de Nuit",
                    "it": "Giro di Chiusura"
                },
                "title": {
                    "de": "Abend-Runde: Lichter aus, Tür abschließen & Handys ans Kabel",
                    "en": "Night Check: Lock Up, Lights Off & Plug Phones",
                    "es": "Ronda Nocturna: Cerrar Puerta y Apagar Luces",
                    "fr": "Éteindre les lumières, fermer à clé & brancher les téléphones",
                    "it": "Giro notturno: chiudere a chiave, spegnere luci & caricabatterie"
                },
                "desc": {
                    "de": "Noch einmal aufstehen, Fenster prüfen und alles dunkel machen.",
                    "en": "Last one up checks the doors and turns off all lights.",
                    "es": "Último paseo para apagar todo y cerrar con llave.",
                    "fr": "Le dernier levé vérifie le verrou et éteint tout.",
                    "it": "L'ultimo che va a letto controlla la porta e spegne tutto."
                },
                "actionLabel": {
                    "de": "Okay",
                    "en": "Okay",
                    "es": "Vale",
                    "fr": "D'accord",
                    "it": "Accetto"
                },
                "actionUrl": "#"
            }
        ]
    },
    "vacation": {
        "id": "vacation",
        "category": "trips",
        "mode": "match",
        "icon": "✈️",
        "gradient": "from-sky-500 to-indigo-600",
        "title": {
            "de": "Urlaubs- & Trip-Kompass",
            "en": "Next Trip Matcher",
            "es": "Próximo Viaje o Escapada",
            "fr": "Boussole Vacances & Escapades",
            "it": "Bussola Viaggi & Vacanze"
        },
        "sub": {
            "de": "Strand, Berge, Städtetrip oder Roadtrip?",
            "en": "Beach, mountains, city break or roadtrip?",
            "es": "¿Playa, montaña, ciudad o ruta en coche?",
            "fr": "Plage, montagne, city-break ou road-trip ?",
            "it": "Spiaggia, montagna, weekend in città o road trip?"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "🏖️",
                "bg": "from-cyan-500 to-blue-700",
                "tag": {
                    "de": "Sonne & Meer",
                    "en": "Sun & Ocean",
                    "es": "Sol y Playa",
                    "fr": "Soleil & Océan",
                    "it": "Sole & Mare"
                },
                "title": {
                    "de": "Strandurlaub, Meer & Pool-Liege",
                    "en": "Beach Resort & Ocean Breeze",
                    "es": "Playa, Mar y Relax total",
                    "fr": "Séjour Plage, Vagues & Transat au Soleil",
                    "it": "Resort sul Mare, Spiaggia & Lettino al Sole"
                },
                "desc": {
                    "de": "Kopf aus, Meeresrauschen, Buch lesen und kaltes Getränk.",
                    "en": "Zero schedule, warm ocean and cold drinks.",
                    "es": "Cero horarios, brisa marina y descanso.",
                    "fr": "Zéro horaire, eau turquoise et cocktails glacés.",
                    "it": "Zero orari, mare cristallino e bibite fresche."
                },
                "actionLabel": {
                    "de": "Strand-Ziele entdecken",
                    "en": "Explore Beach Trips",
                    "es": "Ver destinos de playa",
                    "fr": "Explorer séjours plage",
                    "it": "Cerca viaggi al mare"
                },
                "actionUrl": "https://www.google.com/search?q=sch%C3%B6nste+strandurlaub+ziele+europa"
            },
            {
                "id": 1,
                "emoji": "🏛️",
                "bg": "from-amber-600 to-rose-700",
                "tag": {
                    "de": "Kultur & Food",
                    "en": "City Break",
                    "es": "Escapada Urbana",
                    "fr": "City Break",
                    "it": "Weekend in Città"
                },
                "title": {
                    "de": "Städtetrip Europa (Tapas, Cafés, Sightseeing)",
                    "en": "European City Break & Food Tour",
                    "es": "Escapada Europea (Gastronomía y Cultura)",
                    "fr": "Escapade Européenne & Découvertes Gourmandes",
                    "it": "City Break in Europa (Tapas, Caffè & Monumenti)"
                },
                "desc": {
                    "de": "Durch fremde Gassen schlendern, Märkte und coole Viertel entdecken.",
                    "en": "Explore new streets, local markets and great food.",
                    "es": "Callejear, probar mercados y descubrir una ciudad.",
                    "fr": "Rues animées, marchés locaux et bonnes adresses culinaires.",
                    "it": "Vicoli storici, mercati caratteristici e cibo fantastico."
                },
                "actionLabel": {
                    "de": "Top Städtetrips ansehen",
                    "en": "Top City Breaks",
                    "es": "Mejores escapadas europeas",
                    "fr": "Top destinations européennes",
                    "it": "Migliori città d'Europa"
                },
                "actionUrl": "https://www.google.com/search?q=beste+staedtetrips+europa+wochenende"
            },
            {
                "id": 2,
                "emoji": "🏔️",
                "bg": "from-emerald-700 to-slate-900",
                "tag": {
                    "de": "Natur & Panorama",
                    "en": "Nature & Views",
                    "es": "Naturaleza",
                    "fr": "Nature & Grands Espaces",
                    "it": "Natura & Vette"
                },
                "title": {
                    "de": "Berghütte, Wandern & Bergsee",
                    "en": "Mountain Cabin & Alpine Lakes",
                    "es": "Montaña, Cabaña y Naturaleza",
                    "fr": "Chalet en Montagne, Rando & Lacs Alpins",
                    "it": "Baita in Montagna, Sentieri & Laghi Alpini"
                },
                "desc": {
                    "de": "Frische Bergluft, Panorama-Aussicht und abends Hüttenzauber.",
                    "en": "Crisp mountain air, epic views and cozy cabin nights.",
                    "es": "Aire puro, rutas increíbles y cabaña acogedora.",
                    "fr": "Air pur, panoramas grandioses et soirées au coin du feu.",
                    "it": "Aria pura, viste mozzafiato e serate intime in baita."
                },
                "actionLabel": {
                    "de": "Berg- & Hütten-Ideen",
                    "en": "Mountain Getaways",
                    "es": "Escapadas de montaña",
                    "fr": "Escapades en montagne",
                    "it": "Vacanze in montagna"
                },
                "actionUrl": "https://www.google.com/search?q=berghuette+kurzurlaub+ideen"
            },
            {
                "id": 3,
                "emoji": "🚐",
                "bg": "from-orange-600 to-amber-900",
                "tag": {
                    "de": "Freiheit pur",
                    "en": "Freedom",
                    "es": "Libertad",
                    "fr": "Liberté Totale",
                    "it": "Pura Libertà"
                },
                "title": {
                    "de": "Roadtrip entlang der Küste",
                    "en": "Coastal Roadtrip Adventure",
                    "es": "Roadtrip por la Costa",
                    "fr": "Road-Trip Panoramique le Long des Côtes",
                    "it": "Road Trip Panoramico Lungo la Costa"
                },
                "desc": {
                    "de": "Gute Playlist, jeden Tag ein neuer Ort und spontane Stopps.",
                    "en": "Great playlist, scenic routes and spontaneous stops.",
                    "es": "Buena música, paradas espontáneas y vistas al mar.",
                    "fr": "Bonne musique, routes splendides et arrêts spontanés.",
                    "it": "Ottima musica, strade panoramiche e tappe improvvisate."
                },
                "actionLabel": {
                    "de": "Schönste Roadtrip-Routen",
                    "en": "Best Roadtrip Routes",
                    "es": "Mejores rutas en coche",
                    "fr": "Meilleurs itinéraires de road-trip",
                    "it": "Migliori itinerari in auto"
                },
                "actionUrl": "https://www.google.com/search?q=schoenste+roadtrips+europa"
            },
            {
                "id": 4,
                "emoji": "🧖‍♀️",
                "bg": "from-teal-600 to-cyan-950",
                "tag": {
                    "de": "Bademantel-Modus",
                    "en": "Wellness Hotel",
                    "es": "Hotel Spa",
                    "fr": "Hôtel Bien-être",
                    "it": "Hotel con Spa"
                },
                "title": {
                    "de": "Wellness- & Spa-Hotel mit Infinity-Pool & Halbpension",
                    "en": "Luxury Spa & Wellness Hotel",
                    "es": "Hotel Balneario con Spa y Gastronomía",
                    "fr": "Hôtel Spa & Bien-être avec Piscine Chauffée",
                    "it": "Hotel Spa & Benessere con Piscina a Sfioro"
                },
                "desc": {
                    "de": "Sauna, Massage, beheizter Außenpool und abends ein 4-Gänge-Menü.",
                    "en": "Heated infinity pool, massages and great food.",
                    "es": "Piscina climatizada, sauna y cena increíble.",
                    "fr": "Piscine chauffée, massages et dîners gourmands.",
                    "it": "Piscina panoramica riscaldata, massaggi e ottima cucina."
                },
                "actionLabel": {
                    "de": "Wellnesshotels entdecken",
                    "en": "Find Spa Hotels",
                    "es": "Ver hoteles con spa",
                    "fr": "Trouver des hôtels spa",
                    "it": "Trova hotel con spa"
                },
                "actionUrl": "https://www.google.com/search?q=beste+wellnesshotels+kurzurlaub"
            },
            {
                "id": 5,
                "emoji": "🏡",
                "bg": "from-lime-700 to-emerald-950",
                "tag": {
                    "de": "Privat & Ungestört",
                    "en": "Private Villa / AirBnB",
                    "es": "Casa o Villa",
                    "fr": "Villa Privée / Airbnb",
                    "it": "Villa con Piscina / Airbnb"
                },
                "title": {
                    "de": "Eigenes Ferienhaus / Finca (mit Pool, Kamin oder Garten)",
                    "en": "Cozy AirBnB Cabin or Pool Villa",
                    "es": "Casa Rural o Villa con Piscina",
                    "fr": "Maison de Vacances avec Piscine ou Cheminée",
                    "it": "Baita Privata o Villa con Piscina Esclusiva"
                },
                "desc": {
                    "de": "Ausschlafen ohne Frühstückszeiten, grillen und volle Privatsphäre.",
                    "en": "Zero hotel schedules, private pool or fireplace.",
                    "es": "Cero horarios de hotel, barbacoa y privacidad total.",
                    "fr": "Zéro contrainte d'hôtel, piscine privée et calme absolu.",
                    "it": "Nessun orario d'albergo, piscina privata o camino acceso."
                },
                "actionLabel": {
                    "de": "Besondere Unterkünfte suchen",
                    "en": "Explore Unique Stays",
                    "es": "Ver casas especiales",
                    "fr": "Découvrir logements d'exception",
                    "it": "Cerca case uniche su Airbnb"
                },
                "actionUrl": "https://www.google.com/search?q=besondere+ferienhaeuser+finca+kurzurlaub"
            },
            {
                "id": 6,
                "emoji": "🏝️",
                "bg": "from-blue-600 to-indigo-950",
                "tag": {
                    "de": "Insel-Gefühl",
                    "en": "Island Hopping",
                    "es": "Islas",
                    "fr": "Îles Méditerranéennes",
                    "it": "Isole da Sogno"
                },
                "title": {
                    "de": "Insel-Urlaub (Mallorca, Griechenland, Kanaren oder Azoren)",
                    "en": "Mediterranean or Atlantic Island Escape",
                    "es": "Escapada a una Isla (Baleares, Canarias, Grecia)",
                    "fr": "Séjour sur une Île (Baléares, Cyclades, Canaries)",
                    "it": "Fuga su un'Isola (Grecia, Canarie o Baleari)"
                },
                "desc": {
                    "de": "Kleine Buchten, türkises Wasser, Roller mieten und Tavernen am Meer.",
                    "en": "Hidden coves, turquoise water and seaside tavernas.",
                    "es": "Calas escondidas, agua turquesa y cenas junto al mar.",
                    "fr": "Criques secrètes, eaux limpides et dîners face à la mer.",
                    "it": "Calette nascoste, mare trasparente e cene sul porto."
                },
                "actionLabel": {
                    "de": "Schönste Inseln vergleichen",
                    "en": "Best Island Trips",
                    "es": "Mejores islas para viajar",
                    "fr": "Meilleures îles à visiter",
                    "it": "Migliori isole per vacanze"
                },
                "actionUrl": "https://www.google.com/search?q=schoenste+urlaubsinseln+europa"
            },
            {
                "id": 7,
                "emoji": "🌲",
                "bg": "from-slate-700 to-teal-950",
                "tag": {
                    "de": "Coolcation",
                    "en": "Nordic Escape",
                    "es": "Norte y Naturaleza",
                    "fr": "Évasion Nordique",
                    "it": "Incanto del Nord"
                },
                "title": {
                    "de": "Skandinavien, Schottland oder Natur-Abenteuer im Norden",
                    "en": "Nordic Nature, Fjords or Cozy Cabin",
                    "es": "Escandinavia, Fiordos o Naturaleza Salvaje",
                    "fr": "Nature Nordique, Fjords & Cabanes en Forêt",
                    "it": "Scandinavia, Fiordi o Chalet nei Boschi del Nord"
                },
                "desc": {
                    "de": "Wälder, Fjorde, Seen, Kaminfeuer und frische Luft statt 38 Grad Hitze.",
                    "en": "Lakes, fjords, cinnamon buns and crisp nature.",
                    "es": "Bosques, lagos, cabañas y paisajes de película.",
                    "fr": "Grands lacs, fjords sauvages, brioches à la cannelle et nature pure.",
                    "it": "Laghi specchiati, fiordi maestosi e natura incontaminata."
                },
                "actionLabel": {
                    "de": "Nord-Trips entdecken",
                    "en": "Explore Nordic Trips",
                    "es": "Ver viajes al norte",
                    "fr": "Explorer voyages nordiques",
                    "it": "Viaggi nel nord Europa"
                },
                "actionUrl": "https://www.google.com/search?q=skandinavien+urlaub+natur+ideen"
            },
            {
                "id": 8,
                "emoji": "🍷",
                "bg": "from-rose-700 to-amber-900",
                "tag": {
                    "de": "La Dolce Vita",
                    "en": "Food & Wine Region",
                    "es": "Ruta Gastronómica",
                    "fr": "Vignobles & Terroir",
                    "it": "Sapori & Vigneti"
                },
                "title": {
                    "de": "Genuss-Reise (Toskana, Südtirol, Provence oder San Sebastián)",
                    "en": "Culinary & Wine Region Getaway",
                    "es": "Viaje Gastronómico y de Vinos (Toscana, Norte)",
                    "fr": "Séjour Terroir & Vignobles (Toscane, Provence, Rioja)",
                    "it": "Viaggio Enogastronomico (Toscana, Langhe o Provenza)"
                },
                "desc": {
                    "de": "Weingüter, unfassbar gutes Essen und malerische Landschaften.",
                    "en": "Vineyards, incredible food and rolling hills.",
                    "es": "Viñedos, pueblos con encanto y comer de diez.",
                    "fr": "Collines verdoyantes, dégustations de vin et gastronomie d'exception.",
                    "it": "Colline sinuose, cantine storiche e pranzi memorabili."
                },
                "actionLabel": {
                    "de": "Schönste Genuss-Regionen",
                    "en": "Best Foodie Regions",
                    "es": "Rutas gastronómicas",
                    "fr": "Régions gourmandes à visiter",
                    "it": "Migliori mete gastronomiche"
                },
                "actionUrl": "https://www.google.com/search?q=genussreise+toskana+suedtirol+ideen"
            },
            {
                "id": 9,
                "emoji": "🎿",
                "bg": "from-sky-700 to-blue-950",
                "tag": {
                    "de": "Schnee & Hütte",
                    "en": "Winter Wonderland",
                    "es": "Nieve y Montaña",
                    "fr": "Féerie Hivernale",
                    "it": "Paradiso Invernale"
                },
                "title": {
                    "de": "Winter-Trip: Skifahren, Rodeln oder verschneite Chalet-Auszeit",
                    "en": "Snowy Mountain Chalet or Ski Trip",
                    "es": "Escapada de Nieve, Esquí o Chalet",
                    "fr": "Chalet Enneigé, Ski ou Balade en Luge",
                    "it": "Chalet sulla Neve: Sci, Slittino o Fonduta"
                },
                "desc": {
                    "de": "Tagsüber im Schnee, abends Kaiserschmarrn, Fondue und Sauna.",
                    "en": "Fresh snow by day, fondue and sauna by night.",
                    "es": "Nieve de día y chimenea o fondue por la noche.",
                    "fr": "Neige fraîche le jour, fondue au fromage et sauna le soir.",
                    "it": "Piste innevate di giorno, fonduta calda e camino la sera."
                },
                "actionLabel": {
                    "de": "Winter-Auszeiten finden",
                    "en": "Winter Getaways",
                    "es": "Ver escapadas de nieve",
                    "fr": "Séjours au ski & neige",
                    "it": "Vacanze sulla neve"
                },
                "actionUrl": "https://www.google.com/search?q=winterurlaub+chalet+berge+ideen"
            }
        ]
    },
    "gifts": {
        "id": "gifts",
        "category": "trips",
        "mode": "match",
        "icon": "🎁",
        "gradient": "from-fuchsia-500 to-rose-500",
        "title": {
            "de": "Geschenk- & Wunsch-Matcher",
            "en": "Gift & Wish Matcher",
            "es": "Ideas de Regalo",
            "fr": "Trouveur de Cadeaux & Envies",
            "it": "Idee Regalo & Desideri"
        },
        "sub": {
            "de": "Was schenken wir (uns oder Freunden)?",
            "en": "Find the perfect gift idea in 30s",
            "es": "¿Qué regalamos esta vez?",
            "fr": "Qu'est-ce qu'on offre (à nous ou à des proches) ?",
            "it": "Cosa regaliamo (a noi o agli amici)?"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "🎫",
                "bg": "from-purple-600 to-indigo-900",
                "tag": {
                    "de": "Erinnerung fürs Leben",
                    "en": "Shared Memory",
                    "es": "Experiencia",
                    "fr": "Souvenirs Communs",
                    "it": "Emozioni Condivise"
                },
                "title": {
                    "de": "Konzert-, Comedy- oder Event-Tickets",
                    "en": "Concert, Show or Live Event Tickets",
                    "es": "Entradas para Concierto o Espectáculo",
                    "fr": "Billets de Concert, Spectacle ou Stand-Up",
                    "it": "Biglietti per Concerto, Teatro o Spettacolo Live"
                },
                "desc": {
                    "de": "Gemeinsame Vorfreude und ein unvergesslicher Abend statt Staubfänger.",
                    "en": "Real memories instead of more stuff.",
                    "es": "Un recuerdo inolvidable en lugar de cosas materiales.",
                    "fr": "De vrais souvenirs partagés plutôt que des objets encombrants.",
                    "it": "Ricordi veri e indimenticabili invece di oggetti inutili."
                },
                "actionLabel": {
                    "de": "Events in der Nähe prüfen",
                    "en": "Browse Live Events",
                    "es": "Ver eventos próximos",
                    "fr": "Voir les événements live",
                    "it": "Cerca concerti e spettacoli"
                },
                "actionUrl": "https://www.google.com/search?q=konzerte+events+tickets"
            },
            {
                "id": 1,
                "emoji": "🍽️",
                "bg": "from-rose-600 to-amber-800",
                "tag": {
                    "de": "Genuss-Moment",
                    "en": "Foodie Gift",
                    "es": "Gastronomía",
                    "fr": "Cadeau Gourmand",
                    "it": "Esperienza Gourmet"
                },
                "title": {
                    "de": "Besonderes Dinner, Tasting oder Kochkurs",
                    "en": "Fine Dining, Wine Tasting or Barista Course",
                    "es": "Cena Degustación o Cata",
                    "fr": "Dîner Gastronomique, Dégustation ou Cours de Barista",
                    "it": "Cena Speciale, Degustazione Vini o Corso di Cucina"
                },
                "desc": {
                    "de": "Ein Abendessen oder Tasting, das man sich sonst nicht gönnt.",
                    "en": "A culinary treat you wouldn't buy on a normal Tuesday.",
                    "es": "Una experiencia gastronómica especial.",
                    "fr": "Une belle expérience culinaire qu'on ne s'offrirait pas un simple mardi.",
                    "it": "Un momento delizioso che non ci si concede in un giorno qualunque."
                },
                "actionLabel": {
                    "de": "Tastings & Erlebnisse suchen",
                    "en": "Find Food Experiences",
                    "es": "Buscar catas y experiencias",
                    "fr": "Expériences culinaires",
                    "it": "Trova esperienze gourmet"
                },
                "actionUrl": "https://www.google.com/search?q=tasting+kochkurs+geschenk"
            },
            {
                "id": 2,
                "emoji": "🧳",
                "bg": "from-teal-600 to-emerald-900",
                "tag": {
                    "de": "Tapetenwechsel",
                    "en": "Weekend Escape",
                    "es": "Escapada",
                    "fr": "Escapade Week-end",
                    "it": "Fuga nel Weekend"
                },
                "title": {
                    "de": "Überraschungs-Kurztrip (1–2 Nächte)",
                    "en": "Weekend Wellness or Boutique Hotel",
                    "es": "Escapada de Fin de Semana (1-2 noches)",
                    "fr": "Court Séjour Surprise (1 ou 2 Nuits)",
                    "it": "Mini-Vacanza a Sorpresa (1–2 Notti Fuori)"
                },
                "desc": {
                    "de": "Einfach mal 48 Stunden raus aus dem Alltag.",
                    "en": "48 hours away from everyday routine.",
                    "es": "48 horas fuera de la rutina diaria.",
                    "fr": "48 heures pour couper complètement avec le quotidien.",
                    "it": "48 ore lontano dalla solita routine."
                },
                "actionLabel": {
                    "de": "Kurztrip-Deals ansehen",
                    "en": "Browse Short Trips",
                    "es": "Ver ideas de escapada",
                    "fr": "Idées de courts séjours",
                    "it": "Cerca soggiorni brevi"
                },
                "actionUrl": "https://www.google.com/search?q=wochenendtrip+hotel+wellness+angebot"
            },
            {
                "id": 3,
                "emoji": "🎧",
                "bg": "from-slate-700 to-slate-900",
                "tag": {
                    "de": "Jeden Tag nützlich",
                    "en": "Daily Upgrade",
                    "es": "Tecnología / Hogar",
                    "fr": "Utile au Quotidien",
                    "it": "Upgrade Quotidiano"
                },
                "title": {
                    "de": "Cooles Gadget (Tech, Kaffee oder Küche)",
                    "en": "Smart Tech, Coffee or Kitchen Upgrade",
                    "es": "Gadget Tecnológico o de Café/Cocina",
                    "fr": "Gadget Utile (Tech, Bon Café ou Cuisine)",
                    "it": "Gadget Intelligente (Tecnologia, Caffè o Cucina)"
                },
                "desc": {
                    "de": "Etwas, das man jeden Tag benutzt und sich jedes Mal drüber freut.",
                    "en": "Something used every single day with joy.",
                    "es": "Algo útil que se disfruta todos los días.",
                    "fr": "Un objet de qualité qu'on utilise chaque jour avec le sourire.",
                    "it": "Qualcosa che si usa ogni giorno con grande soddisfazione."
                },
                "actionLabel": {
                    "de": "🎁 Beliebte Gadgets auf Amazon",
                    "en": "Top Gadgets on Amazon",
                    "es": "Gadgets en Amazon",
                    "fr": "Top gadgets sur Amazon",
                    "it": "Migliori gadget su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=coole+gadgets+geschenkideen&tag=f05b1-21"
            },
            {
                "id": 4,
                "emoji": "💆‍♀️",
                "bg": "from-cyan-600 to-teal-900",
                "tag": {
                    "de": "Entspannung schenken",
                    "en": "Pure Pampering",
                    "es": "Bienestar",
                    "fr": "Détente Garantie",
                    "it": "Puro Relax"
                },
                "title": {
                    "de": "Massage-, Day-Spa- oder Wellness-Gutschein",
                    "en": "Massage, Day-Spa or Wellness Voucher",
                    "es": "Masaje, Circuito Spa o Bienestar",
                    "fr": "Bon pour Massage, Spa ou Soin Bien-être",
                    "it": "Buono per Massaggio, Day Spa o Trattamento Benessere"
                },
                "desc": {
                    "de": "Eine garantierte Auszeit zum Abschalten und Verwöhnenlassen.",
                    "en": "A guaranteed break to unwind and recharge.",
                    "es": "Un regalo de relax puro que siempre triunfa.",
                    "fr": "Une parenthèse garantie pour relâcher toutes les tensions.",
                    "it": "Una pausa assicurata per ricaricare le energie."
                },
                "actionLabel": {
                    "de": "Day-Spas & Massagen finden",
                    "en": "Find Spa Vouchers",
                    "es": "Buscar spas para regalar",
                    "fr": "Bons cadeaux bien-être",
                    "it": "Trova voucher benessere"
                },
                "actionUrl": "https://www.google.com/search?q=day+spa+massage+gutschein"
            },
            {
                "id": 5,
                "emoji": "🧺",
                "bg": "from-amber-600 to-orange-900",
                "tag": {
                    "de": "Liebevoll zusammengestellt",
                    "en": "Curated Box",
                    "es": "Cesta Gourmet",
                    "fr": "Coffret Gourmand",
                    "it": "Cofanetto Gourmet"
                },
                "title": {
                    "de": "Feinkost- & Genuss-Box (Spezialitäten, Wein, Kaffee, Schokolade)",
                    "en": "Gourmet Delicacy Box (Coffee, Wine, Olive Oil)",
                    "es": "Caja Gourmet (Café de Especialidad, Vino, Delicatessen)",
                    "fr": "Coffret Délices Épicerie Fine (Huile d'Olive, Vin, Café)",
                    "it": "Box di Specialità Gastronomiche (Vino, Olio Buono, Dolci)"
                },
                "desc": {
                    "de": "Hochwertige Leckereien, die sich aufbrauchen und glücklich machen.",
                    "en": "Consumable luxuries that never collect dust.",
                    "es": "Caprichos deliciosos que siempre hacen ilusión.",
                    "fr": "Des produits de fête artisanaux qui se savourent toujours.",
                    "it": "Eccellenze gastronomiche che non restano mai a prendere polvere."
                },
                "actionLabel": {
                    "de": "Genuss-Box Ideen ansehen",
                    "en": "Gourmet Gift Ideas",
                    "es": "Ideas de cajas gourmet",
                    "fr": "Idées de coffrets gourmands",
                    "it": "Idee cesti gastronomici"
                },
                "actionUrl": "https://www.google.com/search?q=feinkost+genuss+geschenkbox+ideen"
            },
            {
                "id": 6,
                "emoji": "🎨",
                "bg": "from-pink-600 to-purple-900",
                "tag": {
                    "de": "Etwas Neues lernen",
                    "en": "Creative Workshop",
                    "es": "Taller Creativo",
                    "fr": "Atelier Manuel",
                    "it": "Laboratorio Creativo"
                },
                "title": {
                    "de": "Kreativ-Workshop (Töpfern, Barista, Cocktail-Kurs, Malen)",
                    "en": "Pottery, Barista or Cocktail Mixing Workshop",
                    "es": "Taller de Cerámica, Barista o Coctelería",
                    "fr": "Atelier Céramique, Mixologie ou Cours de Cuisine",
                    "it": "Corso di Ceramica, Barista o Mixology per Due"
                },
                "desc": {
                    "de": "Zusammen etwas mit den Händen erschaffen und Spaß haben.",
                    "en": "Learn a cool hands-on skill together.",
                    "es": "Aprender algo nuevo y divertido juntos.",
                    "fr": "Apprendre ensemble une compétence manuelle sympa.",
                    "it": "Imparare insieme un'abilità divertente e manuale."
                },
                "actionLabel": {
                    "de": "Workshops in der Stadt finden",
                    "en": "Find Local Workshops",
                    "es": "Buscar talleres creativos",
                    "fr": "Trouver des ateliers",
                    "it": "Trova corsi e laboratori"
                },
                "actionUrl": "https://www.google.com/search?q=workshop+toepfern+barista+geschenk"
            },
            {
                "id": 7,
                "emoji": "🎲",
                "bg": "from-indigo-600 to-blue-950",
                "tag": {
                    "de": "Gemeinsame Abende",
                    "en": "Game & Cozy Night",
                    "es": "Para disfrutar en casa",
                    "fr": "Jeu & Cocooning",
                    "it": "Serata a Casa"
                },
                "title": {
                    "de": "Besonderes Brettspiel, Lego-Set (Botanicals) oder Buch-Bestseller",
                    "en": "Board Game Hit, Lego Botanicals or Bestseller Book",
                    "es": "Juego de Mesa Top, Lego Botanicals o Libro",
                    "fr": "Jeu de Société Culte, Lego Botanique ou Grand Roman",
                    "it": "Bel Gioco da Tavolo, Set Lego Botanicals o Bestseller"
                },
                "desc": {
                    "de": "Perfekt für gemütliche Wochenenden auf der Couch.",
                    "en": "Perfect for cozy weekends at home.",
                    "es": "Ideal para tardes tranquilas en casa.",
                    "fr": "Idéal pour passer des week-ends douillets à la maison.",
                    "it": "Perfetto per rilassarsi durante i weekend a casa."
                },
                "actionLabel": {
                    "de": "🎁 Lego & Bestseller auf Amazon",
                    "en": "Lego & Books on Amazon",
                    "es": "Lego y libros en Amazon",
                    "fr": "Lego & Livres sur Amazon",
                    "it": "Lego & Libri su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=lego+botanicals+geschenk&tag=f05b1-21"
            },
            {
                "id": 8,
                "emoji": "📸",
                "bg": "from-rose-500 to-red-900",
                "tag": {
                    "de": "100% Persönlich",
                    "en": "Personal & Emotional",
                    "es": "Muy personal",
                    "fr": "Émotion & Photos",
                    "it": "Ricordi di Cuore"
                },
                "title": {
                    "de": "Fotobuch, gerahmte Erinnerung oder Polaroid-/Instax-Kamera",
                    "en": "Custom Photo Book, Framed Print or Instax Camera",
                    "es": "Álbum de Fotos, Cuadro o Cámara Instantánea",
                    "fr": "Album Photo Personnalisé, Cadre ou Appareil Instax",
                    "it": "Fotolibro Personalizzato, Stampa Incorniciata o Instax"
                },
                "desc": {
                    "de": "Echte Erinnerungen zum Anfassen statt nur 5.000 Fotos auf dem Handy.",
                    "en": "Turn phone photos into real tangible memories.",
                    "es": "Convertir los recuerdos del móvil en algo físico.",
                    "fr": "Transformer les photos du téléphone en souvenirs concrets.",
                    "it": "Trasformare gli scatti nello smartphone in ricordi da toccare."
                },
                "actionLabel": {
                    "de": "📸 Polaroid & Instax auf Amazon",
                    "en": "Instax Cameras on Amazon",
                    "es": "Cámaras Instax en Amazon",
                    "fr": "Appareils Instax sur Amazon",
                    "it": "Fotocamere Instax su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=instax+mini+kamera&tag=f05b1-21"
            },
            {
                "id": 9,
                "emoji": "🪂",
                "bg": "from-emerald-600 to-teal-950",
                "tag": {
                    "de": "Adrenalin & Action",
                    "en": "Bucket List Action",
                    "es": "Aventura",
                    "fr": "Sensations Fortes",
                    "it": "Pura Adrenalina"
                },
                "title": {
                    "de": "Action-Erlebnis (Kartfahren, Kletterwald, Flugsimulator, Escape Room)",
                    "en": "Action Experience (Go-Kart, Escape Room, Zipline)",
                    "es": "Experiencia de Acción (Karts, Escape Room, Aventura)",
                    "fr": "Expérience Adrénaline (Karting, Accrobranche, Escape)",
                    "it": "Esperienza Adrenalinica (Kart, Parco Avventura, Escape)"
                },
                "desc": {
                    "de": "Ein Tag voller Action, über den man noch lange spricht.",
                    "en": "An adrenaline-packed day out together.",
                    "es": "Un plan lleno de adrenalina para recordar.",
                    "fr": "Une journée pleine d'action et de fous rires garantis.",
                    "it": "Una giornata piena di energia e divertimento insieme."
                },
                "actionLabel": {
                    "de": "Action-Erlebnisse suchen",
                    "en": "Find Action Gifts",
                    "es": "Buscar experiencias de acción",
                    "fr": "Cadeaux à sensations",
                    "it": "Trova regali adrenalinici"
                },
                "actionUrl": "https://www.google.com/search?q=erlebnisgeschenke+action+ideen"
            }
        ]
    },
    "cocktails": {
        "id": "cocktails",
        "category": "food",
        "mode": "match",
        "icon": "🍸",
        "gradient": "from-amber-500 to-rose-600",
        "title": {
            "de": "Cocktails & Drinks zu zweit",
            "en": "Cocktails & Date Drinks",
            "es": "Cócteles y Copas",
            "fr": "Cocktails & Verres à Deux",
            "it": "Cocktail & Drink a Due"
        },
        "sub": {
            "de": "Welcher Drink startet euren Abend?",
            "en": "Settle on your evening drink in 30s",
            "es": "¿Qué copa nos tomamos hoy?",
            "fr": "Par quel verre commence votre soirée ?",
            "it": "Con quale drink inizia la vostra serata?"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "🍸",
                "bg": "from-amber-600 to-yellow-800",
                "tag": {
                    "de": "Elegant & Wach",
                    "en": "Caffeine & Chic",
                    "es": "Elegante y con café",
                    "fr": "Caféiné & Chic",
                    "it": "Caffè & Glamour"
                },
                "title": {
                    "de": "Espresso Martini",
                    "en": "Espresso Martini",
                    "es": "Espresso Martini",
                    "fr": "Espresso Martini Velouté",
                    "it": "Espresso Martini Cremoso"
                },
                "desc": {
                    "de": "Frischer Espresso, Kahlúa und Wodka mit samtiger Crema.",
                    "en": "Fresh espresso, coffee liqueur & vodka with a velvety crema.",
                    "es": "Espresso recién hecho, licor de café y vodka con espuma cremosa.",
                    "fr": "Espresso bien chaud, liqueur de café, vodka et mousse soyeuse.",
                    "it": "Espresso fresco, liquore al caffè, vodka e crema vellutata."
                },
                "actionLabel": {
                    "de": "Cocktail-Set & Gläser auf Amazon",
                    "en": "Cocktail Shaker Set on Amazon",
                    "es": "Set de coctelería en Amazon",
                    "fr": "Set shaker à cocktail sur Amazon",
                    "it": "Set shaker cocktail su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=cocktail+shaker+set+bar&tag=f05b1-21"
            },
            {
                "id": 1,
                "emoji": "🍹",
                "bg": "from-orange-500 to-rose-700",
                "tag": {
                    "de": "Spritzig & Italienisch",
                    "en": "Bubbly & Italian",
                    "es": "Aperitivo italiano",
                    "fr": "Pétillant & Italien",
                    "it": "Frizzante & Italiano"
                },
                "title": {
                    "de": "Aperol Spritz",
                    "en": "Aperol Spritz",
                    "es": "Aperol Spritz",
                    "fr": "Aperol Spritz Rafraîchissant",
                    "it": "Aperol Spritz Classico"
                },
                "desc": {
                    "de": "Prosecco, Aperol, Soda und eine saftige Orangenscheibe.",
                    "en": "Crisp prosecco, bitter-sweet Aperol, soda & orange slice.",
                    "es": "Prosecco, Aperol, soda y una rodaja de naranja fresca.",
                    "fr": "Prosecco bien frais, Aperol doux-amer, trait d'eau gazeuse et orange.",
                    "it": "Prosecco freddo, Aperol agrodolce, spruzzo di soda e fetta d'arancia."
                },
                "actionLabel": {
                    "de": "Aperol & Gläser auf Amazon",
                    "en": "Aperol Spritz Glasses on Amazon",
                    "es": "Copas de Aperol en Amazon",
                    "fr": "Verres à Spritz sur Amazon",
                    "it": "Bicchieri da Spritz su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=aperol+spritz+glaeser+set&tag=f05b1-21"
            },
            {
                "id": 2,
                "emoji": "🍋",
                "bg": "from-emerald-600 to-teal-800",
                "tag": {
                    "de": "Klassisch & Frisch",
                    "en": "Crisp & Botanical",
                    "es": "Clásico y fresco",
                    "fr": "Frais & Botanique",
                    "it": "Fresco & Botanico"
                },
                "title": {
                    "de": "Gin Tonic mit Gurke oder Beeren",
                    "en": "Gin & Tonic",
                    "es": "Gin Tonic Premium",
                    "fr": "Gin Tonic Concombre ou Baies",
                    "it": "Gin Tonic con Cetriolo o Frutti di Bosco"
                },
                "desc": {
                    "de": "Guter Gin, eisgekühltes Tonic Water und frische Botanicals.",
                    "en": "Premium botanical gin, craft tonic & fresh cucumber or berries.",
                    "es": "Ginebra botánica, tónica bien fría y pepino o frutos rojos.",
                    "fr": "Gin aromatique aux botaniques, tonic de qualité et rondelle fraîche.",
                    "it": "Gin aromatico, tonica artigianale e fetta di cetriolo o bacche."
                },
                "actionLabel": {
                    "de": "Premium Gin auf Amazon",
                    "en": "Craft Gin on Amazon",
                    "es": "Ginebra premium en Amazon",
                    "fr": "Gins artisanaux sur Amazon",
                    "it": "Gin artigianale su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=premium+gin+geschenk&tag=f05b1-21"
            },
            {
                "id": 3,
                "emoji": "🌿",
                "bg": "from-lime-600 to-emerald-800",
                "tag": {
                    "de": "Frische Minze",
                    "en": "Zesty & Refreshing",
                    "es": "Con lima y menta",
                    "fr": "Menthe & Citron Vert",
                    "it": "Agrumato & Dissetante"
                },
                "title": {
                    "de": "Mojito oder Caipirinha",
                    "en": "Mojito or Caipirinha",
                    "es": "Mojito o Caipirinha",
                    "fr": "Mojito Frais ou Caïpirinha",
                    "it": "Mojito Cubano o Caipirinha"
                },
                "desc": {
                    "de": "Frische Minze, Limetten, Rohrzucker und zerstoßenes Eis.",
                    "en": "Fresh mint, muddled lime, raw sugar and crushed ice.",
                    "es": "Menta fresca, lima machacada, azúcar y hielo picado.",
                    "fr": "Menthe fraîche pilée, quartier de lime, sucre roux et glace pilée.",
                    "it": "Menta fresca pestata, lime succoso, zucchero di canna e tanto ghiaccio."
                },
                "actionLabel": {
                    "de": "Stößel & Bar-Tools auf Amazon",
                    "en": "Muddler & Bar Tools on Amazon",
                    "es": "Mortero y accesorios en Amazon",
                    "fr": "Pilon et ustensiles bar sur Amazon",
                    "it": "Set barman & pestello su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=barstoessel+holz+cocktail&tag=f05b1-21"
            },
            {
                "id": 4,
                "emoji": "🥃",
                "bg": "from-amber-700 to-orange-950",
                "tag": {
                    "de": "Bar-Legende",
                    "en": "Bold & Classic",
                    "es": "Para sibaritas",
                    "fr": "Caractère & Classique",
                    "it": "Intenso & Classico"
                },
                "title": {
                    "de": "Whiskey Sour oder Old Fashioned",
                    "en": "Whiskey Sour or Old Fashioned",
                    "es": "Whiskey Sour o Old Fashioned",
                    "fr": "Whiskey Sour ou Old Fashioned",
                    "it": "Whiskey Sour o Old Fashioned"
                },
                "desc": {
                    "de": "Bourbon, Zitronensaft, Zuckersirup – rund, kraftvoll, perfekt.",
                    "en": "Bourbon, fresh lemon, simple syrup and aromatic bitters.",
                    "es": "Bourbon, zumo de limón fresco, sirope y bitter aromático.",
                    "fr": "Bourbon rond, jus de citron jaune pressé, sirop et amers parfumés.",
                    "it": "Bourbon aromatico, succo di limone fresco, zucchero e angostura."
                },
                "actionLabel": {
                    "de": "Whiskey-Gläser auf Amazon",
                    "en": "Whiskey Tumblers on Amazon",
                    "es": "Vasos de whisky en Amazon",
                    "fr": "Verres à whiskey sur Amazon",
                    "it": "Bicchieri da whiskey su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=whiskey+glaeser+set&tag=f05b1-21"
            },
            {
                "id": 5,
                "emoji": "🫚",
                "bg": "from-yellow-600 to-amber-900",
                "tag": {
                    "de": "Würzig im Kupferbecher",
                    "en": "Ginger Kick",
                    "es": "En taza de cobre",
                    "fr": "Peps au Gingembre",
                    "it": "Tocco di Zenzero"
                },
                "title": {
                    "de": "Moscow Mule",
                    "en": "Moscow Mule",
                    "es": "Moscow Mule",
                    "fr": "Moscow Mule Épicé",
                    "it": "Moscow Mule Ghiacciato"
                },
                "desc": {
                    "de": "Wodka, scharfes Ginger Beer, Limette und Gurkenscheibe.",
                    "en": "Crisp vodka, spicy ginger beer, fresh lime in a cold copper mug.",
                    "es": "Vodka, cerveza de jengibre especiada y lima en taza de cobre.",
                    "fr": "Vodka pure, ginger beer piquante et jus de lime en chope de cuivre.",
                    "it": "Vodka pura, ginger beer speziata e lime fresco nella tazza di rame."
                },
                "actionLabel": {
                    "de": "Kupferbecher Set auf Amazon",
                    "en": "Copper Mugs Set on Amazon",
                    "es": "Tazas de cobre en Amazon",
                    "fr": "Chopes en cuivre sur Amazon",
                    "it": "Tazze in rame su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=kupferbecher+moscow+mule+set&tag=f05b1-21"
            },
            {
                "id": 6,
                "emoji": "🍓",
                "bg": "from-rose-500 to-pink-700",
                "tag": {
                    "de": "0.0% Alkohol",
                    "en": "Zero Proof Mocktail",
                    "es": "Sin alcohol",
                    "fr": "Sans Alcool & Chic",
                    "it": "Zero Alcol & Stile"
                },
                "title": {
                    "de": "Fancy Mocktail (Wildberry Spritz 0.0)",
                    "en": "Fruity Virgin Mocktail",
                    "es": "Mocktail de Frutos Rojos",
                    "fr": "Mocktail Pétillant Fruité (Spritz 0.0)",
                    "it": "Mocktail Fruttato (Wildberry Spritz 0.0)"
                },
                "desc": {
                    "de": "Alkoholfreier Aperitif, Beeren, Tonic und Minze – 100% Genuss.",
                    "en": "Botanical non-alcoholic aperitif, wild berries, tonic & mint.",
                    "es": "Aperitivo sin alcohol, frutos rojos, tónica y menta fresca.",
                    "fr": "Apéritif sans alcool aux plantes, baies rouges sauvages et menthe.",
                    "it": "Aperitivo analcolico botanico, frutti di bosco e foglioline di menta."
                },
                "actionLabel": {
                    "de": "Alkoholfreie Spirituosen auf Amazon",
                    "en": "Zero-Proof Spirits on Amazon",
                    "es": "Bebidas sin alcohol en Amazon",
                    "fr": "Spiritueux sans alcool sur Amazon",
                    "it": "Distillati analcolici su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=alkoholfreier+gin+aperitif&tag=f05b1-21"
            },
            {
                "id": 7,
                "emoji": "🍷",
                "bg": "from-red-800 to-slate-900",
                "tag": {
                    "de": "Entspannt auf der Couch",
                    "en": "Cozy Wine & Beer",
                    "es": "Tranquilo en casa",
                    "fr": "Vin Frais & Grignotage",
                    "it": "Vino Buono & Salatini"
                },
                "title": {
                    "de": "Gekühlter Wein, Craft Beer & Knabbereien",
                    "en": "Chilled Wine or Craft Beer",
                    "es": "Buen Vino o Cerveza Artesana",
                    "fr": "Bouteille de Vin Frais ou Bière Artisanale",
                    "it": "Bottiglia di Vino Fresco o Birra Artigianale"
                },
                "desc": {
                    "de": "Flasche entkorken, Chips oder Oliven dazu und die Beine hochlegen.",
                    "en": "Pop open a favorite bottle, grab some crisps, and relax.",
                    "es": "Abrir una buena botella, picar algo y disfrutar del sofá.",
                    "fr": "Déboucher une bonne bouteille, sortir les crackers et se détendre.",
                    "it": "Stappare una bottiglia preferita, patatine croccanti e relax."
                },
                "actionLabel": {
                    "de": "Weinkühler & Zubehör auf Amazon",
                    "en": "Wine Cooler on Amazon",
                    "es": "Enfriador de vino en Amazon",
                    "fr": "Rafraîchisseur à vin sur Amazon",
                    "it": "Glacette vino su Amazon"
                },
                "actionUrl": "https://www.amazon.de/s?k=weinkuehler+edelstahl&tag=f05b1-21"
            }
        ]
    },
    "vegan": {
        "id": "vegan",
        "category": "food",
        "mode": "match",
        "icon": "🥗",
        "gradient": "from-emerald-500 to-teal-700",
        "title": {
            "de": "Veggie & Vegan",
            "en": "Plant-Based & Veggie",
            "es": "Vegano y Vegetariano",
            "fr": "100% Végétal & Gourmand",
            "it": "Piatti Vegani & Vegetariani"
        },
        "sub": {
            "de": "Pflanzlicher Genuss ohne Diskussion",
            "en": "100% plant-powered meals settled in 30s",
            "es": "Platos ricos a base de plantas",
            "fr": "Saveurs végétales sans compromis en 30s",
            "it": "Bontà a base di piante decisa in 30 secondi"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "🍛",
                "bg": "from-amber-600 to-yellow-800",
                "tag": {
                    "de": "Wärmend & Cremig",
                    "en": "Warm Comfort",
                    "es": "Reconfortante",
                    "fr": "Douceur Épicée",
                    "it": "Caldo & Avvolgente"
                },
                "title": {
                    "de": "Kichererbsen-Kokos-Curry",
                    "en": "Chickpea Coconut Curry",
                    "es": "Curry Cremoso de Garbanzos",
                    "fr": "Curry de Pois Chiches & Lait de Coco",
                    "it": "Curry di Ceci & Latte di Cocco"
                },
                "desc": {
                    "de": "Kichererbsen, cremige Kokosmilch, Spinat und duftender Basmatireis.",
                    "en": "Chickpeas, coconut milk, tender spinach & fragrant basmati rice.",
                    "es": "Garbanzos, leche de coco cremosa, espinacas y arroz basmati.",
                    "fr": "Pois chiches fondants, lait de coco onctueux, épinards et riz basmati.",
                    "it": "Ceci morbidi, latte di cocco cremoso, spinaci e riso basmati profumato."
                },
                "actionLabel": {
                    "de": "Veganes Curry Rezept öffnen",
                    "en": "Get Vegan Curry Recipe",
                    "es": "Ver receta de curry vegano",
                    "fr": "Recette de curry vegan",
                    "it": "Ricetta curry vegano"
                },
                "actionUrl": "https://www.google.com/search?q=cremiges+kichererbsen+curry+rezept"
            },
            {
                "id": 1,
                "emoji": "🌯",
                "bg": "from-emerald-600 to-green-800",
                "tag": {
                    "de": "Streetfood Klassiker",
                    "en": "Crispy & Fresh",
                    "es": "Street Food",
                    "fr": "Croustillant & Frais",
                    "it": "Croccante & Fresco"
                },
                "title": {
                    "de": "Knuspriger Falafel-Wrap",
                    "en": "Crispy Falafel Wrap",
                    "es": "Wrap de Falafel Crujiente",
                    "fr": "Wrap aux Falafels Dorés & Tahini",
                    "it": "Wrap con Falafel Croccanti & Tahina"
                },
                "desc": {
                    "de": "Goldbraune Falafel, cremige Tahini-Sauce, Gurken und Minze im Fladenbrot.",
                    "en": "Golden falafels, velvety tahini, cucumber and mint in warm flatbread.",
                    "es": "Falafel dorado, salsa tahini, pepino y menta en pan caliente.",
                    "fr": "Falafels dorés, sauce tahini soyeuse, concombre et menthe dans un pain plat.",
                    "it": "Falafel dorati, salsa tahina delicata, cetrioli e menta in piadina calda."
                },
                "actionLabel": {
                    "de": "Falafel bei Lieferando suchen",
                    "en": "Order Falafel on Lieferando",
                    "es": "Pedir falafel a domicilio",
                    "fr": "Commander des falafels",
                    "it": "Ordina falafel a domicilio"
                },
                "actionUrl": "https://www.lieferando.de/lieferservice/essen/falafel"
            },
            {
                "id": 2,
                "emoji": "🍝",
                "bg": "from-red-600 to-rose-900",
                "tag": {
                    "de": "Herzhafte Pasta",
                    "en": "Hearty Pasta",
                    "es": "Pasta reconfortante",
                    "fr": "Pâtes Gourmandes",
                    "it": "Primo Tradizionale"
                },
                "title": {
                    "de": "Linsen-Bolognese / Pasta Ragu",
                    "en": "Lentil Bolognese Ragu",
                    "es": "Boloñesa de Lentejas",
                    "fr": "Spaghetti Bolognaise aux Lentilles Savoureuses",
                    "it": "Spaghetti al Ragù di Lenticchie Saporito"
                },
                "desc": {
                    "de": "Al dente Spaghetti mit aromatischer, herzhafter Linsen-Tomatensauce.",
                    "en": "Al dente spaghetti with a rich, slow-simmered savory lentil ragu.",
                    "es": "Espaguetis al dente con salsa de tomate y lentejas casera.",
                    "fr": "Pâtes al dente avec un ragoût mijoté riche en tomates et lentilles.",
                    "it": "Pasta al dente con ricco ragù di lenticchie cotto a fuoco lento."
                },
                "actionLabel": {
                    "de": "Blitz-Rezept für Linsen-Bolo",
                    "en": "Quick Lentil Ragu Recipe",
                    "es": "Receta rápida de boloñesa",
                    "fr": "Recette ragù de lentilles",
                    "it": "Ricetta ragù di lenticchie"
                },
                "actionUrl": "https://www.google.com/search?q=schnelle+linsen+bolognese+rezept"
            },
            {
                "id": 3,
                "emoji": "🥗",
                "bg": "from-teal-600 to-cyan-800",
                "tag": {
                    "de": "Bunt & Gesund",
                    "en": "Clean & Crunchy",
                    "es": "Saludable y rico",
                    "fr": "Sain & Croquant",
                    "it": "Fresco & Ricco"
                },
                "title": {
                    "de": "Bunte Buddha-Bowl",
                    "en": "Crunchy Peanut Buddha Bowl",
                    "es": "Buddha Bowl con Cacahuete",
                    "fr": "Buddha Bowl Croustillant Sauce Cacahuète",
                    "it": "Buddha Bowl Ricca con Salsa Arachidi"
                },
                "desc": {
                    "de": "Quinoa, geröstete Kichererbsen, Avocado, Edamame und Erdnuss-Dressing.",
                    "en": "Quinoa, roasted veggies, avocado, edamame and a creamy peanut drizzle.",
                    "es": "Quinoa, garbanzos tostados, aguacate, edamame y salsa de cacahuete.",
                    "fr": "Quinoa, légumes rôtis, avocat crémeux, edamame et filet de cacahuète.",
                    "it": "Quinoa, verdure al forno, avocado, edamame e salsa cremosa alle arachidi."
                },
                "actionLabel": {
                    "de": "Bowls bei Lieferando bestellen",
                    "en": "Order Bowls on Lieferando",
                    "es": "Pedir bowls a domicilio",
                    "fr": "Commander un buddha bowl",
                    "it": "Ordina bowl a domicilio"
                },
                "actionUrl": "https://www.lieferando.de/lieferservice/essen/bowls"
            },
            {
                "id": 4,
                "emoji": "🍕",
                "bg": "from-amber-500 to-red-800",
                "tag": {
                    "de": "Pizza Night",
                    "en": "Crispy Crust",
                    "es": "Pizza vegetal",
                    "fr": "Pâte Fine Croustillante",
                    "it": "Cornicione Croccante"
                },
                "title": {
                    "de": "Vegane Gemüsepizza oder Trüffel",
                    "en": "Plant-Based Artisan Pizza",
                    "es": "Pizza Vegana Artesana",
                    "fr": "Pizza Artisanale Légumes Grillés & Végétale",
                    "it": "Pizza Artigianale alle Verdure Grigliate"
                },
                "desc": {
                    "de": "Dünner Steinofenteig, gegrillte Artischocken, Rucola und veganer Käse.",
                    "en": "Stone-baked thin crust, grilled artichokes, wild rocket & vegan melt.",
                    "es": "Masa fina, alcachofas a la parrilla, rúcula y queso vegano fundido.",
                    "fr": "Pâte fine cuite au four, artichauts grillés, roquette et fromage végétal.",
                    "it": "Impasto steso a mano, carciofi arrostiti, rucola fresca e formaggio vegetale fuso."
                },
                "actionLabel": {
                    "de": "Vegane Pizza bestellen",
                    "en": "Order Vegan Pizza",
                    "es": "Pedir pizza vegana",
                    "fr": "Commander une pizza vegan",
                    "it": "Ordina pizza vegana"
                },
                "actionUrl": "https://www.lieferando.de/lieferservice/essen/vegan-pizza"
            },
            {
                "id": 5,
                "emoji": "🍜",
                "bg": "from-orange-600 to-yellow-900",
                "tag": {
                    "de": "Asiatische Suppe",
                    "en": "Steaming Broth",
                    "es": "Ramen asiático",
                    "fr": "Bouillon Fumant",
                    "it": "Brodo Fumante"
                },
                "title": {
                    "de": "Würzige Tofu-Ramen",
                    "en": "Spicy Tofu Ramen",
                    "es": "Ramen Picante de Tofu",
                    "fr": "Ramen au Tofu Fumé Épicé & Bok Choy",
                    "it": "Ramen con Tofu Croccante Speziato"
                },
                "desc": {
                    "de": "Dampfende Miso-Brühe, knuspriger Räuchertofu, Pak Choi und Sesam.",
                    "en": "Rich miso broth, crispy smoked tofu, pak choi, noodles & sesame.",
                    "es": "Caldo de miso aromático, tofu crujiente, fideos y pak choi.",
                    "fr": "Bouillon miso savoureux, tofu doré croustillant, chou pak choi et sésame.",
                    "it": "Brodo ricco di miso, tofu affumicato croccante, pak choi e semi di sesamo."
                },
                "actionLabel": {
                    "de": "Ramen bei Lieferando suchen",
                    "en": "Order Ramen on Lieferando",
                    "es": "Pedir ramen a domicilio",
                    "fr": "Commander un ramen",
                    "it": "Ordina ramen a domicilio"
                },
                "actionUrl": "https://www.lieferando.de/lieferservice/essen/ramen"
            },
            {
                "id": 6,
                "emoji": "🥔",
                "bg": "from-orange-500 to-amber-700",
                "tag": {
                    "de": "Ofengericht",
                    "en": "Baked Comfort",
                    "es": "Al horno",
                    "fr": "Moelleux au Four",
                    "it": "Morbidezza al Forno"
                },
                "title": {
                    "de": "Gefüllte Ofen-Süßkartoffel (Kumpir)",
                    "en": "Loaded Sweet Potato",
                    "es": "Boniato Relleno al Horno",
                    "fr": "Patate Douce Rôtie Farcie Façon Kumpir",
                    "it": "Patata Dolce al Forno Farcita (Kumpir)"
                },
                "desc": {
                    "de": "Karamellisierte Süßkartoffel mit Bohnen, Mais, Guacamole und veganem Sauerrahm.",
                    "en": "Caramelized baked sweet potato loaded with black beans, guac & corn.",
                    "es": "Boniato asado relleno de alubias, maíz, guacamole y crema fresca.",
                    "fr": "Patate douce caramélisée garnie de haricots noirs, maïs et guacamole frais.",
                    "it": "Patata dolce caramellata con fagioli neri, mais dolce e guacamole fresco."
                },
                "actionLabel": {
                    "de": "Kumpir Rezept ansehen",
                    "en": "Loaded Sweet Potato Recipe",
                    "es": "Ver receta de boniato relleno",
                    "fr": "Recette patate douce garnie",
                    "it": "Ricetta patata dolce farcita"
                },
                "actionUrl": "https://www.google.com/search?q=gefuellte+suesskartoffel+rezept+vegan"
            },
            {
                "id": 7,
                "emoji": "🥑",
                "bg": "from-lime-600 to-green-900",
                "tag": {
                    "de": "Mexikanisch",
                    "en": "Zesty & Spicy",
                    "es": "Mexicano",
                    "fr": "Zesté & Pimenté",
                    "it": "Fresco & Speziato"
                },
                "title": {
                    "de": "Mexikanische Burrito-Bowl",
                    "en": "Fiesta Burrito Bowl",
                    "es": "Burrito Bowl Mexicano",
                    "fr": "Burrito Bowl Fiesta avec Chips Tortilla",
                    "it": "Burrito Bowl Messicana con Salsa Fresca"
                },
                "desc": {
                    "de": "Würziger Limetten-Reis, schwarze Bohnen, knusprige Tacos und Pico de Gallo.",
                    "en": "Zesty lime rice, black beans, salsa fresca, crispy tortilla crisps & jalapeños.",
                    "es": "Arroz con lima, frijoles negros, pico de gallo fresco y nachos crujientes.",
                    "fr": "Riz au citron vert, haricots noirs, salsa tomate fraîche, chips croustillantes et piments.",
                    "it": "Riso al lime, fagioli neri, salsa fresca, chips di mais e jalapeños."
                },
                "actionLabel": {
                    "de": "Mexikanisch bei Lieferando suchen",
                    "en": "Order Mexican on Lieferando",
                    "es": "Pedir comida mexicana",
                    "fr": "Commander mexicain",
                    "it": "Ordina messicano a domicilio"
                },
                "actionUrl": "https://www.lieferando.de/lieferservice/essen/mexikanisch"
            }
        ]
    },
    "wintermovies": {
        "id": "wintermovies",
        "category": "entertainment",
        "mode": "match",
        "icon": "❄️",
        "gradient": "from-cyan-500 to-blue-800",
        "title": {
            "de": "Winter- & Weihnachtsfilme",
            "en": "Holiday & Winter Movies",
            "es": "Películas de Invierno y Navidad",
            "fr": "Films d'Hiver & de Noël",
            "it": "Film d'Inverno & di Natale"
        },
        "sub": {
            "de": "Kuscheldecke an: Welcher Filmklassiker läuft?",
            "en": "Cozy movie night classics settled in 30s",
            "es": "Clásicos para una tarde de sofá y manta",
            "fr": "Sous le plaid bien au chaud : quel grand classique ?",
            "it": "Sotto il plaid al caldo: quale classico guardiamo?"
        },
        "cards": [
            {
                "id": 0,
                "emoji": "⚡",
                "bg": "from-amber-600 to-slate-900",
                "tag": {
                    "de": "Kult-Magie",
                    "en": "Hogwarts Nostalgia",
                    "es": "Magia y nostalgia",
                    "fr": "Nostalgie Poudlard",
                    "it": "Nostalgia Hogwarts"
                },
                "title": {
                    "de": "Harry Potter Marathon",
                    "en": "Harry Potter Marathon",
                    "es": "Maratón de Harry Potter",
                    "fr": "Marathon Harry Potter",
                    "it": "Maratona Harry Potter"
                },
                "desc": {
                    "de": "Schnee über Hogwarts, goldene Kerzen und Nostalgie pur.",
                    "en": "Snow falling over Hogwarts, floating candles and pure cozy nostalgia.",
                    "es": "Nieve sobre Hogwarts, velas flotantes y pura magia de nuestra infancia.",
                    "fr": "La neige sur Poudlard, les bougies flottantes et la pure magie d'enfance.",
                    "it": "Neve su Hogwarts, candele fluttuanti e pura magia dell'infanzia."
                },
                "actionLabel": {
                    "de": "Harry Potter auf Prime Video streamen",
                    "en": "Stream Harry Potter on Prime Video",
                    "es": "Ver Harry Potter en Prime Video",
                    "fr": "Regarder Harry Potter sur Prime Video",
                    "it": "Guarda Harry Potter su Prime Video"
                },
                "actionUrl": "https://www.amazon.de/s?k=Harry+Potter+Film&i=instant-video&tag=f05b1-21"
            },
            {
                "id": 1,
                "emoji": "🎄",
                "bg": "from-red-600 to-green-800",
                "tag": {
                    "de": "Familien-Kult",
                    "en": "Holiday Slapstick",
                    "es": "Comedia de culto",
                    "fr": "Gags de Noël",
                    "it": "Risate Natalizie"
                },
                "title": {
                    "de": "Kevin – Allein zu Haus (Home Alone)",
                    "en": "Home Alone",
                    "es": "Solo en Casa (Home Alone)",
                    "fr": "Maman, J'ai Raté l'Avion !",
                    "it": "Mamma, Ho Perso l'Aereo!"
                },
                "desc": {
                    "de": "Geniale Fallen, Lacher garantiert und das Gefühl von damals.",
                    "en": "Clever booby traps, holiday spirit, and endless childhood laughs.",
                    "es": "Trampas ingeniosas, risas aseguradas y el auténtico espíritu navideño.",
                    "fr": "Les pièges hilarants dans la maison et les rires garantis en famille.",
                    "it": "Le trappole geniali in casa, spirito festivo e risate che non stancano mai."
                },
                "actionLabel": {
                    "de": "Home Alone auf Prime Video suchen",
                    "en": "Stream Home Alone on Prime Video",
                    "es": "Ver Solo en Casa en Prime Video",
                    "fr": "Regarder Maman J'ai Raté l'Avion",
                    "it": "Guarda Mamma Ho Perso l'Aereo"
                },
                "actionUrl": "https://www.amazon.de/s?k=Kevin+allein+zu+haus&i=instant-video&tag=f05b1-21"
            },
            {
                "id": 2,
                "emoji": "❤️",
                "bg": "from-rose-500 to-red-800",
                "tag": {
                    "de": "Wohlfühl-RomCom",
                    "en": "Cozy Romance",
                    "es": "Comedia romántica",
                    "fr": "Romance au Coin du Feu",
                    "it": "Romanticismo & Camino"
                },
                "title": {
                    "de": "Liebe braucht keine Ferien (The Holiday)",
                    "en": "The Holiday or Love Actually",
                    "es": "The Holiday (Vacaciones) o Love Actually",
                    "fr": "The Holiday ou Love Actually",
                    "it": "L'Amore Non Va in Vacanza o Love Actually"
                },
                "desc": {
                    "de": "Ein verschneites englisches Cottage, London und pure Romantik.",
                    "en": "Snowy English cottages, roaring fireplaces and warm holiday romance.",
                    "es": "Una casita de campo nevada en Inglaterra y mucho romance acogedor.",
                    "fr": "Chaumières anglaises sous la neige, cheminée qui crépite et romances cultes.",
                    "it": "Cottage inglesi innevati, caminetto acceso e grandi amori natalizi."
                },
                "actionLabel": {
                    "de": "The Holiday auf Prime Video streamen",
                    "en": "Stream The Holiday on Prime Video",
                    "es": "Ver The Holiday en Prime Video",
                    "fr": "Regarder The Holiday",
                    "it": "Guarda L'Amore Non Va in Vacanza"
                },
                "actionUrl": "https://www.amazon.de/s?k=The+Holiday+Liebe+braucht+keine+Ferien&i=instant-video&tag=f05b1-21"
            },
            {
                "id": 3,
                "emoji": "🏢",
                "bg": "from-slate-700 to-red-950",
                "tag": {
                    "de": "Weihnachts-Action",
                    "en": "Action Legend",
                    "es": "Acción mítica",
                    "fr": "Légende d'Action",
                    "it": "Azione Cult"
                },
                "title": {
                    "de": "Stirb Langsam (Die Hard)",
                    "en": "Die Hard",
                    "es": "Jungla de Cristal (Die Hard)",
                    "fr": "Piège de Cristal (Die Hard)",
                    "it": "Trappola di Cristallo (Die Hard)"
                },
                "desc": {
                    "de": "Yippee-ki-yay! Der beste unkonventionelle Weihnachtsfilm aller Zeiten.",
                    "en": "Yippee-ki-yay! The ultimate high-stakes holiday action masterpiece.",
                    "es": "¡Yippee-ki-yay! La mejor película de acción ambientada en Navidad.",
                    "fr": "Yippee-ki-yay ! Le chef-d'œuvre absolu du film d'action de réveillon.",
                    "it": "Yippee-ki-yay! Il capolavoro d'azione per eccellenza della vigilia di festa."
                },
                "actionLabel": {
                    "de": "Die Hard auf Prime Video suchen",
                    "en": "Stream Die Hard on Prime Video",
                    "es": "Ver Die Hard en Prime Video",
                    "fr": "Regarder Die Hard sur Prime Video",
                    "it": "Guarda Die Hard su Prime Video"
                },
                "actionUrl": "https://www.amazon.de/s?k=Die+Hard+Stirb+langsam&i=instant-video&tag=f05b1-21"
            },
            {
                "id": 4,
                "emoji": "🚂",
                "bg": "from-blue-600 to-cyan-900",
                "tag": {
                    "de": "Herzerwärmend",
                    "en": "Cozy Animation",
                    "es": "Animación preciosa",
                    "fr": "Merveille d'Animation",
                    "it": "Capolavoro d'Animazione"
                },
                "title": {
                    "de": "Klaus oder Der Polarexpress",
                    "en": "Klaus or The Polar Express",
                    "es": "Klaus o El Expreso Polar",
                    "fr": "Klaus ou Le Pôle Express",
                    "it": "Klaus o Polar Express"
                },
                "desc": {
                    "de": "Wunderschön animiert, heiße Schokolade in der Hand und Gänsehaut.",
                    "en": "Breathtaking animation, hot cocoa in hand and genuine heartwarming moments.",
                    "es": "Animación maravillosa, chocolate caliente en mano y mucha emoción.",
                    "fr": "Visuels somptueux, chocolat chaud fumant à la main et grande émotion.",
                    "it": "Animazione poetica, cioccolata calda fumante in mano e pura emozione."
                },
                "actionLabel": {
                    "de": "Klaus / Polarexpress ansehen",
                    "en": "Stream Polar Express on Prime Video",
                    "es": "Ver Expreso Polar en Prime Video",
                    "fr": "Regarder Polar Express",
                    "it": "Guarda Polar Express"
                },
                "actionUrl": "https://www.amazon.de/s?k=Polarexpress+Film&i=instant-video&tag=f05b1-21"
            },
            {
                "id": 5,
                "emoji": "💡",
                "bg": "from-emerald-600 to-teal-900",
                "tag": {
                    "de": "Chaos & Lacher",
                    "en": "Hilarious Chaos",
                    "es": "Risas garantizadas",
                    "fr": "Chaos Hilarant",
                    "it": "Caos Spassoso"
                },
                "title": {
                    "de": "Schöne Bescherung (Griswolds)",
                    "en": "National Lampoon's Christmas Vacation",
                    "es": "¡Socorro! Ya es Navidad (Griswold)",
                    "fr": "Le Sapin a des Boules (Famille Griswold)",
                    "it": "Un Natale Esplosivo (National Lampoon)"
                },
                "desc": {
                    "de": "25.000 Lichter, explodierende Truthähne und absoluter Kult-Slapstick.",
                    "en": "25,000 holiday lights, turkey disasters and chaotic family humor.",
                    "es": "25.000 bombillas navideñas y el caos familiar más divertido del cine.",
                    "fr": "25 000 ampoules lumineuses, dinde carbonisée et gaffes familiales cultes.",
                    "it": "25.000 lucine di Natale, tacchino bruciato e disastri comici in famiglia."
                },
                "actionLabel": {
                    "de": "Griswolds auf Prime Video suchen",
                    "en": "Stream Christmas Vacation",
                    "es": "Ver Los Griswold en Prime Video",
                    "fr": "Regarder Le Sapin a des Boules",
                    "it": "Guarda Un Natale Esplosivo"
                },
                "actionUrl": "https://www.amazon.de/s?k=Schoene+Bescherung+Griswolds&i=instant-video&tag=f05b1-21"
            },
            {
                "id": 6,
                "emoji": "💍",
                "bg": "from-amber-600 to-stone-900",
                "tag": {
                    "de": "Episches Abenteuer",
                    "en": "Epic Fantasy Binge",
                    "es": "Fantasía épica",
                    "fr": "Fresque Épique Fantasy",
                    "it": "Saga Fantasy Epica"
                },
                "title": {
                    "de": "Der Herr der Ringe (Lord of the Rings)",
                    "en": "Lord of the Rings Marathon",
                    "es": "El Señor de los Anillos",
                    "fr": "Marathon Le Seigneur des Anneaux",
                    "it": "Maratona Il Signore degli Anelli"
                },
                "desc": {
                    "de": "Über 3 Stunden episches Mittelerde, Auenland-Gemütlichkeit und Kaminfeuer.",
                    "en": "Epic Middle-earth journey, cozy Shire vibes and unmatched storytelling.",
                    "es": "Una aventura épica, paisajes nevados y una tarde de cine inolvidable.",
                    "fr": "Voyage grandiose en Terre du Milieu, Comté verdoyante et narration inégalée.",
                    "it": "Il viaggio nella Terra di Mezzo, la quiete della Contea e avventura senza tempo."
                },
                "actionLabel": {
                    "de": "Herr der Ringe auf Prime Video streamen",
                    "en": "Stream LOTR on Prime Video",
                    "es": "Ver El Señor de los Anillos",
                    "fr": "Regarder Le Seigneur des Anneaux",
                    "it": "Guarda Il Signore degli Anelli"
                },
                "actionUrl": "https://www.amazon.de/s?k=Herr+der+Ringe+Trilogie&i=instant-video&tag=f05b1-21"
            },
            {
                "id": 7,
                "emoji": "🍫",
                "bg": "from-purple-600 to-rose-900",
                "tag": {
                    "de": "Süß & Fantasievoll",
                    "en": "Whimsical & Sweet",
                    "es": "Dulce y fantasía",
                    "fr": "Magie & Douceurs",
                    "it": "Magia & Cioccolato"
                },
                "title": {
                    "de": "Wonka oder Charlie & die Schokoladenfabrik",
                    "en": "Wonka or Charlie & the Chocolate Factory",
                    "es": "Wonka o Charlie y la Fábrica de Chocolate",
                    "fr": "Wonka ou Charlie et la Chocolaterie",
                    "it": "Wonka o La Fabbrica di Cioccolato"
                },
                "desc": {
                    "de": "Bunte Magie, Musik, fliegende Pralinen und beste Laune.",
                    "en": "Colorful magic, flying sweets, heartwarming music and uplifting optimism.",
                    "es": "Chocolates voladores, canciones preciosas y pura fantasía para el sofá.",
                    "fr": "Friandises volantes, décors féeriques, musique entraînante et pur optimisme.",
                    "it": "Dolci volanti, colori da favola, canzoni memorabili e tanta dolcezza."
                },
                "actionLabel": {
                    "de": "Wonka auf Prime Video streamen",
                    "en": "Stream Wonka on Prime Video",
                    "es": "Ver Wonka en Prime Video",
                    "fr": "Regarder Wonka sur Prime Video",
                    "it": "Guarda Wonka su Prime Video"
                },
                "actionUrl": "https://www.amazon.de/s?k=Wonka+Film&i=instant-video&tag=f05b1-21"
            }
        ]
    }
};

// Aliases for seamless routing, deep linking, and backwards compatibility:
DECKS.streaming = DECKS.movie;
DECKS.chores = DECKS.household;
