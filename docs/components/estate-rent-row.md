# 租金缴纳行

[返回组件目录](../README.md) · 房产 / 租赁 · v3 新增

## 目的与边界

展示每月租金缴纳记录与状态。

## 结构

- 月份 (ds-rent-row__month)
- 金额
- 租期 (ds-rent-row__period)
- 缴纳状态 (ds-rent-row__state)
- 凭证入口

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

行可聚焦查看凭证；逾期状态有文字不只颜色。

## 使用细则

- 已缴绿色、待缴黄色、逾期红色。
- 金额右对齐等宽。
- 支持按年份筛选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-rent-row is-paid" tabindex="0" role="button" aria-label="2026 年 10 月租金，5200 元，租期 10-01 至 10-31，已缴纳，09-28 支付"><span class="ds-rent-row__month">2026-10</span><span class="ds-rent-row__period">10-01 ~ 10-31</span><strong class="ds-rent-row__amount">¥5,200</strong><span class="ds-rent-row__state is-paid">已缴纳 · 09-28</span><button type="button">凭证</button></div>
```

## React 示例

```tsx
<RentPaymentRow month="2026-10" amount={5200} period="10-01 ~ 10-31" state="paid" paidAt="09-28" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态颜色加文字
- [ ] 金额右对齐等宽
- [ ] 按年份筛选
- [ ] 行可聚焦看凭证
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
