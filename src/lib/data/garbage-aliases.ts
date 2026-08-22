import type { GarbageRecord, LanguageCode } from "../types";

export type GarbageAliasLocale = Exclude<LanguageCode, "ja">;
export type GarbageAliasEntry = {
  officialId: "131041S00196" | "131041S00075" | "131041S00306" | "131041S00327" | "131041S00328" | "131041S00312";
  officialItem: string;
  translationStatus: "minfo_reviewed_search_helper";
  locales: Record<GarbageAliasLocale, { label: string; aliases: readonly string[] }>;
};

export const GARBAGE_ALIAS_PROVENANCE = {
  officialDataset: "https://www.city.shinjuku.lg.jp/content/000420404.csv",
  officialMultilingualGuidance: "https://www.foreign.city.shinjuku.lg.jp/en/kurashi/shigenyagomi/",
  officialEnglishGuide: "https://www.foreign.city.shinjuku.lg.jp/en/wp-content/uploads/sites/3/2024/03/Shinjuk2407_E.pdf",
  officialPublicationIndex: "https://www.foreign.city.shinjuku.lg.jp/jp/pdf/",
  officialJapaneseDictionary: "https://www.city.shinjuku.lg.jp/seikatsu/seiso01_001025.html",
  translationStatus: "minfo_reviewed_search_helper", reviewedAt: "2026-08-22", coverageRecordCount: 6, officialRecordCount: 482,
} as const;

const e = (officialId: GarbageAliasEntry["officialId"], officialItem: string, locales: GarbageAliasEntry["locales"]): GarbageAliasEntry => ({ officialId, officialItem, translationStatus: "minfo_reviewed_search_helper", locales });
export const GARBAGE_ALIASES: readonly GarbageAliasEntry[] = [
  e("131041S00196", "自転車", { en:{label:"Bicycle",aliases:["bicycle","bike"]},zh:{label:"自行车",aliases:["自行车","单车"]},ko:{label:"자전거",aliases:["자전거"]},vi:{label:"Xe đạp",aliases:["xe đạp"]},ne:{label:"साइकल",aliases:["साइकल"]},tl:{label:"Bisikleta",aliases:["bisikleta"]},bn:{label:"সাইকেল",aliases:["সাইকেল"]} }),
  e("131041S00075", "傘", { en:{label:"Umbrella",aliases:["umbrella"]},zh:{label:"雨伞",aliases:["雨伞","伞"]},ko:{label:"우산",aliases:["우산"]},vi:{label:"Ô",aliases:["ô","dù"]},ne:{label:"छाता",aliases:["छाता"]},tl:{label:"Payong",aliases:["payong"]},bn:{label:"ছাতা",aliases:["ছাতা"]} }),
  e("131041S00306", "ドライヤー", { en:{label:"Hair dryer",aliases:["hair dryer","blow dryer"]},zh:{label:"吹风机",aliases:["吹风机","电吹风"]},ko:{label:"헤어드라이어",aliases:["헤어드라이어","드라이어"]},vi:{label:"Máy sấy tóc",aliases:["máy sấy tóc"]},ne:{label:"हेयर ड्रायर",aliases:["हेयर ड्रायर","कपाल सुकाउने ड्रायर"]},tl:{label:"Hair dryer",aliases:["hair dryer","pantuyo ng buhok"]},bn:{label:"হেয়ার ড্রায়ার",aliases:["হেয়ার ড্রায়ার","চুল শুকানোর যন্ত্র"]} }),
  e("131041S00327", "はさみ（金属製）", { en:{label:"Metal scissors",aliases:["metal scissors","scissors"]},zh:{label:"金属剪刀",aliases:["金属剪刀","剪刀"]},ko:{label:"금속 가위",aliases:["금속 가위","가위"]},vi:{label:"Kéo kim loại",aliases:["kéo kim loại","kéo"]},ne:{label:"धातुको कैंची",aliases:["धातुको कैंची","कैंची"]},tl:{label:"Gunting na metal",aliases:["gunting na metal","gunting"]},bn:{label:"ধাতব কাঁচি",aliases:["ধাতব কাঁচি","কাঁচি"]} }),
  e("131041S00328", "はさみ（プラスチック製）", { en:{label:"Plastic scissors",aliases:["plastic scissors","scissors"]},zh:{label:"塑料剪刀",aliases:["塑料剪刀","剪刀"]},ko:{label:"플라스틱 가위",aliases:["플라스틱 가위","가위"]},vi:{label:"Kéo nhựa",aliases:["kéo nhựa","kéo"]},ne:{label:"प्लास्टिकको कैंची",aliases:["प्लास्टिकको कैंची","कैंची"]},tl:{label:"Gunting na plastik",aliases:["gunting na plastik","gunting"]},bn:{label:"প্লাস্টিকের কাঁচি",aliases:["প্লাস্টিকের কাঁচি","কাঁচি"]} }),
  e("131041S00312", "生ごみ", { en:{label:"Food scraps",aliases:["food scraps","food waste"]},zh:{label:"厨余垃圾",aliases:["厨余垃圾","食物残渣"]},ko:{label:"음식물 쓰레기",aliases:["음식물 쓰레기"]},vi:{label:"Rác thực phẩm",aliases:["rác thực phẩm","thức ăn thừa"]},ne:{label:"खानाको फोहोर",aliases:["खानाको फोहोर"]},tl:{label:"Basurang pagkain",aliases:["basurang pagkain","tira-tirang pagkain"]},bn:{label:"খাবারের বর্জ্য",aliases:["খাবারের বর্জ্য","উচ্ছিষ্ট খাবার"]} }),
];

