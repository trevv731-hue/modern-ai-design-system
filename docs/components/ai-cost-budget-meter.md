# AI 成本预算计

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

展示本期用量、预算上限与预计耗尽时间，在越界前提示而不是事后告警。

## 结构

- 预算外框 (ds-budget-meter)
- 已用 / 上限数值
- 进度轨道与阈值标记
- 趋势说明

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

静态指标无需 Tab；阈值状态用文字标注，不只用颜色。

## 使用细则

- 已用值与上限来自账单或计量接口，不估算。
- 达到 80% 时给出明确提示。
- 没有预算数据时显示“未设置预算”。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-budget-meter" role="status" aria-label="成本预算"><div class="ds-budget-meter__meta"><strong>已用 ¥ 82.40 / ¥ 100.00</strong><span>预计 6 天后耗尽</span></div><div class="ds-budget-meter__track"><span style="width:82%"></span></div><span class="ds-budget-meter__note">已达 82%，接近阈值 80%</span></div>
```

## React 示例

```tsx
<AICostBudgetMeter used="¥ 82.40" limit="¥ 100.00" eta="预计 6 天后耗尽" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 用量数据来自计量接口
- [ ] 超过阈值时给出文字提示
- [ ] 无预算时显示未设置
- [ ] 趋势说明与数值一致
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
