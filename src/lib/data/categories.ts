import type { Category, LanguageCode } from "../types";
import { MESSAGES } from "@/i18n/messages";

const locales: LanguageCode[] = ["en", "ja", "zh", "ko", "vi", "ne", "tl", "bn"];
const CATEGORY_METADATA = [
  {
    "id": "hospitals",
    "icon": "cross",
    "exampleTopic": "hospital"
  },
  {
    "id": "taxes",
    "icon": "yen",
    "exampleTopic": "tax"
  },
  {
    "id": "schools-children",
    "icon": "book",
    "exampleTopic": "consultation"
  },
  {
    "id": "food-prayer",
    "icon": "chat",
    "exampleTopic": "consultation"
  },
  {
    "id": "garbage",
    "icon": "trash",
    "exampleTopic": "garbage"
  },
  {
    "id": "disaster",
    "icon": "shield",
    "exampleTopic": "earthquake"
  },
  {
    "id": "housing",
    "icon": "house",
    "exampleTopic": "housing"
  },
  {
    "id": "japanese",
    "icon": "book",
    "exampleTopic": "japanese-learning"
  },
  {
    "id": "consultation",
    "icon": "chat",
    "exampleTopic": "consultation"
  },
  {
    "id": "emergency",
    "icon": "alert",
    "exampleTopic": "ambulance"
  }
] as const;
export const CATEGORIES: Category[] = CATEGORY_METADATA.map((category, index) => ({ ...category, titleJa: MESSAGES.ja.categories[index].title, title: Object.fromEntries(locales.map((locale) => [locale, MESSAGES[locale].categories[index].title])) as Category["title"], description: Object.fromEntries(locales.map((locale) => [locale, MESSAGES[locale].categories[index].description])) as Category["description"] }));
