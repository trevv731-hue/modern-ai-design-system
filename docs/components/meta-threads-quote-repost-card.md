# Meta Threads 嵌套引用转发卡片

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 Meta Threads 与 X (Twitter) 经典的引用转发卡片（Quote Repost），外层为转发展开见解，内嵌带边框的原始作者帖子。

## 结构

- 卡片总容器 (ds-quote-post)
- 转发作者信息与时间 (ds-quote-post__author)
- 转发评论正文 (ds-quote-post__text)
- 内嵌被引用帖子容器 (ds-quote-post__quote-box)
- 原始作者标头 (ds-quote-post__quote-header)
- 原始正文内容 (ds-quote-post__quote-body)

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

Tab 键在外层转发与内嵌被引用帖之间导航；Enter 打开原始讨论话题。

## 使用细则

- 内嵌帖子通过 1px 浅色微描边和弱化底色与外层评论形成清晰的嵌套层级。
- 两层均完整保留作者 ID、相对发布时间戳与认证徽章。
- 在深色模式下内嵌卡片底色微调，保证对比度始终满足 WCAG AA。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-quote-post" role="article" aria-label="Threads 引用帖子"><div class="ds-quote-post__author"><span>michael_chen</span><span style="font-weight:400;color:var(--ds-muted);font-size:11px">· 3h</span></div><div class="ds-quote-post__text">The multi-platform design consistency across macOS, iOS, Android, and AI workflows is insane!</div><div class="ds-quote-post__quote-box"><div class="ds-quote-post__quote-header"><span>design_system</span><span aria-label="已认证">☑️</span><span style="font-weight:400;color:var(--ds-muted);font-size:11px">· 5h</span></div><div class="ds-quote-post__quote-body">Modern AI Design System v3 has reached 332 components with zero motion lint errors!</div></div></div>
```

## React 示例

```tsx
<MetaThreadsQuoteRepostCard author="michael_chen" text="Amazing work!" quotedAuthor="design_system" quotedText="332 components live!" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 两层文字排版层次分明，引用卡片无溢出
- [ ] 内嵌卡片可独立接收焦点并支持键盘导航
- [ ] 屏幕阅读器准确区分“转发人说”与“被引用帖子内容”
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
