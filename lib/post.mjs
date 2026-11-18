// posts/<id>.js (브라우저용 window.POST 파일)를 Node에서 읽어오는 도우미
import { readFileSync } from "node:fs";
import { join } from "node:path";
import vm from "node:vm";

export function loadPost(root, id) {
  const code = readFileSync(join(root, "posts", id + ".js"), "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox);
  if (!sandbox.window.POST) throw new Error(`posts/${id}.js 에 window.POST 가 없습니다.`);
  return sandbox.window.POST;
}
