# Figma 画布贝塞尔矢量锚点与切线手柄覆盖层

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Figma 矢量钢笔编辑模式（Vector Edit Network）中的贝塞尔曲线顶点与镜像对称切线手柄控制器（Vector Anchor Point & Tangent Handle Overlay）；展示顶点坐标（X: 248.5, Y: 112.0）、对称切线拉杆、端点圆点与切线长度标定（LEN: 48px）。

## 结构

- 紧凑矢量锚点面板 (.ds-vector-anchor-handle)
- 顶点标识与对称切线模式 (.ds-vector-anchor-handle__header, .ds-vector-anchor-handle__mode)
- 微型矢量画布舞台 (.ds-vector-anchor-handle__canvas)
- 切线连线、方形顶点与双向端点圆点 (.ds-vector-anchor-handle__line, .ds-vector-anchor-handle__node, .ds-vector-anchor-handle__tangent-left, .ds-vector-anchor-handle__tangent-right)
- 底栏像素坐标与手柄长度 (.ds-vector-anchor-handle__coords)

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

Tab 聚焦矢量锚点手柄；屏幕阅读器自动播报当前顶点编号、切线对称模式与坐标。

## 使用细则

- 具备 role="group" 与 aria-label 完整播报当前贝塞尔锚点与切线几何参数。
- 精准还原专业矢量设计软件中经典贝塞尔路径调节的微交互视觉规范。
- 适合在线图形编辑器、矢量图标设计工具、动画关键帧曲线编辑器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-vector-anchor-handle" role="group" aria-label="矢量贝塞尔控制点：P4_BEZIER_VERTEX，模式 Mirrored Symmetrical，坐标 (248.5, 112)，切线长 48px"><div class="ds-vector-anchor-handle__header"><span>P4_BEZIER_VERTEX</span><span class="ds-vector-anchor-handle__mode">Mirrored Symmetrical</span></div><div class="ds-vector-anchor-handle__canvas" aria-hidden="true"><div class="ds-vector-anchor-handle__line"></div><div class="ds-vector-anchor-handle__tangent-left"></div><div class="ds-vector-anchor-handle__node"></div><div class="ds-vector-anchor-handle__tangent-right"></div></div><div class="ds-vector-anchor-handle__coords"><span>X: 248.5 Y: 112.0</span><span>LEN: 48px</span></div></div>
```

## React 示例

```tsx
<FigmaCanvasVectorAnchorTangentHandle anchorId="P4_BEZIER_VERTEX" tangentMode="Mirrored Symmetrical" coordX={248.5} coordY={112.0} handleLength={48} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 贝塞尔对称切线呈现
- [ ] 精确实时像素坐标
- [ ] 专业级矢量手柄拟真
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
