import type { Answer, LanguageCode, TopicId } from "../types";
import { getMessages } from "@/i18n/messages";

export type CounterPhraseId =
  | "moving-address" | "my-number-explanation" | "my-number-card-application" | "my-number-card-change" | "my-number-check"
  | "school-enrollment" | "childcare-application" | "tax-pension-notice" | "official-letter" | "health-insurance"
  | "residence-card" | "japanese-class" | "clinic-reception";

export const COUNTER_PHRASES: Readonly<Record<CounterPhraseId, string>> = {
  "moving-address": "引っ越し後の住所の手続きについて相談したいです。",
  "my-number-explanation": "マイナンバーとマイナンバーカードの違いについて教えてください。",
  "my-number-card-application": "マイナンバーカードの申請について相談したいです。",
  "my-number-card-change": "マイナンバーカードの変更手続きについて相談したいです。",
  "my-number-check": "自分のマイナンバーを確認する方法を教えてください。",
  "school-enrollment": "子どもの学校の入学手続きについて相談したいです。",
  "childcare-application": "保育施設の申し込みについて相談したいです。",
  "tax-pension-notice": "この税金や年金の通知について教えてください。",
  "official-letter": "この役所からの手紙について教えてください。",
  "health-insurance": "健康保険の手続きについて相談したいです。",
  "residence-card": "在留カードの手続きについて相談したいです。",
  "japanese-class": "日本語教室について相談したいです。",
  "clinic-reception": "診察を受けたいです。受付をお願いします。",
} as const;

export const COUNTER_PHRASE_BY_TOPIC: Readonly<Partial<Record<TopicId, CounterPhraseId>>> = {
  "moving-registration": "moving-address", "my-number-overview": "my-number-explanation", "my-number-apply-card": "my-number-card-application",
  "my-number-update": "my-number-card-change", "my-number-find": "my-number-check", "school-enrollment": "school-enrollment",
  "childcare-application": "childcare-application", tax: "tax-pension-notice", "city-office-letter": "official-letter",
  insurance: "health-insurance", "residence-card": "residence-card", "japanese-learning": "japanese-class", hospital: "clinic-reception",
};

export function getCounterPhraseId(answer: Answer): CounterPhraseId | undefined {
  return answer.safety?.level === "emergency" ? undefined : COUNTER_PHRASE_BY_TOPIC[answer.topicId];
}

export function getCounterPhraseMeaning(id: CounterPhraseId, lang: LanguageCode) {
  return (getMessages(lang).result.counter.phrases as Record<CounterPhraseId, { meaning: string }>)[id].meaning;
}
