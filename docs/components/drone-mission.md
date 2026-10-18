# 飞行任务行

[返回组件目录](../README.md) · 无人机服务 · v3 新增

## 目的与边界

展示一次飞行任务的空域审批与执行状态。

## 结构

- 任务号 (ds-drone-mission__no)
- 空域 (ds-drone-mission__zone)
- 预计时长 (ds-drone-mission__dur)
- 状态 (ds-drone-mission__state)

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

行可聚焦查看任务详情；取消任务以 status 语义播报。

## 使用细则

- 状态五态：待批复、已批复、执行中、已完成、已取消。
- 任务号等宽展示。
- 预计时长分钟。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-drone-mission is-running" tabindex="0" role="button" aria-label="飞行任务，任务号 FM-2026-0456，空域 城东作业区，预计 35 分钟，执行中"><strong class="ds-drone-mission__no">FM-2026-0456</strong><span class="ds-drone-mission__zone">城东作业区</span><span class="ds-drone-mission__dur">35 min</span><span class="ds-drone-mission__state is-running">执行中</span></div>
```

## React 示例

```tsx
<FlightMissionRow no="FM-2026-0456" zone="城东作业区" dur="35 min" state="running" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 五态状态
- [ ] 空域展示
- [ ] 任务号等宽
- [ ] 任务详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
