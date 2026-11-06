// Cloudflare Pages Middleware: Free Markdown Negotiation for AI Agents (0,00 € instead of Cloudflare Pro Plan)
const MARKDOWN_DOC = `# Agreesy (https://agreesy.com)

> Einigen ohne Diskussion – Shared decisions for couples, roommates, and friends in 30 seconds. Zero accounts, zero servers, 100% privacy-first via encrypted URL-hash state.

## Was ist Agreesy? / What is Agreesy?
Agreesy (https://agreesy.com) ist eine kostenlose, sofort im Browser nutzbare Entscheidungs-App für Paare, WGs und Freunde (Deutsch, Englisch, Spanisch). Statt 30 Minuten darüber zu diskutieren, was heute gekocht/bestellt wird, welcher Film geschaut wird oder wer welche Aufgaben im Haushalt übernimmt, wischt jede Person verdeckt durch 8 Vorschläge:
- **Konsens-Modus (Match):** Erste gemeinsame Zustimmung gewinnt sofort (z.B. Hunger & Essen, Film & Couch, Date Night, Wochenend-Ausflug).
- **Aufteilungs-Modus (Fair Split / Anti-Match):** Freiwillige Aufgaben werden direkt zugewiesen, ungeliebte Restaufgaben werden per Zufalls-Zuteilung fair verteilt.
- **Eigene Abstimmung (Custom Poll):** Eigene Restaurants, Filme oder Ideen eintragen und direkt als verschlüsselten Einladungslink per WhatsApp teilen.

## Links
- Web App: https://agreesy.com/
- Guides & Partner Recommendations: https://agreesy.com/guides.html
- Sitemap: https://agreesy.com/sitemap.xml
`;

export async function onRequest(context) {
  const accept = context.request.headers.get('Accept') || '';
  const url = new URL(context.request.url);

  // If an AI agent explicitly requests Markdown via Content-Negotiation (Accept: text/markdown)
  if (
    (url.pathname === '/' || url.pathname === '/index.html') &&
    accept.includes('text/markdown') &&
    !accept.includes('text/html')
  ) {
    return new Response(MARKDOWN_DOC, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept',
        'X-Markdown-Negotiation': 'active'
      }
    });
  }

  return context.next();
}
