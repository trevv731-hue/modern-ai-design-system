# 商品卡

[返回组件目录](../README.md) · 电商 · v3 新增

## 目的与边界

在列表与推荐位中展示商品核心信息，并用明确的主行动按钮促成加购。

## 结构

- 封面区 (ds-product-card__thumb)
- 标题
- 评价摘要
- 现价与原价
- 主行动按钮

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

Tab 聚焦加购按钮；Enter 或 Space 触发。

## 使用细则

- 现价与原价并排，划线价用删除线且不单独依赖颜色传达折扣。
- 评价数附在评分旁，不做无依据的好评标注。
- 卡片整体可点击时需保留按钮作为独立可聚焦行动点。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-product-card"><span class="ds-product-card__thumb" aria-hidden="true">⌚</span><div class="ds-product-card__body"><h4>钛金属运动表带</h4><p class="ds-product-card__meta">2,481 条评价 · 4.8 分</p><p class="ds-product-card__price">¥899<span class="ds-product-card__was">¥1,099</span></p></div><button type="button">加入购物车</button></div>
```

## React 示例

```tsx
<ProductCard title="钛金属运动表带" price="¥899" was="¥1,099" rating={4.8} onAdd={addToCart} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 现价与原价并排且划线价不依赖颜色
- [ ] 评价摘要与评分同现
- [ ] 加购按钮独立可聚焦
- [ ] 触控目标不小于 40px
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
