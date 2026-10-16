# Linear 工单服务等级协议 (SLA) 违约倒计时徽标

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Linear 生产故障工单与支持工单的 SLA 履约监控徽标（Issue SLA Breach Countdown Badge）；展示工单编号、优先级标签（Urgent）、剩余解决时间（18m remaining 或 +04m breach 违约）、动态脉冲警示点与履约目标类型（First Response / Resolution）。

## 结构

- 紧凑圆角倒计时徽标 (.ds-sla-countdown-badge)
- 优先级等宽徽标 (.ds-sla-countdown-badge__priority)
- 动态倒计时与红色脉冲指示器 (.ds-sla-countdown-badge__timer, .ds-sla-countdown-badge__pulse)
- 目标类型小标签 (.ds-sla-countdown-badge__target)

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

Tab 聚焦 SLA 倒计时徽标；屏幕阅读器播报工单编号、优先级、剩余时间及 SLA 目标。

## 使用细则

- 具备 role="status" 与 aria-label 完整播报 SLA 状态。
- 支持未违约剩余时间倒计时与违约超时红色预警状态。
- 适合工单支持系统、客服工单中心、SRE 故障告警仪表盘。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sla-countdown-badge" role="status" aria-label="工单 ENG-4092 SLA 倒计时：剩余 18m，目标 First Response"><span class="ds-sla-countdown-badge__priority">Urgent</span><span class="ds-sla-countdown-badge__timer"><span class="ds-sla-countdown-badge__pulse" aria-hidden="true"></span>18m left</span><span class="ds-sla-countdown-badge__target">(First Response)</span></div>
```

## React 示例

```tsx
<LinearIssueSLACountdownBadge issueKey="ENG-4092" priority="Urgent" remainingTime="18m" targetType="First Response" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] Urgent 红色醒目警示
- [ ] 18m left 精确履约倒计时
- [ ] First Response 目标明确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
