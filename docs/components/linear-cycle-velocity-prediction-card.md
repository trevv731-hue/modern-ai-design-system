# Linear 敏捷开发团队迭代开发速率预测卡

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Linear 敏捷研发项目管理中根据历史完成速率预测当前迭代（Cycle）吞吐量与预期交付日期的智能分析卡（Cycle Velocity & Scope Prediction Card）；展示预测工单点数（42 pts）、置信区间（38 - 46 pts）、当前已完成工时（28 pts）与动态燃尽进度条。

## 结构

- 紧凑圆角预测面板 (.ds-cycle-velocity-card)
- 迭代名称与置信度绿标 (.ds-cycle-velocity-card__header, .ds-cycle-velocity-card__confidence)
- 预测点数大字号等宽数字与范围 (.ds-cycle-velocity-card__stat-row, .ds-cycle-velocity-card__predicted)
- 细进度条与已完成底栏 (.ds-cycle-velocity-card__track, .ds-cycle-velocity-card__fill, .ds-cycle-velocity-card__footer)

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

Tab 聚焦迭代预测卡；屏幕阅读器自动播报迭代名称、预测点数、置信度等级与当前已完成比例。

## 使用细则

- 具备 role="region" 与 aria-label 完整描述当前迭代预测指标。
- 80% Confidence 绿标高亮醒目，点数与进度条同步反映敏捷节奏。
- 适合敏捷项目管理系统、研发工单效能大屏、冲刺计划评审。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cycle-velocity-card" role="region" aria-label="Cycle 42 迭代预测：预测 42 点，已完成 28 点 (67%)，置信区间 38 - 46 pts"><div class="ds-cycle-velocity-card__header"><span>Cycle 42 速率预测</span><span class="ds-cycle-velocity-card__confidence">80% Confidence</span></div><div class="ds-cycle-velocity-card__stat-row"><span class="ds-cycle-velocity-card__predicted">42 pts</span><span class="ds-cycle-velocity-card__range">范围: 38 - 46 pts</span></div><div class="ds-cycle-velocity-card__track" aria-hidden="true"><div class="ds-cycle-velocity-card__fill" style="width:67%"></div></div><div class="ds-cycle-velocity-card__footer"><span>已完成: 28 pts</span><span>进度: 67%</span></div></div>
```

## React 示例

```tsx
<LinearCycleVelocityPredictionCard cycleName="Cycle 42" predictedPoints={42} confidenceRange="38 - 46 pts" completedPoints={28} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 42 pts 醒目预测
- [ ] 80% Confidence 科学统计
- [ ] 67% 细条进度清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
