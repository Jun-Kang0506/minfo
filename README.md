# MINFO｜みんなのインフォ

**Multilingual civic information navigator for foreign-origin residents in Tokyo**

MINFO is a civic-tech prototype: a source-grounded, multilingual life-information navigator for foreign-origin residents, piloting around Shinjuku / Okubo, Tokyo.

It is not a government service, and it is not a general translation chatbot. MINFO is designed as a multilingual civic information desk: it explains daily-life systems simply, shows the official/public sources behind its answers, and guides users toward the right real-world office or service.

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

The interface is mobile-first, so test it in a narrow browser window or device mode.

## What’s inside

### 6-language interface

MINFO currently supports:

- English
- やさしい日本語
- 中文
- 한국어
- Tiếng Việt
- नेपाली

UI strings are stored locally and are not machine-translated at runtime.

### Source-grounded answers

MINFO answers are built around official/public source references, including sources such as:

- Shinjuku City
- Tokyo Metropolitan Government
- Tokyo Fire Department
- Medical Information Net
- Immigration Services Agency of Japan
- FRESC
- National Tax Agency
- Japan Pension Service

Each answer is structured to show direct guidance, safety notes when needed, next steps, official/public sources, and feedback.

### Localized source display

For non-Japanese UI languages, MINFO prioritizes localized display names and descriptions.

Official Japanese source and dataset names are preserved in the data for accuracy, but they are not shown as dominant body text in the normal non-Japanese UI.

### Emergency behavior

Emergency handling is deterministic and serious.

MINFO escalates clearly for:

- 119 fire / ambulance
- 110 police

Emergency answers are kept visually distinct and do not use mascot decoration.

### Functional mascot states

The mascot is used as product state, not decoration.

Current states include:

- initial / helper
- thinking
- guide
- fallback / question

The mascot is removed from emergency responses.

### Tokyo Open Data roadmap

MINFO includes a Tokyo Open Data candidate dataset section.

This section is a transparent roadmap/registry. The current prototype does not automatically fetch live open data yet.

## Open data strategy

MINFO’s data strategy is staged:

1. **Curated official records now**  
   Hand-selected official/public sources and structured local guidance.

2. **Scheduled CSV / batch updates next**  
   Suitable for data that changes periodically but does not need real-time access.

3. **API / live data only where timeliness requires it**  
   Reserved for information where outdated guidance could create risk.

## Architecture

```text
src/lib/types.ts                  Shared types
src/lib/data/                     Trusted local data, sources, categories,
                                  UI strings, prompts, open-data candidates
src/lib/engine/localAnswerEngine  Deterministic v1 answer engine
src/lib/engine/claudeAnswerEngine Server-side Claude integration placeholder
src/app/api/ask/route.ts          Server route and future engine swap point
src/components/                   UI components and civic desk interface
```

The MVP works without an API key.

Claude/API integration is prepared as a server-side Phase 2 path. API keys should only be read server-side and must never be exposed to the browser.

## Development notes

- Next.js App Router
- React
- Tailwind CSS
- Local dictionary-based i18n
- Deterministic local answer engine
- Server route prepared for future engine swapping
- Mobile-first civic desk interface

Run checks before committing:

```bash
npm run build
npm run lint
```

## Status

Hackathon prototype, 2026.

MINFO is not a government service. It provides source-grounded guidance but does not replace official consultation desks, emergency services, legal advice, medical advice, or immigration professionals.

Feedback buttons currently store state locally only.

Open-data integration items are future plans and are clearly labeled as not yet implemented.
