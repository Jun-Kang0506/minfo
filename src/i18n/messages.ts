import enUi from "@/messages/en/ui.json";
import enGuided from "@/messages/en/guided.json";
import enResult from "@/messages/en/result.json";
import enLookup from "@/messages/en/lookup.json";
import enPages from "@/messages/en/pages.json";
import enCategories from "@/messages/en/categories.json";
import enEmergency from "@/messages/en/emergency.json";
import enPrompts from "@/messages/en/prompts.json";
import jaUi from "@/messages/ja/ui.json";
import jaGuided from "@/messages/ja/guided.json";
import jaResult from "@/messages/ja/result.json";
import jaLookup from "@/messages/ja/lookup.json";
import jaPages from "@/messages/ja/pages.json";
import jaCategories from "@/messages/ja/categories.json";
import jaEmergency from "@/messages/ja/emergency.json";
import jaPrompts from "@/messages/ja/prompts.json";
import zhUi from "@/messages/zh/ui.json";
import zhGuided from "@/messages/zh/guided.json";
import zhResult from "@/messages/zh/result.json";
import zhLookup from "@/messages/zh/lookup.json";
import zhPages from "@/messages/zh/pages.json";
import zhCategories from "@/messages/zh/categories.json";
import zhEmergency from "@/messages/zh/emergency.json";
import zhPrompts from "@/messages/zh/prompts.json";
import koUi from "@/messages/ko/ui.json";
import koGuided from "@/messages/ko/guided.json";
import koResult from "@/messages/ko/result.json";
import koLookup from "@/messages/ko/lookup.json";
import koPages from "@/messages/ko/pages.json";
import koCategories from "@/messages/ko/categories.json";
import koEmergency from "@/messages/ko/emergency.json";
import koPrompts from "@/messages/ko/prompts.json";
import viUi from "@/messages/vi/ui.json";
import viGuided from "@/messages/vi/guided.json";
import viResult from "@/messages/vi/result.json";
import viLookup from "@/messages/vi/lookup.json";
import viPages from "@/messages/vi/pages.json";
import viCategories from "@/messages/vi/categories.json";
import viEmergency from "@/messages/vi/emergency.json";
import viPrompts from "@/messages/vi/prompts.json";
import neUi from "@/messages/ne/ui.json";
import neGuided from "@/messages/ne/guided.json";
import neResult from "@/messages/ne/result.json";
import neLookup from "@/messages/ne/lookup.json";
import nePages from "@/messages/ne/pages.json";
import neCategories from "@/messages/ne/categories.json";
import neEmergency from "@/messages/ne/emergency.json";
import nePrompts from "@/messages/ne/prompts.json";
import type { LanguageCode } from "@/lib/types";

export const MESSAGES = {
  en: { ui: enUi, guided: enGuided, result: enResult, lookup: enLookup, pages: enPages, categories: enCategories, emergency: enEmergency, prompts: enPrompts },
  ja: { ui: jaUi, guided: jaGuided, result: jaResult, lookup: jaLookup, pages: jaPages, categories: jaCategories, emergency: jaEmergency, prompts: jaPrompts },
  zh: { ui: zhUi, guided: zhGuided, result: zhResult, lookup: zhLookup, pages: zhPages, categories: zhCategories, emergency: zhEmergency, prompts: zhPrompts },
  ko: { ui: koUi, guided: koGuided, result: koResult, lookup: koLookup, pages: koPages, categories: koCategories, emergency: koEmergency, prompts: koPrompts },
  vi: { ui: viUi, guided: viGuided, result: viResult, lookup: viLookup, pages: viPages, categories: viCategories, emergency: viEmergency, prompts: viPrompts },
  ne: { ui: neUi, guided: neGuided, result: neResult, lookup: neLookup, pages: nePages, categories: neCategories, emergency: neEmergency, prompts: nePrompts },
} as const satisfies Record<LanguageCode, unknown>;

export function getMessages(lang: LanguageCode) {
  return MESSAGES[lang];
}
