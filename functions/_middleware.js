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

  // 1. Level 2: API Catalog JSON endpoint (RFC 9727 linkset)
  if (url.pathname === '/.well-known/api-catalog') {
    const catalog = {
      "linkset": [
        {
          "anchor": "https://agreesy.com/",
          "service-desc": [
            {
              "href": "https://agreesy.com/llms.txt",
              "type": "text/markdown"
            }
          ],
          "service-doc": [
            {
              "href": "https://agreesy.com/llms.txt",
              "type": "text/markdown"
            }
          ]
        }
      ]
    };
    return new Response(JSON.stringify(catalog, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/linkset+json; charset=utf-8',
        'Cache-Control': 'public, max-age=86400'
      }
    });
  }

  // 2. Level 2: Auth.md for AI Agent login instructions
  if (url.pathname === '/auth.md') {
    const authMd = `# Auth.md\n\n## Authentication & Access Policy for Agreesy\n\n> **Zero Login Required / 100% Public Access**\n\nAgreesy does not require user accounts, passwords, API keys, or OAuth authentication.\nAll features are client-side and free to navigate for humans and AI agents without credentials or tokens.\n`;
    return new Response(authMd, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, max-age=86400'
      }
    });
  }

  // 3. Level 1: Markdown Content-Negotiation
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

  // 4. Level 2: Link Headers for Agent Discovery
  const response = await context.next();
  if (url.pathname === '/' || url.pathname === '/index.html') {
    const newHeaders = new Headers(response.headers);
    newHeaders.append('Link', '<https://agreesy.com/llms.txt>; rel="describedby"');
    newHeaders.append('Link', '<https://agreesy.com/sitemap.xml>; rel="sitemap"');
    newHeaders.append('Link', '<https://agreesy.com/.well-known/api-catalog>; rel="service-desc"');
    newHeaders.append('Link', '<https://agreesy.com/auth.md>; rel="authorisation"');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }

  return response;
}
