// 인스타그램 자동 업로드 (Instagram API with Instagram Login · 캐러셀)
//
//   node publish.mjs --dry-run        오늘 올릴 게시물과 이미지 주소만 점검 (토큰 불필요)
//   node publish.mjs                  오늘 순서의 게시물을 실제로 업로드
//   node publish.mjs d03 [--dry-run]  특정 게시물을 지정
//   node publish.mjs --check-token    토큰이 어느 계정에 연결됐는지 확인
//   node publish.mjs --refresh-token  장기 토큰 연장(60일). 새 토큰은 .env 파일에 저장
//
// 토큰은 환경변수 IG_ACCESS_TOKEN 또는 이 폴더의 .env 파일(IG_ACCESS_TOKEN=...)에서 읽습니다.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadPost } from "./lib/post.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const dry = args.includes("--dry-run");
const forced = args.find((a) => /^d\d{2,}$/.test(a));
const cfg = JSON.parse(readFileSync(join(root, "config.json"), "utf8"));
if (process.env.IMAGE_BASE_URL) cfg.imageBaseUrl = process.env.IMAGE_BASE_URL; // 로컬 테스트용
const API = `https://graph.instagram.com/${cfg.apiVersion}`;

function loadToken() {
  if (process.env.IG_ACCESS_TOKEN) return process.env.IG_ACCESS_TOKEN.trim();
  const envFile = join(root, ".env");
  if (existsSync(envFile)) {
    const m = readFileSync(envFile, "utf8").match(/^IG_ACCESS_TOKEN=(.+)$/m);
    if (m) return m[1].trim();
  }
  return null;
}

async function api(method, path, params, token) {
  const url = new URL(path.startsWith("http") ? path : API + path);
  const body = new URLSearchParams({ ...params, access_token: token });
  const res = method === "GET"
    ? await fetch(url + (url.search ? "&" : "?") + body)
    : await fetch(url, { method, body });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.error) {
    const e = json.error || {};
    throw new Error(`인스타 API 오류 (${res.status}) ${e.type || ""} ${e.code || ""}: ${e.message || JSON.stringify(json)}`);
  }
  return json;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const finish = (code) => { process.exitCode = code; };

async function main() {

// ---------- 토큰 도구 ----------
if (args.includes("--check-token") || args.includes("--refresh-token")) {
  const token = loadToken();
  if (!token) { console.error("IG_ACCESS_TOKEN이 없습니다. .env 파일을 만들어 주세요."); return finish(1); }
  if (args.includes("--refresh-token")) {
    const r = await api("GET", "https://graph.instagram.com/refresh_access_token", { grant_type: "ig_refresh_token" }, token);
    writeFileSync(join(root, ".env"), `IG_ACCESS_TOKEN=${r.access_token}\n`);
    console.log(`토큰을 연장했습니다. ${Math.round(r.expires_in / 86400)}일 유효. 새 토큰은 .env 파일에 저장했습니다.`);
    console.log("GitHub 저장소의 IG_ACCESS_TOKEN 시크릿도 .env 파일의 값으로 바꿔 주세요.");
  } else {
    const me = await api("GET", "/me", { fields: "user_id,username,account_type" }, token);
    console.log(`연결된 계정: @${me.username} (${me.account_type}, id ${me.user_id || me.id})`);
  }
  return finish(0);
}

// ---------- 오늘 올릴 게시물 정하기 ----------
const todayKST = new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10);
const dayIndex = Math.floor((Date.parse(todayKST) - Date.parse(cfg.startDate)) / 86400e3) + 1;
const id = forced || (dayIndex >= 1 ? "d" + String(dayIndex).padStart(2, "0") : null);

console.log(`오늘(KST): ${todayKST} · 시작일: ${cfg.startDate} · 대상: ${id || "없음"}${dry ? " · 점검 모드" : ""}`);
if (!id) { console.log("아직 시작일 전입니다. 할 일 없음."); return finish(0); }
if (!existsSync(join(root, "posts", id + ".js"))) {
  console.error(`posts/${id}.js 가 없습니다. 올릴 원고가 떨어졌어요. 새 게시물을 만들어 주세요.`);
  return finish(1);
}

