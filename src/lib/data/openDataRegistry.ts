import type { OpenDataRegistryEntry } from "../types";
import { getLocalizedOpenDataContent } from "../../i18n/content";

/** Stable catalog metadata. Localized title glosses and notes live in src/content. */
type OpenDataMetadata = Omit<OpenDataRegistryEntry, "titleGloss" | "note">;

const OPEN_DATA_METADATA: OpenDataMetadata[] = [
  {
    "id": "shinjuku-childcare-facilities",
    "titleJa": "新宿区の子育て施設一覧",
    "titleEn": "Shinjuku childcare facilities",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000117",
    "organization": "Shinjuku City",
    "format": "CSV",
    "updatePlan": "batch",
    "kind": "dataset", "status": "active", "lookupIds": ["shinjuku-childcare-facilities"], "refresh": "checked_snapshot"
  },
  {
    "id": "shinjuku-evacuation-sites",
    "titleJa": "新宿区の指定緊急避難場所一覧",
    "titleEn": "Shinjuku designated emergency evacuation sites",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000115",
    "organization": "Shinjuku City",
    "format": "CSV",
    "updatePlan": "batch",
    "kind": "dataset", "status": "active", "lookupIds": ["shinjuku-evacuation-sites"], "refresh": "checked_snapshot"
  },
  {
    "id": "shinjuku-public-facilities",
    "titleJa": "新宿区の公共施設情報",
    "titleEn": "Shinjuku public facilities",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000113",
    "organization": "Shinjuku City",
    "format": "CSV",
    "updatePlan": "batch",
    "kind": "dataset", "status": "candidate", "refresh": "planned_batch"
  },
  {
    "id": "shinjuku-garbage-sorting",
    "titleJa": "新宿区のゴミの分別方法一覧",
    "titleEn": "Shinjuku garbage sorting methods",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000129",
    "organization": "Shinjuku City",
    "format": "CSV",
    "updatePlan": "batch",
    "kind": "dataset", "status": "active", "lookupIds": ["shinjuku-garbage-sorting"], "refresh": "checked_snapshot"
  },
  {
    "id": "tokyo-evacuation-shelters",
    "titleJa": "東京都防災マップ 避難所・避難場所一覧データ",
    "titleEn": "Tokyo disaster-prevention map: shelter list",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t000003d0000000093",
    "organization": "Tokyo Metropolitan Government",
    "format": "CSV",
    "updatePlan": "batch",
    "kind": "dataset", "status": "candidate", "refresh": "planned_batch"
  },
  {
    "id": "tokyo-flood-forecast",
    "titleJa": "浸水予想区域図",
    "titleEn": "Flood inundation forecast maps",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t000014d0000000029",
    "organization": "Tokyo Metropolitan Government",
    "format": "PDF / CSV",
    "updatePlan": "batch",
    "kind": "dataset", "status": "candidate", "refresh": "planned_batch"
  },
  {
    "id": "tokyo-medical-ledger",
    "titleJa": "医療機関等台帳",
    "titleEn": "Medical institutions ledger",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t000055d0000000612",
    "organization": "Tokyo Metropolitan Government",
    "format": "CSV",
    "updatePlan": "batch",
    "kind": "dataset", "status": "candidate", "refresh": "planned_batch"
  },
  {
    "id": "tokyo-foreign-population",
    "titleJa": "外国人人口（国籍別）",
    "titleEn": "Foreign population by nationality",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t000003d2000000998",
    "organization": "Tokyo Metropolitan Government",
    "format": "CSV",
    "updatePlan": "batch",
    "kind": "dataset", "status": "candidate", "refresh": "planned_batch"
  },
  { "id":"shinjuku-medical-clinics", "titleJa":"新宿区の医療機関一覧（診療所）", "titleEn":"Shinjuku medical clinics", "url":"https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000121", "organization":"Shinjuku City", "format":"CSV", "updatePlan":"batch", "kind":"dataset", "status":"active", "lookupIds":["shinjuku-medical-clinics"], "refresh":"checked_snapshot" },
  { "id":"tokyo-public-schools-2025", "titleJa":"公立学校統計調査報告書〖東京都公立学校一覧〗", "titleEn":"Tokyo public schools 2025", "url":"https://catalog.data.metro.tokyo.lg.jp/dataset/t000021d2000000191", "organization":"Tokyo Metropolitan Board of Education", "format":"CSV", "updatePlan":"batch", "kind":"dataset", "status":"active", "lookupIds":["shinjuku-public-elementary-schools","shinjuku-public-junior-high-schools","shinjuku-public-high-schools"], "refresh":"checked_snapshot"
  }
];

export const OPEN_DATA_REGISTRY: OpenDataRegistryEntry[] = OPEN_DATA_METADATA.map((entry) => ({
  ...entry,
  ...getLocalizedOpenDataContent(entry.id),
}));
