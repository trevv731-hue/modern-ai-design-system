# 通知收件箱行

[返回组件目录](../README.md) · 通知 · v3 新增

## 目的与边界

在通知中心按行展示消息来源、内容摘要与操作入口。

## 结构

- 来源图标 (ds-inbox-row__icon)
- 标题
- 摘要
- 时间
- 未读点
- 快捷操作

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

行可聚焦；未读状态用文字可读；快捷操作独立可达。

## 使用细则

- 未读行有文字标记而非仅圆点。
- 同类通知可折叠为分组。
- 快捷操作不超过两个。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-inbox-row is-unread" tabindex="0" role="button"><span class="ds-inbox-row__icon" aria-hidden="true">💬</span><div class="ds-inbox-row__body"><strong>林晓 在「设计规范」中提到了你</strong><p>第三章的玻璃层级能补充暗色适配说明吗？</p></div><time>10 分钟前</time><span class="ds-inbox-row__unread">未读</span><button type="button" aria-label="标记已读">✓</button></div>
```

## React 示例

```tsx
<NoticeInboxRow title="林晓 在「设计规范」中提到了你" preview="第三章的玻璃层级能补充暗色适配说明吗？" time="10 分钟前" unread />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 未读有文字标记
- [ ] 同类可折叠分组
- [ ] 快捷操作不超过两个
- [ ] 行可键盘聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
