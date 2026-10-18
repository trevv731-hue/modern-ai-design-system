# 花束商品卡

[返回组件目录](../README.md) · 鲜花 / 花店 · v3 新增

## 目的与边界

展示一款花束的主花材、价格与适用场景。

## 结构

- 花束名 (ds-flo-bouquet__name)
- 主花材 (ds-flo-bouquet__flower)
- 场景标签 (ds-flo-bouquet__tag)
- 价格 (ds-flo-bouquet__price)
- 花语 (ds-flo-bouquet__meaning)

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

卡片可聚焦加入购物车；场景标签文字标注。

## 使用细则

- 价格红色等宽。
- 主花材以花语说明。
- 场景标签圆角徽标。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-flo-bouquet" tabindex="0" role="button" aria-label="花束商品，晨雾白玫瑰，主花材 白玫瑰 19 朵，场景 表白、纪念日，价格 299 元，花语 纯洁的爱"><span class="ds-flo-bouquet__thumb" aria-hidden="true">花</span><div class="ds-flo-bouquet__body"><strong class="ds-flo-bouquet__name">晨雾白玫瑰</strong><span class="ds-flo-bouquet__flower">白玫瑰 19 朵 · 配洋桔梗</span><div class="ds-flo-bouquet__tags"><span class="ds-flo-bouquet__tag">表白</span><span class="ds-flo-bouquet__tag">纪念日</span></div><span class="ds-flo-bouquet__meaning">花语：纯洁的爱</span></div><span class="ds-flo-bouquet__price">¥299</span></article>
```

## React 示例

```tsx
<BouquetProductCard name="晨雾白玫瑰" flower="白玫瑰 19 朵" price={299} meaning="纯洁的爱" tags={["表白", "纪念日"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 价格红色
- [ ] 花材说明
- [ ] 场景标签
- [ ] 花语展示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
