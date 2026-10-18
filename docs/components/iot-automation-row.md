# 自动化规则行

[返回组件目录](../README.md) · 智能家居 / IoT · v3 新增

## 目的与边界

展示一条自动化规则的触发条件、动作与启用状态。

## 结构

- 规则名 (ds-automation-row__name)
- 触发条件 (ds-automation-row__trigger)
- 动作 (ds-automation-row__action)
- 开关 (ds-automation-row__toggle)
- 执行次数

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

开关使用 switch 语义；行可聚焦编辑规则。

## 使用细则

- 触发与动作用箭头连接。
- 执行失败红色提示。
- 支持暂停而不删除。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-automation-row" tabindex="0" role="button" aria-label="自动化规则，天黑开灯，当日落时，客厅灯亮度 70%，已启用，执行 128 次"><div class="ds-automation-row__body"><strong class="ds-automation-row__name">天黑开灯</strong><span class="ds-automation-row__trigger">当日落时</span><span class="ds-automation-row__arrow" aria-hidden="true">→</span><span class="ds-automation-row__action">客厅灯亮度 70%</span></div><span class="ds-automation-row__runs">执行 128 次</span><button type="button" class="ds-automation-row__toggle" role="switch" aria-checked="true" aria-label="天黑开灯规则开关"><i></i></button></div>
```

## React 示例

```tsx
<AutomationRuleRow name="天黑开灯" trigger="日落时" action="客厅灯亮度 70%" enabled runs={128} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 触发动作箭头连接
- [ ] 执行失败红色
- [ ] 可暂停不删除
- [ ] switch 语义
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
