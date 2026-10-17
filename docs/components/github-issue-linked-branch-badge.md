# GitHub 关联分支徽标

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

在工作项上标明已关联的分支与合并状态，避免重复开发或遗漏合并。

## 结构

- 徽标外壳 (ds-branch-badge)
- 分支名
- 合并状态图标
- 打开分支入口

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

徽标内入口是链接，Tab 可达。

## 使用细则

- 分支名完整显示或可展开，不截断为不可辨认。
- 合并状态区分未合并、已合并、已关闭。
- 分支被删除时给出提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-branch-badge" role="status" aria-label="关联分支 feat/subscription-retry，未合并"><span aria-hidden="true">⑂</span><span>feat/subscription-retry</span><span class="ds-branch-badge__state">未合并</span><button type="button" class="ds-button ds-button--ghost">打开分支</button></div>
```

## React 示例

```tsx
<GithubIssueLinkedBranchBadge branch="feat/subscription-retry" merged={false} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 分支名完整可辨
- [ ] 合并状态明确区分
- [ ] 分支删除有提示
- [ ] 键盘可打开分支
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
