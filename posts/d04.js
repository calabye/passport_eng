// D-04 · 짐 찾기와 수하물이 안 나왔을 때
window.POST = {
  brand: "여권영어", code: "D-04", handle: "@passport_eng", series: "수하물 편",
  caption: `짐이 안 나왔을 때, 공항에서 이 순서대로 하세요

1. 수하물표부터 찾기 (탑승권이나 여권 뒤에 붙어 있어요)
2. Baggage Service 창구로 가기
3. My bag didn't come out. 가방이 안 나왔어요

가방 생김새를 물으면 It's a black suitcase.
출발 전에 가방 사진을 한 장 찍어두면 보여주기만 하면 됩니다.

짐 때문에 고생하신 적 있나요? 댓글로 이야기해 주세요.

#여행영어 #공항영어 #수하물분실 #시니어영어 #여권영어`,
  slides: [
    { type: "cover", label: "Arrival · 수하물",
      hook: "짐이 안 나오면\n*이 창구*로\n가세요",
      sub: "짐 찾는 곳부터\n분실 신고까지 5문장",
      stub: [["FROM", "한국어"], ["TO", "English"], ["SEAT", "5문장"]] },

    { type: "intro", label: "먼저 알아두세요",
      title: "짐표는\n버리지 마세요",
      text: "체크인할 때 받은 *수하물표*가\n내 짐이라는 증거예요.\n짐을 찾을 때까지 *꼭 보관*하세요." },

    { type: "expr", label: "질문 1 · 짐 찾는 곳",
      en: "Where is / the baggage claim?", pr: "웨어 이즈 더 {배}기지 클레임?", ko: "짐 찾는 곳이 어디예요?",
      tip: "표지판 *Baggage Claim*을\n따라가세요." },

    { type: "expr", label: "신고 1 · 짐이 없을 때",
      en: "My bag / didn't come out.", pr: "마이 {백} 디든 컴 {아}웃", ko: "제 가방이 안 나왔어요.",
      tip: "*Baggage Service* 또는\n*Lost Baggage* 창구로 가세요." },

    { type: "expr", label: "신고 2 · 수하물표",
      heard: "Do you have / your baggage tag?", heardKo: "수하물표 있으세요?",
      en: "Here's my / baggage tag.", pr: "히어즈 마이 {배}기지 택", ko: "여기 제 수하물표요.",
      tip: "*탑승권이나 여권 뒤*에\n붙여주는 경우가 많아요." },

    { type: "expr", label: "신고 3 · 가방 생김새",
      heard: "What does / your bag look like?", heardKo: "가방이 어떻게 생겼나요?",
      en: "It's a black suitcase.", pr: "잇츠 어 블랙 {수}트케이스", ko: "검은색 여행 가방이에요.",
      tip: "출발 전 *가방 사진*을 찍어두면\n보여주기만 하면 돼요." },

    { type: "expr", label: "신고 4 · 받을 주소",
      en: "Please send it / to this address.", pr: "플리즈 {센}드 잇 투 디스 {어}드레스", ko: "이 주소로 보내주세요.",
      tip: "숙소 주소를 *영문으로*\n휴대폰에 저장해두세요." },

    { type: "summary", title: "캡처해서\n여권 옆에 두세요",
      rows: [
        ["Where is the baggage claim?", "짐 찾는 곳이 어디예요?"],
        ["My bag didn't come out.", "가방이 안 나왔어요 · 마이 백"],
        ["Here's my baggage tag.", "여기 수하물표요 · 배기지 택"],
        ["It's a black suitcase.", "검은색 여행 가방이에요"],
        ["Please send it to this address.", "이 주소로 보내주세요"]
      ] },

    { type: "show",
      big: "My bag\ndidn't come out.\nWhere can I\n*report* it?",
      ko: "제 가방이 안 나왔어요. 어디에 신고하나요?" },

    { type: "cta", stamp: "SAVE FOR TRIP",
      title: "짐 사진,\n지금 한 장\n찍어두세요",
      steps: ["*저장*해두고 공항에서 꺼내 보기", "여행 가는 *친구·가족에게 보내기*", "다음 편: *택시·셔틀 타는 곳*"] }
  ]
};
