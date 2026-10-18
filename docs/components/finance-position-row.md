# 持仓行

[返回组件目录](../README.md) · 金融 / 交易 · v3 新增

## 目的与边界

展示单个持仓的数量、现价、成本与浮动盈亏，盈亏比可视化。

## 结构

- 名称与代码 (ds-position-row__id)
- 现价 (ds-position-row__num)
- 盈亏 (ds-position-row__pnl)
- 盈亏比条 (ds-position-row__bar)

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

行可聚焦查看详情；盈亏数字提供完整可读文本。

## 使用细则

- 盈亏红涨绿跌并附正负号。
- 盈亏比条以零轴为基准双向绘制。
- 空持仓展示引导买入的空状态。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-position-row" tabindex="0" role="button" aria-label="宁德时代 300750 500 股 浮动盈亏 +11600.00 元 涨幅 11.86%"><div class="ds-position-row__id"><strong>宁德时代</strong><span>300750 · 500 股</span></div><div class="ds-position-row__num"><strong>¥218.60</strong><span>成本 ¥195.40</span></div><div class="ds-position-row__pnl is-up"><strong>+¥11,600.00</strong><span>+11.86%</span></div><div class="ds-position-row__bar" aria-hidden="true"><i class="is-up" style="width:59%"></i></div></div>
```

## React 示例

```tsx
<PositionHoldingsRow name="宁德时代" code="300750" qty={500} price={218.6} cost={195.4} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 盈亏附正负号
- [ ] 盈亏比条以零轴为基准
- [ ] 空状态引导买入
- [ ] 盈亏数字可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
