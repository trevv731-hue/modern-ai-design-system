# 请假申请行

[返回组件目录](../README.md) · 人力资源 / 招聘 · v3 新增

## 目的与边界

展示一条请假申请的类别、时段、时长与审批状态。

## 结构

- 类型标签 (ds-leave-row__type)
- 申请人
- 时段 (ds-leave-row__range)
- 时长
- 审批状态 (ds-leave-row__state)

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

行可聚焦查看详情；审批操作可达。

## 使用细则

- 审批中黄色，通过绿色，驳回红色。
- 时段冲突红色提示。
- 年假剩余额度一并展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-leave-row is-pending" tabindex="0" role="button" aria-label="请假申请，陈思远，年假，10-22 至 10-24，共 3 天，审批中"><span class="ds-leave-row__type is-annual">年假</span><div class="ds-leave-row__body"><strong>陈思远</strong><span class="ds-leave-row__range">10-22 ~ 10-24 · 共 3 天</span></div><span class="ds-leave-row__quota">余额 5 天</span><span class="ds-leave-row__state is-pending">审批中</span></div>
```

## React 示例

```tsx
<LeaveRequestRow applicant="陈思远" type="annual" from="10-22" to="10-24" days={3} quota={5} state="pending" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 审批三态颜色区分
- [ ] 时段冲突红色提示
- [ ] 展示年假余额
- [ ] 行可聚焦看详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
