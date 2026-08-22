import type { GarbageRecord, LanguageCode } from "@/lib/types";

export const HELPER_LOCALES = ["en", "zh", "ko", "vi", "ne", "tl", "bn"] as const;
export type HelperLocale = (typeof HELPER_LOCALES)[number];
export type HelperItem = { id: string; n: string; a?: readonly string[]; r?: "check_japanese" };
export type HelperSnapshot = {
  schemaVersion: 1;
  locale: HelperLocale;
  status: "minfo_multilingual_search_helper";
  sourceSnapshotSha256: string;
  items: readonly HelperItem[];
};

export const isHelperLocale = (locale: string): locale is HelperLocale => (HELPER_LOCALES as readonly string[]).includes(locale);

/** Search keys intentionally preserve punctuation and diacritics, except typography variants. */
export function normalizeGarbageHelperSearch(value: string, locale: string) {
  return value.normalize("NFKC").toLocaleLowerCase(locale)
    .replace(/[‐‑‒–—−]/gu, "-")
    .replace(/[’ʼ]/gu, "'")
    .replace(/[“”„]/gu, '"')
    .replace(/\p{White_Space}+/gu, "");
}

const hasKana = (value: string) => /[\p{Script=Hiragana}\p{Script=Katakana}]/u.test(value.normalize("NFKC"));
type Tier = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type SearchMatch = { record: GarbageRecord; helper?: HelperItem; tier: Tier };

const sortMatches = (matches: SearchMatch[]) => matches.sort((a, b) =>
  a.tier - b.tier || (a.helper?.n ?? a.record.officialItem).localeCompare(b.helper?.n ?? b.record.officialItem, "und") ||
  a.record.officialItem.localeCompare(b.record.officialItem, "ja") || a.record.officialId.localeCompare(b.record.officialId),
);

/**
 * All matching is local and deterministic. A winning tier is returned whole,
 * so an ambiguous exact alias never silently selects an official item.
 */
export function searchGarbageWithHelpers(records: readonly GarbageRecord[], query: string, locale: LanguageCode, snapshot?: HelperSnapshot): SearchMatch[] {
  const officialKey = normalizeGarbageHelperSearch(query, "ja-JP").slice(0, 80);
  if (!officialKey) return [];
  const recordsById = new Map(records.map((record) => [record.officialId, record]));
  const localizedKey = normalizeGarbageHelperSearch(query, locale).slice(0, 80);
  const matches: SearchMatch[] = [];
  if (locale !== "ja" && snapshot && localizedKey) {
    const allowPartial = [...localizedKey].length >= 2;
    for (const helper of snapshot.items) {
      const record = recordsById.get(helper.id);
      if (!record) continue;
      const aliases = helper.a ?? [];
      let tier: Tier | undefined;
      const name = normalizeGarbageHelperSearch(helper.n, locale);
      const aliasKeys = aliases.map((alias) => normalizeGarbageHelperSearch(alias, locale));
      if (name === localizedKey) tier = 1;
      else if (aliasKeys.includes(localizedKey)) tier = 2;
      else if (allowPartial && name.startsWith(localizedKey)) tier = 3;
      else if (allowPartial && aliasKeys.some((alias) => alias.startsWith(localizedKey))) tier = 4;
      else if (allowPartial && name.includes(localizedKey)) tier = 5;
      else if (allowPartial && aliasKeys.some((alias) => alias.includes(localizedKey))) tier = 6;
      if (tier) matches.push({ record, helper, tier });
    }
  }
  const japaneseTier: Tier | undefined = records.some((record) => record.searchKey === officialKey) ? 7
    : (locale === "ja" || hasKana(query)) && records.some((record) => record.searchKey.startsWith(officialKey)) ? 8
      : (locale === "ja" || hasKana(query)) && records.some((record) => record.searchKey.includes(officialKey)) ? 9 : undefined;
  if (japaneseTier) for (const record of records) {
    const match = japaneseTier === 7 ? record.searchKey === officialKey : japaneseTier === 8 ? record.searchKey.startsWith(officialKey) : record.searchKey.includes(officialKey);
    if (match) matches.push({ record, helper: snapshot?.items.find((item) => item.id === record.officialId), tier: japaneseTier });
  }
  const winner = matches.length ? Math.min(...matches.map((match) => match.tier)) : undefined;
  return sortMatches(winner === undefined ? [] : matches.filter((match) => match.tier === winner));
}

export function validateHelperSnapshot(snapshot: HelperSnapshot, records: readonly GarbageRecord[], sourceSnapshotSha256: string) {
  if (snapshot.schemaVersion !== 1 || !isHelperLocale(snapshot.locale) || snapshot.status !== "minfo_multilingual_search_helper" || snapshot.sourceSnapshotSha256 !== sourceSnapshotSha256 || snapshot.items.length !== 482 || records.length !== 482) throw new Error("Invalid garbage search helper snapshot");
  const official = new Map(records.map((record) => [record.officialId, record]));
  const ids = new Set<string>();
  for (const item of snapshot.items) {
    if (!official.has(item.id) || ids.has(item.id) || !item.n.trim() || [...item.n].length > 80 || (item.a && (item.a.length > 2 || item.a.some((alias) => !alias.trim() || [...alias].length > 80)))) throw new Error("Invalid garbage search helper item");
    ids.add(item.id);
  }
}
