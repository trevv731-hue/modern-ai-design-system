const fs = require('fs');
const path = require('path');
const assert = require('assert/strict');
const root = path.resolve(__dirname, '..');
const source = require('../tokens/web.json').web;
const catalog = require('../web/catalog.cjs');
assert.equal(catalog.length, 539);
assert.deepEqual(Object.keys(source.light).sort(), Object.keys(source.dark).sort(), 'themes have identical roles');
const luminance = color => {
  const channels = color.slice(1).match(/../g).map(value => parseInt(value,16)/255)
    .map(value => value <= .04045 ? value/12.92 : ((value+.055)/1.055)**2.4);
  return channels[0]*.2126 + channels[1]*.7152 + channels[2]*.0722;
};
const contrast = (a,b) => {
  const x=luminance(a),y=luminance(b);
  return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);
};
let pairs=0;
for (const name of ['light','dark']) {
  const theme=source[name];
  for (const [fg,bg] of [['ink','surface'],['muted','surface'],['ink','canvas'],['muted','canvas'],['onAction','action'],['success','successSoft'],['warning','warningSoft'],['danger','dangerSoft'],['accent','accentSoft']]) {
    const ratio=contrast(theme[fg].value,theme[bg].value);
    assert.ok(ratio>=4.5, `${name} ${fg}/${bg} = ${ratio.toFixed(2)}; expected >=4.5`);
    pairs++;
  }
  for (const fg of ['controlLine','focus']) {
    assert.ok(contrast(theme[fg].value,theme.surface.value)>=3, `${name} ${fg} control contrast`);
  }
}
const ids=new Set();
for (const item of catalog) {
  assert.ok(item.purpose && item.keyboard && item.preview && item.guidance.length>=3 && item.checks.length>=3, item.id);
  assert.ok(!ids.has(item.id));ids.add(item.id);
  assert.ok(fs.existsSync(path.join(root,'docs/components',`${item.id}.md`)), item.id);
}
const htmlIds=new Set();
for (const item of catalog) for (const match of item.preview.matchAll(/\bid="([^"]+)"/g)) {
  assert.ok(!htmlIds.has(match[1]), `duplicate example id ${match[1]}`);htmlIds.add(match[1]);
}
const sourceCss=fs.readFileSync(path.join(root,'web/components.css'),'utf8');
assert.ok(!/transition\s*:\s*all/.test(sourceCss));
assert.ok(sourceCss.includes('prefers-reduced-motion'));
assert.ok(sourceCss.includes('forced-colors'));
const exported=fs.readFileSync(path.join(root,'web/react.tsx'),'utf8').match(/export function /g)||[];
assert.equal(exported.length, 539);
let docs=0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir,{withFileTypes:true})) {
    const file=path.join(dir,entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith('.md')) {
      docs++;
      const text=fs.readFileSync(file,'utf8');
      for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
        const link=match[1].split('#')[0];
        if (!link || /^[a-z]+:/i.test(link)) continue;
        assert.ok(fs.existsSync(path.resolve(path.dirname(file),decodeURIComponent(link))), `broken link ${file}: ${link}`);
      }
    }
  }
}
walk(path.join(root,'docs'));
for (const file of ['theme.css','components.css','motion.css','motion.js','react.tsx','tokens.ts','tokens.json','catalog.json','manifest.json']) {
  assert.ok(fs.existsSync(path.join(root,'dist/web',file)), `missing ${file}`);
}
console.log(`PASS: ${catalog.length} component specifications, ${exported.length} React exports, 2 themes, ${pairs} text contrast pairs, ${docs} docs and relative links, reduced motion and forced colors`);
