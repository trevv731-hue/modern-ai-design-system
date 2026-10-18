# 线边仓料盒

[返回组件目录](../README.md) · 制造 / 工业 · v3 新增

## 目的与边界

展示线边仓料盒的物料余量与补料预警。

## 结构

- 料盒号 (ds-bin-card__code)
- 物料 (ds-bin-card__material)
- 数量 (ds-bin-card__qty)
- 水位条 (ds-bin-card__level)
- 补料按钮

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

卡片可聚焦申请补料；预警状态有文字不只颜色。

## 使用细则

- 低于安全库存黄色。
- 缺料红色并停线风险提示。
- 水位条按容量比例。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-bin-card is-low" tabindex="0" role="button" aria-label="料盒 B-12，螺栓 M8 乘 20，当前 120 个，安全库存 200，库存偏低"><div class="ds-bin-card__head"><strong class="ds-bin-card__code">B-12</strong><span class="ds-bin-card__state is-low">偏低</span></div><p class="ds-bin-card__material">螺栓 M8×20</p><div class="ds-bin-card__level" aria-hidden="true"><i style="width:30%"></i></div><p class="ds-bin-card__qty">120 / 400 · 安全线 200</p><button type="button">申请补料</button></article>
```

## React 示例

```tsx
<InventoryBinCard code="B-12" material="螺栓 M8×20" qty={120} capacity={400} safety={200} unit="个" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 低于安全库存黄色
- [ ] 缺料红色停线提示
- [ ] 水位条按容量比例
- [ ] 可聚焦申请补料
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
