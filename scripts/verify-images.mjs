/**
 * Build-output guard: fails if any prerendered page still points at the metered
 * /_next/image optimizer, or references a static image that is not on disk.
 * Run after `next build`:  npm run verify:images
 */

import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const HTML_ROOT = ".next/server/app";
const PUBLIC_DIR = "public";
const WATCHED = /^\/(optimized|og|assets|profile)/;

function htmlFiles(dir, found = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) htmlFiles(full, found);
    else if (entry.name.endsWith(".html")) found.push(full);
  }
  return found;
}

const files = htmlFiles(HTML_ROOT);
const refs = new Set();
let optimizerHits = 0;

for (const file of files) {
  const html = readFileSync(file, "utf8");
  optimizerHits += (html.match(/_next\/image/g) ?? []).length;

  for (const attr of html.matchAll(/(?:src|srcSet|srcset|content)="([^"]*)"/g)) {
    for (const candidate of attr[1].split(",")) {
      const url = candidate.trim().split(/\s+/)[0];
      if (!url) continue;
      const pathname = url.startsWith("http") ? new URL(url).pathname : url;
      if (WATCHED.test(pathname)) refs.add(pathname);
    }
  }
}

const missing = [...refs].filter(
  (ref) => !existsSync(path.join(PUBLIC_DIR, decodeURIComponent(ref)))
);

console.log(`pages scanned: ${files.length}`);
console.log(`/_next/image references: ${optimizerHits}`);
console.log(`static image references: ${refs.size}, missing: ${missing.length}`);
for (const ref of missing) console.error(`  MISSING ${ref}`);

if (optimizerHits > 0 || missing.length > 0) process.exit(1);
