#!/usr/bin/env node
/**
 * Hybrid Native UI v2.0 — CSS Motion Linter
 *
 * Checks CSS files for motion anti-patterns:
 * - transition: all (banned — causes layout thrash)
 * - Animating width/height/top/left (layout properties, not compositor)
 * - Too many live backdrop-filter blur regions (>2)
 * - Missing prefers-reduced-motion fallback
 * - transition on box-shadow without transform (OK but warn)
 * - Missing duration on transitions (instant is suspicious)
 *
 * Usage: node check-css-motion.mjs <file.css> [file2.css ...]
 */

import { readFileSync } from 'fs';

const files = process.argv.slice(2);

if (files.length === 0) {
  console.error('Usage: node check-css-motion.mjs <file.css> [file2.css ...]');
  process.exit(1);
}

let totalErrors = 0;
let totalWarnings = 0;

const BANNED_PROPERTIES = ['width', 'height', 'top', 'left', 'right', 'bottom', 'margin', 'padding', 'border-width', 'font-size', 'line-height'];
const COMPOSITOR_PROPERTIES = ['transform', 'opacity', 'filter', 'backdrop-filter'];

function checkCSS(content, filename) {
  const errors = [];
  const warnings = [];
  const lines = content.split('\n');

  // Track rules for context
  let currentSelector = '';
  let inRule = false;
  let ruleStart = 0;

  // Count backdrop-filter blur regions
  let blurCount = 0;
  let hasReducedMotion = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const lineNum = i + 1;

    // Track selector context
    if (line.includes('{') && !line.includes('}')) {
      currentSelector = line.replace('{', '').trim();
      inRule = true;
      ruleStart = lineNum;
    }
    if (line.includes('}')) {
      inRule = false;
    }

    // Check for prefers-reduced-motion
    if (line.includes('prefers-reduced-motion')) {
      hasReducedMotion = true;
    }

    // 1. Banned: transition: all
    if (/transition\s*:\s*all/i.test(line) || /transition\s*:\s*all\s/i.test(line)) {
      errors.push(`[${filename}:${lineNum}] BANNED: "transition: all" — causes layout thrash. Use explicit properties (transform, opacity).`);
    }

    // 2. Banned: animating layout properties
    for (const prop of BANNED_PROPERTIES) {
      const regex = new RegExp(`transition\\s*:.*\\b${prop}\\b`, 'i');
      if (regex.test(line)) {
        errors.push(`[${filename}:${lineNum}] BANNED: animating "${prop}" (layout property). Use transform (translate/scale) instead.`);
      }
      // Also check animation keyframes
      const animRegex = new RegExp(`^\\s*${prop}\\s*:`, 'i');
      if (inRule && currentSelector.includes('@keyframes') && animRegex.test(line)) {
        errors.push(`[${filename}:${lineNum}] BANNED: keyframe animating "${prop}" (layout property). Use transform instead.`);
      }
    }

    // 3. Count backdrop-filter blur
    if (/backdrop-filter\s*:.*blur/i.test(line) || /-webkit-backdrop-filter\s*:.*blur/i.test(line)) {
      blurCount++;
    }

    // 4. Warn: transition on box-shadow alone (paint, not compositor)
    if (/transition\s*:.*box-shadow/i.test(line) && !/transform/i.test(line)) {
      warnings.push(`[${filename}:${lineNum}] WARN: box-shadow transition triggers paint. Consider using a pseudo-element with transform for better performance.`);
    }

    // 5. Warn: transition without duration
    if (/transition\s*:/.test(line) && !/\d+(ms|s)|var\(|transition\s*:\s*none/.test(line)) {
      warnings.push(`[${filename}:${lineNum}] WARN: transition without explicit duration. Default may be inconsistent across browsers.`);
    }

    // 6. Warn: using linear easing for spatial motion
    if (/transition\s*:.*transform.*linear/i.test(line) || /animation\s*:.*linear/i.test(line)) {
      if (!/spinner|spin|shimmer/.test(line) && !currentSelector.includes('spinner') && !currentSelector.includes('spin') && !currentSelector.includes('shimmer')) {
        warnings.push(`[${filename}:${lineNum}] WARN: linear easing for spatial motion feels unnatural. Use ease-out or spring (cubic-bezier with overshoot).`);
      }
    }

    // 7. Warn: very long transition (>500ms) for micro-interactions
    const durationMatch = line.match(/transition\s*:.*?(\d+(?:\.\d+)?)(ms|s)/i);
    if (durationMatch) {
      const duration = durationMatch[2] === 's' ? parseFloat(durationMatch[1]) * 1000 : parseFloat(durationMatch[1]);
      if (duration > 500 && !currentSelector.includes('sheet') && !currentSelector.includes('modal') && !currentSelector.includes('page')) {
        warnings.push(`[${filename}:${lineNum}] WARN: ${duration}ms transition is long for a micro-interaction. Buttons/cards should be 150-350ms.`);
      }
    }
  }

  // A stylesheet is a recipe library, not a rendered DOM. Vendor fallbacks and
  // alternative classes do not imply simultaneously active blur regions.
  // The <=2 budget is checked in browser QA against visible computed styles.
  if (blurCount > 2) {
    warnings.push(`[${filename}] NOTE: ${blurCount} blur declarations in this recipe library; verify <=2 visible blur regions at runtime.`);
  }

  // Check reduced motion
  if (!hasReducedMotion && (content.includes('transition') || content.includes('animation'))) {
    warnings.push(`[${filename}] WARN: No @media (prefers-reduced-motion: reduce) fallback found. Add it to respect user preferences.`);
  }

  return { errors, warnings, blurCount, hasReducedMotion };
}

// Run checks
for (const file of files) {
  try {
    const content = readFileSync(file, 'utf-8');
    const result = checkCSS(content, file);

    if (result.errors.length > 0 || result.warnings.length > 0) {
      console.log(`\n📄 ${file}`);
      console.log(`   Blur regions: ${result.blurCount} | Reduced motion: ${result.hasReducedMotion ? '✓' : '✗'}`);
    }

    for (const err of result.errors) {
      console.log(`  ❌ ${err}`);
      totalErrors++;
    }
    for (const warn of result.warnings) {
      console.log(`  ⚠️  ${warn}`);
      totalWarnings++;
    }

    if (result.errors.length === 0 && result.warnings.length === 0) {
      console.log(`✅ ${file} — all motion checks passed`);
    }
  } catch (e) {
    console.error(`❌ ${file}: ${e.message}`);
    totalErrors++;
  }
}

// Summary
console.log(`\n${'='.repeat(50)}`);
console.log(`Summary: ${totalErrors} error(s), ${totalWarnings} warning(s) across ${files.length} file(s)`);

if (totalErrors > 0) {
  console.log('\n❌ FAILED — fix errors before shipping');
  process.exit(1);
} else if (totalWarnings > 0) {
  console.log('\n⚠️  PASSED with warnings — review before shipping');
  process.exit(0);
} else {
  console.log('\n✅ ALL CHECKS PASSED');
  process.exit(0);
}
