# VisionOS 空间实景水平与垂直平面检测网格指示器

[返回组件目录](../README.md) · 布局 · CSS / HTML / React

## 目的与边界

Apple VisionOS ARKit 空间计算物理平面检测与环境几何重构指示视窗（Spatial Surface Plane Detection Mesh Reticle）；展示检测到的表面类型（Horizontal Table / Vertical Wall）、重力对齐状态、物理尺寸（1.4m × 0.8m）、置信度与动态全息激光网格视窗。

## 结构

- 深色全息磨砂玻璃卡片 (.ds-spatial-surface-detector)
- 平面类型青色胶囊徽标 (.ds-spatial-surface-detector__header, .ds-spatial-surface-detector__plane-type)
- 全息激光网格重构区域 (.ds-spatial-surface-detector__mesh-view, .ds-spatial-surface-detector__grid)
- 物理尺寸与置信度底部栏 (.ds-spatial-surface-detector__footer)

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

Tab 聚焦平面检测视窗；屏幕阅读器自动朗读表面类型、重力对齐方向与几何尺寸。

## 使用细则

- 具备 role="region" 与 aria-label 完整描述空间表面检测参数。
- 全息网格视窗具备科幻深度与科技感，毛玻璃边缘过渡自然。
- 适合 VisionOS 空间应用开发、AR 虚拟物体放置对齐、室内空间建图。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-surface-detector" role="region" aria-label="空间平面检测视窗：Horizontal Table，Gravity Aligned，尺寸 1.4m × 0.8m，置信度 High (98%)"><div class="ds-spatial-surface-detector__header"><span>空间实景表面检测</span><span class="ds-spatial-surface-detector__plane-type">Horizontal Table</span></div><div class="ds-spatial-surface-detector__mesh-view" aria-hidden="true"><div class="ds-spatial-surface-detector__grid"></div></div><div class="ds-spatial-surface-detector__footer"><span>1.4m × 0.8m</span><span>Gravity Aligned · High (98%)</span></div></div>
```

## React 示例

```tsx
<VisionSpatialSurfacePlaneDetector planeType="Horizontal Table" alignment="Gravity Aligned" dimensions="1.4m × 0.8m" confidence="High (98%)" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] Horizontal Table 蓝标
- [ ] 全息激光网格深度视窗
- [ ] 1.4m × 0.8m 物理尺度精确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
