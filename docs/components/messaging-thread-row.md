# 会话列表行

[返回组件目录](../README.md) · 通讯 · v3 新增

## 目的与边界

在会话列表中展示单条会话的头像、摘要、时间与未读状态。

## 结构

- 头像 (ds-thread-row__avatar)
- 名称
- 最新消息摘要
- 时间戳
- 未读徽标

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

整行可聚焦；Enter 打开会话；未读徽标有文字可读。

## 使用细则

- 未读数量用徽标加数字，不只用圆点。
- 摘要截断为一行，避免挤压名称。
- 置顶会话有图标加文字说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-thread-row is-unread" tabindex="0" role="button"><span class="ds-thread-row__avatar" aria-hidden="true">林</span><div class="ds-thread-row__body"><div class="ds-thread-row__top"><strong>林晓</strong><time>09:24</time></div><p>设计规范评审挪到下午三点可以吗？</p></div><span class="ds-thread-row__badge">2</span></div>
```

## React 示例

```tsx
<ThreadRow name="林晓" preview="设计规范评审挪到下午三点可以吗？" time="09:24" unread={2} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 未读徽标含数字
- [ ] 摘要单行截断
- [ ] 置顶有图标加文字
- [ ] 整行可键盘打开
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
