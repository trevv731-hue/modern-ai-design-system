# 资金流向瀑布

[返回组件目录](../README.md) · 金融 / 交易 · v3 新增

## 目的与边界

堆叠展示主力资金流入流出，按时间或标的聚合。

## 结构

- 图例 (ds-fund-flow__legend)
- 瀑布柱 (ds-fund-flow__bar)
- 零线
- 日期轴 (ds-fund-flow__axis)

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

容器可聚焦；每根柱提供文字摘要。

## 使用细则

- 流入向上、流出向下，红入绿出符合国内习惯。
- 悬停显示当日明细。
- 支持按日 / 周聚合切换。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-fund-flow" role="img" aria-label="近 5 日主力资金：三日流入合计 3.2 亿，两日流出合计 1.1 亿"><div class="ds-fund-flow__legend"><span class="is-in">主力流入</span><span class="is-out">主力流出</span></div><div class="ds-fund-flow__chart" aria-hidden="true"><span class="ds-fund-flow__bar is-in" style="height:56%"></span><span class="ds-fund-flow__bar is-in" style="height:38%"></span><span class="ds-fund-flow__bar is-out" style="height:30%"></span><span class="ds-fund-flow__bar is-in" style="height:44%"></span><span class="ds-fund-flow__bar is-out" style="height:22%"></span></div><div class="ds-fund-flow__axis" aria-hidden="true"><span>10-12</span><span>10-13</span><span>10-14</span><span>10-15</span><span>10-16</span></div></div>
```

## React 示例

```tsx
<FundFlowWaterfall days={[{ date: "10-12", net: 1.6 }, { date: "10-13", net: 0.9 }, { date: "10-14", net: -0.8 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 流入向上流出向下
- [ ] 红入绿出符合习惯
- [ ] 悬停显示明细
- [ ] 聚合周期可切换
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
