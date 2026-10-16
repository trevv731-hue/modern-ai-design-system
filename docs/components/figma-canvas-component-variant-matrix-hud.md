# Figma 画布组件变体属性矩阵映射微面板

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Figma 画布多维变体组件集（Component Set Variants）属性矩阵映射悬浮微面板（Component Variant Matrix Property HUD）；展示组件名称（Button）、唯一 ID、多维度属性分段芯片（Size: sm/md/lg、Hierarchy: Primary/Secondary、State: Default/Hover/Pressed）并支持即时激活状态切换。

## 结构

- 紧凑圆角属性微面板 (.ds-variant-matrix-hud)
- 组件名称与 ID 头部 (.ds-variant-matrix-hud__header, .ds-variant-matrix-hud__id)
- 变体维度属性行列表 (.ds-variant-matrix-hud__props, .ds-variant-matrix-hud__row)
- 变体选项微芯片按钮组 (.ds-variant-matrix-hud__chips, .ds-variant-matrix-hud__chip)

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

Tab / Shift+Tab 在各维度变体芯片间移动焦点；Enter 或 Space 切换选中变体属性值。

## 使用细则

- 具备 role="region" 与 aria-label 完整描述当前组件变体矩阵。
- 各变体芯片具备 aria-pressed 状态并支持键盘交互。
- 适合 Figma 属性面板插件、设计系统组件游乐场、动态样式测试微件。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-variant-matrix-hud" role="region" aria-label="组件变体矩阵：Button (#1402:88)"><div class="ds-variant-matrix-hud__header"><span>Button</span><span class="ds-variant-matrix-hud__id">#1402:88</span></div><div class="ds-variant-matrix-hud__props"><div class="ds-variant-matrix-hud__row"><span class="ds-variant-matrix-hud__prop-name">Size:</span><div class="ds-variant-matrix-hud__chips"><button type="button" class="ds-variant-matrix-hud__chip" aria-pressed="false">sm</button><button type="button" class="ds-variant-matrix-hud__chip is-active" aria-pressed="true">md</button><button type="button" class="ds-variant-matrix-hud__chip" aria-pressed="false">lg</button></div></div><div class="ds-variant-matrix-hud__row"><span class="ds-variant-matrix-hud__prop-name">Hierarchy:</span><div class="ds-variant-matrix-hud__chips"><button type="button" class="ds-variant-matrix-hud__chip is-active" aria-pressed="true">Primary</button><button type="button" class="ds-variant-matrix-hud__chip" aria-pressed="false">Secondary</button></div></div><div class="ds-variant-matrix-hud__row"><span class="ds-variant-matrix-hud__prop-name">State:</span><div class="ds-variant-matrix-hud__chips"><button type="button" class="ds-variant-matrix-hud__chip is-active" aria-pressed="true">Default</button><button type="button" class="ds-variant-matrix-hud__chip" aria-pressed="false">Hover</button><button type="button" class="ds-variant-matrix-hud__chip" aria-pressed="false">Pressed</button></div></div></div></div>
```

## React 示例

```tsx
<FigmaCanvasVariantMatrixHud componentName="Button" componentId="1402:88" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 多维变体选项芯片并排
- [ ] aria-pressed 完整无障碍
- [ ] 激活态高光即时反馈
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
