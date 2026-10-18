# 库存预警行

[返回组件目录](../README.md) · 物流 / 供应链 · v3 新增

## 目的与边界

提示低于安全库存的 SKU 并给出补货建议。

## 结构

- SKU 与名称 (ds-inv-alert__sku)
- 当前库存
- 安全线
- 缺口 (ds-inv-alert__gap)
- 建议动作

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

行可聚焦创建补货单；等级有文字不只颜色。

## 使用细则

- 缺货与低库存分级提示。
- 建议补货量按日均销量估算。
- 支持一键创建采购单。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-inv-alert is-low" tabindex="0" role="button" aria-label="库存预警：SKU-8842 蓝牙音箱，当前 12，安全线 40，缺口 28，建议补货 84"><span class="ds-inv-alert__sku">SKU-8842</span><div class="ds-inv-alert__body"><strong>蓝牙音箱 白色</strong><span>日均销 12 · 供应商 声学科技</span></div><span class="ds-inv-alert__nums">12 / 40</span><span class="ds-inv-alert__gap">缺 28</span><button type="button">补货</button></div>
```

## React 示例

```tsx
<InventoryAlertRow sku="SKU-8842" name="蓝牙音箱 白色" stock={12} safety={40} dailySales={12} supplier="声学科技" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 缺货低库存分级
- [ ] 建议量按日均估算
- [ ] 一键创建采购单
- [ ] 等级有文字标签
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
