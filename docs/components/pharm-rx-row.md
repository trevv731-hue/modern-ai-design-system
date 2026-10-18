# 处方订单行

[返回组件目录](../README.md) · 医药 / 药店 · v3 新增

## 目的与边界

展示一张处方药的订单状态、科室与取药方式。

## 结构

- 处方编号 (ds-pharm-rx__no)
- 开方科室 (ds-pharm-rx__dept)
- 处方药标识 (ds-pharm-rx__tag)
- 订单状态 (ds-pharm-rx__state)
- 金额 (ds-pharm-rx__amount)

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

行可聚焦查看处方详情；待支付状态以 status 语义播报。

## 使用细则

- 处方药以红色文字标识，不只颜色。
- 状态四态：待支付、已支付、已发药、已过期。
- 金额红色等宽强调。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pharm-rx is-paid" tabindex="0" role="button" aria-label="处方订单，编号 RX20260612-0087，呼吸内科，处方药，已支付，待取药，金额 86.50 元"><strong class="ds-pharm-rx__no">RX20260612-0087</strong><span class="ds-pharm-rx__dept">呼吸内科</span><span class="ds-pharm-rx__tag">处方药</span><span class="ds-pharm-rx__state is-paid">已支付 · 待取药</span><span class="ds-pharm-rx__amount">¥86.50</span></div>
```

## React 示例

```tsx
<PrescriptionOrderRow no="RX20260612-0087" dept="呼吸内科" state="paid" amount={86.5} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 处方药标识
- [ ] 四态状态
- [ ] 金额红色
- [ ] 处方详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
