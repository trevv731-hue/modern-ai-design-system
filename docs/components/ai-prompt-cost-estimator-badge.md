# AI 提示词 Token 消耗与成本微预估徽标

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

复刻 Cursor、OpenRouter 与 Langfuse 提示词计费微徽标，精确实时量化当前提问的 Token 用量、预估美元成本与 Prompt 缓存命中率。

## 结构

- 微型统计胶囊 (ds-prompt-cost-badge)
- 费用数值 (ds-prompt-cost-badge__cost)
- 输入/输出配额明细
- Prompt 缓存命中徽章 (ds-prompt-cost-badge__cache)

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

纯状态展示组件；屏幕阅读器通过 aria-label 完整朗读用量与费用统计。

## 使用细则

- 体积紧凑，适合直接嵌入在 AI 输入框右上角或对话消息底部。
- 绿色微徽标突出显示缓存命中率（如 ⚡ 85% Hit），激励用户优化提示词重用率。
- 费用采用四位小数（如 $0.0024）加粗等宽呈现，准确严谨。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-prompt-cost-badge" role="status" aria-label="Token 消耗：输入 1.4k，输出 420，预估费用 $0.0024"><span class="ds-prompt-cost-badge__cost">$0.0024</span><span>1.4k in / 420 out</span><span class="ds-prompt-cost-badge__cache">⚡ 85% Hit</span></div>
```

## React 示例

```tsx
<AIPromptCostEstimatorBadge cost="$0.0024" promptTokens="1.4k" outputTokens="420" cacheHit="85%" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 数字字体等宽排版，用量变动时页面不晃动
- [ ] 缓存命中率角标在深浅模式下色彩对比度达标
- [ ] 辅助技术可准确读出当前对话的费用与 Token 数
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
