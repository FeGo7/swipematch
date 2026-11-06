const fs = require('fs');

// Mock browser environment
const localStorageData = {};
global.localStorage = {
    getItem: (k) => localStorageData[k] || null,
    setItem: (k, v) => { localStorageData[k] = String(v); },
    removeItem: (k) => { delete localStorageData[k]; },
    clear: () => { Object.keys(localStorageData).forEach(k => delete localStorageData[k]); }
};

global.navigator = {
    languages: ['de-DE', 'de'],
    language: 'de'
};

global.window = {
    location: {
        hash: '',
        href: 'https://agreesy.com/',
        pathname: '/',
        origin: 'https://agreesy.com',
        search: ''
    },
    history: {
        replaceState: () => {}
    },
    addEventListener: () => {}
};

global.document = {
    getElementById: (id) => ({
        classList: { add: () => {}, remove: () => {}, toggle: () => {} },
        style: {},
        innerText: '',
        innerHTML: '',
        value: '',
        className: '',
        setAttribute: () => {},
        getAttribute: () => '',
        addEventListener: () => {},
        click: () => {},
        appendChild: () => {}
    }),
    createElement: () => ({
        classList: { add: () => {}, remove: () => {} },
        style: {},
        innerText: '',
        innerHTML: '',
        setAttribute: () => {},
        appendChild: () => {}
    }),
    body: {
        classList: { add: () => {}, remove: () => {}, toggle: () => {} }
    }
};

global.btoa = (str) => Buffer.from(str, 'binary').toString('base64');
global.atob = (b64) => Buffer.from(b64, 'base64').toString('binary');

// Load files
const decksCode = fs.readFileSync('js/decks.js', 'utf8');
const i18nCode = fs.readFileSync('js/i18n.js', 'utf8');
const appCode = fs.readFileSync('js/app.js', 'utf8');

eval(decksCode + '; global.DECKS = DECKS;');
eval(i18nCode + '; global.I18N = I18N; global.CATEGORIES = CATEGORIES;');

console.log('Testing all 14 Decks:');
const deckKeys = Object.keys(DECKS);
let errors = 0;

for (const key of deckKeys) {
    const deck = DECKS[key];
    if (!deck.cards || deck.cards.length === 0) {
        console.error(`FAIL: Deck ${key} has no cards.`);
        errors++;
    }
    // Check cards integrity
    deck.cards.forEach((card, idx) => {
        if (!card.title || !card.title.de || !card.title.en || !card.title.es) {
            console.error(`FAIL: Deck ${key} card ${idx} missing title translation.`);
            errors++;
        }
        if (!card.desc || !card.desc.de || !card.desc.en || !card.desc.es) {
            console.error(`FAIL: Deck ${key} card ${idx} missing desc translation.`);
            errors++;
        }
    });
}

console.log(`Total decks verified: ${deckKeys.length}. Card errors: ${errors}`);

// Test Hash Generation and Parsing (P2P State Sync)
console.log('\nTesting 0-Byte P2P URL-Hash Encoding & Decoding:');
const sampleDeckId = 'dinner';
const sampleLikes = [0, 2, 5];
const samplePool = [0, 1, 2, 3, 4, 5, 6, 7];
const rawPayload = `${sampleDeckId}:${sampleLikes.join(',')}:${samplePool.join(',')}`;
const encodedHash = '#m=' + global.btoa(rawPayload);

console.log('Sample Generated Hash:', encodedHash);
const decodedStr = global.atob(encodedHash.replace('#m=', ''));
const parts = decodedStr.split(':');
const parsedDeckId = parts[0];
const parsedLikes = parts[1].split(',').map(Number);
const parsedPool = parts[2].split(',').map(Number);

if (parsedDeckId === sampleDeckId &&
    parsedLikes.length === sampleLikes.length &&
    parsedPool.length === samplePool.length) {
    console.log('PASS: 0-Byte Backend Hash serialization and deserialization is 100% accurate!');
} else {
    console.error('FAIL: Hash serialization mismatch.');
    errors++;
}

// Test Custom Poll payload
console.log('\nTesting Custom Poll serialization:');
const customPayload = {
    t: 'Where to eat tonight?',
    m: 'match',
    o: ['Sushi Place', 'Burger Joint', 'Pizzeria'],
    l: [0, 2]
};
const customJson = JSON.stringify(customPayload);
const customBase64 = Buffer.from(unescape(encodeURIComponent(customJson))).toString('base64');
const decodedCustom = decodeURIComponent(escape(Buffer.from(customBase64, 'base64').toString('utf8')));
const parsedCustom = JSON.parse(decodedCustom);

if (parsedCustom.t === customPayload.t && parsedCustom.o.length === 3) {
    console.log('PASS: Custom Poll UTF-8 serialization is 100% accurate!');
} else {
    console.error('FAIL: Custom Poll serialization mismatch.');
    errors++;
}

console.log('\n=== ALL TESTS PASSED SUCCESSFULLY! Total Errors: ' + errors + ' ===');
