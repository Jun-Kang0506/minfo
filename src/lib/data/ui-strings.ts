import type { Localized } from "../types";

interface RoadmapItem {
  title: string;
  body: string;
}

interface StoryBlock {
  title: string;
  body: string;
}

interface WhyMinfoCard {
  title: string;
  body: string;
}

export interface UIStrings {
  nav: { ask: string; categories: string; sources: string; whyMinfo: string; why: string };
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
    routeTitle: string;
    routeAria: string;
    routeNow: string;
    routeNext: string;
    routeGoal: string;
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
    aiBadge: string;
  };
  feedback: {
    question: string;
    helpful: string;
    confusing: string;
    wrong: string;
    language: string;
    thanks: string;
  };
  sources: {
    title: string;
    sub: string;
    roadmapTitle: string;
    roadmapBadge: string;
    roadmap: RoadmapItem[];
  };
  whyMinfo: {
    title: string;
    sub: string;
    cards: WhyMinfoCard[];
  };
  story: {
    title: string;
    sub: string;
    blocks: StoryBlock[];
    impactTitle: string;
    impact: string[];
  };
  footer: {
    tagline: string;
    meta: string;
    emergencyTitle: string;
    fire: string;
    police: string;
    freeNote: string;
  };
}

const en: UIStrings = {
  nav: { ask: "Ask", categories: "Categories", sources: "Sources", whyMinfo: "Why MINFO?", why: "Why Shinjuku?" },
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
    routeTitle: "Pilot route",
    routeAria: "Route map: starting at Shinjuku and Okubo, expanding to all of Tokyo",
    routeNow: "now",
    routeNext: "next",
    routeGoal: "All of Tokyo",
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
    aiBadge: "AI answer by Claude · sources verified locally",
  },
  feedback: {
    question: "Was this helpful?",
    helpful: "Helpful",
    confusing: "Confusing",
    wrong: "Wrong info",
    language: "Need my language",
    thanks: "Thank you — your feedback helps improve MINFO.",
  },
  sources: {
    title: "Built on official & public information",
    sub: "MINFO answers only from a curated set of official and public organizations — every answer links back to them.",
    roadmapTitle: "Open-data roadmap",
    roadmapBadge: "Future — not yet implemented",
    roadmap: [
      {
        title: "Tokyo Open Data Catalog connection",
        body: "Link answers to live public datasets (facilities, consultation desks, disaster info) instead of static entries.",
      },
      {
        title: "Ward-by-ward expansion",
        body: "The category + source structure is ward-agnostic: swap in each ward's official pages to cover all of Tokyo.",
      },
      {
        title: "Anonymized question trends",
        body: "Understand what information residents actually need — shared with wards as a public-interest signal, never as personal data.",
      },
    ],
  },
  whyMinfo: {
    title: "Why MINFO — not just search or AI chat?",
    sub: "MINFO is not trying to beat search engines or general AI at general knowledge. It does one local job well.",
    cards: [
      {
        title: "Search engines",
        body: "Give you many links — you still have to judge which page is official, current, and applies to Shinjuku.",
      },
      {
        title: "General AI chat",
        body: "Gives broad, general answers — helpful, but not grounded in your ward's offices, and it can guess.",
      },
      {
        title: "MINFO",
        body: "Local, source-grounded next steps in your language — official source cards on every answer, and 119/110 guidance that is always the same. A navigator to real offices, never a replacement for them.",
      },
    ],
  },
  story: {
    title: "Why Shinjuku / Okubo?",
    sub: "A civic-tech pilot for multilingual information access, designed to expand across Tokyo.",
    blocks: [
      {
        title: "The problem",
        body: "Official life information in Japan is reliable — but scattered across dozens of sites, written in dense administrative Japanese, and hard to act on. For residents navigating an unfamiliar system in a second language, even simple questions (\"which counter?\", \"which form?\") become barriers.",
      },
      {
        title: "The people",
        body: "Foreign-origin residents and multilingual communities: newly arrived residents, international students, workers, families — and the community supporters who help them. People facing language and information-access barriers, not a lack of ability.",
      },
      {
        title: "The approach",
        body: "MINFO is not a translation chatbot. It is a civic information navigator: it explains daily-life systems simply, in six languages including やさしい日本語, always shows its official sources, and guides people to the right real-world office — never replacing it.",
      },
      {
        title: "Pilot → expansion",
        body: "Shinjuku / Okubo is the pilot: one of Japan's most visibly multilingual neighborhoods, dense with students, workers, and families who need daily-life information. The same category + trusted-source structure can then roll out ward by ward across Tokyo.",
      },
    ],
    impactTitle: "What better information access changes",
    impact: [
      "Healthcare access in your own language",
      "Disaster preparedness that reaches everyone",
      "Garbage, tax, and housing rules made clear",
      "Consultation desks that people actually find",
    ],
  },
  footer: {
    tagline: "Multilingual Information Navigator for Foreign-Origin Residents",
    meta: "Hackathon prototype · 2026 · Shinjuku / Okubo pilot",
    emergencyTitle: "Emergency",
    fire: "Fire / Ambulance",
    police: "Police",
    freeNote: "Free · 24 hours · interpretation available",
  },
};

