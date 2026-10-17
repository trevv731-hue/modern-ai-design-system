# X Grok 内联回复卡

[返回组件目录](../README.md) · 消费端媒体 · v3 新增

## 目的与边界

在帖子下方以卡片形式展示 AI 补充信息，标明生成时间与不确定性。

## 结构

- 卡片外壳 (ds-grok-card)
- 标识与生成时间
- 回答正文
- 来源与免责说明

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

卡片内链接与折叠按钮可达；Enter 展开完整说明。

## 使用细则

- 标注生成时间和“可能不准确”的提示。
- 给出可核验的来源链接。
- 不把 AI 回答伪装成官方结论。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-grok-card"><header class="ds-grok-card__head"><strong>Grok 补充</strong><span>生成于 21:47 · 可能不准确</span></header><p>该话题的讨论集中在延迟测量方式上，建议查看原始测速日志。</p><footer class="ds-grok-card__foot"><a href="#sources">查看来源</a><button type="button" class="ds-button ds-button--ghost">展开说明</button></footer></article>
```

## React 示例

```tsx
<XGrokInlineReply generatedAt="生成于 21:47 · 可能不准确">该话题的讨论集中在延迟测量方式上。</XGrokInlineReply>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 标注生成时间与不确定性
- [ ] 提供可核验来源
- [ ] 不伪装成官方结论
- [ ] 键盘可展开完整说明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
