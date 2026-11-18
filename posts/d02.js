// D-02 · 기내에서 부탁하기
window.POST = {
  brand: "여권영어", code: "D-02", handle: "@passport_eng", series: "기내 편",
  caption: `기내 영어, 승무원 부르는 것부터 어렵다면

호출 버튼을 누르거나 지나갈 때 Excuse me 한마디면 됩니다.
그다음은 단어만 바꿔 끼우면 돼요.

Can I have some water? 물 좀 주시겠어요?
Can I have a blanket? 담요 주시겠어요?
Beef, please. 소고기로 주세요

창가 자리에서 화장실 갈 때는 옆 사람에게
Excuse me, can I get through?

비행기에서 제일 부탁하기 어려웠던 건 뭐였나요?

#여행영어 #기내영어 #해외여행영어 #시니어영어 #여권영어`,
  slides: [
    { type: "cover", label: "Boarding · 기내",
      hook: "기내에서\n물 한 잔도\n*편하게* 부탁하세요",
      sub: "승무원에게 말 거는 법부터\n식사·음료 고르기까지",
      stub: [["FROM", "한국어"], ["TO", "English"], ["SEAT", "5문장"]] },

    { type: "intro", label: "먼저 알아두세요",
      title: "승무원 부르는 건\n실례가 아니에요",
      text: "좌석 위 *호출 버튼*을 누르거나\n지나갈 때 *Excuse me.*\n(익스{큐}즈 미) 한마디면 됩니다." },

    { type: "expr", label: "부탁 1 · 물",
      en: "Can I have / some water, please?", pr: "캔 아이 해브 썸 {워}터, 플리즈?", ko: "물 좀 주시겠어요?",
      tip: "따뜻한 물은\n*hot water* (핫 {워}터)" },

    { type: "expr", label: "부탁 2 · 담요",
      en: "Can I have / a blanket, please?", pr: "캔 아이 해브 어 {블랭}킷, 플리즈?", ko: "담요 하나 주시겠어요?",
      tip: "베개는 *a pillow* ({필}로우)\n앞 문장에서 단어만 바꾸면 돼요." },

    { type: "expr", label: "부탁 3 · 식사 고르기",
      heard: "Chicken / or beef?", heardKo: "닭고기와 소고기 중 뭘 드릴까요?",
      en: "Beef, please.", pr: "{비}프, 플리즈", ko: "소고기로 주세요.",
      tip: "생선이면 *Fish, please.*\n({피}쉬, 플리즈)" },

    { type: "expr", label: "부탁 4 · 음료",
      heard: "Something / to drink?", heardKo: "음료 드릴까요?",
      en: "Orange juice, please.", pr: "{오}린지 쥬스, 플리즈", ko: "오렌지 주스 주세요.",
      tip: "괜찮으면 *No, thank you.*\n(노, {땡}큐)" },

    { type: "expr", label: "부탁 5 · 자리에서 나갈 때",
      en: "Excuse me, / can I get through?", pr: "익스{큐}즈 미, 캔 아이 겟 {쓰}루?", ko: "실례합니다, 좀 지나갈게요.",
      tip: "창가 자리에서 화장실 갈 때\n*옆 사람에게* 하는 말이에요." },

    { type: "summary", title: "캡처해서\n탑승권 옆에 두세요",
      rows: [
        ["Can I have some water?", "물 좀 주시겠어요? · 썸 워터"],
        ["Can I have a blanket?", "담요 주시겠어요? · 어 블랭킷"],
        ["Beef, please.", "소고기로 주세요 · 비프 플리즈"],
        ["Orange juice, please.", "오렌지 주스 주세요"],
        ["Can I get through?", "좀 지나갈게요 · 캔 아이 겟 쓰루"]
      ] },

    { type: "show",
      big: "Excuse me.\nCan I have\nsome *hot water,*\nplease?",
      ko: "실례합니다. 따뜻한 물 좀 주시겠어요?" },

    { type: "cta", stamp: "SAVE FOR TRIP",
      title: "비행기 타기 전\n한 번만 더\n읽어보세요",
      steps: ["*저장*해두고 기내에서 꺼내 보기", "여행 가는 *친구·가족에게 보내기*", "다음 편: *기내에서 몸이 불편할 때*"] }
  ]
};
