import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const dist = new URL("../dist/", import.meta.url);
const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else files.push(full);
  }
};
walk(dist.pathname.replace(/^\/([A-Za-z]:)/, "$1"));

const errors = [];
const extra = files.filter((file) => !/[\\/]dist[\\/]index\.html$/.test(file));
if (extra.length) errors.push(`dist must contain only index.html, found: ${extra.join(", ")}`);

const html = readFileSync(new URL("index.html", dist), "utf-8");
const external = html.match(/<(script|link)\b[^>]*\b(src|href)="(?!data:|https?:|#)[^"]+"[^>]*>/gi) ?? [];
if (external.length) errors.push(`index.html still references local files: ${external.join(" ")}`);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`dist/index.html is self-contained (${(Buffer.byteLength(html) / 1024).toFixed(1)} KiB)`);
