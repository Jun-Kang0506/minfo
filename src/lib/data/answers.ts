import type { AnswerTemplate, Localized, LocalizedAnswerContent } from "../types";
import { getAnswerContent } from "../../i18n/content";

/** Stable answer metadata. Localized display content lives in src/content. */
const ANSWER_METADATA: Omit<AnswerTemplate, "content">[] = [
  {
    "id": "hospital",
    "categoryId": "hospitals",
    "safetyLevel": "caution",
    "keywords": [
      "doctor",
      "hospital",
      "clinic",
      "sick",
      "medical",
      "medicine",
      "fever",
      "dentist",
      "病院",
      "医者",
      "医院",
      "看病",
      "医生",
      "병원",
      "의사",
      "아파요",
      "bệnh viện",
      "bác sĩ",
      "khám bệnh",
      "अस्पताल",
      "डाक्टर",
      "बिरामी"
    ],
    "sourceIds": [
      "iryou-net",
      "tabunka-plaza",
      "shinjuku-foreign"
    ]
  },
  {
    "id": "insurance",
    "categoryId": "hospitals",
    "safetyLevel": "caution",
    "keywords": [
      "insurance",
      "health insurance",
      "nhi",
      "premium",
      "保険",
      "国民健康保険",
      "保险",
      "健康保险",
      "건강보험",
      "보험",
      "bảo hiểm",
      "बीमा"
    ],
    "sourceIds": [
      "shinjuku-foreign",
      "shinjuku-city",
      "tabunka-plaza"
    ]
  },
  {
    "id": "garbage",
    "categoryId": "garbage",
    "keywords": [
      "garbage",
      "trash",
      "waste",
      "recycle",
      "rubbish",
      "dispose",
      "sort garbage",
      "garbage sorting",
      "ごみ",
      "ゴミ",
      "分別",
      "垃圾",
      "垃圾分类",
      "쓰레기",
      "분리수거",
      "rác",
      "phân loại rác",
      "फोहोर"
    ],
    "sourceIds": [
      "shinjuku-garbage",
      "shinjuku-foreign"
    ]
  },
  {
    "id": "earthquake",
    "categoryId": "disaster",
    "safetyLevel": "caution",
    "keywords": [
      "earthquake",
      "disaster",
      "typhoon",
      "evacuation",
      "evacuate",
      "emergency bag",
      "地震",
      "災害",
      "防災",
      "避難",
      "台風",
      "防灾",
      "台风",
      "避难",
      "지진",
      "재난",
      "태풍",
      "피난",
      "방재",
      "động đất",
      "thiên tai",
      "bão",
      "sơ tán",
      "भूकम्प",
      "विपद्",
      "आँधी"
    ],
    "sourceIds": [
      "tokyo-bousai",
      "shinjuku-foreign",
      "tokyo-opendata"
    ]
  },
  {
    "id": "japanese-learning",
    "categoryId": "japanese",
    "keywords": [
      "learn japanese",
      "japanese class",
      "study japanese",
      "language class",
      "kanji",
      "日本語教室",
      "日本語を 勉強",
      "日本語を勉強",
      "学日语",
      "日语教室",
      "日语课",
      "일본어 교실",
      "일본어 배우",
      "học tiếng nhật",
      "lớp tiếng nhật",
      "जापानी भाषा",
      "जापानी सिक्न"
    ],
    "sourceIds": [
      "regasu-japanese-classes"
    ]
  },
  {
    "id": "consultation",
    "categoryId": "consultation",
    "keywords": [
      "consultation",
      "help",
      "advice",
      "counter",
      "city office",
      "ward office",
      "support",
      "english",
      "in english",
      "interpreter",
      "translator",
      "translation",
      "相談",
      "窓口",
      "通訳",
      "翻訳",
      "咨询",
      "翻译",
      "상담",
      "통역",
      "tư vấn",
      "phiên dịch",
      "परामर्श",
      "दोभाषे",
      "सल्लाह"
    ],
    "sourceIds": [
      "tabunka-plaza",
      "fresc",
      "shinjuku-foreign"
    ]
  },
  {
    "id": "tax",
    "categoryId": "taxes",
    "safetyLevel": "caution",
    "keywords": [
      "tax",
      "taxes",
      "pension",
      "nenkin",
      "notice",
      "bill",
      "payment",
      "resident tax",
      "税金",
      "年金",
      "住民税",
      "納税",
      "税务",
      "纳税",
      "养老金",
      "세금",
      "주민세",
      "연금",
      "thuế",
      "lương hưu",
      "कर",
      "पेन्सन"
    ],
    "sourceIds": [
      "nta",
      "shinjuku-city",
      "nenkin"
    ]
  },
  {
    "id": "tax-estimate",
    "categoryId": "taxes",
    "safetyLevel": "caution",
    "keywords": [
      "tax calculation",
      "tax estimate",
      "resident tax calculation",
      "住民税 計算",
      "住民税 シミュレーション",
      "居民税 试算",
      "주민세 계산",
      "tính thuế cư trú",
      "निवासी कर गणना"
    ],
    "sourceIds": [
      "shinjuku-resident-tax-simulator"
    ]
  },
  {
    "id": "housing",
    "categoryId": "housing",
    "safetyLevel": "caution",
    "keywords": [
      "housing",
      "apartment",
      "rent",
      "landlord",
      "guarantor",
      "deposit",
      "lease",
      "contract",
      "moving",
      "move in",
      "move out",
      "moving house",
      "家",
      "賃貸",
      "引っ越し",
      "引越し",
      "敷金",
      "礼金",
      "搬家",
      "租房",
      "房子",
      "이사",
      "월세",
      "임대",
      "thuê nhà",
      "chuyển nhà",
      "घर भाडा",
      "घर सर्ने"
    ],
    "sourceIds": [
      "tokyo-metro",
      "tabunka-plaza",
      "fresc"
    ]
  },
  {
    "id": "residence-card",
    "categoryId": "consultation",
    "safetyLevel": "caution",
    "keywords": [
      "residence card",
      "zairyu",
      "visa",
      "immigration",
      "status of residence",
      "lost card",
      "lost residence card",
      "lost my residence card",
      "在留カード",
      "ビザ",
      "在留卡",
      "签证",
      "재류카드",
      "비자",
      "thẻ cư trú",
      "रेसिडेन्स कार्ड",
      "भिसा"
    ],
    "sourceIds": [
      "isa",
      "fresc",
      "shinjuku-foreign"
    ]
  },
  {
    "id": "police",
    "categoryId": "emergency",
    "safetyLevel": "emergency",
    "keywords": [
      "unsafe",
      "danger",
      "police",
      "crime",
      "theft",
      "stolen",
      "stalker",
      "harassment",
      "violence",
      "scared",
      "警察",
      "危ない",
      "危険",
      "怖い",
      "泥棒",
      "危险",
      "不安全",
      "被偷",
      "被盗",
      "경찰",
      "위험",
      "도둑",
      "cảnh sát",
      "nguy hiểm",
      "trộm",
      "प्रहरी",
      "खतरा",
      "चोरी",
      "असुरक्षित"
    ],
    "sourceIds": [
      "tokyo-metro",
      "fresc",
      "tabunka-plaza"
    ]
  },
  {
    "id": "ambulance",
    "categoryId": "emergency",
    "safetyLevel": "emergency",
    "keywords": [
      "ambulance",
      "119",
      "emergency",
      "injured",
      "bleeding",
      "unconscious",
      "heart",
      "breathing",
      "救急車",
      "救急",
      "救护车",
      "急救",
      "구급차",
      "응급",
      "xe cứu thương",
      "cấp cứu",
      "cap cuu",
      "एम्बुलेन्स",
      "आपतकालीन"
    ],
    "sourceIds": [
      "tokyo-fire",
      "iryou-net"
    ]
  },
  {
    "id": "easy-japanese",
    "categoryId": "japanese",
    "keywords": [
      "easy japanese",
      "yasashii",
      "simple japanese",
      "explain simply",
      "やさしい日本語",
      "简明日语",
      "쉬운 일본어",
      "tiếng nhật đơn giản",
      "सजिलो जापानी"
    ],
    "sourceIds": [
      "tabunka-plaza",
      "tokyo-metro"
    ]
  },
  {
    "id": "bank-account",
    "categoryId": "consultation",
    "safetyLevel": "caution",
    "keywords": [
      "bank",
      "bank account",
      "open an account",
      "banking",
      "atm",
      "銀行",
      "口座",
      "银行",
      "开户",
      "账户",
      "은행",
      "계좌",
      "ngân hàng",
      "tài khoản",
      "बैंक",
      "खाता"
    ],
    "sourceIds": [
      "shinjuku-foreign",
      "tabunka-plaza",
      "fresc"
    ]
  },
  {
    "id": "lost-wallet",
    "categoryId": "consultation",
    "safetyLevel": "caution",
    "keywords": [
      "lost wallet",
      "wallet",
      "lost my wallet",
      "lost and found",
      "dropped my",
      "財布",
      "落とした",
      "落としました",
      "钱包",
      "丢了",
      "지갑",
      "잃어버렸",
      "mất ví",
      "ví tiền",
      "पर्स",
      "हरायो"
    ],
    "sourceIds": [
      "shinjuku-foreign",
      "tabunka-plaza"
    ]
  },
  {
    "id": "city-office-letter",
    "categoryId": "consultation",
    "safetyLevel": "caution",
    "keywords": [
      "letter",
      "got a letter",
      "received a letter",
      "letter from",
      "document from",
      "envelope",
      "official mail",
      "手紙",
      "書類が 来た",
      "書類が来た",
      "通知が来た",
      "信件",
      "收到通知",
      "看不懂的信",
      "편지",
      "통지서",
      "서류가 왔",
      "thư",
      "giấy báo",
      "nhận được thư",
      "चिठी",
      "कागज आयो"
    ],
    "sourceIds": [
      "tabunka-plaza",
      "shinjuku-foreign",
      "shinjuku-city"
    ]
  },
  {
    "id": "moving-registration",
    "categoryId": "housing",
    "safetyLevel": "caution",
    "keywords": [
      "moving registration",
      "change address",
      "moved",
      "引っ越し",
      "住所変更",
      "搬家登记",
      "地址变更",
      "이사 신고",
      "주소 변경",
      "đăng ký chuyển nhà",
      "đổi địa chỉ",
      "बसाइँसराइ",
      "ठेगाना परिवर्तन"
    ],
    "sourceIds": [
      "shinjuku-city",
      "shinjuku-foreign"
    ]
  },
  {
    "id": "school-enrollment",
    "categoryId": "schools-children",
    "safetyLevel": "caution",
    "keywords": [
      "school enrollment",
      "elementary school",
      "junior high school",
      "入学",
      "小学校",
      "中学校",
      "入学申请",
      "小学",
      "初中",
      "학교 입학",
      "초등학교",
      "중학교",
      "nhập học",
      "tiểu học",
      "trung học cơ sở",
      "विद्यालय भर्ना"
    ],
    "sourceIds": [
      "shinjuku-city",
      "shinjuku-foreign"
    ]
  },
  {
    "id": "childcare-application",
    "categoryId": "schools-children",
    "safetyLevel": "caution",
    "keywords": [
      "childcare application",
      "nursery application",
      "保育園申請",
      "認可保育園",
      "托儿申请",
      "保育园申请",
      "보육 신청",
      "어린이집 신청",
      "đơn nhà trẻ",
      "đăng ký giữ trẻ",
      "बाल हेरचाह आवेदन",
      "नर्सरी आवेदन"
    ],
    "sourceIds": [
      "shinjuku-city",
      "shinjuku-foreign"
    ]
  },
  {
    "id": "public-housing",
    "categoryId": "housing",
    "safetyLevel": "caution",
    "keywords": [
      "public housing",
      "ward housing",
      "公営住宅",
      "区営住宅",
      "公共住房",
      "공공 주택",
      "nhà ở công",
      "सार्वजनिक आवास"
    ],
    "sourceIds": [
      "shinjuku-public-housing-recruitment"
    ]
  },
  {
    "id": "typhoon-heavy-rain",
    "categoryId": "disaster",
    "safetyLevel": "caution",
    "keywords": [
      "typhoon",
      "heavy rain",
      "flood",
      "台風",
      "大雨",
      "水害",
      "台风",
      "暴雨",
      "태풍",
      "호우",
      "bão",
      "mưa lớn",
      "आँधी",
      "भारी वर्षा"
    ],
    "sourceIds": [
      "shinjuku-flood-guidance",
      "shinjuku-weather-information",
      "tokyo-bousai"
    ]
  },
  {
    "id": "japanese-class-beginner",
    "categoryId": "japanese",
    "keywords": [
      "beginner japanese class",
      "初級 日本語",
      "日语 初学",
      "초급 일본어",
      "lớp tiếng nhật mới bắt đầu",
      "शुरुआती जापानी"
    ],
    "sourceIds": [
      "regasu-japanese-classes"
    ]
  },
  {
    "id": "japanese-class-evening",
    "categoryId": "japanese",
    "keywords": [
      "evening japanese class",
      "夜 日本語教室",
      "晚间 日语课",
      "저녁 일본어",
      "lớp tiếng nhật buổi tối",
      "साँझ जापानी"
    ],
    "sourceIds": [
      "regasu-japanese-classes"
    ]
  },
  {
    "id": "japanese-class-okubo",
    "categoryId": "japanese",
    "keywords": [
      "okubo japanese class",
      "大久保 日本語教室",
      "大久保 日语课",
      "오쿠보 일본어",
      "lớp tiếng nhật okubo",
      "okubo जापानी"
    ],
    "sourceIds": [
      "regasu-japanese-classes"
    ]
  },
  {
    "id": "halal-food",
    "categoryId": "food-prayer",
    "keywords": [
      "halal",
      "muslim friendly",
      "ハラール",
      "清真",
      "할랄",
      "halal",
      "हलाल"
    ],
    "sourceIds": [
      "tokyo-muslim-travelers-guide"
    ]
  },
  {
    "id": "prayer-facilities",
    "categoryId": "food-prayer",
    "keywords": [
      "prayer facility",
      "prayer room",
      "mosque",
      "礼拝施設",
      "祈祷",
      "礼拜",
      "기도",
      "cầu nguyện",
      "प्रार्थना"
    ],
    "sourceIds": [
      "tokyo-muslim-travelers-guide"
    ]
  }
];

export const ANSWER_TEMPLATES: AnswerTemplate[] = ANSWER_METADATA.map((template) => ({
  ...template,
  content: getAnswerContent(template.id),
}));

export const TEMPLATE_MAP = Object.fromEntries(
  ANSWER_TEMPLATES.map((t) => [t.id, t])
) as Record<string, AnswerTemplate>;

/** The no-match answer is localized alongside the topic templates. */
export const FALLBACK_CONTENT: Localized<LocalizedAnswerContent> = getAnswerContent("fallback");

export const FALLBACK_SOURCE_IDS = ["tabunka-plaza", "shinjuku-foreign", "fresc"];
