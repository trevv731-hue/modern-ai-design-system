# 物流轨迹时间线

[返回组件目录](../README.md) · 物流 / 供应链 · v3 新增

## 目的与边界

按时间线展示包裹流转节点与当前位置。

## 结构

- 节点 (ds-track-timeline__node)
- 时间 (ds-track-timeline__time)
- 状态描述
- 当前节点
- 预计送达

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

节点可聚焦朗读；当前节点 aria-current。

## 使用细则

- 最新节点置顶并高亮。
- 异常节点红色并给客服入口。
- 预计时间随路况更新。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-track-timeline"><p class="ds-track-timeline__eta">预计今天 20:00 前送达</p><ol><li class="is-current" aria-current="step"><span class="ds-track-timeline__time">今天 14:32</span><div class="ds-track-timeline__body"><strong>到达北京朝阳集散中心</strong><span>正在分拣，即将发往网点</span></div></li><li><span class="ds-track-timeline__time">今天 09:15</span><div class="ds-track-timeline__body"><strong>离开杭州余杭仓</strong><span>已发往北京方向</span></div></li><li><span class="ds-track-timeline__time">昨天 18:20</span><div class="ds-track-timeline__body"><strong>已揽收</strong><span>快递员 王师傅 · 187****2210</span></div></li></ol></div>
```

## React 示例

```tsx
<TrackingTimeline eta="预计今天 20:00 前送达" nodes={[{ time: "今天 14:32", title: "到达北京朝阳集散中心", note: "正在分拣", current: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 最新节点置顶高亮
- [ ] 异常节点给客服入口
- [ ] 预计时间随路况更新
- [ ] 当前节点 aria-current
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
