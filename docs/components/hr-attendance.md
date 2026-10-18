# 考勤月历

[返回组件目录](../README.md) · 人力资源 / 招聘 · v3 新增

## 目的与边界

以月历网格展示每日工时与异常考勤状态。

## 结构

- 日期格 (ds-attendance__day)
- 工时 (ds-attendance__hours)
- 异常标记 (ds-attendance__flag)
- 汇总 (ds-attendance__sum)
- 图例

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

日期格可聚焦查看打卡明细；图例说明颜色含义。

## 使用细则

- 异常日用颜色与图标双提示。
- 休息日与工作日区分。
- 汇总给出加班与迟到天数。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-attendance" aria-label="2026 年 10 月考勤"><div class="ds-attendance__sum"><span>总工时 <strong>168h</strong></span><span>迟到 <strong>1 天</strong></span><span>加班 <strong>6h</strong></span></div><div class="ds-attendance__grid"><span class="ds-attendance__day is-rest" aria-label="10 月 1 日 休息"><b>1</b></span><span class="ds-attendance__day is-ok" tabindex="0" aria-label="10 月 2 日 工作 9.2 小时"><b>2</b><em class="ds-attendance__hours">9.2</em></span><span class="ds-attendance__day is-late" tabindex="0" aria-label="10 月 3 日 迟到 22 分钟"><b>3</b><em class="ds-attendance__flag">迟</em></span><span class="ds-attendance__day is-leave" tabindex="0" aria-label="10 月 4 日 请假"><b>4</b><em class="ds-attendance__flag">假</em></span></div><p class="ds-attendance__legend">■ 正常 ■ 迟到 ■ 请假 ■ 休息</p></section>
```

## React 示例

```tsx
<AttendanceTimesheet month="2026-10" days={[{ date: 2, hours: 9.2, state: "ok" }, { date: 3, state: "late", note: "迟到 22 分钟" }]} totalHours={168} lateDays={1} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 异常颜色图标双提示
- [ ] 休息与工作区分
- [ ] 汇总加班迟到
- [ ] 日期格可聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
