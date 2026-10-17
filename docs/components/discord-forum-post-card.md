# Discord 论坛频道帖子卡

[返回组件目录](../README.md) · 协作 / 团队 · v3 新增

## 目的与边界

在论坛频道中聚合一个主题的正文摘要、标签与参与情况，让浏览与回复在同一处完成。

## 结构

- 帖子标题与标签行
- 正文摘要 (ds-forum-post__body)
- 参与者与回复数
- 最近活动时间

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

Tab 进入标题链接与回复按钮；标题使用链接语义，回复按钮独立可达。

## 使用细则

- 摘要截断在段落边界，不切断单词或链接。
- 回复数与参与者数量来自同一数据源。
- 标签最多展示 5 个，其余折叠为“更多”。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-forum-post"><header class="ds-forum-post__head"><a href="#topic">订阅延迟突然升高的排查思路</a><span class="ds-badge">故障排查</span><span class="ds-badge ds-badge--info">已解决</span></header><p class="ds-forum-post__body">先确认是单一出口还是整体链路问题，再对比历史测速记录…</p><footer class="ds-forum-post__meta"><span>12 条回复</span><span>最后活动 2 小时前</span></footer></article>
```

## React 示例

```tsx
<DiscordForumPostCard title="订阅延迟突然升高的排查思路" tags={["故障排查", "已解决"]} replies={12} activity="最后活动 2 小时前">先确认是单一出口还是整体链路问题。</DiscordForumPostCard>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 摘要不会截断到不可读的片段
- [ ] 回复数与实际回复条目一致
- [ ] 标签过多时有折叠入口
- [ ] 标题链接可键盘激活
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
