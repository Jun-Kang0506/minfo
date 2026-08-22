import type { GarbageSnapshot, LookupDatasetId, LookupSnapshot } from "./types";

export const LOOKUP_DATASET_IDS = ["shinjuku-childcare-facilities", "shinjuku-evacuation-sites", "shinjuku-medical-clinics", "shinjuku-public-elementary-schools", "shinjuku-public-junior-high-schools", "shinjuku-public-high-schools"] as const;
export function isLookupDatasetId(value: string): value is LookupDatasetId { return (LOOKUP_DATASET_IDS as readonly string[]).includes(value); }
export const GARBAGE_DATASET_IDS = ["shinjuku-garbage-sorting"] as const;
export function isGarbageDatasetId(value: string): value is "shinjuku-garbage-sorting" { return (GARBAGE_DATASET_IDS as readonly string[]).includes(value); }
export function isAnyDatasetId(value: string): value is LookupDatasetId | "shinjuku-garbage-sorting" { return isLookupDatasetId(value) || isGarbageDatasetId(value); }
export function isGarbageSnapshot(value: unknown): value is GarbageSnapshot {
  if (!value || typeof value !== "object") return false;
  const snapshot = value as GarbageSnapshot;
  const metadata = snapshot.metadata;
  const columns=["全国地方公共団体コード","ID","地方公共団体名","ゴミの品目","分別区分","注意点","料金種別","料金","料金備考","備考"];
  const categories: Record<string, [string, number]> = { "bulky":["粗大ごみ",166], "metal-ceramic-glass":["金属・陶器・ガラスごみ",119], "burnable":["燃やすごみ",109], "not-collected":["収集できません",48], "recyclables-used-paper":["資源、古紙",14], "recyclables-plastic-containers-packaging":["資源、容器包装プラスチック",11], "recyclables-glass-bottles":["資源、びん",5], "recyclables-spray-cans-gas-canisters-batteries":["資源、スプレー缶・カセットボンベ・乾電池",4], "plastic-containers-packaging":["容器包装プラスチック",3], "recyclables-cans":["資源、缶",2], "recyclables-pet-bottles":["資源、ペットボトル",1] };
  if (!metadata || metadata.datasetId!=="shinjuku-garbage-sorting" || metadata.titleJa!=="新宿区のゴミの分別方法一覧" || metadata.catalogUrl!=="https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000129" || metadata.resourceUrl!=="https://www.city.shinjuku.lg.jp/content/000420404.csv" || metadata.resourceId!=="4546f9be-cb16-4872-901a-23af758ea1fd" || metadata.packageId!=="0231d62a-eb57-430b-b399-a716aecce681" || metadata.sourceId!=="shinjuku-garbage" || metadata.sourceOrganization!=="環境清掃部新宿清掃事務所" || metadata.license!=="CC-BY-4.0" || metadata.encoding!=="UTF-8 BOM" || metadata.retrievedAt!=="2026-08-22" || metadata.verifiedAt!=="2026-08-22" || metadata.updateFrequency!=="随時" || metadata.catalogMetadataUpdatedAt!=="2025-12-12" || metadata.snapshot!==true || metadata.recordCount!==482 || metadata.noteCount!==172 || metadata.normalizerVersion!==1 || metadata.rawSha256!=="1b66d0dc7ad841e77d915f27a48c77682ba6ed2cff1c07a15a2d1508332c2a04" || JSON.stringify(metadata.sourceColumns)!==JSON.stringify(columns) || !Array.isArray(snapshot.records) || snapshot.records.length!==482) return false;
  const ids=new Set<string>(), officialIds=new Set<string>(), keys=new Set<string>(); let notes=0; const counts: Record<string,number>={};
  for(const record of snapshot.records){ if(!record.id?.trim() || !record.officialId?.trim() || !record.officialItem?.trim() || !record.searchKey?.trim() || !record.categoryId?.trim() || !record.officialCategory?.trim() || record.id!==`garbage:${record.officialId}` || record.datasetId!=="shinjuku-garbage-sorting" || record.sourceId!=="shinjuku-garbage" || !categories[record.categoryId] || categories[record.categoryId][0]!==record.officialCategory || ids.has(record.id)||officialIds.has(record.officialId)||keys.has(record.searchKey)|| (record.officialNote!==undefined&&(typeof record.officialNote!=="string" || !record.officialNote.trim()))) return false; ids.add(record.id);officialIds.add(record.officialId);keys.add(record.searchKey);counts[record.categoryId]=(counts[record.categoryId]??0)+1;if(record.officialNote)notes++; }
  return notes===172 && Object.entries(categories).every(([id,[,count]])=>counts[id]===count);
}
export function isLookupSnapshot(value: unknown): value is LookupSnapshot {
  if (!value || typeof value !== "object") return false;
  const data = value as LookupSnapshot;
  const m = data.metadata;
  const url = (v: unknown) => typeof v === "string" && /^https:\/\//.test(v);
  const date = (v: unknown) => typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v);
  const hazardKeys = new Set(["flood", "landslide", "storm_surge", "earthquake", "tsunami", "large_fire", "inland_flooding", "volcano"]);
  return Array.isArray(data.records) && !!m && isLookupDatasetId(m.datasetId) && typeof m.titleJa === "string" && url(m.catalogUrl) && url(m.resourceUrl) && typeof m.resourceId === "string" && /^[a-f0-9]{64}$/.test(m.rawSha256) && date(m.retrievedAt) && date(m.verifiedAt) && m.snapshot === true && m.recordCount === data.records.length && Number.isInteger(m.sourceRecordCount) && Number.isInteger(m.excludedRecordCount) && Number.isInteger(m.excludedProvisionalRecordCount) && Array.isArray(m.excludedRecords) && m.excludedRecords.length === m.excludedRecordCount && m.sourceRecordCount >= m.recordCount + m.excludedRecordCount && m.excludedProvisionalRecordCount <= m.excludedRecordCount && m.excludedRecords.every((r) => typeof r.officialId === "string" && typeof r.sourceName === "string" && r.nameStatus === "excluded" && r.reason === "unverified_provisional_name") && data.records.every((r) => {
    if (typeof r.id !== "string" || r.datasetId !== m.datasetId || r.sourceId !== m.sourceId || typeof r.officialId !== "string" || typeof r.sourceName !== "string" || typeof r.displayName !== "string" || !["official_localized", "romanized_helper", "japanese_only"].includes(r.displayNameStatus) || !["official_source", "verified_current"].includes(r.nameStatus)) return false;
    if (r.nameKana !== undefined && typeof r.nameKana !== "string" || r.nameLatin !== undefined && typeof r.nameLatin !== "string" || r.officialLocalizedName !== undefined && typeof r.officialLocalizedName !== "string" || r.romanizedName !== undefined && typeof r.romanizedName !== "string") return false;
    if (r.displayNameStatus === "official_localized" && r.displayName !== r.officialLocalizedName) return false;
    if (r.displayNameStatus === "romanized_helper" && r.displayName !== r.romanizedName) return false;
    if (r.displayNameStatus === "japanese_only" && r.displayName !== r.sourceName) return false;
    const lat = r.latitude, lon = r.longitude;
    if ((typeof lat === "number") !== (typeof lon === "number") || (lat !== undefined && (!Number.isFinite(lat) || !Number.isFinite(lon!) || Math.abs(lat) > 90 || Math.abs(lon!) > 180))) return false;
    return !r.hazards || Object.entries(r.hazards).every(([key, flag]) => hazardKeys.has(key) && flag === true);
  });
}
