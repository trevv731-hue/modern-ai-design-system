# Figma 画布像素网格与对齐切换控制栏

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

Figma 矢量设计画布超高倍率缩放时的像素网格与像素吸附动态指示栏（Pixel Grid & Snap Toggle Bar）；显示当前画布放大倍数（如 1200%）、网格显示开关状态与图元对齐到整数像素（Snap to Pixel）快捷切换按键。

## 结构

- 紧凑长圆角工作栏 (.ds-pixel-grid-toggle)
- 前置矢量像素网格微图标 (.ds-pixel-grid-toggle__icon)
- 等宽放大率数字标签 (.ds-pixel-grid-toggle__zoom)
- 像素网格显示状态微胶囊 (.ds-pixel-grid-toggle__btn)
- 像素吸附对齐开关微胶囊 (.ds-pixel-grid-toggle__btn.is-active)

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

Ctrl+Shift+' 切换像素网格；Ctrl+Alt+' 切换对齐像素；Tab 导航按键。

## 使用细则

- 具备 role="toolbar" 与 aria-label 说明 Figma 画布像素网格控制。
- 按钮具备 aria-pressed 状态，放大率等宽对齐。
- 适合设计画布视图控制、像素画编辑器、位图矢量混合工作区。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pixel-grid-toggle" role="toolbar" aria-label="Figma 画布像素网格控制"><span class="ds-pixel-grid-toggle__icon" aria-hidden="true">▦</span><span class="ds-pixel-grid-toggle__zoom">1200%</span><button type="button" class="ds-pixel-grid-toggle__btn is-active" aria-pressed="true">像素网格</button><button type="button" class="ds-pixel-grid-toggle__btn is-active" aria-pressed="true">对齐像素</button></div>
```

## React 示例

```tsx
<FigmaCanvasPixelGridToggle zoom={1200} isGridVisible={true} isSnapToPixel={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] ▦ 图标与 1200% 标签紧凑连体
- [ ] 像素网格与对齐像素按钮微圆角规范
- [ ] 悬浮与激活反馈灵敏
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
