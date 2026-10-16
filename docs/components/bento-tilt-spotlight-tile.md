# VisionOS 空间视差微光倾斜便当块

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Apple VisionOS 与 Linear 风格的 3D 视差微光倾斜便当格子；集成鼠标光标距离反光跟随、微上浮抬升微动效与圆润边角高光。

## 结构

- 视差便当卡片外壳 (.ds-tilt-tile)
- 鼠标跟随高光聚光层 (.ds-tilt-tile__glow)
- 顶部大号业务图标 (.ds-tilt-tile__icon)
- 卡片主标题 (.ds-tilt-tile__title)
- 详述介绍文案 (.ds-tilt-tile__desc)

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

Tab 聚焦便当块；Enter 打开该便当块对应的工作区或功能面板。

## 使用细则

- 高光跟随层采用动态 CSS 变量 --ds-tilt-x 与 --ds-tilt-y 驱动的径向渐变，天然契合 pointermove 事件。
- 卡片抬升仅使用 translateY(-2px)，配合 200ms cubic-bezier(0.16,1,0.3,1) 缓动，流畅无比。
- 适合首页 Bento Grid、产品功能特性矩阵或 VisionOS 风格的空间卡片展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tilt-tile" role="article" tabindex="0"><div class="ds-tilt-tile__glow" aria-hidden="true"></div><span class="ds-tilt-tile__icon" aria-hidden="true">🌌</span><h3 class="ds-tilt-tile__title">VisionOS 空间视差计算</h3><p class="ds-tilt-tile__desc">基于三维渲染管线对视点坐标进行逐帧透视补偿，提供沉浸式深度分层感知。</p></div>
```

## React 示例

```tsx
<SpatialTiltSpotlightTile icon="🌌" title="VisionOS 空间视差计算" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 卡片微上浮与阴影扩散自然
- [ ] 径向高光柔和不刺眼
- [ ] 键盘聚焦与操作可访问性良好
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
