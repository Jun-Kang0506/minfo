import { isLookupDatasetId, isLookupSnapshot } from "@/lib/lookups";
import type { LookupSnapshot } from "@/lib/types";

export async function GET(_request: Request, { params }: { params: Promise<{ datasetId: string }> }) {
  const { datasetId } = await params;
  if (!isLookupDatasetId(datasetId)) return Response.json({ error: "Not found" }, { status: 404 });
  try {
    const data = (await import(`@/lib/data/generated/${datasetId === "shinjuku-childcare-facilities" ? "childcare-facilities" : "evacuation-sites"}.json`)).default as LookupSnapshot;
    if (!isLookupSnapshot(data) || data.metadata.datasetId !== datasetId) throw new Error("Invalid snapshot");
    return Response.json(data);
  } catch { return Response.json({ error: "Lookup data is unavailable" }, { status: 503 }); }
}
