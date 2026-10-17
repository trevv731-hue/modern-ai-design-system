# Telegram / WhatsApp 消息气泡与双勾已读回执

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Telegram 与 WhatsApp 最具代表性的即时通讯消息气泡；包含精美圆角、引用回复卡片（Quoted Reply Card）、富文本正文、右下角微型时间戳与经典的双勾（✓✓ 双蓝勾已读状态）。

## 结构

- 消息行布局容器 (.ds-msg-row, .ds-msg-row--out, .ds-msg-row--in)
- 气泡外壳 (.ds-msg-bubble)
- 引用回复卡片条 (.ds-msg-bubble__quote)
- 作者与引文摘要 (.ds-msg-bubble__quote-author, .ds-msg-bubble__quote-text)
- 消息正文 (.ds-msg-bubble__text)
- 时间戳与双勾状态徽标 (.ds-msg-bubble__footer, .ds-msg-bubble__time, .ds-msg-bubble__checks)

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

Tab 聚焦消息卡片；无障碍播报包含发送方、引文内容、消息正文与送达状态。

## 使用细则

- 已读状态用双勾与蓝色表达，未读为双灰色勾，发送中为时钟图标。
- 气泡采用自适应最大宽度（桌面端 75%，移动端 85%）。
- 保持高可读性，浅色与深色主题均保持背景对比。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-msg-row ds-msg-row--out" role="article" aria-label="你发送的消息：已于 14:32 送达并已读"><div class="ds-msg-bubble ds-msg-bubble--out"><div class="ds-msg-bubble__quote"><span class="ds-msg-bubble__quote-author">Alex</span><span class="ds-msg-bubble__quote-text">Can you check the new glass tokens?</span></div><div class="ds-msg-bubble__text">All merged! Added the Liquid Glass toolbar and Telegram reaction bar.</div><div class="ds-msg-bubble__footer"><span class="ds-msg-bubble__time">14:32</span><span class="ds-msg-bubble__checks" aria-label="已读">✓✓</span></div></div></div>
```

## React 示例

```tsx
<TelegramChatBubbleReceipt sender="you" quote={{ author: "Alex", text: "Can you check the new glass tokens?" }} message="All merged! Added the Liquid Glass toolbar." time="14:32" status="read" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 双勾已读状态符合国际通用规范
- [ ] 引用回复卡片作者与摘要清晰区分
- [ ] 发送方与接收方左右对齐与气泡颜色符合直觉
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
