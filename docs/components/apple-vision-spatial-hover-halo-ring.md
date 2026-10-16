# VisionOS 空间注视焦点光环按钮

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间眼动追踪注视光环微交互按钮（Spatial Gaze Hover Halo Ring）；半透明超曲率毛玻璃圆盘底座、视线注视触发的环形多层柔和光晕扩散、中心高亮灵动定位原点及捏合轻触物理反馈。

## 结构

- 正圆空间超薄双曲玻璃圆环 (.ds-spatial-halo-ring)
- 注视高亮外发光扩散射线圈 (.ds-spatial-halo-ring:hover)
- 中心高斯聚光点阵 (.ds-spatial-halo-ring__dot)
- 捏合点击缩放微动效 (transform: scale)
- 高对比度毛玻璃边缘与景深反射

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

视线注视触发外光环扩展；拇指与食指捏合触发轻微缩放与点击动作。

## 使用细则

- 具备 role="button" 与 aria-label 明确说明空间焦点光环按钮功能。
- 光环扩散动效平滑克制，符合无障碍视觉引导规范。
- 适合空间计算浮空操作坞、MR 交互热点、3D 模型点选把手。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<button type="button" class="ds-spatial-halo-ring" aria-label="VisionOS 空间注视焦点光环按钮"><div class="ds-spatial-halo-ring__dot"></div></button>
```

## React 示例

```tsx
<VisionSpatialHoverHaloRing label="空间注视焦点光环" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 半透明玻璃小圆盘精巧悬浮
- [ ] 中间微光圆点居中定位
- [ ] 悬浮时外发光环层层散开
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
