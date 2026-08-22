import { isHelperLocale } from "@/lib/garbage-search-helpers";
import { getValidatedGarbageSearchHelpers } from "@/lib/server/garbage-search-helper-data";
import garbageSorting from "@/lib/data/generated/garbage-sorting.json";
import type { GarbageRecord } from "@/lib/types";

export const dynamic = "force-static";

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isHelperLocale(locale)) return Response.json({ error: "Not found" }, { status: 404 });
  try {
    const snapshot = getValidatedGarbageSearchHelpers(locale, garbageSorting.records as GarbageRecord[]);
    if (!snapshot) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json(snapshot, { headers: { "Content-Language": locale, "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800" } });
  } catch {
    return Response.json({ error: "Garbage search helpers are unavailable" }, { status: 503 });
  }
}
