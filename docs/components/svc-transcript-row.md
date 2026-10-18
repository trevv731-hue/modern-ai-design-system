# 会话记录行

[返回组件目录](../README.md) · 客服 / 工单 · v3 新增

## 目的与边界

展示一条客服会话的摘要、渠道与未读消息数。

## 结构

- 客户头像 (ds-transcript-row__avatar)
- 摘要 (ds-transcript-row__body)
- 渠道标签
- 时间 (ds-transcript-row__time)
- 未读角标 (ds-transcript-row__badge)

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

行可聚焦打开会话；未读数使用 aria-label 播报。

## 使用细则

- 未读消息数红色角标。
- 置顶会话有标记。
- 渠道图标区分 App、电话、网页。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-transcript-row" tabindex="0" role="button" aria-label="会话，张女士，App 渠道，我的退款到账了吗？，14:32，2 条未读"><span class="ds-transcript-row__avatar" aria-hidden="true">张</span><div class="ds-transcript-row__body"><strong>张女士 · App</strong><span>我的退款到账了吗？</span></div><span class="ds-transcript-row__time">14:32</span><span class="ds-transcript-row__badge">2</span></div>
```

## React 示例

```tsx
<ConversationTranscriptRow customer="张女士" preview="我的退款到账了吗？" channel="app" time="14:32" unread={2} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 未读红色角标
- [ ] 置顶会话有标记
- [ ] 渠道图标区分
- [ ] 行可聚焦打开会话
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
