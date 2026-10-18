# 时间段网格

[返回组件目录](../README.md) · 日程 · v3 新增

## 目的与边界

以小时为粒度展示一天的时间占用，支持拖拽创建与调整事件。

## 结构

- 时间轴 (ds-slot-grid__axis)
- 网格线
- 已占用块
- 当前时间线
- 空闲块

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

Tab 遍历事件块；方向键移动焦点；Delete 删除选中事件。

## 使用细则

- 当前时间线常驻可视区。
- 占用块高度与时长成正比。
- 拖拽创建时给出对齐反馈。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-slot-grid" role="application" aria-label="日视图"><div class="ds-slot-grid__axis"><span>09</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span></div><div class="ds-slot-grid__body"><div class="ds-slot-grid__busy" style="top:12%;height:8%">站会</div><div class="ds-slot-grid__busy" style="top:58%;height:16%">设计评审</div><div class="ds-slot-grid__now" style="top:40%"></div></div></div>
```

## React 示例

```tsx
<TimeSlotGrid events={[{ start: "09:30", end: "10:00", title: "站会" }, { start: "14:00", end: "16:00", title: "设计评审" }]} now="12:00" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 当前时间线常驻
- [ ] 块高与时长成正比
- [ ] 拖拽有对齐反馈
- [ ] Delete 可删除选中事件
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
