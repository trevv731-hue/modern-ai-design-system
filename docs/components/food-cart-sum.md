# 购物车摘要

[返回组件目录](../README.md) · 餐饮 / 美食 · v3 新增

## 目的与边界

汇总已选菜品、小计、优惠与起送差额。

## 结构

- 菜品行 (ds-cart-sum__line)
- 数量步进
- 小计 (ds-cart-sum__subtotal)
- 优惠 (ds-cart-sum__discount)
- 起送提示

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

数量步进可键盘操作；删除有撤销提示。

## 使用细则

- 未达起送量时给差额提示。
- 优惠自动应用并展示明细。
- 清空购物车需确认。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cart-sum"><div class="ds-cart-sum__line"><strong>宫保鸡丁</strong><span class="ds-cart-sum__qty">×2</span><span class="ds-cart-sum__price">¥76</span></div><div class="ds-cart-sum__line"><strong>米饭</strong><span class="ds-cart-sum__qty">×1</span><span class="ds-cart-sum__price">¥3</span></div><div class="ds-cart-sum__foot"><span class="ds-cart-sum__subtotal">小计 ¥79</span><span class="ds-cart-sum__discount">新客立减 ¥5</span></div><p class="ds-cart-sum__hint">再点 ¥21 起送</p></div>
```

## React 示例

```tsx
<CartSummaryPanel lines={[{ name: "宫保鸡丁", qty: 2, price: 76 }]} subtotal={79} discount={5} minOrder={100} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 未达起送给差额提示
- [ ] 优惠自动应用展示明细
- [ ] 清空需确认
- [ ] 删除可撤销
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
