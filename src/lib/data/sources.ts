import type { Source } from "../types";

/**
 * Local trusted-source dataset.
 * Every entry is a real official / public organization, and every URL was
 * verified to resolve. Policy:
 * - `url` is the canonical official page — short and stable, never a
 *   machine-translation gateway link.
 * - `localizedUrls` are official language versions of the same site,
 *   only where the organization actually publishes them.
 * - `note` explains, in the user's language, why this source matters.
 */
export const SOURCES: Source[] = [
  {
    id: "shinjuku-foreign",
    title: "Shinjuku City — Living Information for Foreign Residents",
    titleJa: "新宿区 外国人向け生活情報ウェブサイト",
    organization: "Shinjuku City",
    url: "https://www.foreign.city.shinjuku.lg.jp/en/",
    localizedUrls: {
      ja: "https://www.foreign.city.shinjuku.lg.jp/jp/",
      en: "https://www.foreign.city.shinjuku.lg.jp/en/",
      zh: "https://www.foreign.city.shinjuku.lg.jp/cn/",
      ko: "https://www.foreign.city.shinjuku.lg.jp/kr/",
    },
    categories: ["hospitals", "taxes", "garbage", "disaster", "housing", "japanese", "consultation"],
    note: {
      en: "Shinjuku's official website made for foreign residents — daily life, garbage, health, disaster, taxes, Japanese classes, and consultation, with Japanese, English, Chinese, and Korean versions.",
      ja: "新宿区が 外国人の ために 作った 公式サイトです。生活・ごみ・病院・防災・税金・日本語教室・相談の 情報が あります。",
      zh: "新宿区专为外国居民制作的官方网站——涵盖生活、垃圾、医疗、防灾、税金、日语教室和咨询信息，有日、英、中、韩语版本。",
      ko: "신주쿠구가 외국인 주민을 위해 만든 공식 사이트 — 생활, 쓰레기, 의료, 방재, 세금, 일본어 교실, 상담 정보를 일본어·영어·중국어·한국어로 제공합니다.",
      vi: "Trang web chính thức của quận Shinjuku dành cho cư dân nước ngoài — đời sống, rác, y tế, phòng chống thiên tai, thuế, lớp tiếng Nhật và tư vấn (bản tiếng Nhật, Anh, Trung, Hàn).",
      ne: "विदेशी बासिन्दाका लागि Shinjuku सिटीको आधिकारिक वेबसाइट — दैनिक जीवन, फोहोर, स्वास्थ्य, विपद्, कर, जापानी कक्षा र परामर्श जानकारी।",
    },
  },
  {
    id: "tabunka-plaza",
    title: "Shinjuku Multicultural Plaza",
    titleJa: "しんじゅく多文化共生プラザ",
    organization: "Shinjuku City",
    url: "https://www.foreign.city.shinjuku.lg.jp/en/plaza/",
    localizedUrls: {
      ja: "https://www.foreign.city.shinjuku.lg.jp/jp/plaza/",
      en: "https://www.foreign.city.shinjuku.lg.jp/en/plaza/",
      zh: "https://www.foreign.city.shinjuku.lg.jp/cn/plaza/",
      ko: "https://www.foreign.city.shinjuku.lg.jp/kr/plaza/",
    },
    categories: ["consultation", "japanese", "housing", "hospitals"],
    note: {
      en: "Free multilingual consultation desk and Japanese classes, minutes from Okubo — the first stop for daily-life questions when you don't know where to go.",
      ja: "大久保の 近くに ある、無料の 相談窓口です。いろいろな ことばで 相談できます。日本語教室も あります。",
      zh: "距大久保几分钟路程的免费多语言咨询窗口，还有日语教室——不知道去哪里时，先来这里。",
      ko: "오쿠보에서 가까운 무료 다국어 상담 창구이자 일본어 교실 — 어디로 가야 할지 모를 때 첫 번째로 찾아갈 곳입니다.",
      vi: "Quầy tư vấn đa ngôn ngữ miễn phí và lớp tiếng Nhật, cách Okubo vài phút — nơi đầu tiên nên đến khi bạn chưa biết hỏi ở đâu.",
      ne: "Okubo नजिकैको निःशुल्क बहुभाषिक परामर्श डेस्क र जापानी कक्षा — कहाँ जाने थाहा नभए पहिले यहाँ जानुहोस्।",
    },
  },
  {
    id: "shinjuku-city",
    title: "Shinjuku City Official Website",
    titleJa: "新宿区公式ホームページ",
    organization: "Shinjuku City",
    url: "https://www.city.shinjuku.lg.jp/",
    categories: ["hospitals", "taxes", "garbage", "disaster", "housing", "consultation"],
    note: {
      en: "The ward office for Shinjuku / Okubo residents — resident registration, health insurance, tax, and daily-life procedures all happen here (site mainly in Japanese).",
      ja: "新宿区役所の 公式サイトです。住民登録・健康保険・税金などの 手続きは ここで します。",
      zh: "新宿区役所的官方网站——住民登记、健康保险、税务等手续都在这里办理（网站以日语为主）。",
      ko: "신주쿠 구청 공식 사이트 — 주민 등록, 건강보험, 세금 등 생활 절차를 처리하는 곳입니다(주로 일본어).",
      vi: "Trang chính thức của Văn phòng quận Shinjuku — đăng ký cư trú, bảo hiểm y tế, thuế và các thủ tục đời sống đều làm tại đây (chủ yếu tiếng Nhật).",
      ne: "Shinjuku वडा कार्यालयको आधिकारिक साइट — बसोबास दर्ता, स्वास्थ्य बीमा, कर लगायतका प्रक्रिया यहीं हुन्छ (मुख्यतः जापानीमा)।",
    },
  },
  {
    id: "shinjuku-garbage",
    title: "Shinjuku City — Recyclable Resources and Garbage",
    titleJa: "新宿区 資源・ごみの分け方・出し方",
    organization: "Shinjuku City",
    url: "https://www.foreign.city.shinjuku.lg.jp/en/category/kurashi/shigen/",
    localizedUrls: {
      ja: "https://www.foreign.city.shinjuku.lg.jp/jp/category/kurashi/shigen/",
      en: "https://www.foreign.city.shinjuku.lg.jp/en/category/kurashi/shigen/",
      zh: "https://www.foreign.city.shinjuku.lg.jp/cn/category/kurashi/shigen/",
      ko: "https://www.foreign.city.shinjuku.lg.jp/kr/category/kurashi/shigen/",
    },
    categories: ["garbage"],
    note: {
      en: "Shinjuku's official garbage and recycling rules for foreign residents — how to separate, which day to put out, and multilingual guides.",
      ja: "新宿区の 公式の ごみの ルールです。分け方と、出す 曜日が わかります。",
      zh: "新宿区面向外国居民的官方垃圾分类规则——怎么分、哪天扔，附多语言指南。",
      ko: "신주쿠구의 공식 쓰레기·재활용 규칙 — 분리 방법과 배출 요일을 여러 언어로 안내합니다.",
      vi: "Quy tắc chính thức về rác và tái chế của quận Shinjuku — cách phân loại, ngày bỏ rác, kèm hướng dẫn đa ngôn ngữ.",
      ne: "Shinjuku सिटीको आधिकारिक फोहोर नियम — कसरी छुट्याउने र कुन दिन फाल्ने, बहुभाषिक गाइडसहित।",
    },
  },
  {
    id: "iryou-net",
    title: "Medical Information Net (NAVII)",
    titleJa: "医療情報ネット（ナビイ）",
    organization: "Ministry of Health, Labour and Welfare",
    url: "https://www.iryou.teikyouseido.mhlw.go.jp/znk-web/juminkanja/S2300/initialize",
    categories: ["hospitals", "emergency"],
    note: {
      en: "Japan's official nationwide search for hospitals and clinics — find facilities near you and check which languages they can handle.",
      ja: "国の 公式サイトです。近くの 病院を さがせます。ことばが 通じるかも しらべられます。",
      zh: "日本官方的全国医院·诊所检索系统——查找附近的医疗机构，并确认其支持的语言。",
      ko: "일본의 공식 전국 병원·클리닉 검색 — 가까운 의료기관과 대응 가능한 언어를 확인할 수 있습니다.",
      vi: "Hệ thống tìm kiếm bệnh viện và phòng khám chính thức toàn Nhật Bản — tìm cơ sở gần bạn và xem ngôn ngữ họ hỗ trợ.",
      ne: "जापानको आधिकारिक अस्पताल/क्लिनिक खोज प्रणाली — नजिकको अस्पताल र त्यहाँ चल्ने भाषा हेर्न सकिन्छ।",
    },
  },
  {
    id: "tokyo-metro",
    title: "Tokyo Metropolitan Government",
    titleJa: "東京都公式ホームページ",
    organization: "Tokyo Metropolitan Government",
    url: "https://www.metro.tokyo.lg.jp/",
    localizedUrls: {
      en: "https://www.metro.tokyo.lg.jp/english/",
    },
    categories: ["consultation", "housing", "japanese", "taxes"],
    note: {
      en: "Tokyo-wide living information and multilingual support services from the metropolitan government — useful when a question goes beyond Shinjuku.",
      ja: "東京都の 公式サイトです。新宿区の そとの ことも、ここで わかります。",
      zh: "东京都政府的官方网站——全东京范围的生活信息和多语言支援服务，问题超出新宿区时很有用。",
      ko: "도쿄도의 공식 사이트 — 도쿄 전역의 생활 정보와 다국어 지원 서비스, 신주쿠 밖의 일에 유용합니다.",
      vi: "Trang chính thức của chính quyền Tokyo — thông tin đời sống toàn Tokyo và dịch vụ hỗ trợ đa ngôn ngữ, hữu ích khi câu hỏi vượt ra ngoài Shinjuku.",
      ne: "टोकियो महानगर सरकारको आधिकारिक साइट — टोकियोभरिको जीवन जानकारी र बहुभाषिक सहायता।",
    },
  },
  {
    id: "tokyo-bousai",
    title: "Tokyo Disaster Prevention (Tokyo Bousai)",
    titleJa: "東京都防災ホームページ",
    organization: "Tokyo Metropolitan Government",
    url: "https://www.bousai.metro.tokyo.lg.jp/",
    categories: ["disaster", "emergency"],
    note: {
      en: "Tokyo's official disaster site — preparedness guides, evacuation information, and emergency updates, with multilingual pages.",
      ja: "東京都の 公式の 防災サイトです。地震や 台風の ときの 情報が、いろいろな ことばで あります。",
      zh: "东京都官方防灾网站——防灾指南、避难信息和紧急动态，提供多语言页面。",
      ko: "도쿄도 공식 방재 사이트 — 재난 대비 가이드, 피난 정보, 긴급 정보를 여러 언어로 제공합니다.",
      vi: "Trang phòng chống thiên tai chính thức của Tokyo — hướng dẫn chuẩn bị, thông tin sơ tán và cập nhật khẩn cấp, có trang đa ngôn ngữ.",
      ne: "टोकियोको आधिकारिक विपद् रोकथाम साइट — तयारी गाइड, आश्रय जानकारी र आपतकालीन अपडेट, बहुभाषिक पृष्ठसहित।",
    },
  },
  {
    id: "tokyo-fire",
    title: "Tokyo Fire Department — 119 / #7119",
    titleJa: "東京消防庁",
    organization: "Tokyo Fire Department",
    url: "https://www.tfd.metro.tokyo.lg.jp/",
    categories: ["emergency", "hospitals"],
    note: {
      en: "The official authority for 119 (fire / ambulance). Also runs #7119, the 24-hour line for advice when you are not sure it is an emergency.",
      ja: "119（火事・救急車）の 公式サイトです。緊急か わからないときは、#7119に 電話できます（24時間）。",
      zh: "119（火警·救护车）的官方机构。还运营 #7119——不确定是否紧急时可拨打的 24 小时咨询电话。",
      ko: "119(화재·구급차)의 공식 기관. 응급인지 애매할 때 상담하는 24시간 전화 #7119도 운영합니다.",
      vi: "Cơ quan chính thức của số 119 (cứu hỏa / cấp cứu). Cũng vận hành #7119 — đường dây 24 giờ khi bạn không chắc có phải cấp cứu.",
      ne: "119 (आगो / एम्बुलेन्स) को आधिकारिक निकाय। आपतकाल हो/होइन थाहा नभए #7119 (२४ घण्टा) मा सोध्न सकिन्छ।",
    },
  },
  {
    id: "isa",
    title: "Immigration Services Agency of Japan",
    titleJa: "出入国在留管理庁",
    organization: "Ministry of Justice",
    url: "https://www.moj.go.jp/isa/",
    categories: ["consultation"],
    note: {
      en: "The official authority for residence cards, visas, and status of residence — the only place to confirm any immigration procedure.",
      ja: "在留カードや ビザの 公式の 役所です。在留の 手続きは、かならず ここで かくにん します。",
      zh: "在留卡、签证和在留资格的官方机构——任何入管手续都应在这里确认。",
      ko: "재류카드, 비자, 체류자격의 공식 기관 — 모든 출입국 절차는 반드시 여기서 확인해야 합니다.",
      vi: "Cơ quan chính thức về thẻ cư trú, visa và tư cách lưu trú — nơi duy nhất để xác nhận mọi thủ tục xuất nhập cảnh.",
      ne: "रेसिडेन्स कार्ड, भिसा र बसोबास स्थितिको आधिकारिक निकाय — अध्यागमन प्रक्रिया यहीं पुष्टि गर्नुपर्छ।",
    },
  },
  {
    id: "fresc",
    title: "FRESC — Foreign Residents Support Center",
    titleJa: "外国人在留支援センター（FRESC）",
    organization: "Ministry of Justice (Yotsuya, Tokyo)",
    url: "https://www.moj.go.jp/isa/support/fresc/fresc01.html",
    categories: ["consultation", "housing"],
    note: {
      en: "National support desks — immigration, work, legal, human rights — gathered in one building near Shinjuku, with interpretation available.",
      ja: "国の 相談窓口が 一つの ビルに あつまっています（四ツ谷）。ビザ・仕事・法律の ことを、通訳つきで 相談できます。",
      zh: "国家级支援窗口（签证、劳动、法律、人权）集中在新宿附近的一栋楼里，提供翻译。",
      ko: "비자·노동·법률·인권 등 국가 지원 창구가 신주쿠 근처 한 건물에 모여 있으며, 통역이 제공됩니다.",
      vi: "Các quầy hỗ trợ quốc gia — cư trú, lao động, pháp lý, nhân quyền — tập trung trong một tòa nhà gần Shinjuku, có phiên dịch.",
      ne: "अध्यागमन, काम, कानुन, मानव अधिकारका राष्ट्रिय सहायता डेस्कहरू Shinjuku नजिक एउटै भवनमा, दोभाषेसहित।",
    },
  },
  {
    id: "nta",
    title: "National Tax Agency",
    titleJa: "国税庁",
    organization: "National Tax Agency",
    url: "https://www.nta.go.jp/",
    localizedUrls: {
      en: "https://www.nta.go.jp/english/",
    },
    categories: ["taxes"],
    note: {
      en: "The official authority for national taxes — income tax, filing, and English-language tax guides.",
      ja: "国の 税金の 公式の 役所です。所得税や 確定申告の 情報が あります。",
      zh: "国税的官方机构——所得税、报税手续及英文税务指南。",
      ko: "국세의 공식 기관 — 소득세, 신고 절차, 영어 세금 가이드를 제공합니다.",
      vi: "Cơ quan chính thức về thuế quốc gia — thuế thu nhập, kê khai thuế và hướng dẫn bằng tiếng Anh.",
      ne: "राष्ट्रिय करको आधिकारिक निकाय — आयकर, कर विवरण र अंग्रेजी गाइड।",
    },
  },
  {
    id: "nenkin",
    title: "Japan Pension Service",
    titleJa: "日本年金機構",
    organization: "Japan Pension Service",
    url: "https://www.nenkin.go.jp/",
    localizedUrls: {
      en: "https://www.nenkin.go.jp/international/",
    },
    categories: ["taxes"],
    note: {
      en: "The official body for national pension enrollment, payments, and exemptions — with an international section in English.",
      ja: "年金の 公式の 事務所です。年金に 入る・はらう・へらす 手続きが わかります。",
      zh: "国民年金加入、缴纳和减免手续的官方机构——设有英文国际专页。",
      ko: "국민연금 가입, 납부, 면제 절차의 공식 기관 — 영어 국제 섹션이 있습니다.",
      vi: "Cơ quan chính thức về đăng ký, đóng và miễn giảm lương hưu quốc dân — có mục quốc tế bằng tiếng Anh.",
      ne: "राष्ट्रिय पेन्सन दर्ता, भुक्तानी र छुटको आधिकारिक निकाय — अंग्रेजीमा अन्तर्राष्ट्रिय खण्ड छ।",
    },
  },
  {
    id: "tokyo-opendata",
    title: "Tokyo Open Data Catalog",
    titleJa: "東京都オープンデータカタログ",
    organization: "Tokyo Metropolitan Government",
    url: "https://portal.data.metro.tokyo.lg.jp/",
    categories: ["consultation", "disaster"],
    note: {
      en: "Public datasets (facilities, consultation desks, disaster info) that MINFO plans to connect for ward-by-ward expansion across Tokyo.",
      ja: "東京都の 公開データです。MINFOは、これから この データと つながる 予定です。",
      zh: "东京都的公开数据目录（设施、咨询窗口、防灾信息）——MINFO 计划接入这些数据以扩展至各区。",
      ko: "도쿄도의 공공 데이터 카탈로그 — MINFO가 도쿄 전역 확장을 위해 연결할 예정인 데이터입니다.",
      vi: "Danh mục dữ liệu mở của Tokyo (cơ sở, quầy tư vấn, thông tin thiên tai) — MINFO dự định kết nối để mở rộng ra các quận.",
      ne: "टोकियोको खुला डाटा क्याटलग — MINFO ले टोकियोभर विस्तारका लागि जोड्ने योजना गरेको डाटा।",
    },
  },
];

export const SOURCE_MAP: Record<string, Source> = Object.fromEntries(
  SOURCES.map((s) => [s.id, s])
);

export function getSources(ids: string[]): Source[] {
  return ids.map((id) => SOURCE_MAP[id]).filter(Boolean);
}
