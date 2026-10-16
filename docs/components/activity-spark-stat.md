# 多维活动趋势微指标卡

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Stripe 与 Datadog 监控大盘风格的指标卡；集成核心数值、正负增幅徽标与轻量内嵌矢量走势折线/面积图。

## 结构

- 指标标题与说明
- 26px 大字号等宽数字
- 正负增长百分比徽章 (如 +14.2%)
- SVG 矢量折线与半透明填充阴影区

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

Tab 聚焦指标卡；Enter 打开该指标的历史明细报表；悬停上浮 translateY(-2px)。

## 使用细则

- SVG 折线采用 round 笔触与填充区域半透明渐变，曲线平滑无锯齿。
- 数字采用 tabular-nums 等宽字体，大额数据刷新时布局坚固稳定。
- 正向增长采用 success 绿色徽标，负向衰减自动切换 danger 红色。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spark-card" role="region" aria-label="实时吞吐量"><div class="ds-spark-card__header"><span>全球并发会话流</span><span class="ds-badge ds-badge--success">+14.2%</span></div><div class="ds-spark-card__body"><span class="ds-spark-card__num">28,490</span><svg class="ds-spark-card__svg" viewBox="0 0 96 32" aria-hidden="true"><polygon class="ds-spark-card__area" points="0,32 0,26 16,20 32,22 48,15 64,18 80,8 96,4 96,32"></polygon><polyline class="ds-spark-card__line" points="0,26 16,20 32,22 48,15 64,18 80,8 96,4"></polyline></svg></div></div>
```

## React 示例

```tsx
<SparkStatCard title="并发会话流" value="28,490" delta="+14.2%" trendPoints={[8, 14, 12, 18, 16, 24, 28]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] SVG 曲线平滑饱满无裁切溢出
- [ ] 增幅徽标色彩与背景对比符合 4.5:1
- [ ] 卡片悬停上浮动效精致利落
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
