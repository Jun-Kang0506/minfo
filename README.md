# MINFO｜みんなのインフォ

**Multilingual Information Navigator for Foreign-Origin Residents**

A civic-tech prototype: a source-grounded, multilingual AI life-information
navigator for foreign-origin residents, piloting in Shinjuku / Okubo, Tokyo.
Not a translation chatbot — a trusted navigator that explains daily-life
systems simply, always shows its official sources, and guides people to the
right real-world office.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — mobile-first, so try a narrow window or device mode.

## What's inside

- **6 languages** from local dictionaries: English, やさしい日本語, 中文, 한국어, Tiếng Việt, नेपाली
- **Source-grounded answers**: every answer shows official/public source cards
  (Shinjuku City, Tokyo Metropolitan Government, Himawari, Tokyo Bousai, ISA, FRESC…)
- **Safety behavior**: 119/110 emergency escalation, caution notices for
  legal/visa/tax/housing topics, honest low-confidence fallback to real
  consultation desks
- **Answer structure**: direct answer → safety note → next steps → sources → feedback

## Architecture

```
src/lib/types.ts                  shared types (Answer, Source, Category, Language…)
src/lib/data/                     local trusted data: sources, categories, prompts,
                                  6-language answer templates, UI strings
src/lib/engine/localAnswerEngine  v1 engine — deterministic, works offline
src/lib/engine/claudeAnswerEngine placeholder for server-side Claude API (Phase 2)
src/app/api/ask/route.ts          server route — the engine swap point
```

The MVP requires **no API key**. To prepare Claude integration, copy
`.env.local.example` to `.env.local` — keys are only read server-side and are
never exposed to the browser.

## Status

Hackathon prototype (2026). Not a government service. Feedback buttons store
state locally only; the open-data roadmap items are future plans, clearly
labeled as not yet implemented.
