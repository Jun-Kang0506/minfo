import type { LookupRecord } from "./types";

export type ValidCoordinates = readonly [latitude: number, longitude: number];
export type MapHandoff =
  | { kind: "directions"; coordinates: ValidCoordinates }
  | { kind: "search"; query: string };

/** Accept only source-provided numeric coordinates; strings are never coerced. */
export function getValidCoordinates(latitude: unknown, longitude: unknown): ValidCoordinates | null {
  if (typeof latitude !== "number" || typeof longitude !== "number") return null;
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;
  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) return null;
  return [latitude, longitude];
}

/**
 * Prefer verified coordinates. A provider search is the restricted fallback
 * for a current official record with its exact source name and address.
 */
export function getMapHandoff(record: Pick<LookupRecord, "latitude" | "longitude" | "nameStatus" | "sourceName" | "address">): MapHandoff | null {
  const coordinates = getValidCoordinates(record.latitude, record.longitude);
  if (coordinates) return { kind: "directions", coordinates };
  if (record.nameStatus !== "official_source" && record.nameStatus !== "verified_current") return null;
  if (typeof record.sourceName !== "string" || typeof record.address !== "string") return null;
  const sourceName = record.sourceName.trim();
  const address = record.address.trim();
  if (!sourceName || !address) return null;
  return { kind: "search", query: `${sourceName} ${address}` };
}

function destination([latitude, longitude]: ValidCoordinates) {
  return `${latitude},${longitude}`;
}

export function buildGoogleMapsDirectionsUrl(coordinates: ValidCoordinates) {
  const url = new URL("https://www.google.com/maps/dir/");
  url.search = new URLSearchParams({ api: "1", destination: destination(coordinates) }).toString();
  return url.toString();
}

export function buildAppleMapsDirectionsUrl(coordinates: ValidCoordinates) {
  const url = new URL("https://maps.apple.com/");
  url.search = new URLSearchParams({ daddr: destination(coordinates) }).toString();
  return url.toString();
}

export function buildGoogleMapsSearchUrl(query: string) {
  const url = new URL("https://www.google.com/maps/search/");
  url.search = new URLSearchParams({ api: "1", query }).toString();
  return url.toString();
}

export function buildAppleMapsSearchUrl(query: string) {
  const url = new URL("https://maps.apple.com/");
  url.search = new URLSearchParams({ q: query }).toString();
  return url.toString();
}
