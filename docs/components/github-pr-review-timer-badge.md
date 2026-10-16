# GitHub PR 评审等待时间与 SLA 徽标

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub Pull Request 评审等待时间 SLA 告警与催办提示徽标（Pull Request Review Wait Time & SLA Countdown Badge）；秒表微图标、等宽等待时长读数（如 "3h 42m"）、SLA 风险等级胶囊（Normal / Warning / Breached）及一键催办按键。

## 结构

- 圆角微拟物计时徽标 (.ds-pr-review-timer)
- 黄色秒表图标与等待文本 (.ds-pr-review-timer__icon)
- 等宽时长读数 (.ds-pr-review-timer__val)
- SLA 状态等级彩色微标 (.ds-pr-review-timer__sla)
- 行内催办提醒按键 (.ds-pr-review-timer__ping-btn)

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

Tab 聚焦徽标及“提醒”按键；Enter 触发向审查者发送 Ping 提醒通知。

## 使用细则

- 具备 role="status" 与 aria-label 完整播报评审等待时间与 SLA 风险状态。
- Normal / Warning / Breached 三种状态色阶严格符合无障碍对比度。
- 适合代码审查队列、工程生产力监控、Git 协同客户端。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pr-review-timer" role="status" aria-label="PR 评审等待时间：3h 42m，SLA 状态：normal"><span class="ds-pr-review-timer__icon" aria-hidden="true">⏱️</span><span>等待评审</span><span class="ds-pr-review-timer__val">3h 42m</span><span class="ds-pr-review-timer__sla is-normal">normal</span><button type="button" class="ds-pr-review-timer__ping-btn" aria-label="向审查者发送提醒">提醒</button></div>
```

## React 示例

```tsx
<GitHubPRReviewTimerBadge waitDuration="3h 42m" slaStatus="normal" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] ⏱️ 3h 42m 等宽清晰
- [ ] normal 绿色微胶囊标签
- [ ] 行内提醒交互键整洁
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
