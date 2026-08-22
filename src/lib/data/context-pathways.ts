import type { ContextPathwayTarget, LanguageCode, Localized } from "../types";
import { MESSAGES } from "@/i18n/messages";

export type ContextPathwayId = "students";

export type ContextPathwayItem = {
  id: string;
  target: ContextPathwayTarget;
  title: Localized<string>;
  description: Localized<string>;
};

export type ContextPathwaySection = {
  id: string;
  title: Localized<string>;
  items: ContextPathwayItem[];
};

type StudentMessages = { students: { sections: Array<{ id: string; title: string; items: Array<{ id: string; title: string; description: string }> }> } };
const locales: LanguageCode[] = ["en", "ja", "zh", "ko", "vi", "ne", "tl", "bn"];

const targets: Record<string, ContextPathwayTarget> = {
  registration: { type: "topic", topicId: "moving-registration" },
  myNumber: { type: "guidedQuestion", categoryId: "consultation", questionId: "my_number" },
  insurance: { type: "topic", topicId: "insurance" },
  japanese: { type: "category", categoryId: "japanese" },
  housing: { type: "topic", topicId: "housing" },
  clinic: { type: "structuredLookup", categoryId: "hospitals", datasetCandidateId: "shinjuku-medical-clinics" },
  disaster: { type: "category", categoryId: "disaster" },
  taxes: { type: "category", categoryId: "taxes" },
  work: { type: "topic", topicId: "student-part-time-work" },
  consultation: { type: "category", categoryId: "consultation" },
  emergency: { type: "category", categoryId: "emergency" },
};

export const STUDENT_PATHWAY_SECTIONS: ContextPathwaySection[] = locales.map((locale) => (MESSAGES[locale].pages as StudentMessages).students.sections)
  .reduce((all, sections) => all.length ? all : sections, [] as StudentMessages["students"]["sections"])
  .map((section) => ({
    id: section.id,
    title: Object.fromEntries(locales.map((locale) => [locale, ((MESSAGES[locale].pages as StudentMessages).students.sections.find((item) => item.id === section.id)?.title ?? "")])) as Localized<string>,
    items: section.items.map((item) => ({
      id: item.id,
      target: targets[item.id],
      title: Object.fromEntries(locales.map((locale) => [locale, ((MESSAGES[locale].pages as StudentMessages).students.sections.find((group) => group.id === section.id)?.items.find((entry) => entry.id === item.id)?.title ?? "")])) as Localized<string>,
      description: Object.fromEntries(locales.map((locale) => [locale, ((MESSAGES[locale].pages as StudentMessages).students.sections.find((group) => group.id === section.id)?.items.find((entry) => entry.id === item.id)?.description ?? "")])) as Localized<string>,
    })),
  }));
