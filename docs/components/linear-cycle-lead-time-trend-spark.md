# Linear 敏捷开发 Lead Time 前置用时趋势走势微图

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Linear 与 Jira 敏捷开发团队交付效率 Lead Time 前置用时走势直方图（Lead Time Trend & Percentile Sparkline）；统计工单从创建到最终部署全链路周转天数（平均 3.6d，P90 6.2d）、环比优化百分比（↓ 18%）及周期柱状对比微图。

## 结构

- 紧凑前置时间面板 (.ds-lead-time-spark)
- 平均用时与环比优化绿色徽标 (.ds-lead-time-spark__header, .ds-lead-time-spark__delta)
- 多周期柱状直方图视窗 (.ds-lead-time-spark__chart, .ds-lead-time-spark__bar)
- 底部均值与 P90 分位数等宽读数 (.ds-lead-time-spark__stats)

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

Tab 聚焦前置用时图表；屏幕阅读器自动播报当前平均周转天数、P90 分位点与环比优化百分比。

## 使用细则

- 具备 role="region" 与完整 aria-label 播报全链路前置时间与 P90 分位。
- 环比优化率带绿色软背景，正向收益提示清晰。
- 适合工程交付度量体系、研发效能看板、敏捷复盘报表。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-lead-time-spark" role="region" aria-label="工单前置时间趋势：平均 3.6 天，P90 6.2 天，环比优化 18%"><div class="ds-lead-time-spark__header"><span>Lead Time 交付周期</span><span class="ds-lead-time-spark__delta">↓ 18%</span></div><div class="ds-lead-time-spark__chart" aria-hidden="true"><div class="ds-lead-time-spark__bar" style="height:84%"></div><div class="ds-lead-time-spark__bar" style="height:100%"></div><div class="ds-lead-time-spark__bar" style="height:76%"></div><div class="ds-lead-time-spark__bar" style="height:72%"></div><div class="ds-lead-time-spark__bar" style="height:58%"></div><div class="ds-lead-time-spark__bar" style="height:64%"></div></div><div class="ds-lead-time-spark__stats"><span>平均: <strong>3.6d</strong></span><span>P90: <strong>6.2d</strong></span></div></div>
```

## React 示例

```tsx
<LinearCycleLeadTimeTrendSpark avgDays={3.6} p90Days={6.2} deltaPct={-18} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 平均 3.6d 加粗突出
- [ ] P90 6.2d 等宽对比
- [ ] 环比 ↓ 18% 绿色微标
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
