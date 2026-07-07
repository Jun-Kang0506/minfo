import type { LanguageCode, SafetyInfo } from "../types";

/**
 * Global emergency keyword detection, applied to free-typed questions
 * regardless of which topic matches. If the text suggests immediate
 * danger, we escalate the safety notice on top of the matched answer.
 */
const MEDICAL_EMERGENCY = [
  "ambulance", "unconscious", "bleeding", "can't breathe", "cannot breathe",
  "heart attack", "stroke", "seizure", "overdose", "救急",
];

const POLICE_EMERGENCY = [
  "attacked", "attacking", "stalker", "following me", "violence", "assault",
  "robbed", "threat", "in danger",
];

const FIRE_EMERGENCY = ["fire", "burning", "smoke", "火事"];

const EMERGENCY_TEXT: Record<LanguageCode, { medical: string; police: string }> = {
  en: {
    medical: "This may be a medical emergency. Call 119 now for an ambulance — free, 24h, interpretation available.",
    police: "If you are in danger right now, call 110 (police) immediately — free, 24h, interpretation available.",
  },
  ja: {
    medical: "緊急かもしれません。いますぐ 119に 電話してください（無料・24時間・通訳あり）。",
    police: "いま あぶないときは、すぐ 110（警察）に 電話してください（無料・24時間・通訳あり）。",
  },
  zh: {
    medical: "这可能是医疗紧急情况。请立即拨打 119 叫救护车——免费、24小时、有翻译。",
    police: "如果您现在处于危险中，请立即拨打 110（警察）——免费、24小时、有翻译。",
  },
  ko: {
    medical: "의료 응급상황일 수 있습니다. 지금 119에 전화하세요 — 무료, 24시간, 통역 지원.",
    police: "지금 위험하다면 즉시 110(경찰)에 전화하세요 — 무료, 24시간, 통역 지원.",
  },
  vi: {
    medical: "Đây có thể là cấp cứu y tế. Hãy gọi 119 ngay — miễn phí, 24h, có phiên dịch.",
    police: "Nếu bạn đang gặp nguy hiểm, hãy gọi 110 (cảnh sát) ngay — miễn phí, 24h, có phiên dịch.",
  },
  ne: {
    medical: "यो मेडिकल आपतकाल हुन सक्छ। अहिले नै 119 मा फोन गर्नुहोस् — निःशुल्क, २४ घण्टा, दोभाषे उपलब्ध।",
    police: "अहिले खतरामा हुनुहुन्छ भने तुरुन्तै 110 (प्रहरी) मा फोन गर्नुहोस्।",
  },
};

export function detectEmergency(text: string, lang: LanguageCode): SafetyInfo | null {
  const lower = text.toLowerCase();
  const hasAny = (words: string[]) => words.some((w) => lower.includes(w));

  if (hasAny(MEDICAL_EMERGENCY) || hasAny(FIRE_EMERGENCY)) {
    return { level: "emergency", text: EMERGENCY_TEXT[lang].medical };
  }
  if (hasAny(POLICE_EMERGENCY)) {
    return { level: "emergency", text: EMERGENCY_TEXT[lang].police };
  }
  return null;
}
