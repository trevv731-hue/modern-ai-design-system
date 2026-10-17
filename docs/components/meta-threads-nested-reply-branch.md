# Meta Threads 树状折叠对话分支流

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 Meta Threads 与 Reddit 经典的消息嵌套串联对话分支，通过贯穿头像下方的细脊柱线清晰呈现话题衍生层级。

## 结构

- 串联流容器 (ds-thread-branch)
- 单条讨论项 (ds-thread-branch__item)
- 纵向连续脊线 (ds-thread-branch__spine)
- 作者圆形头像 (ds-thread-branch__avatar)
- 消息内容区 (ds-thread-branch__body)
- 作者与时间标头 (ds-thread-branch__author)
- 互动操作栏 (ds-thread-branch__actions)

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

Tab 键在各条消息的操作按钮间移动；Space 点赞；Enter 进入回复分支。

## 使用细则

- 脊线沿头像中心正下方垂直延伸至下一回复项，分支末项自动隐藏延伸线。
- 用户名后带有轻量相对时间戳（如 · 2h），操作栏提供极简的点赞和回复计数。
- 深浅色模式自动适配脊线颜色，确保层次清晰且不喧宾夺主。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-thread-branch" role="feed" aria-label="Threads 串联分支对话"><div class="ds-thread-branch__item"><div class="ds-thread-branch__spine"></div><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Ccircle cx='18' cy='18' r='18' fill='%236366f1'/%3E%3Ctext x='18' y='22' font-size='14' text-anchor='middle' fill='white' font-family='sans-serif'%3EAL%3C/text%3E%3C/svg%3E" alt="Alex Rivera" class="ds-thread-branch__avatar"><div class="ds-thread-branch__body"><div class="ds-thread-branch__author"><span>alex_rivera</span><span class="ds-thread-branch__time">· 2h</span></div><div class="ds-thread-branch__text">The fluid spring physics in the new design system feels so native on macOS and iOS!</div><div class="ds-thread-branch__actions"><button type="button" class="ds-thread-branch__action-btn" aria-label="点赞 42 次">❤️ 42</button><button type="button" class="ds-thread-branch__action-btn" aria-label="回复 3 条">💬 3</button></div></div></div><div class="ds-thread-branch__item"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Ccircle cx='18' cy='18' r='18' fill='%2310b981'/%3E%3Ctext x='18' y='22' font-size='14' text-anchor='middle' fill='white' font-family='sans-serif'%3ESM%3C/text%3E%3C/svg%3E" alt="Sarah Miller" class="ds-thread-branch__avatar"><div class="ds-thread-branch__body"><div class="ds-thread-branch__author"><span>sarah_m</span><span class="ds-thread-branch__time">· 45m</span></div><div class="ds-thread-branch__text">Totally agree, and having 0 motion lint errors with reduced-motion guarantees accessibility everywhere.</div><div class="ds-thread-branch__actions"><button type="button" class="ds-thread-branch__action-btn" aria-label="点赞 18 次">❤️ 18</button><button type="button" class="ds-thread-branch__action-btn" aria-label="回复 1 条">💬 1</button></div></div></div></div>
```

## React 示例

```tsx
<MetaThreadsNestedReplyBranch posts={[{ author: "alex_rivera", time: "2h", content: "Great design!" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 各层级回复对齐精准，脊线无偏移或截断
- [ ] 点赞与回复按钮具备无障碍标签，说明当前数值
- [ ] 强制颜色模式下边框与头像均保持完整可视性
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
