# AI 智能引用源与事实核查卡片

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

现代 AI 搜索（Perplexity、ChatGPT Search）与 RAG 架构事实溯源卡片；展示溯源网站 Favicon、域名、匹配可信度百分比（98% Match）、引用原文摘要抽屉，以及安全外部链接跳转把手。

## 结构

- 卡片容器与头部信息 (.ds-citation-card, .ds-citation-card__header)
- 引用序号与站点图标 (.ds-citation-card__index, .ds-citation-card__favicon)
- 网站标题与纯净域名 (.ds-citation-card__title, .ds-citation-card__domain)
- 置信度匹配度药丸 (.ds-citation-card__match)
- 原文摘录引用块 (.ds-citation-card__snippet)
- 外部数据源跳转链接 (.ds-citation-card__link)

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

Tab 聚焦卡片或跳转链接；Enter 新标签页安全打开外部溯源网页（带 rel="noopener noreferrer"）。

## 使用细则

- 域名必须清洗为纯净 host，防止钓鱼欺诈。
- 置信度指标需带清晰文本标签，禁止单用色阶代表匹配质量。
- 引用卡片可紧凑排列为数字气泡，也可展开为上下文卡片。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-citation-card" role="article" aria-label="AI 事实引用源：developer.apple.com，置信度 98%，相关度极高"><div class="ds-citation-card__header"><span class="ds-citation-card__index">1</span><span class="ds-citation-card__favicon"></span><div class="ds-citation-card__meta"><span class="ds-citation-card__title">Human Interface Guidelines - Materials</span><span class="ds-citation-card__domain">developer.apple.com</span></div><span class="ds-citation-card__match">98% Match</span></div><blockquote class="ds-citation-card__snippet">“Materials create a visual hierarchy by establishing a relationship between background and foreground elements...”</blockquote><a href="https://developer.apple.com" target="_blank" rel="noopener noreferrer" class="ds-citation-card__link" aria-label="查看 Apple 开发文档原始出处"><span>查看原始网页</span><span aria-hidden="true">↗</span></a></div>
```

## React 示例

```tsx
<AICitationSourceCard index={1} title="Human Interface Guidelines - Materials" domain="developer.apple.com" matchRate="98%" snippet="Materials create a visual hierarchy..." url="https://developer.apple.com" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 引用序号与域名一目了然
- [ ] 外部链接带 target="_blank" 与 rel="noopener noreferrer"
- [ ] 引用摘要排版规范，对比度合格
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
