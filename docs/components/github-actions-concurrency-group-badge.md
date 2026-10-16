# GitHub Actions 并发控制组互斥与取消徽标

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub Actions CI/CD 流水线并发控制组（Concurrency Group & Cancel-in-Progress Badge）；用于标识工作流多提交触发时的分支排队互斥锁、排队中任务数量（Queue: 2）及自动取消策略。

## 结构

- 紧凑圆角并发徽标 (.ds-concurrency-group-badge)
- 挂锁图标 (.ds-concurrency-group-badge__lock)
- 等宽并发组名称截断标签 (.ds-concurrency-group-badge__group)
- 黄色排队计数胶囊 (.ds-concurrency-group-badge__queue)

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

Tab 聚焦并发控制组徽标；屏幕阅读器自动播报并发组名称与排队任务数量。

## 使用细则

- 具备 role="status" 与 aria-label 完整播报并发控制策略与排队状态。
- Queue: 2 暖黄预警醒目，避免多分支流水线资源耗尽。
- 适合 CI/CD 调度监控大屏、PR 检查工作流总览、自动化运维平台。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-concurrency-group-badge" role="status" aria-label="并发控制组：ci-preview-pr-104，排队中 2，自动取消旧作业"><span class="ds-concurrency-group-badge__lock" aria-hidden="true">🔒</span><span class="ds-concurrency-group-badge__group" title="ci-preview-pr-104">ci-preview-pr-104</span><span class="ds-concurrency-group-badge__queue">Queue: 2</span></div>
```

## React 示例

```tsx
<GitHubActionsConcurrencyGroupBadge groupName="ci-preview-pr-104" queueCount={2} cancelInProgress={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 挂锁图元直观互斥
- [ ] Queue: 2 避免资源挤占
- [ ] 等宽组名排版工整
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
