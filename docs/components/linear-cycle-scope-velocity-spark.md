# Linear 迭代周期团队开发速率走势图

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Linear 与 Jira 敏捷迭代开发速率与团队燃尽速度微走势图（Team Cycle Velocity & Velocity Trend Spark）；已完成点数与目标、燃尽速度百分比折线微标、每日完成点数柱状微图及工作日跨度统计。

## 结构

- 紧凑数据走势外框 (.ds-cycle-velocity-spark)
- 加粗速率数值头部 (.ds-cycle-velocity-spark__header, .ds-cycle-velocity-spark__val)
- 每日速率微柱状图 (.ds-cycle-velocity-spark__bars, .ds-cycle-velocity-spark__bar)
- 底部燃尽进度与工作日信息 (.ds-cycle-velocity-spark__footer)

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

Tab 聚焦速率图；各柱状图单元悬浮展示当日工时点数提示。

## 使用细则

- 具备 role="region" 与 aria-label 完整播报迭代名称、已完成与总点数及燃尽百分比。
- 柱状图带悬浮缩放动效，当前工作日柱体高亮强调。
- 适合敏捷迭代看板、项目进度概览仪表板、团队生产力监控。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cycle-velocity-spark" role="region" aria-label="Cycle 28 团队开发速率：已完成 64/80 点 (80%)"><div class="ds-cycle-velocity-spark__header"><span>Cycle 28 速率</span><span class="ds-cycle-velocity-spark__val">64 / 80 pt</span></div><div class="ds-cycle-velocity-spark__bars" aria-hidden="true"><div class="ds-cycle-velocity-spark__bar" style="height:33%" title="Day 1: 6 pt"></div><div class="ds-cycle-velocity-spark__bar" style="height:66%" title="Day 2: 12 pt"></div><div class="ds-cycle-velocity-spark__bar" style="height:55%" title="Day 3: 10 pt"></div><div class="ds-cycle-velocity-spark__bar" style="height:77%" title="Day 4: 14 pt"></div><div class="ds-cycle-velocity-spark__bar" style="height:100%" title="Day 5: 18 pt"></div><div class="ds-cycle-velocity-spark__bar is-current" style="height:22%" title="Day 6: 4 pt"></div></div><div class="ds-cycle-velocity-spark__footer"><span>燃尽进度: 80%</span><span>6 个工作日</span></div></div>
```

## React 示例

```tsx
<LinearCycleScopeVelocitySpark cycleName="Cycle 28" completedPoints={64} totalPoints={80} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 64 / 80 pt 等宽醒目
- [ ] 6 根柱状图动态起伏
- [ ] 最后一天高亮强调
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
