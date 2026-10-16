# Figma 钢笔矢量锚点贝塞尔手柄角度 HUD

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Figma 画布钢笔与矢量路径锚点贝塞尔手柄角度与切线长度控制 HUD（Vector Pen Anchor & Bezier Curve Handle HUD）；手柄镜像模式标签（Mirrored / Disconnected / Asymmetric）、手柄精确角度度数（如 45.0°）与手柄切线像素长度。

## 结构

- 紧凑圆角矢量控制浮条 (.ds-bezier-handle-hud)
- 锚点类型紫色微芯片 (.ds-bezier-handle-hud__type)
- 角度与切线长度等宽读数 (.ds-bezier-handle-hud__stat)

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

Tab 聚焦 HUD；屏幕阅读器自动播报当前手柄类型、角度度数与像素长度。

## 使用细则

- 具备 role="status" 与 aria-label 完整播报矢量手柄参数。
- 角度与切线长度采用粗体等宽数字，专业感强烈。
- 适合矢量插画工具、字体设计编辑器、CSS 贝塞尔曲线生成器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-bezier-handle-hud" role="status" aria-label="贝塞尔矢量手柄：Mirrored 模式，角度 45.0°，长度 72 像素"><span class="ds-bezier-handle-hud__type">Mirrored</span><span class="ds-bezier-handle-hud__stat">角度: <strong>45.0°</strong></span><span class="ds-bezier-handle-hud__stat">长: <strong>72px</strong></span></div>
```

## React 示例

```tsx
<FigmaCanvasBezierHandleHud handleType="Mirrored" angleDegrees={45.0} lengthPx={72} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] Mirrored 软紫标签
- [ ] 角度 45.0° 加粗清晰
- [ ] 长 72px 规范等宽
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
