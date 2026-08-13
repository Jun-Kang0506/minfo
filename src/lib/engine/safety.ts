import type { LanguageCode, SafetyInfo } from "../types";
import { getMessages } from "@/i18n/messages";

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

export function detectEmergency(text: string, lang: LanguageCode): SafetyInfo | null {
  const lower = text.toLowerCase();
  const hasAny = (words: string[]) => words.some((w) => lower.includes(w));

  if (hasAny(FIRE_EMERGENCY)) {
    return { level: "emergency", text: getMessages(lang).emergency.notices.fire };
  }
  if (hasAny(MEDICAL_EMERGENCY)) {
    return { level: "emergency", text: getMessages(lang).emergency.notices.medical };
  }
  if (hasAny(POLICE_EMERGENCY)) {
    return { level: "emergency", text: getMessages(lang).emergency.notices.police };
  }
  return null;
}
