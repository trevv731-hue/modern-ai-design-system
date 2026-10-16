# Porsche & Tesla 数字座舱双联双针仪表盘

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

保时捷 Taycan 与特斯拉 Model S 风格的数字座舱双联圆形仪表集群；左侧呈现时速（KM/H）、右侧呈现电机动力输出（KW），中置垂直物理分割线。

## 结构

- 黑化运动座舱外壳 (.ds-gauge-cluster)
- 双独立虚线圆表盘 (.ds-gauge-cluster__dial)
- 中央等宽大数字读数 (.ds-gauge-cluster__num)
- 小字号大写物理单位 (.ds-gauge-cluster__unit)
- 中置纤细垂直分割线 (.ds-gauge-cluster__sep)

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

作为语义化 region 载入，通过 aria-label 报读当前车速与动力数据。

## 使用细则

- 深黑背景（#0b0f19）配合高亮浅白与青蓝指示，重现豪华跑车全液晶仪表台的尊贵质感。
- 数据采用 tabular-nums 等宽数字，杜绝数值变动引起的抖动跳字。
- 适合车载智能座舱大屏、硬件遥测监控、实时计算负载监视器及跑分评测看板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-gauge-cluster" role="region" aria-label="数字座舱双联仪表盘：车速 128 KM/H，功率 84 KW"><div class="ds-gauge-cluster__dial"><div class="ds-gauge-cluster__readout"><span class="ds-gauge-cluster__num">128</span><span class="ds-gauge-cluster__unit">KM/H</span></div></div><div class="ds-gauge-cluster__sep" aria-hidden="true"></div><div class="ds-gauge-cluster__dial"><div class="ds-gauge-cluster__readout"><span class="ds-gauge-cluster__num" style="color:var(--ds-accent)">84</span><span class="ds-gauge-cluster__unit">KW</span></div></div></div>
```

## React 示例

```tsx
<DualSpeedometerGaugeCluster speed={128} power={84} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 双表盘严格对称水平排列
- [ ] 中线垂直居中无偏斜
- [ ] 等宽数字排版稳定无抖动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