const logFile = join(root, "published.json");
const log = existsSync(logFile) ? JSON.parse(readFileSync(logFile, "utf8")) : {};
if (log[id] && !dry) {
  console.log(`${id}는 이미 ${log[id].publishedAt}에 올렸습니다. 중복 업로드를 막기 위해 건너뜁니다.`);
  return finish(0);
}

const post = loadPost(root, id);
if (!post.caption) { console.error(`posts/${id}.js 에 caption이 없습니다.`); return finish(1); }
if (post.slides.length > 10) { console.error(`API는 캐러셀 최대 10장까지만 올릴 수 있습니다 (${id}: ${post.slides.length}장).`); return finish(1); }
if (/GITHUB_ID/.test(cfg.imageBaseUrl)) { console.error("config.json의 imageBaseUrl에서 GITHUB_ID를 실제 GitHub 아이디로 바꿔 주세요."); return finish(1); }
const tags = (post.caption.match(/#\S+/g) || []).length;
if (tags > 5) { console.error(`해시태그가 ${tags}개입니다. 인스타는 5개까지만 허용합니다.`); return finish(1); }

const urls = post.slides.map((_, i) => `${cfg.imageBaseUrl}/${id}/${String(i + 1).padStart(2, "0")}.jpg`);

// 이미지가 공개 주소에서 실제로 열리는지 확인
let broken = 0;
for (const u of urls) {
  const r = await fetch(u, { method: "HEAD" }).catch(() => null);
  const ok = r && r.ok && /image\/jpe?g/.test(r.headers.get("content-type") || "");
  if (!ok) broken++;
  console.log(`${ok ? "  ✓" : "  ✗"} ${u}${ok ? "" : `  (${r ? r.status + " " + r.headers.get("content-type") : "연결 실패"})`}`);
}
console.log(`\n캡션 미리보기:\n${post.caption.split("\n").slice(0, 3).join("\n")}\n... (해시태그 ${tags}개)\n`);

if (dry) { console.log(broken ? `점검 결과: 열리지 않는 이미지 ${broken}장` : "점검 결과: 이상 없음"); return finish(broken ? 1 : 0); }
if (broken) { console.error("열리지 않는 이미지가 있어 업로드를 중단합니다."); return finish(1); }
if (!cfg.enabled) { console.log("config.json의 enabled가 false라서 실제 업로드는 하지 않습니다."); return finish(0); }

// ---------- 업로드 ----------
const token = loadToken();
if (!token) { console.error("IG_ACCESS_TOKEN이 없습니다."); return finish(1); }
const me = await api("GET", "/me", { fields: "user_id,username" }, token);
const userId = me.user_id || me.id;
console.log(`@${me.username} 계정에 ${id} (${urls.length}장) 업로드 시작`);

const children = [];
for (const [i, image_url] of urls.entries()) {
  const c = await api("POST", `/${userId}/media`, { image_url, is_carousel_item: "true" }, token);
  children.push(c.id);
  console.log(`  ${i + 1}/${urls.length} 이미지 등록`);
}
const carousel = await api("POST", `/${userId}/media`, { media_type: "CAROUSEL", children: children.join(","), caption: post.caption }, token);

for (let t = 0; t < 30; t++) {
  const s = await api("GET", `/${carousel.id}`, { fields: "status_code" }, token);
  if (s.status_code === "FINISHED") break;
  if (s.status_code === "ERROR" || s.status_code === "EXPIRED") throw new Error(`캐러셀 준비 실패: ${s.status_code}`);
  await sleep(5000);
}
const published = await api("POST", `/${userId}/media_publish`, { creation_id: carousel.id }, token);

log[id] = { mediaId: published.id, publishedAt: new Date().toISOString() };
writeFileSync(logFile, JSON.stringify(log, null, 2) + "\n");
console.log(`게시 완료: ${id} → media ${published.id}`);
}

main().catch((e) => { console.error(e.message); process.exitCode = 1; });
