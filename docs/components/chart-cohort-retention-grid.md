# 同期群留存网格

[返回组件目录](../README.md) · 数据 · v3 新增

## 目的与边界

按进入时间分组观察后续留存，判断产品改动是否真的改善了留存。

## 结构

- 网格容器 (ds-cohort)
- 行：进入周期
- 列：第 N 期
- 色阶与图例

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

静态图表；每格提供文本说明与数值。

## 使用细则

- 每格写明留存百分比与样本量。
- 样本量过小的格子标注不可靠。
- 改动时间点在图表中标注。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cohort" role="img" aria-label="同期群留存网格"><div class="ds-cohort__row"><span>10/06</span><span class="ds-cohort__cell" data-value="100">100%</span><span class="ds-cohort__cell" data-value="62">62%</span><span class="ds-cohort__cell" data-value="48">48%</span></div></div>
```

## React 示例

```tsx
<CohortRetentionGrid cohorts={[{ label: "10/06", values: [100, 62, 48] }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 每格有百分比与样本量
- [ ] 小样本格子标注不可靠
- [ ] 改动时间点有标注
- [ ] 文本等效可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
