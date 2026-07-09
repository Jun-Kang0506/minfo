import type { OpenDataCandidate } from "../types";

/**
 * Tokyo Open Data Catalog — candidate datasets for MINFO.
 *
 * Research policy (honest by design):
 * - Every entry was located on catalog.data.metro.tokyo.lg.jp during a
 *   focused research pass (2026-07). Titles are the official catalog titles.
 * - NONE of these are fetched automatically today. MINFO's MVP runs on
 *   curated official/public sources; these are the records a future
 *   batch/API version would connect first.
 * - Where a specific dataset could not be confidently pinned down, we list
 *   the catalog category as a "search target" instead of inventing names.
 * - No structured open dataset exists (yet) for foreign-resident
 *   consultation desks — that content lives on ward web pages, which is
 *   exactly the gap MINFO's curated source records fill today.
 */
export const OPEN_DATA_CANDIDATES: OpenDataCandidate[] = [
  {
    id: "shinjuku-evacuation-sites",
    titleJa: "新宿区の指定緊急避難場所一覧",
    titleEn: "Shinjuku designated emergency evacuation sites",
    url: "https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000115",
    organization: "Shinjuku City",
    format: "CSV",
    updatePlan: "batch",
    kind: "dataset",
    note: {
      en: "Where to go in an earthquake or fire — the ward's official evacuation site list, ready to link to disaster answers.",
      ja: "地震や 火事の とき、どこに にげるか。新宿区の 公式の 避難場所の リストです。",
      zh: "地震或火灾时该去哪里避难——新宿区官方的紧急避难场所列表。",
      ko: "지진·화재 시 대피 장소 — 신주쿠구 공식 긴급 대피 장소 목록입니다.",
      vi: "Chạy đến đâu khi động đất hoặc hỏa hoạn — danh sách nơi sơ tán khẩn cấp chính thức của quận.",
      ne: "भूकम्प वा आगलागीमा कहाँ जाने — वडाको आधिकारिक आपतकालीन आश्रय सूची।",
    },
  },
  {
    id: "shinjuku-public-facilities",
    titleJa: "新宿区の公共施設情報",
    titleEn: "Shinjuku public facilities",
    url: "https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000113",
    organization: "Shinjuku City",
    format: "CSV",
    updatePlan: "batch",
    kind: "dataset",
    note: {
      en: "Ward facilities — offices, halls, libraries — as structured data. The base for “which desk do I go to?” answers.",
      ja: "区役所や 図書館などの 施設の データです。「どの 窓口に 行く？」の こたえに つかえます。",
      zh: "区役所、会馆、图书馆等设施的结构化数据——支撑「该去哪个窗口」类回答。",
      ko: "구청·회관·도서관 등 시설의 구조화 데이터 — '어느 창구로 가야 하나' 답변의 기반입니다.",
      vi: "Dữ liệu có cấu trúc về cơ sở công cộng của quận — nền cho câu trả lời 'tôi phải đến quầy nào?'.",
      ne: "वडाका सार्वजनिक सुविधाहरूको डाटा — 'कुन डेस्कमा जाने?' उत्तरको आधार।",
    },
  },
  {
    id: "shinjuku-garbage-sorting",
    titleJa: "新宿区のゴミの分別方法一覧",
    titleEn: "Shinjuku garbage sorting methods",
    url: "https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000129",
    organization: "Shinjuku City",
    format: "CSV",
    updatePlan: "batch",
    kind: "dataset",
    note: {
      en: "Garbage separation rules as data — one of the most-asked daily-life questions in every language.",
      ja: "ごみの 分け方の データです。生活で いちばん 多い 質問の 一つです。",
      zh: "垃圾分类规则的数据——各种语言中最常被问到的生活问题之一。",
      ko: "쓰레기 분리 규칙 데이터 — 모든 언어에서 가장 많이 받는 생활 질문 중 하나입니다.",
      vi: "Quy tắc phân loại rác dạng dữ liệu — một trong những câu hỏi đời sống được hỏi nhiều nhất.",
      ne: "फोहोर छुट्याउने नियमको डाटा — सबैभन्दा धेरै सोधिने दैनिक प्रश्नमध्ये एक।",
    },
  },
  {
    id: "tokyo-evacuation-shelters",
    titleJa: "東京都防災マップ 避難所・避難場所一覧データ",
    titleEn: "Tokyo disaster-prevention map — shelter list",
    url: "https://catalog.data.metro.tokyo.lg.jp/dataset/t000003d0000000093",
    organization: "Tokyo Metropolitan Government",
    format: "CSV",
    updatePlan: "batch",
    kind: "dataset",
    note: {
      en: "Tokyo-wide shelter list with accessibility flags — a cross-check for ward data and the base for expansion.",
      ja: "東京ぜんぶの 避難所の リストです。バリアフリーの 情報も あります。区の データの かくにんにも つかえます。",
      zh: "覆盖全东京的避难所列表（含无障碍信息）——可交叉核对区级数据，也是扩展的基础。",
      ko: "도쿄 전역 대피소 목록(배리어프리 정보 포함) — 구 데이터 교차 확인과 확장의 기반입니다.",
      vi: "Danh sách nơi trú ẩn toàn Tokyo (kèm thông tin tiếp cận) — để đối chiếu dữ liệu quận và mở rộng.",
      ne: "टोकियोभरका आश्रयस्थलको सूची — वडा डाटा जाँच्न र विस्तारका लागि आधार।",
    },
  },
  {
    id: "tokyo-flood-forecast",
    titleJa: "浸水予想区域図",
    titleEn: "Flood inundation forecast maps",
    url: "https://catalog.data.metro.tokyo.lg.jp/dataset/t000014d0000000029",
    organization: "Tokyo Metropolitan Government",
    format: "PDF / CSV",
    updatePlan: "batch",
    kind: "dataset",
    note: {
      en: "Official flood-risk maps for Tokyo — grounding for disaster-preparedness answers around Shinjuku / Okubo.",
      ja: "東京都の 公式の 水害リスクの 地図です。新宿・大久保の 防災の こたえに つかえます。",
      zh: "东京都官方洪水风险地图——支撑新宿·大久保周边的防灾回答。",
      ko: "도쿄도 공식 침수 위험 지도 — 신주쿠·오쿠보 주변 방재 답변의 근거입니다.",
      vi: "Bản đồ rủi ro ngập lụt chính thức của Tokyo — căn cứ cho câu trả lời phòng chống thiên tai quanh Shinjuku / Okubo.",
      ne: "टोकियोको आधिकारिक बाढी जोखिम नक्सा — विपद् तयारी उत्तरको आधार।",
    },
  },
  {
    id: "tokyo-medical-ledger",
    titleJa: "医療機関等台帳",
    titleEn: "Medical institutions ledger",
    url: "https://catalog.data.metro.tokyo.lg.jp/dataset/t000055d0000000612",
    organization: "Tokyo Metropolitan Government",
    format: "CSV",
    updatePlan: "batch",
    kind: "dataset",
    note: {
      en: "A structured ledger of medical institutions in a standardized open-data schema — the base for “find care near me”.",
      ja: "病院や クリニックの データです。国の 標準の かたちで 公開されています。「近くの 病院」の こたえに つかえます。",
      zh: "医疗机构的结构化台账（全国标准开放数据格式）——支撑「附近医院」类回答。",
      ko: "표준 오픈데이터 스키마의 의료기관 대장 — '근처 병원 찾기'의 기반입니다.",
      vi: "Sổ bộ cơ sở y tế theo chuẩn dữ liệu mở — nền cho tính năng 'tìm nơi khám gần tôi'.",
      ne: "मानक खुला डाटा ढाँचामा स्वास्थ्य संस्थाको सूची — 'नजिकको अस्पताल' का लागि आधार।",
    },
  },
  {
    id: "tokyo-foreign-population",
    titleJa: "外国人人口（国籍別）",
    titleEn: "Foreign population by nationality",
    url: "https://catalog.data.metro.tokyo.lg.jp/dataset/t000003d2000000998",
    organization: "Tokyo Metropolitan Government",
    format: "CSV",
    updatePlan: "batch",
    kind: "dataset",
    note: {
      en: "Foreign population by nationality — evidence for which languages MINFO should prioritize, ward by ward.",
      ja: "国せきごとの 外国人の 人口です。どの ことばを 先に 出すか、データで きめられます。",
      zh: "按国籍统计的外国人口——为 MINFO 应优先支持哪些语言提供依据。",
      ko: "국적별 외국인 인구 — MINFO가 어떤 언어를 우선할지 정하는 근거입니다.",
      vi: "Dân số người nước ngoài theo quốc tịch — căn cứ để MINFO ưu tiên ngôn ngữ nào theo từng quận.",
      ne: "राष्ट्रियताअनुसार विदेशी जनसंख्या — MINFO ले कुन भाषालाई प्राथमिकता दिने भन्ने प्रमाण।",
    },
  },
  {
    id: "tokyo-medical-welfare-group",
    titleJa: "医療・福祉（カタログ分類）",
    titleEn: "Medical & welfare — catalog category",
    url: "https://catalog.data.metro.tokyo.lg.jp/group/c005",
    organization: "Tokyo Metropolitan Government",
    updatePlan: "batch",
    kind: "searchTarget",
    note: {
      en: "The catalog's medical & welfare category — the search path for per-ward clinic and welfare datasets, which vary in naming.",
      ja: "カタログの「医療・福祉」の ページです。区ごとの データは、ここから さがします。",
      zh: "目录中的「医疗·福祉」分类——检索各区诊所和福祉数据的入口（各区命名不一）。",
      ko: "카탈로그의 '의료·복지' 카테고리 — 구별 의료·복지 데이터를 찾는 검색 경로입니다.",
      vi: "Nhóm 'y tế & phúc lợi' trong danh mục — đường tìm dữ liệu phòng khám và phúc lợi theo từng quận.",
      ne: "क्याटलगको 'चिकित्सा तथा कल्याण' समूह — वडाअनुसार डाटा खोज्ने बाटो।",
    },
  },
];
