# 核保问题行

[返回组件目录](../README.md) · 保险 / 理赔 · v3 新增

## 目的与边界

展示一条健康告知问题及其回答与核保结论。

## 结构

- 问题 (ds-uw-question__question)
- 回答 (ds-uw-question__answer)
- 结论 (ds-uw-question__state)

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

行可聚焦展开医学详情；需体检结论以 status 语义播报。

## 使用细则

- 标准体绿色、需体检黄色、拒保红色。
- 是否型回答用明确文字。
- 拒保行提供转投建议入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-uw-question is-medical" tabindex="0" role="button" aria-label="健康告知，近两年内是否住过院，回答 是，结论 需体检"><strong class="ds-uw-question__question">近两年内是否住过院</strong><span class="ds-uw-question__answer">是</span><span class="ds-uw-question__state is-medical">需体检</span></div>
```

## React 示例

```tsx
<UnderwritingQuestionRow question="近两年内是否住过院" answer="是" state="medical" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态结论
- [ ] 回答文字明确
- [ ] 可展开详情
- [ ] 转投建议
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
