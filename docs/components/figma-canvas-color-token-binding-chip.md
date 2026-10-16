# Figma 画布图层设计变量色彩绑定微标签

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Figma 设计系统（Variables & Tokens）图层属性检视面板中的色彩变量绑定指示微标签（Design Token Color Binding Chip）；展示 Token 语义路径（color/surface/elevated）、十六进制色样与一键解绑断开按键。

## 结构

- 紧凑微标签 (.ds-color-binding-chip)
- 色样微方块 (.ds-color-binding-chip__swatch)
- 等宽 Token 语义路径标签 (.ds-color-binding-chip__token)
- 解绑断开按键 (.ds-color-binding-chip__detach)

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

Tab 聚焦解绑按钮；Enter 或 Space 触发断开 Token 变量绑定。

## 使用细则

- 具备 role="group" 与 aria-label 完整播报当前绑定的 Token 路径与解析色值。
- 解绑按钮悬停呈现柔和警告色，键盘可访问性完整。
- 适合设计系统变量插件、属性检查面板、前端 CSS 变量映射器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-color-binding-chip" role="group" aria-label="色彩变量绑定：color/surface/elevated (#ffffff)，来自 Core DS 3.0"><span class="ds-color-binding-chip__swatch" style="background:#ffffff" aria-hidden="true"></span><span class="ds-color-binding-chip__token">color/surface/elevated</span><button type="button" class="ds-color-binding-chip__detach" aria-label="解绑变量 color/surface/elevated">✕</button></div>
```

## React 示例

```tsx
<FigmaCanvasColorTokenBindingChip tokenPath="color/surface/elevated" resolvedHex="#ffffff" libraryName="Core DS 3.0" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] color/surface/elevated 语义路径
- [ ] 12px 规整色样方块
- [ ] 一键解绑交互流畅
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
