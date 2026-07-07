import type { AnswerTemplate, Localized, LocalizedAnswerContent } from "../types";

/**
 * Local answer templates (v1).
 * Each topic has source-grounded content in all six supported languages.
 * Content is intentionally short and plain — MINFO explains, then points
 * to official sources; it never replaces them.
 */
export const ANSWER_TEMPLATES: AnswerTemplate[] = [
  {
    id: "hospital",
    categoryId: "hospitals",
    safetyLevel: "caution",
    keywords: ["doctor", "hospital", "clinic", "sick", "medical", "medicine", "fever", "dentist", "病院", "医者"],
    sourceIds: ["himawari", "tabunka-plaza", "shinjuku-city"],
    content: {
      en: {
        direct:
          "You can see a doctor even if you don't speak Japanese. Tokyo's official 'Himawari' service finds hospitals and clinics by the language they speak, and its phone line can guide you in your language.",
        steps: [
          "Search Himawari online, or call 03-5285-8181 (daily 9:00–20:00) for guidance in your language.",
          "Bring your residence card and health insurance card to the clinic.",
          "If you are unsure where to start, Shinjuku Multicultural Plaza can help you in person.",
        ],
        safety:
          "If someone is seriously ill or injured right now, call 119 for an ambulance. Telephone interpretation is available.",
      },
      ja: {
        direct:
          "日本語が わからなくても、病院に 行くことが できます。東京都の「ひまわり」で、あなたの ことばが 通じる 病院を さがすことが できます。",
        steps: [
          "「ひまわり」の サイトを 見るか、電話 03-5285-8181（毎日 9時〜20時）に かけてください。",
          "在留カードと 保険証を 持って いってください。",
          "こまったときは、しんじゅく多文化共生プラザで 相談できます。",
        ],
        safety: "いま とても 具合が わるいときは、119に 電話して 救急車を よんでください。",
      },
      zh: {
        direct:
          "即使不会说日语，也可以看医生。东京都的官方服务「Himawari」可以按语言查找医院和诊所，其电话热线也能用您的语言提供指引。",
        steps: [
          "在线搜索 Himawari，或拨打 03-5285-8181（每天 9:00–20:00）。",
          "就诊时请携带在留卡和健康保险证。",
          "如果不知道从哪里开始，可以到新宿多文化共生广场当面咨询。",
        ],
        safety: "如果现在有人病重或受伤，请立即拨打 119 叫救护车。提供电话翻译。",
      },
      ko: {
        direct:
          "일본어를 못해도 병원에 갈 수 있습니다. 도쿄도의 공식 서비스 '히마와리(Himawari)'에서 사용 언어별로 병원을 찾을 수 있고, 전화로도 안내를 받을 수 있습니다.",
        steps: [
          "Himawari에서 검색하거나 03-5285-8181(매일 9:00–20:00)로 전화하세요.",
          "재류카드와 건강보험증을 가지고 가세요.",
          "막막할 때는 신주쿠 다문화공생플라자에서 직접 상담할 수 있습니다.",
        ],
        safety: "지금 누군가 심하게 아프거나 다쳤다면 119에 전화해 구급차를 부르세요. 전화 통역이 제공됩니다.",
      },
      vi: {
        direct:
          "Bạn vẫn có thể đi khám bác sĩ dù không nói được tiếng Nhật. Dịch vụ chính thức 'Himawari' của Tokyo giúp tìm bệnh viện theo ngôn ngữ, và có đường dây điện thoại hỗ trợ bằng tiếng của bạn.",
        steps: [
          "Tìm trên Himawari, hoặc gọi 03-5285-8181 (hằng ngày 9:00–20:00).",
          "Mang theo thẻ cư trú và thẻ bảo hiểm y tế khi đi khám.",
          "Nếu chưa biết bắt đầu từ đâu, hãy đến Shinjuku Multicultural Plaza để được hướng dẫn trực tiếp.",
        ],
        safety: "Nếu có người đang bệnh nặng hoặc bị thương, hãy gọi 119 để gọi xe cấp cứu. Có phiên dịch qua điện thoại.",
      },
      ne: {
        direct:
          "जापानी भाषा नआए पनि तपाईं डाक्टरकहाँ जान सक्नुहुन्छ। टोकियोको आधिकारिक सेवा 'Himawari' ले तपाईंको भाषा बोल्ने अस्पताल खोज्न मद्दत गर्छ।",
        steps: [
          "Himawari मा खोज्नुहोस्, वा 03-5285-8181 (हरेक दिन 9:00–20:00) मा फोन गर्नुहोस्।",
          "आफ्नो रेसिडेन्स कार्ड र स्वास्थ्य बीमा कार्ड लिएर जानुहोस्।",
          "कहाँबाट सुरु गर्ने थाहा नभए, Shinjuku Multicultural Plaza मा सल्लाह लिन सकिन्छ।",
        ],
        safety: "अहिले नै कोही गम्भीर बिरामी वा घाइते छ भने, 119 मा फोन गरेर एम्बुलेन्स बोलाउनुहोस्।",
      },
    },
  },
  {
    id: "insurance",
    categoryId: "hospitals",
    safetyLevel: "caution",
    keywords: ["insurance", "health insurance", "nhi", "premium", "保険", "国民健康保険"],
    sourceIds: ["shinjuku-city", "tokyo-metro", "tabunka-plaza"],
    content: {
      en: {
        direct:
          "If you live in Japan for three months or more, you are generally required to join health insurance. With a National Health Insurance card, you usually pay only 30% of medical costs at the hospital.",
        steps: [
          "Register for National Health Insurance at the Shinjuku City Office (unless your employer enrolls you).",
          "Premiums are based on your income — payment slips arrive by mail.",
          "Show your insurance card every time you visit a hospital or pharmacy.",
        ],
        safety:
          "Exact rules depend on your visa and job. Please confirm your case at the Shinjuku City Office counter.",
      },
      ja: {
        direct:
          "日本に 3か月より 長く 住む人は、健康保険に 入ります。「国民健康保険」の カードが あると、病院の お金は ふつう 30%だけに なります。",
        steps: [
          "新宿区役所で 国民健康保険に 入って ください（会社で 入る人も います）。",
          "お金（保険料）は 収入で きまります。はらう 紙が 家に とどきます。",
          "病院や 薬局では、いつも 保険証を 見せてください。",
        ],
        safety: "くわしい ルールは 人に よって ちがいます。新宿区役所で かくにん してください。",
      },
      zh: {
        direct:
          "在日本居住三个月以上的人原则上必须加入健康保险。持国民健康保险卡就医时，通常只需支付医疗费的 30%。",
        steps: [
          "到新宿区役所办理国民健康保险（如公司已为您加入社保则不需要）。",
          "保险费根据收入计算，缴费单会寄到家里。",
          "每次去医院或药店时请出示保险证。",
        ],
        safety: "具体规则因签证和工作情况而异，请到新宿区役所窗口确认您的情况。",
      },
      ko: {
        direct:
          "일본에 3개월 이상 거주하는 사람은 원칙적으로 건강보험에 가입해야 합니다. 국민건강보험증이 있으면 병원비는 보통 30%만 부담합니다.",
        steps: [
          "신주쿠 구청에서 국민건강보험에 가입하세요(회사에서 가입해 주는 경우 제외).",
          "보험료는 소득에 따라 정해지며, 납부 용지가 우편으로 옵니다.",
          "병원이나 약국에서는 항상 보험증을 제시하세요.",
        ],
        safety: "정확한 규정은 비자와 직업에 따라 다릅니다. 신주쿠 구청 창구에서 확인하세요.",
      },
      vi: {
        direct:
          "Người sống ở Nhật từ ba tháng trở lên về nguyên tắc phải tham gia bảo hiểm y tế. Có thẻ Bảo hiểm Y tế Quốc dân, bạn thường chỉ trả 30% chi phí khám chữa bệnh.",
        steps: [
          "Đăng ký Bảo hiểm Y tế Quốc dân tại Văn phòng quận Shinjuku (trừ khi công ty đã đăng ký cho bạn).",
          "Phí bảo hiểm tính theo thu nhập — giấy nộp tiền sẽ gửi về nhà.",
          "Luôn xuất trình thẻ bảo hiểm khi đến bệnh viện hoặc nhà thuốc.",
        ],
        safety: "Quy định cụ thể tùy theo visa và công việc. Hãy xác nhận tại quầy của Văn phòng quận Shinjuku.",
      },
      ne: {
        direct:
          "जापानमा तीन महिनाभन्दा बढी बस्नेले सामान्यतया स्वास्थ्य बीमामा सामेल हुनुपर्छ। राष्ट्रिय स्वास्थ्य बीमा कार्ड भए, अस्पतालमा प्रायः ३०% मात्र तिर्नुपर्छ।",
        steps: [
          "Shinjuku सिटी अफिसमा राष्ट्रिय स्वास्थ्य बीमा दर्ता गर्नुहोस् (कम्पनीले गरिदिएको भए बाहेक)।",
          "बीमा शुल्क आम्दानी अनुसार हुन्छ — तिर्ने कागज घरमा आउँछ।",
          "अस्पताल वा औषधि पसलमा सधैं बीमा कार्ड देखाउनुहोस्।",
        ],
        safety: "नियम भिसा र कामअनुसार फरक हुन्छ। Shinjuku सिटी अफिसमा आफ्नो अवस्था बुझ्नुहोस्।",
      },
    },
  },
  {
    id: "garbage",
    categoryId: "garbage",
    keywords: ["garbage", "trash", "waste", "recycle", "rubbish", "dispose", "ごみ", "ゴミ"],
    sourceIds: ["shinjuku-garbage", "shinjuku-city"],
    content: {
      en: {
        direct:
          "In Shinjuku, garbage is separated into burnable, metal/ceramic/glass, plastics, bottles & cans, paper, and oversized items — each with its own collection day depending on your address. Official multilingual guides exist.",
        steps: [
          "Check the collection days for your exact address on the Shinjuku City site or your building's notice board.",
          "Put garbage out by 8:00 AM on the collection day, in transparent or semi-transparent bags.",
          "Oversized items (furniture, etc.) need a paid reservation before disposal.",
        ],
      },
      ja: {
        direct:
          "新宿区では、ごみを 分けて 出します。もえるごみ、金属・ガラス、プラスチック、びん・かん、紙、大きい ごみなどです。出す 曜日は 住所で ちがいます。",
        steps: [
          "自分の 住所の ごみの 曜日を、新宿区の サイトか 建物の けいじばんで 見てください。",
          "ごみの 日の 朝 8時までに、透明の ふくろで 出してください。",
          "大きい ごみは、先に 電話や ネットで 予約が 必要です（お金が かかります）。",
        ],
      },
      zh: {
        direct:
          "在新宿区，垃圾需要分类：可燃垃圾、金属/陶瓷/玻璃、塑料、瓶罐、纸类和大型垃圾等。收集日因住址而异。官方提供多语言指南。",
        steps: [
          "在新宿区官网或公寓公告栏查询您住址的收集日。",
          "收集日早上 8 点前，用透明或半透明袋子扔出。",
          "大型垃圾（家具等）需要提前付费预约。",
        ],
      },
      ko: {
        direct:
          "신주쿠구에서는 쓰레기를 분리해 버립니다: 타는 쓰레기, 금속/도자기/유리, 플라스틱, 병·캔, 종이, 대형 쓰레기 등. 수거 요일은 주소에 따라 다릅니다.",
        steps: [
          "신주쿠구 사이트나 건물 게시판에서 내 주소의 수거 요일을 확인하세요.",
          "수거일 아침 8시까지 투명/반투명 봉투에 담아 내놓으세요.",
          "대형 쓰레기(가구 등)는 사전에 유료 예약이 필요합니다.",
        ],
      },
      vi: {
        direct:
          "Ở Shinjuku, rác phải được phân loại: rác đốt được, kim loại/gốm/thủy tinh, nhựa, chai lọ & lon, giấy, và rác cỡ lớn — ngày thu gom tùy theo địa chỉ. Có hướng dẫn chính thức bằng nhiều ngôn ngữ.",
        steps: [
          "Xem ngày thu gom của địa chỉ bạn trên trang web quận Shinjuku hoặc bảng thông báo của tòa nhà.",
          "Bỏ rác trước 8 giờ sáng ngày thu gom, dùng túi trong suốt hoặc bán trong suốt.",
          "Rác cỡ lớn (đồ nội thất...) cần đặt lịch và trả phí trước.",
        ],
      },
      ne: {
        direct:
          "Shinjuku मा फोहोर छुट्याएर फाल्नुपर्छ: जल्ने फोहोर, धातु/सिसा, प्लास्टिक, बोतल र क्यान, कागज, र ठूला सामान। फाल्ने दिन ठेगाना अनुसार फरक हुन्छ।",
        steps: [
          "आफ्नो ठेगानाको संकलन दिन Shinjuku सिटीको वेबसाइट वा भवनको सूचना पाटीमा हेर्नुहोस्।",
          "संकलन दिनको बिहान ८ बजेअघि पारदर्शी झोलामा राखेर फाल्नुहोस्।",
          "ठूला सामान (फर्निचर आदि) फाल्न पहिले शुल्क तिरेर बुकिङ गर्नुपर्छ।",
        ],
      },
    },
  },
  {
    id: "earthquake",
    categoryId: "disaster",
    safetyLevel: "caution",
    keywords: ["earthquake", "disaster", "typhoon", "evacuation", "evacuate", "emergency bag", "地震", "災害"],
    sourceIds: ["tokyo-bousai", "shinjuku-city", "tokyo-opendata"],
    content: {
      en: {
        direct:
          "During an earthquake: protect your head, get under a sturdy table, and stay away from windows. Do not rush outside while the shaking continues. Afterward, check official multilingual updates from Tokyo Bousai.",
        steps: [
          "Learn the evacuation area for your neighborhood in advance (Shinjuku City publishes maps).",
          "Prepare water, food, and essentials for about three days.",
          "Get multilingual disaster alerts from the Tokyo Bousai website and disaster-info apps.",
        ],
        safety: "If someone is injured or a fire breaks out, call 119 immediately.",
      },
      ja: {
        direct:
          "地震のときは、あたまを まもって、つよい テーブルの 下に 入ってください。まどから はなれてください。ゆれている あいだは、外に 出ないでください。",
        steps: [
          "自分の 家の 近くの ひなん場所を、前もって しらべてください（新宿区の 地図が あります）。",
          "水と 食べものを 3日分 よういしてください。",
          "「東京都防災」の サイトで、いろいろな ことばの 情報が 見られます。",
        ],
        safety: "けがを した人や 火事が あるときは、すぐ 119に 電話してください。",
      },
      zh: {
        direct:
          "地震时：保护头部，躲到结实的桌子下，远离窗户。摇晃期间不要冲到室外。之后请查看东京都防灾网站的多语言官方信息。",
        steps: [
          "提前了解您所在街区的避难场所（新宿区有公开地图）。",
          "准备约三天的水、食物和必需品。",
          "通过东京都防灾网站和防灾 App 获取多语言警报。",
        ],
        safety: "如有人受伤或发生火灾，请立即拨打 119。",
      },
      ko: {
        direct:
          "지진이 나면: 머리를 보호하고 튼튼한 탁자 아래로 들어가며 창문에서 떨어지세요. 흔들리는 동안 밖으로 뛰쳐나가지 마세요. 이후 도쿄 방재(Tokyo Bousai)의 다국어 공식 정보를 확인하세요.",
        steps: [
          "미리 우리 동네의 피난 장소를 알아두세요(신주쿠구가 지도를 공개합니다).",
          "물과 식량 등 약 3일분을 준비해 두세요.",
          "도쿄 방재 사이트와 재해정보 앱에서 다국어 알림을 받으세요.",
        ],
        safety: "다친 사람이 있거나 불이 나면 즉시 119에 전화하세요.",
      },
      vi: {
        direct:
          "Khi có động đất: bảo vệ đầu, chui xuống gầm bàn chắc chắn, tránh xa cửa sổ. Đừng chạy ra ngoài khi còn rung lắc. Sau đó, xem thông tin chính thức đa ngôn ngữ trên Tokyo Bousai.",
        steps: [
          "Tìm hiểu trước khu vực sơ tán của khu phố bạn (quận Shinjuku có bản đồ công khai).",
          "Chuẩn bị nước, thức ăn và đồ thiết yếu cho khoảng ba ngày.",
          "Nhận cảnh báo đa ngôn ngữ từ trang Tokyo Bousai và các ứng dụng thông tin thiên tai.",
        ],
        safety: "Nếu có người bị thương hoặc xảy ra hỏa hoạn, hãy gọi 119 ngay.",
      },
      ne: {
        direct:
          "भूकम्प आउँदा: टाउको जोगाउनुहोस्, बलियो टेबलमुनि बस्नुहोस्, झ्यालबाट टाढा रहनुहोस्। हल्लिरहेको बेला बाहिर नदौडनुहोस्। पछि Tokyo Bousai को बहुभाषिक आधिकारिक जानकारी हेर्नुहोस्।",
        steps: [
          "आफ्नो टोलको आपतकालीन आश्रयस्थल पहिले नै थाहा पाउनुहोस् (Shinjuku सिटीको नक्सा छ)।",
          "करिब तीन दिनका लागि पानी, खाना र आवश्यक सामान तयार राख्नुहोस्।",
          "Tokyo Bousai वेबसाइट र विपद् जानकारी एपबाट बहुभाषिक सूचना पाउनुहोस्।",
        ],
        safety: "कोही घाइते भए वा आगलागी भए, तुरुन्तै 119 मा फोन गर्नुहोस्।",
      },
    },
  },
  {
    id: "japanese-learning",
    categoryId: "japanese",
    keywords: ["learn japanese", "japanese class", "study japanese", "language class", "日本語教室", "kanji"],
    sourceIds: ["tabunka-plaza", "shinjuku-city", "tokyo-metro"],
    content: {
      en: {
        direct:
          "There are free and low-cost Japanese classes near Okubo. Shinjuku Multicultural Plaza runs classes and can connect you with volunteer teachers; the city also lists community classes around Okubo and Takadanobaba.",
        steps: [
          "Visit or contact Shinjuku Multicultural Plaza to find a class that fits your level and schedule.",
          "Check Shinjuku City's list of Japanese classes for locations near you.",
          "Many classes welcome beginners — you can start without any Japanese.",
        ],
      },
      ja: {
        direct:
          "大久保の 近くに、安い 日本語教室が たくさん あります。しんじゅく多文化共生プラザで、教室や ボランティアの 先生を しょうかい しています。",
        steps: [
          "しんじゅく多文化共生プラザに 行って、自分に あう 教室を 聞いてください。",
          "新宿区の サイトにも 教室の リストが あります。",
          "はじめての 人も だいじょうぶです。",
        ],
      },
      zh: {
        direct:
          "大久保附近有免费或低价的日语教室。新宿多文化共生广场开设课程，还能介绍志愿者老师；区政府也公布大久保、高田马场周边的社区教室名单。",
        steps: [
          "前往或联系新宿多文化共生广场，找到适合您水平和时间的课程。",
          "在新宿区官网查看日语教室列表。",
          "许多教室欢迎零基础学员。",
        ],
      },
      ko: {
        direct:
          "오쿠보 근처에 무료·저렴한 일본어 교실이 많습니다. 신주쿠 다문화공생플라자가 수업을 운영하고 자원봉사 선생님도 연결해 주며, 구청도 오쿠보·다카다노바바 주변 교실 목록을 공개합니다.",
        steps: [
          "신주쿠 다문화공생플라자에 방문하거나 연락해 나에게 맞는 수업을 찾으세요.",
          "신주쿠구 사이트의 일본어 교실 목록을 확인하세요.",
          "왕초보도 환영하는 교실이 많습니다.",
        ],
      },
      vi: {
        direct:
          "Gần Okubo có nhiều lớp tiếng Nhật miễn phí hoặc giá rẻ. Shinjuku Multicultural Plaza mở lớp và giới thiệu giáo viên tình nguyện; quận cũng công bố danh sách lớp học quanh Okubo và Takadanobaba.",
        steps: [
          "Đến hoặc liên hệ Shinjuku Multicultural Plaza để tìm lớp phù hợp với trình độ và lịch của bạn.",
          "Xem danh sách lớp tiếng Nhật trên trang web quận Shinjuku.",
          "Nhiều lớp chào đón người mới bắt đầu — chưa biết tiếng Nhật vẫn học được.",
        ],
      },
      ne: {
        direct:
          "Okubo नजिकै निःशुल्क वा सस्ता जापानी भाषा कक्षाहरू छन्। Shinjuku Multicultural Plaza ले कक्षा चलाउँछ र स्वयंसेवक शिक्षक पनि जोडिदिन्छ।",
        steps: [
          "Shinjuku Multicultural Plaza मा गएर आफ्नो स्तर र समय मिल्ने कक्षा सोध्नुहोस्।",
          "Shinjuku सिटीको वेबसाइटमा कक्षाहरूको सूची हेर्नुहोस्।",
          "धेरै कक्षामा शुरुवाती विद्यार्थीलाई पनि स्वागत छ।",
        ],
      },
    },
  },
  {
    id: "consultation",
    categoryId: "consultation",
    keywords: ["consultation", "help", "advice", "counter", "city office", "ward office", "support", "english", "相談", "窓口"],
    sourceIds: ["tabunka-plaza", "fresc", "shinjuku-city"],
    content: {
      en: {
        direct:
          "You don't need to know which counter to go to — that's what consultation desks are for. Shinjuku Multicultural Plaza offers free consultation in multiple languages, and FRESC in Yotsuya gathers national support desks in one building.",
        steps: [
          "Start at Shinjuku Multicultural Plaza for everyday questions — staff will point you to the right office.",
          "For immigration, work, or legal matters, FRESC offers desks with interpretation.",
          "At the Shinjuku City Office, ask for the foreign residents' consultation service.",
        ],
      },
      ja: {
        direct:
          "どこの 窓口か わからなくても、だいじょうぶです。しんじゅく多文化共生プラザで、いろいろな ことばで 無料相談が できます。四ツ谷の FRESCにも、国の 相談窓口が あつまっています。",
        steps: [
          "まず しんじゅく多文化共生プラザに 行ってください。正しい 窓口を おしえてくれます。",
          "在留資格や 仕事の ことは、FRESCで 相談できます（通訳が あります）。",
          "新宿区役所には、外国人の ための 相談窓口が あります。",
        ],
      },
      zh: {
        direct:
          "不知道该去哪个窗口也没关系——咨询窗口就是为此而设的。新宿多文化共生广场提供多语言免费咨询，四谷的 FRESC 则汇集了国家级支援窗口。",
        steps: [
          "日常问题先去新宿多文化共生广场，工作人员会告诉您正确的窗口。",
          "签证、劳动、法律问题可到 FRESC 咨询（有翻译）。",
          "新宿区役所设有面向外国居民的咨询服务。",
        ],
      },
      ko: {
        direct:
          "어느 창구로 가야 할지 몰라도 괜찮습니다 — 상담 창구가 바로 그런 곳입니다. 신주쿠 다문화공생플라자는 여러 언어로 무료 상담을 제공하고, 요쓰야의 FRESC에는 국가 지원 창구가 모여 있습니다.",
        steps: [
          "일상적인 질문은 먼저 신주쿠 다문화공생플라자에서 — 올바른 창구를 안내해 줍니다.",
          "체류자격·노동·법률 문제는 통역이 있는 FRESC에서 상담하세요.",
          "신주쿠 구청에는 외국인 주민 상담 서비스가 있습니다.",
        ],
      },
      vi: {
        direct:
          "Không biết phải đến quầy nào cũng không sao — quầy tư vấn sinh ra để giúp việc đó. Shinjuku Multicultural Plaza tư vấn miễn phí bằng nhiều ngôn ngữ, và FRESC ở Yotsuya tập hợp các quầy hỗ trợ quốc gia.",
        steps: [
          "Câu hỏi đời sống hằng ngày: đến Shinjuku Multicultural Plaza trước — nhân viên sẽ chỉ đúng nơi cần đến.",
          "Vấn đề cư trú, lao động, pháp lý: FRESC có quầy tư vấn kèm phiên dịch.",
          "Tại Văn phòng quận Shinjuku có dịch vụ tư vấn cho cư dân nước ngoài.",
        ],
      },
      ne: {
        direct:
          "कुन काउन्टरमा जाने थाहा नभए पनि हुन्छ — सल्लाह डेस्कहरू त्यसैका लागि हुन्। Shinjuku Multicultural Plaza मा धेरै भाषामा निःशुल्क परामर्श पाइन्छ, र Yotsuya को FRESC मा राष्ट्रिय सहायता डेस्कहरू एकै ठाउँमा छन्।",
        steps: [
          "दैनिक जीवनका प्रश्नका लागि पहिले Shinjuku Multicultural Plaza जानुहोस् — कर्मचारीले सही कार्यालय देखाइदिन्छन्।",
          "भिसा, काम वा कानुनी कुराका लागि FRESC मा दोभाषेसहित परामर्श पाइन्छ।",
          "Shinjuku सिटी अफिसमा विदेशी बासिन्दाका लागि परामर्श सेवा छ।",
        ],
      },
    },
  },
  {
    id: "tax",
    categoryId: "taxes",
    safetyLevel: "caution",
    keywords: ["tax", "taxes", "pension", "nenkin", "notice", "bill", "payment", "resident tax", "税金", "年金"],
    sourceIds: ["nta", "shinjuku-city", "nenkin"],
    content: {
      en: {
        direct:
          "A tax notice usually means a payment or a procedure is required. Common ones are resident tax (from Shinjuku City) and national pension (from the Japan Pension Service). The most important rule: don't ignore it — deadlines matter.",
        steps: [
          "Check which office sent the letter — the sender's name is printed on it.",
          "Take the letter to that office, or to a consultation desk to read it together.",
          "If paying is difficult, ask about reductions, exemptions, or installment plans — these exist.",
        ],
        safety:
          "MINFO cannot confirm your specific tax amount or obligation. Please confirm with the office that issued the notice or a qualified professional.",
      },
      ja: {
        direct:
          "税金の 手紙は、お金を はらうか、手続きが 必要という 意味が 多いです。よく あるのは 住民税（新宿区から）と 年金（日本年金機構から）です。手紙を そのままに しないでください。",
        steps: [
          "手紙の 送り主（どこから 来たか）を 見てください。",
          "その 事務所か、相談窓口に 手紙を 持って いってください。いっしょに 読んでくれます。",
          "はらうのが むずかしいときは、へらす・わける 制度が あります。聞いてみてください。",
        ],
        safety: "あなたの 税金の 金額は、MINFOでは わかりません。手紙を 出した 事務所で かくにん してください。",
      },
      zh: {
        direct:
          "收到税务通知通常意味着需要缴费或办理手续。常见的有住民税（新宿区寄出）和国民年金（日本年金机构寄出）。最重要的原则：不要置之不理——有缴纳期限。",
        steps: [
          "确认信件由哪个机构寄出（信上印有寄件方名称）。",
          "带着信件去该机构，或到咨询窗口请工作人员一起阅读。",
          "如果缴费困难，可以询问减免或分期制度——这些制度是存在的。",
        ],
        safety: "MINFO 无法确认您具体的税额或义务。请向发出通知的机构或专业人士确认。",
      },
      ko: {
        direct:
          "세금 통지서는 보통 납부나 절차가 필요하다는 뜻입니다. 흔한 것은 주민세(신주쿠구 발송)와 국민연금(일본연금기구 발송)입니다. 가장 중요한 것: 무시하지 마세요 — 기한이 있습니다.",
        steps: [
          "어느 기관이 보냈는지 확인하세요(발신자가 인쇄되어 있습니다).",
          "그 기관이나 상담 창구에 통지서를 가져가 함께 읽어 달라고 하세요.",
          "납부가 어려우면 감면·분할 제도를 문의하세요 — 실제로 존재합니다.",
        ],
        safety: "MINFO는 개인의 세액이나 납부 의무를 확인할 수 없습니다. 통지서를 보낸 기관이나 전문가에게 확인하세요.",
      },
      vi: {
        direct:
          "Giấy báo thuế thường có nghĩa là cần nộp tiền hoặc làm thủ tục. Phổ biến nhất là thuế cư trú (từ quận Shinjuku) và lương hưu quốc dân (từ Cơ quan Hưu trí Nhật Bản). Quan trọng nhất: đừng bỏ qua — có thời hạn.",
        steps: [
          "Xem cơ quan nào gửi thư — tên nơi gửi in trên thư.",
          "Mang thư đến cơ quan đó, hoặc đến quầy tư vấn để đọc cùng nhân viên.",
          "Nếu khó nộp, hãy hỏi về chế độ giảm, miễn hoặc trả góp — các chế độ này có thật.",
        ],
        safety: "MINFO không thể xác nhận số thuế hay nghĩa vụ cụ thể của bạn. Hãy xác nhận với cơ quan gửi giấy báo hoặc chuyên gia.",
      },
      ne: {
        direct:
          "करको चिठी आयो भने प्रायः पैसा तिर्नु वा कुनै प्रक्रिया गर्नुपर्छ भन्ने हो। सामान्यतया बासिन्दा कर (Shinjuku सिटीबाट) र राष्ट्रिय पेन्सन (Japan Pension Service बाट) आउँछ। सबैभन्दा महत्त्वपूर्ण: बेवास्ता नगर्नुहोस् — म्याद हुन्छ।",
        steps: [
          "चिठी कुन कार्यालयबाट आयो हेर्नुहोस् — पठाउनेको नाम छापिएको हुन्छ।",
          "त्यो कार्यालय वा परामर्श डेस्कमा चिठी लिएर जानुहोस् — सँगै पढिदिन्छन्।",
          "तिर्न गाह्रो भए छुट, माफी वा किस्ताको व्यवस्थाबारे सोध्नुहोस् — यस्ता व्यवस्था छन्।",
        ],
        safety: "MINFO ले तपाईंको करको रकम यकिन गर्न सक्दैन। चिठी पठाउने कार्यालय वा विशेषज्ञसँग बुझ्नुहोस्।",
      },
    },
  },
  {
    id: "housing",
    categoryId: "housing",
    safetyLevel: "caution",
    keywords: ["housing", "apartment", "rent", "landlord", "guarantor", "deposit", "lease", "contract", "家", "賃貸"],
    sourceIds: ["tokyo-metro", "tabunka-plaza", "fresc"],
    content: {
      en: {
        direct:
          "Renting in Japan has some unique rules: you often need a guarantor or guarantor company, and initial costs can include a deposit (shikikin) and key money (reikin). Official multilingual guidebooks explain contracts step by step.",
        steps: [
          "Read Tokyo's multilingual renting guide before signing anything.",
          "Ask a consultation desk to check the contract with you if anything is unclear.",
          "Budget for initial costs — often 4–6 months of rent in total.",
        ],
        safety:
          "For disputes with a landlord or agency, don't rely on general advice — consult FRESC or a qualified professional.",
      },
      ja: {
        direct:
          "日本で 家を かりるとき、特別な ルールが あります。保証人か 保証会社が 必要なことが 多いです。はじめに 敷金・礼金という お金も かかります。",
        steps: [
          "契約の 前に、東京都の 外国人向け ガイドブックを 読んでください。",
          "わからない ことが あったら、相談窓口で 契約書を いっしょに 見てもらってください。",
          "はじめの お金は、家賃の 4〜6か月分くらい かかることが 多いです。",
        ],
        safety: "大家さんや 不動産屋さんと トラブルに なったら、FRESCや 専門家に 相談してください。",
      },
      zh: {
        direct:
          "在日本租房有一些特殊规则：通常需要保证人或保证公司，初期费用可能包括押金（敷金）和礼金。官方多语言指南会逐步解释合同内容。",
        steps: [
          "签约前请先阅读东京都的多语言租房指南。",
          "合同有不明白的地方，可请咨询窗口一起确认。",
          "初期费用通常合计为 4–6 个月房租，请提前预算。",
        ],
        safety: "与房东或中介发生纠纷时，请咨询 FRESC 或专业人士，不要只依赖一般性建议。",
      },
      ko: {
        direct:
          "일본에서 집을 빌릴 때는 독특한 규칙이 있습니다: 보증인이나 보증회사가 필요한 경우가 많고, 초기 비용에 보증금(시키킨)과 사례금(레이킨)이 포함될 수 있습니다. 공식 다국어 가이드북이 계약을 단계별로 설명합니다.",
        steps: [
          "계약 전에 도쿄도의 다국어 임대 가이드를 읽으세요.",
          "이해되지 않는 부분은 상담 창구에서 계약서를 함께 확인 받으세요.",
          "초기 비용은 보통 월세 4–6개월분 — 미리 예산을 잡으세요.",
        ],
        safety: "집주인·부동산과의 분쟁은 일반적인 조언에 의존하지 말고 FRESC나 전문가와 상담하세요.",
      },
      vi: {
        direct:
          "Thuê nhà ở Nhật có những quy tắc riêng: thường cần người bảo lãnh hoặc công ty bảo lãnh, chi phí ban đầu có thể gồm tiền cọc (shikikin) và tiền lễ (reikin). Sách hướng dẫn đa ngôn ngữ chính thức giải thích hợp đồng từng bước.",
        steps: [
          "Đọc hướng dẫn thuê nhà đa ngôn ngữ của Tokyo trước khi ký bất cứ gì.",
          "Nếu có điểm chưa rõ, nhờ quầy tư vấn xem hợp đồng cùng bạn.",
          "Dự trù chi phí ban đầu — thường tổng cộng 4–6 tháng tiền nhà.",
        ],
        safety: "Khi tranh chấp với chủ nhà hoặc môi giới, hãy tư vấn với FRESC hoặc chuyên gia có chuyên môn.",
      },
      ne: {
        direct:
          "जापानमा घर भाडामा लिँदा केही खास नियम छन्: प्रायः जमानीकर्ता (guarantor) वा जमानी कम्पनी चाहिन्छ, र सुरुको खर्चमा धरौटी (shikikin) र 'की मनी' (reikin) पर्न सक्छ। आधिकारिक बहुभाषिक गाइडबुकले सम्झौता बुझाउँछ।",
        steps: [
          "केही सही गर्नुअघि टोकियोको बहुभाषिक भाडा गाइड पढ्नुहोस्।",
          "नबुझेको कुरा भए परामर्श डेस्कमा सम्झौता सँगै जँचाउनुहोस्।",
          "सुरुको खर्च प्रायः ४–६ महिनाको भाडाबराबर हुन्छ — बजेट तयार राख्नुहोस्।",
        ],
        safety: "घरधनी वा एजेन्सीसँग विवाद भए FRESC वा योग्य विशेषज्ञसँग सल्लाह लिनुहोस्।",
      },
    },
  },
  {
    id: "residence-card",
    categoryId: "consultation",
    safetyLevel: "caution",
    keywords: ["residence card", "zairyu", "visa", "immigration", "status of residence", "lost card", "在留カード", "ビザ"],
    sourceIds: ["isa", "fresc", "shinjuku-city"],
    content: {
      en: {
        direct:
          "If you lose your residence card, stay calm — there is a clear procedure. Report the loss to the police first, then apply for a re-issue at the Immigration Services Agency within 14 days.",
        steps: [
          "Go to a police station or koban and file a lost-property report (you'll get a report number).",
          "Apply for re-issuance at the Tokyo Regional Immigration Bureau within 14 days, with a photo and your passport.",
          "If you're unsure about any step, FRESC can guide you with interpretation.",
        ],
        safety:
          "Residence status rules are legal matters. Always confirm details with the Immigration Services Agency — MINFO cannot give immigration advice.",
      },
      ja: {
        direct:
          "在留カードを なくしても、あわてないでください。決まった 手続きが あります。まず 警察に とどけて、14日以内に 入管（にゅうかん）で 新しい カードを もらいます。",
        steps: [
          "交番か 警察署で「なくしました」と とどけてください（番号を もらえます）。",
          "14日以内に、東京出入国在留管理局で 再発行の 手続きを してください。写真と パスポートが 必要です。",
          "わからないときは、FRESCで 通訳つきで 相談できます。",
        ],
        safety: "在留資格の ことは 法律の 問題です。かならず 入管で かくにん してください。",
      },
      zh: {
        direct:
          "在留卡丢失不要慌——有明确的手续流程。先向警察报失，然后在 14 天内到出入国在留管理厅申请补发。",
        steps: [
          "到派出所或警察署办理遗失申报（会拿到受理号码）。",
          "14 天内到东京出入国在留管理局申请补发，需要照片和护照。",
          "不清楚流程时，可到 FRESC 咨询（有翻译）。",
        ],
        safety: "在留资格属于法律事务，请务必向出入国在留管理厅确认——MINFO 不能提供签证建议。",
      },
      ko: {
        direct:
          "재류카드를 잃어버려도 침착하세요 — 명확한 절차가 있습니다. 먼저 경찰에 분실 신고를 하고, 14일 이내에 출입국재류관리청에서 재발급을 신청하세요.",
        steps: [
          "파출소(고반)나 경찰서에서 분실 신고를 하세요(접수 번호를 받습니다).",
          "14일 이내에 도쿄 출입국재류관리국에서 사진과 여권을 가지고 재발급을 신청하세요.",
          "절차가 불확실하면 FRESC에서 통역과 함께 안내받을 수 있습니다.",
        ],
        safety: "체류자격은 법률 문제입니다. 반드시 출입국재류관리청에 확인하세요 — MINFO는 출입국 관련 조언을 할 수 없습니다.",
      },
      vi: {
        direct:
          "Mất thẻ cư trú? Hãy bình tĩnh — có quy trình rõ ràng. Trước tiên báo mất với cảnh sát, sau đó xin cấp lại tại Cục Quản lý Xuất nhập cảnh trong vòng 14 ngày.",
        steps: [
          "Đến đồn cảnh sát hoặc koban khai báo mất đồ (bạn sẽ nhận số biên nhận).",
          "Trong 14 ngày, nộp đơn xin cấp lại tại Cục Quản lý Xuất nhập cảnh Tokyo, mang theo ảnh và hộ chiếu.",
          "Nếu chưa rõ bước nào, FRESC có thể hướng dẫn kèm phiên dịch.",
        ],
        safety: "Tư cách cư trú là vấn đề pháp lý. Luôn xác nhận với Cục Quản lý Xuất nhập cảnh — MINFO không thể tư vấn về visa.",
      },
      ne: {
        direct:
          "रेसिडेन्स कार्ड हरायो भने नआत्तिनुहोस् — स्पष्ट प्रक्रिया छ। पहिले प्रहरीमा खबर गर्नुहोस्, अनि १४ दिनभित्र Immigration Services Agency मा नयाँ कार्डका लागि निवेदन दिनुहोस्।",
        steps: [
          "प्रहरी चौकी (koban) मा हराएको रिपोर्ट गर्नुहोस् (रिपोर्ट नम्बर पाइन्छ)।",
          "१४ दिनभित्र फोटो र राहदानीसहित Tokyo Regional Immigration Bureau मा पुनः जारीको निवेदन दिनुहोस्।",
          "कुनै चरण नबुझे FRESC मा दोभाषेसहित सहयोग पाइन्छ।",
        ],
        safety: "भिसा र बसाइको नियम कानुनी विषय हो। विवरण Immigration Services Agency मै बुझ्नुहोस् — MINFO ले भिसा सल्लाह दिन सक्दैन।",
      },
    },
  },
  {
    id: "police",
    categoryId: "emergency",
    safetyLevel: "emergency",
    keywords: ["unsafe", "danger", "police", "crime", "theft", "stolen", "stalker", "harassment", "violence", "scared", "警察"],
    sourceIds: ["tokyo-metro", "fresc", "tabunka-plaza"],
    content: {
      en: {
        direct:
          "If you are in danger right now, call 110 (police) — it's free, 24 hours, and interpretation is available. For worries that are not urgent, the police consultation line #9110 and local consultation desks can help.",
        steps: [
          "In immediate danger: call 110, or go to the nearest koban (police box).",
          "Not urgent but worried: call #9110 for police consultation.",
          "You can also talk to Shinjuku Multicultural Plaza — they will help you decide what to do next.",
        ],
        safety: "Emergency: call 110 for police. Call 119 for fire or ambulance. Both are free and work from any phone.",
      },
      ja: {
        direct:
          "いま あぶないときは、110（警察）に 電話してください。無料で、24時間、通訳も あります。急がない 心配ごとは、#9110や 相談窓口で 話せます。",
        steps: [
          "いま あぶない：110に 電話するか、近くの 交番に 行ってください。",
          "急がないけど 心配：#9110（警察相談）に 電話してください。",
          "しんじゅく多文化共生プラザでも 相談できます。",
        ],
        safety: "緊急のとき：警察は 110、火事・救急車は 119です。どちらも 無料です。",
      },
      zh: {
        direct:
          "如果您现在处于危险中，请拨打 110（警察）——免费、24 小时、提供翻译。不紧急的担忧可拨打警察咨询专线 #9110 或前往咨询窗口。",
        steps: [
          "正处于危险中：拨打 110，或前往最近的交番（派出所）。",
          "不紧急但担心：拨打 #9110 警察咨询专线。",
          "也可以向新宿多文化共生广场倾诉，他们会帮您决定下一步。",
        ],
        safety: "紧急情况：报警拨 110，火灾·救护车拨 119。均免费，任何电话都能拨打。",
      },
      ko: {
        direct:
          "지금 위험하다면 110(경찰)에 전화하세요 — 무료, 24시간, 통역 지원. 급하지 않은 걱정은 경찰 상담전화 #9110이나 지역 상담 창구를 이용하세요.",
        steps: [
          "당장 위험할 때: 110에 전화하거나 가까운 고반(파출소)으로 가세요.",
          "급하지 않은 걱정: #9110 경찰 상담전화로 전화하세요.",
          "신주쿠 다문화공생플라자와 상담해 다음 행동을 정할 수도 있습니다.",
        ],
        safety: "긴급: 경찰은 110, 화재·구급차는 119. 모두 무료이며 어떤 전화에서도 걸 수 있습니다.",
      },
      vi: {
        direct:
          "Nếu bạn đang gặp nguy hiểm ngay bây giờ, hãy gọi 110 (cảnh sát) — miễn phí, 24 giờ, có phiên dịch. Với lo lắng chưa khẩn cấp, có đường dây tư vấn cảnh sát #9110 và các quầy tư vấn địa phương.",
        steps: [
          "Nguy hiểm ngay lập tức: gọi 110, hoặc đến koban (chốt cảnh sát) gần nhất.",
          "Chưa khẩn cấp nhưng lo lắng: gọi #9110 để được cảnh sát tư vấn.",
          "Bạn cũng có thể nói chuyện với Shinjuku Multicultural Plaza để quyết định bước tiếp theo.",
        ],
        safety: "Khẩn cấp: gọi 110 cho cảnh sát. Gọi 119 cho cứu hỏa hoặc cấp cứu. Cả hai đều miễn phí.",
      },
      ne: {
        direct:
          "अहिले नै खतरामा हुनुहुन्छ भने 110 (प्रहरी) मा फोन गर्नुहोस् — निःशुल्क, २४ घण्टा, दोभाषे उपलब्ध। हतार नभएको चिन्ताका लागि प्रहरी परामर्श लाइन #9110 वा स्थानीय परामर्श डेस्क छन्।",
        steps: [
          "तुरुन्तको खतरा: 110 मा फोन गर्नुहोस्, वा नजिकको koban (प्रहरी चौकी) जानुहोस्।",
          "हतार छैन तर चिन्ता छ: #9110 मा फोन गर्नुहोस्।",
          "Shinjuku Multicultural Plaza सँग पनि कुरा गर्न सकिन्छ — के गर्ने भन्ने निर्णयमा सघाउँछन्।",
        ],
        safety: "आपतकाल: प्रहरीका लागि 110। आगलागी वा एम्बुलेन्सका लागि 119। दुवै निःशुल्क छन्।",
      },
    },
  },
  {
    id: "ambulance",
    categoryId: "emergency",
    safetyLevel: "emergency",
    keywords: ["ambulance", "119", "emergency", "injured", "bleeding", "unconscious", "heart", "breathing", "救急車"],
    sourceIds: ["tokyo-fire", "himawari"],
    content: {
      en: {
        direct:
          "For a medical emergency, call 119 now. It is free, works from any phone, and the operator can connect telephone interpretation. Say 'Kyūkyū desu' (I need an ambulance), then give your address or a nearby landmark.",
        steps: [
          "Call 119. Say 'Kyūkyū desu', then the address — stay on the line.",
          "Unlock the door if you can, and have your residence card and insurance card ready.",
          "Not sure if it's an emergency? Call #7119 for advice (24 hours, Tokyo).",
        ],
        safety: "Call 119 immediately for a medical emergency or fire. Do not wait.",
      },
      ja: {
        direct:
          "救急のときは、いますぐ 119に 電話してください。無料です。通訳も つなげます。「きゅうきゅうです」と 言って、住所を 言ってください。",
        steps: [
          "119に 電話：「きゅうきゅうです」と 言って、住所を 言います。電話を 切らないでください。",
          "できたら ドアを あけて、在留カードと 保険証を 用意してください。",
          "救急車を よぶか まよったら、#7119に 電話してください（24時間）。",
        ],
        safety: "病気や けがの 緊急のときは、すぐ 119です。まってはいけません。",
      },
      zh: {
        direct:
          "遇到医疗紧急情况，请立即拨打 119。免费、任何电话都可拨打，接线员可接通电话翻译。说「Kyūkyū desu」（需要救护车），然后报出地址或附近地标。",
        steps: [
          "拨打 119，说「Kyūkyū desu」，再报地址——不要挂断电话。",
          "可能的话打开房门，准备好在留卡和保险证。",
          "不确定是否紧急？拨打 #7119 咨询（东京，24 小时）。",
        ],
        safety: "医疗紧急情况或火灾请立即拨打 119，不要等待。",
      },
      ko: {
        direct:
          "의료 응급상황이면 지금 119에 전화하세요. 무료이고 어떤 전화로도 걸 수 있으며, 전화 통역 연결이 가능합니다. '큐큐데스(구급입니다)'라고 말한 뒤 주소나 근처 랜드마크를 알려주세요.",
        steps: [
          "119에 전화: '큐큐데스'라고 말하고 주소를 알려주세요 — 전화를 끊지 마세요.",
          "가능하면 문을 열어두고 재류카드와 보험증을 준비하세요.",
          "응급인지 애매하면 #7119로 상담하세요(도쿄, 24시간).",
        ],
        safety: "의료 응급상황·화재 시 즉시 119. 기다리지 마세요.",
      },
      vi: {
        direct:
          "Cấp cứu y tế: hãy gọi 119 ngay. Miễn phí, gọi được từ mọi điện thoại, tổng đài có thể kết nối phiên dịch. Nói 'Kyūkyū desu' (cần xe cấp cứu), rồi đọc địa chỉ hoặc địa danh gần đó.",
        steps: [
          "Gọi 119, nói 'Kyūkyū desu', rồi đọc địa chỉ — đừng cúp máy.",
          "Nếu có thể, mở khóa cửa và chuẩn bị thẻ cư trú, thẻ bảo hiểm.",
          "Không chắc có phải cấp cứu? Gọi #7119 để được tư vấn (Tokyo, 24 giờ).",
        ],
        safety: "Gọi 119 ngay khi có cấp cứu y tế hoặc hỏa hoạn. Đừng chần chừ.",
      },
      ne: {
        direct:
          "मेडिकल आपतकाल भए अहिले नै 119 मा फोन गर्नुहोस्। निःशुल्क छ, जुनसुकै फोनबाट लाग्छ, र अपरेटरले दोभाषे जोडिदिन सक्छ। 'Kyūkyū desu' (एम्बुलेन्स चाहियो) भन्नुहोस्, अनि ठेगाना भन्नुहोस्।",
        steps: [
          "119 मा फोन गर्नुहोस्: 'Kyūkyū desu' भनेर ठेगाना दिनुहोस् — फोन नकाट्नुहोस्।",
          "सकिन्छ भने ढोका खोल्नुहोस्, रेसिडेन्स कार्ड र बीमा कार्ड तयार राख्नुहोस्।",
          "आपतकाल हो/होइन थाहा नभए #7119 मा सोध्नुहोस् (टोकियो, २४ घण्टा)।",
        ],
        safety: "मेडिकल आपतकाल वा आगलागीमा तुरुन्तै 119। नपर्खनुहोस्।",
      },
    },
  },
  {
    id: "easy-japanese",
    categoryId: "japanese",
    keywords: ["easy japanese", "yasashii", "simple japanese", "explain simply", "やさしい日本語"],
    sourceIds: ["tabunka-plaza", "tokyo-metro"],
    content: {
      en: {
        direct:
          "Yes — MINFO is designed to explain things in やさしい日本語 (Easy Japanese): short sentences and simple words, an approach recommended by Japanese public offices for sharing information.",
        steps: [
          "Switch the language selector at the top to やさしい日本語.",
          "Every answer will use short, simple Japanese sentences.",
          "Staff at Shinjuku Multicultural Plaza can also rephrase difficult documents for you.",
        ],
      },
      ja: {
        direct:
          "はい。MINFOは「やさしい日本語」で 説明できます。みじかい 文と かんたんな ことばを つかいます。",
        steps: [
          "上の ことばの ボタンで「やさしい日本語」を えらんでください。",
          "こたえが ぜんぶ やさしい日本語に なります。",
          "むずかしい 書類は、しんじゅく多文化共生プラザでも やさしく 説明してくれます。",
        ],
      },
      zh: {
        direct:
          "可以——MINFO 支持用「やさしい日本語」（简明日语）解释：短句子、简单词汇。这是日本公共机构推荐的信息传达方式。",
        steps: [
          "在页面顶部的语言选择器中选择「やさしい日本語」。",
          "所有回答都会变成简短易懂的日语。",
          "新宿多文化共生广场的工作人员也能帮您把难懂的文件改写得更简单。",
        ],
      },
      ko: {
        direct:
          "네 — MINFO는 やさしい日本語(쉬운 일본어)로 설명할 수 있습니다: 짧은 문장과 쉬운 단어로, 일본 공공기관이 권장하는 정보 전달 방식입니다.",
        steps: [
          "상단의 언어 선택기에서 やさしい日本語를 선택하세요.",
          "모든 답변이 짧고 쉬운 일본어로 표시됩니다.",
          "신주쿠 다문화공생플라자 직원도 어려운 서류를 쉽게 풀어 설명해 줍니다.",
        ],
      },
      vi: {
        direct:
          "Có — MINFO có thể giải thích bằng やさしい日本語 (tiếng Nhật đơn giản): câu ngắn, từ dễ, cách truyền đạt được các cơ quan công của Nhật khuyến nghị.",
        steps: [
          "Chọn やさしい日本語 ở bộ chọn ngôn ngữ phía trên.",
          "Mọi câu trả lời sẽ dùng tiếng Nhật ngắn gọn, dễ hiểu.",
          "Nhân viên Shinjuku Multicultural Plaza cũng có thể diễn giải giấy tờ khó bằng lời đơn giản.",
        ],
      },
      ne: {
        direct:
          "हुन्छ — MINFO ले やさしい日本語 (सजिलो जापानी) मा बुझाउन सक्छ: छोटा वाक्य र सजिला शब्द। यो जापानका सरकारी निकायहरूले सिफारिस गरेको तरिका हो।",
        steps: [
          "माथिको भाषा छनोटमा やさしい日本語 रोज्नुहोस्।",
          "सबै उत्तर छोटो, सजिलो जापानीमा देखिन्छ।",
          "Shinjuku Multicultural Plaza का कर्मचारीले पनि गाह्रा कागजात सजिलो भाषामा बुझाइदिन्छन्।",
        ],
      },
    },
  },
];

