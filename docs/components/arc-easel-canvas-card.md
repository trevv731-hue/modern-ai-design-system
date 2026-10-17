# Arc Easel 收集画布卡

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

以卡片网格收集网页、截图与备注，支持拖排，用于临时整理而不是长期归档。

## 结构

- 画布外壳 (ds-easel)
- 卡片网格 (ds-easel__grid)
- 收集卡片 (ds-easel-card)
- 添加卡片按钮

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

卡片是链接语义；网格支持键盘拖动替代操作，提供“移动到”菜单。

## 使用细则

- 卡片必须显示来源地址或时间，避免失去出处。
- 拖拽之外提供菜单式移动，键盘用户也能整理。
- 空画布给出引导说明，不显示空白网格。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-easel" role="region" aria-label="Easel 收集画布"><div class="ds-easel__grid"><article class="ds-easel-card"><strong>延迟排查</strong><span>aether.local/reports</span><span class="ds-easel-card__time">今天 21:12</span></article><article class="ds-easel-card"><strong>节点清单</strong><span>aether.local/nodes</span><span class="ds-easel-card__time">今天 20:48</span></article></div><button type="button" class="ds-button ds-button--secondary">添加卡片</button></div>
```

## React 示例

```tsx
<ArcEaselCanvasCard cards={[{ title: "延迟排查", source: "aether.local/reports", time: "今天 21:12" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 卡片展示来源地址或时间
- [ ] 提供非拖拽的整理入口
- [ ] 空画布有引导说明
- [ ] 键盘可完成移动操作
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
