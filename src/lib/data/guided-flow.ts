import type { CategoryId, GuidedOption, GuidedQuestion, Localized, TopicId } from "../types";

const l = (en: string, ja: string, zh: string, ko: string, vi: string, ne: string): Localized<string> => ({ en, ja, zh, ko, vi, ne });
const topic = (topicId: TopicId) => ({ type: "topic" as const, topicId });
const structuredLookup = (datasetCandidateId: string) => ({ type: "structuredLookup" as const, datasetCandidateId });
const unsupported = () => ({ type: "unsupported" as const });
const next = (questionId: string) => ({ type: "nextQuestion" as const, questionId });
const emergency = (topicId: "ambulance" | "police") => ({ type: "emergency" as const, topicId });
const o = (id: string, intentId: string, label: Localized<string>, outcome: GuidedOption["outcome"], request = label): GuidedOption => ({ id, intentId, label, request, outcome });

/** Keep this independent from translated titles so a future locale can choose its own order. */
export const DEFAULT_CATEGORY_ORDER: CategoryId[] = [
  "hospitals", "schools-children", "taxes", "garbage", "disaster",
  "japanese", "housing", "consultation", "food-prayer", "emergency",
];

export const CATEGORY_START_QUESTION: Record<CategoryId, string> = {
  hospitals: "health", "schools-children": "schools", taxes: "taxes", garbage: "garbage",
  disaster: "disaster", japanese: "japanese", housing: "housing", consultation: "consultation",
  "food-prayer": "food-prayer", emergency: "emergency",
};

/** A stable flow ID leaves room for a category to gain alternate flows later. */
export const GUIDED_FLOWS: Record<CategoryId, { flowId: string; startQuestionId: string }> = Object.fromEntries(
  Object.entries(CATEGORY_START_QUESTION).map(([categoryId, startQuestionId]) => [
    categoryId,
    { flowId: `category:${categoryId}`, startQuestionId },
  ])
) as Record<CategoryId, { flowId: string; startQuestionId: string }>;

