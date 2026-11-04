/**************************************************************
 * SwipeMatch – Deck & Card Database (ID-basiert für 0-Byte Sync)
 * Unterstützt mode: "match" (Konsens) & mode: "chores" (Anti-Match / Fair-Split)
 **************************************************************/

const DECKS = {
    // ============================================================
    // KATEGORIE 1: ESSEN & DRINKS (food)
    // ============================================================
    dinner: {
        id: "dinner",
        category: "food",
        mode: "match",
        icon: "🍔",
        gradient: "from-orange-500 to-rose-600",
        title: { de: "Abendessen-Retter", en: "Dinner Savior", es: "¿Qué cenamos hoy?" },
        sub: { de: "8 schnelle Ideen gegen den Hunger", en: "8 quick cravings compared", es: "8 ideas rápidas sin discutir" },
        cards: [
            {
                id: 0, emoji: "🍝", bg: "from-amber-600 to-red-700",
                tag: { de: "20 Min Selbstkochen", en: "20m Home Cooked", es: "20 min en casa" },
                title: { de: "Cremige Pasta / Carbonara", en: "Creamy Pasta Night", es: "Pasta Cremosa" },
                desc: { de: "Schnell, warm, glücklich machend – geht immer.", en: "Fast comfort food that never disappoints.", es: "Rápido, reconfortante y delicioso." },
                actionLabel: { de: "5-Zutaten Blitz-Rezept öffnen", en: "Get 15-Min Recipe", es: "Ver receta rápida" },
                actionUrl: "https://www.google.com/search?q=schnelle+cremige+pasta+rezept"
            },
            {
                id: 1, emoji: "🍕", bg: "from-rose-600 to-orange-600",
                tag: { de: "Ofen oder Lieferdienst", en: "Delivery or Oven", es: "Horno o Delivery" },
                title: { de: "Heiße Pizza & Couch", en: "Hot Pizza Night", es: "Noche de Pizza" },
                desc: { de: "Null Abwasch, maximaler Käse-Faktor.", en: "Zero dishes, maximum cheese.", es: "Cero platos sucios, máximo queso." },
                actionLabel: { de: "Pizzerien in der Nähe prüfen", en: "Find Top Pizza Nearby", es: "Buscar pizzerías cerca" },
                actionUrl: "https://www.google.com/maps/search/Pizza"
            },
            {
                id: 2, emoji: "🍣", bg: "from-emerald-600 to-teal-800",
                tag: { de: "Frisch & Leicht", en: "Fresh & Light", es: "Fresco y Ligero" },
                title: { de: "Sushi oder Poke Bowl", en: "Sushi / Poke Bowl", es: "Sushi o Poke Bowl" },
                desc: { de: "Lachs, Avocado, Reis & Sojasauce.", en: "Salmon, avocado, rice & soy glaze.", es: "Salmón, aguacate y arroz." },
                actionLabel: { de: "Sushi & Bowls in der Nähe", en: "Find Sushi / Bowls", es: "Buscar Sushi cerca" },
                actionUrl: "https://www.google.com/maps/search/Sushi+Poke+Bowl"
            },
            {
                id: 3, emoji: "🌮", bg: "from-yellow-600 to-orange-700",
                tag: { de: "Fingerfood", en: "Hands-On Fun", es: "Manos a la obra" },
                title: { de: "Wraps, Tacos oder Burritos", en: "Tacos & Loaded Wraps", es: "Tacos o Fajitas" },
                desc: { de: "Alles auf den Tisch stellen und selbst rollen.", en: "Put everything on the table and roll your own.", es: "Todo a la mesa y que cada uno arme el suyo." },
                actionLabel: { de: "Zutaten-Checkliste ansehen", en: "Quick Taco Checklist", es: "Ver ingredientes" },
                actionUrl: "https://www.google.com/search?q=wraps+selber+machen+ideen"
            },
            {
                id: 4, emoji: "🍔", bg: "from-red-700 to-stone-800",
                tag: { de: "Soulfood", en: "Cheat Meal", es: "Capricho" },
                title: { de: "Saftige Burger & Süßkartoffel-Pommes", en: "Smash Burgers & Fries", es: "Hamburguesa con Patatas" },
                desc: { de: "Heute zählen wir keine Kalorien.", en: "Calories don't count tonight.", es: "Hoy no se cuentan calorías." },
                actionLabel: { de: "Beste Burger-Spots finden", en: "Best Burgers Nearby", es: "Buscar hamburgueserías" },
                actionUrl: "https://www.google.com/maps/search/Burger"
            },
            {
                id: 5, emoji: "🍜", bg: "from-fuchsia-700 to-indigo-900",
                tag: { de: "Würzig & Warm", en: "Spicy & Warm", es: "Exótico" },
                title: { de: "Thai-Curry oder Ramen", en: "Thai Curry or Ramen", es: "Curry Tailandés o Wok" },
                desc: { de: "Kokosmilch, Gemüse, Hähnchen oder Tofu.", en: "Coconut milk, veggies & aromatic spices.", es: "Leche de coco, verduras y especias." },
                actionLabel: { de: "Asia-Food / Rezept öffnen", en: "Find Asian Food", es: "Ver opciones asiáticas" },
                actionUrl: "https://www.google.com/search?q=schnelles+thai+curry+rezept"
            },
            {
                id: 6, emoji: "🥗", bg: "from-lime-600 to-emerald-800",
                tag: { de: "Gesund & Proteinreich", en: "Clean & High Protein", es: "Sano y Ligero" },
                title: { de: "Großer Caesar-Salad / Ofengemüse", en: "Loaded Caesar / Oven Veggies", es: "Ensalada César o Verduras al Horno" },
                desc: { de: "Leichtes Bauchgefühl für guten Schlaf.", en: "Feel great afterwards, zero food coma.", es: "Cena ligera para dormir genial." },
                actionLabel: { de: "Schnelles Dressing-Rezept", en: "Quick Recipe", es: "Ver receta rápida" },
                actionUrl: "https://www.google.com/search?q=caesar+salad+schnell+rezept"
            },
            {
                id: 7, emoji: "🍳", bg: "from-sky-600 to-blue-800",
                tag: { de: "10-Minuten-Klassiker", en: "10-Min Saver", es: "En 10 minutos" },
                title: { de: "Stullen-Brett & Strammer Max", en: "Breakfast for Dinner", es: "Tostas con Huevo y Aguacate" },
                desc: { de: "Frisches Brot, Spiegelei, Avocado oder Käseplatte.", en: "Sourdough, eggs, avocado & zero stress.", es: "Pan crujiente, huevos y cero estrés." },
                actionLabel: { de: "Ideen für warmes Abendbrot", en: "View Topping Ideas", es: "Ver ideas de tostas" },
                actionUrl: "https://www.google.com/search?q=stullen+abendbrot+ideen"
            },
            {
                id: 8, emoji: "🥟", bg: "from-amber-600 to-orange-800",
                tag: { de: "Seelenfutter", en: "Comfort Classic", es: "Clásico Casero" },
                title: { de: "Käsespätzle oder Schupfnudeln aus der Pfanne", en: "Cheesy Spaetzle & Crispy Onions", es: "Ñoquis o Pasta Gratinada con Queso" },
                desc: { de: "Geschmolzener Bergkäse und Röstzwiebeln – pures Glück.", en: "Melted alpine cheese and crispy fried onions.", es: "Queso fundido y cebolla crujiente." },
                actionLabel: { de: "15-Min Käsespätzle Rezept", en: "Quick Recipe", es: "Ver receta rápida" },
                actionUrl: "https://www.google.com/search?q=kaesespaetzle+schnell+pfanne+rezept"
            },
            {
                id: 9, emoji: "🥙", bg: "from-red-600 to-amber-700",
                tag: { de: "Auf die Hand", en: "Streetfood King", es: "Streetfood" },
                title: { de: "Döner, Dürüm oder Halloumi-Tasche", en: "Kebab, Shawarma or Halloumi Wrap", es: "Kebab, Dürüm o Falafel" },
                desc: { de: "Knuspriges Brot, Knoblauchsauce und null Abwasch.", en: "Crispy bread, garlic sauce & zero kitchen mess.", es: "Pan crujiente, salsa de ajo y cero fregar." },
                actionLabel: { de: "Döner in der Nähe finden", en: "Find Kebab Nearby", es: "Buscar Kebab cerca" },
                actionUrl: "https://www.google.com/maps/search/Doener+Kebab"
            },
            {
                id: 10, emoji: "🍛", bg: "from-orange-600 to-red-900",
                tag: { de: "Würzig & Warm", en: "Rich & Creamy", es: "Especiado" },
                title: { de: "Butter Chicken oder Rotes Linsen-Dal mit Naan", en: "Butter Chicken or Lentil Dal + Naan", es: "Butter Chicken o Curry con Pan Naan" },
                desc: { de: "Cremige Sauce, Reis und warmes Fladenbrot zum Dippen.", en: "Creamy spiced sauce and warm flatbread.", es: "Salsa cremosa especiada con pan caliente." },
                actionLabel: { de: "Rezept oder Inder finden", en: "Recipe or Delivery", es: "Receta o restaurante" },
                actionUrl: "https://www.google.com/search?q=butter+chicken+oder+linsen+dal+schnell"
            },
            {
                id: 11, emoji: "🥔", bg: "from-yellow-600 to-amber-800",
                tag: { de: "Aus dem Ofen", en: "Oven Baked", es: "Al horno" },
                title: { de: "Gefüllte Ofenkartoffel (Kumpir) mit Sour Cream", en: "Loaded Baked Potato (Kumpir)", es: "Patata Asada Rellena (Kumpir)" },
                desc: { de: "Mit Butter, Käse, Mais, Kräuterquark oder Lachs.", en: "Fluffy potato loaded with butter, cheese & sour cream.", es: "Con mantequilla, queso, maíz y crema agria." },
                actionLabel: { de: "Top Kumpir-Füllungen", en: "Topping Ideas", es: "Ideas de relleno" },
                actionUrl: "https://www.google.com/search?q=kumpir+ofenkartoffel+fuellung+ideen"
            },
            {
                id: 12, emoji: "🥧", bg: "from-amber-500 to-stone-700",
                tag: { de: "Knusprig & Dünn", en: "15-Min Oven", es: "15 min al horno" },
                title: { de: "Elsässer Flammkuchen (Klassisch oder Feta-Feige)", en: "Crispy Tarte Flambée (Flammkuchen)", es: "Coca Crujiente o Flammkuchen" },
                desc: { de: "Fertigteig ausrollen, Schmand drauf, 12 Minuten in den Ofen.", en: "Roll out dough, sour cream, bacon or feta, 12 mins in oven.", es: "Masa fina, crema fresca y al horno 12 minutos." },
                actionLabel: { de: "Flammkuchen-Ideen öffnen", en: "Flammkuchen Toppings", es: "Ideas de ingredientes" },
                actionUrl: "https://www.google.com/search?q=flammkuchen+belag+ideen"
            },
            {
                id: 13, emoji: "🧀", bg: "from-yellow-500 to-red-700",
                tag: { de: "Kino-Feeling zuhause", en: "Couch Sharing", es: "Para compartir" },
                title: { de: "Überbackene Nacho-Pfanne mit Salsa & Guacamole", en: "Loaded Sheet-Pan Nachos", es: "Nachos Gratinados con Guacamole" },
                desc: { de: "Tortilla-Chips, Jalapeños, Hack/Bohnen & dick Käse überbacken.", en: "Tortilla chips, melted cheddar, jalapeños & guac.", es: "Nachos con mucho cheddar fundido y guacamole." },
                actionLabel: { de: "Nacho-Blech Rezept", en: "Sheet-Pan Nachos", es: "Ver receta de nachos" },
                actionUrl: "https://www.google.com/search?q=ueberbackene+nachos+ofen+rezept"
            },
            {
                id: 14, emoji: "🍲", bg: "from-red-700 to-rose-950",
                tag: { de: "Aus dem Ofen", en: "Italian Soulfood", es: "Clásico al horno" },
                title: { de: "Heiße Lasagne oder Cannelloni", en: "Baked Lasagna & Garlic Bread", es: "Lasaña Caliente Gratinada" },
                desc: { de: "Schicht für Schicht geschmolzener Käse und Bolognese/Gemüse.", en: "Layers of pasta, rich sauce and bubbling cheese.", es: "Capas de pasta, salsa rica y queso gratinado." },
                actionLabel: { de: "Italiener oder Rezept öffnen", en: "Find Lasagna", es: "Buscar lasaña" },
                actionUrl: "https://www.google.com/search?q=schnelle+pfannen+lasagne+rezept"
            },
            {
                id: 15, emoji: "🌿", bg: "from-teal-600 to-emerald-900",
                tag: { de: "Frisch & Knackig", en: "Fresh & Light", es: "Fresco y Ligero" },
                title: { de: "Vietnamesische Sommerrollen oder Reisnudelsalat", en: "Vietnamese Noodle Bowl / Rolls", es: "Rollitos Vietnamitas o Ensalada de Fideos" },
                desc: { de: "Mit Erdnuss-Dip, Minze, Gurke, Mango und Tofu/Garnelen.", en: "Peanut sauce, fresh herbs, mango & rice noodles.", es: "Salsa de cacahuete, hierbas frescas y mango." },
                actionLabel: { de: "Erdnuss-Dip & Rezept", en: "Peanut Sauce Recipe", es: "Ver receta" },
                actionUrl: "https://www.google.com/search?q=reisnudelsalat+erdnusssauce+rezept"
            },
            {
                id: 16, emoji: "🧆", bg: "from-amber-600 to-emerald-900",
                tag: { de: "Teilen & Dippen", en: "Mediterranean", es: "Mediterráneo" },
                title: { de: "Mezze-Abend: Hummus, Falafel, Oliven & Fladenbrot", en: "Mediterranean Mezze Platter", es: "Tabla Mezze: Hummus, Falafel y Pita" },
                desc: { de: "Viele kleine Schälchen auf den Tisch und gemütlich snacken.", en: "Hummus, feta, olives, falafel & warm pita bread.", es: "Hummus, queso feta, aceitunas y pan pita caliente." },
                actionLabel: { de: "Mezze-Ideen ansehen", en: "Mezze Platter Ideas", es: "Ideas de picoteo" },
                actionUrl: "https://www.google.com/search?q=mezze+platte+abendessen+ideen"
            },
            {
                id: 17, emoji: "🥞", bg: "from-amber-500 to-orange-700",
                tag: { de: "Herzhaft oder Süß", en: "Sweet or Savory", es: "Dulce o Salado" },
                title: { de: "Pfannkuchen / Crêpes (mit Käse-Schinken oder Nutella)", en: "Savory & Sweet Crêpes / Pancakes", es: "Crepes Salados y Dulces" },
                desc: { de: "Erst einen herzhaften mit Käse, danach einen süßen als Nachtisch!", en: "Start with cheese & ham, finish with Nutella!", es: "Primero uno de jamón y queso, luego uno dulce." },
                actionLabel: { de: "5-Min Pfannkuchenteig", en: "Quick Batter Recipe", es: "Receta de masa rápida" },
                actionUrl: "https://www.google.com/search?q=pfannkuchen+grundrezept+schnell"
            },
            {
                id: 18, emoji: "🥖", bg: "from-orange-600 to-stone-800",
                tag: { de: "Knusprig überbacken", en: "Melted Subs", es: "Bocadillos calientes" },
                title: { de: "Heiße Ofen-Baguettes / Panini / Grilled Cheese", en: "Hot Melted Panini / Grilled Cheese", es: "Paninis o Sándwich Cubano Fundido" },
                desc: { de: "Ciabatta oder Toast mit Pesto, Tomate und Mozzarella knusprig rösten.", en: "Sourdough or ciabatta with pesto & melted mozzarella.", es: "Pan crujiente con pesto, tomate y mozzarella fundida." },
                actionLabel: { de: "Grilled-Cheese Ideen", en: "Best Panini Combos", es: "Ideas de sándwiches" },
                actionUrl: "https://www.google.com/search?q=grilled+cheese+sandwich+ideen"
            },
            {
                id: 19, emoji: "🎃", bg: "from-orange-500 to-amber-800",
                tag: { de: "Warm & Cremig", en: "Cozy Bowl", es: "Cuchara caliente" },
                title: { de: "Cremige Tomaten- oder Kürbissuppe mit Knoblauchbrot", en: "Creamy Tomato Soup & Garlic Bread", es: "Crema Caliente con Pan de Ajo" },
                desc: { de: "Wärmt von innen, perfekt mit geröstetem Baguette zum Dippen.", en: "Warm, comforting bowl with crunchy garlic bread.", es: "Reconfortante y perfecta para mojar pan." },
                actionLabel: { de: "Schnelles Suppen-Rezept", en: "20-Min Soup Recipe", es: "Receta en 20 minutos" },
                actionUrl: "https://www.google.com/search?q=schnelle+tomatensuppe+rezept"
            },
            {
                id: 20, emoji: "🐟", bg: "from-cyan-700 to-slate-900",
                tag: { de: "Vom Blech", en: "One Sheet-Pan", es: "Todo en una bandeja" },
                title: { de: "Ofen-Lachs (oder Halloumi) mit Rosmarin-Kartoffeln", en: "Sheet-Pan Salmon & Crispy Potatoes", es: "Salmón o Halloumi al Horno con Patatas" },
                desc: { de: "Alles auf ein Backblech, der Ofen macht die komplette Arbeit.", en: "Toss everything on one tray – oven does the work.", es: "Todo a la bandeja y el horno hace el trabajo." },
                actionLabel: { de: "Blech-Rezept öffnen", en: "Sheet-Pan Recipe", es: "Ver receta al horno" },
                actionUrl: "https://www.google.com/search?q=ofenlachs+mit+kartoffeln+vom+blech"
            },
            {
                id: 21, emoji: "🍷", bg: "from-rose-800 to-stone-900",
                tag: { de: "0% Kochen", en: "Zero Cooking", es: "Sin cocinar" },
                title: { de: "Tapas-, Käse- & Antipasti-Brett auf der Couch", en: "Charcuterie, Cheese & Tapas Board", es: "Tabla de Quesos, Ibéricos y Picoteo" },
                desc: { de: "Baguette, Oliven, guter Käse, Trauben und Dips – Urlaubsfeeling.", en: "Crusty bread, olives, cheeses, grapes & dips.", es: "Pan rico, quesos, aceitunas y cero cocinar." },
                actionLabel: { de: "Ideen für die perfekte Platte", en: "Board Styling Ideas", es: "Ideas para la tabla" },
                actionUrl: "https://www.google.com/search?q=antipasti+kaeseplatte+ideen"
            }
        ]
    },

    delivery: {
        id: "delivery",
        category: "food",
        mode: "match",
        icon: "🛵",
        gradient: "from-red-500 to-amber-500",
        title: { de: "Lieferdienst-Duell", en: "Takeout Showdown", es: "Duelo de Delivery" },
        sub: { de: "Was bestellen oder holen wir uns heute?", en: "What are we ordering in tonight?", es: "¿Qué pedimos a domicilio hoy?" },
        cards: [
            {
                id: 0, emoji: "🥙", bg: "from-amber-700 to-red-800",
                tag: { de: "Streetfood-König", en: "Streetfood King", es: "Rey del Streetfood" },
                title: { de: "Döner, Dürüm oder Falafel-Teller", en: "Kebab, Shawarma or Falafel", es: "Kebab, Dürüm o Falafel" },
                desc: { de: "Mit scharfer Sauce, Knoblauch und ordentlich Salat.", en: "Garlic sauce, crispy bread, pure satisfaction.", es: "Con salsa de ajo y bien cargado." },
                actionLabel: { de: "Beste Dönerläden in der Nähe", en: "Find Kebab Nearby", es: "Buscar Kebab cerca" },
                actionUrl: "https://www.google.com/maps/search/Kebab+Doener"
            },
            {
                id: 1, emoji: "🍕", bg: "from-rose-600 to-red-800",
                tag: { de: "Italienischer Klassiker", en: "Italian Classic", es: "Clásico Italiano" },
                title: { de: "Steinofen-Pizza vom Italiener", en: "Wood-Fired Pizza", es: "Pizza al Horno de Leña" },
                desc: { de: "Dünner Boden, geschmolzener Mozzarella, heiß im Karton.", en: "Crispy crust, melted mozzarella, zero dishes.", es: "Masa crujiente y queso fundido." },
                actionLabel: { de: "Pizzeria suchen", en: "Find Pizzeria", es: "Buscar Pizzería" },
                actionUrl: "https://www.google.com/maps/search/Pizzeria"
            },
            {
                id: 2, emoji: "🍛", bg: "from-orange-600 to-amber-800",
                tag: { de: "Seelenwärmer", en: "Comfort Spice", es: "Aromático" },
                title: { de: "Indisches Curry & warmes Naan-Brot", en: "Indian Curry & Garlic Naan", es: "Curry Indio y Pan Naan" },
                desc: { de: "Butter Chicken, Tikka Masala oder Dal mit Knoblauch-Naan.", en: "Butter chicken, palak paneer & fluffy naan.", es: "Tikka Masala y pan naan recién hecho." },
                actionLabel: { de: "Indische Restaurants zeigen", en: "Find Indian Takeout", es: "Buscar restaurante indio" },
                actionUrl: "https://www.google.com/maps/search/Indian+Restaurant"
            },
            {
                id: 3, emoji: "🥢", bg: "from-emerald-700 to-cyan-900",
                tag: { de: "Asiatisch", en: "Asian Craving", es: "Sabor Asiático" },
                title: { de: "Pad Thai, Gebratene Nudeln oder Pho", en: "Pad Thai, Wok Noodles or Pho", es: "Pad Thai, Wok o Ramen" },
                desc: { de: "Frisch aus dem Wok mit Erdnüssen, Limette oder Brühe.", en: "Fresh from the wok with peanuts & lime.", es: "Recién salido del wok con toque cítrico." },
                actionLabel: { de: "Asia-Lieferdienst finden", en: "Find Asian Takeout", es: "Buscar comida asiática" },
                actionUrl: "https://www.google.com/maps/search/Thai+Vietnamese+Restaurant"
            },
            {
                id: 4, emoji: "🍗", bg: "from-yellow-600 to-red-700",
                tag: { de: "Knusper-Faktor", en: "Crispy Crunch", es: "Crujiente" },
                title: { de: "Crispy Chicken, Wings & Loaded Fries", en: "Korean Fried Chicken & Fries", es: "Pollo Crujiente y Patatas" },
                desc: { de: "Außen knusprig, innen saftig – perfekt zum Film.", en: "Ultra crispy with dipping sauces.", es: "Crujiente por fuera, ideal con salsas." },
                actionLabel: { de: "Chicken & Burger Spots", en: "Find Fried Chicken", es: "Buscar pollo crujiente" },
                actionUrl: "https://www.google.com/maps/search/Fried+Chicken+Burger"
            },
            {
                id: 5, emoji: "🌯", bg: "from-lime-700 to-green-900",
                tag: { de: "Mexikanisch", en: "Mexican Fiesta", es: "Fiesta Mexicana" },
                title: { de: "Fette Burritos, Quesadillas & Guacamole", en: "Loaded Burritos & Quesadillas", es: "Burritos, Nachos y Guacamole" },
                desc: { de: "Mit Nachos, Salsa, Sour Cream und viel Avocado.", en: "Stuffed with rice, beans, cheese & guac.", es: "Con nachos, crema agria y guacamole." },
                actionLabel: { de: "Mexikaner in der Nähe", en: "Find Mexican Food", es: "Buscar mexicano cerca" },
                actionUrl: "https://www.google.com/maps/search/Mexican+Burrito"
            },
            {
                id: 6, emoji: "🍣", bg: "from-teal-600 to-slate-900",
                tag: { de: "Frisch gerollt", en: "Sushi Night", es: "Noche de Sushi" },
                title: { de: "Große Sushi-Box (Maki, Inside-Out & Crunchy Rolls)", en: "Sushi Platter & Crunchy Rolls", es: "Bandeja de Sushi y Crunchy Rolls" },
                desc: { de: "Stäbchen bereitlegen, Sojasauce & Wasabi – leicht und edel.", en: "Chopsticks ready, soy sauce, ginger & crispy rolls.", es: "Palillos listos, salsa de soja y rolls crujientes." },
                actionLabel: { de: "Sushi-Lieferdienst finden", en: "Find Sushi Delivery", es: "Buscar Sushi cerca" },
                actionUrl: "https://www.google.com/maps/search/Sushi+Delivery"
            },
            {
                id: 7, emoji: "🍔", bg: "from-red-700 to-stone-900",
                tag: { de: "Cheat-Day", en: "Smash Burger", es: "Burger Gourmet" },
                title: { de: "Smash-Burger mit Bacon, Cheese & Trüffel-Mayo", en: "Double Smash Burger & Loaded Fries", es: "Smash Burger con Patatas y Salsas" },
                desc: { de: "Brioche-Bun, geschmolzener Cheddar und knusprige Pommes.", en: "Brioche bun, melted cheddar and crispy fries.", es: "Pan brioche, cheddar fundido y patatas crujientes." },
                actionLabel: { de: "Burger-Lieferdienst suchen", en: "Find Burger Delivery", es: "Buscar hamburgueserías" },
                actionUrl: "https://www.google.com/maps/search/Smash+Burger"
            },
            {
                id: 8, emoji: "🥗", bg: "from-emerald-600 to-teal-900",
                tag: { de: "Frisch & Bunt", en: "Hawaiian Bowl", es: "Fresco y Sano" },
                title: { de: "Frische Poke Bowl (Lachs, Tuna oder Crispy Tofu)", en: "Custom Hawaiian Poke Bowl", es: "Poke Bowl (Salmón, Atún o Tofu)" },
                desc: { de: "Warmer Sushi-Reis, Mango, Edamame, Avocado und Spicy-Mayo.", en: "Sushi rice, mango, edamame, avocado & spicy mayo.", es: "Arroz de sushi, mango, edamame, aguacate y salsas." },
                actionLabel: { de: "Poke-Bowl Läden zeigen", en: "Find Poke Bowls", es: "Buscar Poke Bowl cerca" },
                actionUrl: "https://www.google.com/maps/search/Poke+Bowl"
            },
            {
                id: 9, emoji: "🍜", bg: "from-amber-700 to-stone-900",
                tag: { de: "Heiße Brühe", en: "Japanese Soulfood", es: "Sopa Japonesa" },
                title: { de: "Japanische Ramen-Suppe oder Udon-Nudeln + Gyoza", en: "Japanese Ramen Bowl & Crispy Gyoza", es: "Ramen Japonés y Gyozas Crujientes" },
                desc: { de: "Kräftige Brühe, zarte Nudeln, mariniertes Ei und Teigtaschen.", en: "Rich broth, noodles, marinated egg & dumplings.", es: "Caldo intenso, fideos, huevo marinado y gyozas." },
                actionLabel: { de: "Ramen in der Nähe finden", en: "Find Ramen Nearby", es: "Buscar Ramen cerca" },
                actionUrl: "https://www.google.com/maps/search/Ramen+Restaurant"
            },
            {
                id: 10, emoji: "🫒", bg: "from-sky-600 to-blue-950",
                tag: { de: "Urlaubs-Geschmack", en: "Greek Grill", es: "Sabor Griego" },
                title: { de: "Griechisch: Gyros-Pita, Souvlaki, Bifteki & Tzatziki", en: "Greek Gyros, Souvlaki & Tzatziki", es: "Griego: Gyros, Souvlaki y Tzatziki" },
                desc: { de: "Ordentlich Knoblauch-Tzatziki, Krautsalat, Feta und Pita-Brot.", en: "Grilled meats or halloumi, pita bread & creamy tzatziki.", es: "Pan pita caliente, feta, patatas y mucho tzatziki." },
                actionLabel: { de: "Griechen in der Nähe suchen", en: "Find Greek Food", es: "Buscar restaurante griego" },
                actionUrl: "https://www.google.com/maps/search/Greek+Restaurant+Gyros"
            },
            {
                id: 11, emoji: "🧆", bg: "from-yellow-600 to-emerald-950",
                tag: { de: "Orientalisch", en: "Middle Eastern", es: "Oriental" },
                title: { de: "Libanesisch: Schawarma, Hummus, Halloumi & Taboulé", en: "Lebanese Shawarma & Mezze Box", es: "Libanés: Shawarma, Hummus y Falafel" },
                desc: { de: "Sesamsauce (Tahini), Granatapfel, Knusper-Falafel und Fladenbrot.", en: "Tahini, pomegranate, crispy falafel and warm flatbread.", es: "Salsa tahini, falafel crujiente y pan recién hecho." },
                actionLabel: { de: "Schawarma & Falafel finden", en: "Find Lebanese Food", es: "Buscar comida libanesa" },
                actionUrl: "https://www.google.com/maps/search/Lebanese+Shawarma+Falafel"
            },
            {
                id: 12, emoji: "🍖", bg: "from-stone-700 to-red-950",
                tag: { de: "Rauchig & Deftig", en: "Smokehouse BBQ", es: "Barbacoa" },
                title: { de: "Spare Ribs, Pulled Pork Burger & Coleslaw", en: "BBQ Spare Ribs & Pulled Pork", es: "Costillas BBQ y Pulled Pork" },
                desc: { de: "Butterzart vom Grill mit rauchiger BBQ-Sauce und Maiskolben.", en: "Fall-off-the-bone ribs, smoky sauce & mac and cheese.", es: "Salsa barbacoa ahumada, costillas tiernas y patatas." },
                actionLabel: { de: "BBQ & Steakhouses suchen", en: "Find BBQ Nearby", es: "Buscar BBQ cerca" },
                actionUrl: "https://www.google.com/maps/search/BBQ+Spare+Ribs+Burger"
            },
            {
                id: 13, emoji: "🥟", bg: "from-red-600 to-rose-950",
                tag: { de: "Häppchen-Himmel", en: "Dumpling Feast", es: "Dim Sum" },
                title: { de: "Dim Sum, Bao Buns & Knusper-Ente", en: "Steamed Dim Sum & Fluffy Bao Buns", es: "Dim Sum, Bao Buns y Pato Crujiente" },
                desc: { de: "Gedämpfte Teigtaschen, fluffige Hefebrötchen und Hoisin-Sauce.", en: "Steamed dumplings, fluffy bao buns & crispy duck.", es: "Empanadillas al vapor, pan bao esponjoso y salsa hoisin." },
                actionLabel: { de: "Dim Sum & China-Restaurants", en: "Find Dim Sum / Bao", es: "Buscar Dim Sum cerca" },
                actionUrl: "https://www.google.com/maps/search/Dim+Sum+Chinese+Restaurant"
            },
            {
                id: 14, emoji: "🍝", bg: "from-amber-600 to-red-900",
                tag: { de: "Trattoria zuhause", en: "Pasta Delivery", es: "Pasta Italiana" },
                title: { de: "Überbackene Rigatoni al Forno / Trüffel-Pasta + Tiramisu", en: "Baked Pasta al Forno + Tiramisu", es: "Pasta al Forno Gratinada + Tiramisú" },
                desc: { de: "Heiße Pasta aus dem Steinofen und ein Tiramisu zum Teilen hinterher.", en: "Oven-baked cheesy pasta and a tiramisu to share.", es: "Pasta gratinada al horno y tiramisú de postre." },
                actionLabel: { de: "Italiener in der Nähe", en: "Find Italian Delivery", es: "Buscar restaurante italiano" },
                actionUrl: "https://www.google.com/maps/search/Italienisches+Restaurant"
            },
            {
                id: 15, emoji: "🌱", bg: "from-green-600 to-emerald-950",
                tag: { de: "100% Pflanzlich & Geil", en: "Plant-Based Craving", es: "100% Veggie" },
                title: { de: "Vegan Comfort Food (Beyond Burger, Seitan-Döner, Bowls)", en: "Plant-Based Smash Burger or Vegan Kebab", es: "Comida Vegana (Burger, Kebab o Bowl)" },
                desc: { de: "Voller Geschmack, kreative Saucen und null Fresskoma.", en: "All the flavor and crunch without the heavy food coma.", es: "Todo el sabor y salsas brutales sin pesadez." },
                actionLabel: { de: "Beste Veggie-Spots suchen", en: "Find Vegan / Veggie Spots", es: "Buscar sitios veggie cerca" },
                actionUrl: "https://www.google.com/maps/search/Vegan+Restaurant"
            }
        ]
    },

    quickcook: {
        id: "quickcook",
        category: "food",
        mode: "match",
        icon: "🍳",
        gradient: "from-amber-500 to-yellow-600",
        title: { de: "15-Min Vorrats-Küche", en: "15-Min Pantry Meals", es: "Cocina en 15 Minutos" },
        sub: { de: "Schnell selbst kochen ohne großen Einkauf", en: "Fast home cooking with minimal effort", es: "Rápido en casa sin complicarse" },
        cards: [
            {
                id: 0, emoji: "🥘", bg: "from-red-600 to-orange-700",
                tag: { de: "Nur 1 Pfanne", en: "One-Pan Wonder", es: "Una sola sartén" },
                title: { de: "Shakshuka (Eier in Tomaten-Paprika-Sauce)", en: "Shakshuka & Crusty Bread", es: "Shakshuka con Pan Crujiente" },
                desc: { de: "Dosentomaten, Gewürze, Eier rein und mit Brot dippen.", en: "Poached eggs in spiced tomato sauce.", es: "Huevos escalfados en salsa de tomate especiada." },
                actionLabel: { de: "Shakshuka Blitz-Rezept", en: "View Recipe", es: "Ver receta rápida" },
                actionUrl: "https://www.google.com/search?q=shakshuka+schnell+rezept"
            },
            {
                id: 1, emoji: "🧀", bg: "from-amber-600 to-yellow-700",
                tag: { de: "Käse-Liebe", en: "Melted Cheese", es: "Mucho Queso" },
                title: { de: "Knusprige Käse-Quesadillas / Nachos", en: "Crispy Cheese Quesadillas", es: "Quesadillas o Nachos Gratinados" },
                desc: { de: "Tortillas in der Pfanne mit Käse, Mais & Bohnen anrösten.", en: "Pan-toasted tortillas with melted cheese & corn.", es: "Tortillas doradas en sartén con queso fundido." },
                actionLabel: { de: "Quesadilla Ideen öffnen", en: "Quesadilla Ideas", es: "Ideas de quesadillas" },
                actionUrl: "https://www.google.com/search?q=quesadillas+pfanne+schnell"
            },
            {
                id: 2, emoji: "🥔", bg: "from-emerald-600 to-teal-700",
                tag: { de: "12 Minuten", en: "12 Minutes", es: "En 12 minutos" },
                title: { de: "Gebratene Gnocchi-Pfanne mit Tomaten", en: "Crispy Pan-Fried Gnocchi", es: "Gnocchis Salteados en Sartén" },
                desc: { de: "Gnocchi direkt in Butter/Olivenöl knusprig braten + Mozzarella.", en: "Pan-seared gnocchi with cherry tomatoes & basil.", es: "Gnocchis dorados con tomates cherry y mozzarella." },
                actionLabel: { de: "Gnocchi-Pfanne Rezept", en: "Quick Gnocchi Recipe", es: "Ver receta de gnocchis" },
                actionUrl: "https://www.google.com/search?q=gnocchi+pfanne+schnell+rezept"
            },
            {
                id: 3, emoji: "🍚", bg: "from-orange-600 to-stone-800",
                tag: { de: "Reste-Retter", en: "Fridge Cleaner", es: "Cero desperdicio" },
                title: { de: "Egg Fried Rice (Gebratener Asia-Reis)", en: "Golden Egg Fried Rice", es: "Arroz Frito Estilo Asiático" },
                desc: { de: "Reis, Ei, Sojasauce, Frühlingszwiebeln und was der Kühlschrank hergibt.", en: "Rice, eggs, soy sauce, sesame & veggies.", es: "Arroz, huevo, salsa de soja y verduras." },
                actionLabel: { de: "Fried Rice Trick ansehen", en: "5-Min Fried Rice Guide", es: "Ver truco de arroz frito" },
                actionUrl: "https://www.google.com/search?q=egg+fried+rice+schnell+rezept"
            },
            {
                id: 4, emoji: "🌿", bg: "from-green-600 to-emerald-800",
                tag: { de: "Klassiker", en: "Pantry Staple", es: "Clásico infalible" },
                title: { de: "Pasta mit Pesto, Pinienkernen & Burrata", en: "Pesto Pasta with Burrata", es: "Pasta al Pesto con Burrata" },
                desc: { de: "Minimaler Aufwand, schmeckt wie im Urlaub in Italien.", en: "Minimal effort, tastes like an Italian holiday.", es: "Mínimo esfuerzo, máximo sabor italiano." },
                actionLabel: { de: "Upgrade-Tipps für Pesto-Pasta", en: "Pesto Upgrade Tips", es: "Ideas para mejorar tu pasta" },
                actionUrl: "https://www.google.com/search?q=pesto+pasta+pimpen+ideen"
            },
            {
                id: 5, emoji: "🧄", bg: "from-yellow-600 to-amber-900",
                tag: { de: "4 Zutaten", en: "4 Ingredients", es: "4 Ingredientes" },
                title: { de: "Spaghetti Aglio e Olio (mit Chili & viel Parmesan)", en: "Spaghetti Aglio, Olio e Peperoncino", es: "Spaghetti Aglio e Olio con Guindilla" },
                desc: { de: "Olivenöl, Knoblauch, Chili und Petersilie – in 10 Minuten fertig.", en: "Olive oil, garlic, chili flakes & parmesan in 10 mins.", es: "Aceite de oliva, ajo, guindilla y parmesano en 10 min." },
                actionLabel: { de: "Perfektes Aglio e Olio Rezept", en: "10-Min Recipe", es: "Ver receta original" },
                actionUrl: "https://www.google.com/search?q=spaghetti+aglio+e+olio+original+rezept"
            },
            {
                id: 6, emoji: "🧀", bg: "from-rose-600 to-purple-900",
                tag: { de: "Aus dem Ofen", en: "TikTok Classic", es: "Éxito al horno" },
                title: { de: "Baked Feta Pasta mit Kirschtomaten", en: "Oven-Baked Feta & Cherry Tomato Pasta", es: "Pasta con Queso Feta y Tomates al Horno" },
                desc: { de: "Feta und Tomaten mit Olivenöl in den Ofen, Nudeln drunterheben – fertig.", en: "Roast feta & tomatoes until creamy, toss with pasta.", es: "Feta y tomatitos al horno hasta que quede cremoso." },
                actionLabel: { de: "Baked Feta Rezept", en: "View Recipe", es: "Ver receta" },
                actionUrl: "https://www.google.com/search?q=baked+feta+pasta+rezept"
            },
            {
                id: 7, emoji: "🍳", bg: "from-amber-500 to-orange-700",
                tag: { de: "Protein-Kick", en: "8-Min Meal", es: "En 8 minutos" },
                title: { de: "Fluffiges Käse-Omelett oder Rührei auf Röstbrot", en: "Fluffy Cheese Omelette & Sourdough", es: "Tortilla Francesa Jugosa o Huevos Revueltos" },
                desc: { de: "Mit Schnittlauch, Feta, Champignons oder Tomaten in 8 Minuten auf dem Teller.", en: "Eggs, herbs, melted cheese and toasted bread.", es: "Con queso fundido, hierbas y pan tostado." },
                actionLabel: { de: "Omelett-Füllungen ansehen", en: "Omelette Ideas", es: "Ideas de relleno" },
                actionUrl: "https://www.google.com/search?q=omelett+fuellung+ideen+abendessen"
            },
            {
                id: 8, emoji: "🥟", bg: "from-teal-600 to-slate-900",
                tag: { de: "3 Minuten Kochzeit", en: "3-Min Boil", es: "Listo en 5 min" },
                title: { de: "Frische Tortellini in Salbei-Butter oder Sahnesauce", en: "Fresh Tortellini in Sage Butter / Cream", es: "Tortellini Frescos a la Crema o Mantequilla" },
                desc: { de: "Kühlregal-Tortellini brauchen nur 3 Minuten – Parmesan drüber, fertig!", en: "Fresh tortellini cook in 3 minutes flat.", es: "Los tortellini frescos se hacen en solo 3 minutos." },
                actionLabel: { de: "5-Min Tortellini-Saucen", en: "Quick Sauce Ideas", es: "Salsas en 5 minutos" },
                actionUrl: "https://www.google.com/search?q=tortellini+schnelle+sauce+rezept"
            },
            {
                id: 9, emoji: "🥜", bg: "from-orange-700 to-red-900",
                tag: { de: "Cremig & Würzig", en: "10-Min Wok", es: "10 min en sartén" },
                title: { de: "10-Min Erdnussbutter-Asia-Nudeln (Spicy Peanut Noodles)", en: "10-Min Spicy Peanut Butter Noodles", es: "Fideos Asiáticos con Salsa de Cacahuete" },
                desc: { de: "Erdnussbutter, Sojasauce, Knoblauch, Chili & heißes Nudelwasser verrühren.", en: "Peanut butter, soy sauce, chili oil & noodles.", es: "Crema de cacahuete, soja, toque picante y fideos." },
                actionLabel: { de: "Erdnuss-Nudeln Rezept", en: "Peanut Noodle Recipe", es: "Ver receta rápida" },
                actionUrl: "https://www.google.com/search?q=schnelle+erdnuss+nudeln+sojasauce+rezept"
            },
            {
                id: 10, emoji: "🐟", bg: "from-sky-600 to-indigo-900",
                tag: { de: "Vorratskammer-Held", en: "Pantry Hero", es: "De despensa" },
                title: { de: "Thunfisch-Pasta oder Kichererbsen-Salat (Mediterran)", en: "Mediterranean Tuna Pasta or Chickpea Salad", es: "Pasta con Atún o Ensalada Mediterránea" },
                desc: { de: "Alles aus dem Vorratsschrank: Oliven, Kapern, Zwiebeln, Tomaten.", en: "Made 100% from pantry staples in 12 minutes.", es: "Con ingredientes que siempre hay en la despensa." },
                actionLabel: { de: "Vorrats-Rezept öffnen", en: "Pantry Recipe", es: "Ver receta" },
                actionUrl: "https://www.google.com/search?q=schnelle+thunfisch+pasta+rezept"
            },
            {
                id: 11, emoji: "🥪", bg: "from-yellow-600 to-stone-800",
                tag: { de: "Heiß & Knusprig", en: "Sandwich Lover", es: "Tostado" },
                title: { de: "Club-Sandwich, Croque Monsieur oder Hawaii-Toast", en: "Loaded Club Sandwich or Croque Monsieur", es: "Sándwich Club o Croque Monsieur Gratinado" },
                desc: { de: "Dreistöckig belegt oder mit dick Käse im Ofen/Kontaktgrill geröstet.", en: "Triple-decker toasted sandwich with melted cheese.", es: "Sándwich caliente con queso fundido y crujiente." },
                actionLabel: { de: "Heiße Sandwich-Ideen", en: "Hot Sandwich Recipes", es: "Ideas de sándwiches" },
                actionUrl: "https://www.google.com/search?q=warme+sandwiches+abendessen+ideen"
            },
            {
                id: 12, emoji: "🍜", bg: "from-rose-600 to-amber-800",
                tag: { de: "6-Minuten-Hack", en: "Viral Upgrade", es: "Truco rápido" },
                title: { de: "Pimped Instant-Ramen (mit Ei, Frühlingszwiebeln & Sesam)", en: "Upgraded Gourmet Instant Ramen", es: "Ramen Instantáneo Mejorado con Huevo" },
                desc: { de: "Ramen-Päckchen + wachsweiches Ei, Butter, Knoblauch und Sesamöl.", en: "Add a soft-boiled egg, butter, garlic & green onions.", es: "Añadir huevo poché, cebolleta, sésamo y toque cremoso." },
                actionLabel: { de: "Ramen-Upgrade Tricks", en: "Ramen Upgrade Guide", es: "Trucos para mejorar ramen" },
                actionUrl: "https://www.google.com/search?q=instant+ramen+pimpen+ideen"
            },
            {
                id: 13, emoji: "🥣", bg: "from-orange-500 to-red-800",
                tag: { de: "1 Topf, 15 Min", en: "One-Pot Cozy", es: "Una sola olla" },
                title: { de: "Schnelles Rote-Linsen-Curry mit Kokosmilch", en: "15-Min Red Lentil Coconut Curry", es: "Curry Rápido de Lentejas Rojas y Coco" },
                desc: { de: "Rote Linsen kochen in 10 Minuten weich – Kokosmilch & Currypaste dazu!", en: "Red lentils cook in 10 mins flat with coconut milk.", es: "Las lentejas rojas se hacen en 10 min con leche de coco." },
                actionLabel: { de: "15-Min Linsen-Curry Rezept", en: "15-Min Curry Recipe", es: "Ver receta rápida" },
                actionUrl: "https://www.google.com/search?q=rotes+linsen+kokos+curry+15+minuten"
            }
        ]
    },

    drinks: {
        id: "drinks",
        category: "food",
        mode: "match",
        icon: "🍹",
        gradient: "from-pink-500 to-purple-600",
        title: { de: "Bar & Drinks heute Abend", en: "Drinks & Night Out", es: "¿Dónde tomamos algo?" },
        sub: { de: "Wo stoßen wir heute zusammen an?", en: "Where are we grabbing a drink tonight?", es: "¿Qué plan de copas apetece hoy?" },
        cards: [
            {
                id: 0, emoji: "🍻", bg: "from-amber-700 to-stone-900",
                tag: { de: "Locker & Bodenständig", en: "Casual Vibe", es: "Ambiente relajado" },
                title: { de: "Gemütlicher Pub oder Eckkneipe", en: "Cozy Local Pub / Taproom", es: "Pub o Bar de Cervezas" },
                desc: { de: "Frisch gezapftes Bier, gute Musik und entspannt quatschen.", en: "Draft beer, zero dress code, great talk.", es: "Cerveza tirada, cero postureo y buena charla." },
                actionLabel: { de: "Pubs in der Nähe finden", en: "Find Pubs Nearby", es: "Buscar pubs cerca" },
                actionUrl: "https://www.google.com/maps/search/Pub+Bar"
            },
            {
                id: 1, emoji: "🍸", bg: "from-fuchsia-700 to-purple-950",
                tag: { de: "Drinks mit Stil", en: "Fancy Cocktails", es: "Cócteles con estilo" },
                title: { de: "Stylische Cocktailbar", en: "Craft Cocktail Lounge", es: "Coctelería de Autor" },
                desc: { de: "Espresso Martini, Negroni oder Sour bei gedimmtem Licht.", en: "Espresso Martinis, Negronis & dim lights.", es: "Buenos cócteles y luz tenue." },
                actionLabel: { de: "Beste Cocktailbars suchen", en: "Top Cocktail Bars", es: "Buscar coctelerías" },
                actionUrl: "https://www.google.com/maps/search/Cocktail+Bar"
            },
            {
                id: 2, emoji: "🍷", bg: "from-rose-800 to-slate-900",
                tag: { de: "Genuss & Deep Talk", en: "Classy & Cozy", es: "Vino y Picoteo" },
                title: { de: "Weinbar mit Käse & Antipasti", en: "Wine Bar & Charcuterie", es: "Bar de Vinos y Tapas" },
                desc: { de: "Ein gutes Glas Wein und Kleinigkeiten zum Teilen.", en: "Great glass of wine and snacks to share.", es: "Una buena copa de vino y algo de picar." },
                actionLabel: { de: "Weinbars in der Nähe", en: "Find Wine Bars", es: "Buscar bares de vinos" },
                actionUrl: "https://www.google.com/maps/search/Wine+Bar"
            },
            {
                id: 3, emoji: "🍾", bg: "from-indigo-700 to-slate-900",
                tag: { de: "Frische Luft", en: "Urban Stroll", es: "Al aire libre" },
                title: { de: "Späti-Drinks & Aussichtspunkt", en: "Corner-Shop Drinks & Viewpoint", es: "Algo fresco en un mirador o parque" },
                desc: { de: "Kaltgetränk auf die Hand und an einen schönen Platz setzen.", en: "Grab cold drinks and sit by the water or park.", es: "Pillar algo frío y sentarse en un sitio bonito." },
                actionLabel: { de: "Schöne Plätze in der Nähe", en: "Find Viewpoints / Parks", es: "Ver parques o miradores" },
                actionUrl: "https://www.google.com/maps/search/Park+Viewpoint"
            },
            {
                id: 4, emoji: "🏠", bg: "from-teal-700 to-slate-900",
                tag: { de: "0 € Bar-Rechnung", en: "Home Bartender", es: "En casa" },
                title: { de: "Home-Bar: Selbst Drinks mixen", en: "DIY Cocktail Night at Home", es: "Montar el bar en casa" },
                desc: { de: "Eigene Musik, Balkon oder Couch und Aperol/Gin Tonic selber machen.", en: "Our own playlist, balcony or couch, half the price.", es: "Nuestra música, sofá o terraza y cero colas." },
                actionLabel: { de: "3-Zutaten Cocktail-Rezepte", en: "Easy 3-Ingredient Drinks", es: "Cócteles fáciles en casa" },
                actionUrl: "https://www.google.com/search?q=einfache+cocktails+mit+3+zutaten"
            },
            {
                id: 5, emoji: "🌇", bg: "from-orange-500 to-rose-800",
                tag: { de: "Über den Dächern", en: "Skyline View", es: "Con vistas" },
                title: { de: "Rooftop-Bar oder Dachterrasse", en: "Rooftop Bar with City Views", es: "Terraza Rooftop con Vistas" },
                desc: { de: "Drinks mit Blick über die Stadt und die Lichter am Abend.", en: "Drinks overlooking the city skyline.", es: "Tomar algo viendo las luces de la ciudad." },
                actionLabel: { de: "Rooftop-Bars suchen", en: "Find Rooftop Bars", es: "Buscar rooftops cerca" },
                actionUrl: "https://www.google.com/maps/search/Rooftop+Bar"
            },
            {
                id: 6, emoji: "🍺", bg: "from-emerald-700 to-stone-900",
                tag: { de: "Draußen sitzen", en: "Open Air", es: "Terraza" },
                title: { de: "Biergarten, Strandbar oder Außenterrasse", en: "Beer Garden or Waterfront Terrace", es: "Terraza al Aire Libre o Chiringuito" },
                desc: { de: "Unter Lichterketten draußen sitzen mit kaltem Bier oder Schorle.", en: "Sit outside under string lights with cold drinks.", es: "Sentarse al fresco con buen ambiente." },
                actionLabel: { de: "Biergärten & Terrassen finden", en: "Find Beer Gardens", es: "Buscar terrazas cerca" },
                actionUrl: "https://www.google.com/maps/search/Biergarten+Strandbar"
            },
            {
                id: 7, emoji: "🍊", bg: "from-orange-500 to-red-600",
                tag: { de: "Dolce Vita", en: "Aperitivo Hour", es: "Hora del Aperitivo" },
                title: { de: "Italienischer Aperitivo (Aperol, Limoncello Spritz & Oliven)", en: "Italian Aperitivo (Spritz & Olives)", es: "Tardeo de Aperol Spritz y Picoteo" },
                desc: { de: "Spritz auf Eis, ein paar Oliven und Chips – wie in Mailand.", en: "Ice-cold Spritz, olives and little bites.", es: "Spritz bien frío con aceitunas y snacks." },
                actionLabel: { de: "Aperitivo-Bars in der Nähe", en: "Find Aperitivo Spots", es: "Buscar sitios de aperitivo" },
                actionUrl: "https://www.google.com/maps/search/Aperitivo+Bar+Italian"
            },
            {
                id: 8, emoji: "🍀", bg: "from-green-700 to-stone-950",
                tag: { de: "Stimmung & Live-Vibe", en: "Lively Crowd", es: "Ambiente animado" },
                title: { de: "Irish Pub (Guinness, Cider, Live-Musik oder Quiz)", en: "Irish Pub (Guinness, Cider & Live Music)", es: "Irish Pub (Pinta, Música o Quiz)" },
                desc: { de: "Immer gute Laune, volle Tische und null Steifheit.", en: "Great energy, cold pints and live music.", es: "Buen rollo garantizado y pintas bien frías." },
                actionLabel: { de: "Irish Pub in der Nähe", en: "Find Irish Pubs", es: "Buscar Irish Pub cerca" },
                actionUrl: "https://www.google.com/maps/search/Irish+Pub"
            },
            {
                id: 9, emoji: "🎤", bg: "from-purple-600 to-pink-700",
                tag: { de: "Eskalations-Potenzial", en: "Zero Shame", es: "Risas aseguradas" },
                title: { de: "Karaoke-Bar oder Musik-Kneipe", en: "Karaoke Bar or Late-Night Music Bar", es: "Bar de Karaoke o Música en Vivo" },
                desc: { de: "Mitgrölen zu 2000er-Hits – egal ob man singen kann oder nicht.", en: "Belt out 2000s throwbacks and laugh all night.", es: "Cantar temazos a pleno pulmón y reírse." },
                actionLabel: { de: "Karaoke- & Musikbars suchen", en: "Find Karaoke / Music Bars", es: "Buscar Karaoke cerca" },
                actionUrl: "https://www.google.com/maps/search/Karaoke+Live+Music+Bar"
            },
            {
                id: 10, emoji: "🍋", bg: "from-cyan-600 to-teal-900",
                tag: { de: "0,0% Kater morgen", en: "Zero Hangover", es: "Cero resaca" },
                title: { de: "Fancy Mocktails, Hausgemachte Limos oder Eiskaffee-Date", en: "Craft Mocktails, Iced Matcha or Virgin Mojito", es: "Mocktails Sin Alcohol o Café Helado" },
                desc: { de: "Voller Bar-Genuss mit frischer Minze & Limette – morgen topfit aufwachen.", en: "All the flavor and vibe, 100% fresh tomorrow morning.", es: "Todo el sabor y ambiente, mañana frescos al 100%." },
                actionLabel: { de: "Beste Mocktail-Rezepte & Cafés", en: "Mocktail Ideas", es: "Ideas de mocktails" },
                actionUrl: "https://www.google.com/search?q=beste+mocktails+rezepte+alkoholfrei"
            },
            {
                id: 11, emoji: "☕", bg: "from-stone-700 to-amber-950",
                tag: { de: "Koffein & Nachtleben", en: "Late Night Buzz", es: "Noche con ritmo" },
                title: { de: "Espresso-Martini oder Late-Night Café-Bar", en: "Espresso Martini Lounge", es: "Bar de Espresso Martini y Copas" },
                desc: { de: "Wenn man müde ist, aber der Abend noch nicht vorbei sein soll!", en: "Wake up and keep the night going in style.", es: "El combo perfecto de café y cóctel para seguir la noche." },
                actionLabel: { de: "Bars in der Nähe zeigen", en: "Find Lounge Bars", es: "Buscar bares cerca" },
                actionUrl: "https://www.google.com/maps/search/Lounge+Bar"
            }
        ]
    },

    // ============================================================
    // KATEGORIE 2: STREAMING & ZOCKEN (entertainment)
    // ============================================================
    movie: {
        id: "movie",
        category: "entertainment",
        mode: "match",
        icon: "🎬",
        gradient: "from-indigo-500 to-purple-600",
        title: { de: "Streaming-Abend", en: "Movie Night Vibe", es: "Noche de Película" },
        sub: { de: "Welches Genre gewinnt heute auf der Couch?", en: "Stop scrolling Netflix for 40 minutes", es: "Decidid qué ver en 30 segundos" },
        cards: [
            {
                id: 0, emoji: "🕵️‍♂️", bg: "from-slate-700 to-slate-900",
                tag: { de: "Spannung pur", en: "Edge of your seat", es: "Suspense puro" },
                title: { de: "Mindfuck-Thriller mit Plot-Twist", en: "Plot-Twist Psychological Thriller", es: "Thriller con giro inesperado" },
                desc: { de: "Mitraten bis zur letzten Minute.", en: "Guessing who did it until the final scene.", es: "Adivinar el final hasta el último minuto." },
                actionLabel: { de: "Top Thriller-Empfehlungen öffnen", en: "See Top Thrillers", es: "Ver mejores thrillers" },
                actionUrl: "https://www.google.com/search?q=beste+thriller+filme+mit+plot+twist+streaming"
            },
            {
                id: 1, emoji: "😂", bg: "from-amber-500 to-orange-600",
                tag: { de: "Kopf ausschalten", en: "Brain Off", es: "Cero estrés" },
                title: { de: "Gute-Laune-Komödie", en: "Feel-Good Comedy", es: "Comedia para reírse" },
                desc: { de: "Einfach lachen, abschalten und Snacks vernichten.", en: "Zero heavy drama, just laughs.", es: "Nada de dramas, solo risas." },
                actionLabel: { de: "Aktuelle Comedy-Hits zeigen", en: "Top Comedies Streaming", es: "Ver comedias recomendadas" },
                actionUrl: "https://www.google.com/search?q=beste+komoedien+streaming+aktuell"
            },
            {
                id: 2, emoji: "🔪", bg: "from-red-800 to-neutral-900",
                tag: { de: "Wahre Begebenheit", en: "Real Cases", es: "Casos reales" },
                title: { de: "Packende True-Crime-Doku", en: "True Crime Documentary", es: "Documental True Crime" },
                desc: { de: "Unglaubliche echte Kriminalfälle & Ermittlungen.", en: "Wild real-life investigations.", es: "Crímenes reales que parecen ficción." },
                actionLabel: { de: "Beste True-Crime-Dokus finden", en: "Best True Crime Docs", es: "Ver mejores True Crime" },
                actionUrl: "https://www.google.com/search?q=beste+true+crime+dokus+netflix+prime"
            },
            {
                id: 3, emoji: "🚀", bg: "from-violet-700 to-indigo-950",
                tag: { de: "Heimkino-Gefühl", en: "Big Screen Vibe", es: "Acción Épica" },
                title: { de: "Sci-Fi oder Action-Blockbuster", en: "Sci-Fi / Action Blockbuster", es: "Ciencia Ficción o Acción" },
                desc: { de: "Starke Bilder, fetter Sound, andere Welten.", en: "Epic visuals, huge sound, pure escapism.", es: "Efectos brutales y pura adrenalina." },
                actionLabel: { de: "Top Sci-Fi & Action-Hits", en: "Top Sci-Fi Blockbusters", es: "Ver éxitos de acción" },
                actionUrl: "https://www.google.com/search?q=beste+scifi+action+filme+streaming"
            },
            {
                id: 4, emoji: "🍿", bg: "from-pink-600 to-rose-800",
                tag: { de: "Nostalgie", en: "2000s Throwback", es: "Nostalgia" },
                title: { de: "Kultfilm aus den 90ern / 2000ern", en: "90s / 2000s Cult Classic", es: "Clásico de los 90 / 2000" },
                desc: { de: "Ein Film, den man schon kennt und trotzdem liebt.", en: "A comfort movie we both already love.", es: "Una película mítica que nunca falla." },
                actionLabel: { de: "Kultfilme-Liste öffnen", en: "90s/2000s Rewatch List", es: "Ver lista de clásicos" },
                actionUrl: "https://www.google.com/search?q=beste+kultfilme+90er+2000er"
            },
            {
                id: 5, emoji: "👻", bg: "from-zinc-800 to-red-950",
                tag: { de: "Gänsehaut", en: "Spooky Vibe", es: "Escalofríos" },
                title: { de: "Grusel-, Mystery- oder Smarter Horrorfilm", en: "Smart Horror or Supernatural Mystery", es: "Terror Psicológico o Misterio" },
                desc: { de: "Licht komplett aus, Decke bis zur Nase ziehen und mitfiebern.", en: "Lights off, blanket pulled up, spooky atmosphere.", es: "Luces apagadas y tensión en el sofá." },
                actionLabel: { de: "Beste Mystery- & Horrorfilme", en: "Top Smart Horror Movies", es: "Ver películas de misterio/terror" },
                actionUrl: "https://www.google.com/search?q=beste+smart+horror+mystery+filme+streaming"
            },
            {
                id: 6, emoji: "🕵️‍♀️", bg: "from-amber-700 to-stone-900",
                tag: { de: "Wer war der Täter?", en: "Whodunit Puzzle", es: "¿Quién fue?" },
                title: { de: "Krimi-Rätsel à la ‚Knives Out‘ / Agatha Christie", en: "Whodunit Murder Mystery (Knives Out Style)", es: "Misterio de Detectives (Estilo Knives Out)" },
                desc: { de: "Ein Mord, 8 Verdächtige – wer löst den Fall zuerst von der Couch aus?", en: "One crime, a room full of suspects – guess the killer!", es: "Un crimen, muchos sospechosos y a investigar." },
                actionLabel: { de: "Whodunit-Filme finden", en: "Best Whodunit Movies", es: "Películas de misterio" },
                actionUrl: "https://www.google.com/search?q=filme+wie+knives+out+whodunit"
            },
            {
                id: 7, emoji: "✨", bg: "from-sky-600 to-indigo-900",
                tag: { de: "Herz & Humor", en: " Pixar / Ghibli Vibe", es: "Animación Top" },
                title: { de: "Meisterwerk-Animation (Pixar, Ghibli, Spider-Verse)", en: "Animated Masterpiece (Pixar, Ghibli, Spider-Verse)", es: "Joya de Animación (Pixar, Ghibli, Spider-Verse)" },
                desc: { de: "Visuell beeindruckend, clever und voller Herz.", en: "Visually stunning, clever and full of heart.", es: "Visualmente increíble y con gran historia." },
                actionLabel: { de: "Beste Animationsfilme prüfen", en: "Top Animated Movies", es: "Mejores películas de animación" },
                actionUrl: "https://www.google.com/search?q=beste+animationsfilme+fuer+erwachsene"
            },
            {
                id: 8, emoji: "💘", bg: "from-rose-500 to-pink-800",
                tag: { de: "Herzklopfen & Witz", en: "Rom-Com Night", es: "Comedia Romántica" },
                title: { de: "Rom-Com oder Liebesfilm mit gutem Humor", en: "Sharp & Funny Romantic Comedy", es: "Comedia Romántica con Buen Humor" },
                desc: { de: "Charmant, witzig und null Kitsch-Überdosis.", en: "Charming, witty and guaranteed good vibes.", es: "Divertida, con química y buen rollo." },
                actionLabel: { de: "Beste Rom-Coms auf Streaming", en: "Best Modern Rom-Coms", es: "Mejores comedias románticas" },
                actionUrl: "https://www.google.com/search?q=beste+romcoms+streaming"
            },
            {
                id: 9, emoji: "🌍", bg: "from-emerald-700 to-cyan-950",
                tag: { de: "Staunen & Abschalten", en: " Jaw-Dropping Nature", es: "Naturaleza y Mundo" },
                title: { de: "Atemberaubende Natur-, Weltraum- oder Reisereportage", en: "4K Nature, Ocean or Space Documentary", es: "Documental de Naturaleza, Viajes o Universo" },
                desc: { de: "Gigantische 4K-Aufnahmen zum Runterkommen und Staunen.", en: "Incredible 4K footage to unwind and marvel at.", es: "Imágenes espectaculares en 4K para desconectar." },
                actionLabel: { de: "Beste Natur- & Weltraum-Dokus", en: "Top Nature Docs", es: "Mejores documentales" },
                actionUrl: "https://www.google.com/search?q=beste+natur+und+weltraum+dokus+streaming"
            },
            {
                id: 10, emoji: "🏦", bg: "from-yellow-600 to-zinc-900",
                tag: { de: "Smarter Plan", en: "Heist & Con-Artists", es: "Robos y Estafas" },
                title: { de: "Heist-Movie (Bankraub, Casino-Trick & coole Gangster)", en: "Slick Heist Movie (Ocean's Eleven Style)", es: "Película de Atracos Perfectos y Estafas" },
                desc: { de: "Coole Musik, ein unmöglicher Tresor und ein genialer Trick.", en: "Cool soundtrack, impossible vault and a clever twist.", es: "Un plan maestro, ritmo rápido y giros." },
                actionLabel: { de: "Beste Heist-Movies zeigen", en: "Top Heist Movies", es: "Mejores películas de atracos" },
                actionUrl: "https://www.google.com/search?q=beste+heist+movies+bankraub+filme"
            },
            {
                id: 11, emoji: "🏆", bg: "from-purple-700 to-slate-900",
                tag: { de: "Kritiker-Liebling", en: "Oscar / A24 Vibe", es: "Cine Premiado" },
                title: { de: "Preisgekröntes Highlight (Oscar-Gewinner / A24-Film)", en: "Award-Winning Indie / Oscar Highlight", es: "Película Premiada (Óscar / Cine Indie)" },
                desc: { de: "Ein außergewöhnlicher Film, über den man noch tagelang redet.", en: "A standout movie you'll talk about for days.", es: "Un peliculón del que hablaréis durante días." },
                actionLabel: { de: "Aktuelle Kritiker-Highlights", en: "Top A24 & Oscar Movies", es: "Ver películas premiadas" },
                actionUrl: "https://www.google.com/search?q=beste+oscar+a24+filme+streaming"
            },
            {
                id: 12, emoji: "🏔️", bg: "from-teal-700 to-stone-900",
                tag: { de: "Puls auf 180", en: "Survival & Adventure", es: "Supervivencia" },
                title: { de: "Survival-, Abenteuer- oder Katastrophen-Thriller", en: "High-Stakes Survival & Adventure Movie", es: "Aventura Extrema o Supervivencia" },
                desc: { de: "Mensch gegen Natur, Bergsteigen, Dschungel oder offenes Meer.", en: "Against all odds in the wild, mountains or ocean.", es: "Adrenalina pura en la naturaleza o el mar." },
                actionLabel: { de: "Beste Survival-Filme", en: "Best Survival Movies", es: "Mejores películas de supervivencia" },
                actionUrl: "https://www.google.com/search?q=beste+survival+abenteuer+filme"
            },
            {
                id: 13, emoji: "🎬", bg: "from-rose-700 to-amber-900",
                tag: { de: "Unglaubliche Biografie", en: "Based on True Events", es: "Historia Real" },
                title: { de: "Biopic / Wahre Geschichte (Musik, Sport oder Genie)", en: "Inspiring True Story / Biopic", es: "Basada en Hechos Reales / Biopic" },
                desc: { de: "Mitreißende Filme über echte Legenden, Skandale oder Rekorde.", en: "Incredible real-life legends, scandals or triumphs.", es: "Historias reales increíbles que inspiran." },
                actionLabel: { de: "Top Filme nach wahrer Geschichte", en: "Best True Story Movies", es: "Películas basadas en hechos reales" },
                actionUrl: "https://www.google.com/search?q=beste+filme+nach+wahrer+begebenheit"
            }
        ]
    },

    series: {
        id: "series",
        category: "entertainment",
        mode: "match",
        icon: "📺",
        gradient: "from-purple-600 to-pink-600",
        title: { de: "Serien-Binge Finder", en: "Series Binge Finder", es: "Maratón de Series" },
        sub: { de: "Welche Serie schauen wir als Nächstes?", en: "What show are we binge-watching next?", es: "¿Qué serie empezamos hoy?" },
        cards: [
            {
                id: 0, emoji: "⏳", bg: "from-indigo-700 to-slate-900",
                tag: { de: "Abgeschlossen in 6 Folgen", en: "1-Weekend Miniseries", es: "Miniserie corta" },
                title: { de: "Spannende Miniserie (1 Staffel)", en: "Gripping Limited Miniseries", es: "Miniserie de una sola temporada" },
                desc: { de: "Kein 5-Staffeln-Commitment – straffe Story mit echtem Finale.", en: "Full story in 6-8 episodes, zero filler.", es: "Historia cerrada en pocos capítulos." },
                actionLabel: { de: "Beste Miniserien ansehen", en: "Best Miniseries Now", es: "Ver mejores miniseries" },
                actionUrl: "https://www.google.com/search?q=beste+miniserien+netflix+aktuell"
            },
            {
                id: 1, emoji: "🛋️", bg: "from-amber-600 to-orange-700",
                tag: { de: "20-Minuten-Folgen", en: "20-Min Episodes", es: "Capítulos de 20 min" },
                title: { de: "Witzige Comfort-Sitcom", en: "Feel-Good Sitcom", es: "Sitcom ligera para reír" },
                desc: { de: "Perfekt beim Essen oder zum Einschlafen ohne Stress.", en: "Easy watching while eating dinner.", es: "Ideal mientras cenamos sin pensar mucho." },
                actionLabel: { de: "Beliebteste Sitcoms zeigen", en: "Top Sitcoms List", es: "Ver mejores sitcoms" },
                actionUrl: "https://www.google.com/search?q=beste+comedy+serien+sitcoms+streaming"
            },
            {
                id: 2, emoji: "🌀", bg: "from-cyan-800 to-slate-950",
                tag: { de: "Cliffhanger-Garantie", en: "Cliffhanger Alert", es: "Puro Misterio" },
                title: { de: "Dark Mystery oder Sci-Fi-Rätsel", en: "Dark Mystery / Sci-Fi Puzzle", es: "Misterio Oscuro o Sci-Fi" },
                desc: { de: "Nach jeder Folge sagen: ‚Okay, EINE schauen wir noch!‘", en: "Makes you say 'just one more episode' at 1 AM.", es: "De las que dices 'venga, un capítulo más'." },
                actionLabel: { de: "Top Mystery-Serien finden", en: "Top Mystery Shows", es: "Series de misterio top" },
                actionUrl: "https://www.google.com/search?q=beste+mystery+serien+streaming"
            },
            {
                id: 3, emoji: "🏝️", bg: "from-pink-600 to-rose-700",
                tag: { de: "Guilty Pleasure", en: "Guilty Pleasure", es: "Placer culpable" },
                title: { de: "Reality-TV, Dating-Show oder Survival", en: "Trash TV, Reality or Survival Show", es: "Reality Show o Supervivencia" },
                desc: { de: "Mitlästern, fremdschämen oder mitfiebern auf der Couch.", en: "Zero brain cells required, maximum entertainment.", es: "Cero esfuerzo mental, puro salseo o aventura." },
                actionLabel: { de: "Aktuelle Reality- & Survival-Hits", en: "Trending Reality Shows", es: "Ver realities del momento" },
                actionUrl: "https://www.google.com/search?q=beste+survival+reality+shows+streaming"
            },
            {
                id: 4, emoji: "👑", bg: "from-emerald-800 to-stone-900",
                tag: { de: "Großes Kino", en: "Prestige Drama", es: "Drama Épico" },
                title: { de: "Hochbewertetes Prestige-Drama / Mafia", en: "High-Rated Crime / Prestige Drama", es: "Gran Drama Criminal o Histórico" },
                desc: { de: "IMDb 8.5+, geniale Schauspieler und packende Intrigen.", en: "IMDb 8.5+ masterpieces everybody talks about.", es: "Obras maestras con nota alta en IMDb." },
                actionLabel: { de: "Bestbewertete Serien prüfen", en: "Top Rated Series", es: "Series mejor valoradas" },
                actionUrl: "https://www.google.com/search?q=beste+serien+aller+zeiten+imdb"
            },
            {
                id: 5, emoji: "🚓", bg: "from-slate-700 to-blue-950",
                tag: { de: "Spurensuche", en: "Nordic Noir / Detective", es: "Investigación" },
                title: { de: "Düsterer Skandi-Krimi oder Detektiv-Serie", en: "Gripping Detective / Nordic Noir Series", es: "Serie Policiaca o Thriller Nórdico" },
                desc: { de: "Atmosphärisch, rätselhaft und voller falscher Fährten.", en: "Moody atmosphere, smart detectives and plot twists.", es: "Atmósfera intensa y giros en cada episodio." },
                actionLabel: { de: "Beste Krimi-Serien zeigen", en: "Best Detective Shows", es: "Mejores series policiacas" },
                actionUrl: "https://www.google.com/search?q=beste+krimi+detektiv+serien+streaming"
            },
            {
                id: 6, emoji: "🐉", bg: "from-amber-700 to-red-950",
                tag: { de: "Epische Welten", en: "Fantasy / History", es: "Épica y Fantasía" },
                title: { de: "Fantasy-, Mittelalter- oder Historien-Epos", en: "Epic Fantasy or Historical Series", es: "Serie Épica de Fantasía o Historia" },
                desc: { de: "Königreiche, Schlachten, Intrigen und große Abenteuer.", en: "Kingdoms, battles, intrigue and massive world-building.", es: "Reinos, batallas, intrigas y grandes mundos." },
                actionLabel: { de: "Top Fantasy & Historien-Serien", en: "Top Fantasy / History", es: "Ver series épicas" },
                actionUrl: "https://www.google.com/search?q=beste+fantasy+historien+serien"
            },
            {
                id: 7, emoji: "👨‍🍳", bg: "from-orange-600 to-stone-900",
                tag: { de: "Wettkampf & Appetit", en: "Cooking / Bake Show", es: "Competición" },
                title: { de: "Koch-Show, Back-Wettbewerb oder Food-Reise", en: "Culinary Competition or Streetfood Doc", es: "Programa de Cocina o Viajes Gastronómicos" },
                desc: { de: "Entspannt zuschauen, wie Profis kochen oder um die Welt reisen.", en: "Watch chefs battle it out or explore world street food.", es: "Disfrutar viendo retos de cocina o street food." },
                actionLabel: { de: "Beste Food-Shows finden", en: "Top Food & Cooking Shows", es: "Mejores programas de cocina" },
                actionUrl: "https://www.google.com/search?q=beste+kochshows+food+serien+netflix"
            },
            {
                id: 8, emoji: "🛸", bg: "from-violet-700 to-slate-950",
                tag: { de: "Jede Folge neu", en: "Anthology Series", es: "Capítulos independientes" },
                title: { de: "Anthologie-Serie (wie Black Mirror / Love, Death & Robots)", en: "Mind-Bending Anthology (Black Mirror Style)", es: "Serie Antológica (Estilo Black Mirror)" },
                desc: { de: "Jede Folge hat eine komplett eigene, krasse Geschichte!", en: "Every episode is a brand-new standalone story.", es: "Cada episodio es una historia totalmente nueva." },
                actionLabel: { de: "Anthologie-Serien entdecken", en: "Best Anthology Shows", es: "Ver series antológicas" },
                actionUrl: "https://www.google.com/search?q=serien+wie+black+mirror+anthologie"
            },
            {
                id: 9, emoji: "🏎️", bg: "from-red-600 to-zinc-900",
                tag: { de: "Echte Emotionen", en: "Sports & Adrenaline", es: "Adrenalina real" },
                title: { de: "Mitreißende Sport- oder Backstage-Dokuserie", en: "Behind-the-Scenes Sports Docuseries", es: "Docuserie Deportiva (Estilo Drive to Survive)" },
                desc: { de: "Selbst wenn man den Sport nicht schaut – das Drama hinter den Kulissen packt jeden.", en: "High stakes, rivalries and behind-the-scenes drama.", es: "Drama real, rivalidades y emoción detrás de las cámaras." },
                actionLabel: { de: "Beste Sport-Dokuserien", en: "Top Sports Docuseries", es: "Mejores docuseries deportivas" },
                actionUrl: "https://www.google.com/search?q=beste+sport+dokuserien+netflix+prime"
            },
            {
                id: 10, emoji: "🎌", bg: "from-rose-600 to-indigo-950",
                tag: { de: "Kult & Action", en: "Anime / Adult Animation", es: "Anime / Animación" },
                title: { de: "Starke Anime- oder Adult-Animation-Serie (Arcane, Cyberpunk)", en: "Hit Anime or Adult Animation (Arcane / Invincible)", es: "Anime Top o Animación para Adultos (Arcane)" },
                desc: { de: "Packende Storys, krasse Action und extrem hoher Suchtfaktor.", en: "Incredible visuals, fast pacing and addictive stories.", es: "Acción brutal, ritmo rápido e historias adictivas." },
                actionLabel: { de: "Top Anime & Animations-Serien", en: "Top Animated Series", es: "Ver mejores series de animación" },
                actionUrl: "https://www.google.com/search?q=beste+anime+und+animationsserien+netflix"
            },
            {
                id: 11, emoji: "🏖️", bg: "from-teal-600 to-amber-900",
                tag: { de: "Luxus & Abgründe", en: "Satire & Mystery", es: "Sátira y Misterio" },
                title: { de: "Urlaubs-Intrigen & Gesellschafts-Satire (White Lotus Vibe)", en: "Dark Comedy & Resort Mystery (White Lotus Vibe)", es: "Comedia Negra e Intrigas (Estilo White Lotus)" },
                desc: { de: "Schöne Kulisse, schräge Charaktere und bissiger Humor.", en: "Gorgeous locations, eccentric characters & dark humor.", es: "Sitios de lujo, personajes locos y humor ácido." },
                actionLabel: { de: "Ähnliche Serien finden", en: "Shows Like White Lotus", es: "Series estilo White Lotus" },
                actionUrl: "https://www.google.com/search?q=serien+wie+the+white+lotus"
            }
        ]
    },

    gaming: {
        id: "gaming",
        category: "entertainment",
        mode: "match",
        icon: "🎮",
        gradient: "from-violet-600 to-indigo-600",
        title: { de: "Zocken & Spieleabend", en: "Game Night Picker", es: "Noche de Juegos" },
        sub: { de: "Konsole, Karten oder Duell am Tisch?", en: "Console, board games or trivia duel?", es: "¿Consola, cartas o juego de mesa?" },
        cards: [
            {
                id: 0, emoji: "🏎️", bg: "from-red-600 to-orange-600",
                tag: { de: "Gnadenloses Duell", en: "Pure Rivalry", es: "Pique total" },
                title: { de: "Fun-Racer oder Sport-Duell (Mario Kart / FIFA)", en: "Mario Kart / Arcade Vs. Duel", es: "Mario Kart o Duelo Arcade" },
                desc: { de: "Freundschaft auf Probe stellen – Verlierer holt die Getränke!", en: "Loser fetches the next round of snacks!", es: "¡El que pierde trae las bebidas!" },
                actionLabel: { de: "Beste Couch-Vs-Games", en: "Best Local Vs Games", es: "Mejores juegos versus" },
                actionUrl: "https://www.google.com/search?q=beste+lokale+multiplayer+spiele+zu+zweit"
            },
            {
                id: 1, emoji: "🤝", bg: "from-emerald-600 to-teal-800",
                tag: { de: "Teamwork-Test", en: "Co-Op Chaos", es: "Cooperativo" },
                title: { de: "Couch-Koop zusammen meistern", en: "Couch Co-Op Adventure", es: "Aventura Cooperativa en Sofá" },
                desc: { de: "Zusammen rätseln oder kochen (It Takes Two, Overcooked, Split Fiction).", en: "Solve puzzles or survive kitchen chaos together.", es: "Superar retos en equipo sin gritarse." },
                actionLabel: { de: "Top Koop-Spiele für 2+", en: "Best Couch Co-Op Games", es: "Mejores juegos cooperativos" },
                actionUrl: "https://www.google.com/search?q=best+couch+coop+games"
            },
            {
                id: 2, emoji: "🃏", bg: "from-amber-600 to-stone-800",
                tag: { de: "Analog & Schnell", en: "Cards & Dice", es: "Sin pantallas" },
                title: { de: "Schnelles Karten- oder Würfelspiel", en: "Fast Card or Dice Game", es: "Juego Rápido de Cartas o Dados" },
                desc: { de: "Uno, Skyjo, Kniffel, Exploding Kittens oder Cabo am Tisch.", en: "Uno, Yahtzee, Exploding Kittens & good music.", es: "Uno, dados, cartas y música de fondo." },
                actionLabel: { de: "Regeln / Spielideen öffnen", en: "Quick Card Game Ideas", es: "Juegos de cartas para dos" },
                actionUrl: "https://www.google.com/search?q=beste+kartenspiele+fuer+2+personen"
            },
            {
                id: 3, emoji: "🧠", bg: "from-blue-600 to-indigo-900",
                tag: { de: "Wer weiß mehr?", en: "Brain Battle", es: "Batalla mental" },
                title: { de: "Quiz-, Schätz- oder Musik-Raten (Hitster)", en: "Music Guess / Trivia Quiz", es: "Quiz de Música o Preguntas" },
                desc: { de: "Songs erraten, Quiz-Duell oder GeoGuessr am Bildschirm.", en: "Guess the song year, GeoGuessr or pub quiz.", es: "Adivinar canciones, años o GeoGuessr." },
                actionLabel: { de: "Online-Quiz / GeoGuessr starten", en: "Play Quiz / Music Game", es: "Abrir quiz online" },
                actionUrl: "https://www.google.com/search?q=online+quiz+zu+zweit+spielen"
            },
            {
                id: 4, emoji: "♟️", bg: "from-stone-700 to-amber-950",
                tag: { de: "Taktik & Aufbau", en: "Strategy Board Game", es: "Estrategia" },
                title: { de: "Strategie-Brettspiel (Catan, Carcassonne, Zug um Zug)", en: "Strategy Board Game Night", es: "Juego de Mesa de Estrategia (Catán, Carcassonne)" },
                desc: { de: "Spielbrett aufbauen, Snacks bereitstellen und taktisch gewinnen.", en: "Set up the board, grab snacks and outsmart each other.", es: "Desplegar el tablero, picoteo y estrategia." },
                actionLabel: { de: "Beste Brettspiele für 2–4", en: "Top Board Games", es: "Mejores juegos de mesa" },
                actionUrl: "https://www.google.com/search?q=beste+brettspiele+fuer+2+personen"
            },
            {
                id: 5, emoji: "🕵️", bg: "from-zinc-800 to-red-950",
                tag: { de: "Rätsel lösen", en: "Escape & Crime", es: "Escape en casa" },
                title: { de: "Exit-Game / Krimi-Akte am Wohnzimmertisch lösen", en: "Escape Room Box / Unsolved Case File", es: "Escape Room de Mesa o Caso Criminal" },
                desc: { de: "Zusammen Hinweise kombinieren, Codes knacken und den Täter finden.", en: "Crack codes, examine clues and solve the mystery.", es: "Descifrar pistas en equipo y resolver el caso." },
                actionLabel: { de: "Online-Rätsel & Exit-Games", en: "Find Escape Games", es: "Ver juegos tipo Exit" },
                actionUrl: "https://www.google.com/search?q=exit+game+krimi+spiel+zuhause"
            },
            {
                id: 6, emoji: "🎉", bg: "from-pink-600 to-purple-900",
                tag: { de: "Minispiel-Chaos", en: "Party Game", es: "Risas y Minijuegos" },
                title: { de: "Mario Party, Jackbox oder Smartphone-Partyspiel", en: "Mario Party / Jackbox Party Pack", es: "Mario Party o Juegos con el Móvil" },
                desc: { de: "Kurze, witzige Minispiele gegeneinander – perfekt auch mit Freunden.", en: "Hilarious quick minigames with zero learning curve.", es: "Minijuegos rápidos para morirse de risa." },
                actionLabel: { de: "Beste Party-Games zeigen", en: "Top Party Games", es: "Ver juegos de fiesta" },
                actionUrl: "https://www.google.com/search?q=beste+party+games+konsole+handy"
            },
            {
                id: 7, emoji: "🔦", bg: "from-slate-800 to-indigo-950",
                tag: { de: "Ein Controller, 2 Köpfe", en: "Interactive Story", es: "Película Interactiva" },
                title: { de: "Story-Game zusammen entscheiden (Until Dawn, Life is Strange)", en: "Interactive Story Game (You Both Decide)", es: "Juego de Historia Interactiva (Decidís Juntos)" },
                desc: { de: "Wie ein spannender Film, aber ihr trefft gemeinsam jede Entscheidung!", en: "Plays like a movie where you vote on every choice.", es: "Como una serie pero vosotros tomáis cada decisión." },
                actionLabel: { de: "Beste Story-Spiele für Paare", en: "Top Interactive Story Games", es: "Mejores juegos narrativos" },
                actionUrl: "https://www.google.com/search?q=beste+interaktive+story+spiele+zu+zweit"
            },
            {
                id: 8, emoji: "💬", bg: "from-rose-600 to-orange-800",
                tag: { de: "Null Material nötig", en: "Deep Talk & Laughs", es: "Charla y Risas" },
                title: { de: "Entweder-Oder / 36 Fragen / Wer-würde-eher Challenge", en: "Would You Rather / Deep Questions Game", es: "Reto de Preguntas / ¿Qué Preferirías?" },
                desc: { de: "Mit einem Glas Wein auf die Couch und überraschende Fragen stellen.", en: "Pour a drink and ask hilarious or deep questions.", es: "Una copa en el sofá y preguntas sorprendentes." },
                actionLabel: { de: "Fragen-Generator öffnen", en: "Open Question List", es: "Ver lista de preguntas" },
                actionUrl: "https://www.google.com/search?q=entweder+oder+fragen+paare+freunde"
            },
            {
                id: 9, emoji: "🧩", bg: "from-teal-600 to-emerald-900",
                tag: { de: "Entspannt & Fokussiert", en: "Cozy & Chill", es: "Relax y Puzle" },
                title: { de: "Puzzle, Lego-Set oder Wort-Duell (Scrabble / Wordle)", en: "Lego Build, Puzzle + Podcast or Word Duel", es: "Lego, Puzle con Podcast o Duelo de Palabras" },
                desc: { de: "Guter Podcast oder Musik im Hintergrund und zusammen bauen/rätseln.", en: "Put on a great podcast or playlist and build together.", es: "Poner buena música o podcast y construir juntos." },
                actionLabel: { de: "Wort-Duell / Ideen öffnen", en: "Play Word Game Online", es: "Jugar duelo de palabras" },
                actionUrl: "https://www.google.com/search?q=wortspiele+logikspiele+zu+zweit"
            }
        ]
    },

    // ============================================================
    // KATEGORIE 3: TREFFEN, FREIZEIT & DATES (activity)
    // ============================================================
    weekend: {
        id: "weekend",
        category: "activity",
        mode: "match",
        icon: "🥂",
        gradient: "from-emerald-500 to-teal-600",
        title: { de: "Wochenend-Vibe", en: "Weekend Plan", es: "Plan de Fin de Semana" },
        sub: { de: "Worauf haben wir heute wirklich Lust?", en: "Match your energy level in 30s", es: "¿Qué nos apetece hacer hoy?" },
        cards: [
            {
                id: 0, emoji: "☕", bg: "from-amber-700 to-stone-800",
                tag: { de: "Frische Luft & Koffein", en: "Fresh Air", es: "Aire libre" },
                title: { de: "Coffee-to-go & langer Spaziergang", en: "Coffee Walk & Talk", es: "Café para llevar y paseo" },
                desc: { de: "Handys in die Tasche, guter Kaffee und 1 Stunde raus.", en: "Phones away, good coffee, 1 hour outside.", es: "Desconectar una hora caminando." },
                actionLabel: { de: "Schöne Cafés in der Nähe", en: "Best Cafés Nearby", es: "Cafeterías cerca" },
                actionUrl: "https://www.google.com/maps/search/Cafe"
            },
            {
                id: 1, emoji: "🛋️", bg: "from-blue-800 to-slate-900",
                tag: { de: "0% Verpflichtung", en: "Zero Guilt", es: "Modo Cueva" },
                title: { de: "Offizieller Jogginghosen-Tag", en: "100% Cozy Couch Day", es: "Día oficial de sofá y manta" },
                desc: { de: "Wir sagen alles ab und bleiben ohne schlechtes Gewissen drinnen.", en: "Stay in without an ounce of guilt.", es: "Cero planes fuera, relax total en casa." },
                actionLabel: { de: "Lieferdienst-Radar öffnen", en: "Check Food Delivery", es: "Pedir algo rico a casa" },
                actionUrl: "https://www.google.com/maps/search/Restaurant+Delivery"
            },
            {
                id: 2, emoji: "🎲", bg: "from-purple-700 to-indigo-900",
                tag: { de: "Duell-Modus", en: "Friendly Rivalry", es: "Modo Pique" },
                title: { de: "Spieleabend & Drinks zu zweit", en: "Board Games / Mario Kart & Drinks", es: "Juegos de mesa o consola + Copas" },
                desc: { de: "Verlierer räumt morgen die Küche auf!", en: "Loser makes breakfast tomorrow!", es: "¡El que pierde invita al desayuno!" },
                actionLabel: { de: "Beste 2-Spieler-Spiele ansehen", en: "Top 2-Player Games", es: "Juegos para 2 personas" },
                actionUrl: "https://www.google.com/search?q=beste+spiele+fuer+2+personen"
            },
            {
                id: 3, emoji: "🍽️", bg: "from-rose-700 to-red-900",
                tag: { de: "Rausgehen", en: "Dress Up", es: "Salir fuera" },
                title: { de: "Spontanes Date im Restaurant", en: "Spontaneous Dinner Date", es: "Cena espontánea fuera" },
                desc: { de: "Schick machen und uns bedienen lassen.", en: "Get out of the house and get served.", es: "Salir de casa y que nos sirvan." },
                actionLabel: { de: "Freie Tische in der Nähe suchen", en: "Find Restaurants Nearby", es: "Buscar restaurantes cerca" },
                actionUrl: "https://www.google.com/maps/search/Restaurant"
            },
            {
                id: 4, emoji: "🛍️", bg: "from-amber-600 to-orange-800",
                tag: { de: "Stöbern & Schätze", en: "Sunday Stroll", es: "Mercadillo" },
                title: { de: "Flohmarkt, Wochenmarkt oder Streetfood-Festival", en: "Flea Market or Streetfood Market", es: "Mercadillo, Rastro o Streetfood" },
                desc: { de: "Mit einem Kaffee durch die Stände schlendern und Kleinigkeiten probieren.", en: "Stroll through stalls with coffee and street food.", es: "Pasear entre puestos con un café y picar algo." },
                actionLabel: { de: "Märkte in der Nähe prüfen", en: "Find Markets Nearby", es: "Buscar mercados cerca" },
                actionUrl: "https://www.google.com/search?q=flohmarkt+wochenmarkt+heute+in+der+naehe"
            },
            {
                id: 5, emoji: "🥞", bg: "from-yellow-500 to-amber-700",
                tag: { de: "Ausgiebig genießen", en: "Brunch Lovers", es: "Brunch de finde" },
                title: { de: "Großer Wochenend-Brunch (Pancakes, Eggs Benedict & Mimosa)", en: "Big Weekend Brunch Out", es: "Gran Brunch (Pancakes, Huevos y Café)" },
                desc: { de: "Frühstück und Mittagessen in einem – entspannt in den Tag starten.", en: "Pancakes, avocado toast and fresh coffee.", es: "Tostadas, tortitas y empezar el día sin prisa." },
                actionLabel: { de: "Beste Brunch-Cafés suchen", en: "Best Brunch Spots", es: "Buscar sitios de brunch" },
                actionUrl: "https://www.google.com/maps/search/Brunch+Cafe"
            },
            {
                id: 6, emoji: "🚴", bg: "from-emerald-600 to-green-900",
                tag: { de: "Raus in die Natur", en: "Active Outdoors", es: "Ruta y Naturaleza" },
                title: { de: "Kleine Fahrradtour oder Wanderung ins Grüne", en: "Bike Ride or Scenic Hike", es: "Ruta en Bici o Senderismo" },
                desc: { de: "Kopf frei pusten, neue Strecke testen und unterwegs einkehren.", en: "Fresh air, scenic trail and a stop for cake or beer.", es: "Aire puro, buena ruta y parada para tomar algo." },
                actionLabel: { de: "Schöne Routen in der Nähe", en: "Find Trails Nearby", es: "Ver rutas cercanas" },
                actionUrl: "https://www.google.com/maps/search/Hiking+Area+Park"
            },
            {
                id: 7, emoji: "🧖", bg: "from-cyan-600 to-blue-900",
                tag: { de: "Tiefenentspannung", en: "Wellness Day", es: "Relax y Agua" },
                title: { de: "Therme, Sauna oder Hallenbad/Freibad", en: "Thermal Spa, Sauna or Pool Day", es: "Día de Spa, Termas o Piscina" },
                desc: { de: "Bademantel an, warmes Wasser und 4 Stunden Kurzurlaub.", en: "Warm water, sauna and 4 hours of pure vacation.", es: "Albornoz, agua caliente y desconexión total." },
                actionLabel: { de: "Thermen & Bäder finden", en: "Find Spas & Pools", es: "Buscar termas o spa" },
                actionUrl: "https://www.google.com/maps/search/Therme+Sauna+Schwimmbad"
            },
            {
                id: 8, emoji: "🖼️", bg: "from-indigo-600 to-slate-900",
                tag: { de: "Kultur & Inspiration", en: "Culture Fix", es: "Cultura" },
                title: { de: "Coole Ausstellung, Museum oder Planetarium", en: "Exhibition, Museum or Planetarium", es: "Exposición, Museo o Planetario" },
                desc: { de: "Mal wieder neuen Input holen – ideal auch bei Regenwetter.", en: "Discover something inspiring together.", es: "Descubrir algo nuevo y diferente juntos." },
                actionLabel: { de: "Museen & Ausstellungen zeigen", en: "Find Exhibitions", es: "Ver museos cerca" },
                actionUrl: "https://www.google.com/maps/search/Museum+Exhibition"
            },
            {
                id: 9, emoji: "🚗", bg: "from-sky-600 to-indigo-950",
                tag: { de: "Mini-Abenteuer", en: "Daytrip", es: "Escapada de día" },
                title: { de: "Spontaner Tagesausflug (See, Burg oder Nachbarstadt)", en: "Spontaneous Daytrip to a Lake or Castle", es: "Excursión a un Pueblo, Lago o Castillo" },
                desc: { de: "Playlist an, 45 Minuten rausfahren und etwas Neues sehen.", en: "45-minute drive, great playlist and a new view.", es: "Buena música y descubrir un sitio a menos de 1 hora." },
                actionLabel: { de: "Ausflugsziele in der Umgebung", en: "Daytrip Ideas Nearby", es: "Ideas de excursión" },
                actionUrl: "https://www.google.com/search?q=ausflugsziele+in+der+naehe"
            },
            {
                id: 10, emoji: "🧺", bg: "from-lime-600 to-emerald-900",
                tag: { de: "Sonne & Decke", en: "Park Picnic", es: "Pícnic" },
                title: { de: "Picknick im Park oder am Seeufer", en: "Sun Picnic by the Lake or Park", es: "Pícnic al Sol en el Parque o Lago" },
                desc: { de: "Decke, Baguette, Erdbeeren, Dips und kalte Getränke einpacken.", en: "Blanket, fresh bread, berries and cold drinks.", es: "Manta, algo rico de picar y bebidas frías." },
                actionLabel: { de: "Schönste Parks & Seen", en: "Find Parks & Lakes", es: "Buscar parques o lagos" },
                actionUrl: "https://www.google.com/maps/search/Park+See"
            },
            {
                id: 11, emoji: "🧁", bg: "from-pink-600 to-rose-900",
                tag: { de: "Duftet herrlich", en: "Cozy Kitchen", es: "Hornear en casa" },
                title: { de: "Zusammen Backen (Zimtschnecken, Kuchen oder Pizza-Teig)", en: "Bake Together (Cinnamon Rolls or Cake)", es: "Hornear Juntos (Rollos de Canela o Tarta)" },
                desc: { de: "Die ganze Wohnung riecht fantastisch und danach wird warm probiert.", en: "Make the whole home smell amazing.", es: "Que toda la casa huela increíble y comerlo recién hecho." },
                actionLabel: { de: "Zimtschnecken & Back-Ideen", en: "Baking Recipes", es: "Recetas fáciles de repostería" },
                actionUrl: "https://www.google.com/search?q=zimtschnecken+schnell+backen+rezept"
            }
        ]
    },

    meetup: {
        id: "meetup",
        category: "activity",
        mode: "match",
        icon: "📍",
        gradient: "from-cyan-500 to-blue-600",
        title: { de: "Wo treffen wir uns heute?", en: "Where Should We Meet?", es: "¿Dónde quedamos hoy?" },
        sub: { de: "Perfekt für Freunde & spontane Treffen", en: "Quick spot finder for friends & couples", es: "Decidir punto de encuentro en 30s" },
        cards: [
            {
                id: 0, emoji: "🌳", bg: "from-emerald-600 to-green-900",
                tag: { de: "Draußen & Entspannt", en: "Outdoors", es: "Aire libre" },
                title: { de: "Im Park oder am Wasser treffen", en: "Hangout at the Park / Waterfront", es: "Quedar en el Parque o Río/Playa" },
                desc: { de: "Snacks oder Getränke mitnehmen und in die Sonne/Abendluft setzen.", en: "Grab snacks & drinks and chill outside.", es: "Llevar algo de beber y sentarse al aire libre." },
                actionLabel: { de: "Parks in der Nähe zeigen", en: "Find Parks Nearby", es: "Ver parques cercanos" },
                actionUrl: "https://www.google.com/maps/search/Park"
            },
            {
                id: 1, emoji: "🥐", bg: "from-amber-600 to-yellow-800",
                tag: { de: "Kaffee & Süßes", en: "Coffee & Pastry", es: "Café y Dulce" },
                title: { de: "Neues Café oder Zimtschnecken-Spot", en: "Try a New Café or Bakery", es: "Probar una Cafetería Nueva" },
                desc: { de: "Cappuccino, Iced Latte oder frisches Gebäck probieren.", en: "Iced latte, cinnamon rolls & catching up.", es: "Buen café, algo dulce y ponernos al día." },
                actionLabel: { de: "Top-bewertete Cafés suchen", en: "Top Rated Cafés", es: "Cafeterías mejor valoradas" },
                actionUrl: "https://www.google.com/maps/search/Specialty+Coffee+Bakery"
            },
            {
                id: 2, emoji: "🎱", bg: "from-indigo-700 to-purple-900",
                tag: { de: "Action & Spaß", en: "Activity Spot", es: "Algo activo" },
                title: { de: "Billard, Darts, Tischtennis oder Bowling", en: "Pool, Darts or Bowling", es: "Billar, Dardos o Bolera" },
                desc: { de: "Nebenbei quatschen und eine lockere Runde gegeneinander spielen.", en: "Casual drinks with a fun game on the side.", es: "Charlar mientras echamos una partida." },
                actionLabel: { de: "Billard / Bowling in der Nähe", en: "Find Pool / Bowling", es: "Buscar billar o bolera" },
                actionUrl: "https://www.google.com/maps/search/Billard+Bowling+Darts"
            },
            {
                id: 3, emoji: "🎟️", bg: "from-rose-700 to-stone-900",
                tag: { de: "Große Leinwand", en: "Big Screen", es: "Pantalla grande" },
                title: { de: "Spontan ins Kino (mit Nachos / Popcorn)", en: "Spontaneous Cinema Trip", es: "Ir al Cine con Palomitas" },
                desc: { de: "Mal wieder echtes Kino-Feeling statt nur Streaming zuhause.", en: "Fresh popcorn, huge screen, phones off.", es: "Palomitas recién hechas y pantalla gigante." },
                actionLabel: { de: "Aktuelles Kinoprogramm prüfen", en: "Check Movie Showtimes", es: "Ver cartelera de cine" },
                actionUrl: "https://www.google.com/search?q=kinoprogramm+heute+in+der+naehe"
            },
            {
                id: 4, emoji: "🏡", bg: "from-teal-700 to-slate-900",
                tag: { de: "Gemütlich & Privat", en: "Home Hangout", es: "En casa" },
                title: { de: "Bei jemandem zuhause kochen oder bestellen", en: "Chill & Cook at Home", es: "Quedar en casa y pedir/cocinar" },
                desc: { de: "Kein Stress mit Reservierungen – Musik an und gemütlich machen.", en: "Zero reservation stress, comfy clothes & music.", es: "Cero estrés de reservas, música y relax." },
                actionLabel: { de: "Rezept- oder Liefer-Ideen", en: "Group Food Ideas", es: "Ideas para cenar en grupo" },
                actionUrl: "https://www.google.com/search?q=schnelles+essen+fuer+freunde+kochen"
            },
            {
                id: 5, emoji: "🌮", bg: "from-orange-600 to-red-800",
                tag: { de: "Jeder isst worauf er Lust hat", en: "Food Hall", es: "Mercado Gastronómico" },
                title: { de: "Food-Market / Markthalle mit verschiedenen Ständen", en: "Streetfood Hall / Indoor Market", es: "Mercado Gastronómico / Streetfood" },
                desc: { de: "Perfekt für Gruppen: Jeder holt sich seinen Favoriten und man sitzt zusammen.", en: "Everyone grabs their favorite food and sits together.", es: "Cada uno pide lo que quiera y nos sentamos juntos." },
                actionLabel: { de: "Food-Markets suchen", en: "Find Food Halls", es: "Buscar mercados gastronómicos" },
                actionUrl: "https://www.google.com/maps/search/Markthalle+Food+Market"
            },
            {
                id: 6, emoji: "🍻", bg: "from-amber-700 to-stone-900",
                tag: { de: "Klassischer Treffpunkt", en: "Casual Drinks", es: "Terraza o Pub" },
                title: { de: "Biergarten, Stammkneipe oder Tapas-Bar", en: "Beer Garden, Local Pub or Tapas Bar", es: "Terraza, Cervecería o Bar de Tapas" },
                desc: { de: "Unkompliziert zusammensitzen, anstoßen und Neuigkeiten austauschen.", en: "Grab a table, order pitchers or tapas and catch up.", es: "Unas cañas, raciones para compartir y ponernos al día." },
                actionLabel: { de: "Bars & Biergärten finden", en: "Find Bars & Terraces", es: "Buscar terrazas cerca" },
                actionUrl: "https://www.google.com/maps/search/Tapas+Bar+Biergarten"
            },
            {
                id: 7, emoji: "🍦", bg: "from-pink-500 to-purple-800",
                tag: { de: "Kurzes Treffen", en: "Quick Sweet Catchup", es: "Paseo y Helado" },
                title: { de: "Eisdiele / Frozen Yogurt & Spaziergang durchs Viertel", en: "Ice Cream / Boba Walk Through Town", es: "Heladería y Paseo por el Centro" },
                desc: { de: "Zwei Kugeln auf die Hand und entspannt durch das liebste Viertel laufen.", en: "Grab two scoops and stroll through a cool neighborhood.", es: "Un buen helado en mano y paseo tranquilo." },
                actionLabel: { de: "Beste Eisdielen in der Nähe", en: "Top Ice Cream Spots", es: "Buscar heladerías top" },
                actionUrl: "https://www.google.com/maps/search/Eisdiele+Gelato"
            },
            {
                id: 8, emoji: "🧗", bg: "from-sky-600 to-indigo-950",
                tag: { de: "Auspowern", en: "Sporty Hangout", es: "Plan deportivo" },
                title: { de: "Bouldern, Padel-Tennis, Basketball oder Laufrunde", en: "Bouldering, Padel, Spikeball or Run Club", es: "Pádel, Rocódromo o Deporte Juntos" },
                desc: { de: "Erst zusammen schwitzen, danach schmeckt das Kaltgetränk doppelt so gut!", en: "Move together first, cold drinks right after!", es: "Hacer algo de deporte y luego tomar algo bien frío." },
                actionLabel: { de: "Boulderhalle / Plätze finden", en: "Find Sports Spots", es: "Buscar pistas o rocódromo" },
                actionUrl: "https://www.google.com/maps/search/Bouldern+Padel+Sport"
            },
            {
                id: 9, emoji: "🎲", bg: "from-violet-700 to-slate-900",
                tag: { de: "Rätseln & Trinken", en: "Quiz or Boardgames", es: "Juegos y Copas" },
                title: { de: "Kneipen-Quiz (Pub Quiz) oder Spiele-Café", en: "Pub Quiz Night or Board Game Café", es: "Pub Quiz o Cafetería de Juegos" },
                desc: { de: "Als Team gegen andere Tische antreten oder neue Spiele testen.", en: "Team up for trivia night or try new board games.", es: "Competir en equipo en un trivial o probar juegos." },
                actionLabel: { de: "Spiele-Cafés & Pub-Quiz suchen", en: "Find Quiz / Game Cafés", es: "Buscar bares de juegos" },
                actionUrl: "https://www.google.com/maps/search/Board+Game+Cafe+Pub+Quiz"
            }
        ]
    },

    datenight: {
        id: "datenight",
        category: "activity",
        mode: "match",
        icon: "❤️",
        gradient: "from-rose-500 to-pink-600",
        title: { de: "Date-Night Deluxe", en: "Date Night Sparks", es: "Cita Especial" },
        sub: { de: "Schluss mit Standard – Zeit für euch zwei", en: "Break the routine with a special night", es: "Salir de la rutina en pareja" },
        cards: [
            {
                id: 0, emoji: "🌅", bg: "from-orange-500 to-rose-700",
                tag: { de: "Romantisch & Locker", en: "Golden Hour", es: "Atardecer" },
                title: { de: "Sonnenuntergangs-Spot mit Lieblingsgetränk", en: "Sunset Viewpoint + Drinks", es: "Mirador al Atardecer con Bebidas" },
                desc: { de: "Decke und zwei Drinks einpacken und den Ausblick genießen.", en: "Pack two drinks and watch the city lights come on.", es: "Llevar dos bebidas y disfrutar de las vistas." },
                actionLabel: { de: "Aussichtspunkte finden", en: "Find Sunset Spots", es: "Buscar miradores cerca" },
                actionUrl: "https://www.google.com/maps/search/Aussichtspunkt+Viewpoint"
            },
            {
                id: 1, emoji: "👨‍🍳", bg: "from-red-600 to-amber-700",
                tag: { de: "Team-Erlebnis", en: "Kitchen Date", es: "Reto en cocina" },
                title: { de: "2-Gänge Koch-Duell mit Musik & Wein", en: "2-Course Cooking Date + Wine", es: "Cocinar juntos con Vino y Música" },
                desc: { de: "Einer macht Vorspeise oder Hauptgang, der andere das Dessert!", en: "One handles the main, one does dessert!", es: "Uno hace el plato principal y el otro el postre." },
                actionLabel: { de: "Date-Night Rezepte ansehen", en: "Date Night Recipes", es: "Recetas para una cita" },
                actionUrl: "https://www.google.com/search?q=romantisches+abendessen+zu+zweit+rezept"
            },
            {
                id: 2, emoji: "🧖‍♀️", bg: "from-teal-600 to-cyan-900",
                tag: { de: "100% Entspannung", en: "Pure Relax", es: "Relax total" },
                title: { de: "Therme, Sauna oder Home-Spa Abend", en: "Spa, Sauna or Home Massage Night", es: "Termas, Spa o Masaje en Casa" },
                desc: { de: "Abschalten, warmes Wasser oder gegenseitige Massage zuhause.", en: "Unwind completely in warm water or at home.", es: "Desconectar del mundo y relajarse." },
                actionLabel: { de: "Thermen & Spas in der Nähe", en: "Find Spas Nearby", es: "Buscar spa o termas" },
                actionUrl: "https://www.google.com/maps/search/Therme+Spa+Sauna"
            },
            {
                id: 3, emoji: "🍦", bg: "from-indigo-600 to-violet-900",
                tag: { de: "Spontan & Süß", en: "Late Night Vibe", es: "Plan nocturno" },
                title: { de: "Night-Drive oder Abend-Spaziergang + Eis/Dessert", en: "Late-Night Walk or Drive + Dessert", es: "Paseo Nocturno + Helado o Postre" },
                desc: { de: "Abends noch mal raus, gute Playlist und ein Dessert holen.", en: "Good playlist, night air and a sweet treat.", es: "Buena playlist, aire fresco y algo dulce." },
                actionLabel: { de: "Eisdielen & Dessert-Spots", en: "Find Late Dessert", es: "Buscar heladerías o postres" },
                actionUrl: "https://www.google.com/maps/search/Ice+Cream+Dessert"
            },
            {
                id: 4, emoji: "🕯️", bg: "from-rose-700 to-stone-900",
                tag: { de: "Neues ausprobieren", en: "New Restaurant", es: "Restaurante Nuevo" },
                title: { de: "Candle-Light-Dinner in einem Restaurant, wo wir noch nie waren", en: "Dinner at a Brand-New Restaurant", es: "Cenar en un Restaurante Nuevo para Ambos" },
                desc: { de: "Schick anziehen, Smartphones weglegen und eine neue Küche testen.", en: "Dress up, phones away, and try a spot we've never visited.", es: "Arreglarse, guardar los móviles y probar un sitio nuevo." },
                actionLabel: { de: "Top-Restaurants in der Nähe", en: "Find Top Restaurants", es: "Ver restaurantes recomendados" },
                actionUrl: "https://www.google.com/maps/search/Romantic+Restaurant"
            },
            {
                id: 5, emoji: "⛳", bg: "from-purple-600 to-indigo-950",
                tag: { de: "Spielerisch", en: "Playful Rivalry", es: "Cita divertida" },
                title: { de: "Schwarzlicht-Minigolf, Bowling oder Arcade-Halle", en: "Neon Mini-Golf, Bowling or Arcade Date", es: "Minigolf Nocturno, Bolera o Recreativos" },
                desc: { de: "Kleine Wette abschließen: Der Gewinner darf den nächsten Film oder Drink bestimmen!", en: "Friendly bet: Winner picks the drinks afterwards!", es: "¡El que gane elige dónde tomamos la copa después!" },
                actionLabel: { de: "Minigolf & Bowling suchen", en: "Find Mini-Golf / Bowling", es: "Buscar minigolf o bolera" },
                actionUrl: "https://www.google.com/maps/search/Schwarzlicht+Minigolf+Bowling"
            },
            {
                id: 6, emoji: "🎭", bg: "from-amber-600 to-red-900",
                tag: { de: "Bühne & Live-Gefühl", en: "Live Stage", es: "En directo" },
                title: { de: "Comedy-Club, Stand-Up, Varieté oder kleines Konzert", en: "Stand-Up Comedy Club or Live Acoustic Show", es: "Club de Comedia (Monólogos) o Concierto" },
                desc: { de: "Zusammen Tränen lachen oder Live-Musik mit einem Drink erleben.", en: "Laugh until it hurts or enjoy live music with a drink.", es: "Reírse a carcajadas con un monólogo o música en vivo." },
                actionLabel: { de: "Events heute Abend prüfen", en: "Check Tonight's Shows", es: "Ver espectáculos hoy" },
                actionUrl: "https://www.google.com/search?q=comedy+konzert+heute+abend"
            },
            {
                id: 7, emoji: "🍷", bg: "from-fuchsia-700 to-slate-900",
                tag: { de: "Wohnzimmer-Erlebnis", en: "Home Tasting", es: "Cata en Casa" },
                title: { de: "Blind-Tasting zuhause (3 Weine, Käse, Schokolade oder Craft-Beer)", en: "DIY Blind Tasting at Home (Wine, Cheese or Chocolate)", es: "Cata a Ciegas en Casa (Vinos, Quesos o Chocolate)" },
                desc: { de: "3 besondere Sorten holen, Augen verbinden und Punkte von 1–10 vergeben!", en: "Pick 3 special bottles or snacks and rate them 1–10!", es: "Comprar 3 variedades especiales y puntuarlas del 1 al 10." },
                actionLabel: { de: "Ideen für Home-Tasting", en: "Home Tasting Guide", es: "Ideas para cata en casa" },
                actionUrl: "https://www.google.com/search?q=wein+und+kaese+tasting+zuhause+machen"
            },
            {
                id: 8, emoji: "🌌", bg: "from-slate-800 to-blue-950",
                tag: { de: "Magisch & Ruhig", en: "Stargazing", es: "Bajo las estrellas" },
                title: { de: "Sterne gucken / Nacht-Picknick mit Decke & Thermoskanne", en: "Stargazing or Balcony Blanket Date", es: "Ver las Estrellas o Cita Nocturna en Terraza" },
                desc: { de: "Dick einpacken, Musik leise an und in den Nachthimmel schauen.", en: "Cozy blanket, warm tea or wine, and look up at the stars.", es: "Manta, copa o té caliente y mirar las estrellas." },
                actionLabel: { de: "Sternenhimmel-App / Spots", en: "Stargazing Tips", es: "Ver mapa estelar" },
                actionUrl: "https://www.google.com/search?q=sterne+beobachten+orte+tipps"
            },
            {
                id: 9, emoji: "⛺", bg: "from-orange-600 to-stone-900",
                tag: { de: "Kissenburg-Romantik", en: "Cozy Indoor Camp", es: "Cine en el suelo" },
                title: { de: "Wohnzimmer-Picknick mit Lichterkette & Fingerfood", en: "Living Room Floor Picnic + Fairy Lights", es: "Pícnic en la Alfombra con Velas y Picoteo" },
                desc: { de: "Decken und alle Kissen auf den Boden, Kerzen an und mit den Händen essen.", en: "All pillows on the floor, candles lit, finger food & movies.", es: "Cojines al suelo, velas y cena de picoteo." },
                actionLabel: { de: "Fingerfood-Ideen öffnen", en: "Fingerfood Ideas", es: "Ideas de picoteo" },
                actionUrl: "https://www.google.com/search?q=fingerfood+zu+zweit+abendessen"
            }
        ]
    },

    // ============================================================
    // KATEGORIE 4: ALLTAG, HAUSHALT & PFLICHTEN (chores -> Anti-Match!)
    // ============================================================
    household: {
        id: "household",
        category: "chores",
        mode: "chores",
        icon: "🧹",
        gradient: "from-teal-500 to-emerald-600",
        title: { de: "Haushalts-Deal (Mit Anti-Match!)", en: "Chore Splitter (Anti-Match!)", es: "Reparto del Hogar (¡Anti-Match!)" },
        sub: { de: "Wer übernimmt was? Wo beide NEIN wischen, entscheidet das Los!", en: "Swipe YES on tasks you'll do. Mutual NO triggers fair tie-breaker!", es: "Desliza SÍ a lo que haces. ¡Doble NO se sortea al 50%!" },
        cards: [
            {
                id: 0, emoji: "🛒", bg: "from-sky-600 to-blue-900",
                tag: { de: "Versorgung", en: "Groceries", es: "Supermercado" },
                title: { de: "Einkaufen gehen & Taschen schleppen", en: "Grocery Shopping & Carrying Bags", es: "Ir al Supermercado y Cargar Bolsas" },
                desc: { de: "Rechts = Mach ich heute! Links = Bitte nicht ich!", en: "Swipe Right = I'll do it! Left = Please not me!", es: "Derecha = ¡Yo voy! Izquierda = ¡Paso!" },
                actionLabel: { de: "Einkaufsliste öffnen", en: "Done", es: "Listo" },
                actionUrl: "#"
            },
            {
                id: 1, emoji: "🍽️", bg: "from-emerald-600 to-teal-900",
                tag: { de: "Küchen-Dienst", en: "Kitchen Duty", es: "Cocina" },
                title: { de: "Küche aufräumen & Spülmaschine", en: "Clean Kitchen & Dishwasher", es: "Recoger Cocina y Lavavajillas" },
                desc: { de: "Arbeitsflächen abwischen, Geschirr ein-/ausräumen.", en: "Wipe counters and load/unload dishwasher.", es: "Limpiar encimera y poner/vaciar lavavajillas." },
                actionLabel: { de: "Erledigt", en: "Done", es: "Listo" },
                actionUrl: "#"
            },
            {
                id: 2, emoji: "🧹", bg: "from-purple-600 to-indigo-900",
                tag: { de: "Boden-Action", en: "Floors", es: "Suelos" },
                title: { de: "Staubsaugen & Boden wischen", en: "Vacuuming & Mopping Floors", es: "Pasar la Aspiradora y Fregar" },
                desc: { de: "Einmal durch alle Zimmer für frisches Barfuß-Gefühl.", en: "Quick vacuum run through the rooms.", es: "Dejar el suelo impecable en toda la casa." },
                actionLabel: { de: "Erledigt", en: "Done", es: "Listo" },
                actionUrl: "#"
            },
            {
                id: 3, emoji: "🧺", bg: "from-pink-600 to-rose-900",
                tag: { de: "Textil-Pflege", en: "Laundry", es: "Colada" },
                title: { de: "Wäsche waschen, aufhängen & falten", en: "Wash, Hang & Fold Laundry", es: "Lavar, Tender y Doblar Ropa" },
                desc: { de: "Maschine anwerfen und den Wäscheberg besiegen.", en: "Conquer the laundry basket today.", es: "Acabar con la montaña de ropa." },
                actionLabel: { de: "Erledigt", en: "Done", es: "Listo" },
                actionUrl: "#"
            },
            {
                id: 4, emoji: "🗑️", bg: "from-amber-600 to-stone-900",
                tag: { de: "Kurzer Gang raus", en: "Quick Outside Run", es: "Bajar a la calle" },
                title: { de: "Müll, Altpapier & Altglas runterbringen", en: "Take Out Trash & Recycling", es: "Bajar la Basura y Reciclaje" },
                desc: { de: "In 5 Minuten erledigt, aber keiner geht gern zur Tonne.", en: "Takes 5 minutes, yet nobody wants to go.", es: "Son 5 minutos pero nadie quiere ir." },
                actionLabel: { de: "Erledigt", en: "Done", es: "Listo" },
                actionUrl: "#"
            },
            {
                id: 5, emoji: "🫧", bg: "from-cyan-600 to-blue-950",
                tag: { de: "Glanz-Faktor", en: "Bathroom", es: "Baño" },
                title: { de: "Bad, Waschbecken & Spiegel putzen", en: "Clean Bathroom & Mirror", es: "Limpiar el Baño y Espejo" },
                desc: { de: "Einmal auf Hochglanz bringen für Hotel-Feeling.", en: "Make the sink and mirror sparkle again.", es: "Dejar el baño reluciente como un hotel." },
                actionLabel: { de: "Erledigt", en: "Done", es: "Listo" },
                actionUrl: "#"
            },
            {
                id: 6, emoji: "🛏️", bg: "from-indigo-600 to-slate-900",
                tag: { de: "Hotel-Gefühl", en: "Fresh Sheets", es: "Dormitorio" },
                title: { de: "Betten frisch beziehen & Schlafzimmer lüften", en: "Change Bed Sheets & Air Out Bedroom", es: "Cambiar las Sábanas y Ventilar" },
                desc: { de: "Nichts schläft sich besser als frische Bettwäsche am Abend!", en: "Nothing beats sleeping in fresh sheets tonight.", es: "Dormir hoy en sábanas recién puestas." },
                actionLabel: { de: "Erledigt", en: "Done", es: "Listo" },
                actionUrl: "#"
            },
            {
                id: 7, emoji: "🍾", bg: "from-lime-700 to-stone-900",
                tag: { de: "Flaschen-Mission", en: "Bottle Return", es: "Envases" },
                title: { de: "Pfandflaschen wegbringen & Getränke holen", en: "Return Empty Bottles & Buy Drinks", es: "Devolver Envases y Comprar Bebidas" },
                desc: { de: "Die Pfandtüte in der Ecke endlich in Guthaben verwandeln.", en: "Turn that bag of empty bottles into cash.", es: "Vaciar la bolsa de botellas acumuladas." },
                actionLabel: { de: "Erledigt", en: "Done", es: "Listo" },
                actionUrl: "#"
            },
            {
                id: 8, emoji: "🍳", bg: "from-orange-600 to-red-900",
                tag: { de: "Chefkoch heute", en: "Chef Duty", es: "Cocinar hoy" },
                title: { de: "Heute das Kochen / Essen machen übernehmen", en: "Cook Dinner Tonight", es: "Encargarse de Hacer la Cena Hoy" },
                desc: { de: "Einer kocht lecker, der andere darf die Füße hochlegen.", en: "One cooks the meal, the other relaxes.", es: "Uno cocina rico y el otro descansa." },
                actionLabel: { de: "Erledigt", en: "Done", es: "Listo" },
                actionUrl: "#"
            },
            {
                id: 9, emoji: "🪴", bg: "from-emerald-700 to-green-950",
                tag: { de: "Grüner Daumen", en: "Plants & Surfaces", es: "Plantas y Polvo" },
                title: { de: "Pflanzen gießen & Staub wischen (Regale / TV)", en: "Water Plants & Dust Surfaces", es: "Regar las Plantas y Quitar el Polvo" },
                desc: { de: "Damit die Zimmerpflanzen überleben und der Fernseher glänzt.", en: "Keep the houseplants alive and shelves clean.", es: "Que las plantas sobrevivan y los muebles brillen." },
                actionLabel: { de: "Erledigt", en: "Done", es: "Listo" },
                actionUrl: "#"
            },
            {
                id: 10, emoji: "🧊", bg: "from-sky-700 to-slate-900",
                tag: { de: "Ordnungs-Check", en: "Fridge & Couch", es: "Orden rápido" },
                title: { de: "Wohnzimmer-Reset & Kühlschrank ausmisten", en: "Tidy Living Room & Clear Fridge", es: "Ordenar el Salón y Revisar la Nevera" },
                desc: { de: "Decken falten, Gläser wegräumen und Abgelaufenes aussortieren.", en: "Fold blankets, clear cups and check the fridge.", es: "Doblar mantas, recoger vasos y ordenar nevera." },
                actionLabel: { de: "Erledigt", en: "Done", es: "Listo" },
                actionUrl: "#"
            },
            {
                id: 11, emoji: "📦", bg: "from-amber-700 to-zinc-900",
                tag: { de: "Versand-Helden", en: "Returns & Packages", es: "Paquetes" },
                title: { de: "Retouren & Pakete zur Packstation / Post bringen", en: "Drop Off Returns & Packages", es: "Llevar Paquetes o Devoluciones a Correos" },
                desc: { de: "Bevor die Rückgabefrist abläuft schnell wegbringen!", en: "Drop off those return boxes before the deadline!", es: "Llevar las cajas antes de que pase el plazo." },
                actionLabel: { de: "Erledigt", en: "Done", es: "Listo" },
                actionUrl: "#"
            }
        ]
    },

    whoseturn: {
        id: "whoseturn",
        category: "chores",
        mode: "chores",
        icon: "⚡",
        gradient: "from-amber-500 to-red-600",
        title: { de: "Wer muss jetzt ran? (Drückeberger-Check)", en: "Whose Turn Is It? (No Excuses)", es: "¿A quién le toca hoy?" },
        sub: { de: "Einkaufen, Fahren, Aufstehen – inklusive Anti-Match-Auslosung!", en: "Errands, driving, getting up – with automatic tie-breaker!", es: "Recados rápidos con sorteo automático si nadie quiere" },
        cards: [
            {
                id: 0, emoji: "🏃‍♂️", bg: "from-orange-600 to-red-800",
                tag: { de: "Kurze Mission", en: "Quick Errand", es: "Recado rápido" },
                title: { de: "Schnell noch zum Supermarkt / Bäcker flitzen", en: "Quick Run to the Store / Bakery", es: "Bajar un momento a comprar pan / súper" },
                desc: { de: "Rechts = Ich geh schon! Links = Ich bleib sitzen!", en: "Right = I'll go! Left = I'm staying on the couch!", es: "Derecha = ¡Voy yo! Izquierda = ¡No me muevo!" },
                actionLabel: { de: "Okay", en: "Okay", es: "Vale" },
                actionUrl: "#"
            },
            {
                id: 1, emoji: "🚗", bg: "from-slate-700 to-slate-950",
                tag: { de: "Chauffeur-Ehre", en: "Designated Driver", es: "Conductor hoy" },
                title: { de: "Heute Abend fahren / abholen", en: "Be the Designated Driver Tonight", es: "Conducir hoy / Llevar el coche" },
                desc: { de: "Wer übernimmt heute das Steuer?", en: "Who is taking the wheel tonight?", es: "¿Quién se encarga de conducir hoy?" },
                actionLabel: { de: "Okay", en: "Okay", es: "Vale" },
                actionUrl: "#"
            },
            {
                id: 2, emoji: "🔔", bg: "from-indigo-600 to-purple-900",
                tag: { de: "Es hat geklingelt", en: "Doorbell Rang", es: "Suena el timbre" },
                title: { de: "Zur Tür gehen & Lieferdienst / Paket annehmen", en: "Answer the Door / Grab Delivery", es: "Abrir la puerta al repartidor" },
                desc: { de: "Aus der gemütlichen Decke schälen und zur Tür gehen.", en: "Leave the cozy couch and answer the door.", es: "Salir del sofá para recoger el pedido." },
                actionLabel: { de: "Okay", en: "Okay", es: "Vale" },
                actionUrl: "#"
            },
            {
                id: 3, emoji: "🍿", bg: "from-emerald-600 to-teal-900",
                tag: { de: "Couch-Service", en: "Couch Butler", es: "Servicio de sofá" },
                title: { de: "Aufstehen & Snacks / Getränke für beide holen", en: "Get Up & Fetch Snacks/Drinks", es: "Levantarse a por snacks y bebidas" },
                desc: { de: "Einmal in die Küche gehen und Nachschub liefern.", en: "Kitchen run to restock the couch.", es: "Ir a la cocina y traer provisiones." },
                actionLabel: { de: "Okay", en: "Okay", es: "Vale" },
                actionUrl: "#"
            },
            {
                id: 4, emoji: "📞", bg: "from-rose-600 to-pink-900",
                tag: { de: "Orga-Held", en: "Organizer", es: "Organizador" },
                title: { de: "Anrufen, reservieren oder Bestellung aufgeben", en: "Make the Phone Call / Reservation", es: "Llamar para reservar o hacer el pedido" },
                desc: { de: "Für alle mit Telefon-Allergie: Wer regelt die Buchung?", en: "Who handles the phone call or booking?", es: "¿Quién se encarga de llamar o reservar?" },
                actionLabel: { de: "Okay", en: "Okay", es: "Vale" },
                actionUrl: "#"
            },
            {
                id: 5, emoji: "☕", bg: "from-amber-600 to-stone-900",
                tag: { de: "Morgen-Held", en: "Morning Coffee", es: "Café de mañana" },
                title: { de: "Morgen früh zuerst aufstehen & Kaffee machen", en: "Get Up First & Make Morning Coffee", es: "Levantarse Primero y Hacer el Café" },
                desc: { de: "Der andere darf 15 Minuten länger im warmen Bett bleiben!", en: "The other person gets 15 extra minutes in bed!", es: "El otro se queda 15 minutos más en la cama." },
                actionLabel: { de: "Okay", en: "Okay", es: "Vale" },
                actionUrl: "#"
            },
            {
                id: 6, emoji: "🐕", bg: "from-green-700 to-teal-950",
                tag: { de: "Frische Luft", en: "Pet / Evening Walk", es: "Paseo / Mascota" },
                title: { de: "Gassi-Runde / Haustier füttern / Kurzer Abendgang", en: "Walk the Dog / Feed Pets", es: "Sacar al Perro / Dar de Comer a la Mascota" },
                desc: { de: "Noch mal kurz in die Jacke schlüpfen oder den Napf füllen.", en: "Put on a jacket or fill up the food bowl.", es: "Ponerse la chaqueta un momento o llenar el cuenco." },
                actionLabel: { de: "Okay", en: "Okay", es: "Vale" },
                actionUrl: "#"
            },
            {
                id: 7, emoji: "🥡", bg: "from-red-600 to-amber-900",
                tag: { de: "Selbstabholer", en: "Pickup Run", es: "Recoger pedido" },
                title: { de: "Essen selbst abholen fahren (statt 1 Stunde auf Lieferdienst warten)", en: "Go Pick Up the Takeout Order", es: "Ir a Recoger la Comida (Más Rápido)" },
                desc: { de: "Geht doppelt so schnell und das Essen kommt noch richtig heiß an!", en: "Twice as fast and the food stays piping hot!", es: "Llega el doble de rápido y mucho más caliente." },
                actionLabel: { de: "Okay", en: "Okay", es: "Vale" },
                actionUrl: "#"
            },
            {
                id: 8, emoji: "⛽", bg: "from-cyan-700 to-slate-900",
                tag: { de: "Auto-Pflicht", en: "Car Care", es: "Coche" },
                title: { de: "Auto tanken / laden oder durch die Waschstraße fahren", en: "Refuel / Charge or Wash the Car", es: "Echar Gasolina / Cargar o Lavar el Coche" },
                desc: { de: "Damit bei der nächsten Fahrt nicht sofort die Reserveleuchte blinkt.", en: "So the tank isn't on zero for the next trip.", es: "Para no salir en reserva en el próximo viaje." },
                actionLabel: { de: "Okay", en: "Okay", es: "Vale" },
                actionUrl: "#"
            },
            {
                id: 9, emoji: "🔌", bg: "from-violet-700 to-indigo-950",
                tag: { de: "Vor dem Einschlafen", en: "Night Check", es: "Ronda nocturna" },
                title: { de: "Abend-Runde: Lichter aus, Tür abschließen & Handys ans Kabel", en: "Night Check: Lock Up, Lights Off & Plug Phones", es: "Ronda Nocturna: Cerrar Puerta y Apagar Luces" },
                desc: { de: "Noch einmal aufstehen, Fenster prüfen und alles dunkel machen.", en: "Last one up checks the doors and turns off all lights.", es: "Último paseo para apagar todo y cerrar con llave." },
                actionLabel: { de: "Okay", en: "Okay", es: "Vale" },
                actionUrl: "#"
            }
        ]
    },

    // ============================================================
    // KATEGORIE 5: TRIPS, URLAUB & GESCHENKE (trips)
    // ============================================================
    vacation: {
        id: "vacation",
        category: "trips",
        mode: "match",
        icon: "✈️",
        gradient: "from-sky-500 to-indigo-600",
        title: { de: "Urlaubs- & Trip-Kompass", en: "Next Trip Matcher", es: "Próximo Viaje o Escapada" },
        sub: { de: "Strand, Berge, Städtetrip oder Roadtrip?", en: "Beach, mountains, city break or roadtrip?", es: "¿Playa, montaña, ciudad o ruta en coche?" },
        cards: [
            {
                id: 0, emoji: "🏖️", bg: "from-cyan-500 to-blue-700",
                tag: { de: "Sonne & Meer", en: "Sun & Ocean", es: "Sol y Playa" },
                title: { de: "Strandurlaub, Meer & Pool-Liege", en: "Beach Resort & Ocean Breeze", es: "Playa, Mar y Relax total" },
                desc: { de: "Kopf aus, Meeresrauschen, Buch lesen und kaltes Getränk.", en: "Zero schedule, warm ocean and cold drinks.", es: "Cero horarios, brisa marina y descanso." },
                actionLabel: { de: "Strand-Ziele entdecken", en: "Explore Beach Trips", es: "Ver destinos de playa" },
                actionUrl: "https://www.google.com/search?q=sch%C3%B6nste+strandurlaub+ziele+europa"
            },
            {
                id: 1, emoji: "🏛️", bg: "from-amber-600 to-rose-700",
                tag: { de: "Kultur & Food", en: "City Break", es: "Escapada Urbana" },
                title: { de: "Städtetrip Europa (Tapas, Cafés, Sightseeing)", en: "European City Break & Food Tour", es: "Escapada Europea (Gastronomía y Cultura)" },
                desc: { de: "Durch fremde Gassen schlendern, Märkte und coole Viertel entdecken.", en: "Explore new streets, local markets and great food.", es: "Callejear, probar mercados y descubrir una ciudad." },
                actionLabel: { de: "Top Städtetrips ansehen", en: "Top City Breaks", es: "Mejores escapadas europeas" },
                actionUrl: "https://www.google.com/search?q=beste+staedtetrips+europa+wochenende"
            },
            {
                id: 2, emoji: "🏔️", bg: "from-emerald-700 to-slate-900",
                tag: { de: "Natur & Panorama", en: "Nature & Views", es: "Naturaleza" },
                title: { de: "Berghütte, Wandern & Bergsee", en: "Mountain Cabin & Alpine Lakes", es: "Montaña, Cabaña y Naturaleza" },
                desc: { de: "Frische Bergluft, Panorama-Aussicht und abends Hüttenzauber.", en: "Crisp mountain air, epic views and cozy cabin nights.", es: "Aire puro, rutas increíbles y cabaña acogedora." },
                actionLabel: { de: "Berg- & Hütten-Ideen", en: "Mountain Getaways", es: "Escapadas de montaña" },
                actionUrl: "https://www.google.com/search?q=berghuette+kurzurlaub+ideen"
            },
            {
                id: 3, emoji: "🚐", bg: "from-orange-600 to-amber-900",
                tag: { de: "Freiheit pur", en: "Freedom", es: "Libertad" },
                title: { de: "Roadtrip entlang der Küste", en: "Coastal Roadtrip Adventure", es: "Roadtrip por la Costa" },
                desc: { de: "Gute Playlist, jeden Tag ein neuer Ort und spontane Stopps.", en: "Great playlist, scenic routes and spontaneous stops.", es: "Buena música, paradas espontáneas y vistas al mar." },
                actionLabel: { de: "Schönste Roadtrip-Routen", en: "Best Roadtrip Routes", es: "Mejores rutas en coche" },
                actionUrl: "https://www.google.com/search?q=schoenste+roadtrips+europa"
            },
            {
                id: 4, emoji: "🧖‍♀️", bg: "from-teal-600 to-cyan-950",
                tag: { de: "Bademantel-Modus", en: "Wellness Hotel", es: "Hotel Spa" },
                title: { de: "Wellness- & Spa-Hotel mit Infinity-Pool & Halbpension", en: "Luxury Spa & Wellness Hotel", es: "Hotel Balneario con Spa y Gastronomía" },
                desc: { de: "Sauna, Massage, beheizter Außenpool und abends ein 4-Gänge-Menü.", en: "Heated infinity pool, massages and great food.", es: "Piscina climatizada, sauna y cena increíble." },
                actionLabel: { de: "Wellnesshotels entdecken", en: "Find Spa Hotels", es: "Ver hoteles con spa" },
                actionUrl: "https://www.google.com/search?q=beste+wellnesshotels+kurzurlaub"
            },
            {
                id: 5, emoji: "🏡", bg: "from-lime-700 to-emerald-950",
                tag: { de: "Privat & Ungestört", en: "Private Villa / AirBnB", es: "Casa o Villa" },
                title: { de: "Eigenes Ferienhaus / Finca (mit Pool, Kamin oder Garten)", en: "Cozy AirBnB Cabin or Pool Villa", es: "Casa Rural o Villa con Piscina" },
                desc: { de: "Ausschlafen ohne Frühstückszeiten, grillen und volle Privatsphäre.", en: "Zero hotel schedules, private pool or fireplace.", es: "Cero horarios de hotel, barbacoa y privacidad total." },
                actionLabel: { de: "Besondere Unterkünfte suchen", en: "Explore Unique Stays", es: "Ver casas especiales" },
                actionUrl: "https://www.google.com/search?q=besondere+ferienhaeuser+finca+kurzurlaub"
            },
            {
                id: 6, emoji: "🏝️", bg: "from-blue-600 to-indigo-950",
                tag: { de: "Insel-Gefühl", en: "Island Hopping", es: "Islas" },
                title: { de: "Insel-Urlaub (Mallorca, Griechenland, Kanaren oder Azoren)", en: "Mediterranean or Atlantic Island Escape", es: "Escapada a una Isla (Baleares, Canarias, Grecia)" },
                desc: { de: "Kleine Buchten, türkises Wasser, Roller mieten und Tavernen am Meer.", en: "Hidden coves, turquoise water and seaside tavernas.", es: "Calas escondidas, agua turquesa y cenas junto al mar." },
                actionLabel: { de: "Schönste Inseln vergleichen", en: "Best Island Trips", es: "Mejores islas para viajar" },
                actionUrl: "https://www.google.com/search?q=schoenste+urlaubsinseln+europa"
            },
            {
                id: 7, emoji: "🌲", bg: "from-slate-700 to-teal-950",
                tag: { de: "Coolcation", en: "Nordic Escape", es: "Norte y Naturaleza" },
                title: { de: "Skandinavien, Schottland oder Natur-Abenteuer im Norden", en: "Nordic Nature, Fjords or Cozy Cabin", es: "Escandinavia, Fiordos o Naturaleza Salvaje" },
                desc: { de: "Wälder, Fjorde, Seen, Kaminfeuer und frische Luft statt 38 Grad Hitze.", en: "Lakes, fjords, cinnamon buns and crisp nature.", es: "Bosques, lagos, cabañas y paisajes de película." },
                actionLabel: { de: "Nord-Trips entdecken", en: "Explore Nordic Trips", es: "Ver viajes al norte" },
                actionUrl: "https://www.google.com/search?q=skandinavien+urlaub+natur+ideen"
            },
            {
                id: 8, emoji: "🍷", bg: "from-rose-700 to-amber-900",
                tag: { de: "La Dolce Vita", en: "Food & Wine Region", es: "Ruta Gastronómica" },
                title: { de: "Genuss-Reise (Toskana, Südtirol, Provence oder San Sebastián)", en: "Culinary & Wine Region Getaway", es: "Viaje Gastronómico y de Vinos (Toscana, Norte)" },
                desc: { de: "Weingüter, unfassbar gutes Essen und malerische Landschaften.", en: "Vineyards, incredible food and rolling hills.", es: "Viñedos, pueblos con encanto y comer de diez." },
                actionLabel: { de: "Schönste Genuss-Regionen", en: "Best Foodie Regions", es: "Rutas gastronómicas" },
                actionUrl: "https://www.google.com/search?q=genussreise+toskana+suedtirol+ideen"
            },
            {
                id: 9, emoji: "🎿", bg: "from-sky-700 to-blue-950",
                tag: { de: "Schnee & Hütte", en: "Winter Wonderland", es: "Nieve y Montaña" },
                title: { de: "Winter-Trip: Skifahren, Rodeln oder verschneite Chalet-Auszeit", en: "Snowy Mountain Chalet or Ski Trip", es: "Escapada de Nieve, Esquí o Chalet" },
                desc: { de: "Tagsüber im Schnee, abends Kaiserschmarrn, Fondue und Sauna.", en: "Fresh snow by day, fondue and sauna by night.", es: "Nieve de día y chimenea o fondue por la noche." },
                actionLabel: { de: "Winter-Auszeiten finden", en: "Winter Getaways", es: "Ver escapadas de nieve" },
                actionUrl: "https://www.google.com/search?q=winterurlaub+chalet+berge+ideen"
            }
        ]
    },

    gifts: {
        id: "gifts",
        category: "trips",
        mode: "match",
        icon: "🎁",
        gradient: "from-fuchsia-500 to-rose-500",
        title: { de: "Geschenk- & Wunsch-Matcher", en: "Gift & Wish Matcher", es: "Ideas de Regalo" },
        sub: { de: "Was schenken wir (uns oder Freunden)?", en: "Find the perfect gift idea in 30s", es: "¿Qué regalamos esta vez?" },
        cards: [
            {
                id: 0, emoji: "🎫", bg: "from-purple-600 to-indigo-900",
                tag: { de: "Erinnerung fürs Leben", en: "Shared Memory", es: "Experiencia" },
                title: { de: "Konzert-, Comedy- oder Event-Tickets", en: "Concert, Show or Live Event Tickets", es: "Entradas para Concierto o Espectáculo" },
                desc: { de: "Gemeinsame Vorfreude und ein unvergesslicher Abend statt Staubfänger.", en: "Real memories instead of more stuff.", es: "Un recuerdo inolvidable en lugar de cosas materiales." },
                actionLabel: { de: "Events in der Nähe prüfen", en: "Browse Live Events", es: "Ver eventos próximos" },
                actionUrl: "https://www.google.com/search?q=konzerte+events+tickets"
            },
            {
                id: 1, emoji: "🍽️", bg: "from-rose-600 to-amber-800",
                tag: { de: "Genuss-Moment", en: "Foodie Gift", es: "Gastronomía" },
                title: { de: "Besonderes Dinner, Tasting oder Kochkurs", en: "Fine Dining, Wine Tasting or Barista Course", es: "Cena Degustación o Cata" },
                desc: { de: "Ein Abendessen oder Tasting, das man sich sonst nicht gönnt.", en: "A culinary treat you wouldn't buy on a normal Tuesday.", es: "Una experiencia gastronómica especial." },
                actionLabel: { de: "Tastings & Erlebnisse suchen", en: "Find Food Experiences", es: "Buscar catas y experiencias" },
                actionUrl: "https://www.google.com/search?q=tasting+kochkurs+geschenk"
            },
            {
                id: 2, emoji: "🧳", bg: "from-teal-600 to-emerald-900",
                tag: { de: "Tapetenwechsel", en: "Weekend Escape", es: "Escapada" },
                title: { de: "Überraschungs-Kurztrip (1–2 Nächte)", en: "Weekend Wellness or Boutique Hotel", es: "Escapada de Fin de Semana (1-2 noches)" },
                desc: { de: "Einfach mal 48 Stunden raus aus dem Alltag.", en: "48 hours away from everyday routine.", es: "48 horas fuera de la rutina diaria." },
                actionLabel: { de: "Kurztrip-Deals ansehen", en: "Browse Short Trips", es: "Ver ideas de escapada" },
                actionUrl: "https://www.google.com/search?q=wochenendtrip+hotel+wellness+angebot"
            },
            {
                id: 3, emoji: "🎧", bg: "from-slate-700 to-slate-900",
                tag: { de: "Jeden Tag nützlich", en: "Daily Upgrade", es: "Tecnología / Hogar" },
                title: { de: "Cooles Gadget (Tech, Kaffee oder Küche)", en: "Smart Tech, Coffee or Kitchen Upgrade", es: "Gadget Tecnológico o de Café/Cocina" },
                desc: { de: "Etwas, das man jeden Tag benutzt und sich jedes Mal drüber freut.", en: "Something used every single day with joy.", es: "Algo útil que se disfruta todos los días." },
                actionLabel: { de: "Beliebte Gadget-Geschenke", en: "Top Gadget Gifts", es: "Ver mejores gadgets para regalar" },
                actionUrl: "https://www.google.com/search?q=beste+geschenkideen+gadgets+kueche+tech"
            },
            {
                id: 4, emoji: "💆‍♀️", bg: "from-cyan-600 to-teal-900",
                tag: { de: "Entspannung schenken", en: "Pure Pampering", es: "Bienestar" },
                title: { de: "Massage-, Day-Spa- oder Wellness-Gutschein", en: "Massage, Day-Spa or Wellness Voucher", es: "Masaje, Circuito Spa o Bienestar" },
                desc: { de: "Eine garantierte Auszeit zum Abschalten und Verwöhnenlassen.", en: "A guaranteed break to unwind and recharge.", es: "Un regalo de relax puro que siempre triunfa." },
                actionLabel: { de: "Day-Spas & Massagen finden", en: "Find Spa Vouchers", es: "Buscar spas para regalar" },
                actionUrl: "https://www.google.com/search?q=day+spa+massage+gutschein"
            },
            {
                id: 5, emoji: "🧺", bg: "from-amber-600 to-orange-900",
                tag: { de: "Liebevoll zusammengestellt", en: "Curated Box", es: "Cesta Gourmet" },
                title: { de: "Feinkost- & Genuss-Box (Spezialitäten, Wein, Kaffee, Schokolade)", en: "Gourmet Delicacy Box (Coffee, Wine, Olive Oil)", es: "Caja Gourmet (Café de Especialidad, Vino, Delicatessen)" },
                desc: { de: "Hochwertige Leckereien, die sich aufbrauchen und glücklich machen.", en: "Consumable luxuries that never collect dust.", es: "Caprichos deliciosos que siempre hacen ilusión." },
                actionLabel: { de: "Genuss-Box Ideen ansehen", en: "Gourmet Gift Ideas", es: "Ideas de cajas gourmet" },
                actionUrl: "https://www.google.com/search?q=feinkost+genuss+geschenkbox+ideen"
            },
            {
                id: 6, emoji: "🎨", bg: "from-pink-600 to-purple-900",
                tag: { de: "Etwas Neues lernen", en: "Creative Workshop", es: "Taller Creativo" },
                title: { de: "Kreativ-Workshop (Töpfern, Barista, Cocktail-Kurs, Malen)", en: "Pottery, Barista or Cocktail Mixing Workshop", es: "Taller de Cerámica, Barista o Coctelería" },
                desc: { de: "Zusammen etwas mit den Händen erschaffen und Spaß haben.", en: "Learn a cool hands-on skill together.", es: "Aprender algo nuevo y divertido juntos." },
                actionLabel: { de: "Workshops in der Stadt finden", en: "Find Local Workshops", es: "Buscar talleres creativos" },
                actionUrl: "https://www.google.com/search?q=workshop+toepfern+barista+geschenk"
            },
            {
                id: 7, emoji: "🎲", bg: "from-indigo-600 to-blue-950",
                tag: { de: "Gemeinsame Abende", en: "Game & Cozy Night", es: "Para disfrutar en casa" },
                title: { de: "Besonderes Brettspiel, Lego-Set (Botanicals) oder Buch-Bestseller", en: "Board Game Hit, Lego Botanicals or Bestseller Book", es: "Juego de Mesa Top, Lego Botanicals o Libro" },
                desc: { de: "Perfekt für gemütliche Wochenenden auf der Couch.", en: "Perfect for cozy weekends at home.", es: "Ideal para tardes tranquilas en casa." },
                actionLabel: { de: "Aktuelle Bestseller & Sets", en: "Browse Top Games & Lego", es: "Ver juegos y sets top" },
                actionUrl: "https://www.google.com/search?q=lego+botanicals+brettspiel+geschenk"
            },
            {
                id: 8, emoji: "📸", bg: "from-rose-500 to-red-900",
                tag: { de: "100% Persönlich", en: "Personal & Emotional", es: "Muy personal" },
                title: { de: "Fotobuch, gerahmte Erinnerung oder Polaroid-/Instax-Kamera", en: "Custom Photo Book, Framed Print or Instax Camera", es: "Álbum de Fotos, Cuadro o Cámara Instantánea" },
                desc: { de: "Echte Erinnerungen zum Anfassen statt nur 5.000 Fotos auf dem Handy.", en: "Turn phone photos into real tangible memories.", es: "Convertir los recuerdos del móvil en algo físico." },
                actionLabel: { de: "Foto-Geschenkideen prüfen", en: "Photo Gift Ideas", es: "Ideas de regalos con fotos" },
                actionUrl: "https://www.google.com/search?q=kreative+fotogeschenke+ideen"
            },
            {
                id: 9, emoji: "🪂", bg: "from-emerald-600 to-teal-950",
                tag: { de: "Adrenalin & Action", en: "Bucket List Action", es: "Aventura" },
                title: { de: "Action-Erlebnis (Kartfahren, Kletterwald, Flugsimulator, Escape Room)", en: "Action Experience (Go-Kart, Escape Room, Zipline)", es: "Experiencia de Acción (Karts, Escape Room, Aventura)" },
                desc: { de: "Ein Tag voller Action, über den man noch lange spricht.", en: "An adrenaline-packed day out together.", es: "Un plan lleno de adrenalina para recordar." },
                actionLabel: { de: "Action-Erlebnisse suchen", en: "Find Action Gifts", es: "Buscar experiencias de acción" },
                actionUrl: "https://www.google.com/search?q=erlebnisgeschenke+action+ideen"
            }
        ]
    }
};
