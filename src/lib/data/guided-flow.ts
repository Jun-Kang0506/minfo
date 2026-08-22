import type { CategoryId, GuidedOption, GuidedQuestion, LanguageCode } from "../types";
import { MESSAGES } from "@/i18n/messages";

const locales: LanguageCode[] = ["en", "ja", "zh", "ko", "vi", "ne", "tl", "bn"];
const messageFor = (locale: LanguageCode) => MESSAGES[locale] as {
  guided: { questions: Record<string, { title: string; options: Array<{ label: string; request: string }> }>; ui: Record<string, string> };
};
export const DEFAULT_CATEGORY_ORDER: CategoryId[] = ["hospitals", "schools-children", "taxes", "garbage", "disaster", "japanese", "housing", "consultation", "food-prayer", "emergency"];
export const CATEGORY_START_QUESTION: Record<CategoryId, string> = { hospitals: "health", "schools-children": "schools", taxes: "taxes", garbage: "garbage", disaster: "disaster", japanese: "japanese", housing: "housing", consultation: "consultation", "food-prayer": "food-prayer", emergency: "emergency" };
export const GUIDED_FLOWS: Record<CategoryId, { flowId: string; startQuestionId: string }> = Object.fromEntries(Object.entries(CATEGORY_START_QUESTION).map(([categoryId, startQuestionId]) => [categoryId, { flowId: `category:${categoryId}`, startQuestionId }])) as Record<CategoryId, { flowId: string; startQuestionId: string }>;

