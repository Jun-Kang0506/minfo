"use client";

import { useId, useRef, useState } from "react";
import { buildAppleMapsDirectionsUrl, buildAppleMapsSearchUrl, buildGoogleMapsDirectionsUrl, buildGoogleMapsSearchUrl, getMapHandoff } from "@/lib/map-links";
import type { LookupRecord } from "@/lib/types";

interface MapHandoffActionCopy {
  get: string;
  chooseProvider: string;
  googleMapsLabel: string;
  appleMapsLabel: string;
}

export interface MapHandoffCopy {
  googleMaps: string;
  appleMaps: string;
  close: string;
  directions: MapHandoffActionCopy;
  search: MapHandoffActionCopy & { notice: string };
}

export function MapHandoffChooser({ record, copy }: { record: LookupRecord; copy: MapHandoffCopy }) {
  const handoff = getMapHandoff(record);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const instanceId = useId().replace(/:/g, "");
  const triggerId = `map-handoff-trigger-${instanceId}`;
  const panelId = `map-handoff-${instanceId}`;

  if (!handoff) return null;

  const action = copy[handoff.kind];
  const googleUrl = handoff.kind === "directions" ? buildGoogleMapsDirectionsUrl(handoff.coordinates) : buildGoogleMapsSearchUrl(handoff.query);
  const appleUrl = handoff.kind === "directions" ? buildAppleMapsDirectionsUrl(handoff.coordinates) : buildAppleMapsSearchUrl(handoff.query);
  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };
  const reveal = () => {
    setOpen(true);
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  return <div className="mt-2">
    <button ref={triggerRef} id={triggerId} type="button" onClick={reveal} aria-expanded={open} aria-controls={panelId} className="link-action">{action.get}</button>
    {open && <section id={panelId} className="mt-2 rounded-lg border border-line bg-paper p-3" aria-labelledby={`${panelId}-label`}>
      <h4 ref={headingRef} id={`${panelId}-label`} tabIndex={-1} className="text-sm font-semibold text-ink">{action.chooseProvider}</h4>
      {handoff.kind === "search" && <p className="mt-3 text-sm leading-relaxed text-ink-soft">{copy.search.notice}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        <a href={googleUrl} target="_blank" rel="noopener noreferrer" className="button-secondary" aria-label={action.googleMapsLabel}>{copy.googleMaps}</a>
        <a href={appleUrl} target="_blank" rel="noopener noreferrer" className="button-secondary" aria-label={action.appleMapsLabel}>{copy.appleMaps}</a>
      </div>
      <button type="button" onClick={close} className="button-secondary mt-3">{copy.close}</button>
    </section>}
  </div>;
}
