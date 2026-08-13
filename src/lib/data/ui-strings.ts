import type { Localized } from "../types";

interface RoadmapItem {
  title: string;
  body: string;
}

interface StrategyItem {
  title: string;
  body: string;
}

interface PipelineStep {
  label: string;
  desc: string;
}

interface QualityItem {
  label: string;
  desc: string;
}

interface StoryBlock {
  title: string;
  body: string;
}

interface WhyMinfoCard {
  title: string;
  body: string;
}

export interface UIStrings {
  brand: {
    /** Localized brand subtitle shown after "MINFO" (みんなのインフォ = "everyone's info"). */
    subtitle: string;
    /** Accessible label for the language selector. */
    languageLabel: string;
  };
  nav: {
    ask: string;
    categories: string;
    sources: string;
    openData: string;
    whyMinfo: string;
    why: string;
    /** Accessible label for the floating scroll-to-top button. */
    backToTop: string;
  };
  emergencyBar: string;
  hero: {
    kicker: string;
    headline: string;
    sub: string;
    ctaAsk: string;
    trustSources: string;
    trustLanguages: string;
    trustPilot: string;
  };
  categories: { title: string; sub: string; tryLabel: string };
  ask: {
    title: string;
    sub: string;
    placeholder: string;
    send: string;
    examples: string;
    thinking: string;
    emptyHint: string;
  };
  answer: {
    emergency: string;
    caution: string;
    steps: string;
    sources: string;
    lowConfidence: string;
    disclaimer: string;
    aiBadge: string;
    answerLabel: string;
    nextStep: string;
    whatToDo: string;
    officialInformation: string;
    resultCardLabel: string;
  };
  feedback: {
    question: string;
    helpful: string;
    confusing: string;
    wrong: string;
    language: string;
    thanks: string;
  };
  sources: {
    title: string;
    sub: string;
    /** Register group headings: ward / metropolitan / national tiers. */
    groupWard: string;
    groupTokyo: string;
    groupNational: string;
    roadmapTitle: string;
    roadmapBadge: string;
    roadmap: RoadmapItem[];
  };
  openData: {
    title: string;
    sub: string;
    /** Data-use status row: curated records running today. Body contains "{count}", replaced with the number of curated source records. */
    now: { badge: string; body: string };
    /** Data-use status row: identified open-data candidates, never auto-fetched yet. */
    next: { badge: string; body: string };
    pipelineTitle: string;
    /** Fixed order: official data → curated record → multilingual explanation → next action. */
    pipeline: PipelineStep[];
    strategyTitle: string;
    strategyIntro: string;
    /** Fixed order: stable / periodic / time-sensitive — badges are mapped by index. */
    strategy: StrategyItem[];
    candidatesTitle: string;
    candidatesSub: string;
    catalogCta: string;
    badges: {
      curated: string;
      candidate: string;
      batch: string;
      live: string;
      searchTarget: string;
    };
  };
  quality: {
    title: string;
    sub: string;
    items: QualityItem[];
  };
  mascot: { alt: string };
  whyMinfo: {
    title: string;
    sub: string;
    cards: WhyMinfoCard[];
  };
  story: {
    title: string;
    sub: string;
    blocks: StoryBlock[];
    impactTitle: string;
    impact: string[];
  };
  footer: {
    tagline: string;
    meta: string;
    emergencyTitle: string;
    fire: string;
    police: string;
    freeNote: string;
  };
}

import { MESSAGES } from "@/i18n/messages";

const locales = ["en", "ja", "zh", "ko", "vi", "ne"] as const;
export const UI_STRINGS: Localized<UIStrings> = Object.fromEntries(
  locales.map((locale) => {
    const messages = MESSAGES[locale];
    return [locale, { ...messages.ui, ...messages.pages, ...messages.result, emergencyBar: messages.emergency.emergencyBar }];
  }),
) as Localized<UIStrings>;
