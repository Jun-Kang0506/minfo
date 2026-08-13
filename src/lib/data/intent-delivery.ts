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
    researchStatus: "catalog_url_required",
    // This records verification of the supplied metadata, not dataset freshness.
    verifiedAt: "2026-08-13",
    claimLevel: "information",
    deliveryKind: "structured_lookup",
    display: {
      title: { en: "Childcare facility lookup is being prepared.", ja: "保育施設の検索は準備中です。", zh: "托育设施查询正在准备中。", ko: "보육 시설 조회를 준비 중입니다.", vi: "Tính năng tìm cơ sở chăm sóc trẻ đang được chuẩn bị.", ne: "बाल हेरचाह सुविधा खोजी तयार हुँदैछ।" },
      body: { en: "The official dataset and catalog metadata must be verified before this lookup can be used. It does not show live results.", ja: "この検索を使う前に、公式データセットとカタログ情報を確認する必要があります。現在の結果は表示しません。", zh: "使用此查询前，必须确认官方数据集和目录信息。这里不显示实时结果。", ko: "이 조회를 사용하기 전에 공식 데이터세트와 카탈로그 메타데이터를 확인해야 합니다. 현재 결과는 표시하지 않습니다.", vi: "Cần xác minh bộ dữ liệu chính thức và siêu dữ liệu danh mục trước khi dùng tính năng này. Không hiển thị kết quả trực tiếp.", ne: "यो खोज प्रयोग गर्नुअघि आधिकारिक डाटासेट र क्याटलग मेटाडाटा पुष्टि गर्नुपर्छ। यसले प्रत्यक्ष नतिजा देखाउँदैन।" },
    },
  },
  "shinjuku-evacuation-sites": {
    id: "shinjuku-evacuation-sites", title: "Shinjuku evacuation sites", ownerDescription: "Shinjuku City disaster-management offices", freshnessPolicy: "implementation pending", researchStatus: "implementation_pending", verifiedAt: "2026-08-13", claimLevel: "information", deliveryKind: "structured_lookup",
    display: {
      title: { en: "Evacuation-site lookup is being prepared.", ja: "避難場所の検索は準備中です。", zh: "避难场所查询正在准备中。", ko: "대피 장소 조회를 준비 중입니다.", vi: "Tính năng tìm địa điểm sơ tán đang được chuẩn bị.", ne: "निकासी स्थल खोजी तयार हुँदैछ।" },
      body: { en: "This prepared lookup does not show live, open, or nearest sites. For the current situation, check official disaster information.", ja: "この準備中の検索は、現在開設中・最寄りの避難場所を表示しません。現在の状況は公式の防災情報で確認してください。", zh: "此准备中的查询不显示实时、开放或最近的避难场所。请查看官方防灾信息了解当前情况。", ko: "이 준비 중인 조회는 실시간·개설 중·가장 가까운 대피 장소를 표시하지 않습니다. 현재 상황은 공식 재난 정보를 확인하세요.", vi: "Tính năng đang chuẩn bị này không hiển thị địa điểm sơ tán trực tiếp, đang mở hoặc gần nhất. Hãy xem thông tin thiên tai chính thức để biết tình hình hiện tại.", ne: "यो तयारीमा रहेको खोजले प्रत्यक्ष, खुला वा सबैभन्दा नजिकको निकासी स्थल देखाउँदैन। हालको अवस्थाका लागि आधिकारिक विपद् जानकारी हेर्नुहोस्।" },
    },
  },
};

export const INTENT_DELIVERY_METADATA: Record<string, IntentDeliveryMetadata> = {
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
    researchStatus: "catalog_url_required",
  },
  evacuation_location: { intentId: "evacuation_location", deliveryKind: "structured_lookup", claimLevel: "information", sourceIds: ["shinjuku-city"], datasetCandidateIds: ["shinjuku-evacuation-sites"], verifiedAt: "2026-08-13", freshnessPolicy: "implementation pending", researchStatus: "implementation_pending" },
  public_housing: { intentId: "public_housing", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["shinjuku-public-housing-recruitment"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
  typhoon_help: { intentId: "typhoon_help", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["shinjuku-flood-guidance", "shinjuku-weather-information", "tokyo-bousai"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
  find_class: { intentId: "find_class", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["regasu-japanese-classes"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
  japanese_class_beginner: { intentId: "japanese_class_beginner", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["regasu-japanese-classes"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
  japanese_class_evening: { intentId: "japanese_class_evening", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["regasu-japanese-classes"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
  japanese_class_near_okubo: { intentId: "japanese_class_near_okubo", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["regasu-japanese-classes"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
  halal_food: { intentId: "halal_food", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["tokyo-muslim-travelers-guide"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
  prayer_facilities: { intentId: "prayer_facilities", deliveryKind: "static_guidance", claimLevel: "information", sourceIds: ["tokyo-muslim-travelers-guide"], datasetCandidateIds: [], verifiedAt: "2026-08-13", freshnessPolicy: "curated static guidance", researchStatus: "verified_content" },
};
