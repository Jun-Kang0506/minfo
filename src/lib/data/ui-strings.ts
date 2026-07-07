import type { Localized } from "../types";

export interface UIStrings {
  nav: { ask: string; categories: string; sources: string; why: string };
  emergencyBar: string;
  hero: {
    kicker: string;
    headline: string;
    sub: string;
    ctaAsk: string;
    ctaExplore: string;
    trustSources: string;
    trustLanguages: string;
    trustPilot: string;
  };
  categories: { title: string; sub: string; tryLabel: string };
  ask: {
    title: string;
    sub: string;
    placeholder: string;
    send: string;
    examples: string;
    thinking: string;
    emptyHint: string;
  };
  answer: {
    emergency: string;
    caution: string;
    steps: string;
    sources: string;
    lowConfidence: string;
    disclaimer: string;
  };
  feedback: {
    question: string;
    helpful: string;
    confusing: string;
    wrong: string;
    language: string;
    thanks: string;
  };
}

const en: UIStrings = {
  nav: { ask: "Ask", categories: "Categories", sources: "Sources", why: "Why Shinjuku?" },
  emergencyBar: "Emergency? 119 Fire / Ambulance · 110 Police — free, 24h, interpretation available",
  hero: {
    kicker: "公式情報にもとづく案内 — grounded in official public sources",
    headline: "Reliable life information, in your language.",
    sub: "MINFO helps foreign-origin residents navigate hospitals, insurance, garbage rules, disasters, and daily life in Japan — explained simply, always with official sources.",
    ctaAsk: "Ask MINFO",
    ctaExplore: "Explore categories",
    trustSources: "Every answer shows its official sources",
    trustLanguages: "6 languages incl. やさしい日本語",
    trustPilot: "Starting from Shinjuku / Okubo — expandable to Tokyo",
  },
  categories: {
    title: "What do you need help with?",
    sub: "Eight areas of daily life, grounded in official information.",
    tryLabel: "Try asking",
  },
  ask: {
    title: "Ask MINFO",
    sub: "Type a question or tap an example. Answers come with official sources.",
    placeholder: "Ask about daily life in Shinjuku…",
    send: "Ask",
    examples: "Example questions",
    thinking: "Checking trusted sources…",
    emptyHint: "Your answer will appear here, with sources.",
  },
  answer: {
    emergency: "Emergency",
    caution: "Please note",
    steps: "Recommended next steps",
    sources: "Official & public sources",
    lowConfidence: "MINFO could not fully confirm this — please check with an official office.",
    disclaimer: "MINFO is a prototype navigator, not a government service. Always confirm important matters with official offices.",
  },
  feedback: {
    question: "Was this helpful?",
    helpful: "Helpful",
    confusing: "Confusing",
    wrong: "Wrong info",
    language: "Need my language",
    thanks: "Thank you — your feedback helps improve MINFO.",
  },
};

const ja: UIStrings = {
  nav: { ask: "質問する", categories: "カテゴリー", sources: "情報のもと", why: "なぜ新宿？" },
  emergencyBar: "緊急のとき：火事・救急車は 119 ／ 警察は 110（無料・24時間・通訳あり）",
  hero: {
    kicker: "公式情報にもとづく案内",
    headline: "あなたの ことばで、生活の 情報を。",
    sub: "MINFOは、病院・保険・ごみ・防災など、日本の 生活の 情報を やさしく 案内します。こたえには、いつも 公式の 情報のもとが ついています。",
    ctaAsk: "MINFOに 質問する",
    ctaExplore: "カテゴリーを 見る",
    trustSources: "こたえには 公式の 情報のもとが つきます",
    trustLanguages: "6つの ことば（やさしい日本語も あります）",
    trustPilot: "新宿・大久保から 始めます",
  },
  categories: {
    title: "なにに こまっていますか？",
    sub: "生活の 8つの 分野を、公式情報で 案内します。",
    tryLabel: "質問の れい",
  },
  ask: {
    title: "MINFOに 質問する",
    sub: "質問を 書くか、下の れいを おしてください。",
    placeholder: "新宿の 生活の ことを 聞いてください…",
    send: "質問する",
    examples: "質問の れい",
    thinking: "公式の 情報を しらべています…",
    emptyHint: "ここに こたえが 出ます。",
  },
  answer: {
    emergency: "緊急",
    caution: "ちゅうい",
    steps: "つぎに すること",
    sources: "公式の 情報のもと",
    lowConfidence: "たしかな こたえが できません。役所で かくにん してください。",
    disclaimer: "MINFOは 試作品（プロトタイプ）です。役所の サービスでは ありません。たいせつな ことは 役所で かくにん してください。",
  },
  feedback: {
    question: "この こたえは 役に立ちましたか？",
    helpful: "役に立った",
    confusing: "わかりにくい",
    wrong: "まちがっている",
    language: "自分の ことばが ほしい",
    thanks: "ありがとうございます。MINFOを よくするために つかいます。",
  },
};

