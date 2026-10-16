# Linear 研发效能工单交付周转周期分布直方微图

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Linear 与 Jira 敏捷研发交付效能与周转用时区间直方图（Issue Cycle Time Distribution Histogram）；统计各交付耗时区间（<1d, 1-3d, 3-7d, >7d）工单数量条形微图、平均周期（2.4d）及 P80 分位数读数。

## 结构

- 紧凑直方图面板 (.ds-cycle-time-distribution)
- 均值时间统计头部 (.ds-cycle-time-distribution__header, .ds-cycle-time-distribution__avg)
- 多区间占比横向进度条行 (.ds-cycle-time-distribution__bars, .ds-cycle-time-distribution__row)
- 底部 P80 分位与工单总量 (.ds-cycle-time-distribution__footer)

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

Tab 聚焦周转周期图表；屏幕阅读器按顺序播报各时间区间的工单数与百分比。

## 使用细则

- 具备 role="region" 与 aria-label 完整播报平均用时与 P80 交付分位数。
- 各行具备独立宽度进度条与等宽数字对齐。
- 适合工程效能仪表板、敏捷度量报告、团队交付质量看板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cycle-time-distribution" role="region" aria-label="工单周转周期分布直方图：平均 2.4 天，P80 交付分位 4.1 天"><div class="ds-cycle-time-distribution__header"><span>Cycle Time 分布</span><span class="ds-cycle-time-distribution__avg">平均 2.4d</span></div><div class="ds-cycle-time-distribution__bars" aria-hidden="true"><div class="ds-cycle-time-distribution__row"><span class="ds-cycle-time-distribution__label">&lt;1d</span><div class="ds-cycle-time-distribution__track"><div class="ds-cycle-time-distribution__fill" style="width:36%"></div></div><span class="ds-cycle-time-distribution__count">18</span></div><div class="ds-cycle-time-distribution__row"><span class="ds-cycle-time-distribution__label">1-3d</span><div class="ds-cycle-time-distribution__track"><div class="ds-cycle-time-distribution__fill" style="width:44%"></div></div><span class="ds-cycle-time-distribution__count">22</span></div></div><div style="display:flex;justify-content:space-between;font-size:10px;color:var(--ds-muted);font-family:var(--ds-type-mono)"><span>P80: 4.1 天</span><span>共 50 个工单</span></div></div>
```

## React 示例

```tsx
<LinearCycleTimeDistributionSpark avgDays={2.4} p80Days={4.1} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 平均 2.4d 强调高亮
- [ ] 横向柱状图比例分明
- [ ] P80 等宽数据对比明确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
