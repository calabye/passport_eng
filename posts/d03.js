// D-03 · 기내에서 몸이 불편할 때
window.POST = {
  brand: "여권영어", code: "D-03", handle: "@passport_eng", series: "기내 건강 편",
  caption: `비행기에서 몸이 안 좋을 때, 참지 말고 이렇게 말하세요

I don't feel well. 몸이 안 좋아요
I feel airsick. 비행기 멀미가 나요
I have a headache. 머리가 아파요
Do you have any medicine? 약 있나요?

가슴이 아프거나 숨이 차면 바로 호출 버튼을 누르세요.
평소 드시는 약은 부치는 짐 말고 기내 가방에 넣어두시고요.

부모님 휴대폰에 9번째 장 하나만 저장해 드려도 든든합니다.

#여행영어 #기내영어 #해외여행준비 #시니어영어 #여권영어`,
  slides: [
    { type: "cover", label: "Boarding · 기내 건강",
      hook: "비행기에서\n속이 안 좋을 때\n*이 한마디*",
      sub: "참지 말고 승무원에게\n바로 말하세요",
      stub: [["FROM", "한국어"], ["TO", "English"], ["SEAT", "5문장"]] },

    { type: "intro", label: "먼저 알아두세요",
      title: "참지 마세요",
      text: "승무원은 *응급 처치 교육*을 받았고\n기내에는 기본 상비약이 있어요.\n가슴 통증이나 숨이 차면 *바로 호출*하세요." },

    { type: "expr", label: "증상 1 · 몸이 안 좋을 때",
      en: "I don't feel well.", pr: "아이 돈 {필} 웰", ko: "몸이 안 좋아요.",
      tip: "승무원을 부르고\n*이 말부터* 하세요." },

    { type: "expr", label: "증상 2 · 멀미",
      en: "I feel airsick.", pr: "아이 필 {에}어씩", ko: "비행기 멀미가 나요.",
      tip: "멀미 봉투는 *a sick bag* ({씩} 백)\n좌석 앞 주머니에 있어요." },

    { type: "expr", label: "증상 3 · 두통",
      en: "I have a headache.", pr: "아이 해브 어 {헤}데익", ko: "머리가 아파요.",
      tip: "배가 아프면\n*a stomachache* ({스}터먹에익)" },

    { type: "expr", label: "부탁 · 약",
      en: "Do you have / any medicine?", pr: "두 유 해브 애니 {메}디슨?", ko: "약 있나요?",
      tip: "평소 먹는 약은\n*기내 가방*에 꼭 챙기세요." },

    { type: "expr", label: "대답 · 괜찮냐고 물을 때",
      heard: "Are you okay?", heardKo: "괜찮으세요?",
      en: "I'm feeling better, / thank you.", pr: "아임 필링 {베}터, {땡}큐", ko: "좀 나아졌어요, 고마워요.",
      tip: "아직 안 좋으면\n*Not yet.* (낫 {옛})" },

    { type: "summary", title: "캡처해서\n여권 옆에 두세요",
      rows: [
        ["I don't feel well.", "몸이 안 좋아요 · 아이 돈 필 웰"],
        ["I feel airsick.", "멀미가 나요 · 아이 필 에어씩"],
        ["I have a headache.", "머리가 아파요 · 헤데익"],
        ["Do you have any medicine?", "약 있나요? · 애니 메디슨"],
        ["I'm feeling better.", "좀 나아졌어요 · 필링 베터"]
      ] },

    { type: "show",
      big: "I don't feel well.\nPlease *help* me.",
      ko: "몸이 안 좋아요. 도와주세요." },

    { type: "cta", stamp: "SAVE FOR TRIP",
      title: "부모님 휴대폰에\n저장해\n드리세요",
      steps: ["*저장*해두고 기내에서 꺼내 보기", "해외 가시는 *부모님께 보내기*", "다음 편: *짐이 안 나왔을 때*"] }
  ]
};
