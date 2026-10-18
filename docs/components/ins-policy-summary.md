# 保单摘要卡

[返回组件目录](../README.md) · 保险 / 理赔 · v3 新增

## 目的与边界

展示一份保单的投保人、险种、保额与有效状态。

## 结构

- 投保人 (ds-policy-summary__holder)
- 险种 (ds-policy-summary__product)
- 保额 (ds-policy-summary__amount)
- 状态 (ds-policy-summary__state)
- 保单号 (ds-policy-summary__no)

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

卡片可聚焦查看条款全文；宽限期状态以 status 语义播报。

## 使用细则

- 有效绿色、宽限期黄色、中止红色。
- 保额千分位展示。
- 保单号使用等宽字体。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-policy-summary is-grace" tabindex="0" role="button" aria-label="保单 P2024-8891，投保人 张伟，平安福重疾险，保额 500,000 元，状态 宽限期"><div class="ds-policy-summary__head"><strong class="ds-policy-summary__holder">张伟</strong><span class="ds-policy-summary__state is-grace">宽限期</span></div><p class="ds-policy-summary__product">平安福重疾险</p><strong class="ds-policy-summary__amount">¥500,000</strong><span class="ds-policy-summary__no">P2024-8891</span></article>
```

## React 示例

```tsx
<PolicySummaryCard holder="张伟" product="平安福重疾险" amount={500000} no="P2024-8891" state="grace" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态配色
- [ ] 保额千分位
- [ ] 保单号等宽
- [ ] 宽限期播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
