#!/usr/bin/env node
/**
 * Flags CSS that animates layout (jank) or uses transition: all.
 * Usage: node .cursor/skills/hybrid-native-ui/scripts/check-css-motion.mjs [files...]
 * If no files, scans stdin or prints usage.
 */
import fs from "fs";
import path from "path";

const LAYOUT_PROPS = [
  "top",
  "left",
  "right",
  "bottom",
  "width",
  "height",
  "margin",
  "margin-top",
  "margin-right",
  "margin-bottom",
  "margin-left",
  "padding",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "padding-left",
  "inset",
];

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: node check-css-motion.mjs <file.css> [more.css]");
  process.exit(2);
}

let failed = 0;

for (const file of args) {
  const abs = path.resolve(file);
  const src = fs.readFileSync(abs, "utf8");
  const lines = src.split(/\r?\n/);

  lines.forEach((line, i) => {
    const n = i + 1;
    const trimmed = line.trim();
    if (trimmed.startsWith("/*") || trimmed.startsWith("*") || trimmed.startsWith("//")) {
      return;
    }
    if (/transition(?:-property)?\s*:[^;]*\ball\b/i.test(line)) {
      console.log(`${abs}:${n}: transition includes 'all'`);
      failed += 1;
    }
    for (const prop of LAYOUT_PROPS) {
      const re = new RegExp(
        `(?:transition(?:-property)?\\s*:[^;]*\\b${prop}\\b)|(?:@keyframes[\\s\\S]{0,0})`,
        "i"
      );
      if (new RegExp(`transition(?:-property)?\\s*:[^;]*\\b${prop}\\b`, "i").test(line)) {
        console.log(`${abs}:${n}: animating layout property '${prop}'`);
        failed += 1;
      }
    }
  });

  const keyframeBlocks = src.match(/@keyframes[^{]+\{[\s\S]*?\n\}/g) || [];
  for (const block of keyframeBlocks) {
    for (const prop of LAYOUT_PROPS) {
      if (new RegExp(`(?:^|\\s)${prop}\\s*:`, "m").test(block)) {
        console.log(`${abs}: @keyframes animates layout property '${prop}'`);
        failed += 1;
      }
    }
  }
}

if (failed) {
  console.error(`check-css-motion: ${failed} issue(s)`);
  process.exit(1);
}
console.log("check-css-motion: OK");