export const GUIDED_QUESTIONS: Record<string, GuidedQuestion> = {
  health: {
    id: "health", title: l("What do you need help with?", "何について知りたいですか？", "您需要了解什么？", "무엇이 필요하신가요?", "Bạn cần hỗ trợ việc gì?", "तपाईंलाई केमा सहयोग चाहिन्छ?"), options: [
      o("find_hospital", "find_hospital", l("Find a hospital", "病院をさがす", "找医院", "병원 찾기", "Tìm bệnh viện", "अस्पताल खोज्नुहोस्"), topic("hospital")),
      o("health_insurance", "health_insurance", l("Understand health insurance", "健康保険を知る", "了解健康保险", "건강보험 알아보기", "Tìm hiểu bảo hiểm y tế", "स्वास्थ्य बीमा बुझ्नुहोस्"), topic("insurance")),
      o("urgent_now", "urgent_now", l("I need urgent help now", "今すぐ緊急の助けが必要", "我现在需要紧急帮助", "지금 긴급 도움이 필요해요", "Tôi cần trợ giúp khẩn cấp ngay", "मलाई अहिले आपतकालीन सहयोग चाहिन्छ"), next("health_urgent_kind")),
    ],
  },
  health_urgent_kind: {
    id: "health_urgent_kind", title: l("What kind of emergency is it?", "どんな緊急ですか？", "是什么紧急情况？", "어떤 긴급 상황인가요?", "Đó là tình huống khẩn cấp nào?", "कस्तो आपतकाल हो?"), options: [
      o("ambulance_or_fire", "ambulance_or_fire", l("Ambulance or fire", "救急車・火事", "救护车或火灾", "구급차 또는 화재", "Cấp cứu hoặc cháy", "एम्बुलेन्स वा आगलागी"), emergency("ambulance")),
      o("police_danger", "police_danger", l("Police or immediate danger", "警察・今すぐ危険", "警察或眼前危险", "경찰 또는 즉시 위험", "Cảnh sát hoặc nguy hiểm ngay", "प्रहरी वा तत्काल खतरा"), emergency("police")),
    ],
  },
  schools: {
    id: "schools", title: l("What do you need help with?", "何について知りたいですか？", "您需要了解什么？", "무엇이 필요하신가요?", "Bạn cần hỗ trợ việc gì?", "तपाईंलाई केमा सहयोग चाहिन्छ?"), options: [
      o("school_enrollment", "school_enrollment", l("Enroll in elementary or junior-high school", "小・中学校に入学する", "申请小学或初中入学", "초등학교 또는 중학교 입학", "Nhập học tiểu học hoặc trung học cơ sở", "प्राथमिक वा निम्न माध्यमिक विद्यालय भर्ना"), topic("school-enrollment")),
      o("childcare_application", "childcare_application", l("Apply for childcare", "保育園などを申し込む", "申请托育", "보육을 신청하기", "Nộp đơn chăm sóc trẻ", "बाल हेरचाहका लागि आवेदन"), topic("childcare-application")),
      o("childcare_facility_finder", "childcare_facility_finder", l("Find a childcare facility", "保育施設をさがす", "查找托育设施", "보육 시설 찾기", "Tìm cơ sở chăm sóc trẻ", "बाल हेरचाह सुविधा खोज्नुहोस्"), structuredLookup("shinjuku-childcare-facilities")),
    ],
  },
  taxes: { id: "taxes", title: l("What do you need help with?", "何について知りたいですか？", "您需要了解什么？", "무엇이 필요하신가요?", "Bạn cần hỗ trợ việc gì?", "तपाईंलाई केमा सहयोग चाहिन्छ?"), options: [
    o("tax_pension_notice", "tax_pension_notice", l("Tax or pension notice, or difficulty paying", "税金・年金の通知、または支払いの困りごと", "税务或养老金通知，或缴费困难", "세금 또는 연금 통지서, 또는 납부 어려움", "Thông báo thuế hoặc lương hưu, hoặc khó thanh toán", "कर वा पेन्सन सूचना, वा तिर्न कठिनाइ"), topic("tax")),
    o("tax_calculation", "tax_calculation", l("Calculate my tax", "税金の計算", "计算我的税", "세금 계산", "Tính thuế", "कर गणना"), unsupported()),
  ]},
  garbage: { id: "garbage", title: l("What do you need help with?", "何について知りたいですか？", "您需要了解什么？", "무엇이 필요하신가요?", "Bạn cần hỗ trợ việc gì?", "तपाईंलाई केमा सहयोग चाहिन्छ?"), options: [
    o("garbage_rules", "garbage_rules", l("Sorting, collection days, or oversized garbage", "ごみの分け方・収集日・粗大ごみ", "分类、收集日或大型垃圾", "분리배출, 수거 요일 또는 대형 쓰레기", "Phân loại, ngày thu gom hoặc rác cỡ lớn", "छुट्याउने, संकलन दिन वा ठूलो फोहोर"), topic("garbage")),
  ]},
  disaster: { id: "disaster", title: l("What do you need help with?", "何について知りたいですか？", "您需要了解什么？", "무엇이 필요하신가요?", "Bạn cần hỗ trợ việc gì?", "तपाईंलाई केमा सहयोग चाहिन्छ?"), options: [
    o("earthquake_guidance", "earthquake_guidance", l("Earthquake preparation and official alerts", "地震への備え・公式情報", "地震准备和官方警报", "지진 대비와 공식 알림", "Chuẩn bị động đất và cảnh báo chính thức", "भूकम्प तयारी र आधिकारिक सूचना"), topic("earthquake")),
    o("typhoon_help", "typhoon_help", l("Typhoon and heavy-rain preparedness", "台風・大雨への備え", "台风和暴雨准备", "태풍·호우 대비", "Chuẩn bị bão và mưa lớn", "आँधी र भारी वर्षाको तयारी"), topic("typhoon-heavy-rain")),
    o("evacuation_location", "evacuation_location", l("Evacuation sites", "避難場所", "避难场所", "대피 장소", "Địa điểm sơ tán", "निकासी स्थल"), structuredLookup("shinjuku-evacuation-sites")),
  ]},
  japanese: { id: "japanese", title: l("What do you need help with?", "何について知りたいですか？", "您需要了解什么？", "무엇이 필요하신가요?", "Bạn cần hỗ trợ việc gì?", "तपाईंलाई केमा सहयोग चाहिन्छ?"), options: [
    o("find_class", "find_class", l("Find a Japanese class", "日本語教室をさがす", "找日语课", "일본어 수업 찾기", "Tìm lớp tiếng Nhật", "जापानी कक्षा खोज्नुहोस्"), next("japanese_class_need")),
    o("easy_japanese", "easy_japanese", l("Easy Japanese", "やさしい日本語", "简明日语", "쉬운 일본어", "Tiếng Nhật đơn giản", "सजिलो जापानी"), topic("easy-japanese")),
  ]},
  japanese_class_need: { id: "japanese_class_need", title: l("What kind of class are you looking for?", "どのような教室をさがしていますか？", "您想找哪种课程？", "어떤 수업을 찾고 있나요?", "Bạn đang tìm lớp nào?", "तपाईं कस्तो कक्षा खोज्दै हुनुहुन्छ?"), options: [
    o("beginner_class", "japanese_class_beginner", l("Beginner class", "初級者向けの教室", "初学者课程", "초급자 수업", "Lớp cho người mới bắt đầu", "शुरुआती कक्षा"), topic("japanese-class-beginner")),
    o("evening_class", "japanese_class_evening", l("Evening class", "夜の教室", "晚间课程", "저녁 수업", "Lớp buổi tối", "साँझको कक्षा"), topic("japanese-class-evening")),
    o("class_near_okubo", "japanese_class_near_okubo", l("Class in the Okubo area", "大久保エリアの教室", "大久保地区课程", "오쿠보 지역 수업", "Lớp ở khu Okubo", "Okubo क्षेत्रको कक्षा"), topic("japanese-class-okubo")),
  ]},
  housing: { id: "housing", title: l("What do you need help with?", "何について知りたいですか？", "您需要了解什么？", "무엇이 필요하신가요?", "Bạn cần hỗ trợ việc gì?", "तपाईंलाई केमा सहयोग चाहिन्छ?"), options: [
    o("moving_registration", "moving_registration", l("Moving registration", "引っ越しの手続き", "搬家登记", "이사 신고", "Đăng ký chuyển nhà", "बसाइँसराइ दर्ता"), topic("moving-registration")),
    o("housing_rent_help", "housing_rent_help", l("Renting, contracts, or landlord problems", "賃貸・契約・大家さんとのトラブル", "租房、合同或房东问题", "임대, 계약 또는 집주인 문제", "Thuê nhà, hợp đồng hoặc vấn đề với chủ nhà", "भाडा, सम्झौता वा घरधनी समस्या"), topic("housing")),
    o("public_housing", "public_housing", l("Public housing", "公営住宅", "公共住房", "공공 주택", "Nhà ở công", "सार्वजनिक आवास"), topic("public-housing")),
  ]},
  consultation: { id: "consultation", title: l("What do you need help with?", "何について知りたいですか？", "您需要了解什么？", "무엇이 필요하신가요?", "Bạn cần hỗ trợ việc gì?", "तपाईंलाई केमा सहयोग चाहिन्छ?"), options: [
    o("daily_life_help", "daily_life_help", l("Daily-life help", "生活の相談", "生活咨询", "생활 상담", "Hỗ trợ đời sống", "दैनिक जीवन सहयोग"), topic("consultation")),
    o("official_letter", "official_letter", l("Understand an official letter", "役所の手紙を読む", "看懂政府信件", "관공서 편지 이해", "Hiểu thư của cơ quan", "सरकारी चिठी बुझ्नुहोस्"), topic("city-office-letter")),
    o("residence_card", "residence_card", l("Residence card", "在留カード", "在留卡", "재류카드", "Thẻ cư trú", "बसोबास कार्ड"), topic("residence-card")),
    o("lost_wallet", "lost_wallet", l("Lost wallet", "財布をなくした", "丢失钱包", "지갑 분실", "Mất ví", "वालेट हरायो"), topic("lost-wallet")),
    o("bank_account", "bank_account", l("Open a bank account", "銀行口座をつくる", "开银行账户", "은행 계좌 개설", "Mở tài khoản ngân hàng", "बैंक खाता खोल्नुहोस्"), topic("bank-account")),
  ]},
  "food-prayer": { id: "food-prayer", title: l("What do you need help with?", "何について知りたいですか？", "您需要了解什么？", "무엇이 필요하신가요?", "Bạn cần hỗ trợ việc gì?", "तपाईंलाई केमा सहयोग चाहिन्छ?"), options: [
    o("halal_food", "halal_food", l("Halal food", "ハラールの食事", "清真餐饮", "할랄 음식", "Thức ăn halal", "हलाल खाना"), topic("halal-food")),
    o("prayer_facilities", "prayer_facilities", l("Prayer facilities", "礼拝施設", "礼拜设施", "기도 시설", "Cơ sở cầu nguyện", "प्रार्थना सुविधा"), topic("prayer-facilities")),
  ]},
  emergency: { id: "emergency", title: l("What kind of emergency is it?", "どんな緊急ですか？", "是什么紧急情况？", "어떤 긴급 상황인가요?", "Đó là tình huống khẩn cấp nào?", "कस्तो आपतकाल हो?"), options: [
    o("ambulance_or_fire", "ambulance_or_fire", l("Ambulance or fire", "救急車・火事", "救护车或火灾", "구급차 또는 화재", "Cấp cứu hoặc cháy", "एम्बुलेन्स वा आगलागी"), emergency("ambulance")),
    o("police_danger", "police_danger", l("Police or immediate danger", "警察・今すぐ危険", "警察或眼前危险", "경찰 또는 즉시 위험", "Cảnh sát hoặc nguy hiểm ngay", "प्रहरी वा तत्काल खतरा"), emergency("police")),
  ]},
};

