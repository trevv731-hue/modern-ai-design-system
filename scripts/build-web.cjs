const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const source = require('../tokens/web.json').web;
const catalog = require('../web/catalog.cjs');
const output = path.join(root, 'dist/web');
fs.mkdirSync(output, { recursive: true });
const kebab = key => key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
const values = group => Object.fromEntries(Object.entries(group).map(([key, token]) => [kebab(key), token.value]));
const themes = { light: values(source.light), dark: values(source.dark) };
const shared = {};
for (const [group, tokens] of Object.entries(source)) {
  if (['light','dark'].includes(group)) continue;
  for (const [name, token] of Object.entries(tokens)) shared[`${group}-${kebab(name)}`] = token.value;
}
const declarations = tokens => Object.entries(tokens).map(([key, value]) => `  --ds-${key}: ${value};`).join('\n');
fs.writeFileSync(path.join(output, 'theme.css'), `/* Generated from tokens/web.json. Do not edit. */\n:root {\n${declarations({...shared,...themes.light})}\n  color-scheme: light;\n}\n[data-theme="dark"] {\n${declarations(themes.dark)}\n  color-scheme: dark;\n}\n[data-theme="light"] { color-scheme:light; }\n`);
const themePath = path.join(output, 'theme.css');
fs.writeFileSync(themePath, fs.readFileSync(path.join(root, 'web/fonts.css'), 'utf8') + fs.readFileSync(themePath, 'utf8'));
fs.cpSync(path.join(root, 'web/fonts'), path.join(output, 'fonts'), { recursive: true });
fs.copyFileSync(path.join(root, 'web/components.css'), path.join(output, 'components.css'));
fs.copyFileSync(path.join(root, 'web/warm-paper.css'), path.join(output, 'warm-paper.css'));
for (const file of ['motion.css','motion.js']) fs.copyFileSync(path.join(root,'web',file),path.join(output,file));
fs.copyFileSync(path.join(root, 'web/react.tsx'), path.join(output, 'react.tsx'));
fs.writeFileSync(path.join(output, 'tokens.json'), JSON.stringify({ version:'3.0.0', themes, shared }, null, 2));
fs.writeFileSync(path.join(output, 'tokens.ts'), `// Generated; runtime colors are CSS variables.\nexport const themes = ${JSON.stringify(themes,null,2)} as const;\nexport const sharedTokens = ${JSON.stringify(shared,null,2)} as const;\nexport type ThemeName = keyof typeof themes;\nexport type SemanticColor = keyof typeof themes.light;\n`);
fs.writeFileSync(path.join(output, 'catalog.json'), JSON.stringify(catalog, null, 2));
const reactExports = (fs.readFileSync(path.join(root, 'web/react.tsx'), 'utf8').match(/export function /g) || []).length;
fs.writeFileSync(path.join(output, 'manifest.json'), JSON.stringify({version:'3.0.0',componentCount:catalog.length,reactComponentCount:reactExports,themeCount:2,densities:['compact','comfortable','touch'],source:'tokens/web.json',license:'MIT'},null,2));
const docsDir = path.join(root, 'docs/components');
fs.mkdirSync(docsDir, { recursive:true });
for (const item of catalog) {
  const doc = `# ${item.name}\n\n[返回组件目录](../README.md) · ${item.category} · ${item.status}\n\n## 目的与边界\n\n${item.purpose}\n\n## 结构\n\n${item.anatomy.map(x=>`- ${x}`).join('\n')}\n\n## 状态约定\n\n| 状态 | 处理 |\n|---|---|\n| 默认 | 使用语义主题变量；不由组件硬编码主题颜色 |\n| Hover | 仅精细指针启用；颜色与空间变化分开 |\n| Focus | focus-visible 清晰且不被容器裁切 |\n| Active | 保留标签与上下文；避免修改控件的宽高 |\n| Disabled | 仅对交互控件适用；原生 disabled 并说明原因 |\n| Loading | 只对异步任务适用；阻止重复请求并标明 busy |\n| Error | 在对应上下文提供原因和恢复操作 |\n| Empty | 无数据时明确说明原因，不伪造数据 |\n\n## 操作与键盘\n\n${item.keyboard}\n\n## 使用细则\n\n${item.guidance.map(x=>`- ${x}`).join('\n')}\n\n## 主题、密度与布局\n\n采用 \`--ds-ink\`、\`--ds-muted\`、\`--ds-surface\`、\`--ds-line\` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。\n\n## HTML 示例\n\n\`\`\`html\n${item.preview}\n\`\`\`\n${item.react ? `\n## React 示例\n\n\`\`\`tsx\n${item.react}\n\`\`\`\n\n组件源码见 [web/react.tsx](../../web/react.tsx)。\n` : '\n该组件提供 HTML/CSS 示例，尚未提供独立 React 封装；业务代码应保留原生语义。\n'}\n## 验收\n\n${item.checks.map(x=>`- [ ] ${x}`).join('\n')}\n- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务\n- [ ] 错误、禁用和加载状态没有虚构成功结果\n\n## 相关规范\n\n[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)\n`;
  fs.writeFileSync(path.join(docsDir,`${item.id}.md`), doc);
}
const tokenDoc = `# Web 语义 Token 参考\n\n源文件：\`tokens/web.json\`。运行 \`npm run build\` 更新产物。\n\n## 颜色角色\n\n| CSS 变量 | 浅色 | 深色 |\n|---|---|---|\n${Object.keys(themes.light).map(key=>`| \`--ds-${key}\` | ${themes.light[key]} | ${themes.dark[key]} |`).join('\n')}\n\n## 尺寸、字体、动效和层级\n\n| CSS 变量 | 值 |\n|---|---|\n${Object.entries(shared).map(([key,value])=>`| \`--ds-${key}\` | ${value} |`).join('\n')}\n`;
fs.writeFileSync(path.join(root, 'docs/guides/token-reference.md'), tokenDoc);
const html = fs.readFileSync(path.join(root, 'web/gallery.html'), 'utf8')
  .replace(/href="docs\/([^" ]+)\.md"/g, 'href="handbook.html#$1"')
  .replace('/*__CATALOG__*/', `window.DS_CATALOG=${JSON.stringify(catalog).replace(/</g,'\\u003c')};window.DS_TOKENS=${JSON.stringify(themes)};`);
fs.writeFileSync(path.join(root, 'index.html'), html);
require('./render-guides.cjs');
console.log(`Web v3: ${catalog.length} component specs, 2 themes, ${Object.keys(shared).length} shared tokens; open index.html`);
