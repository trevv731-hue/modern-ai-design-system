# 运动摘要卡

[返回组件目录](../README.md) · 健康 / 运动 · v3 新增

## 目的与边界

汇总单次运动的类型、时长、距离与心率区间。

## 结构

- 类型图标 (ds-workout-sum__icon)
- 时长
- 距离
- 配速
- 心率区间 (ds-workout-sum__zones)

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

卡片可聚焦查看分段数据。

## 使用细则

- 心率区间按最大心率百分比分段。
- 无距离类运动隐藏距离行。
- 支持分享与保存记录。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-workout-sum" tabindex="0" role="button" aria-label="跑步记录：42 分钟，5.2 公里，平均配速 8 分 04 秒"><span class="ds-workout-sum__icon" aria-hidden="true">🏃</span><div class="ds-workout-sum__body"><strong>户外跑步</strong><p class="ds-workout-sum__stats">42 分钟 · 5.2 公里 · 配速 8'04"</p><div class="ds-workout-sum__zones" aria-hidden="true"><span class="is-z1" style="width:18%"></span><span class="is-z2" style="width:42%"></span><span class="is-z3" style="width:28%"></span><span class="is-z4" style="width:12%"></span></div><p class="ds-workout-sum__hr">平均心率 146 · 峰值 168</p></div></article>
```

## React 示例

```tsx
<WorkoutSummaryCard type="户外跑步" minutes={42} distance="5.2 公里" pace="8分04秒" avgHr={146} peakHr={168} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 心率区间按最大心率分段
- [ ] 无距离类隐藏距离行
- [ ] 支持分享保存
- [ ] 卡片可聚焦看分段
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