const zh: UIStrings = {
  nav: { ask: "提问", categories: "分类", sources: "信息来源", why: "为什么是新宿？" },
  emergencyBar: "紧急情况：火警·救护车 119 ／ 警察 110（免费·24小时·有翻译）",
  hero: {
    kicker: "基于官方信息的生活向导",
    headline: "用您的语言，获取可靠的生活信息。",
    sub: "MINFO 帮助外国居民了解日本的医院、保险、垃圾分类、防灾等生活信息——解释简单，始终附有官方来源。",
    ctaAsk: "向 MINFO 提问",
    ctaExplore: "浏览分类",
    trustSources: "每个回答都显示官方来源",
    trustLanguages: "支持 6 种语言（含简明日语）",
    trustPilot: "从新宿·大久保开始，可扩展至全东京",
  },
  categories: {
    title: "您需要哪方面的帮助？",
    sub: "八大生活领域，全部基于官方信息。",
    tryLabel: "试着问",
  },
  ask: {
    title: "向 MINFO 提问",
    sub: "输入问题或点击示例，回答附带官方来源。",
    placeholder: "问问新宿的生活问题…",
    send: "提问",
    examples: "示例问题",
    thinking: "正在查询可信来源…",
    emptyHint: "回答会显示在这里，并附来源。",
  },
  answer: {
    emergency: "紧急",
    caution: "请注意",
    steps: "建议的下一步",
    sources: "官方·公共来源",
    lowConfidence: "MINFO 无法完全确认——请向官方机构核实。",
    disclaimer: "MINFO 是原型产品，不是政府服务。重要事项请务必向官方机构确认。",
  },
  feedback: {
    question: "这个回答有帮助吗？",
    helpful: "有帮助",
    confusing: "看不懂",
    wrong: "信息有误",
    language: "需要我的语言",
    thanks: "谢谢——您的反馈会帮助改进 MINFO。",
  },
};

const ko: UIStrings = {
  nav: { ask: "질문하기", categories: "카테고리", sources: "정보 출처", why: "왜 신주쿠?" },
  emergencyBar: "긴급 상황: 화재·구급차 119 ／ 경찰 110 (무료·24시간·통역 지원)",
  hero: {
    kicker: "공식 정보에 기반한 생활 안내",
    headline: "당신의 언어로, 믿을 수 있는 생활 정보를.",
    sub: "MINFO는 병원, 보험, 쓰레기 분리, 재난 대비 등 일본 생활 정보를 쉽게 안내합니다 — 항상 공식 출처와 함께.",
    ctaAsk: "MINFO에 질문하기",
    ctaExplore: "카테고리 보기",
    trustSources: "모든 답변에 공식 출처 표시",
    trustLanguages: "6개 언어 지원 (쉬운 일본어 포함)",
    trustPilot: "신주쿠·오쿠보에서 시작, 도쿄 전역으로 확장 가능",
  },
  categories: {
    title: "어떤 도움이 필요하세요?",
    sub: "생활의 8개 분야를 공식 정보로 안내합니다.",
    tryLabel: "이렇게 물어보세요",
  },
  ask: {
    title: "MINFO에 질문하기",
    sub: "질문을 입력하거나 예시를 눌러보세요. 답변에는 공식 출처가 붙습니다.",
    placeholder: "신주쿠 생활에 대해 물어보세요…",
    send: "질문",
    examples: "예시 질문",
    thinking: "신뢰할 수 있는 출처를 확인 중…",
    emptyHint: "답변이 출처와 함께 여기에 표시됩니다.",
  },
  answer: {
    emergency: "긴급",
    caution: "유의하세요",
    steps: "권장 다음 단계",
    sources: "공식·공공 출처",
    lowConfidence: "MINFO가 완전히 확인하지 못했습니다 — 공식 기관에 확인하세요.",
    disclaimer: "MINFO는 프로토타입이며 정부 서비스가 아닙니다. 중요한 사항은 반드시 공식 기관에 확인하세요.",
  },
  feedback: {
    question: "이 답변이 도움이 되었나요?",
    helpful: "도움됨",
    confusing: "이해 어려움",
    wrong: "잘못된 정보",
    language: "내 언어 필요",
    thanks: "감사합니다 — 피드백은 MINFO 개선에 사용됩니다.",
  },
};

