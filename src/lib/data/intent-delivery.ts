import type { IntentDeliveryMetadata, StructuredLookupMetadata } from "../types";

/**
 * Evidence/delivery records for Phase 2.8 intents. This registry is metadata
 * only: it neither fetches data nor makes a live-data claim. The catalog URL,
 * schema, and freshness must all be verified before any live use.
 */
export const STRUCTURED_LOOKUP_METADATA: Record<string, StructuredLookupMetadata> = {
  "shinjuku-childcare-facilities": {
    id: "shinjuku-childcare-facilities",
    title: "Shinjuku City childcare facilities list",
    ownerDescription: "Shinjuku City child/family support, childcare, and school-related offices",
    freshnessPolicy: "as needed",
    researchStatus: "verified_content",
    // This records verification of the supplied metadata, not dataset freshness.
    verifiedAt: "2026-08-13",
    claimLevel: "information",
    deliveryKind: "structured_lookup",
  },
  "shinjuku-evacuation-sites": {
    id: "shinjuku-evacuation-sites", title: "Shinjuku evacuation sites", ownerDescription: "Shinjuku City disaster-management offices", freshnessPolicy: "as needed, checked-in snapshot", researchStatus: "verified_content", verifiedAt: "2026-08-13", claimLevel: "information", deliveryKind: "structured_lookup",
  },
};

export const INTENT_DELIVERY_METADATA: Record<string, IntentDeliveryMetadata> = {
  find_hospital: { intentId: "find_hospital", deliveryKind: "structured_lookup", claimLevel: "information", sourceIds: ["shinjuku-city-medical"], datasetCandidateIds: ["shinjuku-medical-clinics"], verifiedAt: "2026-08-14", freshnessPolicy: "checked-in official snapshot; not live availability", researchStatus: "verified_content" },
  find_elementary_school: { intentId: "find_elementary_school", deliveryKind: "structured_lookup", claimLevel: "information", sourceIds: ["tokyo-public-schools-2025"], datasetCandidateIds: ["shinjuku-public-elementary-schools"], verifiedAt: "2026-08-14", freshnessPolicy: "annual official snapshot; directory is not enrollment placement", researchStatus: "verified_content" },
  find_junior_high_school: { intentId: "find_junior_high_school", deliveryKind: "structured_lookup", claimLevel: "information", sourceIds: ["tokyo-public-schools-2025"], datasetCandidateIds: ["shinjuku-public-junior-high-schools"], verifiedAt: "2026-08-14", freshnessPolicy: "annual official snapshot; directory is not enrollment placement", researchStatus: "verified_content" },
  find_high_school: { intentId: "find_high_school", deliveryKind: "structured_lookup", claimLevel: "information", sourceIds: ["tokyo-public-schools-2025"], datasetCandidateIds: ["shinjuku-public-high-schools"], verifiedAt: "2026-08-14", freshnessPolicy: "annual official snapshot; directory is not enrollment placement", researchStatus: "verified_content" },
  tax_calculation: {
    intentId: "tax_calculation", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["shinjuku-resident-tax-simulator"], datasetCandidateIds: [], verifiedAt: "2026-08-14", freshnessPolicy: "official simulator linked; MINFO does not calculate", researchStatus: "verified_content",
  },
  moving_registration: {
    intentId: "moving_registration",
    deliveryKind: "static_guidance",
    claimLevel: "information",
    sourceIds: ["shinjuku-city", "shinjuku-foreign"],
    datasetCandidateIds: [],
    verifiedAt: "2026-08-13",
    freshnessPolicy: "curated static guidance",
    researchStatus: "verified_content",
  },
  school_enrollment: {
    intentId: "school_enrollment",
    deliveryKind: "static_guidance",
    claimLevel: "information",
    sourceIds: ["shinjuku-city", "shinjuku-foreign"],
    datasetCandidateIds: [],
    verifiedAt: "2026-08-13",
    freshnessPolicy: "curated static guidance",
    researchStatus: "verified_content",
  },
  childcare_application: {
    intentId: "childcare_application",
    deliveryKind: "static_guidance",
    claimLevel: "information",
    sourceIds: ["shinjuku-city", "shinjuku-foreign"],
    datasetCandidateIds: [],
    verifiedAt: "2026-08-13",
    freshnessPolicy: "curated static guidance",
    researchStatus: "verified_content",
  },
  childcare_facility_finder: {
    intentId: "childcare_facility_finder",
    deliveryKind: "structured_lookup",
    claimLevel: "information",
    sourceIds: ["shinjuku-city", "shinjuku-foreign"],
    datasetCandidateIds: ["shinjuku-childcare-facilities"],
    verifiedAt: "2026-08-13",
    freshnessPolicy: "as needed",
    researchStatus: "verified_content",
  },
  evacuation_location: { intentId: "evacuation_location", deliveryKind: "structured_lookup", claimLevel: "information", sourceIds: ["shinjuku-city"], datasetCandidateIds: ["shinjuku-evacuation-sites"], verifiedAt: "2026-08-13", freshnessPolicy: "as needed, checked-in snapshot", researchStatus: "verified_content" },
  public_housing: { intentId: "public_housing", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["shinjuku-public-housing-recruitment"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
  typhoon_help: { intentId: "typhoon_help", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["shinjuku-flood-guidance", "shinjuku-weather-information", "tokyo-bousai"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
  find_class: { intentId: "find_class", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["regasu-japanese-classes"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
  japanese_class_beginner: { intentId: "japanese_class_beginner", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["regasu-japanese-classes"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
  japanese_class_evening: { intentId: "japanese_class_evening", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["regasu-japanese-classes"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
  japanese_class_near_okubo: { intentId: "japanese_class_near_okubo", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["regasu-japanese-classes"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
  halal_food: { intentId: "halal_food", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["tokyo-muslim-travelers-guide"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
  prayer_facilities: { intentId: "prayer_facilities", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["tokyo-muslim-travelers-guide"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
};
