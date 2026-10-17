# GitHub 文件树变更统计

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

在变更列表里同时给出文件层级、增删行数与折叠状态，便于快速审阅大改。

## 结构

- 文件树容器 (ds-diff-tree)
- 文件节点 (ds-diff-tree__node)
- 增删统计条
- 折叠与已读标记

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

上下方向键移动；Enter 展开或收起；Space 标记已读。

## 使用细则

- 增删行数来自实际差异，不为美观做缩放。
- 已读状态可切换，不与展开状态混淆。
- 二进制文件显示类型与大小，不显示伪差异。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-diff-tree" role="region" aria-label="文件变更统计"><div class="ds-diff-tree__node" tabindex="0" role="button" aria-expanded="true"><strong>src/subscription.ts</strong><span class="ds-diff-tree__stat"><span style="width:70%;background:var(--ds-success)"></span><span class="ds-diff-tree__num">+42 −6</span></span></div></div>
```

## React 示例

```tsx
<GithubFileTreeDiffStat files={[{ path: "src/subscription.ts", added: 42, removed: 6 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 增删行数来自实际差异
- [ ] 已读与展开状态互不干扰
- [ ] 二进制文件显示类型与大小
- [ ] 键盘可审阅全部节点
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