export const TEMPLATE_MAP = Object.fromEntries(
  ANSWER_TEMPLATES.map((t) => [t.id, t])
) as Record<string, AnswerTemplate>;

/** Shown when no topic matches — honest "no reliable answer" behavior. */
export const FALLBACK_CONTENT: Localized<LocalizedAnswerContent> = {
  en: {
    direct:
      "I couldn't confirm a reliable answer for this from MINFO's trusted sources yet. Rather than guess, I recommend asking a real consultation desk — they handle any daily-life topic, in many languages, for free.",
    steps: [
      "Visit Shinjuku Multicultural Plaza for free multilingual consultation.",
      "For national procedures (visa, work, legal), contact FRESC.",
      "Try rephrasing your question, or tap one of the topics below.",
    ],
    safety: "For anything urgent or official, please confirm directly with the relevant public office.",
  },
  ja: {
    direct:
      "ごめんなさい。この 質問の たしかな こたえは、まだ MINFOに ありません。相談窓口の 人に 聞くのが いちばん 安心です。無料で、いろいろな ことばで 話せます。",
    steps: [
      "しんじゅく多文化共生プラザで 相談してください（無料）。",
      "ビザや 仕事の ことは、FRESCに 聞いてください。",
      "ことばを かえて、もういちど 質問してみてください。",
    ],
    safety: "たいせつな ことは、かならず 役所で かくにん してください。",
  },
  zh: {
    direct:
      "抱歉，MINFO 的可信来源中暂时没有这个问题的确切答案。与其猜测，我建议您咨询真正的咨询窗口——免费、多语言、什么生活问题都可以问。",
    steps: [
      "到新宿多文化共生广场进行免费多语言咨询。",
      "签证、工作、法律等国家级手续请联系 FRESC。",
      "也可以换个说法再问一次，或点击下方的主题。",
    ],
    safety: "任何紧急或正式事项，请直接向相关公共机构确认。",
  },
  ko: {
    direct:
      "죄송합니다. 이 질문에 대한 확실한 답을 MINFO의 신뢰 소스에서 아직 찾지 못했습니다. 추측하는 대신 실제 상담 창구에 문의하시길 권합니다 — 무료이고 여러 언어로 어떤 생활 주제든 상담할 수 있습니다.",
    steps: [
      "신주쿠 다문화공생플라자에서 무료 다국어 상담을 받으세요.",
      "비자·노동·법률 등 국가 절차는 FRESC에 문의하세요.",
      "질문을 바꿔서 다시 해보거나, 아래 주제를 눌러보세요.",
    ],
    safety: "긴급하거나 공식적인 사항은 해당 공공기관에 직접 확인하세요.",
  },
  vi: {
    direct:
      "Xin lỗi, MINFO chưa tìm được câu trả lời đáng tin cậy cho câu hỏi này từ các nguồn chính thức. Thay vì đoán, tôi khuyên bạn hỏi quầy tư vấn thực — miễn phí, nhiều ngôn ngữ, mọi chủ đề đời sống.",
    steps: [
      "Đến Shinjuku Multicultural Plaza để được tư vấn đa ngôn ngữ miễn phí.",
      "Thủ tục quốc gia (visa, lao động, pháp lý): liên hệ FRESC.",
      "Thử diễn đạt lại câu hỏi, hoặc chọn một chủ đề bên dưới.",
    ],
    safety: "Việc khẩn cấp hoặc chính thức: hãy xác nhận trực tiếp với cơ quan công liên quan.",
  },
  ne: {
    direct:
      "माफ गर्नुहोस्, यो प्रश्नको भरपर्दो उत्तर MINFO का विश्वसनीय स्रोतमा अहिले छैन। अनुमान गर्नुभन्दा वास्तविक परामर्श डेस्कमा सोध्नु राम्रो — निःशुल्क, धेरै भाषामा, जुनसुकै दैनिक विषयमा।",
    steps: [
      "Shinjuku Multicultural Plaza मा निःशुल्क बहुभाषिक परामर्श लिनुहोस्।",
      "भिसा, काम, कानुनी विषयका लागि FRESC मा सम्पर्क गर्नुहोस्।",
      "प्रश्न अर्को तरिकाले सोध्नुहोस्, वा तलका विषय थिच्नुहोस्।",
    ],
    safety: "जरुरी वा आधिकारिक कुरा सम्बन्धित सरकारी कार्यालयमै बुझ्नुहोस्।",
  },
};

export const FALLBACK_SOURCE_IDS = ["tabunka-plaza", "fresc", "shinjuku-city"];
