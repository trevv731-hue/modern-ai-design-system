# Figma 自动布局流向与间距控制条

[返回组件目录](../README.md) · 布局 · CSS / HTML / React

## 目的与边界

Figma 属性检查器核心的 Auto Layout 自动布局流向控制器；包含水平排列（→）、垂直排列（↓）、换行自适应（↩）三态切选，以及子项间距 Gap 像素调节微胶囊。

## 结构

- 紧凑胶囊型容器 (.ds-autolayout-flow)
- 三态方向选择微钮组 (.ds-autolayout-flow__group, .ds-autolayout-flow__btn)
- 激活项实底高亮微投影 (.ds-autolayout-flow__btn.is-active)
- 垂直分割细线 (.ds-autolayout-flow__divider)
- 子项间距 Gap 像素微指示器 (.ds-autolayout-flow__gap)

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

ArrowLeft / ArrowRight 在方向按钮间切换；Enter 或 Space 选择流向。

## 使用细则

- 具备 role="toolbar" 与内部方向选项 role="radiogroup" 及 aria-checked。
- 方向符号清晰直观，高对比度区分当前选中方向。
- 适合设计工具面板、Flexbox/Grid 布局控制、可视化低代码属性栏。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-autolayout-flow" role="toolbar" aria-label="自动布局流向控制器"><div class="ds-autolayout-flow__group" role="radiogroup" aria-label="排列方向"><button type="button" class="ds-autolayout-flow__btn is-active" aria-label="水平排列" aria-checked="true" role="radio">→</button><button type="button" class="ds-autolayout-flow__btn" aria-label="垂直排列" aria-checked="false" role="radio">↓</button><button type="button" class="ds-autolayout-flow__btn" aria-label="换行排列" aria-checked="false" role="radio">↩</button></div><div class="ds-autolayout-flow__divider" aria-hidden="true"></div><div class="ds-autolayout-flow__gap" title="子项间距 (Gap)"><span class="ds-autolayout-flow__gap-icon" aria-hidden="true">⇥⇤</span><span>16px</span></div></div>
```

## React 示例

```tsx
<FigmaAutoLayoutFlowIndicator direction="horizontal" gap={16} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三向切换钮平分且紧凑
- [ ] 水平箭头激活带微阴影实底
- [ ] 间距 16px 等宽显示清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
