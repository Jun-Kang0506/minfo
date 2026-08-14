import type { LookupDatasetId } from "./types";

export interface DirectoryDatasetConfig {
  id: LookupDatasetId;
  fallbackCatalogUrl: string;
  disclaimerKey: "childcare" | "evacuation" | "medical" | "school";
  supportsDistance: boolean;
  supportsMap: boolean;
  attributeKeys: readonly ("hazards" | "type" | "ownership")[];
  initialResultCount: number;
  titleKey?: string;
}

/** Add future hospital/school datasets here; the directory renderer remains generic. */
export const DIRECTORY_DATASETS: Record<LookupDatasetId, DirectoryDatasetConfig> = {
  "shinjuku-childcare-facilities": {
    id: "shinjuku-childcare-facilities",
    fallbackCatalogUrl: "https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000117",
    disclaimerKey: "childcare",
    supportsDistance: true,
    supportsMap: true,
    attributeKeys: ["type"],
    initialResultCount: 5,
  },
  "shinjuku-evacuation-sites": {
    id: "shinjuku-evacuation-sites",
    fallbackCatalogUrl: "https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000115",
    disclaimerKey: "evacuation",
    supportsDistance: true,
    supportsMap: true,
    attributeKeys: ["hazards"],
    initialResultCount: 5,
  },
  "shinjuku-medical-clinics": { id: "shinjuku-medical-clinics", fallbackCatalogUrl: "https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000121", disclaimerKey: "medical", supportsDistance: true, supportsMap: true, attributeKeys: ["type"], initialResultCount: 5, titleKey: "medical" },
  "shinjuku-public-elementary-schools": { id: "shinjuku-public-elementary-schools", fallbackCatalogUrl: "https://catalog.data.metro.tokyo.lg.jp/dataset/t000021d2000000191", disclaimerKey: "school", supportsDistance: false, supportsMap: true, attributeKeys: ["type", "ownership"], initialResultCount: 5, titleKey: "elementarySchool" },
  "shinjuku-public-junior-high-schools": { id: "shinjuku-public-junior-high-schools", fallbackCatalogUrl: "https://catalog.data.metro.tokyo.lg.jp/dataset/t000021d2000000191", disclaimerKey: "school", supportsDistance: false, supportsMap: true, attributeKeys: ["type", "ownership"], initialResultCount: 5, titleKey: "juniorHighSchool" },
  "shinjuku-public-high-schools": { id: "shinjuku-public-high-schools", fallbackCatalogUrl: "https://catalog.data.metro.tokyo.lg.jp/dataset/t000021d2000000191", disclaimerKey: "school", supportsDistance: false, supportsMap: true, attributeKeys: ["type", "ownership"], initialResultCount: 5, titleKey: "highSchool" },
};
