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
    "icon": "school",
    "exampleTopic": "consultation"
  },
  {
    "id": "food-prayer",
    "icon": "utensils",
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
/**
 * The message files are keyed by the stable category ID. Labels are never
 * assembled from an array position, so changing display order cannot change
 * routing or attach a translation to the wrong category.
 */
export const CATEGORIES: Category[] = CATEGORY_METADATA.map((category) => ({
  ...category,
  titleJa: MESSAGES.ja.categories[category.id].title,
  title: Object.fromEntries(locales.map((locale) => [locale, MESSAGES[locale].categories[category.id].title])) as Category["title"],
  description: Object.fromEntries(locales.map((locale) => [locale, MESSAGES[locale].categories[category.id].description])) as Category["description"],
}));
