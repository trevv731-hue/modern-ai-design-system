# Figma 无限画布缩放与视口浮动控制条

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

Figma 与 Miro 风格的悬浮画布缩放与漫游控制药丸；集成抓手工具切换、网格对齐开关、步进缩放按钮与等宽缩放百分比。

## 结构

- 悬浮胶囊底座 (.ds-canvas-hud)
- 抓手漫游切换按钮 (.ds-canvas-hud__btn)
- 像素网格对齐按钮
- 细分割线 (.ds-canvas-hud__divider)
- 放大/缩小步进操作按钮
- 等宽缩放比例显示 (.ds-canvas-hud__val)

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

Tab 在各按钮间跳转；Enter/Space 激活工具或增减缩放比；点击数值恢复 100%。

## 使用细则

- 采用 backdrop-filter: blur(16px) 与四周柔和扩散阴影，悬浮于任意复杂画布之上而不破坏底层内容。
- 百分比数字点击可快速重置至 100%，使用等宽字体杜绝位移抖动。
- 适合设计工具、流程图编辑器、大屏拓扑图及网络拓扑工作区。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-canvas-hud" role="toolbar" aria-label="画布缩放视口浮动控制条"><button type="button" class="ds-canvas-hud__btn" aria-label="抓手漫游工具">✋</button><button type="button" class="ds-canvas-hud__btn is-active" aria-label="像素网格对齐">#</button><div class="ds-canvas-hud__divider"></div><button type="button" class="ds-canvas-hud__btn" aria-label="缩小画布">−</button><span class="ds-canvas-hud__val">100%</span><button type="button" class="ds-canvas-hud__btn" aria-label="放大画布">+</button></div>
```

## React 示例

```tsx
<FigmaCanvasZoomHud zoom={100} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 悬浮药丸毛玻璃背景通透
- [ ] 缩放百分比点击可快速重置
- [ ] 按钮点击交互无布局抖动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
