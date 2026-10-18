# 议程行

[返回组件目录](../README.md) · 活动 / 票务 · v3 新增

## 目的与边界

展示一场议程的时间、议题、讲者与所在会场。

## 结构

- 时间段 (ds-agenda-row__time)
- 议题与讲者 (ds-agenda-row__body)
- 会场 (ds-agenda-row__room)
- 标签 (ds-agenda-row__tags)
- 收藏按钮

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

行可聚焦查看详情；收藏按钮可达并播报。

## 使用细则

- 已开始的议程置灰。
- 收藏的议程有标记。
- 标签按议题类型着色。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-agenda-row" tabindex="0" role="button" aria-label="议程，10:30 至 11:10，设计系统的工程化实践，讲者王莉，主会场，前端工程"><span class="ds-agenda-row__time">10:30<br>11:10</span><div class="ds-agenda-row__body"><strong>设计系统的工程化实践</strong><span>王莉 · 某科技</span></div><span class="ds-agenda-row__room">主会场</span><div class="ds-agenda-row__tags"><span>前端工程</span></div><button type="button" aria-label="收藏议程">☆</button></div>
```

## React 示例

```tsx
<AgendaSessionRow time="10:30-11:10" title="设计系统的工程化实践" speaker="王莉" room="主会场" track="前端工程" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 已开始议程置灰
- [ ] 收藏有标记
- [ ] 标签按类型着色
- [ ] 行可聚焦看详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