const ja: UIStrings = {
  nav: { ask: "質問する", categories: "カテゴリー", sources: "情報のもと", whyMinfo: "MINFOとは", why: "なぜ新宿？" },
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
    routeTitle: "パイロット路線",
    routeAria: "路線図：新宿と 大久保から 始めて、東京ぜんぶに ひろげます",
    routeNow: "いま",
    routeNext: "つぎ",
    routeGoal: "東京ぜんぶ",
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
    aiBadge: "Claudeの AIこたえ · 情報のもとは かくにん済み",
  },
  feedback: {
    question: "この こたえは 役に立ちましたか？",
    helpful: "役に立った",
    confusing: "わかりにくい",
    wrong: "まちがっている",
    language: "自分の ことばが ほしい",
    thanks: "ありがとうございます。MINFOを よくするために つかいます。",
  },
  sources: {
    title: "公式の 情報を つかっています",
    sub: "MINFOは、公式・公共の 情報だけを つかって こたえます。こたえには、いつも 情報のもとが ついています。",
    roadmapTitle: "これからの 計画（オープンデータ）",
    roadmapBadge: "これからの 計画です（まだ ありません）",
    roadmap: [
      {
        title: "東京都オープンデータとの 連携",
        body: "こたえを、東京都の 公開データ（施設・相談窓口・防災）と つなげます。",
      },
      {
        title: "区ごとの 拡大",
        body: "カテゴリーと 情報のもとの しくみは、どの区でも つかえます。区の 公式ページを 入れかえるだけです。",
      },
      {
        title: "質問の けいこう（匿名）",
        body: "みんなが なにに こまっているかを、個人が わからない かたちで 区に つたえます。",
      },
    ],
  },
  whyMinfo: {
    title: "検索や AIチャットと、なにが ちがう？",
    sub: "MINFOは、検索や AIより ものしりに なりたいのでは ありません。新宿の 生活案内という 一つの 仕事を します。",
    cards: [
      {
        title: "検索エンジン",
        body: "リンクが たくさん 出ます。どれが 公式か、新宿の 情報か、自分で さがす 必要が あります。",
      },
      {
        title: "ふつうの AIチャット",
        body: "ひろい こたえが 出ます。でも、新宿の 窓口の 情報とは かぎりません。まちがう ことも あります。",
      },
      {
        title: "MINFO",
        body: "あなたの ことばで、新宿の「つぎに すること」を 案内します。こたえには 公式の 情報のもとが つきます。119/110の 案内は、いつも 同じで 安全です。MINFOは 窓口への 案内役で、窓口の かわりでは ありません。",
      },
    ],
  },
  story: {
    title: "なぜ 新宿・大久保？",
    sub: "ことばの かべを なくす ための 市民テック。新宿から 東京ぜんぶへ。",
    blocks: [
      {
        title: "課題",
        body: "日本の 公式情報は 正しいです。でも、サイトが ばらばらで、ことばが むずかしいです。「どの窓口？」「どの書類？」が わからなくて、こまる人が 多いです。",
      },
      {
        title: "対象",
        body: "外国から 来た 住民の みなさんです。新しく 来た人、留学生、はたらく人、家族。そして、その人たちを たすける 地域の サポーター。できないのでは なく、ことばと 情報の かべが あるだけです。",
      },
      {
        title: "解決",
        body: "MINFOは 翻訳チャットボットでは ありません。生活の しくみを やさしく 説明して、公式の 情報のもとを 見せて、正しい 窓口に つなげる「案内役」です。窓口の かわりには なりません。",
      },
      {
        title: "展開",
        body: "新宿・大久保は、日本で いちばん いろいろな ことばが 聞こえる 町の ひとつです。まず ここから 始めて、同じ しくみで 東京の ほかの 区にも ひろげられます。",
      },
    ],
    impactTitle: "情報が とどくと、なにが かわる？",
    impact: [
      "自分の ことばで 病院に 行ける",
      "防災の 情報が みんなに とどく",
      "ごみ・税金・家の ルールが わかる",
      "相談窓口が 見つかる",
    ],
  },
  footer: {
    tagline: "外国から 来た 住民の ための 生活情報ナビ",
    meta: "ハッカソン試作品 · 2026 · 新宿・大久保",
    emergencyTitle: "緊急のとき",
    fire: "火事・救急車",
    police: "警察",
    freeNote: "無料・24時間・通訳あり",
  },
};