export const GUIDED_UI = {
  next: l("Next", "次へ", "下一步", "다음", "Tiếp theo", "अर्को"), back: l("Back", "戻る", "返回", "뒤로", "Quay lại", "फिर्ता"),
  startOver: l("Start over", "最初から", "重新开始", "처음부터", "Bắt đầu lại", "फेरि सुरु गर्नुहोस्"),
  loading: l("Checking trusted sources…", "信頼できる情報を確認しています…", "正在确认可信来源…", "신뢰할 수 있는 정보를 확인하고 있어요…", "Đang kiểm tra nguồn đáng tin cậy…", "विश्वसनीय स्रोत जाँच्दै…"),
  unsupportedTitle: l("Information for this topic is being prepared.", "このテーマの情報は準備中です。", "此主题的信息正在准备中。", "이 주제의 정보는 준비 중입니다.", "Thông tin cho chủ đề này đang được chuẩn bị.", "यस विषयको जानकारी तयार हुँदैछ।"),
  unsupportedNeed: l("You selected: {need}", "選んだ内容：{need}", "您选择的是：{need}", "선택한 항목: {need}", "Bạn đã chọn: {need}", "तपाईंले छान्नुभयो: {need}"),
  consultation: l("Find a consultation desk", "相談窓口をさがす", "查找咨询窗口", "상담 창구 찾기", "Tìm quầy tư vấn", "परामर्श डेस्क खोज्नुहोस्"),
  structuredLookupTitle: l("Childcare facility lookup is being prepared.", "保育施設の検索は準備中です。", "托育设施查询正在准备中。", "보육 시설 조회를 준비 중입니다.", "Tính năng tìm cơ sở chăm sóc trẻ đang được chuẩn bị.", "बाल हेरचाह सुविधा खोजी तयार हुँदैछ।"),
  structuredLookupBody: l("The official dataset and catalog metadata must be verified before this lookup can be used. It does not show live results.", "この検索を使う前に、公式データセットとカタログ情報を確認する必要があります。現在の結果は表示しません。", "使用此查询前，必须确认官方数据集和目录信息。这里不显示实时结果。", "이 조회를 사용하기 전에 공식 데이터세트와 카탈로그 메타데이터를 확인해야 합니다. 현재 결과는 표시하지 않습니다.", "Cần xác minh bộ dữ liệu chính thức và siêu dữ liệu danh mục trước khi dùng tính năng này. Không hiển thị kết quả trực tiếp.", "यो खोज प्रयोग गर्नुअघि आधिकारिक डाटासेट र क्याटलग मेटाडाटा पुष्टि गर्नुपर्छ। यसले प्रत्यक्ष नतिजा देखाउँदैन।"),
} as const;
