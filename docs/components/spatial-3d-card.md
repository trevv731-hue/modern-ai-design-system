# VisionOS 空间拟态交互卡片

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Apple VisionOS 与 Linear 空间计算拟态卡片；具备 CSS 3D 透视透视景深 (perspective: 800px)、悬停微俯仰旋转 (rotateX/rotateY)、深层环境阴影与分层视差感。

## 结构

- 3D 透视变换外壳 (.ds-spatial-card)
- 悬浮强调色分类胶囊
- 主标题与辅助说明文案
- 带动态右箭头的行动触发链接

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

Tab 聚焦卡片；Enter/Space 激活卡片关联的任务；悬停触发优雅 3D 浮动。

## 使用细则

- 通过 perspective: 800px 与 transform-style: preserve-3d 构建真实物理空间透视。
- 悬停触发 translateY(-4px) rotateX(4deg) rotateY(-4deg)，配合 160ms 弹性平滑缓动。
- 文字层与边框高光在不同视角下呈现轻微景深位移，营造顶级未来感。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-card" role="article" tabindex="0" data-toast="启动空间计算链路"><span class="ds-spatial-card__tag">VisionOS 3D</span><h4 class="ds-spatial-card__title">空间计算神经中枢</h4><p class="ds-spatial-card__desc">利用多层深度缓冲与实时重力光泽投射，呈现近场物理层次。</p><span class="ds-spatial-card__btn">启动全息投射 →</span></div>
```

## React 示例

```tsx
<SpatialPerspectiveCard tag="VisionOS 3D" title="空间计算神经中枢" onClick={launchSpatial} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 3D 俯仰转动自然流畅不突兀
- [ ] 深色与浅色模式下阴影纵深感逼真
- [ ] 卡片内容在不同缩放比下无溢出变形
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