const zh: UIStrings = {
  nav: { ask: "提问", categories: "分类", sources: "信息来源", whyMinfo: "为什么用 MINFO", why: "为什么是新宿？" },
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
    routeTitle: "试点路线",
    routeAria: "路线图：从新宿和大久保出发，扩展至全东京",
    routeNow: "现在",
    routeNext: "下一步",
    routeGoal: "全东京",
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
    lowConfidence: "MINFO 无法完全确认——请向官方窗口确认。",
    disclaimer: "MINFO 是原型产品，不是政府服务。重要事项请务必向官方窗口确认。",
    aiBadge: "由 Claude 生成的 AI 回答 · 来源经本地核验",
  },
  feedback: {
    question: "这个回答有帮助吗？",
    helpful: "有帮助",
    confusing: "看不懂",
    wrong: "信息有误",
    language: "需要我的语言",
    thanks: "谢谢——您的反馈会帮助改进 MINFO。",
  },
  sources: {
    title: "基于官方与公共信息",
    sub: "MINFO 只使用经过筛选的官方和公共机构信息回答——每个回答都会注明来源。",
    roadmapTitle: "开放数据路线图",
    roadmapBadge: "未来计划——尚未实现",
    roadmap: [
      {
        title: "接入东京都开放数据目录",
        body: "让回答连接实时公共数据（设施、咨询窗口、防灾信息），而不是静态条目。",
      },
      {
        title: "逐区扩展",
        body: "「分类＋来源」的结构不依赖特定区：换成各区的官方页面，即可覆盖全东京。",
      },
      {
        title: "匿名问题趋势",
        body: "了解居民真正需要什么信息——以公共利益信号的形式与各区共享，绝不涉及个人数据。",
      },
    ],
  },
  whyMinfo: {
    title: "为什么用 MINFO，而不只是搜索或 AI 聊天？",
    sub: "MINFO 不打算在通用知识上超越搜索引擎或通用 AI，它只把一件本地的事做好。",
    cards: [
      {
        title: "搜索引擎",
        body: "给你很多链接——哪个是官方的、是否是最新的、适不适用于新宿，还得自己判断。",
      },
      {
        title: "通用 AI 聊天",
        body: "给出宽泛的一般性回答——有帮助，但不基于你所在区的窗口信息，还可能猜测。",
      },
      {
        title: "MINFO",
        body: "用你的语言给出本地的、有官方来源的下一步行动——每个回答附官方来源卡片，119/110 紧急指引始终一致。MINFO 是通往真实窗口的向导，绝不取代窗口。",
      },
    ],
  },
  story: {
    title: "为什么是新宿·大久保？",
    sub: "一个促进多语言信息可及性的公民科技试点，目标扩展至全东京。",
    blocks: [
      {
        title: "问题",
        body: "日本的官方生活信息可靠，但分散在几十个网站上，用语是生硬的行政日语。对于用第二语言摸索陌生制度的居民来说，连「去哪个窗口」「填哪张表」都是障碍。",
      },
      {
        title: "对象",
        body: "外国出身的居民和多语言社区：新来的居民、留学生、上班族、家庭——以及帮助他们的社区支援者。他们面对的是语言和信息获取的障碍，而不是能力问题。",
      },
      {
        title: "方法",
        body: "MINFO 不是翻译聊天机器人，而是公民信息向导：用包括简明日语在内的六种语言简单解释生活制度，始终展示官方来源，并把人引导到正确的实体窗口——绝不取代窗口。",
      },
      {
        title: "试点 → 扩展",
        body: "新宿·大久保是日本最具多语言特色的街区之一，聚集着需要生活信息的学生、上班族和家庭。同样的「分类＋可信来源」结构可以逐区推广到全东京。",
      },
    ],
    impactTitle: "更好的信息可及性会改变什么",
    impact: [
      "用自己的语言看病就医",
      "防灾信息人人可及",
      "垃圾、税金、住房规则一目了然",
      "咨询窗口真正被找到",
    ],
  },
  footer: {
    tagline: "面向外国居民的多语言生活信息导航",
    meta: "黑客松原型 · 2026 · 新宿·大久保试点",
    emergencyTitle: "紧急情况",
    fire: "火警·救护车",
    police: "警察",
    freeNote: "免费·24小时·有翻译",
  },
};

