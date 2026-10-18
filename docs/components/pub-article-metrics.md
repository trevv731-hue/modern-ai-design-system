# 文章数据卡

[返回组件目录](../README.md) · 媒体 / 出版 · v3 新增

## 目的与边界

展示一篇文章的阅读、引用与下载核心数据。

## 结构

- 阅读量 (ds-article-metrics__item)
- 引用量
- 下载量
- 环比 (ds-article-metrics__cmp)

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

卡片可聚焦查看数据趋势；引用激增以 status 语义播报。

## 使用细则

- 三项数据并列展示。
- 千分位格式化。
- 环比以箭头加数字呈现。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-article-metrics" tabindex="0" role="img" aria-label="文章数据，阅读 12,486，引用 86，下载 2,314，引用环比上升 24%"><div class="ds-article-metrics__item"><span>阅读</span><strong>12,486</strong></div><div class="ds-article-metrics__item"><span>引用</span><strong>86</strong></div><div class="ds-article-metrics__item"><span>下载</span><strong>2,314</strong></div><span class="ds-article-metrics__cmp is-up">引用 ↑ 24%</span></article>
```

## React 示例

```tsx
<ArticleMetricsCard reads={12486} cites={86} downloads={2314} compare={24} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三项并列
- [ ] 千分位
- [ ] 环比箭头
- [ ] 趋势查看
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
