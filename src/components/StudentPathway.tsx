"use client";

import type { ContextPathwayTarget } from "@/lib/types";
import { ContextPathwayPage } from "./ContextPathwayPage";

export function StudentPathway({ onSelect }: { onSelect: (target: ContextPathwayTarget) => void }) { return <ContextPathwayPage pathwayId="students" onSelect={onSelect} />; }
