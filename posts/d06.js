// D-06 · 환전·유심·와이파이
window.POST = {
  brand: "여권영어", code: "D-06", handle: "@passport_eng", series: "환전·유심 편",
  caption: `해외 도착하면 인터넷부터 연결하세요

지도도 번역기도 인터넷이 있어야 쓸 수 있으니까요.

Where can I exchange money? 환전은 어디서 해요?
I'd like to buy a SIM card. 유심을 사고 싶어요
For seven days, please. 7일짜리로 주세요
What's the Wi-Fi password? 와이파이 비밀번호가 뭐예요?

설정이 어려우면 휴대폰을 건네면서 Can you set it up for me?
요즘은 eSIM을 한국에서 미리 사 가셔도 편해요.

#여행영어 #해외여행준비 #해외여행영어 #시니어영어 #여권영어`,
  slides: [
    { type: "cover", label: "Arrival · 환전·유심",
      hook: "도착하자마자\n*인터넷부터*\n연결하세요",
      sub: "환전소, 유심,\n와이파이 비밀번호 묻기",
      stub: [["FROM", "한국어"], ["TO", "English"], ["SEAT", "5문장"]] },

    { type: "intro", label: "먼저 알아두세요",
      title: "지도와 번역기는\n인터넷이 있어야 해요",
      text: "공항에서 *유심이나 와이파이*부터\n해결하면 나머지 여행이\n훨씬 쉬워집니다." },

    { type: "expr", label: "질문 1 · 환전",
      en: "Where can I / exchange money?", pr: "웨어 캔 아이 익스{체}인지 {머}니?", ko: "환전은 어디서 해요?",
      tip: "표지판\n*Currency Exchange*를 찾으세요." },

    { type: "expr", label: "유심 1 · 사고 싶을 때",
      en: "I'd like to buy / a SIM card.", pr: "아이드 라익 투 {바}이 어 {심} 카드", ko: "유심을 사고 싶어요.",
      tip: "요즘은 *eSIM* (이{심})을\n한국에서 미리 사 가기도 해요." },

    { type: "expr", label: "유심 2 · 기간",
      en: "For seven days, / please.", pr: "포 {세}븐 데이즈, 플리즈", ko: "7일짜리로 주세요.",
      tip: "데이터 무제한은\n*unlimited data* (언{리}미티드 {데}이터)" },

    { type: "expr", label: "유심 3 · 설정 부탁",
      en: "Can you set it up / for me?", pr: "캔 유 셋 잇 {업} 포 미?", ko: "설정 좀 해주시겠어요?",
      tip: "휴대폰을 *건네면서*\n말하세요." },

    { type: "expr", label: "와이파이 · 비밀번호",
      en: "What's the / Wi-Fi password?", pr: "왓츠 더 {와}이파이 {패}스워드?", ko: "와이파이 비밀번호가 뭐예요?",
      tip: "식당·호텔·카페 어디서나 쓰는\n*만능 질문*이에요." },

    { type: "summary", title: "캡처해서\n여권 옆에 두세요",
      rows: [
        ["Where can I exchange money?", "환전은 어디서 해요?"],
        ["I'd like to buy a SIM card.", "유심을 사고 싶어요 · 심 카드"],
        ["For seven days, please.", "7일짜리로 주세요 · 세븐 데이즈"],
        ["Can you set it up for me?", "설정 좀 해주세요 · 셋 잇 업"],
        ["What's the Wi-Fi password?", "와이파이 비밀번호가 뭐예요?"]
      ] },

    { type: "show",
      big: "I'd like to buy\na *SIM card*\nfor seven days.",
      ko: "7일짜리 유심을 사고 싶어요." },

    { type: "cta", stamp: "SAVE FOR TRIP",
      title: "내일은\n1주차 보여주기\n카드 모음",
      steps: ["*저장*해두고 공항에서 꺼내 보기", "여행 가는 *친구·가족에게 보내기*", "다음 편: *1주차 SHOW 카드 6장*"] }
  ]
};
