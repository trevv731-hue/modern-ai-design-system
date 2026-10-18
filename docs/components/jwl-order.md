# 珠宝订单行

[返回组件目录](../README.md) · 珠宝首饰 · v3 新增

## 目的与边界

展示一笔珠宝订单的商品金额与履约状态。

## 结构

- 订单号 (ds-jwl-order__no)
- 商品 (ds-jwl-order__item)
- 金额 (ds-jwl-order__amount)
- 状态 (ds-jwl-order__state)

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

行可聚焦查看订单详情；金额红色展示。

## 使用细则

- 状态五态：待付款、定制中、质检中、配送中、已完成。
- 金额等宽红色。
- 订单号等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-jwl-order is-making" tabindex="0" role="button" aria-label="珠宝订单，订单号 JO-2026-1120，商品 18K 金四爪钻戒，金额 12800 元，定制中"><strong class="ds-jwl-order__no">JO-2026-1120</strong><span class="ds-jwl-order__item">18K 金四爪钻戒</span><strong class="ds-jwl-order__amount">¥12,800</strong><span class="ds-jwl-order__state is-making">定制中</span></div>
```

## React 示例

```tsx
<JewelryOrderRow no="JO-2026-1120" item="18K 金四爪钻戒" amount={12800} state="making" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 五态状态
- [ ] 金额红色
- [ ] 订单号等宽
- [ ] 订单详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
