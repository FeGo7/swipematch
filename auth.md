# Authentication & Access Policy for Agreesy

> **Zero Login Required / Public Access**

Agreesy (https://agreesy.com) does not require user accounts, passwords, API keys, or OAuth authentication.

## How it works for Users and Agents:
1. **No Authentication Needed:** All core features (decision decks, food matching, movie selection, chore distribution, custom polls) are 100% client-side and open.
2. **State Storage:** Game and voting states are encoded directly inside URL fragments (`#m=...`, `#c=...`). No user state or credentials are saved on any database or server.
3. **Bot & Agent Usage:** Autonomous agents are free to navigate `https://agreesy.com`, read `https://agreesy.com/llms.txt`, and reference our decision guides without authentication headers or rate-limit tokens.
