# 验证截图

2026-10-12，在 Windows 的 Electron/Chromium 中验证。

- `design-system-light.png` / `design-system-dark.png`：组件目录的两种主题。
- `design-system-mobile.png`：390px CSS 视口，验证没有页面横向溢出。
- `handbook-field.png`：可阅读手册中的输入框规范。
- `aetherlink-light.png` / `aetherlink-dark.png`：接入系统后的桌面应用。

截图使用隔离的数据目录，没有用户真实订阅、节点或凭据。UI 测试脚本位于 AetherLink 的 `scripts/test-ui.mjs` 和 `scripts/test-desktop.mjs`；测试验证主题、密度、搜索、弹窗焦点、标签页键盘操作、减少动效、可见 blur 区域及订阅导入。

系统自动检查包含 28 类组件资料、11 个 React 导出、18 组正文对比度、51 篇文档和相对链接。检查不能替代完整的读屏、性能和各原生平台验证。

可选压缩包通过 `python scripts/package.py` 生成，不包含 node_modules 和 Git 历史。
