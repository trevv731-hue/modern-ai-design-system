# 连续学习打卡

[返回组件目录](../README.md) · 教育 / 学习 · v3 新增

## 目的与边界

展示连续学习天数与本周打卡情况，激励持续学习。

## 结构

- 连续天数 (ds-study-streak__count)
- 周打卡格 (ds-study-streak__week)
- 今日状态
- 补签入口

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

今日打卡按钮可聚焦；连续天数变化播报。

## 使用细则

- 断签时给出挽回提示而非惩罚感。
- 本周格子含日期与状态文本。
- 里程碑天数有庆祝动效。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-study-streak"><div class="ds-study-streak__count"><strong>12</strong><span>连续学习天数</span></div><div class="ds-study-streak__week" role="group" aria-label="本周打卡"><span class="is-done" aria-label="周一已打卡">一</span><span class="is-done" aria-label="周二已打卡">二</span><span class="is-done" aria-label="周三已打卡">三</span><span class="is-today" aria-label="今日未打卡">四</span><span aria-label="周五">五</span><span aria-label="周六">六</span><span aria-label="周日">日</span></div><button type="button" class="ds-study-streak__check">今日打卡</button><p class="ds-study-streak__hint">再坚持 3 天解锁 15 天徽章</p></div>
```

## React 示例

```tsx
<StudyStreakMeter streak={12} week={[true, true, true, false]} milestone={15} onCheckIn={checkIn} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 断签给挽回提示
- [ ] 周格子有状态文本
- [ ] 里程碑庆祝动效
- [ ] 打卡按钮可聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
