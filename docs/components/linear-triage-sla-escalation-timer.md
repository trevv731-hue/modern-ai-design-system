# Linear 工单分流 SLA 紧急升级倒计时器

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

工单分流看板的 SLA 履约监控与一键升级控件（Triage SLA Escalation Timer）；展示工单编号、SLA 等级（Urgent P0）、剩余时间与紧急升级动作按钮，临近违约时给出强提示。

## 结构

- 圆角倒计时容器 (.ds-triage-sla-timer)
- 状态指示环 (.ds-triage-sla-timer__ring)
- SLA 等级标签 (.ds-triage-sla-timer__tier)
- 剩余时间等宽倒计时 (.ds-triage-sla-timer__countdown)
- 一键升级动作按钮 (.ds-triage-sla-timer__action)

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

Tab 依次聚焦倒计时状态与升级按钮；Enter 或 Space 触发升级；屏幕阅读器播报工单编号、等级与剩余时间。

## 使用细则

- 容器使用 role="status"，并在 aria-label 内完整播报工单、等级与剩余时间。
- 升级按钮必须带明确 aria-label，说明将升级哪一张工单。
- 倒计时归零后应切换为违约样式，而不是继续停留在 00:00。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-triage-sla-timer" role="status" aria-label="工单分流 SLA 倒计时：SUP-1082，等级 Urgent P0，剩余 18m 42s"><span class="ds-triage-sla-timer__ring" aria-hidden="true"></span><span class="ds-triage-sla-timer__tier">Urgent P0</span><span class="ds-triage-sla-timer__countdown">18m 42s</span><button type="button" class="ds-triage-sla-timer__action" aria-label="紧急升级工单 SUP-1082">Escalate</button></div>
```

## React 示例

```tsx
<LinearTriageSlaEscalationTimer ticketId="SUP-1082" slaTier="Urgent P0" remainingTime="18m 42s" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] Urgent P0 等级标签醒目
- [ ] 18m 42s 倒计时等宽不跳动
- [ ] Escalate 按钮触控区足够
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
