# 委托下单面板

[返回组件目录](../README.md) · 金融 / 交易 · v3 新增

## 目的与边界

结构化提交买卖委托：方向、价格、数量、金额预览与风险提示。

## 结构

- 方向切换 (ds-order-ticket__side)
- 价格输入
- 数量输入
- 金额预览 (ds-order-ticket__sum)
- 提交按钮

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

Tab 顺序与视觉一致；方向用 radio 语义；提交前展示确认摘要。

## 使用细则

- 买卖方向用颜色与文案双重区分。
- 超出涨跌停价格时禁用提交并说明原因。
- 展示预估手续费与可用资金校验。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<form class="ds-order-ticket"><div class="ds-order-ticket__head"><strong>买入 · 贵州茅台 (600519)</strong><span class="ds-order-ticket__quote">现价 1680.50 · 可用资金 ¥86,200</span></div><div class="ds-order-ticket__side" role="radiogroup" aria-label="买卖方向"><button type="button" role="radio" aria-checked="true" class="is-buy">买入</button><button type="button" role="radio" aria-checked="false" class="is-sell">卖出</button></div><div class="ds-order-ticket__grid"><label>委托价格<input value="1680.50" inputmode="decimal"></label><label>委托数量<input value="100" inputmode="numeric"></label></div><p class="ds-order-ticket__sum">预估金额 ¥168,050.00 · 手续费约 ¥50.42</p><button type="submit" class="is-buy">下单买入</button></form>
```

## React 示例

```tsx
<OrderTicketPanel name="贵州茅台" code="600519" lastPrice={1680.5} available={86200} onSubmit={submit} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 方向颜色与文案双区分
- [ ] 涨跌停外禁用提交
- [ ] 展示手续费与资金校验
- [ ] radio 语义方向切换
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
