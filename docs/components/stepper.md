# 向导分步器

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

Stripe Checkout 与 Linear 任务引导的分步进度向导；展示任务链路各环节的完成状态。

## 结构

- 圆形数字/对勾步骤节点
- 节点间状态连接线
- 步骤名称标签
- 激活态微放大外框

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

键盘 Tab 在各可点击步骤间导航；Enter 或 Space 切换至对应步骤。

## 使用细则

- 已完成步骤自动呈现绿色实心微勾（✓），清晰表达成果。
- 激活当前步骤具备微妙外扩环（scale(1.08)）与主题色高亮。
- 连接线随步骤完成度动态自适应填充色。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-stepper" role="navigation" aria-label="订阅配置向导" style="width:100%"><div class="ds-step is-complete"><div class="ds-step__pill">✓</div><span class="ds-step__label">订阅导入</span></div><div class="ds-stepper__line is-active"></div><div class="ds-step is-active"><div class="ds-step__pill">2</div><span class="ds-step__label">节点分流</span></div><div class="ds-stepper__line"></div><div class="ds-step"><div class="ds-step__pill">3</div><span class="ds-step__label">启动连接</span></div></div>
```

## React 示例

```tsx
<Stepper steps={wizardSteps} currentStep={1} onStepClick={setStep} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 数字居中对齐，完成态符号清晰
- [ ] 连接线随当前步骤平滑衔接
- [ ] 向导步骤支持读屏器朗读当前进度
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
