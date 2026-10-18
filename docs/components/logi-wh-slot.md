# 库位格

[返回组件目录](../README.md) · 物流 / 供应链 · v3 新增

## 目的与边界

以网格展示仓库库位的占用与锁定状态。

## 结构

- 库位码 (ds-wh-slot__code)
- 占用条 (ds-wh-slot__fill)
- 状态 (ds-wh-slot__state)
- SKU 摘要

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

库位可聚焦查看库存明细；锁定库位禁用选择。

## 使用细则

- 占用率用容量条与百分比双表示。
- 锁定与盘点中状态区分。
- 支持按通道与排筛选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-wh-slot is-occupied" tabindex="0" role="button" aria-label="库位 A-12-03，占用 72%，存放饮料类 4 个 SKU"><div class="ds-wh-slot__head"><span class="ds-wh-slot__code">A-12-03</span><span class="ds-wh-slot__state is-busy">占用</span></div><div class="ds-wh-slot__fill" aria-hidden="true"><i style="width:72%"></i></div><p class="ds-wh-slot__meta">72% · 饮料类 × 4 SKU</p></div>
```

## React 示例

```tsx
<WarehouseSlot code="A-12-03" occupancy={72} state="busy" skuCount={4} category="饮料类" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 占用率条与百分比双表示
- [ ] 锁定与盘点状态区分
- [ ] 按通道排筛选
- [ ] 库位可聚焦看明细
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