const ko: UIStrings = {
  nav: { ask: "질문하기", categories: "카테고리", sources: "정보 출처", whyMinfo: "왜 MINFO?", why: "왜 신주쿠?" },
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
    routeTitle: "시범 노선",
    routeAria: "노선도: 신주쿠와 오쿠보에서 시작해 도쿄 전역으로 확장",
    routeNow: "지금",
    routeNext: "다음",
    routeGoal: "도쿄 전역",
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
    aiBadge: "Claude AI 답변 · 출처는 로컬에서 검증",
  },
  feedback: {
    question: "이 답변이 도움이 되었나요?",
    helpful: "도움됨",
    confusing: "이해 어려움",
    wrong: "잘못된 정보",
    language: "내 언어 필요",
    thanks: "감사합니다 — 피드백은 MINFO 개선에 사용됩니다.",
  },
  sources: {
    title: "공식·공공 정보로 만들어졌습니다",
    sub: "MINFO는 선별된 공식·공공 기관의 정보만으로 답합니다 — 모든 답변에 출처가 연결됩니다.",
    roadmapTitle: "오픈데이터 로드맵",
    roadmapBadge: "향후 계획 — 아직 미구현",
    roadmap: [
      {
        title: "도쿄 오픈데이터 카탈로그 연결",
        body: "답변을 정적 데이터가 아닌 실시간 공공 데이터(시설, 상담 창구, 재난 정보)와 연결합니다.",
      },
      {
        title: "구 단위 확장",
        body: "카테고리+출처 구조는 특정 구에 묶여 있지 않습니다. 각 구의 공식 페이지로 바꾸면 도쿄 전역을 커버합니다.",
      },
      {
        title: "익명 질문 트렌드",
        body: "주민이 실제로 필요한 정보를 파악해 — 개인 데이터가 아닌 공익 신호로 구와 공유합니다.",
      },
    ],
  },
  whyMinfo: {
    title: "왜 MINFO인가 — 검색이나 AI 챗이 아니라?",
    sub: "MINFO는 일반 지식에서 검색이나 범용 AI를 이기려는 것이 아닙니다. 지역의 한 가지 일을 제대로 합니다.",
    cards: [
      {
        title: "검색 엔진",
        body: "링크를 잔뜩 보여줍니다 — 어떤 페이지가 공식이고 최신이며 신주쿠에 해당하는지는 직접 판단해야 합니다.",
      },
      {
        title: "일반 AI 챗",
        body: "폭넓은 일반 답변을 줍니다 — 유용하지만 우리 구의 창구 정보에 기반하지 않고, 추측할 수도 있습니다.",
      },
      {
        title: "MINFO",
        body: "내 언어로, 공식 출처가 붙은 신주쿠의 '다음 행동'을 안내합니다 — 모든 답변에 공식 출처 카드, 119/110 안내는 항상 동일합니다. MINFO는 실제 창구로 가는 내비게이터이지, 창구의 대체물이 아닙니다.",
      },
    ],
  },
  story: {
    title: "왜 신주쿠·오쿠보인가?",
    sub: "다국어 정보 접근을 위한 시빅테크 시범 사업 — 도쿄 전역 확장을 목표로 합니다.",
    blocks: [
      {
        title: "문제",
        body: "일본의 공식 생활 정보는 신뢰할 수 있지만, 수십 개 사이트에 흩어져 있고 딱딱한 행정 일본어로 쓰여 있습니다. 낯선 제도를 제2언어로 헤쳐가는 주민에게는 '어느 창구인지', '어느 서류인지'조차 장벽이 됩니다.",
      },
      {
        title: "대상",
        body: "외국 출신 주민과 다언어 커뮤니티: 새로 온 주민, 유학생, 직장인, 가족 — 그리고 그들을 돕는 지역 서포터. 능력이 아니라 언어와 정보 접근의 장벽에 부딪힌 사람들입니다.",
      },
      {
        title: "접근",
        body: "MINFO는 번역 챗봇이 아닙니다. 생활 제도를 쉬운 일본어를 포함한 6개 언어로 쉽게 설명하고, 항상 공식 출처를 보여주고, 올바른 실제 창구로 안내하는 시민 정보 내비게이터입니다 — 창구를 대체하지 않습니다.",
      },
      {
        title: "시범 → 확장",
        body: "신주쿠·오쿠보는 일본에서 가장 다언어적인 동네 중 하나로, 생활 정보가 필요한 학생·직장인·가족이 밀집해 있습니다. 같은 '카테고리+신뢰 출처' 구조를 구 단위로 도쿄 전역에 확장할 수 있습니다.",
      },
    ],
    impactTitle: "정보 접근이 나아지면 달라지는 것",
    impact: [
      "내 언어로 의료 이용",
      "모두에게 닿는 재난 대비 정보",
      "쓰레기·세금·주거 규칙이 명확해짐",
      "실제로 찾아갈 수 있는 상담 창구",
    ],
  },
  footer: {
    tagline: "외국 출신 주민을 위한 다국어 정보 내비게이터",
    meta: "해커톤 프로토타입 · 2026 · 신주쿠·오쿠보 시범",
    emergencyTitle: "긴급 상황",
    fire: "화재·구급차",
    police: "경찰",
    freeNote: "무료 · 24시간 · 통역 지원",
  },
};

