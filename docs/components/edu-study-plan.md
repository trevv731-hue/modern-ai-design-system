# 学习计划日历

[返回组件目录](../README.md) · 教育 / 学习 · v3 新增

## 目的与边界

以周视图安排每日学习任务并打卡。

## 结构

- 周头 (ds-study-plan__head)
- 日期格 (ds-study-plan__day)
- 任务点 (ds-study-plan__dots)
- 完成态

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

日期格可聚焦查看当日任务；回车打卡；任务点有可读文本。

## 使用细则

- 今日有视觉强调但不仅靠颜色。
- 连续打卡有鼓励文案。
- 补签入口在有未完成日时出现。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-study-plan"><div class="ds-study-plan__head" aria-hidden="true"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div><div class="ds-study-plan__grid"><div class="ds-study-plan__day is-done"><strong>13</strong><span class="ds-study-plan__dots" aria-label="2 个任务已完成">••</span></div><div class="ds-study-plan__day is-done"><strong>14</strong><span class="ds-study-plan__dots" aria-label="1 个任务已完成">•</span></div><div class="ds-study-plan__day is-today" aria-current="date"><strong>15</strong><span class="ds-study-plan__dots" aria-label="2 个任务待完成">○○</span></div><div class="ds-study-plan__day"><strong>16</strong><span class="ds-study-plan__dots" aria-label="计划 2 个任务">··</span></div><div class="ds-study-plan__day"><strong>17</strong><span class="ds-study-plan__dots" aria-label="计划 1 个任务">·</span></div><div class="ds-study-plan__day"><strong>18</strong><span class="ds-study-plan__dots" aria-label="休息日">–</span></div><div class="ds-study-plan__day"><strong>19</strong><span class="ds-study-plan__dots" aria-label="休息日">–</span></div></div><p class="ds-study-plan__streak">已连续打卡 2 天，今日还有 2 个任务</p></div>
```

## React 示例

```tsx
<StudyPlanCalendar week={[{ date: 13, tasks: 2, done: true }, { date: 15, tasks: 2, done: false, today: true }]} streak={2} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 今日强调不仅靠颜色
- [ ] 连续打卡鼓励文案
- [ ] 有未完成才显示补签
- [ ] 任务点有可读文本
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
