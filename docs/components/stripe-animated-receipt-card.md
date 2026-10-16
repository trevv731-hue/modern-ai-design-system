# Stripe 拟物折痕锯齿纸质电子账单票据

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Stripe、Apple Pay 与 Uber 风格的拟物纸质发票账单小票；具备虚线撕裂打孔线（perforation）、锯齿状折边阴影、明细项目金额与仿真防伪条形码。

## 结构

- 小票拟物纸质卡片 (.ds-stripe-receipt)
- 顶部商户名与支付状态徽章 (.ds-stripe-receipt__head)
- 超大加粗总金额与币种 (.ds-stripe-receipt__total)
- 虚线撕裂折痕分界线 (.ds-stripe-receipt__perf)
- 逐项清单与右对齐金额 (.ds-stripe-receipt__rows)
- 仿真条形码纹理 (.ds-stripe-receipt__barcode)
- 底部放射锯齿阴影边缘 (.ds-stripe-receipt__zigzag)

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

Tab 聚焦小票；Enter 复制交易流水号或触发小票打印/下载 PDF。

## 使用细则

- 底部锯齿采用纯 CSS radial-gradient 与 drop-shadow 构建，无需引入任何额外位图或 SVG 依赖。
- 金额与订单号使用等宽字体呈现，增强财务数字的严谨可信度。
- 适合支付完成通知、订阅续费确认、结账成功页面与财务电子凭据。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-stripe-receipt" role="article" aria-label="电子交易收据票据"><div class="ds-stripe-receipt__head"><span class="ds-stripe-receipt__logo">STRIPE PLATFORM</span><span class="ds-stripe-receipt__badge">PAID</span></div><div class="ds-stripe-receipt__total">$149.00 <span style="font-size:13px;color:var(--ds-muted)">USD</span></div><div style="font-size:11px;color:var(--ds-muted);font-family:var(--ds-type-mono)">inv_1Oq4wX2eZvKYlo2C · 2026-10-16</div><hr class="ds-stripe-receipt__perf"><div class="ds-stripe-receipt__rows"><div class="ds-stripe-receipt__row"><span>Pro Annual Subscription</span><span style="font-weight:600">$120.00</span></div><div class="ds-stripe-receipt__row"><span>AI Copilot Add-on</span><span style="font-weight:600">$29.00</span></div></div><div class="ds-stripe-receipt__barcode" aria-hidden="true"></div><div class="ds-stripe-receipt__zigzag" aria-hidden="true"></div></div>
```

## React 示例

```tsx
<StripeFoldedReceipt amount="$149.00" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 虚线折痕与底部锯齿边缘自然
- [ ] 金额与币种层次鲜明
- [ ] 打印或导出时不产生布局异常
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
