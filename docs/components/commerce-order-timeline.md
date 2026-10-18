# 订单状态时间线

[返回组件目录](../README.md) · 电商 · v3 新增

## 目的与边界

按时间顺序呈现订单履约节点，突出当前所处状态。

## 结构

- 节点序列 (ds-order-timeline)
- 已完成节点
- 当前节点
- 待发生节点
- 时间戳

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

列表语义朗读；当前节点通过文字而非仅图标表达。

## 使用细则

- 每个节点带时间或预计时间。
- 当前节点明确标注“进行中”。
- 延误时主动说明原因与新预计时间。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<ol class="ds-order-timeline"><li class="is-done"><strong>已下单</strong><time>10-12 09:30</time></li><li class="is-done"><strong>已发货</strong><time>10-12 18:05</time></li><li class="is-current"><strong>运输中</strong><time>预计 10-14 送达</time></li><li><strong>已签收</strong><time>待完成</time></li></ol>
```

## React 示例

```tsx
<OrderTimeline steps={[{ label: "已下单", time: "10-12 09:30", state: "done" }, { label: "运输中", time: "预计 10-14 送达", state: "current" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 节点带时间或预计时间
- [ ] 当前节点有文字标注
- [ ] 延误说明原因与新时间
- [ ] 列表语义可朗读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
