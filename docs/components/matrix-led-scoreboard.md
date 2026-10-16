# 点阵式复古体育馆与航班 LED 记分牌

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

复古体育馆比分牌与国际机场航显点阵屏（Dot-Matrix LED Display）；黑化外壳、双队/双向状态、等宽超大琥珀色点阵发光大数字及实时 LIVE 状态指示器。

## 结构

- 黑化点阵屏机壳 (.ds-led-scoreboard)
- 顶栏周期与现场指示行 (.ds-led-scoreboard__head)
- 双队比分三列栅格网格 (.ds-led-scoreboard__teams)
- 超大琥珀色点阵荧光数字 (.ds-led-scoreboard__score)
- 中置半透明发光冒号 (.ds-led-scoreboard__colon)

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

作为数据看板呈现，支持 Tab 快速遍历或通过屏幕阅读器直接读取赛事状态。

## 使用细则

- 外层声明 role="region" 与 aria-label，比分更新时利用等宽数字杜绝排版重排抖动。
- 对比度高达 10:1 以上，发光文字阴影柔和自然。
- 适合实时体育赛事比分直播、金融交易所撮合数字牌、工业生产节拍看板及复古游戏大厅。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-led-scoreboard" role="region" aria-label="实时比分记分牌：主队 98 对 客队 95"><div class="ds-led-scoreboard__head"><span>PERIOD Q4</span><span style="color:#00ff66">● LIVE 02:14</span></div><div class="ds-led-scoreboard__teams"><div class="ds-led-scoreboard__side"><span class="ds-led-scoreboard__name">HOME</span><span class="ds-led-scoreboard__score">98</span></div><span class="ds-led-scoreboard__colon">:</span><div class="ds-led-scoreboard__side"><span class="ds-led-scoreboard__name">AWAY</span><span class="ds-led-scoreboard__score">95</span></div></div></div>
```

## React 示例

```tsx
<RetroLedScoreboardDisplay homeTeam="HOME" homeScore={98} awayTeam="AWAY" awayScore={95} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 点阵数字荧光柔和不糊
- [ ] 主客队比分对称平衡
- [ ] 冒号间距舒适无偏斜
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
