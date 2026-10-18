# 周日视图条

[返回组件目录](../README.md) · 日程 · v3 新增

## 目的与边界

横向展示一周日期与当日安排数量，供快速切换日期。

## 结构

- 日期项 (ds-week-strip__day)
- 星期缩写
- 日期数字
- 事件计数
- 今日态

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

左右方向键切换日期；当前日用 aria-current 标注。

## 使用细则

- 选中日有文字或图标标识。
- 事件计数为零时显示为空或不显示。
- 支持滑动时日期项保持 44px 触控高度。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-week-strip" role="tablist" aria-label="本周"><button type="button" class="ds-week-strip__day" role="tab" aria-selected="false">周一<strong>12</strong></button><button type="button" class="ds-week-strip__day" role="tab" aria-selected="false">周二<strong>13</strong></button><button type="button" class="ds-week-strip__day is-today" role="tab" aria-selected="true" aria-current="date">今天<strong>18</strong><small>3 项安排</small></button><button type="button" class="ds-week-strip__day" role="tab" aria-selected="false">周四<strong>19</strong></button></div>
```

## React 示例

```tsx
<WeekStrip days={[{ label: "今天", date: 18, count: 3, today: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 当前日 aria-current
- [ ] 选中态有文字标识
- [ ] 触控高度不小于 44px
- [ ] 方向键可切换
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
