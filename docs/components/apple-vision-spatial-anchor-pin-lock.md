# VisionOS 空间世界坐标锚点图钉

[返回组件目录](../README.md) · 布局 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间计算 3D 空间实体对象世界坐标锁定微型图钉（Spatial World Coordinate Anchor Pin）；全息发光图钉微图标、世界绝对坐标 X/Y/Z 三轴读数胶囊及解开/固定状态切换按键。

## 结构

- 圆角深色高斯毛玻璃胶囊浮条 (.ds-spatial-anchor-pin)
- 发光全息图钉微图标 (.ds-spatial-anchor-pin__icon)
- 等宽 X/Y/Z 三维坐标读数 (.ds-spatial-anchor-pin__coords)
- 微型胶囊锁定/解锁按键 (.ds-spatial-anchor-pin__btn)

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

Tab 聚焦图钉按键；Enter 或 Space 切换空间固定与自由浮动模式。

## 使用细则

- 具备 role="status" 与 aria-label 完整播报当前世界锚定状态与三维坐标。
- 锁定与未锁定状态具备色彩、图示与文字的三重区分。
- 适合 VisionOS 空间计算应用、3D AR 锚定系统、虚拟现实工作台。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-anchor-pin is-locked" role="status" aria-label="空间世界锚点图钉：已锁定世界坐标"><span class="ds-spatial-anchor-pin__icon" aria-hidden="true">📌</span><span>空间锚定</span><span class="ds-spatial-anchor-pin__coords">X: 1.28m, Y: 0.85m, Z: -2.10m</span><button type="button" class="ds-spatial-anchor-pin__btn" aria-label="解除世界坐标锁定">解锁</button></div>
```

## React 示例

```tsx
<VisionSpatialAnchorPinLock isLocked={true} coordinates="X: 1.28m, Y: 0.85m, Z: -2.10m" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 绿色发光图钉图标
- [ ] X/Y/Z 米级三维绝对坐标
- [ ] 微胶囊解锁操作钮
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
