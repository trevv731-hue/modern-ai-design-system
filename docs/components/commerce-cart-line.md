# 购物车行

[返回组件目录](../README.md) · 电商 · v3 新增

## 目的与边界

在购物车中呈现单行商品，支持数量步进、小计更新与移除。

## 结构

- 商品缩略图
- 名称与规格
- 数量步进器
- 小计金额
- 移除按钮

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

Tab 在数量增减与移除间移动；按钮均有可读名称。

## 使用细则

- 数量变化即时刷新小计，并说明库存上限。
- 移除操作前给一次确认或提供撤销入口。
- 小计与数量在同一行对齐，避免跨行查找。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cart-line"><span class="ds-cart-line__thumb" aria-hidden="true">🎧</span><div class="ds-cart-line__info"><strong>降噪耳机 Pro</strong><span>白色 · 含充电盒</span></div><div class="ds-cart-line__qty" role="group" aria-label="数量"><button type="button" aria-label="减少">−</button><span>2</span><button type="button" aria-label="增加">+</button></div><span class="ds-cart-line__sum">¥2,398</span><button type="button" class="ds-cart-line__remove" aria-label="移除">✕</button></div>
```

## React 示例

```tsx
<CartLine title="降噪耳机 Pro" spec="白色 · 含充电盒" qty={2} sum="¥2,398" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 数量步进带可读名称
- [ ] 小计随数量即时刷新
- [ ] 移除按钮有确认或撤销
- [ ] 库存上限有提示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
