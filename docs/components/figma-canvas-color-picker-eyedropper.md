# Figma 9×9 像素网格画布放大取色镜

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Figma 与 macOS 原生 Digital Color Meter 风格的画布拾色放大镜（Eyedropper Loupe HUD）；带有 9x9 像素格放大透镜视窗、准星标线、悬浮 HEX 色值胶囊与取色方块。

## 结构

- 浮动 HUD 垂直容器 (.ds-eyedropper-hud)
- 圆形像素放大透镜视窗 (.ds-eyedropper-hud__loupe)
- 中央十字高精度准星对齐线 (.ds-eyedropper-hud__reticle)
- 色值代码胶囊微标 (.ds-eyedropper-hud__badge)
- 拾色微样本色块 (.ds-eyedropper-hud__swatch)

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

方向键可用于单像素步进微调取色坐标，Enter 锁定取色，Escape 退出取色模式。

## 使用细则

- 通过 role="region" 与清晰的 aria-label 报读当前捕获色彩的 HEX 与 RGB 值。
- 十字准星自带黑白双层边缘，在极黑或极白像素下均清晰可见。
- 适合设计软件拾色器、调色板构建工具、图像编辑插件及前景色采样工具。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-eyedropper-hud" role="region" aria-label="画布拾色放大镜，当前取色 #3B82F6"><div class="ds-eyedropper-hud__loupe" style="background-color:#3b82f6"><div class="ds-eyedropper-hud__reticle" aria-hidden="true"></div></div><div class="ds-eyedropper-hud__badge"><span class="ds-eyedropper-hud__swatch" style="background:#3b82f6" aria-hidden="true"></span><span>#3B82F6</span></div></div>
```

## React 示例

```tsx
<FigmaEyedropperLoupe hex="#3B82F6" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 透镜正圆且边缘微反光自然
- [ ] 准星在透镜几何中心精准居中
- [ ] 色值等宽字符居中排列
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
