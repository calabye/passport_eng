# 여권영어 카드 생성기

5060 여행 영어 카드뉴스를 정해진 템플릿으로 찍어내는 도구입니다. 1080×1350 PNG가 나옵니다.

## 새 게시물 만들기
1. `posts/d01.js`를 복사해서 `posts/d02.js`로 저장
2. `code`, `series`, `slides` 내용만 바꾸기 (디자인은 건드리지 않음)
3. 터미널에서 실행

```bash
node render.mjs d02
```

4. `out/d02/`에 미리보기 PNG, `upload/d02/`에 업로드용 JPG가 생깁니다. 게시물 파일에 `caption`(해시태그 5개 이하)도 꼭 넣으세요.

자동 업로드 설정은 [AUTO-UPLOAD.md](AUTO-UPLOAD.md)를 보세요.

## 글쓰기 표기 규칙
| 표기 | 의미 | 예 |
|---|---|---|
| `{싸잇}씽` | 발음에서 강세 음절 → 주황 굵게 | `포 {투} 윅스` |
| `Yes, / here it is.` | 영어 끊어 읽기 → 옅은 슬래시 | 한 문장에 최대 2개 |
| `*통과합니다*` | 제목: 주황 강조 / 본문: 진하게 | 한 장에 1곳만 |
| `\n` | 줄바꿈 (의미 단위로 직접 끊기) | `"입국심사,\n이 5문장이면"` |

## 슬라이드 종류 (type)
- `cover` 탑승권 표지: label, hook, sub, stub(3칸)
- `intro` 공감/안내: label, title, text
- `expr` 표현: label, heard, heardKo, en, pr, ko, tip
- `summary` 캡처용 정리: title, rows([영어, 한글·발음] 5개)
- `show` 직원에게 보여주는 화면: big, ko
- `cta` 마지막 장: stamp, title, steps(3개)

## 필요한 것
- Node.js, Chrome(또는 Edge). 처음 한 번 `npm install`. 폰트는 Google Fonts에서 불러오므로 인터넷 연결 필요.
- 폰트: Hahmlet, IBM Plex Sans KR, Atkinson Hyperlegible, IBM Plex Mono (모두 SIL OFL, 상업적 사용 가능)
