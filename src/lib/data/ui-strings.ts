import type { Localized } from "../types";

interface RoadmapItem {
  title: string;
  body: string;
}

interface StrategyItem {
  title: string;
  body: string;
}

interface PipelineStep {
  label: string;
  desc: string;
}

interface QualityItem {
  label: string;
  desc: string;
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
  brand: {
    /** Localized brand subtitle shown after "MINFO" (みんなのインフォ = "everyone's info"). */
    subtitle: string;
    /** Accessible label for the language selector. */
    languageLabel: string;
  };
  nav: {
    ask: string;
    categories: string;
    sources: string;
    openData: string;
    whyMinfo: string;
    why: string;
    /** Accessible label for the floating scroll-to-top button. */
    backToTop: string;
  };
  emergencyBar: string;
  hero: {
    kicker: string;
    headline: string;
    sub: string;
    ctaAsk: string;
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
    aiBadge: string;
    answerLabel: string;
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
    /** Register group headings: ward / metropolitan / national tiers. */
    groupWard: string;
    groupTokyo: string;
    groupNational: string;
    roadmapTitle: string;
    roadmapBadge: string;
    roadmap: RoadmapItem[];
  };
  openData: {
    title: string;
    sub: string;
    /** Data-use status row: curated records running today. Body contains "{count}", replaced with the number of curated source records. */
    now: { badge: string; body: string };
    /** Data-use status row: identified open-data candidates, never auto-fetched yet. */
    next: { badge: string; body: string };
    pipelineTitle: string;
    /** Fixed order: official data → curated record → multilingual explanation → next action. */
    pipeline: PipelineStep[];
    strategyTitle: string;
    strategyIntro: string;
    /** Fixed order: stable / periodic / time-sensitive — badges are mapped by index. */
    strategy: StrategyItem[];
    candidatesTitle: string;
    candidatesSub: string;
    catalogCta: string;
    badges: {
      curated: string;
      candidate: string;
      batch: string;
      live: string;
      searchTarget: string;
    };
  };
  quality: {
    title: string;
    sub: string;
    items: QualityItem[];
  };
  mascot: { alt: string };
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
  brand: { subtitle: "Everyone's Info", languageLabel: "Language" },
  nav: {
    ask: "Ask",
    categories: "Categories",
    sources: "Sources",
    openData: "Open Data",
    whyMinfo: "Why MINFO?",
    why: "Why Shinjuku?",
    backToTop: "Back to top",
  },
  emergencyBar: "Emergency? 119 Fire / Ambulance · 110 Police (free, 24h, interpretation available)",
  hero: {
    kicker: "Grounded in official public sources",
    headline: "Reliable life information, in your language.",
    sub: "Hospitals, insurance, garbage, disasters: MINFO explains daily life in Japan simply, always with official sources.",
    ctaAsk: "Ask MINFO",
    trustSources: "Every answer shows its official sources",
    trustLanguages: "6 languages, including Easy Japanese (やさしい日本語)",
    trustPilot: "Starting from Shinjuku / Okubo, expandable across Tokyo",
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
    examples: "Common questions",
    thinking: "Checking trusted sources…",
    emptyHint: "Your answer will appear here, with sources.",
  },
  answer: {
    emergency: "Emergency",
    caution: "Please note",
    steps: "Recommended next steps",
    sources: "Official & public sources",
    lowConfidence: "MINFO could not fully confirm this. Please check with an official office.",
    disclaimer: "MINFO is a prototype navigator, not a government service. Always confirm important matters with official offices.",
    aiBadge: "AI answer by Claude · sources verified locally",
    answerLabel: "Answer",
  },
  feedback: {
    question: "Was this helpful?",
    helpful: "Helpful",
    confusing: "Confusing",
    wrong: "Wrong info",
    language: "Need my language",
    thanks: "Thank you. Your feedback helps improve MINFO.",
  },
  sources: {
    title: "Built on official & public information",
    sub: "MINFO answers only from a curated set of official and public organizations. Every answer links back to them.",
    groupWard: "Shinjuku City",
    groupTokyo: "Tokyo Metropolitan",
    groupNational: "National",
    roadmapTitle: "Open-data roadmap",
    roadmapBadge: "Planned · not yet implemented",
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
        body: "Understand what information residents actually need, shared with wards as a public-interest signal, never as personal data.",
      },
    ],
  },
  openData: {
    title: "From open data to usable guidance",
    sub: "Open data becomes useful when residents can find it, understand it, and act on it. MINFO builds that final mile.",
    now: {
      badge: "In use now",
      body: "{count} curated records from official/public sources power every answer and source card. Hand-checked, structured open-data-ready.",
    },
    next: {
      badge: "Candidates · not auto-fetched",
      body: "Tokyo / Shinjuku open datasets are identified below, prioritized by usefulness and update needs. Automatic fetching is future work.",
    },
    pipelineTitle: "How data becomes guidance",
    pipeline: [
      { label: "Official data", desc: "Open dataset or official page" },
      { label: "Curated record", desc: "Checked, structured, source-linked" },
      { label: "Multilingual explanation", desc: "Plain answers in 6 languages" },
      { label: "Next action", desc: "Right office, steps, 119/110 guidance" },
    ],
    strategyTitle: "How MINFO chooses a data access method",
    strategyIntro: "Not every dataset should be a live API. The method follows how fast the information changes:",
    strategy: [
      {
        title: "Stable information",
        body: "Rules and contact desks that rarely change. Curated CSV/JSON source records are enough for the MVP.",
      },
      {
        title: "Periodically updated data",
        body: "Facility lists and statistics. Scheduled CSV downloads or batch updates can refresh these records.",
      },
      {
        title: "Time-sensitive information",
        body: "Disasters, shelter status, sudden closures. Future versions may need APIs or frequent automated updates.",
      },
    ],
    candidatesTitle: "Tokyo Open Data: candidate datasets",
    candidatesSub: "Catalog entries and search targets MINFO plans to connect next, with what each would improve. None are fetched automatically yet.",
    catalogCta: "Browse the Tokyo Open Data Catalog",
    badges: {
      curated: "Curated now",
      candidate: "Open-data candidate",
      batch: "Periodic · future batch",
      live: "Time-sensitive · future API",
      searchTarget: "Catalog search target",
    },
  },
  quality: {
    title: "MINFO source-quality check",
    sub: "A lightweight checklist inspired by Japan's public open-data quality guidance, not a formal government assessment. Every source in MINFO goes through it.",
    items: [
      { label: "Official / public source", desc: "Published by a government body or public organization." },
      { label: "Link verified", desc: "The URL was checked by hand and points to the official page." },
      { label: "Language accessible", desc: "Multilingual, or usable with simple Japanese." },
      { label: "Daily-life relevance", desc: "Answers a question residents actually ask." },
      { label: "Update-ready", desc: "The record can be refreshed when the source changes." },
      { label: "Ward-expandable", desc: "The same structure can host other wards' sources." },
      { label: "Improved by feedback", desc: "User feedback can flag and fix weak sources." },
    ],
  },
  mascot: { alt: "MINFO guide mascot" },
  whyMinfo: {
    title: "Why MINFO, not just search or AI chat?",
    sub: "MINFO is not trying to beat search engines or general AI at general knowledge. It does one local job well.",
    cards: [
      {
        title: "Search engines",
        body: "Give you many links. You still have to judge which page is official, current, and applies to Shinjuku.",
      },
      {
        title: "General AI chat",
        body: "Gives broad, general answers. Helpful, but not grounded in your ward's offices, and it can guess.",
      },
      {
        title: "MINFO",
        body: "Local, source-grounded next steps in your language, with official sources on every answer and 119/110 guidance that never changes. A navigator to real offices, never a replacement for them.",
      },
    ],
  },
  story: {
    title: "Why Shinjuku / Okubo?",
    sub: "A civic-tech pilot for multilingual information access, designed to expand across Tokyo.",
    blocks: [
      {
        title: "The problem",
        body: "Official life information in Japan is reliable, but scattered across dozens of sites, written in dense administrative Japanese, and hard to act on. For residents navigating an unfamiliar system in a second language, even simple questions (\"which counter?\", \"which form?\") become barriers.",
      },
      {
        title: "The people",
        body: "Foreign-origin residents and multilingual communities: newly arrived residents, international students, workers, families, and the community supporters who help them. People facing language and information-access barriers, not a lack of ability.",
      },
      {
        title: "The approach",
        body: "MINFO is not a translation chatbot. It is a civic information navigator: it explains daily-life systems simply, in six languages including やさしい日本語, always shows its official sources, and guides people to the right real-world office, never replacing it.",
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
    meta: "Hackathon prototype 2026 · Shinjuku / Okubo pilot",
    emergencyTitle: "Emergency",
    fire: "Fire / Ambulance",
    police: "Police",
    freeNote: "Free · 24 hours · interpretation available",
  },
};

const ja: UIStrings = {
  brand: { subtitle: "みんなのインフォ", languageLabel: "ことば" },
  nav: {
    ask: "質問する",
    categories: "カテゴリー",
    sources: "情報のもと",
    openData: "オープンデータ",
    whyMinfo: "MINFOとは",
    why: "なぜ新宿？",
    backToTop: "上にもどる",
  },
  emergencyBar: "緊急のとき：火事・救急車は 119 ／ 警察は 110（無料・24時間・通訳あり）",
  hero: {
    kicker: "公式情報をもとにした案内",
    headline: "あなたのことばで、生活の情報を。",
    sub: "病院・保険・ごみ・防災。MINFOは日本の生活の情報をやさしく案内します。こたえには、いつも公式の情報のもとがつきます。",
    ctaAsk: "MINFOに質問する",
    trustSources: "こたえには公式の情報のもとがつきます",
    trustLanguages: "6つのことば（やさしい日本語もあります）",
    trustPilot: "新宿・大久保から始めます",
  },
  categories: {
    title: "なににこまっていますか？",
    sub: "生活の 8つの分野を、公式情報で案内します。",
    tryLabel: "質問のれい",
  },
  ask: {
    title: "MINFOに質問する",
    sub: "質問を書くか、下のれいをおしてください。",
    placeholder: "新宿の生活のことを聞いてください…",
    send: "質問する",
    examples: "よくある質問",
    thinking: "公式の情報をしらべています…",
    emptyHint: "ここにこたえが出ます。",
  },
  answer: {
    emergency: "緊急",
    caution: "ちゅうい",
    steps: "つぎにすること",
    sources: "公式の情報のもと",
    lowConfidence: "たしかなこたえができません。役所でかくにんしてください。",
    disclaimer: "MINFOは試作品（プロトタイプ）です。役所のサービスではありません。たいせつなことは役所でかくにんしてください。",
    aiBadge: "Claudeの AIこたえ · 情報のもとはかくにん済み",
    answerLabel: "こたえ",
  },
  feedback: {
    question: "このこたえは役に立ちましたか？",
    helpful: "役に立った",
    confusing: "わかりにくい",
    wrong: "まちがっている",
    language: "自分のことばがほしい",
    thanks: "ありがとうございます。MINFOをよくするためにつかいます。",
  },
  sources: {
    title: "公式の情報をつかっています",
    sub: "MINFOは、公式・公共の情報だけをつかってこたえます。こたえには、いつも情報のもとがついています。",
    groupWard: "新宿区",
    groupTokyo: "東京都",
    groupNational: "国の機関",
    roadmapTitle: "これからの計画（オープンデータ）",
    roadmapBadge: "これからの計画です（まだありません）",
    roadmap: [
      {
        title: "東京都オープンデータとの連携",
        body: "こたえを、東京都の公開データ（施設・相談窓口・防災）とつなげます。",
      },
      {
        title: "区ごとの拡大",
        body: "カテゴリーと情報のもとのしくみは、どの区でもつかえます。区の公式ページを入れかえるだけです。",
      },
      {
        title: "質問のけいこう（匿名）",
        body: "みんながなににこまっているかを、個人がわからないかたちで区につたえます。",
      },
    ],
  },
  openData: {
    title: "オープンデータを、使える案内に",
    sub: "オープンデータは、住民が見つけて、わかって、行動できて、はじめて役に立ちます。MINFOはその「さいごの一歩」をつくります。",
    now: {
      badge: "いまつかっています",
      body: "公式・公共の情報から、人がえらんだ {count}件のデータです。すべてのこたえと情報カードは、このデータから作られます。",
    },
    next: {
      badge: "候補・まだ自動ではとりません",
      body: "下の東京・新宿のオープンデータは、役に立つ順番にえらんだ候補です。自動でとるのは、これからの計画です。",
    },
    pipelineTitle: "データが案内になるまで",
    pipeline: [
      { label: "公式のデータ", desc: "オープンデータや公式ページ" },
      { label: "えらんだ記録", desc: "人がかくにんして、整理します" },
      { label: "多言語の説明", desc: "6つのことばでやさしく" },
      { label: "つぎの行動", desc: "窓口・手順・119/110の案内" },
    ],
    strategyTitle: "データのとりかたのきめかた",
    strategyIntro: "ぜんぶを APIにする必要はありません。情報のかわる速さできめます。",
    strategy: [
      {
        title: "あまりかわらない情報",
        body: "ルールや窓口の情報です。人がえらんだ CSV/JSONのデータで十分です。",
      },
      {
        title: "ときどきかわる情報",
        body: "施設のリストなどです。これから、決まった日に CSVをダウンロードして更新できます。",
      },
      {
        title: "すぐかわる情報",
        body: "災害や避難所の情報です。これから、APIや自動更新が必要になるかもしれません。",
      },
    ],
    candidatesTitle: "東京都オープンデータ：つかいたいデータ",
    candidatesSub: "MINFOがこれからつなげたいデータと、何がよくなるかです。まだ自動ではつかっていません。",
    catalogCta: "東京都オープンデータカタログを見る",
    badges: {
      curated: "いまつかっています",
      candidate: "オープンデータ候補",
      batch: "ときどきかわる・これから定期更新",
      live: "すぐかわる・これから API",
      searchTarget: "カタログでさがす",
    },
  },
  quality: {
    title: "MINFOの情報チェック",
    sub: "国のオープンデータの考えかたを参考にした、かんたんなチェックです。政府の正式な審査ではありません。MINFOの情報は、ぜんぶこのチェックをします。",
    items: [
      { label: "公式・公共の情報", desc: "役所や公共の組織が出した情報です。" },
      { label: "リンクをかくにん", desc: "URLは人が見て、公式ページにつながることをかくにんしました。" },
      { label: "ことばがわかる", desc: "いろいろなことばがあるか、やさしい日本語でつかえます。" },
      { label: "生活に役立つ", desc: "住民がほんとうに聞く質問にこたえます。" },
      { label: "更新できる", desc: "情報がかわったら、新しくできます。" },
      { label: "ほかの区でもつかえる", desc: "同じしくみで、ほかの区の情報も入れられます。" },
      { label: "フィードバックでよくなる", desc: "みなさんの声で、情報をよくできます。" },
    ],
  },
  mascot: { alt: "MINFOの案内キャラクター" },
  whyMinfo: {
    title: "検索や AIチャットと、なにがちがう？",
    sub: "MINFOは、検索や AIよりものしりになりたいのではありません。新宿の生活案内という一つの仕事をします。",
    cards: [
      {
        title: "検索エンジン",
        body: "リンクがたくさん出ます。どれが公式か、新宿の情報か、自分でさがす必要があります。",
      },
      {
        title: "ふつうの AIチャット",
        body: "ひろいこたえが出ます。でも、新宿の窓口の情報とはかぎりません。まちがうこともあります。",
      },
      {
        title: "MINFO",
        body: "あなたのことばで、新宿の「つぎにすること」を案内します。こたえには公式の情報のもとがつきます。119/110の案内は、いつも同じで安全です。MINFOは窓口への案内役で、窓口のかわりではありません。",
      },
    ],
  },
  story: {
    title: "なぜ新宿・大久保？",
    sub: "ことばのかべをなくすための市民テック。新宿から東京ぜんぶへ。",
    blocks: [
      {
        title: "課題",
        body: "日本の公式情報は正しいです。でも、サイトがばらばらで、ことばがむずかしいです。「どの窓口？」「どの書類？」がわからなくて、こまる人が多いです。",
      },
      {
        title: "対象",
        body: "外国から来た住民のみなさんです。新しく来た人、留学生、はたらく人、家族。そして、その人たちをたすける地域のサポーター。できないのではなく、ことばと情報のかべがあるだけです。",
      },
      {
        title: "解決",
        body: "MINFOは翻訳チャットボットではありません。生活のしくみをやさしく説明して、公式の情報のもとを見せて、正しい窓口につなげる「案内役」です。窓口のかわりにはなりません。",
      },
      {
        title: "展開",
        body: "新宿・大久保は、日本でいちばんいろいろなことばが聞こえる町のひとつです。まずここから始めて、同じしくみで東京のほかの区にもひろげられます。",
      },
    ],
    impactTitle: "情報がとどくと、なにがかわる？",
    impact: [
      "自分のことばで病院に行ける",
      "防災の情報がみんなにとどく",
      "ごみ・税金・家のルールがわかる",
      "相談窓口が見つかる",
    ],
  },
  footer: {
    tagline: "外国から来た住民のための生活情報ナビ",
    meta: "ハッカソン試作品 2026 · 新宿・大久保",
    emergencyTitle: "緊急のとき",
    fire: "火事・救急車",
    police: "警察",
    freeNote: "無料・24時間・通訳あり",
  },
};

const zh: UIStrings = {
  brand: { subtitle: "大家的信息", languageLabel: "语言" },
  nav: {
    ask: "提问",
    categories: "分类",
    sources: "信息来源",
    openData: "开放数据",
    whyMinfo: "为什么用 MINFO",
    why: "为什么是新宿？",
    backToTop: "回到顶部",
  },
  emergencyBar: "紧急情况：火警·救护车 119 ／ 警察 110（免费·24小时·有翻译）",
  hero: {
    kicker: "基于官方信息的生活向导",
    headline: "用您的语言，获取可靠的生活信息。",
    sub: "医院、保险、垃圾分类、防灾：MINFO 用简单的方式解释在日生活，回答始终附有官方来源。",
    ctaAsk: "向 MINFO 提问",
    trustSources: "每个回答都显示官方来源",
    trustLanguages: "支持 6 种语言，含简明日语（やさしい日本語）",
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
    examples: "常见问题",
    thinking: "正在查询可信来源…",
    emptyHint: "回答会显示在这里，并附来源。",
  },
  answer: {
    emergency: "紧急",
    caution: "请注意",
    steps: "建议的下一步",
    sources: "官方·公共来源",
    lowConfidence: "MINFO 无法完全确认，请向官方窗口确认。",
    disclaimer: "MINFO 是原型产品，不是政府服务。重要事项请务必向官方窗口确认。",
    aiBadge: "由 Claude 生成的 AI 回答 · 来源经本地核验",
    answerLabel: "回答",
  },
  feedback: {
    question: "这个回答有帮助吗？",
    helpful: "有帮助",
    confusing: "看不懂",
    wrong: "信息有误",
    language: "需要我的语言",
    thanks: "谢谢！您的反馈会帮助改进 MINFO。",
  },
  sources: {
    title: "基于官方与公共信息",
    sub: "MINFO 只使用经过筛选的官方和公共机构信息回答，每个回答都会注明来源。",
    groupWard: "新宿区",
    groupTokyo: "东京都",
    groupNational: "全国机构",
    roadmapTitle: "开放数据路线图",
    roadmapBadge: "未来计划（尚未实现）",
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
        body: "了解居民真正需要什么信息，以公共利益信号的形式与各区共享，绝不涉及个人数据。",
      },
    ],
  },
  openData: {
    title: "让开放数据变成用得上的指引",
    sub: "开放数据要能被居民找到、看懂、用于行动才真正有用。MINFO 负责这「最后一公里」。",
    now: {
      badge: "当前在用",
      body: "{count} 条人工筛选的官方/公共来源记录，支撑现在的每个回答和来源卡片。逐条核对，结构已为开放数据做好准备。",
    },
    next: {
      badge: "候选·尚未自动获取",
      body: "下方的东京/新宿开放数据集是已确定的候选，按有用程度和更新需求排序。自动获取属于未来工作。",
    },
    pipelineTitle: "数据如何变成指引",
    pipeline: [
      { label: "官方数据", desc: "开放数据集或官方页面" },
      { label: "筛选记录", desc: "人工核对、结构化、附来源" },
      { label: "多语言说明", desc: "6 种语言的通俗回答" },
      { label: "下一步行动", desc: "窗口、步骤或 119/110 指引" },
    ],
    strategyTitle: "MINFO 如何选择数据获取方式",
    strategyIntro: "并非所有数据都该用实时 API，方式取决于信息变化的速度：",
    strategy: [
      {
        title: "较稳定的信息",
        body: "很少变化的规则和窗口信息。人工筛选的 CSV/JSON 记录对 MVP 已经足够。",
      },
      {
        title: "定期更新的数据",
        body: "设施列表和统计数据。可通过定时 CSV 下载或批量更新来刷新。",
      },
      {
        title: "时效性强的信息",
        body: "灾害、避难所状态、临时关闭。未来可能需要 API 或高频自动更新。",
      },
    ],
    candidatesTitle: "东京都开放数据：候选数据集",
    candidatesSub: "MINFO 计划接入的目录条目和检索目标，以及各自能改进什么。目前均未自动获取。",
    catalogCta: "浏览东京都开放数据目录",
    badges: {
      curated: "当前人工维护",
      candidate: "开放数据候选",
      batch: "定期变化·未来批量更新",
      live: "时效性强·未来 API",
      searchTarget: "目录检索目标",
    },
  },
  quality: {
    title: "MINFO 来源质量检查",
    sub: "参考日本政府开放数据质量指引的轻量检查，不是正式的政府评估。MINFO 的每个来源都经过这些检查。",
    items: [
      { label: "官方/公共来源", desc: "由政府机构或公共组织发布。" },
      { label: "链接已核实", desc: "URL 经人工确认，指向官方页面。" },
      { label: "语言可及", desc: "提供多语言，或可用简明日语理解。" },
      { label: "贴近日常生活", desc: "回答居民真正会问的问题。" },
      { label: "可更新", desc: "来源变化时记录可以刷新。" },
      { label: "可扩展到各区", desc: "同样的结构可容纳其他区的来源。" },
      { label: "反馈可改进", desc: "用户反馈能发现并修正薄弱来源。" },
    ],
  },
  mascot: { alt: "MINFO 向导吉祥物" },
  whyMinfo: {
    title: "为什么用 MINFO，而不只是搜索或 AI 聊天？",
    sub: "MINFO 不打算在通用知识上超越搜索引擎或通用 AI，它只把一件本地的事做好。",
    cards: [
      {
        title: "搜索引擎",
        body: "给你很多链接。哪个是官方的、是否是最新的、适不适用于新宿，还得自己判断。",
      },
      {
        title: "通用 AI 聊天",
        body: "给出宽泛的一般性回答。有帮助，但不基于你所在区的窗口信息，还可能猜测。",
      },
      {
        title: "MINFO",
        body: "用你的语言给出本地的、有官方来源的下一步行动：每个回答附官方来源，119/110 紧急指引始终一致。MINFO 是通往真实窗口的向导，绝不取代窗口。",
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
        body: "外国出身的居民和多语言社区：新来的居民、留学生、上班族、家庭，以及帮助他们的社区支援者。他们面对的是语言和信息获取的障碍，而不是能力问题。",
      },
      {
        title: "方法",
        body: "MINFO 不是翻译聊天机器人，而是公民信息向导：用包括简明日语在内的六种语言简单解释生活制度，始终展示官方来源，并把人引导到正确的实体窗口，绝不取代窗口。",
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
    meta: "黑客松原型 2026 · 新宿·大久保试点",
    emergencyTitle: "紧急情况",
    fire: "火警·救护车",
    police: "警察",
    freeNote: "免费·24小时·有翻译",
  },
};

const ko: UIStrings = {
  brand: { subtitle: "모두의 정보", languageLabel: "언어" },
  nav: {
    ask: "질문하기",
    categories: "카테고리",
    sources: "정보 출처",
    openData: "오픈데이터",
    whyMinfo: "왜 MINFO?",
    why: "왜 신주쿠?",
    backToTop: "맨 위로",
  },
  emergencyBar: "긴급 상황: 화재·구급차 119 ／ 경찰 110 (무료·24시간·통역 지원)",
  hero: {
    kicker: "공식 정보에 기반한 생활 안내",
    headline: "당신의 언어로, 믿을 수 있는 생활 정보를.",
    sub: "병원, 보험, 쓰레기, 재난 대비. MINFO는 일본 생활 정보를 쉽게 안내하고, 답변에는 항상 공식 출처가 붙습니다.",
    ctaAsk: "MINFO에 질문하기",
    trustSources: "모든 답변에 공식 출처 표시",
    trustLanguages: "6개 언어 지원, 쉬운 일본어(やさしい日本語) 포함",
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
    examples: "자주 묻는 질문",
    thinking: "신뢰할 수 있는 출처를 확인 중…",
    emptyHint: "답변이 출처와 함께 여기에 표시됩니다.",
  },
  answer: {
    emergency: "긴급",
    caution: "유의하세요",
    steps: "권장 다음 단계",
    sources: "공식·공공 출처",
    lowConfidence: "MINFO가 완전히 확인하지 못했습니다. 공식 기관에 확인하세요.",
    disclaimer: "MINFO는 프로토타입이며 정부 서비스가 아닙니다. 중요한 사항은 반드시 공식 기관에 확인하세요.",
    aiBadge: "Claude AI 답변 · 출처는 로컬에서 검증",
    answerLabel: "답변",
  },
  feedback: {
    question: "이 답변이 도움이 되었나요?",
    helpful: "도움됨",
    confusing: "이해 어려움",
    wrong: "잘못된 정보",
    language: "내 언어 필요",
    thanks: "감사합니다. 피드백은 MINFO 개선에 사용됩니다.",
  },
  sources: {
    title: "공식·공공 정보로 만들어졌습니다",
    sub: "MINFO는 선별된 공식·공공 기관의 정보만으로 답합니다. 모든 답변에 출처가 연결됩니다.",
    groupWard: "신주쿠구",
    groupTokyo: "도쿄도",
    groupNational: "국가 기관",
    roadmapTitle: "오픈데이터 로드맵",
    roadmapBadge: "향후 계획 (아직 미구현)",
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
        body: "주민이 실제로 필요한 정보를 파악해, 개인 데이터가 아닌 공익 신호로 구와 공유합니다.",
      },
    ],
  },
  openData: {
    title: "오픈데이터를 쓸 수 있는 안내로",
    sub: "오픈데이터는 주민이 찾고, 이해하고, 행동할 수 있어야 유용해집니다. MINFO는 그 '마지막 구간'을 만듭니다.",
    now: {
      badge: "현재 사용 중",
      body: "사람이 선별한 공식/공공 소스 레코드 {count}건이 지금의 모든 답변과 출처 카드를 뒷받침합니다. 직접 확인했고, 오픈데이터 대응 구조입니다.",
    },
    next: {
      badge: "후보 · 아직 자동 수집 안 함",
      body: "아래 도쿄/신주쿠 오픈데이터는 유용성과 업데이트 필요에 따라 우선순위를 정한 후보입니다. 자동 수집은 향후 작업입니다.",
    },
    pipelineTitle: "데이터가 안내가 되기까지",
    pipeline: [
      { label: "공식 데이터", desc: "오픈 데이터셋 또는 공식 페이지" },
      { label: "선별 레코드", desc: "확인·구조화·출처 연결" },
      { label: "다국어 설명", desc: "6개 언어의 쉬운 답변" },
      { label: "다음 행동", desc: "창구·절차·119/110 안내" },
    ],
    strategyTitle: "MINFO의 데이터 접근 방식 선택",
    strategyIntro: "모든 데이터가 실시간 API일 필요는 없습니다. 방식은 정보가 바뀌는 속도에 따라 정합니다:",
    strategy: [
      {
        title: "안정적인 정보",
        body: "거의 바뀌지 않는 규칙과 창구 정보. 선별된 CSV/JSON 레코드로 MVP에는 충분합니다.",
      },
      {
        title: "주기적으로 바뀌는 데이터",
        body: "시설 목록과 통계. 정기 CSV 다운로드나 배치 업데이트로 갱신할 수 있습니다.",
      },
      {
        title: "시간에 민감한 정보",
        body: "재난, 대피소 상황, 갑작스러운 휴업. 향후 API나 잦은 자동 업데이트가 필요할 수 있습니다.",
      },
    ],
    candidatesTitle: "도쿄 오픈데이터: 후보 데이터셋",
    candidatesSub: "MINFO가 다음에 연결하려는 카탈로그 항목과 검색 대상, 그리고 각각 무엇이 좋아지는지입니다. 아직 자동으로 가져오지 않습니다.",
    catalogCta: "도쿄 오픈데이터 카탈로그 보기",
    badges: {
      curated: "현재 수동 관리",
      candidate: "오픈데이터 후보",
      batch: "주기적 변경 · 향후 배치",
      live: "시간 민감 · 향후 API",
      searchTarget: "카탈로그 검색 대상",
    },
  },
  quality: {
    title: "MINFO 출처 품질 체크",
    sub: "일본 정부의 오픈데이터 품질 지침에서 영감을 받은 가벼운 체크리스트입니다. 공식 정부 평가가 아닙니다. MINFO의 모든 출처가 이 체크를 거칩니다.",
    items: [
      { label: "공식/공공 출처", desc: "정부 기관이나 공공 조직이 발행합니다." },
      { label: "링크 검증", desc: "URL을 직접 확인해 공식 페이지로 연결됩니다." },
      { label: "언어 접근성", desc: "다국어이거나 쉬운 일본어로 이용할 수 있습니다." },
      { label: "생활 밀착성", desc: "주민이 실제로 묻는 질문에 답합니다." },
      { label: "업데이트 가능", desc: "출처가 바뀌면 레코드를 갱신할 수 있습니다." },
      { label: "구 단위 확장 가능", desc: "같은 구조로 다른 구의 출처도 담을 수 있습니다." },
      { label: "피드백으로 개선", desc: "사용자 피드백으로 약한 출처를 찾아 고칠 수 있습니다." },
    ],
  },
  mascot: { alt: "MINFO 안내 마스코트" },
  whyMinfo: {
    title: "왜 MINFO인가, 검색이나 AI 챗이 아니라?",
    sub: "MINFO는 일반 지식에서 검색이나 범용 AI를 이기려는 것이 아닙니다. 지역의 한 가지 일을 제대로 합니다.",
    cards: [
      {
        title: "검색 엔진",
        body: "링크를 잔뜩 보여줍니다. 어떤 페이지가 공식이고 최신이며 신주쿠에 해당하는지는 직접 판단해야 합니다.",
      },
      {
        title: "일반 AI 챗",
        body: "폭넓은 일반 답변을 줍니다. 유용하지만 우리 구의 창구 정보에 기반하지 않고, 추측할 수도 있습니다.",
      },
      {
        title: "MINFO",
        body: "내 언어로, 공식 출처가 붙은 신주쿠의 '다음 행동'을 안내합니다. 모든 답변에 공식 출처가 붙고, 119/110 안내는 항상 동일합니다. MINFO는 실제 창구로 가는 내비게이터이지, 창구의 대체물이 아닙니다.",
      },
    ],
  },
  story: {
    title: "왜 신주쿠·오쿠보인가?",
    sub: "다국어 정보 접근을 위한 시빅테크 시범 사업. 도쿄 전역 확장을 목표로 합니다.",
    blocks: [
      {
        title: "문제",
        body: "일본의 공식 생활 정보는 신뢰할 수 있지만, 수십 개 사이트에 흩어져 있고 딱딱한 행정 일본어로 쓰여 있습니다. 낯선 제도를 제2언어로 헤쳐가는 주민에게는 '어느 창구인지', '어느 서류인지'조차 장벽이 됩니다.",
      },
      {
        title: "대상",
        body: "외국 출신 주민과 다언어 커뮤니티: 새로 온 주민, 유학생, 직장인, 가족, 그리고 그들을 돕는 지역 서포터. 능력이 아니라 언어와 정보 접근의 장벽에 부딪힌 사람들입니다.",
      },
      {
        title: "접근",
        body: "MINFO는 번역 챗봇이 아닙니다. 생활 제도를 쉬운 일본어를 포함한 6개 언어로 쉽게 설명하고, 항상 공식 출처를 보여주고, 올바른 실제 창구로 안내하는 시민 정보 내비게이터입니다. 창구를 대체하지 않습니다.",
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
    meta: "해커톤 프로토타입 2026 · 신주쿠·오쿠보 시범",
    emergencyTitle: "긴급 상황",
    fire: "화재·구급차",
    police: "경찰",
    freeNote: "무료 · 24시간 · 통역 지원",
  },
};

const vi: UIStrings = {
  brand: { subtitle: "Thông tin của mọi người", languageLabel: "Ngôn ngữ" },
  nav: {
    ask: "Hỏi",
    categories: "Danh mục",
    sources: "Nguồn tin",
    openData: "Dữ liệu mở",
    whyMinfo: "Vì sao MINFO?",
    why: "Vì sao Shinjuku?",
    backToTop: "Lên đầu trang",
  },
  emergencyBar: "Khẩn cấp? 119 Cứu hỏa / Cấp cứu · 110 Cảnh sát (miễn phí, 24h, có phiên dịch)",
  hero: {
    kicker: "Hướng dẫn dựa trên thông tin chính thức",
    headline: "Thông tin đời sống đáng tin cậy, bằng ngôn ngữ của bạn.",
    sub: "Bệnh viện, bảo hiểm, rác, thiên tai: MINFO giải thích đời sống ở Nhật một cách đơn giản, luôn kèm nguồn chính thức.",
    ctaAsk: "Hỏi MINFO",
    trustSources: "Mọi câu trả lời đều kèm nguồn chính thức",
    trustLanguages: "6 ngôn ngữ, gồm tiếng Nhật đơn giản (やさしい日本語)",
    trustPilot: "Bắt đầu từ Shinjuku / Okubo, mở rộng ra Tokyo",
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
    examples: "Câu hỏi thường gặp",
    thinking: "Đang kiểm tra các nguồn đáng tin cậy…",
    emptyHint: "Câu trả lời sẽ hiện ở đây, kèm nguồn.",
  },
  answer: {
    emergency: "Khẩn cấp",
    caution: "Lưu ý",
    steps: "Các bước tiếp theo",
    sources: "Nguồn chính thức & công cộng",
    lowConfidence: "MINFO chưa thể xác nhận hoàn toàn. Hãy kiểm tra với cơ quan chính thức.",
    disclaimer: "MINFO là bản thử nghiệm, không phải dịch vụ của chính phủ. Việc quan trọng hãy luôn xác nhận với cơ quan chính thức.",
    aiBadge: "Câu trả lời AI của Claude · nguồn được xác minh cục bộ",
    answerLabel: "Trả lời",
  },
  feedback: {
    question: "Câu trả lời này có hữu ích không?",
    helpful: "Hữu ích",
    confusing: "Khó hiểu",
    wrong: "Sai thông tin",
    language: "Cần ngôn ngữ của tôi",
    thanks: "Cảm ơn bạn. Phản hồi giúp MINFO tốt hơn.",
  },
  sources: {
    title: "Dựa trên thông tin chính thức & công cộng",
    sub: "MINFO chỉ trả lời từ các tổ chức chính thức và công cộng được chọn lọc. Mọi câu trả lời đều dẫn nguồn.",
    groupWard: "Quận Shinjuku",
    groupTokyo: "Chính quyền Tokyo",
    groupNational: "Cấp quốc gia",
    roadmapTitle: "Lộ trình dữ liệu mở",
    roadmapBadge: "Kế hoạch (chưa triển khai)",
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
        body: "Hiểu cư dân thực sự cần thông tin gì, chia sẻ với các quận như tín hiệu vì lợi ích chung, không bao giờ là dữ liệu cá nhân.",
      },
    ],
  },
  openData: {
    title: "Từ dữ liệu mở đến hướng dẫn dùng được",
    sub: "Dữ liệu mở chỉ hữu ích khi cư dân tìm được, hiểu được và hành động được. MINFO đảm nhận 'chặng cuối' đó.",
    now: {
      badge: "Đang dùng",
      body: "{count} bản ghi chọn lọc từ nguồn chính thức/công cộng đang tạo nên mọi câu trả lời và thẻ nguồn. Kiểm tra thủ công, cấu trúc sẵn sàng cho dữ liệu mở.",
    },
    next: {
      badge: "Ứng viên · chưa tự động lấy",
      body: "Các bộ dữ liệu mở Tokyo/Shinjuku bên dưới là ứng viên đã xác định, xếp theo mức hữu ích và nhu cầu cập nhật. Việc lấy tự động là bước tương lai.",
    },
    pipelineTitle: "Dữ liệu trở thành hướng dẫn như thế nào",
    pipeline: [
      { label: "Dữ liệu chính thức", desc: "Bộ dữ liệu mở hoặc trang chính thức" },
      { label: "Bản ghi chọn lọc", desc: "Đã kiểm tra, có cấu trúc, kèm nguồn" },
      { label: "Giải thích đa ngôn ngữ", desc: "Trả lời dễ hiểu bằng 6 thứ tiếng" },
      { label: "Hành động tiếp theo", desc: "Quầy đúng, các bước, hướng dẫn 119/110" },
    ],
    strategyTitle: "MINFO chọn cách lấy dữ liệu như thế nào",
    strategyIntro: "Không phải dữ liệu nào cũng cần API trực tiếp. Cách lấy tùy theo tốc độ thay đổi của thông tin:",
    strategy: [
      {
        title: "Thông tin ổn định",
        body: "Quy tắc và quầy liên hệ ít thay đổi. Bản ghi CSV/JSON chọn lọc là đủ cho MVP.",
      },
      {
        title: "Dữ liệu cập nhật định kỳ",
        body: "Danh sách cơ sở và thống kê. Có thể làm mới bằng tải CSV theo lịch hoặc cập nhật hàng loạt.",
      },
      {
        title: "Thông tin nhạy về thời gian",
        body: "Thiên tai, tình trạng nơi trú ẩn, đóng cửa đột xuất. Tương lai có thể cần API hoặc cập nhật tự động thường xuyên.",
      },
    ],
    candidatesTitle: "Dữ liệu Mở Tokyo: các bộ dữ liệu ứng viên",
    candidatesSub: "Các mục trong danh mục và mục tiêu tìm kiếm MINFO dự định kết nối tiếp theo, kèm điều mỗi bộ sẽ cải thiện. Chưa có mục nào được lấy tự động.",
    catalogCta: "Xem Danh mục Dữ liệu Mở Tokyo",
    badges: {
      curated: "Đang chọn lọc thủ công",
      candidate: "Ứng viên dữ liệu mở",
      batch: "Đổi định kỳ · tương lai: hàng loạt",
      live: "Nhạy thời gian · tương lai: API",
      searchTarget: "Mục tiêu tìm trong danh mục",
    },
  },
  quality: {
    title: "Kiểm tra chất lượng nguồn của MINFO",
    sub: "Danh sách kiểm tra gọn nhẹ, lấy cảm hứng từ hướng dẫn chất lượng dữ liệu mở của chính phủ Nhật. Không phải đánh giá chính thức của chính phủ. Mọi nguồn trong MINFO đều qua bước kiểm tra này.",
    items: [
      { label: "Nguồn chính thức/công cộng", desc: "Do cơ quan nhà nước hoặc tổ chức công cộng công bố." },
      { label: "Liên kết đã xác minh", desc: "URL được kiểm tra thủ công và dẫn đến trang chính thức." },
      { label: "Tiếp cận được về ngôn ngữ", desc: "Đa ngôn ngữ, hoặc dùng được với tiếng Nhật đơn giản." },
      { label: "Sát với đời sống", desc: "Trả lời câu hỏi cư dân thực sự hay hỏi." },
      { label: "Sẵn sàng cập nhật", desc: "Bản ghi có thể làm mới khi nguồn thay đổi." },
      { label: "Mở rộng theo quận", desc: "Cùng cấu trúc có thể chứa nguồn của quận khác." },
      { label: "Cải thiện nhờ phản hồi", desc: "Phản hồi của người dùng giúp phát hiện và sửa nguồn yếu." },
    ],
  },
  mascot: { alt: "Linh vật hướng dẫn MINFO" },
  whyMinfo: {
    title: "Vì sao MINFO, thay vì chỉ tìm kiếm hay AI chat?",
    sub: "MINFO không cố vượt công cụ tìm kiếm hay AI tổng quát về kiến thức chung. Nó làm tốt một việc tại địa phương.",
    cards: [
      {
        title: "Công cụ tìm kiếm",
        body: "Cho bạn nhiều liên kết. Bạn vẫn phải tự phán đoán trang nào chính thức, mới nhất và áp dụng cho Shinjuku.",
      },
      {
        title: "AI chat thông thường",
        body: "Trả lời rộng và chung chung. Hữu ích, nhưng không dựa trên các cơ quan của quận bạn, và có thể đoán.",
      },
      {
        title: "MINFO",
        body: "Bước tiếp theo cụ thể tại địa phương, bằng ngôn ngữ của bạn, kèm nguồn chính thức trên mọi câu trả lời, và hướng dẫn 119/110 luôn cố định. MINFO dẫn bạn đến cơ quan thật, không thay thế họ.",
      },
    ],
  },
  story: {
    title: "Vì sao Shinjuku / Okubo?",
    sub: "Dự án civic-tech thí điểm về tiếp cận thông tin đa ngôn ngữ, hướng tới mở rộng khắp Tokyo.",
    blocks: [
      {
        title: "Vấn đề",
        body: "Thông tin chính thức ở Nhật đáng tin cậy, nhưng rải rác trên hàng chục trang web và viết bằng tiếng Nhật hành chính khó hiểu. Với cư dân phải tìm hiểu một hệ thống xa lạ bằng ngôn ngữ thứ hai, cả câu hỏi đơn giản ('quầy nào?', 'mẫu nào?') cũng thành rào cản.",
      },
      {
        title: "Đối tượng",
        body: "Cư dân gốc nước ngoài và cộng đồng đa ngôn ngữ: người mới đến, du học sinh, người lao động, các gia đình, và những người hỗ trợ cộng đồng giúp họ. Họ gặp rào cản ngôn ngữ và tiếp cận thông tin, không phải thiếu năng lực.",
      },
      {
        title: "Cách tiếp cận",
        body: "MINFO không phải chatbot dịch thuật. Đó là người dẫn đường thông tin công dân: giải thích đơn giản các hệ thống đời sống bằng sáu ngôn ngữ (gồm tiếng Nhật đơn giản), luôn hiển thị nguồn chính thức, và dẫn bạn đến đúng cơ quan thực, không bao giờ thay thế cơ quan.",
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
    meta: "Nguyên mẫu hackathon 2026 · Thí điểm Shinjuku / Okubo",
    emergencyTitle: "Khẩn cấp",
    fire: "Cứu hỏa / Cấp cứu",
    police: "Cảnh sát",
    freeNote: "Miễn phí · 24h · có phiên dịch",
  },
};

const ne: UIStrings = {
  brand: { subtitle: "सबैको जानकारी", languageLabel: "भाषा" },
  nav: {
    ask: "सोध्नुहोस्",
    categories: "विषयहरू",
    sources: "स्रोतहरू",
    openData: "खुला डाटा",
    whyMinfo: "किन MINFO?",
    why: "किन Shinjuku?",
    backToTop: "माथि जानुहोस्",
  },
  emergencyBar: "आपतकाल? 119 आगो / एम्बुलेन्स · 110 प्रहरी (निःशुल्क, २४ घण्टा, दोभाषे उपलब्ध)",
  hero: {
    kicker: "आधिकारिक जानकारीमा आधारित मार्गदर्शन",
    headline: "भरपर्दो जीवन जानकारी, तपाईंकै भाषामा।",
    sub: "अस्पताल, बीमा, फोहोर, विपद्: MINFO ले जापानको दैनिक जीवन सजिलो भाषामा बुझाउँछ, सधैं आधिकारिक स्रोतसहित।",
    ctaAsk: "MINFO लाई सोध्नुहोस्",
    trustSources: "हरेक उत्तरमा आधिकारिक स्रोत देखिन्छ",
    trustLanguages: "६ भाषा, सजिलो जापानी (やさしい日本語) सहित",
    trustPilot: "Shinjuku / Okubo बाट सुरु, टोकियोभर विस्तार सम्भव",
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
    examples: "धेरै सोधिने प्रश्नहरू",
    thinking: "विश्वसनीय स्रोत जाँच्दै…",
    emptyHint: "उत्तर यहाँ स्रोतसहित देखिन्छ।",
  },
  answer: {
    emergency: "आपतकाल",
    caution: "ध्यान दिनुहोस्",
    steps: "अर्को कदम",
    sources: "आधिकारिक तथा सार्वजनिक स्रोत",
    lowConfidence: "MINFO ले पूर्ण पुष्टि गर्न सकेन। आधिकारिक कार्यालयमा बुझ्नुहोस्।",
    disclaimer: "MINFO प्रोटोटाइप हो, सरकारी सेवा होइन। महत्त्वपूर्ण कुरा सधैं आधिकारिक कार्यालयमा पुष्टि गर्नुहोस्।",
    aiBadge: "Claude को AI उत्तर · स्रोत स्थानीय रूपमा प्रमाणित",
    answerLabel: "उत्तर",
  },
  feedback: {
    question: "यो उत्तर उपयोगी थियो?",
    helpful: "उपयोगी",
    confusing: "अलमल्लमा पार्ने",
    wrong: "गलत जानकारी",
    language: "मेरो भाषा चाहियो",
    thanks: "धन्यवाद। तपाईंको सुझावले MINFO लाई राम्रो बनाउँछ।",
  },
  sources: {
    title: "आधिकारिक तथा सार्वजनिक जानकारीमा आधारित",
    sub: "MINFO ले छानिएका आधिकारिक/सार्वजनिक निकायबाट मात्र उत्तर दिन्छ। हरेक उत्तरमा स्रोत जोडिन्छ।",
    groupWard: "Shinjuku वडा",
    groupTokyo: "टोकियो महानगर",
    groupNational: "राष्ट्रिय निकाय",
    roadmapTitle: "खुला डाटा योजना",
    roadmapBadge: "योजना (अहिले छैन)",
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
        body: "बासिन्दालाई के जानकारी चाहिन्छ बुझ्ने। व्यक्तिगत डाटा होइन, सार्वजनिक हितको संकेतका रूपमा वडासँग साझा।",
      },
    ],
  },
  openData: {
    title: "खुला डाटाबाट, काम लाग्ने मार्गदर्शनसम्म",
    sub: "खुला डाटा बासिन्दाले भेट्टाउन, बुझ्न र काम गर्न सक्दा मात्र उपयोगी हुन्छ। MINFO ले त्यही 'अन्तिम खुड्किलो' बनाउँछ।",
    now: {
      badge: "अहिले प्रयोगमा",
      body: "आधिकारिक/सार्वजनिक स्रोतबाट छानिएका {count} रेकर्डले अहिलेका सबै उत्तर र स्रोत कार्ड चलाउँछन्। हातैले जाँचिएको, खुला डाटाका लागि तयार संरचना।",
    },
    next: {
      badge: "उम्मेदवार · अझै स्वतः लिइँदैन",
      body: "तलका टोकियो/Shinjuku खुला डाटासेट पहिचान गरिएका उम्मेदवार हुन्, उपयोगिता र अपडेट आवश्यकताअनुसार क्रमबद्ध। स्वतः लिने काम भविष्यको योजना हो।",
    },
    pipelineTitle: "डाटा कसरी मार्गदर्शन बन्छ",
    pipeline: [
      { label: "आधिकारिक डाटा", desc: "खुला डाटासेट वा आधिकारिक पृष्ठ" },
      { label: "छानिएको रेकर्ड", desc: "जाँचिएको, संरचित, स्रोतसहित" },
      { label: "बहुभाषिक व्याख्या", desc: "६ भाषामा सजिलो उत्तर" },
      { label: "अर्को कदम", desc: "सही डेस्क, चरण, 119/110 मार्गदर्शन" },
    ],
    strategyTitle: "MINFO ले डाटा लिने तरिका कसरी छान्छ",
    strategyIntro: "सबै डाटा लाइभ API हुनुपर्दैन। जानकारी कति छिटो बदलिन्छ, त्यसैअनुसार तरिका:",
    strategy: [
      {
        title: "स्थिर जानकारी",
        body: "कम बदलिने नियम र डेस्क। छानिएका CSV/JSON रेकर्ड MVP का लागि पर्याप्त छ।",
      },
      {
        title: "समय-समयमा बदलिने डाटा",
        body: "सुविधा सूची र तथ्याङ्क। तालिकाबद्ध CSV डाउनलोड वा ब्याच अपडेटले ताजा गर्न सकिन्छ।",
      },
      {
        title: "छिटो बदलिने जानकारी",
        body: "विपद्, आश्रयको अवस्था, अचानक बन्द। भविष्यमा API वा छिटो स्वचालित अपडेट चाहिन सक्छ।",
      },
    ],
    candidatesTitle: "टोकियो खुला डाटा: उम्मेदवार डाटासेट",
    candidatesSub: "MINFO ले अब जोड्न चाहेका क्याटलग सूची र खोज लक्ष्य, र हरेकले के सुधार्छ। अहिले कुनै पनि स्वतः लिइँदैन।",
    catalogCta: "टोकियो खुला डाटा क्याटलग हेर्नुहोस्",
    badges: {
      curated: "अहिले हातले छानिएको",
      candidate: "खुला डाटा उम्मेदवार",
      batch: "समय-समयमा बदलिने · भविष्य: ब्याच",
      live: "छिटो बदलिने · भविष्य: API",
      searchTarget: "क्याटलग खोज लक्ष्य",
    },
  },
  quality: {
    title: "MINFO स्रोत गुणस्तर जाँच",
    sub: "जापान सरकारको खुला डाटा गुणस्तर मार्गदर्शनबाट प्रेरित हल्का जाँचसूची। औपचारिक सरकारी मूल्याङ्कन होइन। MINFO का हरेक स्रोत यसबाट जाँचिन्छ।",
    items: [
      { label: "आधिकारिक/सार्वजनिक स्रोत", desc: "सरकारी निकाय वा सार्वजनिक संस्थाले प्रकाशित।" },
      { label: "लिंक प्रमाणित", desc: "URL हातैले जाँचेर आधिकारिक पृष्ठमा पुग्छ।" },
      { label: "भाषा पहुँचयोग्य", desc: "बहुभाषिक छ, वा सजिलो जापानीमा बुझिन्छ।" },
      { label: "दैनिक जीवनसँग सम्बन्धित", desc: "बासिन्दाले साँच्चै सोध्ने प्रश्नको उत्तर दिन्छ।" },
      { label: "अपडेट गर्न मिल्ने", desc: "स्रोत बदलिए रेकर्ड ताजा गर्न सकिन्छ।" },
      { label: "वडा-वडा विस्तारयोग्य", desc: "उही संरचनामा अरू वडाका स्रोत राख्न मिल्छ।" },
      { label: "सुझावले सुधारिने", desc: "प्रयोगकर्ताको सुझावले कमजोर स्रोत भेटेर सुधार्न सकिन्छ।" },
    ],
  },
  mascot: { alt: "MINFO गाइड मास्कट" },
  whyMinfo: {
    title: "किन MINFO, खोज वा AI च्याट मात्र होइन?",
    sub: "MINFO सामान्य ज्ञानमा खोज वा AI लाई जित्न खोज्दैन। यसले स्थानीय एउटा काम राम्ररी गर्छ।",
    cards: [
      {
        title: "सर्च इन्जिन",
        body: "धेरै लिंक दिन्छ। कुन आधिकारिक हो, नयाँ हो र Shinjuku मा लागू हुन्छ, आफैंले छुट्याउनुपर्छ।",
      },
      {
        title: "सामान्य AI च्याट",
        body: "फराकिलो, सामान्य उत्तर दिन्छ। उपयोगी, तर तपाईंको वडाका कार्यालयमा आधारित हुँदैन, अनुमान पनि गर्न सक्छ।",
      },
      {
        title: "MINFO",
        body: "तपाईंकै भाषामा, आधिकारिक स्रोतसहित स्थानीय 'अर्को कदम' दिन्छ। हरेक उत्तरमा स्रोत जोडिन्छ, र 119/110 मार्गदर्शन सधैं एउटै। MINFO वास्तविक कार्यालयसम्म पुर्‍याउने नेभिगेटर हो, विकल्प होइन।",
      },
    ],
  },
  story: {
    title: "किन Shinjuku / Okubo?",
    sub: "बहुभाषिक जानकारी पहुँचका लागि सिभिक-टेक पाइलट, टोकियोभर विस्तार गर्ने लक्ष्य।",
    blocks: [
      {
        title: "समस्या",
        body: "जापानको आधिकारिक जानकारी भरपर्दो छ, तर दर्जनौं साइटमा छरिएको र गाह्रो प्रशासनिक जापानीमा लेखिएको छ। दोस्रो भाषामा नयाँ प्रणाली बुझ्नुपर्ने बासिन्दालाई 'कुन काउन्टर?', 'कुन फारम?' जस्ता साना प्रश्न पनि अवरोध बन्छन्।",
      },
      {
        title: "लक्षित समूह",
        body: "विदेशी मूलका बासिन्दा र बहुभाषिक समुदाय: नयाँ आएका, विद्यार्थी, कामदार, परिवार, र उनीहरूलाई सघाउने सामुदायिक सहयोगीहरू। समस्या क्षमताको होइन, भाषा र जानकारी पहुँचको हो।",
      },
      {
        title: "समाधान",
        body: "MINFO अनुवाद च्याटबोट होइन। यो नागरिक जानकारी नेभिगेटर हो: ६ भाषामा (सजिलो जापानीसहित) जीवनका प्रणाली सजिलै बुझाउँछ, सधैं आधिकारिक स्रोत देखाउँछ, र सही कार्यालयसम्म पुर्‍याउँछ। कार्यालयको विकल्प बन्दैन।",
      },
      {
        title: "पाइलट → विस्तार",
        body: "Shinjuku / Okubo जापानकै सबैभन्दा बहुभाषिक टोलमध्ये एक हो, जीवन जानकारी चाहिने विद्यार्थी, कामदार र परिवारले भरिएको। यही 'विषय + विश्वसनीय स्रोत' संरचना वडा-वडा गर्दै टोकियोभर विस्तार गर्न सकिन्छ।",
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
    meta: "ह्याकाथन प्रोटोटाइप 2026 · Shinjuku / Okubo पाइलट",
    emergencyTitle: "आपतकाल",
    fire: "आगो / एम्बुलेन्स",
    police: "प्रहरी",
    freeNote: "निःशुल्क · २४ घण्टा · दोभाषे उपलब्ध",
  },
};

export const UI_STRINGS: Localized<UIStrings> = { en, ja, zh, ko, vi, ne };
