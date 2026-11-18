// D-05 · 공항에서 택시·셔틀 타기
window.POST = {
  brand: "여권영어", code: "D-05", handle: "@passport_eng", series: "공항 교통 편",
  caption: `공항에서 택시, 셔틀 타는 곳 묻기

표지판에서 Taxi, Shuttle, Ground Transportation 세 단어만 찾으세요.
못 찾겠으면 이렇게 물어보면 됩니다.

Where can I get a taxi? 택시 어디서 타요?
Where is the hotel shuttle? 호텔 셔틀은 어디서 타요?
How much is it to downtown? 시내까지 얼마예요?

택시에서는 숙소 주소 화면을 보여주면서 To this address, please.
숙소 주소는 출발 전에 영어로 저장해 두세요.

#여행영어 #공항영어 #해외여행영어 #시니어영어 #여권영어`,
  slides: [
    { type: "cover", label: "Arrival · 공항 교통",
      hook: "공항 밖으로\n나가는 길,\n*5문장*이면 돼요",
      sub: "택시·셔틀 타는 곳 묻기부터\n요금 내기까지",
      stub: [["FROM", "한국어"], ["TO", "English"], ["SEAT", "5문장"]] },

    { type: "intro", label: "먼저 알아두세요",
      title: "표지판 단어\n3개만 아세요",
      text: "*Taxi* 택시 · *Shuttle* 셔틀버스\n*Ground Transportation* 교통편\n이 글자만 따라가도 밖으로 나갈 수 있어요." },

    { type: "expr", label: "질문 1 · 택시",
      en: "Where can I / get a taxi?", pr: "웨어 캔 아이 겟 어 {택}시?", ko: "택시는 어디서 타요?",
      tip: "영국·호주에서는\n*taxi rank* ({택}시 랭크)라고도 해요." },

    { type: "expr", label: "질문 2 · 셔틀",
      en: "Where is / the hotel shuttle?", pr: "웨어 이즈 더 호{텔} {셔}틀?", ko: "호텔 셔틀은 어디서 타요?",
      tip: "셔틀 시간은\n*예약 확인 메일*에 있는 경우가 많아요." },

    { type: "expr", label: "택시 1 · 목적지",
      en: "To this address, / please.", pr: "투 디스 {어}드레스, 플리즈", ko: "이 주소로 가주세요.",
      tip: "주소 화면을 *보여주면서*\n말하면 끝이에요." },

    { type: "expr", label: "택시 2 · 요금 묻기",
      en: "How much is it / to downtown?", pr: "하우 {머}치 이즈 잇 투 다운{타}운?", ko: "시내까지 얼마예요?",
      tip: "*타기 전에* 물어보면\n마음이 편해요." },

    { type: "expr", label: "택시 3 · 결제",
      en: "Can I pay / by card?", pr: "캔 아이 {페}이 바이 {카}드?", ko: "카드로 내도 돼요?",
      tip: "현금이면\n*In cash.* (인 {캐}쉬)" },

    { type: "summary", title: "캡처해서\n여권 옆에 두세요",
      rows: [
        ["Where can I get a taxi?", "택시 어디서 타요? · 겟 어 택시"],
        ["Where is the hotel shuttle?", "호텔 셔틀은 어디서 타요?"],
        ["To this address, please.", "이 주소로 가주세요"],
        ["How much is it to downtown?", "시내까지 얼마예요?"],
        ["Can I pay by card?", "카드로 내도 돼요? · 페이 바이 카드"]
      ] },

    { type: "show",
      big: "Please take me\nto *this address.*",
      ko: "이 주소로 데려다주세요. (이 화면과 함께 숙소 주소를 보여주세요)" },

    { type: "cta", stamp: "SAVE FOR TRIP",
      title: "숙소 주소,\n영어로 저장해\n두셨나요?",
      steps: ["*저장*해두고 공항에서 꺼내 보기", "여행 가는 *친구·가족에게 보내기*", "다음 편: *환전·유심·와이파이*"] }
  ]
};
