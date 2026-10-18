# 行程时间线

[返回组件目录](../README.md) · 出行 / 交通 · v3 新增

## 目的与边界

按时间线串联多段行程节点，支持状态与详情入口。

## 结构

- 节点 (ds-itinerary__node)
- 时间 (ds-itinerary__time)
- 类型图标 (ds-itinerary__icon)
- 标题与地点
- 状态 (ds-itinerary__state)

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

节点可聚焦展开详情；已完成节点折叠展示。

## 使用细则

- 进行中节点有视觉锚点。
- 节点时间冲突时给出提示。
- 支持按日分组与导出。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<ol class="ds-itinerary"><li class="is-done"><span class="ds-itinerary__time">10-17</span><span class="ds-itinerary__icon is-flight" aria-hidden="true">✈️</span><div class="ds-itinerary__body"><strong>去程航班 CA1234</strong><span>北京 → 上海 · 已完成</span></div><span class="ds-itinerary__state is-done">已完成</span></li><li class="is-current" aria-current="step"><span class="ds-itinerary__time">10-18</span><span class="ds-itinerary__icon is-hotel" aria-hidden="true">🏨</span><div class="ds-itinerary__body"><strong>入住外滩酒店</strong><span>14:00 后入住 · 2 晚</span></div><span class="ds-itinerary__state is-current">进行中</span></li><li><span class="ds-itinerary__time">10-20</span><span class="ds-itinerary__icon is-train" aria-hidden="true">🚄</span><div class="ds-itinerary__body"><strong>返程高铁 G8</strong><span>上海虹桥 → 北京南</span></div><span class="ds-itinerary__state is-todo">待出发</span></li></ol>
```

## React 示例

```tsx
<ItineraryTimeline nodes={[{ date: "10-17", icon: "flight", title: "去程航班 CA1234", note: "北京 → 上海 · 已完成", state: "done" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 进行中节点视觉锚点
- [ ] 时间冲突给提示
- [ ] 支持按日分组导出
- [ ] 已完成节点折叠
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
