# 인스타 자동 업로드 설정 가이드

GitHub Actions가 **매일 낮 12시(한국 시간)** 그날 순서의 게시물을 인스타에 올립니다. 컴퓨터가 꺼져 있어도 됩니다.

```
config.json의 startDate = D-01 올리는 날
→ 다음 날 D-02, 그다음 날 D-03 ...
→ upload/dXX/*.jpg (공개 이미지 주소) + posts/dXX.js 의 caption
→ 인스타 API로 캐러셀 게시 → published.json에 기록 (중복 게시 방지)
```

아래 1~5단계는 계정 로그인과 토큰이 걸려 있어서 **직접** 해 주셔야 합니다. 비밀번호와 토큰은 Claude에게 보내지 마세요.

---

## 1. 인스타 계정을 프로페셔널 계정으로 전환
인스타 앱 → 설정 → **계정 유형 및 도구** → 프로페셔널 계정으로 전환 → **크리에이터**, 카테고리 '교육'

## 2. GitHub 저장소 만들기
1. github.com 가입
2. 오른쪽 위 **+ → New repository**
3. 이름 `passport-english`, **Public** 선택 (이미지 주소가 공개돼야 인스타가 가져갈 수 있어요), 나머지는 비워둔 채로 생성

> Public 저장소라서 다음 주에 올릴 카드와 캡션도 누구나 미리 볼 수 있습니다. 어차피 공개될 콘텐츠라 큰 문제는 아니지만 알아두세요.

## 3. Meta 개발자 앱 만들고 토큰 받기
메뉴 이름은 Meta가 자주 바꿔서 조금 다를 수 있어요.

1. developers.facebook.com 접속 → 페이스북 계정으로 로그인 → 개발자 등록
2. **내 앱 → 앱 만들기**
3. 사용 사례에서 **Instagram API** (또는 "Instagram에서 메시지 및 콘텐츠 관리") 선택
4. 앱 대시보드 → Instagram → **"Instagram 로그인으로 API 설정"**
5. **액세스 토큰 생성** 단계에서 **계정 추가** → 내 인스타 계정으로 로그인 → 권한 허용
   - 필요한 권한: `instagram_business_basic`, `instagram_business_content_publish`
6. 화면에 나온 **토큰을 복사** (60일 동안 유효)

앱은 '개발 모드' 그대로 두셔도 됩니다. 내 계정에만 올리는 용도라 앱 검수가 필요 없어요.

## 4. 토큰을 GitHub에 비밀로 저장
저장소 → **Settings → Secrets and variables → Actions → New repository secret**
- Name: `IG_ACCESS_TOKEN`
- Secret: 3단계에서 복사한 토큰

## 5. config.json 수정
```json
{
  "enabled": true,
  "startDate": "D-01을 올릴 날짜 (예: 2026-11-24)",
  "imageBaseUrl": "https://raw.githubusercontent.com/내GitHub아이디/passport-english/main/upload",
  "apiVersion": "v22.0"
}
```
`enabled`가 `false`면 점검만 하고 절대 올리지 않습니다. 준비가 다 됐을 때 `true`로 바꾸세요.

## 6. 파일을 GitHub에 올리기
이 폴더에서 아래 명령을 차례로 실행하세요. 처음 push할 때 브라우저가 열리면 GitHub에 로그인하면 됩니다.

```bash
git init -b main
```
```bash
git add .
```
```bash
git commit -m "first upload"
```
```bash
git remote add origin https://github.com/내GitHub아이디/passport-english.git
```
```bash
git push -u origin main
```

## 7. 시험 운행
1. 저장소 → **Actions** 탭 → 처음이면 워크플로 사용 허용
2. 왼쪽 **daily-post → Run workflow**
   - post: `d01`, 점검만 하기: ✅ 체크 → 실행
   - 로그에 `점검 결과: 이상 없음`이 나오면 이미지 주소가 정상입니다
3. 첫 게시물을 바로 올려보려면 post: `d01`, 점검만 하기: ☐ 해제 → 실행
4. 인스타에서 게시물 확인

이후로는 매일 12시에 자동으로 올라갑니다. 실패하면 GitHub가 가입 이메일로 알려줍니다.

---

## 운영하면서 할 일
| 언제 | 할 일 |
|---|---|
| 매주 | 다음 주 게시물 7개 만들기 → `node render.mjs d08 d09 ...` → git add, commit, push |
| 50일마다 | 토큰 연장: 이 폴더에 `.env` 파일(`IG_ACCESS_TOKEN=토큰`)을 두고 `node publish.mjs --refresh-token` 실행 → `.env`의 새 토큰으로 GitHub 시크릿 교체 |
| 매일 | 올라간 뒤 1시간 안에 댓글 답하기 (자동화가 못 하는 일이자 노출에 가장 중요한 일) |

## 자주 생기는 문제
- **"원고가 떨어졌어요"**: 그날 번호의 `posts/dXX.js`가 없습니다. 다음 주 분량을 올려 주세요.
- **이미지 ✗ 표시**: push가 안 됐거나 `imageBaseUrl`의 아이디가 틀렸습니다. raw 주소가 계속 실패하면 저장소 Settings → Pages를 켜고 `https://아이디.github.io/passport-english/upload`로 바꿔보세요.
- **토큰 오류 (code 190)**: 토큰 만료. 3단계에서 새로 받아 4단계를 다시 하세요.
- **12시 정각이 아님**: GitHub 예약 실행은 몇 분에서 수십 분 늦을 수 있습니다.
- 인스타 API는 캐러셀을 **최대 10장**, 이미지는 **JPEG만** 받습니다. 템플릿은 이미 맞춰져 있어요.

## 터미널에서 직접 쓰는 명령
```bash
node publish.mjs --dry-run
```
```bash
node publish.mjs --check-token
```
