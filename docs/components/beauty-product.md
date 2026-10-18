# 美妆商品卡

[返回组件目录](../README.md) · 美妆 / 美容 · v3 新增

## 目的与边界

展示一款美妆商品的色号、价格与适用肤质。

## 结构

- 商品名 (ds-beauty__name)
- 色号 (ds-beauty__shade)
- 价格 (ds-beauty__price)
- 肤质标签 (ds-beauty__tag)
- 试用装 (ds-beauty__sample)

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

卡片可聚焦加入购物车；无送礼装时文字标注。

## 使用细则

- 价格红色等宽。
- 色号以色块加文字展示。
- 肤质标签圆角徽标。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-beauty-product" tabindex="0" role="button" aria-label="美妆商品，绒雾唇釉，色号 M07 干玫瑰，价格 189 元，适用肤质 所有肤质，赠 2 克旅行装"><div class="ds-beauty-product__head"><strong class="ds-beauty-product__name">绒雾唇釉</strong><span class="ds-beauty-product__sample">赠旅行装</span></div><div class="ds-beauty-product__shade"><span class="ds-beauty-product__chip" style="background:#c1666b" aria-hidden="true"></span><span class="ds-beauty-product__code">M07 · 干玫瑰</span></div><div class="ds-beauty-product__foot"><span class="ds-beauty-product__price">¥189</span><span class="ds-beauty-product__tag">所有肤质</span></div></article>
```

## React 示例

```tsx
<BeautyProductCard name="绒雾唇釉" shade="M07 · 干玫瑰" price={189} tag="所有肤质" sample />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 价格红色
- [ ] 色块加文字
- [ ] 肤质标签
- [ ] 旅行装
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
