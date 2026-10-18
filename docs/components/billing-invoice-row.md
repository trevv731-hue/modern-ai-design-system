# 发票行

[返回组件目录](../README.md) · 计费 · v3 新增

## 目的与边界

在账单列表中展示单张发票的期间、金额与支付状态，支持下载。

## 结构

- 发票号 (ds-invoice-row__id)
- 账单期间
- 金额
- 状态徽标
- 下载按钮

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

行可聚焦；下载按钮独立可达；状态用文字加颜色。

## 使用细则

- 未支付发票突出显示并提供支付入口。
- 金额含币种与税费说明。
- 下载失败给出重试与邮件备选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-invoice-row" tabindex="0" role="row"><span class="ds-invoice-row__id">INV-2026-1001</span><span>2026 年 9 月</span><span class="ds-invoice-row__amount">¥1,470.00</span><span class="ds-invoice-row__state is-paid">已支付</span><button type="button" aria-label="下载发票 INV-2026-1001">⬇</button></div>
```

## React 示例

```tsx
<InvoiceRow id="INV-2026-1001" period="2026 年 9 月" amount="¥1,470.00" state="paid" onDownload={download} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 未支付发票突出可支付
- [ ] 金额含币种说明
- [ ] 下载失败有重试
- [ ] 状态文字加颜色
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
