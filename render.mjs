// 사용법: node render.mjs d01 [d02 ...]
//   out/<id>/NN.png    미리보기용 PNG
//   upload/<id>/NN.jpg 인스타 업로드용 JPG (인스타 API는 JPEG만 받습니다)
import puppeteer from "puppeteer-core";
import { mkdirSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { loadPost } from "./lib/post.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const ids = process.argv.slice(2);
if (!ids.length) { console.error("사용법: node render.mjs d01 [d02 ...]"); process.exit(1); }

const chrome = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/usr/bin/google-chrome",
].find((p) => p && existsSync(p));
if (!chrome) throw new Error("Chrome 또는 Edge를 찾지 못했습니다. CHROME_PATH를 지정하세요.");

// 탐색기 미리보기·사진 뷰어가 파일을 잠깐 잡고 있으면 쓰기가 실패하므로 몇 번 다시 시도
async function save(file, buf) {
  for (let i = 0; ; i++) {
    try { return writeFileSync(file, buf); }
    catch (e) { if (i >= 9) throw new Error(`${file} 저장 실패. 이 파일을 연 프로그램을 닫고 다시 실행하세요.`); await new Promise((r) => setTimeout(r, 500)); }
  }
}

const tpl = pathToFileURL(join(root, "template", "card.html")).href;
const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ["--allow-file-access-from-files"] });
const page = await browser.newPage();
await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });

for (const id of ids) {
  const post = loadPost(root, id);
  const outDir = join(root, "out", id), upDir = join(root, "upload", id);
  mkdirSync(outDir, { recursive: true }); mkdirSync(upDir, { recursive: true });
  for (let n = 1; n <= post.slides.length; n++) {
    const nn = String(n).padStart(2, "0");
    await page.goto(`${tpl}?post=${id}&n=${n}`, { waitUntil: "load", timeout: 60000 });
    await page.evaluate(() => document.fonts.ready);
    await save(join(outDir, nn + ".png"), await page.screenshot({ type: "png" }));
    await save(join(upDir, nn + ".jpg"), await page.screenshot({ type: "jpeg", quality: 92 }));
  }
  console.log(`✓ ${id}: ${post.slides.length}장`);
}
await browser.close();
