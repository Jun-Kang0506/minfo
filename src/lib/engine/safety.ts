import type { LanguageCode, SafetyInfo } from "../types";

/**
 * Global emergency keyword detection, applied to free-typed questions
 * regardless of which topic matches. If the text suggests immediate
 * danger, we escalate the safety notice on top of the matched answer.
 *
 * Fully deterministic and local — 119/110 guidance never depends on a
 * network call or a model. Keywords cover all six supported languages
 * (plus a few unaccented Vietnamese spellings people actually type).
 */
const MEDICAL_EMERGENCY = [
  // en
  "ambulance", "unconscious", "bleeding", "can't breathe", "cannot breathe",
  "heart attack", "stroke", "seizure", "overdose",
  // ja
  "救急", "意識がない", "意識が ない", "出血", "血が出ている", "血が 出ている", "倒れた",
  // zh
  "救护车", "急救", "失去意识", "流血", "昏倒",
  // ko
  "구급차", "응급", "의식이 없", "피가 나", "출혈", "쓰러졌",
  // vi
  "cấp cứu", "cap cuu", "xe cứu thương", "xe cuu thuong", "bất tỉnh", "bat tinh",
  "chảy máu", "chay mau",
  // ne
  "एम्बुलेन्स", "बेहोस", "रगत",
];

const POLICE_EMERGENCY = [
  // en
  "attacked", "attacking", "stalker", "following me", "violence", "assault",
  "robbed", "threat", "in danger",
  // ja
  "襲われ", "つけられて", "暴力", "強盗", "危ない",
  // zh
  "被袭击", "被跟踪", "暴力", "抢劫", "不安全", "危险",
  // ko
  "폭행", "스토커", "따라와", "강도", "위험",
  // vi
  "bị tấn công", "bị theo dõi", "bạo lực", "cướp", "không an toàn", "nguy hiểm", "nguy hiem",
  // ne
  "आक्रमण", "पछ्याइरहेको", "हिंसा", "लुटियो", "असुरक्षित", "खतरा",
];

const FIRE_EMERGENCY = [
  // en
  "fire", "burning", "smoke",
  // ja
  "火事", "火災", "煙が",
  // zh
  "火灾", "着火", "冒烟",
  // ko
  "화재", "불이 났", "불났",
  // vi
  "cháy", "chay nha", "hỏa hoạn",
  // ne
  "आगो", "आगलागी",
];

const EMERGENCY_TEXT: Record<LanguageCode, { medical: string; police: string; fire: string }> = {
  en: {
    medical: "This may be a medical emergency. Call 119 now for an ambulance — free, 24h, interpretation available.",
    police: "If you are in danger right now, call 110 (police) immediately — free, 24h, interpretation available.",
    fire: "If there is a fire, call 119 now — free, 24h, interpretation available. Get to a safe place first.",
  },
  ja: {
    medical: "緊急かもしれません。いますぐ 119に 電話してください（無料・24時間・通訳あり）。",
    police: "いま あぶないときは、すぐ 110（警察）に 電話してください（無料・24時間・通訳あり）。",
    fire: "火事のときは、すぐ 119に 電話してください（無料・24時間・通訳あり）。まず 安全な ところに にげてください。",
  },
  zh: {
    medical: "这可能是医疗紧急情况。请立即拨打 119 叫救护车——免费、24小时、有翻译。",
    police: "如果您现在处于危险中，请立即拨打 110（警察）——免费、24小时、有翻译。",
    fire: "如果发生火灾，请立即拨打 119——免费、24小时、有翻译。请先转移到安全的地方。",
  },
  ko: {
    medical: "의료 응급상황일 수 있습니다. 지금 119에 전화하세요 — 무료, 24시간, 통역 지원.",
    police: "지금 위험하다면 즉시 110(경찰)에 전화하세요 — 무료, 24시간, 통역 지원.",
    fire: "불이 났다면 즉시 119에 전화하세요 — 무료, 24시간, 통역 지원. 먼저 안전한 곳으로 대피하세요.",
  },
  vi: {
    medical: "Đây có thể là cấp cứu y tế. Hãy gọi 119 ngay — miễn phí, 24h, có phiên dịch.",
    police: "Nếu bạn đang gặp nguy hiểm, hãy gọi 110 (cảnh sát) ngay — miễn phí, 24h, có phiên dịch.",
    fire: "Nếu có cháy, hãy gọi 119 ngay — miễn phí, 24h, có phiên dịch. Hãy đến nơi an toàn trước.",
  },
  ne: {
    medical: "यो मेडिकल आपतकाल हुन सक्छ। अहिले नै 119 मा फोन गर्नुहोस् — निःशुल्क, २४ घण्टा, दोभाषे उपलब्ध।",
    police: "अहिले खतरामा हुनुहुन्छ भने तुरुन्तै 110 (प्रहरी) मा फोन गर्नुहोस्।",
    fire: "आगलागी भए तुरुन्तै 119 मा फोन गर्नुहोस् — निःशुल्क, २४ घण्टा, दोभाषे उपलब्ध। पहिले सुरक्षित ठाउँमा जानुहोस्।",
  },
};

export function detectEmergency(text: string, lang: LanguageCode): SafetyInfo | null {
  const lower = text.toLowerCase();
  const hasAny = (words: string[]) => words.some((w) => lower.includes(w));

  if (hasAny(FIRE_EMERGENCY)) {
    return { level: "emergency", text: EMERGENCY_TEXT[lang].fire };
  }
  if (hasAny(MEDICAL_EMERGENCY)) {
    return { level: "emergency", text: EMERGENCY_TEXT[lang].medical };
  }
  if (hasAny(POLICE_EMERGENCY)) {
    return { level: "emergency", text: EMERGENCY_TEXT[lang].police };
  }
  return null;
}
