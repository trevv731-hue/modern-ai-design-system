# 议程反馈卡

[返回组件目录](../README.md) · 活动 / 票务 · v3 新增

## 目的与边界

收集参会者对单场议程的评分与文字反馈。

## 结构

- 议题名 (ds-session-feedback__title)
- 星级评分 (ds-session-feedback__stars)
- 标签选择 (ds-session-feedback__tags)
- 评论输入
- 提交按钮

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

星级使用 radio 语义；标签可多选；提交后显示感谢状态。

## 使用细则

- 默认五星满分可改。
- 标签一键选择常用评价。
- 提交后不可重复提交。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-session-feedback" aria-label="议程反馈，设计系统的工程化实践"><h4 class="ds-session-feedback__title">设计系统的工程化实践</h4><div class="ds-session-feedback__stars" role="radiogroup" aria-label="评分"><button type="button" role="radio" aria-checked="true">★</button><button type="button" role="radio" aria-checked="true">★</button><button type="button" role="radio" aria-checked="true">★</button><button type="button" role="radio" aria-checked="true">★</button><button type="button" role="radio" aria-checked="false">★</button></div><div class="ds-session-feedback__tags"><button type="button" class="is-active">内容实用</button><button type="button">节奏偏快</button><button type="button">案例丰富</button></div><button type="button" class="is-primary">提交反馈</button></section>
```

## React 示例

```tsx
<SessionFeedbackCard title="设计系统的工程化实践" speaker="王莉" rating={4} tags={["内容实用"]} onSubmit={submit} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 星级 radio 语义
- [ ] 标签多选
- [ ] 提交后禁重复
- [ ] 提交显感谢状态
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
