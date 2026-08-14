import type { LanguageCode } from "@/lib/types";

/** Production locales only. Draft locales never enter the runtime selector. */
export const PRODUCTION_LOCALES: readonly LanguageCode[] = ["en", "ja", "zh", "ko", "vi", "ne", "tl", "bn"];
export type DraftLocale = never;
export const DRAFT_LOCALES: readonly DraftLocale[] = [];

export function interpolate(template: string, values: Record<string, string>): string {
  return template.replace(/\{([\w-]+)\}/g, (_match, token) => values[token] ?? `{${token}}`);
}
