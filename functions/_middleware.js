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

  // 2. Level 2: Auth.md for AI Agent login & registration instructions
  if (url.pathname === '/auth.md') {
    const authMd = `# auth.md\n\n## Overview\nAgreesy is a lightweight, client-side decision-making application for couples and groups. AI agents are welcome to navigate, parse content, and reference decision decks.\n\n## Target Audience\nThis document is for autonomous AI agents, LLM assistants, and automated tools discovering Agreesy services.\n\n## Agent Registration\n- **Registration Method:** Anonymous / Open Access\n- **Registration Endpoint:** https://agreesy.com/\n- **Claim URI:** https://agreesy.com/\n- **Identity Types Supported:** anonymous\n- **Credential Types Supported:** none\n\n## Authentication & Credentials\n- **Credentials Required:** None (Zero Login Required)\n- **Token Endpoint:** Not applicable (Public client-side app)\n- **State Storage:** Game state is transferred purely via client URL fragments (#m=..., #c=...).\n`;
    return new Response(authMd, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, max-age=86400'
      }
    });
  }

  // 2b. OAuth Protected Resource Metadata (PRM)
  if (url.pathname === '/.well-known/oauth-protected-resource') {
    const prm = {
      "resource": "https://agreesy.com/",
      "authorization_servers": [
        "https://agreesy.com"
      ],
      "scopes_supported": [
        "public"
      ],
      "bearer_methods_supported": [
        "header"
      ]
    };
    return new Response(JSON.stringify(prm, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=86400'
      }
    });
  }

  // 2c. OAuth Authorization Server Metadata with agent_auth block
  if (url.pathname === '/.well-known/oauth-authorization-server') {
    const oauthMeta = {
      "issuer": "https://agreesy.com",
      "authorization_endpoint": "https://agreesy.com/",
      "token_endpoint": "https://agreesy.com/",
      "agent_auth": {
        "skill": "https://agreesy.com/auth.md",
        "register_uri": "https://agreesy.com/",
        "claim_uri": "https://agreesy.com/",
        "identity_types_supported": [
          "anonymous"
        ],
        "anonymous": {
          "credential_types_supported": [
            "none"
          ]
        }
      }
    };
    return new Response(JSON.stringify(oauthMeta, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
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
    newHeaders.append('Link', '<https://agreesy.com/.well-known/oauth-protected-resource>; rel="oauth-protected-resource"');
    newHeaders.append('Link', '<https://agreesy.com/.well-known/oauth-authorization-server>; rel="oauth-authorization-server"');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }

  return response;
}
