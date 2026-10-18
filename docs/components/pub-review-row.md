# 审稿意见行

[返回组件目录](../README.md) · 媒体 / 出版 · v3 新增

## 目的与边界

展示一条审稿意见的结论与摘要内容。

## 结构

- 审稿人 (ds-review-row__reviewer)
- 结论 (ds-review-row__verdict)
- 摘要 (ds-review-row__summary)
- 时间 (ds-review-row__time)

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

行可聚焦查看完整意见；拒稿结论以 alert 语义播报。

## 使用细则

- 结论三态：录用、修改后录用、拒稿。
- 审稿人匿名时明确标注。
- 摘要两行截断。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-review-row is-minor" tabindex="0" role="button" aria-label="审稿意见，审稿人 匿名审稿人 2，结论 修改后录用，选题新颖，实验设计需补充对照组，2026-06-02"><span class="ds-review-row__reviewer">匿名审稿人 2</span><span class="ds-review-row__verdict is-minor">修改后录用</span><span class="ds-review-row__summary">选题新颖，实验设计需补充对照组</span><span class="ds-review-row__time">06-02</span></div>
```

## React 示例

```tsx
<EditorialReviewRow reviewer="匿名审稿人 2" verdict="minor" summary="选题新颖，实验设计需补充对照组" time="06-02" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态结论
- [ ] 匿名标注
- [ ] 摘要截断
- [ ] 完整意见
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
