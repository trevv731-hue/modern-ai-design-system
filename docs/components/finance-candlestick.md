# K 线图

[返回组件目录](../README.md) · 金融 / 交易 · v3 新增

## 目的与边界

以蜡烛图展示 OHLC 价格走势，可叠加均线与成交量。

## 结构

- 画布 (ds-candles__grid)
- 蜡烛体与影线 (ds-candles__candle)
- 周期图例 (ds-candles__legend)

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

容器可聚焦；左右方向键移动光标读数；Esc 取消。

## 使用细则

- 涨红跌绿符合 A 股习惯。
- 提供文字读数，不只依赖图形。
- 周期切换：日 K / 周 K / 月 K。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-candles" role="img" aria-label="日K线图：近 8 个交易日收盘 12.30 至 14.80，整体上涨"><div class="ds-candles__grid" aria-hidden="true"><span class="ds-candles__candle is-up" style="top:18%;height:26%"><i style="top:38%;bottom:22%"></i></span><span class="ds-candles__candle is-up" style="top:12%;height:30%"><i style="top:30%;bottom:18%"></i></span><span class="ds-candles__candle is-down" style="top:20%;height:24%"><i style="top:34%;bottom:26%"></i></span><span class="ds-candles__candle is-up" style="top:8%;height:34%"><i style="top:26%;bottom:14%"></i></span><span class="ds-candles__candle is-up" style="top:14%;height:28%"><i style="top:32%;bottom:20%"></i></span><span class="ds-candles__candle is-down" style="top:22%;height:22%"><i style="top:36%;bottom:30%"></i></span><span class="ds-candles__candle is-up" style="top:6%;height:36%"><i style="top:24%;bottom:12%"></i></span><span class="ds-candles__candle is-up" style="top:4%;height:40%"><i style="top:20%;bottom:10%"></i></span></div><div class="ds-candles__legend"><span class="is-up">涨</span><span class="is-down">跌</span><span>日K · MA5 / MA10 / 成交量</span></div></div>
```

## React 示例

```tsx
<CandlestickChart period="日K" candles={[{ open: 12.3, high: 13.1, low: 12.1, close: 12.9 }, { open: 12.9, high: 13.6, low: 12.8, close: 13.4 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 涨红跌绿符合习惯
- [ ] 提供文字读数
- [ ] 方向键移动光标
- [ ] 周期可切换
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
