# 新闻稿卡

[返回组件目录](../README.md) · 媒体 / 出版 · v3 新增

## 目的与边界

展示一篇新闻稿的标题、导语与投放媒体。

## 结构

- 标题 (ds-press-release__title)
- 导语 (ds-press-release__lead)
- 媒体 (ds-press-release__media)
- 状态 (ds-press-release__state)

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

卡片可聚焦查看全文；已发布状态以 status 语义播报。

## 使用细则

- 导语两行截断。
- 投放媒体以徽标横排。
- 状态用文字不只颜色。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-press-release is-published" tabindex="0" role="button" aria-label="新闻稿，2026 古籍数字化前沿论坛在京举办，来自 30 余家机构的两百位学者参会，已发布，投放 人民日报客户端、光明日报"><div class="ds-press-release__head"><strong class="ds-press-release__title">2026 古籍数字化前沿论坛在京举办</strong><span class="ds-press-release__state is-published">已发布</span></div><p class="ds-press-release__lead">来自 30 余家机构的两百位学者围绕人工智能时代的古籍整理与再生利用展开研讨。</p><div class="ds-press-release__media"><span class="ds-press-release__tag">人民日报客户端</span><span class="ds-press-release__tag">光明日报</span></div></article>
```

## React 示例

```tsx
<PressReleaseCard title="2026 古籍数字化前沿论坛在京举办" lead="来自 30 余家机构的两百位学者参会研讨。" media={["人民日报客户端", "光明日报"]} state="published" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 导语截断
- [ ] 媒体徽标
- [ ] 状态文字
- [ ] 全文查看
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
