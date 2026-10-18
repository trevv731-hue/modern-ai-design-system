# 错题本行

[返回组件目录](../README.md) · 教育 / 学习 · v3 新增

## 目的与边界

汇总错题与错误次数，跟踪掌握状态与来源试卷。

## 结构

- 题目摘要 (ds-error-book__stem)
- 错误次数
- 来源标记
- 掌握状态 (ds-error-book__state)
- 操作

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

行可聚焦查看详情；掌握状态切换可键盘操作。

## 使用细则

- 错误次数用徽标强调高频错题。
- 掌握后移入已攻克分组。
- 支持按学科与错误次数筛选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-error-book" role="list"><div class="ds-error-book__row" tabindex="0" role="listitem" aria-label="错题：二叉树遍历，错误 3 次，未掌握"><span class="ds-error-book__stem">二叉树层序遍历用什么结构？</span><span class="ds-error-book__count" aria-label="错误 3 次">×3</span><span class="ds-error-book__src">月考 · 10-12</span><span class="ds-error-book__state is-open">未掌握</span></div><div class="ds-error-book__row" tabindex="0" role="listitem" aria-label="错题：动态规划，错误 1 次，已攻克"><span class="ds-error-book__stem">动态规划与贪心的区别？</span><span class="ds-error-book__count" aria-label="错误 1 次">×1</span><span class="ds-error-book__src">作业 7</span><span class="ds-error-book__state is-done">已攻克</span></div></div>
```

## React 示例

```tsx
<ErrorNotebookRow stem="二叉树层序遍历用什么结构？" misses={3} source="月考 · 10-12" mastered={false} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 高频错题徽标强调
- [ ] 掌握后移入已攻克
- [ ] 按学科与次数筛选
- [ ] 行可聚焦看详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
