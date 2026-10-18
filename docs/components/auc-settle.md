# 拍卖结算行

[返回组件目录](../README.md) · 拍卖 / 竞拍平台 · v3 新增

## 目的与边界

展示一笔成交的佣金、运费与应付总额。

## 结构

- 项目名 (ds-auc-settle__label)
- 金额 (ds-auc-settle__value)
- 说明 (ds-auc-settle__note)
- 合计行 (is-total)

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

行可聚焦查看费用明细；待支付状态以 status 语义播报。

## 使用细则

- 合计行加粗突出。
- 佣金按比例文字说明。
- 金额右对齐等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-auc-settle" role="group" aria-label="拍卖结算，成交价 92,000 元，佣金 15% 计 13,800 元，运费 800 元，应付总额 106,600 元，待支付"><div class="ds-auc-settle__row"><span class="ds-auc-settle__label">成交价</span><span class="ds-auc-settle__value">¥92,000</span></div><div class="ds-auc-settle__row"><span class="ds-auc-settle__label">佣金<span class="ds-auc-settle__note">15%</span></span><span class="ds-auc-settle__value">¥13,800</span></div><div class="ds-auc-settle__row"><span class="ds-auc-settle__label">运费<span class="ds-auc-settle__note">保价运输</span></span><span class="ds-auc-settle__value">¥800</span></div><div class="ds-auc-settle__row is-total"><span class="ds-auc-settle__label">应付总额</span><span class="ds-auc-settle__value">¥106,600</span></div></div>
```

## React 示例

```tsx
<AuctionSettlementRow price={92000} commission={13800} shipping={800} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 合计加粗
- [ ] 佣金说明
- [ ] 右对齐等宽
- [ ] 费用明细
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
