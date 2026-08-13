import type { LookupDatasetId } from "./types";

export interface DirectoryDatasetConfig {
  id: LookupDatasetId;
  fallbackCatalogUrl: string;
  disclaimerKey: "childcare" | "evacuation";
  supportsDistance: boolean;
  supportsMap: boolean;
  attributeKeys: readonly ("hazards" | "type" | "ownership")[];
  initialResultCount: number;
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
};
