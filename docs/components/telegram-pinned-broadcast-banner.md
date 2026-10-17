# Telegram 频道置顶广播通知与导航条

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

Telegram 与 Discord 经典的顶部置顶公告横条；以毛玻璃材质贴紧群组或频道顶部，展示置顶喇叭指示条、公告标题与摘要、跳转到原消息位置的下钻把手，以及关闭按钮。

## 结构

- 置顶通栏外壳 (.ds-pinned-banner)
- 左侧广播微指示条 (.ds-pinned-banner__indicator)
- 公告标题与正文摘录 (.ds-pinned-banner__content, .ds-pinned-banner__title, .ds-pinned-banner__snippet)
- 快捷跳转与关闭操作组 (.ds-pinned-banner__actions, .ds-pinned-banner__jump-btn, .ds-pinned-banner__close-btn)

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

Tab 聚焦横条内的跳转与关闭按钮；Enter 执行跳转；Escape 快速关闭公告栏。

## 使用细则

- 容器采用 Chrome 层级与毛玻璃，不遮挡主聊天区域第一条消息。
- 发生紧急全员通知时，左侧指示条可呈现柔和呼吸高亮色。
- 关闭操作需给予用户恢复或重新展开的入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pinned-banner" role="banner" aria-label="置顶公告：版本发布公告，点击可快速跳转到原始消息"><div class="ds-pinned-banner__indicator" aria-hidden="true"></div><div class="ds-pinned-banner__content"><span class="ds-pinned-banner__title">Pinned Message #42</span><span class="ds-pinned-banner__snippet">UI Design System v3.1 update is now live across all platforms.</span></div><div class="ds-pinned-banner__actions"><button type="button" class="ds-pinned-banner__jump-btn" aria-label="跳转至置顶原消息">View ➔</button><button type="button" class="ds-pinned-banner__close-btn" aria-label="关闭置顶公告">×</button></div></div>
```

## React 示例

```tsx
<TelegramPinnedBroadcastBanner messageId={42} title="Pinned Message #42" snippet="UI Design System v3.1 update is now live across all platforms." onJump={() => {}} onClose={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 置顶横条具有明确的 role="banner" 与 aria-label
- [ ] 跳转与关闭操作触控区域符合标准规范
- [ ] 文本超长时自动截断并展示省略号
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
