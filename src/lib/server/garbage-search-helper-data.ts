import "server-only";
import type { GarbageRecord } from "@/lib/types";
import { isHelperLocale, type HelperLocale, type HelperSnapshot, validateHelperSnapshot } from "@/lib/garbage-search-helpers";
import manifest from "@/lib/data/generated/garbage-search-helpers/manifest.json";
import collisions from "@/lib/data/generated/garbage-search-helpers/collisions.json";
import qualifierReview from "@/lib/data/generated/garbage-search-helpers/qualifier-review.json";
import en from "@/lib/data/generated/garbage-search-helpers/en.json";
import zh from "@/lib/data/generated/garbage-search-helpers/zh.json";
import ko from "@/lib/data/generated/garbage-search-helpers/ko.json";
import vi from "@/lib/data/generated/garbage-search-helpers/vi.json";
import ne from "@/lib/data/generated/garbage-search-helpers/ne.json";
import tl from "@/lib/data/generated/garbage-search-helpers/tl.json";
import bn from "@/lib/data/generated/garbage-search-helpers/bn.json";

const snapshots: Record<HelperLocale, HelperSnapshot> = { en, zh, ko, vi, ne, tl, bn } as Record<HelperLocale, HelperSnapshot>;
export function getValidatedGarbageSearchHelpers(locale: string, records: readonly GarbageRecord[]) {
  if (!isHelperLocale(locale)) return undefined;
  const sourceSnapshotSha256 = "1b66d0dc7ad841e77d915f27a48c77682ba6ed2cff1c07a15a2d1508332c2a04";
  if (manifest.sourceSnapshotSha256 !== sourceSnapshotSha256 || manifest.sourceResourceUrl !== "https://www.city.shinjuku.lg.jp/content/000420404.csv" || !Array.isArray(collisions.collisions) || !Array.isArray(qualifierReview.records) || qualifierReview.records.length !== 482) throw new Error("Invalid garbage helper bundle");
  const snapshot = snapshots[locale];
  validateHelperSnapshot(snapshot, records, sourceSnapshotSha256);
  return snapshot;
}
