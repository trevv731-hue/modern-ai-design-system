# Linear 敏捷项目里程碑燃尽进度仪表盘

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Linear 研发项目里程碑推进管理中的燃尽进度分析仪表盘（Milestone Burndown Gauge）；展示项目里程碑目标完成率（68% Complete）、交付偏差指示（2d ahead / delayed）、范围变更蔓延量（+12% Creep）与预期交付日期（Nov 14）。

## 结构

- 圆角燃尽图卡片 (.ds-milestone-burndown-gauge)
- 里程碑名称与预期交付胶囊 (.ds-milestone-burndown-gauge__header, .ds-milestone-burndown-gauge__eta)
- 完成率大字号等宽百分比与交付偏差 (.ds-milestone-burndown-gauge__stats, .ds-milestone-burndown-gauge__progress, .ds-milestone-burndown-gauge__variance)
- 双段进度条（完成段与变更蔓延段） (.ds-milestone-burndown-gauge__track, .ds-milestone-burndown-gauge__fill, .ds-milestone-burndown-gauge__creep)
- 底栏范围总量与蔓延比例 (.ds-milestone-burndown-gauge__footer)

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

Tab 聚焦燃尽仪表盘；屏幕阅读器自动播报里程碑名称、完成率、范围变更与交付偏差。

## 使用细则

- 具备 role="region" 与 aria-label 完整描述里程碑进度指标。
- 双段进度条直观呈现范围蔓延（Scope Creep）对交付周期的影响。
- 适合敏捷项目路线图总览、里程碑健康度监控、冲刺发布评审。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-milestone-burndown-gauge" role="region" aria-label="里程碑燃尽图：v3.2 Foundation Engine，完成率 68%，范围变更 +12%，预计交付 Nov 14，偏差 2 天提前"><div class="ds-milestone-burndown-gauge__header"><span>v3.2 Foundation Engine</span><span class="ds-milestone-burndown-gauge__eta">ETA: Nov 14</span></div><div class="ds-milestone-burndown-gauge__stats"><span class="ds-milestone-burndown-gauge__progress">68% Complete</span><span class="ds-milestone-burndown-gauge__variance">2d ahead</span></div><div class="ds-milestone-burndown-gauge__track" aria-hidden="true"><div class="ds-milestone-burndown-gauge__fill" style="width:68%"></div><div class="ds-milestone-burndown-gauge__creep" style="width:12%"></div></div><div class="ds-milestone-burndown-gauge__footer"><span>Scope: 80% total</span><span>Creep: +12%</span></div></div>
```

## React 示例

```tsx
<LinearProjectMilestoneBurndownGauge milestone="v3.2 Foundation Engine" targetDate="Nov 14" completedPct={68} creepPct={12} varianceDays={-2} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 68% 完成率清晰直观
- [ ] 2d ahead 偏差动态反馈
- [ ] 双色进度呈现范围蔓延
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
