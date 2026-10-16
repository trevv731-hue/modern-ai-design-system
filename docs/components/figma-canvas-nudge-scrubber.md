# Figma 属性标签横向拖拽数值微调输入框

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Figma 与 Adobe 标志性的属性微调输入框（Scrubbable Numeric Label Input）；光标悬浮在标签（W、H、X、Y 等）上时呈现左右双向拖拽箭头 ↔，按住拖拽即可无级步进微调数值，单击则进入精准数值键盘编辑。

## 结构

- 紧凑组合输入框 (.ds-nudge-scrubber)
- 前置双向拖拽属性标签 (.ds-nudge-scrubber__label)
- 等宽右对齐数值编辑区 (.ds-nudge-scrubber__input)
- 右侧静态单位提示 (.ds-nudge-scrubber__unit)
- 悬浮变色与双向拖拽鼠标指针光标

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

Tab 聚焦数值框；ArrowUp / ArrowDown 步进增减；Shift+Arrow 10倍步进。

## 使用细则

- 具备 role="group" 与 aria-label，输入框具备明确的数字步进属性。
- 标签与输入框色彩层次分明，高亮对比度符合规范。
- 适合设计画布属性面板、3D 变换视窗、音视频调色推子栏。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-nudge-scrubber" role="group" aria-label="可横向拖拽调节数值输入框 W"><span class="ds-nudge-scrubber__label" title="按住鼠标左右拖拽快速微调" aria-hidden="true">W</span><input type="number" class="ds-nudge-scrubber__input" value="320" step="1" aria-label="W 数值输入"><span class="ds-nudge-scrubber__unit" aria-hidden="true">px</span></div>
```

## React 示例

```tsx
<FigmaCanvasNudgeScrubber axis="W" value={320} unit="px" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] W 标签灰色实底
- [ ] 320 等宽数字右对齐
- [ ] px 单位紧凑贴合
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