const QUESTION_METADATA = {
  "health": {
    "id": "health",
    "options": [
      {
        "id": "find_hospital",
        "intentId": "find_hospital",
        "outcome": {
          "type": "structuredLookup",
          "datasetCandidateId": "shinjuku-medical-clinics"
        }
      },
      {
        "id": "health_insurance",
        "intentId": "health_insurance",
        "outcome": {
          "type": "topic",
          "topicId": "insurance"
        }
      },
      {
        "id": "urgent_now",
        "intentId": "urgent_now",
        "outcome": {
          "type": "nextQuestion",
          "questionId": "health_urgent_kind"
        }
      }
    ]
  },
  "health_urgent_kind": {
    "id": "health_urgent_kind",
    "options": [
      {
        "id": "ambulance_or_fire",
        "intentId": "ambulance_or_fire",
        "outcome": {
          "type": "emergency",
          "topicId": "ambulance"
        }
      },
      {
        "id": "police_danger",
        "intentId": "police_danger",
        "outcome": {
          "type": "emergency",
          "topicId": "police"
        }
      }
    ]
  },
  "schools": {
    "id": "schools",
    "options": [
      {
        "id": "find_school",
        "intentId": "find_school",
        "outcome": { "type": "nextQuestion", "questionId": "school_kind" }
      },
      {
        "id": "school_enrollment",
        "intentId": "school_enrollment",
        "outcome": {
          "type": "topic",
          "topicId": "school-enrollment"
        }
      },
      {
        "id": "childcare_application",
        "intentId": "childcare_application",
        "outcome": {
          "type": "topic",
          "topicId": "childcare-application"
        }
      },
      {
        "id": "childcare_facility_finder",
        "intentId": "childcare_facility_finder",
        "outcome": {
          "type": "structuredLookup",
          "datasetCandidateId": "shinjuku-childcare-facilities"
        }
      }
    ]
  },
  "school_kind": {
    "id": "school_kind",
    "options": [
      { "id": "elementary_school", "intentId": "find_elementary_school", "outcome": { "type": "structuredLookup", "datasetCandidateId": "shinjuku-public-elementary-schools" } },
      { "id": "junior_high_school", "intentId": "find_junior_high_school", "outcome": { "type": "structuredLookup", "datasetCandidateId": "shinjuku-public-junior-high-schools" } },
      { "id": "high_school", "intentId": "find_high_school", "outcome": { "type": "structuredLookup", "datasetCandidateId": "shinjuku-public-high-schools" } }
    ]
  },
  "taxes": {
    "id": "taxes",
    "options": [
      {
        "id": "tax_pension_notice",
        "intentId": "tax_pension_notice",
        "outcome": {
          "type": "topic",
          "topicId": "tax"
        }
      },
      {
        "id": "tax_calculation",
        "intentId": "tax_calculation",
        "outcome": {
          "type": "topic",
          "topicId": "tax-estimate"
        }
      }
    ]
  },
  "garbage": {
    "id": "garbage",
    "options": [
      {
        "id": "garbage_item_lookup",
        "intentId": "garbage_item_lookup",
        "outcome": { "type": "structuredLookup", "datasetCandidateId": "shinjuku-garbage-sorting" }
      },
      {
        "id": "garbage_rules",
        "intentId": "garbage_rules",
        "outcome": {
          "type": "topic",
          "topicId": "garbage"
        }
      }
    ]
  },
  "disaster": {
    "id": "disaster",
    "options": [
      {
        "id": "earthquake_guidance",
        "intentId": "earthquake_guidance",
        "outcome": {
          "type": "topic",
          "topicId": "earthquake"
        }
      },
      {
        "id": "typhoon_help",
        "intentId": "typhoon_help",
        "outcome": {
          "type": "topic",
          "topicId": "typhoon-heavy-rain"
        }
      },
      {
        "id": "evacuation_location",
        "intentId": "evacuation_location",
        "outcome": {
          "type": "structuredLookup",
          "datasetCandidateId": "shinjuku-evacuation-sites"
        }
      }
    ]
  },
  "japanese": {
    "id": "japanese",
    "options": [
      {
        "id": "find_class",
        "intentId": "find_class",
        "outcome": {
          "type": "nextQuestion",
          "questionId": "japanese_class_need"
        }
      },
      {
        "id": "easy_japanese",
        "intentId": "easy_japanese",
        "outcome": {
          "type": "topic",
          "topicId": "easy-japanese"
        }
      }
    ]
  },
  "japanese_class_need": {
    "id": "japanese_class_need",
    "options": [
      {
        "id": "beginner_class",
        "intentId": "japanese_class_beginner",
        "outcome": {
          "type": "topic",
          "topicId": "japanese-class-beginner"
        }
      },
      {
        "id": "evening_class",
        "intentId": "japanese_class_evening",
        "outcome": {
          "type": "topic",
          "topicId": "japanese-class-evening"
        }
      },
      {
        "id": "class_near_okubo",
        "intentId": "japanese_class_near_okubo",
        "outcome": {
          "type": "topic",
          "topicId": "japanese-class-okubo"
        }
      }
    ]
  },
  "housing": {
    "id": "housing",
    "options": [
      {
        "id": "moving_registration",
        "intentId": "moving_registration",
        "outcome": {
          "type": "topic",
          "topicId": "moving-registration"
        }
      },
      {
        "id": "housing_rent_help",
        "intentId": "housing_rent_help",
        "outcome": {
          "type": "topic",
          "topicId": "housing"
        }
      },
      {
        "id": "public_housing",
        "intentId": "public_housing",
        "outcome": {
          "type": "topic",
          "topicId": "public-housing"
        }
      }
    ]
  },
  "consultation": {
    "id": "consultation",
    "options": [
      {
        "id": "my_number",
        "intentId": "my_number",
        "outcome": { "type": "nextQuestion", "questionId": "my_number" }
      },
      {
        "id": "daily_life_help",
        "intentId": "daily_life_help",
        "outcome": {
          "type": "topic",
          "topicId": "consultation"
        }
      },
      {
        "id": "official_letter",
        "intentId": "official_letter",
        "outcome": {
          "type": "topic",
          "topicId": "city-office-letter"
        }
      },
      {
        "id": "residence_card",
        "intentId": "residence_card",
        "outcome": {
          "type": "topic",
          "topicId": "residence-card"
        }
      },
      {
        "id": "lost_wallet",
        "intentId": "lost_wallet",
        "outcome": {
          "type": "topic",
          "topicId": "lost-wallet"
        }
      },
      {
        "id": "bank_account",
        "intentId": "bank_account",
        "outcome": {
          "type": "topic",
          "topicId": "bank-account"
        }
      }
    ]
  },
  "my_number": {
    "id": "my_number",
    "options": [
      { "id": "my_number_overview", "intentId": "my_number_overview", "outcome": { "type": "topic", "topicId": "my-number-overview" } },
      { "id": "my_number_apply_card", "intentId": "my_number_apply_card", "outcome": { "type": "topic", "topicId": "my-number-apply-card" } },
      { "id": "my_number_lost_card", "intentId": "my_number_lost_card", "outcome": { "type": "topic", "topicId": "my-number-lost-card" } },
      { "id": "my_number_update", "intentId": "my_number_update", "outcome": { "type": "topic", "topicId": "my-number-update" } },
      { "id": "my_number_find", "intentId": "my_number_find", "outcome": { "type": "topic", "topicId": "my-number-find" } }
    ]
  },
  "food-prayer": {
    "id": "food-prayer",
    "options": [
      {
        "id": "halal_food",
        "intentId": "halal_food",
        "outcome": {
          "type": "topic",
          "topicId": "halal-food"
        }
      },
      {
        "id": "prayer_facilities",
        "intentId": "prayer_facilities",
        "outcome": {
          "type": "topic",
          "topicId": "prayer-facilities"
        }
      }
    ]
  },
  "emergency": {
    "id": "emergency",
    "options": [
      {
        "id": "ambulance_or_fire",
        "intentId": "ambulance_or_fire",
        "outcome": {
          "type": "emergency",
          "topicId": "ambulance"
        }
      },
      {
        "id": "police_danger",
        "intentId": "police_danger",
        "outcome": {
          "type": "emergency",
          "topicId": "police"
        }
      }
    ]
  }
} as const;
export const GUIDED_QUESTIONS: Record<string, GuidedQuestion> = Object.fromEntries(Object.entries(QUESTION_METADATA).map(([id, question]) => [id, { id, title: Object.fromEntries(locales.map((locale) => [locale, messageFor(locale).guided.questions[id].title])) as GuidedQuestion["title"], options: question.options.map((option, index) => ({ ...option, label: Object.fromEntries(locales.map((locale) => [locale, messageFor(locale).guided.questions[id].options[index].label])) as GuidedOption["label"], request: Object.fromEntries(locales.map((locale) => [locale, messageFor(locale).guided.questions[id].options[index].request])) as GuidedOption["request"] })) }]));
export const GUIDED_UI = Object.fromEntries(Object.keys(MESSAGES.en.guided.ui).map((key) => [key, Object.fromEntries(locales.map((locale) => [locale, messageFor(locale).guided.ui[key]]))])) as Record<keyof typeof MESSAGES.en.guided.ui, Record<LanguageCode, string>>;
