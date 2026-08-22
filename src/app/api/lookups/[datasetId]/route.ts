import { isAnyDatasetId, isGarbageDatasetId, isGarbageSnapshot, isLookupSnapshot } from "@/lib/lookups";
import type { GarbageSnapshot, LookupSnapshot } from "@/lib/types";
import childcareFacilities from "@/lib/data/generated/childcare-facilities.json";
import evacuationSites from "@/lib/data/generated/evacuation-sites.json";
import medicalClinics from "@/lib/data/generated/medical-clinics.json";
import publicElementarySchools from "@/lib/data/generated/public-elementary-schools.json";
import publicJuniorHighSchools from "@/lib/data/generated/public-junior-high-schools.json";
import publicHighSchools from "@/lib/data/generated/public-high-schools.json";
import garbageSorting from "@/lib/data/generated/garbage-sorting.json";

const snapshots: Record<string, unknown> = {
  "shinjuku-childcare-facilities": childcareFacilities,
  "shinjuku-evacuation-sites": evacuationSites,
  "shinjuku-medical-clinics": medicalClinics,
  "shinjuku-public-elementary-schools": publicElementarySchools,
  "shinjuku-public-junior-high-schools": publicJuniorHighSchools,
  "shinjuku-public-high-schools": publicHighSchools,
  "shinjuku-garbage-sorting": garbageSorting,
};

export async function GET(_request: Request, { params }: { params: Promise<{ datasetId: string }> }) {
  const { datasetId } = await params;
  if (!isAnyDatasetId(datasetId)) return Response.json({ error: "Not found" }, { status: 404 });
  try {
    const data = snapshots[datasetId] as LookupSnapshot | GarbageSnapshot;
    if (isGarbageDatasetId(datasetId) ? !isGarbageSnapshot(data) : !isLookupSnapshot(data)) throw new Error("Invalid snapshot");
    return Response.json(data);
  } catch { return Response.json({ error: "Lookup data is unavailable" }, { status: 503 }); }
}
