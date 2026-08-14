import { MESSAGES } from "@/i18n/messages";
import type { DemoPrompt, LanguageCode, TopicId } from "../types";

/** Stable semantic routing stays here; translated prompt labels live in messages. */
const PROMPT_TOPIC_IDS: TopicId[] = [
  "hospital", "insurance", "garbage", "earthquake", "japanese-learning",
  "consultation", "tax", "housing", "residence-card", "police",
  "consultation", "easy-japanese", "ambulance", "earthquake", "consultation",
];

const locales = Object.keys(MESSAGES) as LanguageCode[];

export const DEMO_PROMPTS: DemoPrompt[] = PROMPT_TOPIC_IDS.map((topicId, index) => ({
  topicId,
  label: Object.fromEntries(
    locales.map((locale) => [locale, MESSAGES[locale].prompts[index]]),
  ) as DemoPrompt["label"],
}));
