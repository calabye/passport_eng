// 인스타 장기 토큰(60일) 받기 — 개발자 화면에서 토큰이 안 보일 때 쓰는 방법
//
// 준비: 이 폴더의 .env 파일에 아래 두 줄을 채워 두세요 (Instagram 로그인을 통한 API 설정 화면에 있음)
//   IG_APP_ID=인스타그램 앱 ID
//   IG_APP_SECRET=인스타그램 앱 시크릿 코드
// 실행: node get-token.mjs
//   1) 브라우저가 열리면 @passport_eng로 로그인 → 허용
//   2) 이동한 페이지(GitHub 저장소)의 주소창 주소 전체를 복사해서 이 터미널에 붙여넣기
//   3) 받은 토큰이 .env 파일의 IG_ACCESS_TOKEN 줄에 저장됩니다 (화면에는 출력하지 않음)
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { exec } from "node:child_process";
import readline from "node:readline/promises";

const root = dirname(fileURLToPath(import.meta.url));
const envFile = join(root, ".env");
const REDIRECT = "https://github.com/calabye/passport_eng";

function readEnv() {
  const env = {};
  if (existsSync(envFile)) for (const line of readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const m = line.match(/^([A-Z_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
  }
  return env;
}
function writeEnv(env) {
  writeFileSync(envFile, Object.entries(env).map(([k, v]) => `${k}=${v}`).join("\n") + "\n");
}

async function main() {
  const env = readEnv();
  const id = env.IG_APP_ID, secret = env.IG_APP_SECRET;
  if (!id || !secret || /여기에/.test(id + secret)) {
    console.log(".env 파일에 IG_APP_ID와 IG_APP_SECRET을 먼저 채워 주세요.");
    return;
  }

  const auth = new URL("https://www.instagram.com/oauth/authorize");
  auth.search = new URLSearchParams({
    client_id: id, redirect_uri: REDIRECT, response_type: "code",
    scope: "instagram_business_basic,instagram_business_content_publish",
  });
  console.log("\n1) 브라우저에서 인스타 로그인 창을 엽니다. @passport_eng로 로그인하고 '허용'을 누르세요.");
  exec(`start "" "${auth.href}"`);
  console.log("   창이 안 열리면 아래 주소를 브라우저에 붙여넣으세요:\n   " + auth.href + "\n");

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const pasted = (await rl.question("2) 이동한 GitHub 페이지의 주소창 주소 전체를 붙여넣고 Enter:\n> ")).trim();
  rl.close();

  let code;
  try { code = new URL(pasted).searchParams.get("code"); } catch { code = null; }
  if (!code) { console.log("주소에서 code를 찾지 못했어요. 주소창의 주소 전체를 복사했는지 확인하고 다시 실행하세요."); return; }
  code = code.replace(/#_$/, "");

  // 코드 → 단기 토큰
  const r1 = await fetch("https://api.instagram.com/oauth/access_token", {
    method: "POST",
    body: new URLSearchParams({ client_id: id, client_secret: secret, grant_type: "authorization_code", redirect_uri: REDIRECT, code }),
  });
  const j1 = await r1.json();
  if (!j1.access_token) { console.log("단기 토큰 받기 실패: " + (j1.error_message || j1.error?.message || JSON.stringify(j1))); return; }

  // 단기 토큰 → 장기 토큰(60일)
  const u2 = new URL("https://graph.instagram.com/access_token");
  u2.search = new URLSearchParams({ grant_type: "ig_exchange_token", client_secret: secret, access_token: j1.access_token });
  const j2 = await (await fetch(u2)).json();
  if (!j2.access_token) { console.log("장기 토큰 받기 실패: " + (j2.error?.message || JSON.stringify(j2))); return; }

  const me = await (await fetch(`https://graph.instagram.com/me?fields=username,account_type&access_token=${j2.access_token}`)).json();
  env.IG_ACCESS_TOKEN = j2.access_token;
  writeEnv(env);
  console.log(`\n✓ 성공: @${me.username} (${me.account_type}) 토큰을 받았어요. ${Math.round(j2.expires_in / 86400)}일 유효.`);
  console.log("  .env 파일의 IG_ACCESS_TOKEN= 뒤 값을 GitHub 비밀값 IG_ACCESS_TOKEN에 붙여넣으세요.");
}
main().catch((e) => console.log("오류: " + e.message));
