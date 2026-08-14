import type { OpenDataCandidate } from "../types";
import { getLocalizedOpenDataContent } from "../../i18n/content";

/** Stable catalog metadata. Localized title glosses and notes live in src/content. */
type OpenDataMetadata = Omit<OpenDataCandidate, "titleGloss" | "note">;

const OPEN_DATA_METADATA: OpenDataMetadata[] = [
  {
    "id": "shinjuku-childcare-facilities",
    "titleJa": "新宿区の子育て施設一覧",
    "titleEn": "Shinjuku childcare facilities",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000117",
    "organization": "Shinjuku City",
    "format": "CSV",
    "updatePlan": "batch",
    "kind": "dataset"
  },
  {
    "id": "shinjuku-evacuation-sites",
    "titleJa": "新宿区の指定緊急避難場所一覧",
    "titleEn": "Shinjuku designated emergency evacuation sites",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000115",
    "organization": "Shinjuku City",
    "format": "CSV",
    "updatePlan": "batch",
    "kind": "dataset"
  },
  {
    "id": "shinjuku-public-facilities",
    "titleJa": "新宿区の公共施設情報",
    "titleEn": "Shinjuku public facilities",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000113",
    "organization": "Shinjuku City",
    "format": "CSV",
    "updatePlan": "batch",
    "kind": "dataset"
  },
  {
    "id": "shinjuku-garbage-sorting",
    "titleJa": "新宿区のゴミの分別方法一覧",
    "titleEn": "Shinjuku garbage sorting methods",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000129",
    "organization": "Shinjuku City",
    "format": "CSV",
    "updatePlan": "batch",
    "kind": "dataset"
  },
  {
    "id": "tokyo-evacuation-shelters",
    "titleJa": "東京都防災マップ 避難所・避難場所一覧データ",
    "titleEn": "Tokyo disaster-prevention map: shelter list",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t000003d0000000093",
    "organization": "Tokyo Metropolitan Government",
    "format": "CSV",
    "updatePlan": "batch",
    "kind": "dataset"
  },
  {
    "id": "tokyo-flood-forecast",
    "titleJa": "浸水予想区域図",
    "titleEn": "Flood inundation forecast maps",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t000014d0000000029",
    "organization": "Tokyo Metropolitan Government",
    "format": "PDF / CSV",
    "updatePlan": "batch",
    "kind": "dataset"
  },
  {
    "id": "tokyo-medical-ledger",
    "titleJa": "医療機関等台帳",
    "titleEn": "Medical institutions ledger",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t000055d0000000612",
    "organization": "Tokyo Metropolitan Government",
    "format": "CSV",
    "updatePlan": "batch",
    "kind": "dataset"
  },
  {
    "id": "tokyo-foreign-population",
    "titleJa": "外国人人口（国籍別）",
    "titleEn": "Foreign population by nationality",
    "url": "https://catalog.data.metro.tokyo.lg.jp/dataset/t000003d2000000998",
    "organization": "Tokyo Metropolitan Government",
    "format": "CSV",
    "updatePlan": "batch",
    "kind": "dataset"
  },
  {
    "id": "tokyo-medical-welfare-group",
    "titleJa": "医療・福祉（カタログ分類）",
    "titleEn": "Medical & welfare: catalog category",
    "url": "https://catalog.data.metro.tokyo.lg.jp/group/c005",
    "organization": "Tokyo Metropolitan Government",
    "updatePlan": "batch",
    "kind": "searchTarget"
  }
];

export const OPEN_DATA_CANDIDATES: OpenDataCandidate[] = OPEN_DATA_METADATA.map((candidate) => ({
  ...candidate,
  ...getLocalizedOpenDataContent(candidate.id),
}));
