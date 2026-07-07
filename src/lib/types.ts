// Shared types for MINFO — keep this file dependency-free so both
// server (API route / engines) and client components can import it.

export type LanguageCode = "en" | "ja" | "zh" | "ko" | "vi" | "ne";

export type Localized<T> = Record<LanguageCode, T>;

export interface Language {
  code: LanguageCode;
  nativeLabel: string;
  englishLabel: string;
}

export type CategoryId =
  | "hospitals"
  | "taxes"
  | "garbage"
  | "disaster"
  | "housing"
  | "japanese"
  | "consultation"
  | "emergency";

export type TopicId =
  | "hospital"
  | "insurance"
  | "garbage"
  | "earthquake"
  | "japanese-learning"
  | "consultation"
  | "tax"
  | "housing"
  | "residence-card"
  | "police"
  | "ambulance"
  | "easy-japanese"
  | "fallback";

export interface Category {
  id: CategoryId;
  titleEn: string;
  titleJa: string;
  icon: string;
  description: Localized<string>;
  exampleTopic: TopicId;
}

export interface Source {
  id: string;
  title: string;
  titleJa?: string;
  organization: string;
  url: string;
  categories: CategoryId[];
  /** Why this source is relevant — shown on the source card. */
  note: string;
}

export type SafetyLevel = "emergency" | "caution";

export interface SafetyInfo {
  level: SafetyLevel;
  text: string;
}

export interface LocalizedAnswerContent {
  direct: string;
  steps: string[];
  /** Optional topic-specific safety note in this language. */
  safety?: string;
}

export interface AnswerTemplate {
  id: TopicId;
  categoryId: CategoryId;
  safetyLevel?: SafetyLevel;
  /** Lower-cased keywords used to match free-typed questions. */
  keywords: string[];
  sourceIds: string[];
  content: Localized<LocalizedAnswerContent>;
}

export interface Answer {
  id: string;
  topicId: TopicId;
  lang: LanguageCode;
  question: string;
  direct: string;
  steps: string[];
  safety?: SafetyInfo;
  sources: Source[];
  confidence: "high" | "low";
}

export type FeedbackChoice = "helpful" | "confusing" | "wrong" | "language";

export interface AskRequest {
  text: string;
  /** Set when the user clicked a category card or example chip. */
  topicId?: TopicId;
  lang: LanguageCode;
}

export interface DemoPrompt {
  topicId: TopicId;
  label: Localized<string>;
}

/**
 * Every answer engine (local keyword matching today, Claude API later)
 * implements this interface, so the rest of the app never changes.
 */
export interface AnswerEngine {
  ask(req: AskRequest): Promise<Answer>;
}
