# 月视图网格

[返回组件目录](../README.md) · 日程 · v3 新增

## 目的与边界

以月为粒度展示日期与当日事件密度，支持快速定位与跳转。

## 结构

- 星期表头
- 日期单元格 (ds-month-grid__cell)
- 今日标记
- 事件密度点

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

方向键在网格内移动；Enter 选中日期；PageUp/PageDown 切换月份。

## 使用细则

- 今日单元格有文字标记，不只靠背景色。
- 非本月日期置灰但保持可读。
- 密度点最多 3 个，超出用“+n”表示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-month-grid" role="grid" aria-label="2026 年 10 月"><div class="ds-month-grid__head"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div><div class="ds-month-grid__row"><span class="ds-month-grid__cell is-out">28</span><span class="ds-month-grid__cell is-out">29</span><span class="ds-month-grid__cell is-out">30</span><span class="ds-month-grid__cell">1</span><span class="ds-month-grid__cell">2</span><span class="ds-month-grid__cell">3</span><span class="ds-month-grid__cell">4</span></div><div class="ds-month-grid__row"><span class="ds-month-grid__cell">5</span><span class="ds-month-grid__cell">6</span><span class="ds-month-grid__cell">7</span><span class="ds-month-grid__cell">8</span><span class="ds-month-grid__cell">9</span><span class="ds-month-grid__cell">10</span><span class="ds-month-grid__cell">11</span></div><div class="ds-month-grid__row"><span class="ds-month-grid__cell">12</span><span class="ds-month-grid__cell">13</span><span class="ds-month-grid__cell">14</span><span class="ds-month-grid__cell">15</span><span class="ds-month-grid__cell">16</span><span class="ds-month-grid__cell">17</span><span class="ds-month-grid__cell is-today" aria-current="date">18<i class="ds-month-grid__dots" aria-hidden="true"></i><i class="ds-month-grid__dots"></i></span></div></div>
```

## React 示例

```tsx
<MonthGrid month="2026-10" today={18} events={{ 18: 2, 22: 4 }} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 今日有文字标记
- [ ] 非本月日期置灰可读
- [ ] 密度点超量显示 +n
- [ ] 方向键网格导航
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
