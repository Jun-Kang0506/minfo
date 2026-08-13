import type { LanguageCode, Source } from "../types";
import { getSourceContent } from "../../i18n/content";
import { SOURCES } from "./sources";

/**
 * Localized display names are sourced from the per-locale source-content
 * records. Official Japanese metadata and URLs remain on each source record.
 */
export function localizedSourceTitle(source: Source, lang: LanguageCode): string {
  return getSourceContent(source.id, lang)?.title ?? source.title;
}

export function localizedOrganization(organization: string, lang: LanguageCode): string {
  const source = SOURCES.find((item) => item.organization === organization);
  return source ? localizedSourceTitleOrganization(source, lang) : organization;
}

function localizedSourceTitleOrganization(source: Source, lang: LanguageCode): string {
  return getSourceContent(source.id, lang)?.organization ?? source.organization;
}