export const normalizeGarbageSearch = (value: string, locale: string) => value.normalize("NFKC").toLocaleLowerCase(locale).replace(/\p{White_Space}+/gu, "");
const scissorsIds = ["131041S00327", "131041S00328"].sort().join(",");
const approvedIds = ["131041S00196", "131041S00075", "131041S00306", "131041S00327", "131041S00328", "131041S00312"].sort().join(",");
const approvedCollisions = new Set(["en:scissors", "zh:剪刀", "ko:가위", "vi:kéo", "ne:कैंची", "tl:gunting", "bn:কাঁচি"]);
export function validateGarbageAliases(records: readonly GarbageRecord[]) {
  if (GARBAGE_ALIASES.length !== 6 || records.length !== 482 || GARBAGE_ALIASES.map((entry) => entry.officialId).sort().join(",") !== approvedIds) throw new Error("Invalid garbage alias coverage");
  const ids = new Map(records.map((record) => [record.officialId, record]));
  const collisions = new Map<string, string[]>();
  for (const entry of GARBAGE_ALIASES) {
    const record = ids.get(entry.officialId);
    if (!record || record.officialItem !== entry.officialItem || entry.translationStatus !== "minfo_reviewed_search_helper") throw new Error("Garbage alias source mismatch");
    for (const locale of ["en","zh","ko","vi","ne","tl","bn"] as const) {
      const local = entry.locales[locale]; const own = new Set<string>();
      if (!local?.label.trim() || !local.aliases.some((alias) => normalizeGarbageSearch(alias, locale) === normalizeGarbageSearch(local.label, locale))) throw new Error("Invalid garbage alias label");
      for (const alias of local.aliases) { const key = normalizeGarbageSearch(alias, locale); if (!alias.trim() || [...alias].length > 80 || own.has(key)) throw new Error("Invalid garbage alias"); own.add(key); const collisionKey=`${locale}:${key}`; collisions.set(collisionKey,[...(collisions.get(collisionKey)??[]),entry.officialId]); }
    }
  }
  const crossRecordCollisions = [...collisions].filter(([, collision]) => collision.length > 1);
  if (crossRecordCollisions.length !== approvedCollisions.size) throw new Error("Unexpected garbage alias collisions");
  for (const [key, collision] of crossRecordCollisions) if (!approvedCollisions.has(key) || collision.slice().sort().join(",") !== scissorsIds) throw new Error(`Unsafe garbage alias collision: ${key}`);
  for (const key of approvedCollisions) if (!collisions.has(key)) throw new Error(`Missing approved garbage alias collision: ${key}`);
}

export function garbageAliasFor(officialId: string, locale: LanguageCode) { return locale === "ja" ? undefined : GARBAGE_ALIASES.find((entry) => entry.officialId === officialId)?.locales[locale]; }
