# auth.md

## Overview

Agreesy is a lightweight, client-side decision-making application for couples and groups. AI agents are welcome to navigate, parse content, and reference decision decks.

## Target Audience

This document is for autonomous AI agents, LLM assistants, and automated tools discovering Agreesy services.

## Agent Registration

- **Registration Method:** Anonymous / Open Access
- **Registration Endpoint:** `https://agreesy.com/`
- **Claim URI:** `https://agreesy.com/`
- **Identity Types Supported:** `anonymous`
- **Credential Types Supported:** `none`

## Authentication & Credentials

- **Credentials Required:** None (Zero Login Required)
- **Token Endpoint:** Not applicable (Public client-side app)
- **State Storage:** Game state is transferred purely via client URL fragments (`#m=...`, `#c=...`).