const vi: UIStrings = {
  nav: { ask: "Hỏi", categories: "Danh mục", sources: "Nguồn tin", why: "Vì sao Shinjuku?" },
  emergencyBar: "Khẩn cấp? 119 Cứu hỏa / Cấp cứu · 110 Cảnh sát — miễn phí, 24h, có phiên dịch",
  hero: {
    kicker: "Hướng dẫn dựa trên thông tin chính thức",
    headline: "Thông tin đời sống đáng tin cậy, bằng ngôn ngữ của bạn.",
    sub: "MINFO giúp cư dân gốc nước ngoài tìm hiểu bệnh viện, bảo hiểm, phân loại rác, phòng chống thiên tai và đời sống ở Nhật — giải thích đơn giản, luôn kèm nguồn chính thức.",
    ctaAsk: "Hỏi MINFO",
    ctaExplore: "Xem danh mục",
    trustSources: "Mọi câu trả lời đều kèm nguồn chính thức",
    trustLanguages: "6 ngôn ngữ, gồm tiếng Nhật đơn giản",
    trustPilot: "Bắt đầu từ Shinjuku / Okubo — mở rộng ra Tokyo",
  },
  categories: {
    title: "Bạn cần trợ giúp về điều gì?",
    sub: "Tám lĩnh vực đời sống, dựa trên thông tin chính thức.",
    tryLabel: "Thử hỏi",
  },
  ask: {
    title: "Hỏi MINFO",
    sub: "Gõ câu hỏi hoặc chạm vào ví dụ. Câu trả lời kèm nguồn chính thức.",
    placeholder: "Hỏi về đời sống ở Shinjuku…",
    send: "Hỏi",
    examples: "Câu hỏi mẫu",
    thinking: "Đang kiểm tra các nguồn đáng tin cậy…",
    emptyHint: "Câu trả lời sẽ hiện ở đây, kèm nguồn.",
  },
  answer: {
    emergency: "Khẩn cấp",
    caution: "Lưu ý",
    steps: "Các bước tiếp theo",
    sources: "Nguồn chính thức & công cộng",
    lowConfidence: "MINFO chưa thể xác nhận hoàn toàn — hãy kiểm tra với cơ quan chính thức.",
    disclaimer: "MINFO là bản thử nghiệm, không phải dịch vụ của chính phủ. Việc quan trọng hãy luôn xác nhận với cơ quan chính thức.",
  },
  feedback: {
    question: "Câu trả lời này có hữu ích không?",
    helpful: "Hữu ích",
    confusing: "Khó hiểu",
    wrong: "Sai thông tin",
    language: "Cần ngôn ngữ của tôi",
    thanks: "Cảm ơn bạn — phản hồi giúp MINFO tốt hơn.",
  },
};

const ne: UIStrings = {
  nav: { ask: "सोध्नुहोस्", categories: "विषयहरू", sources: "स्रोतहरू", why: "किन Shinjuku?" },
  emergencyBar: "आपतकाल? 119 आगो / एम्बुलेन्स · 110 प्रहरी — निःशुल्क, २४ घण्टा, दोभाषे उपलब्ध",
  hero: {
    kicker: "आधिकारिक जानकारीमा आधारित मार्गदर्शन",
    headline: "भरपर्दो जीवन जानकारी, तपाईंकै भाषामा।",
    sub: "MINFO ले विदेशी मूलका बासिन्दालाई अस्पताल, बीमा, फोहोर, विपद् र दैनिक जीवनका जानकारी सजिलो भाषामा दिन्छ — सधैं आधिकारिक स्रोतसहित।",
    ctaAsk: "MINFO लाई सोध्नुहोस्",
    ctaExplore: "विषयहरू हेर्नुहोस्",
    trustSources: "हरेक उत्तरमा आधिकारिक स्रोत देखिन्छ",
    trustLanguages: "६ भाषा (सजिलो जापानी सहित)",
    trustPilot: "Shinjuku / Okubo बाट सुरु — टोकियोभर विस्तार सम्भव",
  },
  categories: {
    title: "तपाईंलाई केमा सहयोग चाहिन्छ?",
    sub: "दैनिक जीवनका ८ क्षेत्र, आधिकारिक जानकारीमा आधारित।",
    tryLabel: "यसरी सोध्नुहोस्",
  },
  ask: {
    title: "MINFO लाई सोध्नुहोस्",
    sub: "प्रश्न लेख्नुहोस् वा उदाहरण थिच्नुहोस्। उत्तरसँगै आधिकारिक स्रोत आउँछ।",
    placeholder: "Shinjuku को दैनिक जीवनबारे सोध्नुहोस्…",
    send: "सोध्नुहोस्",
    examples: "उदाहरण प्रश्नहरू",
    thinking: "विश्वसनीय स्रोत जाँच्दै…",
    emptyHint: "उत्तर यहाँ स्रोतसहित देखिन्छ।",
  },
  answer: {
    emergency: "आपतकाल",
    caution: "ध्यान दिनुहोस्",
    steps: "अर्को कदम",
    sources: "आधिकारिक तथा सार्वजनिक स्रोत",
    lowConfidence: "MINFO ले पूर्ण पुष्टि गर्न सकेन — आधिकारिक कार्यालयमा बुझ्नुहोस्।",
    disclaimer: "MINFO प्रोटोटाइप हो, सरकारी सेवा होइन। महत्त्वपूर्ण कुरा सधैं आधिकारिक कार्यालयमा पुष्टि गर्नुहोस्।",
  },
  feedback: {
    question: "यो उत्तर उपयोगी थियो?",
    helpful: "उपयोगी",
    confusing: "अलमल्लमा पार्ने",
    wrong: "गलत जानकारी",
    language: "मेरो भाषा चाहियो",
    thanks: "धन्यवाद — तपाईंको सुझावले MINFO लाई राम्रो बनाउँछ।",
  },
};

export const UI_STRINGS: Localized<UIStrings> = { en, ja, zh, ko, vi, ne };
