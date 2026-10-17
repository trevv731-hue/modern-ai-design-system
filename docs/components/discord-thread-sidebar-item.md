# Discord 讨论区侧栏项

[返回组件目录](../README.md) · 协作 / 团队 · v3 新增

## 目的与边界

在侧栏列出与当前频道关联的讨论线程，显示未读数与归档状态，方便快速回到上下文。

## 结构

- 侧栏容器 (ds-thread-list)
- 线程项 (ds-thread-item)
- 未读计数与参与头像
- 归档标记

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

上下方向键在线程项间移动；Enter 打开；Escape 关闭侧栏。

## 使用细则

- 未读计数为 0 时不显示徽标，避免噪音。
- 已归档线程明确标注，不与活跃线程混淆。
- 线程名过长时截断并保留完整文本供辅助技术读取。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<aside class="ds-thread-list" aria-label="讨论区"><div class="ds-thread-item" tabindex="0" role="button" aria-label="线程：今晚的测速结果，3 条未读"><strong>今晚的测速结果</strong><span class="ds-badge ds-badge--info">3</span><span class="ds-thread-item__note">最后回复 10 分钟前</span></div><div class="ds-thread-item ds-thread-item--archived" tabindex="0" role="button" aria-label="线程：上周节点调整，已归档"><strong>上周节点调整</strong><span class="ds-thread-item__note">已归档</span></div></aside>
```

## React 示例

```tsx
<DiscordThreadSidebarItem threads={[{ title: "今晚的测速结果", unread: 3 }, { title: "上周节点调整", archived: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 未读为 0 时不渲染徽标
- [ ] 归档状态对屏幕阅读器可读
- [ ] 长名称截断但完整文本仍可获取
- [ ] 方向键可在线程项间移动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
