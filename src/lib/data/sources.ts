import type { Source } from "../types";

/**
 * Local trusted-source dataset (v1).
 * These are real official / public organizations. URLs point to their
 * public portals; deep links can be refined when connecting real data.
 */
export const SOURCES: Source[] = [
  {
    id: "shinjuku-city",
    title: "Shinjuku City Official Website — Foreign Residents",
    titleJa: "新宿区公式ホームページ（外国人向け情報）",
    organization: "Shinjuku City",
    url: "https://www.city.shinjuku.lg.jp/",
    categories: ["hospitals", "taxes", "garbage", "disaster", "housing", "consultation"],
    note: "The official ward office for Shinjuku / Okubo residents — registration, insurance, tax, and daily-life procedures happen here.",
  },
  {
    id: "shinjuku-garbage",
    title: "Shinjuku City — How to Separate and Dispose of Garbage",
    titleJa: "新宿区 ごみの分け方・出し方",
    organization: "Shinjuku City",
    url: "https://www.city.shinjuku.lg.jp/seikatsu/",
    categories: ["garbage"],
    note: "The official separation rules and collection calendar for each Shinjuku neighborhood, with multilingual guides.",
  },
  {
    id: "tabunka-plaza",
    title: "Shinjuku Multicultural Plaza",
    titleJa: "しんじゅく多文化共生プラザ",
    organization: "Shinjuku City / Regasu Shinjuku",
    url: "https://www.regasu-shinjuku.or.jp/tabunka-plaza/",
    categories: ["consultation", "japanese", "housing", "hospitals"],
    note: "Free multilingual consultation desk and Japanese classes, minutes from Okubo — the first stop for daily-life questions.",
  },
  {
    id: "tokyo-metro",
    title: "Tokyo Metropolitan Government — Life in Tokyo",
    titleJa: "東京都 生活情報ポータル",
    organization: "Tokyo Metropolitan Government",
    url: "https://www.metro.tokyo.lg.jp/",
    categories: ["consultation", "housing", "japanese", "taxes"],
    note: "Tokyo-wide living information and multilingual support services from the metropolitan government.",
  },
  {
    id: "himawari",
    title: "Himawari — Tokyo Medical Institution Search",
    titleJa: "東京都医療機関案内サービス ひまわり",
    organization: "Tokyo Metropolitan Government",
    url: "https://www.himawari.metro.tokyo.jp/",
    categories: ["hospitals", "emergency"],
    note: "Official search for hospitals and clinics by language spoken, area, and specialty — plus a multilingual phone line (03-5285-8181).",
  },
  {
    id: "tokyo-bousai",
    title: "Tokyo Disaster Prevention (Tokyo Bousai)",
    titleJa: "東京都防災ホームページ",
    organization: "Tokyo Metropolitan Government",
    url: "https://www.bousai.metro.tokyo.lg.jp/",
    categories: ["disaster", "emergency"],
    note: "Official disaster preparedness guides, evacuation info, and real-time alerts, available in multiple languages.",
  },
  {
    id: "tokyo-fire",
    title: "Tokyo Fire Department — Emergency Guide (119 / #7119)",
    titleJa: "東京消防庁 救急案内",
    organization: "Tokyo Fire Department",
    url: "https://www.tfd.metro.tokyo.lg.jp/",
    categories: ["emergency", "hospitals"],
    note: "How to call 119 for an ambulance, and the #7119 line for judging whether a situation is an emergency.",
  },
  {
    id: "isa",
    title: "Immigration Services Agency of Japan",
    titleJa: "出入国在留管理庁",
    organization: "Ministry of Justice",
    url: "https://www.moj.go.jp/isa/",
    categories: ["consultation"],
    note: "The official authority for residence cards, visas, and status of residence — the place to confirm any immigration procedure.",
  },
  {
    id: "fresc",
    title: "FRESC — Foreign Residents Support Center",
    titleJa: "外国人在留支援センター（FRESC）",
    organization: "Ministry of Justice (Yotsuya, Tokyo)",
    url: "https://www.moj.go.jp/isa/support/fresc/fresc01.html",
    categories: ["consultation", "housing"],
    note: "National support desks (immigration, labor, legal, human rights) gathered in one building near Shinjuku, with interpretation.",
  },
  {
    id: "nta",
    title: "National Tax Agency — Tax Information for Foreigners",
    titleJa: "国税庁 外国人向け税情報",
    organization: "National Tax Agency",
    url: "https://www.nta.go.jp/",
    categories: ["taxes"],
    note: "Official explanations of income tax, filing, and multilingual tax guides.",
  },
  {
    id: "nenkin",
    title: "Japan Pension Service",
    titleJa: "日本年金機構",
    organization: "Japan Pension Service",
    url: "https://www.nenkin.go.jp/",
    categories: ["taxes"],
    note: "The official body for national pension enrollment, payments, and exemption procedures.",
  },
  {
    id: "tokyo-opendata",
    title: "Tokyo Open Data Catalog",
    titleJa: "東京都オープンデータカタログ",
    organization: "Tokyo Metropolitan Government",
    url: "https://portal.data.metro.tokyo.lg.jp/",
    categories: ["consultation", "disaster"],
    note: "Public datasets MINFO plans to connect for ward-by-ward expansion across Tokyo.",
  },
];

export const SOURCE_MAP: Record<string, Source> = Object.fromEntries(
  SOURCES.map((s) => [s.id, s])
);

export function getSources(ids: string[]): Source[] {
  return ids.map((id) => SOURCE_MAP[id]).filter(Boolean);
}
