# GitHub 合并队列处理中节点卡片

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub Enterprise 自动合并队列流水线节点卡片（Merge Queue Pipeline Node）；呈现队列排队序号（#2 QUEUE）、目标分支、推测性构建（Speculative Execution）测试状态微标及移出队列操作。

## 结构

- 规整圆角卡片容器 (.ds-pr-merge-queue-node)
- 左侧高亮队列序号药丸徽章 (.ds-pr-merge-queue-node__badge)
- 主体 PR 标题与分支引用提示 (.ds-pr-merge-queue-node__title, .ds-pr-merge-queue-node__meta)
- 沙盒测试中状态与动态沙漏 (.ds-pr-merge-queue-node__meta)
- 右侧移出队列操作微按钮 (.ds-pr-merge-queue-node__cancel)

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

Tab 聚焦移出队列按键；Enter 触发移出确认操作。

## 使用细则

- 具备 role="region" 与 aria-label 说明合并队列位次与 PR 编号。
- 排队徽标色彩清晰，测试状态提示明晰。
- 适合自动化 CI/CD 流水线看板、代码审查合并中心、DevOps 交付控制台。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pr-merge-queue-node" role="region" aria-label="GitHub 合并队列第 2 位：PR #1042"><span class="ds-pr-merge-queue-node__badge">#2 QUEUE</span><div class="ds-pr-merge-queue-node__body"><span class="ds-pr-merge-queue-node__title">#1042 feat(tokens): add spatial hover halo ring & standby clock</span><span class="ds-pr-merge-queue-node__meta"><span>codex/batch-30</span><span>·</span><span style="color:var(--ds-accent)">⏳ 运行中 4/5</span></span></div><button type="button" class="ds-pr-merge-queue-node__cancel">移出队列</button></div>
```

## React 示例

```tsx
<GithubPrMergeQueueNode queuePosition={2} prNumber={1042} branch="codex/batch-30" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 蓝色队列序号鲜明
- [ ] PR 标题溢出截断自然
- [ ] 移出队列按钮低调整齐
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
