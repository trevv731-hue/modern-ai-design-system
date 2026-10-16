# 微型遥测指标多列走势网格

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Datadog 与 Grafana 风格的分布式多指标紧凑走势卡片网格；每列卡片集成指标标题、百分比涨跌、加粗主数值与底部 SVG 微型趋势折线。

## 结构

- 3列等宽网格容器 (.ds-spark-grid)
- 独立指标卡片 (.ds-spark-tile)
- 顶部标题与趋势徽章 (.ds-spark-tile__top)
- 等宽核心统计数字 (.ds-spark-tile__val)
- 平滑 SVG 走势折线 (.ds-spark-tile__chart)

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

作为数据展示区域，各指标卡片可通过 Tab 聚焦查看详情提示。

## 使用细则

- 折线采用矢量 stroke-width="2" 与 stroke-linecap="round"，在微型 24px 高度内清晰呈现瞬态波动。
- 数值与涨跌色彩使用语义变量，绿色上行与红色下行对比分明。
- 响应式自适应，桌面三列平铺，移动端可自动折行。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spark-grid" role="region" aria-label="微型指标遥测矩阵"><div class="ds-spark-tile"><div class="ds-spark-tile__top"><span>QPS 吞吐</span><span style="color:var(--ds-success)">↑ 12%</span></div><span class="ds-spark-tile__val">48.2k</span><svg class="ds-spark-tile__chart" viewBox="0 0 70 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="0,20 10,18 20,12 30,15 40,8 50,4 60,7 70,2"></polyline></svg></div><div class="ds-spark-tile"><div class="ds-spark-tile__top"><span>P99 延迟</span><span style="color:var(--ds-success)">↓ 4ms</span></div><span class="ds-spark-tile__val">12.4ms</span><svg class="ds-spark-tile__chart" viewBox="0 0 70 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="0,5 10,8 20,6 30,14 40,9 50,11 60,8 70,6"></polyline></svg></div><div class="ds-spark-tile"><div class="ds-spark-tile__top"><span>缓存命中</span><span style="color:var(--ds-success)">↑ 99%</span></div><span class="ds-spark-tile__val">99.4%</span><svg class="ds-spark-tile__chart" viewBox="0 0 70 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="0,18 10,16 20,15 30,10 40,8 50,6 60,4 70,2"></polyline></svg></div></div>
```

## React 示例

```tsx
<SparklineMetricGrid />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] SVG 走势折线在视口缩放时保持锐利
- [ ] 数值与单位对齐规范
- [ ] 深浅主题下折线对比清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
