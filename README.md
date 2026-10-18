# Modern AI Design System v3

一套可离线使用的 UI 设计系统：529 类组件规范、529 个 React 组件、82 套主题与 99 款质感贴图、三种密度，包含跨平台 Token 与原生参考代码。

## 从这里开始

- [组件预览](index.html)：直接用浏览器打开，体验组件、主题和密度。
- [可搜索手册](handbook.html)：离线阅读完整规范。
- [文档目录](docs/README.md)：按基础指南、组件和页面场景查阅源文档。
- [React 接入](docs/guides/react.md) · [变量参考](docs/guides/token-reference.md) · [交付检查](docs/guides/quality.md) · [质感与动效接入](docs/guides/glass-and-motion-adoption.md)。

## 目录

| 位置 | 用途 |
|---|---|
| `tokens/` | 设计变量源文件；修改后重新构建 |
| `web/` | Web 样式、React 源码、动效和页面模板 |
| `docs/guides/` | 视觉、主题、布局、接入与验收指南 |
| `docs/components/` | 529 类组件文档；由组件目录生成 |
| `docs/patterns/` | 连接工具、数据工作区、设置与实时监控等场景 |
| `scripts/` | 构建、验证和可选打包工具 |
| `dist/` | 可直接接入产品的生成文件；保留供离线使用 |
| `.cursor/` | Cursor 规则及原生平台参考代码 |
| `archive/` | 历史资料归档；只读备查，不参与构建 |

`index.html` 和 `handbook.html` 是生成的浏览器入口。Web 组件目录与示例在 `web/catalog.cjs` 维护，指南在 `docs/guides/` 维护；不要手改生成的组件文档和变量表。

## 开发和验证

```bash
npm ci
npm run build
npm test
npm run lint:motion
```

仅浏览预览或复制 `dist/` 产物，无需安装依赖。`node_modules/` 不随整理后的文件夹保留，开发时用 `npm ci` 恢复。

可选运行 `npm run package` 生成 `artifacts/ui-design-system-v3.zip`，只打包当前源码、文档与离线产物，不包含依赖、Git 历史、旧资料和截图。

## 接入产品

Web 使用 `dist/web/theme.css` 和 `dist/web/components.css`，React 封装见 `web/react.tsx`；可选动效见 `dist/web/motion.css`、`motion.js`。AetherLink 继续从 `dist/web/` 同步，产物路径保持兼容。

Swift、Android、JavaFX 等平台产物和参考代码继续保留，需在对应平台构建验证。详细边界见 [平台说明](docs/guides/platforms.md)。

## 旧资料与备份

旧版长篇规范 `DESIGN-SPEC.md`、A/B 对比页 `compare.html`、验证截图与 SHA-256 快照清单统一收在 [archive/legacy-2026-10/](archive/legacy-2026-10/)，已并入本仓库，不再单独保留项目同级的备份目录。

三份旧快照压缩包（共约 67 MB）经逐项哈希比对确认已被当前库完全覆盖，未保留；需要旧版本时走 Git 历史。取舍记录见归档目录的 README。

MIT License；内置字体许可见 [OFL](web/fonts/OFL.txt)。
