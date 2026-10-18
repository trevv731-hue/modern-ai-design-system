# 期刊目录卡

[返回组件目录](../README.md) · 媒体 / 出版 · v3 新增

## 目的与边界

展示一本期刊的栏目结构与文章目录。

## 结构

- 期号 (ds-issue-toc__issue)
- 栏目 (ds-issue-toc__section)
- 文章行 (ds-issue-toc__article)
- 页码 (ds-issue-toc__page)

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

文章行可聚焦打开全文；当前栏目文字高亮。

## 使用细则

- 按栏目分组展示。
- 页码右对齐等宽。
- 文章标题过长截断。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-issue-toc" aria-label="期刊目录，2026 年第 6 期，共 3 个栏目"><div class="ds-issue-toc__issue">2026 年第 6 期 · 总第 218 期</div><div class="ds-issue-toc__section">特别策划</div><div class="ds-issue-toc__article" tabindex="0" role="button" aria-label="特别策划栏目，文章 数字人文视野下的古籍再生，第 8 页"><span class="ds-issue-toc__title">数字人文视野下的古籍再生</span><span class="ds-issue-toc__page">P08</span></div><div class="ds-issue-toc__section">研究论文</div><div class="ds-issue-toc__article" tabindex="0" role="button" aria-label="研究论文栏目，文章 基于大语言模型的古籍数字化校对方法研究，第 18 页"><span class="ds-issue-toc__title">基于大语言模型的古籍数字化校对方法研究</span><span class="ds-issue-toc__page">P18</span></div></article>
```

## React 示例

```tsx
<IssueTocCard issue="2026 年第 6 期" sections={[{ name: "特别策划", articles: [{ title: "数字人文视野下的古籍再生", page: "P08" }] }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 栏目分组
- [ ] 页码右对齐
- [ ] 标题截断
- [ ] 打开全文
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
