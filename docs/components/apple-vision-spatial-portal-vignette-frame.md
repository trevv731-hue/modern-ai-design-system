# VisionOS 空间计算沉浸传送门视口边框

[返回组件目录](../README.md) · 布局 · CSS / HTML / React

## 目的与边界

Apple VisionOS RealityKit 空间计算中空间沉浸传送门（Spatial Volumetric Portal Frame）；展示景深孔径光环、边缘羽化渐变透光率（94% Pass-through）、空间纵深标定（3.2m Depth）与目标沉浸全景环境名称。

## 结构

- 空间磨砂深色视口 (.ds-portal-vignette-frame)
- 传送目标与空间视深徽标 (.ds-portal-vignette-frame__header, .ds-portal-vignette-frame__badge)
- 径向光晕沉浸视口孔径 (.ds-portal-vignette-frame__aperture)
- 虚线景深光环 (.ds-portal-vignette-frame__depth-ring)
- 底部边缘羽化与透光率 (.ds-portal-vignette-frame__footer)

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

Tab 聚焦空间传送视口；屏幕阅读器自动播报当前沉浸目标、视深与透光率。

## 使用细则

- 具备 role="region" 与 aria-label 完整描述空间视口沉浸指标。
- 半透毛玻璃与发光虚线景深光环再现原生 visionOS 空间全息传送门质感。
- 适合 VisionOS 混合现实应用、全景环境传送、空间多窗口漫游。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-portal-vignette-frame" role="region" aria-label="空间沉浸传送门视口：Pacific Atoll Immersion，视深 3.2m，羽化透光度 94%"><div class="ds-portal-vignette-frame__header"><span>Pacific Atoll Immersion</span><span class="ds-portal-vignette-frame__badge">3.2m Depth</span></div><div class="ds-portal-vignette-frame__aperture" aria-hidden="true"><div class="ds-portal-vignette-frame__depth-ring"></div></div><div class="ds-portal-vignette-frame__footer"><span>Vignette: 28px</span><span>Pass-through: 94%</span></div></div>
```

## React 示例

```tsx
<VisionSpatialPortalVignetteFrame destination="Pacific Atoll Immersion" portalDepthMeters={3.2} featherRadius="28px" passThroughPct={94} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 3.2m 空间视深标定
- [ ] 全息景深虚线光环
- [ ] 94% 原生沉浸透光
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
