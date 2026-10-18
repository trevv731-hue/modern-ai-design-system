# 成交回报表

[返回组件目录](../README.md) · 金融 / 交易 · v3 新增

## 目的与边界

实时展示委托成交回报，支持状态标记与筛选。

## 结构

- 表头 (ds-blotter)
- 方向标记 (ds-blotter__side)
- 价格与数量
- 状态 (ds-blotter__state)
- 时间

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

表头可排序；新回报通过 aria-live 播报。

## 使用细则

- 成交与撤单用颜色与图标区分。
- 新回报进入有动效但不打断读数。
- 支持按方向与状态筛选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<table class="ds-blotter"><caption class="ds-blotter__cap">今日成交回报 <span aria-live="polite">3 笔</span></caption><thead><tr><th scope="col">时间</th><th scope="col">方向</th><th scope="col">代码</th><th scope="col">价格</th><th scope="col">数量</th><th scope="col">状态</th></tr></thead><tbody><tr><td>14:32:06</td><td><span class="ds-blotter__side is-buy">买入</span></td><td>600519</td><td class="is-up">1680.50</td><td>100</td><td><span class="ds-blotter__state is-done">已成交</span></td></tr><tr><td>14:15:41</td><td><span class="ds-blotter__side is-sell">卖出</span></td><td>300750</td><td class="is-down">218.60</td><td>200</td><td><span class="ds-blotter__state is-done">已成交</span></td></tr><tr><td>13:58:12</td><td><span class="ds-blotter__side is-buy">买入</span></td><td>688981</td><td>52.30</td><td>500</td><td><span class="ds-blotter__state is-cancel">已撤单</span></td></tr></tbody></table>
```

## React 示例

```tsx
<TradeBlotterTable rows={[{ time: "14:32:06", side: "buy", code: "600519", price: 1680.5, qty: 100, state: "done" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 成交撤单颜色图标区分
- [ ] 新回报 aria-live 播报
- [ ] 支持方向状态筛选
- [ ] 表头可排序
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
