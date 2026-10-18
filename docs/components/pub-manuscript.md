# 稿件投稿卡

[返回组件目录](../README.md) · 媒体 / 出版 · v3 新增

## 目的与边界

展示一篇投稿稿件的标题、作者与审稿状态。

## 结构

- 标题 (ds-manuscript__title)
- 作者 (ds-manuscript__author)
- 类型 (ds-manuscript__type)
- 状态 (ds-manuscript__state)
- 提交时间 (ds-manuscript__time)

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

卡片可聚焦查看全文；退修状态以 alert 语义播报。

## 使用细则

- 状态四态：新稿、审中、退修、录用。
- 稿件类型以徽标展示。
- 提交时间等宽展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-manuscript is-revise" tabindex="0" role="button" aria-label="稿件，基于大语言模型的古籍数字化校对方法研究，作者 陈明，研究论文，退修，提交于 2026-05-28"><div class="ds-manuscript__head"><strong class="ds-manuscript__title">基于大语言模型的古籍数字化校对方法研究</strong><span class="ds-manuscript__state is-revise">退修</span></div><div class="ds-manuscript__meta"><span class="ds-manuscript__type">研究论文</span><span class="ds-manuscript__author">陈明</span><span class="ds-manuscript__time">2026-05-28</span></div></article>
```

## React 示例

```tsx
<ManuscriptSubmissionCard title="基于大语言模型的古籍数字化校对方法研究" author="陈明" type="研究论文" state="revise" time="2026-05-28" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态状态
- [ ] 类型徽标
- [ ] 时间等宽
- [ ] 退修补救
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
