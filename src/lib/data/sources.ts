import type { Source } from "../types";
import { getLocalizedSourceNotes, getSourceContent } from "../../i18n/content";

/** Stable trusted-source metadata. Localized display content lives in src/content. */
type SourceMetadata = Omit<Source, "title" | "organization" | "note">;

const SOURCE_METADATA: SourceMetadata[] = [
  {
    "id": "shinjuku-foreign",
    "titleJa": "新宿区 外国人向け生活情報ウェブサイト",
    "url": "https://www.foreign.city.shinjuku.lg.jp/en/",
    "localizedUrls": {
      "ja": "https://www.foreign.city.shinjuku.lg.jp/jp/",
      "en": "https://www.foreign.city.shinjuku.lg.jp/en/",
      "zh": "https://www.foreign.city.shinjuku.lg.jp/cn/",
      "ko": "https://www.foreign.city.shinjuku.lg.jp/kr/"
    },
    "categories": [
      "hospitals",
      "taxes",
      "garbage",
      "disaster",
      "housing",
      "japanese",
      "consultation",
      "schools-children"
    ]
  },
  {
    "id": "tabunka-plaza",
    "titleJa": "しんじゅく多文化共生プラザ",
    "url": "https://www.foreign.city.shinjuku.lg.jp/en/plaza/",
    "localizedUrls": {
      "ja": "https://www.foreign.city.shinjuku.lg.jp/jp/plaza/",
      "en": "https://www.foreign.city.shinjuku.lg.jp/en/plaza/",
      "zh": "https://www.foreign.city.shinjuku.lg.jp/cn/plaza/",
      "ko": "https://www.foreign.city.shinjuku.lg.jp/kr/plaza/"
    },
    "categories": [
      "consultation",
      "japanese",
      "housing",
      "hospitals"
    ]
  },
  {
    "id": "shinjuku-city",
    "titleJa": "新宿区公式ホームページ",
    "url": "https://www.city.shinjuku.lg.jp/",
    "categories": [
      "hospitals",
      "taxes",
      "garbage",
      "disaster",
      "housing",
      "consultation",
      "schools-children"
    ]
  },
  {
    "id": "shinjuku-garbage",
    "titleJa": "新宿区 資源・ごみの分け方・出し方",
    "url": "https://www.foreign.city.shinjuku.lg.jp/en/category/kurashi/shigen/",
    "localizedUrls": {
      "ja": "https://www.foreign.city.shinjuku.lg.jp/jp/category/kurashi/shigen/",
      "en": "https://www.foreign.city.shinjuku.lg.jp/en/category/kurashi/shigen/",
      "zh": "https://www.foreign.city.shinjuku.lg.jp/cn/category/kurashi/shigen/",
      "ko": "https://www.foreign.city.shinjuku.lg.jp/kr/category/kurashi/shigen/"
    },
    "categories": [
      "garbage"
    ]
  },
  {
    "id": "iryou-net",
    "titleJa": "医療情報ネット（ナビイ）",
    "url": "https://www.iryou.teikyouseido.mhlw.go.jp/znk-web/juminkanja/S2300/initialize",
    "categories": [
      "hospitals",
      "emergency"
    ]
  },
  {
    "id": "tokyo-metro",
    "titleJa": "東京都公式ホームページ",
    "url": "https://www.metro.tokyo.lg.jp/",
    "localizedUrls": {
      "en": "https://www.metro.tokyo.lg.jp/english/"
    },
    "categories": [
      "consultation",
      "housing",
      "japanese",
      "taxes"
    ]
  },
  {
    "id": "tokyo-bousai",
    "titleJa": "東京都防災ホームページ",
    "url": "https://www.bousai.metro.tokyo.lg.jp/",
    "categories": [
      "disaster",
      "emergency"
    ]
  },
  {
    "id": "tokyo-fire",
    "titleJa": "東京消防庁",
    "url": "https://www.tfd.metro.tokyo.lg.jp/",
    "categories": [
      "emergency",
      "hospitals"
    ]
  },
  {
    "id": "isa",
    "titleJa": "出入国在留管理庁",
    "url": "https://www.moj.go.jp/isa/",
    "categories": [
      "consultation"
    ]
  },
  {
    "id": "fresc",
    "titleJa": "外国人在留支援センター（FRESC）",
    "url": "https://www.moj.go.jp/isa/support/fresc/fresc01.html",
    "categories": [
      "consultation",
      "housing"
    ]
  },
  {
    "id": "nta",
    "titleJa": "国税庁",
    "url": "https://www.nta.go.jp/",
    "localizedUrls": {
      "en": "https://www.nta.go.jp/english/"
    },
    "categories": [
      "taxes"
    ]
  },
  {
    "id": "nenkin",
    "titleJa": "日本年金機構",
    "url": "https://www.nenkin.go.jp/",
    "localizedUrls": {
      "en": "https://www.nenkin.go.jp/international/"
    },
    "categories": [
      "taxes"
    ]
  },
  {
    "id": "tokyo-opendata",
    "titleJa": "東京都オープンデータカタログ",
    "url": "https://portal.data.metro.tokyo.lg.jp/",
    "categories": [
      "consultation",
      "disaster"
    ]
  },
  {
    "id": "shinjuku-public-housing-recruitment",
    "titleJa": "新宿区 区営住宅等の入居者募集",
    "url": "https://www.city.shinjuku.lg.jp/seikatsu/jutaku01_002117.html",
    "categories": [
      "housing"
    ]
  },
  {
    "id": "shinjuku-flood-guidance",
    "titleJa": "新宿区 水害について",
    "url": "https://www.foreign.city.shinjuku.lg.jp/en/kurashi/suigai/",
    "localizedUrls": {
      "ja": "https://www.foreign.city.shinjuku.lg.jp/jp/kurashi/suigai/",
      "zh": "https://www.foreign.city.shinjuku.lg.jp/cn/kurashi/suigai/",
      "ko": "https://www.foreign.city.shinjuku.lg.jp/kr/kurashi/suigai/"
    },
    "categories": [
      "disaster"
    ]
  },
  {
    "id": "shinjuku-weather-information",
    "titleJa": "新宿区 気象情報",
    "url": "https://www.foreign.city.shinjuku.lg.jp/en/kurashi/kishocho/",
    "localizedUrls": {
      "ja": "https://www.foreign.city.shinjuku.lg.jp/jp/kurashi/kishocho/",
      "zh": "https://www.foreign.city.shinjuku.lg.jp/cn/kurashi/kishocho/",
      "ko": "https://www.foreign.city.shinjuku.lg.jp/kr/kurashi/kishocho/"
    },
    "categories": [
      "disaster"
    ]
  },
  {
    "id": "regasu-japanese-classes",
    "titleJa": "新宿未来創造財団 日本語講座",
    "url": "https://www.regasu-shinjuku.or.jp/?p=630",
    "categories": [
      "japanese"
    ]
  },
  {
    "id": "tokyo-muslim-travelers-guide",
    "titleJa": "東京ムスリム旅行者ガイド",
    "url": "https://www.gotokyo.org/book/en/list/1664/",
    "categories": [
      "food-prayer"
    ]
  }
];

export const SOURCES: Source[] = SOURCE_METADATA.map((source) => {
  const english = getSourceContent(source.id, "en");

  if (!english) {
    throw new Error(`Missing English source content for ${source.id}`);
  }

  return {
    ...source,
    title: english.title,
    organization: english.organization,
    note: getLocalizedSourceNotes(source.id),
  };
});

export const SOURCE_MAP: Record<string, Source> = Object.fromEntries(
  SOURCES.map((s) => [s.id, s])
);

export function getSources(ids: string[]): Source[] {
  return ids.map((id) => SOURCE_MAP[id]).filter(Boolean);
}
