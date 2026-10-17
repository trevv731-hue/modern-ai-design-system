# X 时间线书签条

[返回组件目录](../README.md) · 消费端媒体 · v3 新增

## 目的与边界

把稍后阅读的帖子收进一条常驻条，显示未读数量与一键清空入口。

## 结构

- 书签条容器 (ds-bookmark-strip)
- 书签项 (ds-bookmark-strip__item)
- 未读计数
- 清空按钮

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

Tab 依次进入书签项与清空按钮；Enter 打开；清空需要二次确认。

## 使用细则

- 未读计数来自真实状态，加载中显示“—”。
- 清空需要确认，避免误删全部书签。
- 书签项保留作者与时间，不只显示正文片段。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-bookmark-strip" role="region" aria-label="稍后阅读"><div class="ds-bookmark-strip__item" tabindex="0" role="button" aria-label="书签：延迟排查笔记"><strong>延迟排查笔记</strong><span>@aether · 今天</span></div><div class="ds-bookmark-strip__count">3 条未读</div><button type="button" class="ds-button ds-button--ghost">清空</button></div>
```

## React 示例

```tsx
<XTimelineBookmarkStrip items={[{ title: "延迟排查笔记", author: "@aether" }]} unread={3} onClear={clear} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 未读数与真实状态一致
- [ ] 清空需要二次确认
- [ ] 书签保留作者与时间
- [ ] 键盘可打开与清空
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
