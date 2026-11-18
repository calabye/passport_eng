// D-01 · 입국심사 (여권영어 첫 게시물)
// 표기 규칙: 발음의 {중괄호} = 강세(주황 굵게) · 영어의 " / " = 끊어 읽기 · 한글 *별표* = 주황 강조 · \n = 줄바꿈
window.POST = {
  brand: "여권영어",
  code: "D-01",
  handle: "@passport_eng",
  series: "입국심사 편",
  caption: `입국심사 영어, 질문 5개만 알아들으면 됩니다

심사관이 묻는 건 거의 정해져 있어요.
방문 목적, 머무는 기간, 숙소, 첫 방문인지, 돌아가는 표.
대답은 두세 단어면 충분합니다.

Sightseeing. 관광이에요
For two weeks. 2주요
At my son's house. 아들 집에서요

자녀 집 방문이면 Visiting my son 한마디로 끝나요.
9번째 장은 말이 막힐 때 심사관에게 그대로 보여주는 화면이에요.

입국심사 때 제일 떨렸던 질문은 뭐였나요?
여행 가시는 부모님께도 보내드리세요.

#여행영어 #입국심사 #해외여행영어 #시니어영어 #여권영어`,
  slides: [
    { type: "cover",
      label: "Boarding · 입국심사",
      hook: "입국심사,\n이 5문장이면\n*통과합니다*",
      sub: "자녀 집 방문도, 패키지 여행도\n심사관 질문은 거의 똑같아요",
      stub: [["FROM", "한국어"], ["TO", "English"], ["SEAT", "5문장"]] },

    { type: "intro",
      label: "먼저 알아두세요",
      title: "길게 말할 필요\n없습니다",
      text: "심사관은 *짧고 정확한 대답*을 원해요.\n질문 5개만 알아들으면 대답은\n*두세 단어*로 충분합니다." },

    { type: "expr", label: "질문 1 · 방문 목적",
      heard: "What's the purpose / of your visit?", heardKo: "방문 목적이 뭔가요?",
      en: "Sightseeing.", pr: "{싸잇}씽", ko: "관광이에요.",
      tip: "자녀 집에 가면\n*Visiting my son.* (비지팅 마이 썬)" },

    { type: "expr", label: "질문 2 · 머무는 기간",
      heard: "How long / are you staying?", heardKo: "얼마나 머무르세요?",
      en: "For two weeks.", pr: "포 {투} 윅스", ko: "2주요.",
      tip: "열흘이면 *For ten days.*\n(포 텐 데이즈)" },

    { type: "expr", label: "질문 3 · 숙소",
      heard: "Where are you staying?", heardKo: "어디에서 지내세요?",
      en: "At my son's house.", pr: "앳 마이 {썬}즈 하우스", ko: "아들 집에서요.",
      tip: "호텔이면 *At a hotel.* (앳 어 호{텔})\n예약 화면을 보여줘도 됩니다." },

    { type: "expr", label: "질문 4 · 첫 방문인지",
      heard: "Is this / your first visit?", heardKo: "처음 오셨어요?",
      en: "Yes, / it's my first time.", pr: "예스, 잇츠 마이 {퍼}스트 타임", ko: "네, 처음이에요.",
      tip: "와 본 적 있으면\n*No, my second time.* (노, 마이 {세}컨 타임)" },

    { type: "expr", label: "질문 5 · 돌아가는 표",
      heard: "Do you have / a return ticket?", heardKo: "돌아가는 항공권 있나요?",
      en: "Yes, / here it is.", pr: "예스, {히}어 잇 이즈", ko: "네, 여기 있어요.",
      tip: "*휴대폰에 전자항공권*을\n미리 띄워두면 마음이 편해요." },

    { type: "summary",
      title: "캡처해서\n여권 옆에 두세요",
      rows: [
        ["Sightseeing.", "관광이에요 · 싸잇씽"],
        ["For two weeks.", "2주요 · 포 투 윅스"],
        ["At my son's house.", "아들 집에서요 · 앳 마이 썬즈 하우스"],
        ["Yes, it's my first time.", "네, 처음이에요"],
        ["Yes, here it is.", "네, 여기 있어요 · 예스 히어 잇 이즈"]
      ] },

    { type: "show",
      big: "Sorry,\nI don't speak\nEnglish well.\nPlease speak\n*slowly.*",
      ko: "영어를 잘 못해요. 천천히 말씀해 주세요." },

    { type: "cta",
      stamp: "SAVE FOR TRIP",
      title: "여행 전날\n한 번만 더\n읽어보세요",
      steps: ["*저장*해두고 공항에서 꺼내 보기", "여행 가는 *친구·가족에게 보내기*", "다음 편: *기내에서 쓰는 영어*"] }
  ]
};
