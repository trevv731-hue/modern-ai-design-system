# 对话消息气泡

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

iMessage 与 ChatGPT 风格的对称式会话消息气泡；区隔用户输入与 AI/系统响应。

## 结构

- 发言者微头像/身份标
- 圆角弧度消息气泡面
- 时间戳与状态信息
- 快捷复制或操作悬浮条

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

Tab 可聚焦至气泡底部的快捷操作（如复制、重试）；消息正文支持全选。

## 使用细则

- 用户气泡采用 action 填充色并靠右对齐；AI 气泡采用 surface 实底描边并靠左对齐。
- 底部保留微小时间戳与状态反馈，避免视觉杂乱。
- 圆角遵循外大内小的气泡拐角物理质感。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-chat" style="width:100%"><div class="ds-chat-row ds-chat-row--user"><div class="ds-chat-bubble"><p style="margin:0">请测试新加坡专线节点的往返 RTT 和丢包率。</p><div class="ds-chat-bubble__footer"><span>11:24</span><span>✓ 已送达</span></div></div></div><div class="ds-chat-row ds-chat-row--ai"><div class="ds-chat-bubble"><p style="margin:0">新加坡 01 延迟 18ms，丢包率 0.00%，已通过 BGP 多径直达测试。</p><div class="ds-chat-bubble__footer"><button class="ds-button ds-button--ghost" style="min-height:22px;padding:2px 6px;font-size:11px" data-toast="已复制回复">复制</button><span>11:24</span></div></div></div></div>
```

## React 示例

```tsx
<ChatBubble role="ai" message="新加坡 01 延迟 18ms" timestamp="11:24" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 用户与 AI 气泡视觉对齐严谨
- [ ] 浅深主题下文字对比度符合标准
- [ ] 气泡内操作按钮焦点环完整可见
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
