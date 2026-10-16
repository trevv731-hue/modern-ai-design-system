# VisionOS 空间计算虚拟与现实遮挡穿透掩膜指示器

[返回组件目录](../README.md) · 布局 · CSS / HTML / React

## 目的与边界

Apple VisionOS RealityKit 空间计算中现实物理双手或物体穿透虚拟视窗时的深度遮挡（Depth Occlusion & Hand Passthrough Mask Pill）；展示当前遮挡计算模式（Dynamic Hands）、激光辉光指示点与深度羽化半径（Feather: 4px）。

## 结构

- 深色全息磨砂胶囊 (.ds-occlusion-mask-pill)
- 青蓝色空间全息辉光点 (.ds-occlusion-mask-pill__icon)
- 遮挡感知模式文本 (.ds-occlusion-mask-pill__mode)
- 等宽羽化参数 (.ds-occlusion-mask-pill__feather)

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

Tab 聚焦遮挡掩膜指示器；屏幕阅读器自动播报当前空间遮挡模式与羽化程度。

## 使用细则

- 具备 role="status" 与 aria-label 完整描述当前空间穿透模式。
- 磨砂半透背景与青蓝光晕极具 Apple VisionOS 空间感。
- 适合 VisionOS 沉浸式应用、AR 手势穿透调试、虚拟现实交互视图。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-occlusion-mask-pill" role="status" aria-label="空间遮挡掩膜：Dynamic Hands，羽化半径 4px，Precision Tracked"><span class="ds-occlusion-mask-pill__icon" aria-hidden="true"></span><span class="ds-occlusion-mask-pill__mode">Dynamic Hands</span><span class="ds-occlusion-mask-pill__feather">Feather: 4px</span></div>
```

## React 示例

```tsx
<VisionSpatialOcclusionMaskPill mode="Dynamic Hands" featherRadius="4px" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] Dynamic Hands 原生空间模式
- [ ] 4px 羽化半径精确呈现
- [ ] 全息毛玻璃光环
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
