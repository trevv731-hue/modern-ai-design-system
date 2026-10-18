# 支付方式卡

[返回组件目录](../README.md) · 计费 · v3 新增

## 目的与边界

展示已绑定的支付方式，并支持设为默认、编辑与移除。

## 结构

- 卡组织图标 (ds-bill-card__brand)
- 卡号尾号
- 有效期
- 默认标记
- 操作菜单

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

卡片可聚焦；操作菜单键盘可展开。

## 使用细则

- 默认方式有明确标记。
- 过期卡提前 30 天提醒更换。
- 移除默认卡前要求先设新默认。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-bill-card is-default"><span class="ds-bill-card__brand" aria-hidden="true">💳</span><div class="ds-bill-card__info"><strong>Visa **** 4291</strong><span>有效期 09 / 28</span></div><span class="ds-bill-card__tag">默认</span><button type="button" aria-label="更多操作">⋯</button></div>
```

## React 示例

```tsx
<BillingPaymentCard brand="Visa" last4="4291" expiry="09 / 28" isDefault />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 默认方式有标记
- [ ] 过期提前 30 天提醒
- [ ] 移除默认前需设新默认
- [ ] 操作菜单键盘可用
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
