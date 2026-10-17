# GitHub 讨论帖卡

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

把开放式讨论按主题聚合，显示回答状态与参与情况，区别于缺陷工作项。

## 结构

- 讨论卡外壳 (ds-discussion-card)
- 标题与分类标签
- 回答状态
- 参与者与回复数

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

Tab 进入标题链接与回复入口；Enter 打开。

## 使用细则

- 分类标签与仓库讨论分类一致。
- 已回答与未回答状态明确区分。
- 回复数与实际条目一致。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-discussion-card"><header class="ds-discussion-card__head"><a href="#discussion">如何设计离线优先的同步策略？</a><span class="ds-badge">问答</span></header><footer class="ds-discussion-card__foot"><span class="ds-badge ds-badge--success">已回答</span><span>6 条回复 · 3 人参与</span></footer></article>
```

## React 示例

```tsx
<GithubDiscussionThreadCard title="如何设计离线优先的同步策略？" category="问答" answered replies={6} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 分类标签与仓库一致
- [ ] 回答状态明确区分
- [ ] 回复数与实际一致
- [ ] 键盘可打开讨论
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
