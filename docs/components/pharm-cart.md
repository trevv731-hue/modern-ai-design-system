# 购药车行

[返回组件目录](../README.md) · 医药 / 药店 · v3 新增

## 目的与边界

展示购物车中一种药品的数量与小计金额。

## 结构

- 选择框 (ds-pharm-cart__check)
- 药品名 (ds-pharm-cart__drug)
- 数量步进 (ds-pharm-cart__stepper)
- 小计 (ds-pharm-cart__sum)

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

选择框以 checkbox 语义操作；数量以 stepper 增减。

## 使用细则

- 未选中行置灰但保留信息。
- 处方药行不可自行取消。
- 小计金额红色等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pharm-cart is-selected" role="group" aria-label="购物车商品，布洛芬缓释胶囊，2 盒，小计 65.60 元"><span class="ds-pharm-cart__check" role="checkbox" aria-checked="true" tabindex="0" aria-label="选择 布洛芬缓释胶囊">✓</span><strong class="ds-pharm-cart__drug">布洛芬缓释胶囊</strong><span class="ds-pharm-cart__stepper" role="group" aria-label="数量 2 盒">− 2 +</span><span class="ds-pharm-cart__sum">¥65.60</span></div>
```

## React 示例

```tsx
<OnlinePharmacyCartRow drug="布洛芬缓释胶囊" qty={2} price={32.8} selected />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] checkbox 语义
- [ ] 数量步进
- [ ] 处方锁定
- [ ] 小计红色
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
