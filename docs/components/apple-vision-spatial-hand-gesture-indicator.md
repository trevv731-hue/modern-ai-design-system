# VisionOS 空间双指捏合准星指示器

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间注视与双指捏合（Direct Pinch & Air Gaze Gesture）准星交互指示器（Spatial Hand Gaze Pinch Crosshair HUD）；展示注视同心光环、指尖接触高亮点与捏合就绪置信度状态。

## 结构

- 深色半透磨砂玻璃微胶囊 (.ds-spatial-hand-gesture)
- 准星同心光环与动态中心点 (.ds-spatial-hand-gesture__reticle, .ds-spatial-hand-gesture__ring, .ds-spatial-hand-gesture__dot)
- 捏合激活态缩放与绿色高亮 (.ds-spatial-hand-gesture.is-pinched)
- 右侧手势置信度状态文本 (.ds-spatial-hand-gesture__state)

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

屏幕阅读器通过 role="status" 与 aria-live="polite" 实时播报当前捏合手势状态。

## 使用细则

- 具备 role="status" 与 aria-live="polite" 播报手势感应变化。
- 捏合态具备光环缩圈与中心发光粒子反馈。
- 适合 VisionOS 空间计算应用、体感交互手势调试、XR 视线追踪控制。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-hand-gesture" role="status" aria-live="polite" aria-label="空间双指捏合手势状态：Direct Pinch Ready，置信度 98%"><div class="ds-spatial-hand-gesture__reticle" aria-hidden="true"><div class="ds-spatial-hand-gesture__ring"></div><div class="ds-spatial-hand-gesture__dot"></div></div><span class="ds-spatial-hand-gesture__state">Direct Pinch Ready</span></div>
```

## React 示例

```tsx
<VisionSpatialHandGestureReticle isPinched={false} confidencePct={98} gestureState="Direct Pinch Ready" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 全息光环与发光焦点
- [ ] 半透明深色玻璃胶囊
- [ ] Direct Pinch 状态明确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
