import type { LanguageCode, Source } from "../types";

/**
 * Localized display names for sources and organizations.
 *
 * Policy: these are descriptive display names so non-English UIs never feel
 * English-only: they never replace the official identity. The official
 * Japanese name (`titleJa`) stays visible as a signage-style subtitle, and
 * URLs are untouched. Fallback order: current language → English → title.
 */
type L10nMap = Partial<Record<LanguageCode, string>>;

const ORG_NAMES: Record<string, L10nMap> = {
  "Shinjuku City": {
    ja: "新宿区",
    zh: "新宿区",
    ko: "신주쿠구",
    vi: "Quận Shinjuku",
    ne: "शिन्जुकु सिटी",
  },
  "Ministry of Health, Labour and Welfare": {
    ja: "厚生労働省",
    zh: "厚生劳动省",
    ko: "후생노동성",
    vi: "Bộ Y tế, Lao động và Phúc lợi",
    ne: "स्वास्थ्य, श्रम तथा कल्याण मन्त्रालय",
  },
  "Tokyo Metropolitan Government": {
    ja: "東京都",
    zh: "东京都政府",
    ko: "도쿄도",
    vi: "Chính quyền Tokyo",
    ne: "टोकियो महानगर सरकार",
  },
  "Tokyo Fire Department": {
    ja: "東京消防庁",
    zh: "东京消防厅",
    ko: "도쿄소방청",
    vi: "Sở Cứu hỏa Tokyo",
    ne: "टोकियो दमकल विभाग",
  },
  "Ministry of Justice": {
    ja: "法務省",
    zh: "法务省",
    ko: "법무성",
    vi: "Bộ Tư pháp",
    ne: "न्याय मन्त्रालय",
  },
  "Ministry of Justice (Yotsuya, Tokyo)": {
    ja: "法務省（東京・四ツ谷）",
    zh: "法务省（东京·四谷）",
    ko: "법무성(도쿄 요쓰야)",
    vi: "Bộ Tư pháp (Yotsuya, Tokyo)",
    ne: "न्याय मन्त्रालय (योत्सुया, टोकियो)",
  },
  "National Tax Agency": {
    ja: "国税庁",
    zh: "国税厅",
    ko: "국세청",
    vi: "Cơ quan Thuế Quốc gia",
    ne: "राष्ट्रिय कर एजेन्सी",
  },
  "Japan Pension Service": {
    ja: "日本年金機構",
    zh: "日本年金机构",
    ko: "일본연금기구",
    vi: "Cơ quan Hưu trí Nhật Bản",
    ne: "जापान पेन्सन सेवा",
  },
};

/** Keyed by Source.id: ja entries use やさしい日本語 where the official name is hard. */
const SOURCE_TITLES: Record<string, L10nMap> = {
  "shinjuku-foreign": {
    ja: "新宿区 外国人のための生活情報",
    zh: "新宿区外国居民生活信息网站",
    ko: "신주쿠구 외국인을 위한 생활 정보",
    vi: "Thông tin đời sống cho cư dân nước ngoài của quận Shinjuku",
    ne: "शिन्जुकु सिटीका विदेशी बासिन्दाका लागि जीवन जानकारी",
  },
  "tabunka-plaza": {
    ja: "しんじゅく多文化共生プラザ",
    zh: "新宿多文化共生广场",
    ko: "신주쿠 다문화 공생 플라자",
    vi: "Trung tâm Đa văn hóa Shinjuku (Tabunka Plaza)",
    ne: "शिन्जुकु बहुसांस्कृतिक प्लाजा",
  },
  "shinjuku-city": {
    ja: "新宿区 公式ホームページ",
    zh: "新宿区官方网站",
    ko: "신주쿠구 공식 홈페이지",
    vi: "Trang web chính thức của quận Shinjuku",
    ne: "शिन्जुकु सिटीको आधिकारिक वेबसाइट",
  },
  "shinjuku-garbage": {
    ja: "新宿区 ごみと資源の出しかた",
    zh: "新宿区垃圾与资源分类指南",
    ko: "신주쿠구 쓰레기·재활용 배출 안내",
    vi: "Hướng dẫn phân loại rác và tái chế của quận Shinjuku",
    ne: "शिन्जुकु सिटी फोहोर र पुनःप्रयोग गाइड",
  },
  "iryou-net": {
    ja: "医療情報ネット（ナビイ）",
    zh: "医疗信息网（NAVII）",
    ko: "의료정보넷(NAVII)",
    vi: "Mạng thông tin y tế (NAVII)",
    ne: "चिकित्सा जानकारी नेट (NAVII)",
  },
  "tokyo-metro": {
    ja: "東京都 公式ホームページ",
    zh: "东京都政府官方网站",
    ko: "도쿄도 공식 홈페이지",
    vi: "Trang chính thức của Chính quyền Tokyo",
    ne: "टोकियो महानगर सरकारको वेबसाइट",
  },
  "tokyo-bousai": {
    ja: "東京都 防災ホームページ",
    zh: "东京都防灾网站",
    ko: "도쿄도 방재 홈페이지",
    vi: "Trang phòng chống thiên tai Tokyo",
    ne: "टोकियो विपद् रोकथाम वेबसाइट",
  },
  "tokyo-fire": {
    ja: "東京消防庁（119・#7119）",
    zh: "东京消防厅: 119 / #7119",
    ko: "도쿄소방청: 119 / #7119",
    vi: "Sở Cứu hỏa Tokyo: 119 / #7119",
    ne: "टोकियो दमकल विभाग: 119 / #7119",
  },
  isa: {
    ja: "出入国在留管理庁",
    zh: "出入国在留管理厅",
    ko: "출입국재류관리청",
    vi: "Cục Quản lý Xuất nhập cảnh và Lưu trú Nhật Bản",
    ne: "जापान अध्यागमन सेवा एजेन्सी",
  },
  fresc: {
    ja: "外国人在留支援センター（FRESC）",
    zh: "外国人在留支援中心（FRESC）",
    ko: "외국인 재류 지원 센터(FRESC)",
    vi: "Trung tâm Hỗ trợ Cư dân Nước ngoài (FRESC)",
    ne: "विदेशी बासिन्दा सहायता केन्द्र (FRESC)",
  },
  nta: {
    ja: "国税庁",
    zh: "国税厅",
    ko: "국세청",
    vi: "Cơ quan Thuế Quốc gia",
    ne: "राष्ट्रिय कर एजेन्सी",
  },
  nenkin: {
    ja: "日本年金機構",
    zh: "日本年金机构",
    ko: "일본연금기구",
    vi: "Cơ quan Hưu trí Nhật Bản",
    ne: "जापान पेन्सन सेवा",
  },
  "tokyo-opendata": {
    ja: "東京都オープンデータカタログ",
    zh: "东京都开放数据目录",
    ko: "도쿄도 오픈데이터 카탈로그",
    vi: "Danh mục Dữ liệu mở Tokyo",
    ne: "टोकियो खुला डाटा क्याटलग",
  },
};

export function localizedSourceTitle(source: Source, lang: LanguageCode): string {
  if (lang === "en") return source.title;
  return SOURCE_TITLES[source.id]?.[lang] ?? source.title;
}

export function localizedOrganization(organization: string, lang: LanguageCode): string {
  if (lang === "en") return organization;
  return ORG_NAMES[organization]?.[lang] ?? organization;
}
