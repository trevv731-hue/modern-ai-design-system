# 金价行情卡

[返回组件目录](../README.md) · 珠宝首饰 · v3 新增

## 目的与边界

展示一个品牌足金的今日售价与涨跌情况。

## 结构

- 品牌 (ds-jwl-gold__brand)
- 今日价 (ds-jwl-gold__price)
- 涨跌 (ds-jwl-gold__chg)
- 单位 (ds-jwl-gold__unit)

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

行情以 status 语义播报；涨红跌绿并附文字。

## 使用细则

- 价格按克计价。
- 涨跌红色为涨、绿色为跌。
- 单位元每克。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-jwl-gold" role="status" aria-label="金价行情，周大福 足金 999，今日价 618 元每克，上涨 4 元"><div class="ds-jwl-gold__head"><strong class="ds-jwl-gold__brand">周大福 足金 999</strong></div><div class="ds-jwl-gold__row"><strong class="ds-jwl-gold__price">¥618</strong><span class="ds-jwl-gold__chg is-up">↑ 4</span><span class="ds-jwl-gold__unit">元/克</span></div></article>
```

## React 示例

```tsx
<GoldPriceCard brand="周大福 足金 999" price={618} chg={4} dir="up" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 涨红跌绿
- [ ] status 语义
- [ ] 克价展示
- [ ] 涨跌文字
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
