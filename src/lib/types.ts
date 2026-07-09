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
  | "bank-account"
  | "lost-wallet"
  | "city-office-letter"
  | "fallback";

export interface Category {
  id: CategoryId;
  /** Card title in each UI language. */
  title: Localized<string>;
  /** Japanese label, shown as a signage-style subtitle when it differs. */
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
  /** Canonical official URL — short and stable, the source of truth. */
  url: string;
  /** Official language versions of the same page; fall back to `url` when absent. */
  localizedUrls?: Partial<Record<LanguageCode, string>>;
  categories: CategoryId[];
  /** Why this source is relevant to MINFO users — shown on the source card. */
  note: Localized<string>;
}

export interface OpenDataCandidate {
  id: string;
  /** Official dataset title as listed in the Tokyo Open Data Catalog. */
  titleJa: string;
  /** Short English gloss of the official title. */
  titleEn: string;
  /** Catalog page recorded during research — dataset page or category page. */
  url: string;
  organization: string;
  /** Data format visible in the catalog, when confirmed. */
  format?: string;
  /** How a future MINFO would keep this fresh — never fetched automatically today. */
  updatePlan: "batch" | "live";
  /** "dataset" = a specific catalog entry; "searchTarget" = a catalog category to search. */
  kind: "dataset" | "searchTarget";
  /** Why this matters for MINFO users — shown in the user's language. */
  note: Localized<string>;
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
  /** Which engine produced this answer (shown as a small badge in the UI). */
  engine?: "local" | "claude";
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
