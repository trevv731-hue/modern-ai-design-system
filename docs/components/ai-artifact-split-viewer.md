# AI 代码产物与实时渲染分屏视窗

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Claude Artifacts / v0 风格的动态产物视窗；集代码查看、实时渲染预览、版本切换、终端控制台输出以及一键复制代码于一体。为 AI 辅助编程、SVG 预览和网页原型提供专业交付容器。

## 结构

- 视窗外壳与顶部工具栏 (.ds-artifact-viewer, .ds-artifact-viewer__toolbar)
- 文件名、类型徽标与版本标签 (.ds-artifact-viewer__file-badge, .ds-artifact-viewer__version-tag)
- 视图切换分段器 (.ds-artifact-viewer__mode-switch, .ds-artifact-viewer__tab)
- 快捷操作按钮 (.ds-artifact-viewer__actions, .ds-artifact-viewer__action-btn)
- 渲染舞台容器 (.ds-artifact-viewer__stage)
- 编译耗时与版本页脚 (.ds-artifact-viewer__footer)

## 状态约定

| 状态 | 处理 |
|---|---|
| 默认 | 使用语义主题变量；不由组件硬编码主题颜色 |
| Hover | 仅精细指针启用；颜色与空间变化分开 |
| Focus | focus-visible 清晰且不被容器裁切 |
| Active | 保留标签与上下文；避免修改控件的宽高 |
| Disabled | 仅对交互控件适用；原生 disabled 并说明原因 |
| Loading | 只对异步任务适用；阻止重复请求并标明 busy |
| Error | 在对应上下文提供原因和恢复操作 |
| Empty | 无数据时明确说明原因，不伪造数据 |

## 操作与键盘

Tab 在视图分段按钮和操作按钮间切换；Space 或 Enter 切换 Preview 与 Code 视图；全键盘可达。

## 使用细则

- 预览区使用独立沙箱或隔离样式，防止业务组件样式污染宿主系统。
- 复制代码操作在点击后必须立即提供“已复制 ✓”反馈并在 1.5 秒后复原。
- 提供等宽终端日志抽屉，展示编译日志与实时报错信息。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-artifact-viewer" role="region" aria-label="AI 动态产物视窗：ButtonComponent.tsx，版本 v3"><div class="ds-artifact-viewer__toolbar"><div class="ds-artifact-viewer__file-badge"><span class="ds-artifact-viewer__file-icon">⚡</span><span class="ds-artifact-viewer__file-name">ButtonComponent.tsx</span><span class="ds-artifact-viewer__version-tag">v3</span></div><div class="ds-artifact-viewer__mode-switch" role="tablist"><button type="button" class="ds-artifact-viewer__tab is-active" role="tab" aria-selected="true">Preview</button><button type="button" class="ds-artifact-viewer__tab" role="tab" aria-selected="false">Code</button><button type="button" class="ds-artifact-viewer__tab" role="tab" aria-selected="false">Console</button></div><div class="ds-artifact-viewer__actions"><button type="button" class="ds-artifact-viewer__action-btn" aria-label="复制代码">Copy</button><button type="button" class="ds-artifact-viewer__action-btn" aria-label="全屏预览">⛶</button></div></div><div class="ds-artifact-viewer__stage"><div class="ds-toolbar"><button class="ds-button">Live Rendered Button</button></div></div><div class="ds-artifact-viewer__footer"><span>Compiled in 18ms</span><span>TypeScript 5.4 · React 19</span></div></div>
```

## React 示例

```tsx
<AIArtifactSplitViewer fileName="ButtonComponent.tsx" version="v3" activeTab="Preview" compileDuration="18ms" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 视图切换 tablist 符合 ARIA 规范
- [ ] 复制与全屏动作带明确无障碍标签
- [ ] 产物头部与底部等宽排版不溢出
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
