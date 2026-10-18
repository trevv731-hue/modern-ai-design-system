# 灌溉计划行

[返回组件目录](../README.md) · 智慧农业 · v3 新增

## 目的与边界

展示一个轮灌组的计划时间、灌溉水量与执行状态。

## 结构

- 轮灌组 (ds-irrigation-row__group)
- 计划时间 (ds-irrigation-row__time)
- 水量 (ds-irrigation-row__water)
- 状态 (ds-irrigation-row__state)

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

行可聚焦手动启停；执行失败以 alert 语义播报。

## 使用细则

- 已完成绿色、计划中黄色、执行中蓝色、失败红色。
- 水量以立方米等宽展示。
- 执行中状态有流动动画并支持降级。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-irrigation-row is-running" tabindex="0" role="button" aria-label="轮灌组 B-2，计划 14:00-15:30，水量 180 立方米，执行中"><strong class="ds-irrigation-row__group">B-2</strong><span class="ds-irrigation-row__time">14:00-15:30</span><span class="ds-irrigation-row__water">180 m³</span><span class="ds-irrigation-row__state is-running">执行中</span></div>
```

## React 示例

```tsx
<IrrigationScheduleRow group="B-2" time="14:00-15:30" water={180} state="running" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态配色
- [ ] 水量等宽
- [ ] 执行流动动画
- [ ] reduced-motion 降级
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
