/**
 * Stable, source-derived Shinjuku town identifiers for directory filtering.
 * This intentionally extracts only the town unit written in an official
 * address; it does not infer a broader neighborhood or a user's location.
 */
export function normalizeJapaneseAddress(value: string): string {
  return value.normalize("NFKC").replace(/[\s　]/g, "");
}

export function getShinjukuTownId(address: string | undefined): string | null {
  if (!address) return null;
  const afterWard = normalizeJapaneseAddress(address).split("新宿区")[1];
  if (!afterWard) return null;

  // Official address town names end immediately before their chome / block.
  // Keep the source spelling, while accepting kanji and numeric chome forms.
  const town = afterWard.match(/^(.+?)(?=(?:(?:[一二三四五六七八九十]+|\d+)(?:丁目|丁|番地?|号|[-ー])|\d+(?:$|(?=\D))))/)?.[1]
    // A few official records give the town alone, with no block/building.
    ?? (/^[一-龯々ヶケ]+町$/.test(afterWard) ? afterWard : null);
  return town ? `town:${town}` : null;
}

export function getShinjukuTownLabel(address: string | undefined): string | null {
  const id = getShinjukuTownId(address);
  return id?.slice("town:".length) ?? null;
}
