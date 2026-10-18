# 日程事件胶囊

[返回组件目录](../README.md) · 日程 · v3 新增

## 目的与边界

在日历网格中呈现单个事件的时间、标题与冲突状态。

## 结构

- 时间前缀 (ds-event-chip__time)
- 标题
- 日历色条
- 冲突标记

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

胶囊可聚焦；Enter 打开详情；冲突事件播报说明。

## 使用细则

- 不同日历用色条加图例区分，不只用颜色。
- 跨天事件在两端显示延续箭头。
- 冲突事件并列展示而非覆盖隐藏。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<button type="button" class="ds-event-chip is-conflict"><span class="ds-event-chip__time">14:00</span>设计评审<em>与站会冲突</em></button>
```

## React 示例

```tsx
<EventChip time="14:00" title="设计评审" conflict="与站会冲突" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 日历色条加图例
- [ ] 跨天事件有延续标识
- [ ] 冲突事件并列展示
- [ ] 胶囊可键盘打开
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
