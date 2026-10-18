# 可预约时段

[返回组件目录](../README.md) · 日程 · v3 新增

## 目的与边界

展示可预约的时间段并引导用户选择，常用于会议与面试安排。

## 结构

- 时段项 (ds-avail-slot)
- 开始时间
- 时长
- 已选态
- 不可用态

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

方向键在时段网格中移动；Enter 选择。

## 使用细则

- 不可用时段禁用并说明原因。
- 已选时段有文字标识。
- 时区变化后时段整体平移并提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-avail-slot" role="group" aria-label="可预约时段"><button type="button">09:00<span>30 分钟</span></button><button type="button" class="is-chosen" aria-pressed="true">10:30<span>30 分钟</span></button><button type="button" disabled>13:00<span>已被预约</span></button><button type="button">15:00<span>30 分钟</span></button></div>
```

## React 示例

```tsx
<AvailabilitySlot slots={[{ time: "09:00", minutes: 30 }, { time: "10:30", minutes: 30, chosen: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 不可用时段禁用并说明
- [ ] 已选时段有文字标识
- [ ] 时区变化整体平移
- [ ] 网格方向键导航
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
