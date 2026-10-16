# VisionOS 空间视界传送门锚点坞

[返回组件目录](../README.md) · 布局 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间计算沉浸式全息传送门锚定控制坞（Spatial Portal Viewport Anchor Ring）；虚线光波传送门视界边缘、空间位置世界锁定状态开关（World Lock）及现实/虚拟混合沉浸度调节滑块。

## 结构

- 全息高斯微透控制面板 (.ds-spatial-portal-anchor)
- 虚线电光传送门视界环 (.ds-spatial-portal-anchor__ring)
- 中心全息视界标志 (.ds-spatial-portal-anchor__target)
- 空间锁定切换胶囊徽标
- 沉浸深度滑动条 (.ds-spatial-portal-anchor__range)

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

ArrowLeft / ArrowRight 调节空间沉浸深度；Space 切换空间世界锚定锁定状态。

## 使用细则

- 具备 role="region" 与 aria-label 完整描述传送门名称与沉浸度百分比。
- 虚线环带微柔光径向渐变，高对比度可读。
- 适合 VisionOS 沉浸式应用、空间传送门过渡组件、MR 混合现实锚点。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-portal-anchor" role="region" aria-label="空间传送门锚点：火星地表空间全息视界，沉浸度：65%"><div class="ds-spatial-portal-anchor__ring" aria-hidden="true"><span class="ds-spatial-portal-anchor__target">🪐</span></div><div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:12px;font-weight:700;color:#ffffff">火星地表空间全息视界</span><button type="button" class="ds-badge" style="cursor:pointer;background:rgba(0,245,212,0.2);color:#00f5d4">🔒 空间锚定</button></div><div class="ds-spatial-portal-anchor__slider-row"><span>沉浸度</span><input type="range" class="ds-spatial-portal-anchor__range" min="0" max="100" value="65" aria-label="空间沉浸深度滑块"><span style="font-family:var(--ds-type-mono)">65%</span></div></div>
```

## React 示例

```tsx
<VisionSpatialPortalAnchor portalName="火星地表空间全息视界" immersionPct={65} isLocked={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 电光青虚线光环通透
- [ ] 沉浸度滑轨与 65% 等宽对齐
- [ ] 空间锚定状态标签鲜亮
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
