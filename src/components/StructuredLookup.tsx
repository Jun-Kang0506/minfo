"use client";

import { useEffect, useMemo, useState } from "react";
import type { LanguageCode, LookupDatasetId, LookupRecord, LookupSnapshot } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { getMessages } from "@/i18n/messages";
import { DIRECTORY_DATASETS } from "@/lib/directory-config";

function km(record: LookupRecord, position: [number, number]) {
  const radians = Math.PI / 180;
  const latitudeDifference = (position[0] - record.latitude!) * radians;
  const longitudeDifference = (position[1] - record.longitude!) * radians;
  const calculation = Math.sin(latitudeDifference / 2) ** 2 + Math.cos(record.latitude! * radians) * Math.cos(position[0] * radians) * Math.sin(longitudeDifference / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(calculation), Math.sqrt(1 - calculation));
}

export function StructuredLookup({ datasetId, onBack, onStartOver }: { datasetId: LookupDatasetId; onBack: () => void; onStartOver: () => void }) {
  const { lang } = useLanguage();
  const copy = getMessages(lang).lookup;
  const config = DIRECTORY_DATASETS[datasetId];
  const [data, setData] = useState<LookupSnapshot | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "unavailable">("loading");
  const [count, setCount] = useState(config.initialResultCount);
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [locationMessage, setLocationMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/lookups/${datasetId}`, { signal: controller.signal })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((snapshot: LookupSnapshot) => {
        if (!snapshot?.metadata || !Array.isArray(snapshot.records)) throw new Error("Invalid lookup snapshot");
        setData(snapshot);
        setState("ready");
      })
      .catch(() => { if (!controller.signal.aborted) setState("unavailable"); });
    return () => controller.abort();
  }, [datasetId]);

  const records = useMemo(() => !data ? [] : [...data.records].sort((first, second) => {
    const firstHasLocation = Boolean(config.supportsDistance && position && first.latitude !== undefined && first.longitude !== undefined);
    const secondHasLocation = Boolean(config.supportsDistance && position && second.latitude !== undefined && second.longitude !== undefined);
    if (firstHasLocation !== secondHasLocation) return firstHasLocation ? -1 : 1;
    if (firstHasLocation) {
      const difference = km(first, position!) - km(second, position!);
      if (difference) return difference;
    }
    return first.displayName.localeCompare(second.displayName, "ja") || first.officialId.localeCompare(second.officialId);
  }), [config.supportsDistance, data, position]);

  const locate = () => {
    if (!navigator.geolocation) { setLocationMessage(copy.locationError); return; }
    navigator.geolocation.getCurrentPosition(
      (nextPosition) => { setPosition([nextPosition.coords.latitude, nextPosition.coords.longitude]); setLocationMessage(""); },
      () => setLocationMessage(copy.locationError),
      { timeout: 10000 },
    );
  };

  if (state === "loading") return <section className="lookup-sheet" aria-busy="true"><p className="text-base font-semibold text-moss">{copy.loading}</p></section>;
  if (state === "unavailable") return <section className="lookup-sheet border-l-caution-line"><p className="text-lg leading-relaxed text-ink">{copy.unavailable}</p><a href={config.fallbackCatalogUrl} target="_blank" rel="noopener noreferrer" className="link-action mt-3">{copy.catalog}</a><Actions lang={lang} onBack={onBack} onStartOver={onStartOver} /></section>;

  const { metadata } = data!;
  return (
    <section className="lookup-sheet">
      <header>
        <h2 className="text-2xl font-bold tracking-tight text-ink">{metadata.titleJa}</h2>
        <p className="mt-2 text-base text-ink-soft">{metadata.recordCount} {copy.count}</p>
      </header>
      {config.supportsDistance && <div className="mt-4 flex flex-wrap gap-3">
        <button onClick={locate} className="button-secondary">{copy.location}</button>
        {position && <button onClick={() => { setPosition(null); setLocationMessage(""); }} className="button-secondary">{copy.stop}</button>}
      </div>}
      {config.supportsDistance && <p className="mt-2 text-sm leading-relaxed text-ink-soft">{copy.privacy}</p>}
      {locationMessage && <p className="mt-2 text-sm font-medium text-caution" role="status">{locationMessage}</p>}
      <div className="mt-5 divide-y divide-line">
        {records.slice(0, count).map((record) => <FacilityRow key={record.id} record={record} position={position} copy={copy} supportsMap={config.supportsMap} supportsDistance={config.supportsDistance} />)}
      </div>
      {count < records.length && <button onClick={() => setCount((current) => current + 5)} className="button-secondary mt-4">{copy.more}</button>}
      <p className="mt-5 text-sm leading-relaxed text-ink-soft">{copy.datasetNotes[config.disclaimerKey]}</p>
      <aside className="mt-4 border-t border-line pt-3 text-xs leading-relaxed text-ink-soft" aria-label={copy.attributionLabel}>
        <p>{copy.data} {metadata.retrievedAt} · {copy.snapshotLabel}</p>
        <p>{copy.sourceLabel}: {metadata.sourceId} · {copy.licenseLabel}: {metadata.license}</p>
        <a href={metadata.catalogUrl} target="_blank" rel="noopener noreferrer" className="link-action">{copy.catalog}</a>
      </aside>
      <Actions lang={lang} onBack={onBack} onStartOver={onStartOver} />
    </section>
  );
}

function FacilityRow({ record, position, copy, supportsMap, supportsDistance }: { record: LookupRecord; position: [number, number] | null; copy: ReturnType<typeof getMessages>["lookup"]; supportsMap: boolean; supportsDistance: boolean }) {
  const hazardLabels: Partial<Record<keyof NonNullable<LookupRecord["hazards"]>, string>> = { earthquake: copy.earthquake, large_fire: copy.large_fire };
  const mapUrl = !supportsMap ? undefined : record.latitude !== undefined && record.longitude !== undefined
    ? `https://www.openstreetmap.org/?mlat=${record.latitude}&mlon=${record.longitude}#map=17/${record.latitude}/${record.longitude}`
    : record.address ? `https://www.openstreetmap.org/search?query=${encodeURIComponent(record.address)}` : undefined;
  const hazards = record.hazards ? Object.keys(record.hazards).map((key) => hazardLabels[key as keyof typeof hazardLabels]).filter(Boolean).join(", ") : "";
  const facilityTypes = copy.facilityTypes as Record<string, string>;
  return <article className="py-4">
    <h3 className="text-base font-bold leading-snug text-ink">{record.displayName}</h3>
    {record.displayName !== record.sourceName && <p className="mt-1 text-sm text-ink-soft" lang="ja">{record.sourceName}</p>}
    {record.address && <p className="mt-2 text-base leading-relaxed text-ink"><span className="font-semibold text-ink-soft">{copy.addressLabel}: </span><span lang="ja">{record.address}</span></p>}
    {record.type && <p className="mt-1 text-sm text-ink-soft"><span className="font-semibold">{copy.typeLabel}: </span>{facilityTypes[record.type] ?? record.type}</p>}
    {hazards && <p className="mt-1 text-sm text-ink-soft"><span className="font-semibold">{copy.listedFor}: </span>{hazards}</p>}
    {supportsDistance && position && record.latitude !== undefined && record.longitude !== undefined && <p className="mt-1 text-sm text-ink-soft"><span className="font-semibold">{copy.distance}: </span>{km(record, position).toFixed(1)} km</p>}
    {mapUrl && <a className="link-action mt-2" target="_blank" rel="noopener noreferrer" href={mapUrl}>{copy.map}</a>}
  </article>;
}

function Actions({ lang, onBack, onStartOver }: { lang: LanguageCode; onBack: () => void; onStartOver: () => void }) {
  return <div className="mt-5 flex flex-wrap gap-3"><button onClick={onBack} className="button-secondary">{getMessages(lang).guided.ui.back}</button><button onClick={onStartOver} className="button-secondary">{getMessages(lang).guided.ui.startOver}</button></div>;
}
