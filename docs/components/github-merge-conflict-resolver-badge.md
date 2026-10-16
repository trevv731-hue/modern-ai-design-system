# GitHub 智能合并冲突裁决徽标

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub PR 与 VS Code 智能合并冲突状态指示与快捷裁决徽标（Smart Merge Conflict Resolver Badge）；警示红框、冲突文件数计数徽标、当前与目标冲突分支标签及一键“采用当前/采用传入”快速解决按键。

## 结构

- 红色警戒圆角微浮条 (.ds-conflict-resolver-badge)
- 黄色/红色警告微图标 (.ds-conflict-resolver-badge__icon)
- 冲突分支等宽代码标签 (.ds-conflict-resolver-badge__tag)
- 快捷裁决按键组 (.ds-conflict-resolver-badge__actions, .ds-conflict-resolver-badge__btn)

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

Tab 导航至“采用当前”或“采用传入”按键；Enter 触发解决冲突。

## 使用细则

- 具备 role="status" 与 aria-label 完整播报合并冲突详情。
- 采用当前与采用传入按键具备独立悬浮反馈与明确语义。
- 适合代码审查工作流、Git 客户端、分支协同合并面板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-conflict-resolver-badge" role="status" aria-label="合并冲突：2 个冲突文件，源分支 feat/spatial-dock，目标分支 main"><span class="ds-conflict-resolver-badge__icon" aria-hidden="true">⚠️</span><span>2 个合并冲突</span><span class="ds-conflict-resolver-badge__tag">feat/spatial-dock</span><div class="ds-conflict-resolver-badge__actions"><button type="button" class="ds-conflict-resolver-badge__btn">采用当前</button><button type="button" class="ds-conflict-resolver-badge__btn">采用传入</button></div></div>
```

## React 示例

```tsx
<GitHubMergeConflictResolverBadge conflictCount={2} currentBranch="feat/spatial-dock" targetBranch="main" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 红色边框警戒感鲜明
- [ ] 代码分支标签等宽规范
- [ ] 采用当前/采用传入紧凑整洁
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
