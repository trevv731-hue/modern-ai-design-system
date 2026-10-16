# GitHub PR 评审决策裁决卡片

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub Pull Request 审查流中标志性的评审决策状态卡片；鲜明指示 Approved（审核通过）、Changes Requested（要求修改）或 Commented（仅评论），包含审查者头像与留言。

## 结构

- 裁决卡片外壳 (.ds-review-verdict)
- 顶部状态色带条 (.ds-review-verdict__head)
- 审核通过绿色主题变体 (.ds-review-verdict__head--approved)
- 要求修改红色主题变体 (.ds-review-verdict__head--changes)
- 审查者信息与头像 (.ds-review-verdict__author)
- 评审留言正文 (.ds-review-verdict__comment)
- 右下时间戳 (.ds-review-verdict__stamp)

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

作为语义化 article 展示；若卡片含操作按钮可通过 Tab 依次获取焦点。

## 使用细则

- 顶部横条使用主题语义色（--ds-success-soft / --ds-danger-soft），一目了然传递审查结论。
- 右下角灰色等宽时间戳，提供精确的时间审计信息。
- 适合代码审查工作台、合规审批流、设计交付评审及团队工单验收系统。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-review-verdict" role="article" aria-label="代码评审裁决：octocat 审核通过"><div class="ds-review-verdict__head ds-review-verdict__head--approved"><span>✓ 审核通过 (Approved)</span></div><div class="ds-review-verdict__body"><div class="ds-review-verdict__author"><span class="ds-avatar ds-avatar--xs">O</span><span>octocat</span></div><p class="ds-review-verdict__comment">代码架构严谨，100% 测试通过，可以随时合入主分支。</p><span class="ds-review-verdict__stamp">10分钟前</span></div></div>
```

## React 示例

```tsx
<GithubReviewVerdictCard author="octocat" verdict="approved" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 状态色带与文字对比度满足无障碍要求
- [ ] 卡片内边距饱满紧凑
- [ ] 多行评论自适应折行
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
