import type { DemoPrompt } from "../types";

/**
 * Example prompt chips. Each chip carries its topicId so clicking one
 * gives a deterministic, source-grounded answer in the current language.
 */
export const DEMO_PROMPTS: DemoPrompt[] = [
  {
    topicId: "hospital",
    label: {
      en: "I need to see a doctor but I don't speak Japanese.",
      ja: "日本語がわかりません。病院に行きたいです。",
      zh: "我需要看医生，但不会说日语。",
      ko: "일본어를 못하는데 병원에 가야 해요.",
      vi: "Tôi cần đi khám nhưng không nói được tiếng Nhật.",
      ne: "डाक्टर देखाउनु छ तर जापानी बोल्न आउँदैन।",
    },
  },
  {
    topicId: "insurance",
    label: {
      en: "How do I use health insurance in Japan?",
      ja: "健康保険はどうつかいますか？",
      zh: "在日本怎么使用健康保险？",
      ko: "일본에서 건강보험은 어떻게 쓰나요?",
      vi: "Dùng bảo hiểm y tế ở Nhật như thế nào?",
      ne: "जापानमा स्वास्थ्य बीमा कसरी प्रयोग गर्ने?",
    },
  },
  {
    topicId: "garbage",
    label: {
      en: "How do I sort garbage in Shinjuku?",
      ja: "新宿のごみの分け方をおしえてください。",
      zh: "在新宿怎么分类垃圾？",
      ko: "신주쿠에서 쓰레기는 어떻게 분리하나요?",
      vi: "Phân loại rác ở Shinjuku như thế nào?",
      ne: "Shinjuku मा फोहोर कसरी छुट्याउने?",
    },
  },
  {
    topicId: "earthquake",
    label: {
      en: "What should I do during an earthquake?",
      ja: "地震のとき、どうすればいいですか？",
      zh: "地震时该怎么办？",
      ko: "지진이 나면 어떻게 해야 하나요?",
      vi: "Khi có động đất tôi nên làm gì?",
      ne: "भूकम्प आउँदा के गर्ने?",
    },
  },
  {
    topicId: "japanese-learning",
    label: {
      en: "Where can I learn Japanese near Okubo?",
      ja: "大久保の近くで日本語を勉強したいです。",
      zh: "大久保附近哪里能学日语？",
      ko: "오쿠보 근처에서 일본어를 배우고 싶어요.",
      vi: "Học tiếng Nhật gần Okubo ở đâu?",
      ne: "Okubo नजिक जापानी कहाँ सिक्ने?",
    },
  },
  {
    topicId: "consultation",
    label: {
      en: "Where can I ask for help about daily life?",
      ja: "生活のこまりごとはどこで相談できますか？",
      zh: "生活上的困难可以去哪里求助？",
      ko: "생활 고민은 어디에 물어볼 수 있나요?",
      vi: "Tôi có thể hỏi giúp đỡ về đời sống ở đâu?",
      ne: "दैनिक जीवनका समस्या कहाँ सोध्ने?",
    },
  },
  {
    topicId: "tax",
    label: {
      en: "I received a tax notice and don't understand it.",
      ja: "税金の手紙が来ました。わかりません。",
      zh: "我收到了税务通知，看不懂。",
      ko: "세금 통지서를 받았는데 이해가 안 돼요.",
      vi: "Tôi nhận được giấy báo thuế mà không hiểu.",
      ne: "करको चिठी आयो, बुझिनँ।",
    },
  },
  {
    topicId: "housing",
    label: {
      en: "I'm looking for housing and need help with the rules.",
      ja: "家をさがしています。ルールをおしえてください。",
      zh: "我在找房子，需要了解相关规则。",
      ko: "집을 구하는데 규칙을 알고 싶어요.",
      vi: "Tôi đang tìm nhà và cần hiểu các quy tắc.",
      ne: "घर खोज्दै छु, नियम बुझ्न सहयोग चाहियो।",
    },
  },
  {
    topicId: "residence-card",
    label: {
      en: "What should I do if I lose my residence card?",
      ja: "在留カードをなくしました。どうすればいいですか？",
      zh: "在留卡丢了该怎么办？",
      ko: "재류카드를 잃어버리면 어떻게 하나요?",
      vi: "Mất thẻ cư trú thì phải làm gì?",
      ne: "रेसिडेन्स कार्ड हराए के गर्ने?",
    },
  },
  {
    topicId: "police",
    label: {
      en: "Who can I contact if I feel unsafe?",
      ja: "こわいとき、あぶないとき、どこに電話しますか？",
      zh: "感到不安全时可以联系谁？",
      ko: "불안하거나 위험할 때 어디에 연락하나요?",
      vi: "Khi cảm thấy không an toàn, tôi liên hệ ai?",
      ne: "असुरक्षित महसुस भए कसलाई सम्पर्क गर्ने?",
    },
  },
  {
    topicId: "consultation",
    label: {
      en: "Where can I get consultation in English?",
      ja: "英語で相談できる場所はありますか？",
      zh: "哪里可以用英语咨询？",
      ko: "영어로 상담할 수 있는 곳이 있나요?",
      vi: "Tư vấn bằng tiếng Anh ở đâu?",
      ne: "अंग्रेजीमा परामर्श कहाँ पाइन्छ?",
    },
  },
  {
    topicId: "easy-japanese",
    label: {
      en: "Can you explain this in Easy Japanese?",
      ja: "やさしい日本語で説明してください。",
      zh: "能用简明日语解释吗？",
      ko: "쉬운 일본어로 설명해 줄 수 있나요?",
      vi: "Giải thích bằng tiếng Nhật đơn giản được không?",
      ne: "सजिलो जापानीमा बुझाइदिनुहुन्छ?",
    },
  },
  {
    topicId: "ambulance",
    label: {
      en: "What should I do if I need an ambulance?",
      ja: "救急車が必要なとき、どうしますか？",
      zh: "需要救护车时该怎么做？",
      ko: "구급차가 필요하면 어떻게 하나요?",
      vi: "Khi cần xe cấp cứu tôi phải làm gì?",
      ne: "एम्बुलेन्स चाहिए के गर्ने?",
    },
  },
  {
    topicId: "earthquake",
    label: {
      en: "Where can I find disaster info in my language?",
      ja: "災害の情報はどこで見られますか？",
      zh: "在哪里能找到我的语言的防灾信息？",
      ko: "내 언어로 된 재난 정보는 어디서 보나요?",
      vi: "Tìm thông tin thiên tai bằng tiếng của tôi ở đâu?",
      ne: "आफ्नै भाषामा विपद् जानकारी कहाँ पाइन्छ?",
    },
  },
  {
    topicId: "consultation",
    label: {
      en: "I don't know which city office counter to contact.",
      ja: "役所のどの窓口かわかりません。",
      zh: "我不知道该联系区役所的哪个窗口。",
      ko: "구청 어느 창구로 가야 할지 모르겠어요.",
      vi: "Tôi không biết phải đến quầy nào ở văn phòng quận.",
      ne: "सिटी अफिसको कुन काउन्टरमा जाने थाहा छैन।",
    },
  },
];
