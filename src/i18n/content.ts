import type { LanguageCode, Localized, LocalizedAnswerContent } from "../lib/types";
import enAnswers from "../content/en/answers.json";
import jaAnswers from "../content/ja/answers.json";
import zhAnswers from "../content/zh/answers.json";
import koAnswers from "../content/ko/answers.json";
import viAnswers from "../content/vi/answers.json";
import neAnswers from "../content/ne/answers.json";
import tlAnswers from "../content/tl/answers.json";
import bnAnswers from "../content/bn/answers.json";
import enSources from "../content/en/sources.json";
import jaSources from "../content/ja/sources.json";
import zhSources from "../content/zh/sources.json";
import koSources from "../content/ko/sources.json";
import viSources from "../content/vi/sources.json";
import neSources from "../content/ne/sources.json";
import tlSources from "../content/tl/sources.json";
import bnSources from "../content/bn/sources.json";
import enOpenData from "../content/en/open-data.json";
import jaOpenData from "../content/ja/open-data.json";
import zhOpenData from "../content/zh/open-data.json";
import koOpenData from "../content/ko/open-data.json";
import viOpenData from "../content/vi/open-data.json";
import neOpenData from "../content/ne/open-data.json";
import tlOpenData from "../content/tl/open-data.json";
import bnOpenData from "../content/bn/open-data.json";

type SourceContent = { title: string; organization: string; note: string };
type OpenDataContent = { titleGloss: string; note: string };

const languages: LanguageCode[] = ["en", "ja", "zh", "ko", "vi", "ne", "tl", "bn"];

const answerContent = {
  en: enAnswers,
  ja: jaAnswers,
  zh: zhAnswers,
  ko: koAnswers,
  vi: viAnswers,
  ne: neAnswers,
  tl: tlAnswers,
  bn: bnAnswers,
} as Localized<Record<string, LocalizedAnswerContent>>;

const sourceContent = {
  en: enSources,
  ja: jaSources,
  zh: zhSources,
  ko: koSources,
  vi: viSources,
  ne: neSources,
  tl: tlSources,
  bn: bnSources,
} as Localized<Record<string, SourceContent>>;

const openDataContent = {
  en: enOpenData,
  ja: jaOpenData,
  zh: zhOpenData,
  ko: koOpenData,
  vi: viOpenData,
  ne: neOpenData,
  tl: tlOpenData,
  bn: bnOpenData,
} as Localized<Record<string, OpenDataContent>>;

export function getAnswerContent(id: string): Localized<LocalizedAnswerContent> {
  if (!answerContent.en[id]) {
    throw new Error(`Missing English answer content for ${id}`);
  }

  return Object.fromEntries(languages.map((lang) => {
    const content = answerContent[lang][id];
    if (!content) throw new Error(`Missing ${lang} answer content for ${id}`);
    return [lang, content];
  })) as Localized<LocalizedAnswerContent>;
}

export function getSourceContent(id: string, lang: LanguageCode): SourceContent | undefined {
  return sourceContent[lang][id];
}

export function getLocalizedSourceNotes(id: string): Localized<string> {
  if (!sourceContent.en[id]) {
    throw new Error(`Missing English source content for ${id}`);
  }

  return Object.fromEntries(
    languages.map((lang) => [lang, getSourceContent(id, lang)!.note])
  ) as Localized<string>;
}

export function getLocalizedOpenDataContent(id: string): {
  titleGloss: Localized<string>;
  note: Localized<string>;
} {
  if (!openDataContent.en[id]) {
    throw new Error(`Missing English open-data content for ${id}`);
  }

  const content = languages.map((lang) => {
    const item = openDataContent[lang][id];
    if (!item) throw new Error(`Missing ${lang} open-data content for ${id}`);
    return [lang, item] as const;
  });

  return {
    titleGloss: Object.fromEntries(content.map(([lang, item]) => [lang, item.titleGloss])) as Localized<string>,
    note: Object.fromEntries(content.map(([lang, item]) => [lang, item.note])) as Localized<string>,
  };
}
