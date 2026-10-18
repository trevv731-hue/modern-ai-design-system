# 行情报价行

[返回组件目录](../README.md) · 金融 / 交易 · v3 新增

## 目的与边界

以紧凑行展示证券代码、名称、现价、涨跌额与涨跌幅，可选迷你走势。

## 结构

- 代码与名称 (ds-quote-row__id)
- 迷你走势 (ds-quote-row__spark)
- 现价 (ds-quote-row__price)

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

行可聚焦；回车查看详情；列表内方向键移动。

## 使用细则

- 涨用红色、跌用绿色，色觉之外辅以正负号。
- 价格跳动时短暂高亮，不持续闪烁。
- 迷你走势为装饰图形，配文字摘要。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-quote-row" tabindex="0" role="button" aria-label="贵州茅台 600519 现价 1680.50 涨 1.23%"><div class="ds-quote-row__id"><strong>贵州茅台</strong><span class="ds-quote-row__code">600519 · 沪</span></div><svg class="ds-quote-row__spark" viewBox="0 0 64 20" aria-hidden="true"><polyline points="0,14 8,12 16,13 24,9 32,10 40,6 48,7 56,3 64,4"/></svg><div class="ds-quote-row__price is-up"><strong>1680.50</strong><span>+20.30 (+1.23%)</span></div></div>
```

## React 示例

```tsx
<StockQuoteTickerRow name="贵州茅台" code="600519" market="沪" price={1680.5} change={20.3} changePct={1.23} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 涨红跌绿且附正负号
- [ ] 价格跳动不高频闪烁
- [ ] 迷你走势有文字摘要
- [ ] 行可聚焦可回车
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
