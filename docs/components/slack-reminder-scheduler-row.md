# Slack 提醒计划行

[返回组件目录](../README.md) · 协作 / 团队 · v3 新增

## 目的与边界

以一行表单完成“什么时候提醒谁做什么”，避免多级弹窗收集信息。

## 结构

- 行容器 (ds-reminder-row)
- 时间选择器
- 对象选择
- 动作按钮

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

Tab 在时间、对象、按钮间移动；Enter 提交；Escape 取消并清空临时值。

## 使用细则

- 时间显示使用用户时区并标注时区，不只用相对时间。
- 提交失败时保留已填内容。
- 重复周期选项文字明确，不写“稍后”。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-reminder-row" role="group" aria-label="设置提醒"><label>时间<select class="ds-button ds-button--secondary" aria-label="提醒时间"><option>明天 09:00 (GMT+8)</option><option>明天 14:00 (GMT+8)</option></select></label><label>对象<select class="ds-button ds-button--secondary" aria-label="提醒对象"><option>仅我</option><option>值班组</option></select></label><button type="button" class="ds-button" data-toast="提醒已创建">创建提醒</button></div>
```

## React 示例

```tsx
<SlackReminderSchedulerRow times={["明天 09:00 (GMT+8)", "明天 14:00 (GMT+8)"]} targets={["仅我", "值班组"]} onCreate={create} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 时间带有时区标注
- [ ] 失败后输入内容不丢失
- [ ] 重复周期文案具体明确
- [ ] 键盘可以完成整个设置流程
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
