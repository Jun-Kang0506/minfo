import type { LookupDatasetId, LookupSnapshot } from "./types";

export const LOOKUP_DATASET_IDS = ["shinjuku-childcare-facilities", "shinjuku-evacuation-sites"] as const;
export function isLookupDatasetId(value: string): value is LookupDatasetId { return (LOOKUP_DATASET_IDS as readonly string[]).includes(value); }
export function isLookupSnapshot(value: unknown): value is LookupSnapshot {
  if (!value || typeof value !== "object") return false;
  const data = value as LookupSnapshot;
  const m = data.metadata;
  const url = (v: unknown) => typeof v === "string" && /^https:\/\//.test(v);
  const date = (v: unknown) => typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v);
  const hazardKeys = new Set(["flood", "landslide", "storm_surge", "earthquake", "tsunami", "large_fire", "inland_flooding", "volcano"]);
  return Array.isArray(data.records) && !!m && isLookupDatasetId(m.datasetId) && typeof m.titleJa === "string" && url(m.catalogUrl) && url(m.resourceUrl) && typeof m.resourceId === "string" && /^[a-f0-9]{64}$/.test(m.rawSha256) && date(m.retrievedAt) && date(m.verifiedAt) && m.snapshot === true && m.recordCount === data.records.length && data.records.every((r) => {
    if (typeof r.id !== "string" || typeof r.officialId !== "string" || typeof r.nameJa !== "string" || !r.id.startsWith(m.datasetId === "shinjuku-childcare-facilities" ? "childcare:" : "evacuation:")) return false;
    const lat = r.latitude, lon = r.longitude;
    if ((typeof lat === "number") !== (typeof lon === "number") || (lat !== undefined && (!Number.isFinite(lat) || !Number.isFinite(lon!) || Math.abs(lat) > 90 || Math.abs(lon!) > 180))) return false;
    return !r.hazards || Object.entries(r.hazards).every(([key, flag]) => hazardKeys.has(key) && flag === true);
  });
}
