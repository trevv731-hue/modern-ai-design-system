# 磁带机磁头清洁维护周期监视条

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

专业磁带录音机磁头磨损与清洁维护周期条（Tape Head Cleaning Maintenance Cycle Meter）；基于走带累计播放时间（小时）进度条、色彩由绿至红三段渐变预警、上次清洁日期与一键重置周期。

## 结构

- 嵌入式微质感基板 (.ds-cleaning-cycle-meter)
- 周期百分比指示头部 (.ds-cleaning-cycle-meter__header)
- 三色连续渐变进度槽 (.ds-cleaning-cycle-meter__track, .ds-cleaning-cycle-meter__bar)
- 底部日期与工时信息 (.ds-cleaning-cycle-meter__footer)

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

Tab 聚焦“重置周期”按键；Enter 确认重置清洁计时器。

## 使用细则

- 具备 role="region" 与 aria-label 完整描述当前磁头清洁周期与播放小时数。
- 进度条颜色三段过渡，警示维护临界值。
- 适合模拟音频设备工作站、硬件维护控制台、复古音乐播放器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cleaning-cycle-meter" role="region" aria-label="磁头清洁维护周期：已播放 38 小时，推荐周期 50 小时"><div class="ds-cleaning-cycle-meter__header"><span>磁头清洁周期</span><span style="font-family:var(--ds-type-mono)">76%</span></div><div class="ds-cleaning-cycle-meter__track" aria-hidden="true"><div class="ds-cleaning-cycle-meter__bar" style="width:76%"></div></div><div class="ds-cleaning-cycle-meter__footer"><span>上次清洁: 2026-09-28</span><span>38/50h</span></div></div>
```

## React 示例

```tsx
<AnalogHeadCleaningCycleMeter hoursElapsed={38} thresholdHours={50} lastCleanedDate="2026-09-28" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 76% 彩色进度条分明
- [ ] 上次清洁日期清晰
- [ ] 工时比例等宽对齐
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
