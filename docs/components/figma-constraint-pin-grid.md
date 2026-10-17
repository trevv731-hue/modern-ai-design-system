# Figma 约束定位网格

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

用九宫格加边缘开关表达元素随容器缩放时的定位与拉伸行为，避免响应式结果靠猜。

## 结构

- 九宫格 (ds-constraint-grid)
- 水平约束开关
- 垂直约束开关
- 当前组合说明

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

Tab 进入每个开关；Space 切换；组合结果用文字同步说明。

## 使用细则

- 同时选中相对两边表示拉伸，需要明确提示。
- 未设置约束时说明默认行为。
- 状态变化立即反映在说明文字里。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-constraint-grid" role="group" aria-label="约束定位"><div class="ds-constraint-grid__cell ds-constraint-grid__cell--active" aria-label="左上">↖</div><div class="ds-constraint-grid__cell" aria-label="上">↑</div><div class="ds-constraint-grid__cell" aria-label="右上">↗</div><div class="ds-constraint-grid__cell" aria-label="左">←</div><div class="ds-constraint-grid__cell" aria-label="居中">·</div><div class="ds-constraint-grid__cell" aria-label="右">→</div><div class="ds-constraint-grid__cell" aria-label="左下">↙</div><div class="ds-constraint-grid__cell" aria-label="下">↓</div><div class="ds-constraint-grid__cell" aria-label="右下">↘</div></div>
```

## React 示例

```tsx
<FigmaConstraintPinGrid horizontal="left" vertical="top" onChange={setConstraint} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 两侧同时选中时提示拉伸
- [ ] 未设置约束时说明默认值
- [ ] 说明文字与图标状态同步
- [ ] 键盘可切换约束
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