const vi: UIStrings = {
  nav: { ask: "Hỏi", categories: "Danh mục", sources: "Nguồn tin", whyMinfo: "Vì sao MINFO?", why: "Vì sao Shinjuku?" },
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
    routeTitle: "Tuyến thí điểm",
    routeAria: "Bản đồ tuyến: bắt đầu từ Shinjuku và Okubo, mở rộng ra toàn Tokyo",
    routeNow: "hiện tại",
    routeNext: "tiếp theo",
    routeGoal: "Toàn Tokyo",
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
    aiBadge: "Câu trả lời AI của Claude · nguồn được xác minh cục bộ",
  },
  feedback: {
    question: "Câu trả lời này có hữu ích không?",
    helpful: "Hữu ích",
    confusing: "Khó hiểu",
    wrong: "Sai thông tin",
    language: "Cần ngôn ngữ của tôi",
    thanks: "Cảm ơn bạn — phản hồi giúp MINFO tốt hơn.",
  },
  sources: {
    title: "Dựa trên thông tin chính thức & công cộng",
    sub: "MINFO chỉ trả lời từ các tổ chức chính thức và công cộng được chọn lọc — mọi câu trả lời đều dẫn nguồn.",
    roadmapTitle: "Lộ trình dữ liệu mở",
    roadmapBadge: "Tương lai — chưa triển khai",
    roadmap: [
      {
        title: "Kết nối Danh mục Dữ liệu Mở Tokyo",
        body: "Liên kết câu trả lời với dữ liệu công cộng trực tiếp (cơ sở, quầy tư vấn, thông tin thiên tai) thay vì dữ liệu tĩnh.",
      },
      {
        title: "Mở rộng theo từng quận",
        body: "Cấu trúc danh mục + nguồn không phụ thuộc quận: thay trang chính thức của từng quận là phủ khắp Tokyo.",
      },
      {
        title: "Xu hướng câu hỏi ẩn danh",
        body: "Hiểu cư dân thực sự cần thông tin gì — chia sẻ với các quận như tín hiệu vì lợi ích chung, không bao giờ là dữ liệu cá nhân.",
      },
    ],
  },
  whyMinfo: {
    title: "Vì sao MINFO — thay vì chỉ tìm kiếm hay AI chat?",
    sub: "MINFO không cố vượt công cụ tìm kiếm hay AI tổng quát về kiến thức chung. Nó làm tốt một việc tại địa phương.",
    cards: [
      {
        title: "Công cụ tìm kiếm",
        body: "Cho bạn nhiều liên kết — bạn vẫn phải tự phán đoán trang nào chính thức, mới nhất và áp dụng cho Shinjuku.",
      },
      {
        title: "AI chat thông thường",
        body: "Trả lời rộng và chung chung — hữu ích, nhưng không dựa trên các cơ quan của quận bạn, và có thể đoán.",
      },
      {
        title: "MINFO",
        body: "Bước tiếp theo cụ thể tại địa phương, bằng ngôn ngữ của bạn, kèm thẻ nguồn chính thức trên mọi câu trả lời — và hướng dẫn 119/110 luôn cố định. MINFO dẫn bạn đến cơ quan thật, không thay thế họ.",
      },
    ],
  },
  story: {
    title: "Vì sao Shinjuku / Okubo?",
    sub: "Dự án civic-tech thí điểm về tiếp cận thông tin đa ngôn ngữ, hướng tới mở rộng khắp Tokyo.",
    blocks: [
      {
        title: "Vấn đề",
        body: "Thông tin chính thức ở Nhật đáng tin cậy — nhưng rải rác trên hàng chục trang web và viết bằng tiếng Nhật hành chính khó hiểu. Với cư dân phải tìm hiểu một hệ thống xa lạ bằng ngôn ngữ thứ hai, cả câu hỏi đơn giản ('quầy nào?', 'mẫu nào?') cũng thành rào cản.",
      },
      {
        title: "Đối tượng",
        body: "Cư dân gốc nước ngoài và cộng đồng đa ngôn ngữ: người mới đến, du học sinh, người lao động, các gia đình — và những người hỗ trợ cộng đồng giúp họ. Họ gặp rào cản ngôn ngữ và tiếp cận thông tin, không phải thiếu năng lực.",
      },
      {
        title: "Cách tiếp cận",
        body: "MINFO không phải chatbot dịch thuật. Đó là người dẫn đường thông tin công dân: giải thích đơn giản các hệ thống đời sống bằng sáu ngôn ngữ (gồm tiếng Nhật đơn giản), luôn hiển thị nguồn chính thức, và dẫn bạn đến đúng cơ quan thực — không bao giờ thay thế cơ quan.",
      },
      {
        title: "Thí điểm → mở rộng",
        body: "Shinjuku / Okubo là một trong những khu phố đa ngôn ngữ rõ nét nhất Nhật Bản, đông sinh viên, người lao động và gia đình cần thông tin đời sống. Cùng cấu trúc 'danh mục + nguồn tin cậy' có thể nhân rộng từng quận khắp Tokyo.",
      },
    ],
    impactTitle: "Tiếp cận thông tin tốt hơn sẽ thay đổi điều gì",
    impact: [
      "Tiếp cận y tế bằng ngôn ngữ của bạn",
      "Thông tin phòng chống thiên tai đến với mọi người",
      "Quy tắc rác, thuế, nhà ở trở nên rõ ràng",
      "Quầy tư vấn được tìm thấy thực sự",
    ],
  },
  footer: {
    tagline: "Trình điều hướng thông tin đa ngôn ngữ cho cư dân gốc nước ngoài",
    meta: "Nguyên mẫu hackathon · 2026 · Thí điểm Shinjuku / Okubo",
    emergencyTitle: "Khẩn cấp",
    fire: "Cứu hỏa / Cấp cứu",
    police: "Cảnh sát",
    freeNote: "Miễn phí · 24h · có phiên dịch",
  },
};

