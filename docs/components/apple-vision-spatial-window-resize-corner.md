# VisionOS 空间视窗右下角注视缩放把手

[返回组件目录](../README.md) · 布局 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间计算视窗右下角的自由缩放把手弧线（Spatial Window Corner Resize Affordance Arc）；大圆角磨砂全息视窗、右下角注视发光弧形把手、视线锁定高亮青色光晕与空间画幅比例指示（16:9）。

## 结构

- 空间双曲毛玻璃视窗 (.ds-spatial-resize-corner)
- 右下角注视发光弧形把手支架 (.ds-spatial-resize-corner__bracket)
- 实时画幅宽高比例提示胶囊 (.ds-spatial-resize-corner__ratio)
- 视线注视发光微光晕 (.ds-spatial-resize-corner__bracket)
- 对角线双向缩放光标指示 (nwse-resize)

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

视线锁定或按住 Command 配合方向键自由缩放空间视窗。

## 使用细则

- 具备 role="region" 与 aria-label 说明空间视窗缩放把手。
- 把手发光状态与背景具备明显亮度差，且支持 nwse-resize 光标。
- 适合空间计算应用视窗、全景画板容器、沉浸式窗口管理器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-resize-corner" role="region" aria-label="空间计算视窗，右下角带有空间缩放把手"><div class="ds-spatial-resize-corner__content"><strong>空间计算视窗</strong><p style="margin:6px 0 0;opacity:0.7">注视右下角弧形把手并捏合手势以调整窗口尺寸。</p></div><span class="ds-spatial-resize-corner__ratio">16:9</span><div class="ds-spatial-resize-corner__bracket" aria-label="双向自由缩放把手"></div></div>
```

## React 示例

```tsx
<VisionSpatialWindowResizeCorner ratio="16:9" label="空间计算视窗" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 右下角圆弧把手微泛青光
- [ ] 16:9 比例微胶囊小巧居底
- [ ] 大圆角玻璃壳体通透
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
