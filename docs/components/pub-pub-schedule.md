# 出版排期行

[返回组件目录](../README.md) · 媒体 / 出版 · v3 新增

## 目的与边界

展示一本书各出版环节的计划日期与责任人。

## 结构

- 环节 (ds-pub-schedule__stage)
- 计划日期 (ds-pub-schedule__date)
- 责任人 (ds-pub-schedule__owner)
- 状态 (ds-pub-schedule__state)

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

行可聚焦查看交付物；延期环节以 alert 语义播报。

## 使用细则

- 状态三态：进行中、已完成、延期。
- 日期等宽展示。
- 责任人文字标注。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pub-schedule is-delayed" tabindex="0" role="button" aria-label="出版排期，三审三校，计划 2026-06-15，责任编辑 王琳，延期"><span class="ds-pub-schedule__stage">三审三校</span><span class="ds-pub-schedule__date">2026-06-15</span><span class="ds-pub-schedule__owner">责任编辑 王琳</span><span class="ds-pub-schedule__state is-delayed">延期</span></div>
```

## React 示例

```tsx
<PublicationScheduleRow stage="三审三校" date="2026-06-15" owner="责任编辑 王琳" state="delayed" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态状态
- [ ] 日期等宽
- [ ] 责任人标注
- [ ] 延期播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