const ne: UIStrings = {
  nav: { ask: "सोध्नुहोस्", categories: "विषयहरू", sources: "स्रोतहरू", whyMinfo: "किन MINFO?", why: "किन Shinjuku?" },
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
    routeTitle: "पाइलट मार्ग",
    routeAria: "मार्ग नक्सा: Shinjuku र Okubo बाट सुरु, टोकियोभर विस्तार",
    routeNow: "अहिले",
    routeNext: "अर्को",
    routeGoal: "सम्पूर्ण टोकियो",
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
    aiBadge: "Claude को AI उत्तर · स्रोत स्थानीय रूपमा प्रमाणित",
  },
  feedback: {
    question: "यो उत्तर उपयोगी थियो?",
    helpful: "उपयोगी",
    confusing: "अलमल्लमा पार्ने",
    wrong: "गलत जानकारी",
    language: "मेरो भाषा चाहियो",
    thanks: "धन्यवाद — तपाईंको सुझावले MINFO लाई राम्रो बनाउँछ।",
  },
  sources: {
    title: "आधिकारिक तथा सार्वजनिक जानकारीमा आधारित",
    sub: "MINFO ले छानिएका आधिकारिक/सार्वजनिक निकायबाट मात्र उत्तर दिन्छ — हरेक उत्तरमा स्रोत जोडिन्छ।",
    roadmapTitle: "खुला डाटा योजना",
    roadmapBadge: "भविष्यको योजना — अहिले छैन",
    roadmap: [
      {
        title: "टोकियो खुला डाटासँग जडान",
        body: "उत्तरहरूलाई स्थिर डाटाको सट्टा सार्वजनिक डाटा (सुविधा, परामर्श डेस्क, विपद् जानकारी) सँग जोड्ने।",
      },
      {
        title: "वडा-वडा विस्तार",
        body: "विषय + स्रोत संरचना जुनसुकै वडामा चल्छ: हरेक वडाको आधिकारिक पृष्ठ राखे टोकियोभर पुग्छ।",
      },
      {
        title: "अज्ञात प्रश्न प्रवृत्ति",
        body: "बासिन्दालाई के जानकारी चाहिन्छ बुझ्ने — व्यक्तिगत डाटा होइन, सार्वजनिक हितको संकेतका रूपमा वडासँग साझा।",
      },
    ],
  },
  whyMinfo: {
    title: "किन MINFO — खोज वा AI च्याट मात्र होइन?",
    sub: "MINFO सामान्य ज्ञानमा खोज वा AI लाई जित्न खोज्दैन। यसले स्थानीय एउटा काम राम्ररी गर्छ।",
    cards: [
      {
        title: "सर्च इन्जिन",
        body: "धेरै लिंक दिन्छ — कुन आधिकारिक हो, नयाँ हो र Shinjuku मा लागू हुन्छ, आफैंले छुट्याउनुपर्छ।",
      },
      {
        title: "सामान्य AI च्याट",
        body: "फराकिलो, सामान्य उत्तर दिन्छ — उपयोगी, तर तपाईंको वडाका कार्यालयमा आधारित हुँदैन, अनुमान पनि गर्न सक्छ।",
      },
      {
        title: "MINFO",
        body: "तपाईंकै भाषामा, आधिकारिक स्रोतसहित स्थानीय 'अर्को कदम' दिन्छ — हरेक उत्तरमा स्रोत कार्ड, र 119/110 मार्गदर्शन सधैं एउटै। MINFO वास्तविक कार्यालयसम्म पुर्‍याउने नेभिगेटर हो, विकल्प होइन।",
      },
    ],
  },
  story: {
    title: "किन Shinjuku / Okubo?",
    sub: "बहुभाषिक जानकारी पहुँचका लागि सिभिक-टेक पाइलट, टोकियोभर विस्तार गर्ने लक्ष्य।",
    blocks: [
      {
        title: "समस्या",
        body: "जापानको आधिकारिक जानकारी भरपर्दो छ — तर दर्जनौं साइटमा छरिएको र गाह्रो प्रशासनिक जापानीमा लेखिएको छ। दोस्रो भाषामा नयाँ प्रणाली बुझ्नुपर्ने बासिन्दालाई 'कुन काउन्टर?', 'कुन फारम?' जस्ता साना प्रश्न पनि अवरोध बन्छन्।",
      },
      {
        title: "लक्षित समूह",
        body: "विदेशी मूलका बासिन्दा र बहुभाषिक समुदाय: नयाँ आएका, विद्यार्थी, कामदार, परिवार — र उनीहरूलाई सघाउने सामुदायिक सहयोगीहरू। समस्या क्षमताको होइन, भाषा र जानकारी पहुँचको हो।",
      },
      {
        title: "समाधान",
        body: "MINFO अनुवाद च्याटबोट होइन। यो नागरिक जानकारी नेभिगेटर हो: ६ भाषामा (सजिलो जापानीसहित) जीवनका प्रणाली सजिलै बुझाउँछ, सधैं आधिकारिक स्रोत देखाउँछ, र सही कार्यालयसम्म पुर्‍याउँछ — कार्यालयको विकल्प बन्दैन।",
      },
      {
        title: "पाइलट → विस्तार",
        body: "Shinjuku / Okubo जापानकै सबैभन्दा बहुभाषिक टोलमध्ये एक हो — जीवन जानकारी चाहिने विद्यार्थी, कामदार र परिवारले भरिएको। यही 'विषय + विश्वसनीय स्रोत' संरचना वडा-वडा गर्दै टोकियोभर विस्तार गर्न सकिन्छ।",
      },
    ],
    impactTitle: "राम्रो जानकारी पहुँचले के बदल्छ",
    impact: [
      "आफ्नै भाषामा स्वास्थ्य सेवा",
      "सबैसम्म पुग्ने विपद् तयारी जानकारी",
      "फोहोर, कर, आवास नियम स्पष्ट",
      "भेटिने परामर्श डेस्क",
    ],
  },
  footer: {
    tagline: "विदेशी मूलका बासिन्दाका लागि बहुभाषिक जानकारी नेभिगेटर",
    meta: "ह्याकाथन प्रोटोटाइप · 2026 · Shinjuku / Okubo पाइलट",
    emergencyTitle: "आपतकाल",
    fire: "आगो / एम्बुलेन्स",
    police: "प्रहरी",
    freeNote: "निःशुल्क · २४ घण्टा · दोभाषे उपलब्ध",
  },
};

export const UI_STRINGS: Localized<UIStrings> = { en, ja, zh, ko, vi, ne };
