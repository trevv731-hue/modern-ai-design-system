# 退款申请卡

[返回组件目录](../README.md) · 客服 / 工单 · v3 新增

## 目的与边界

展示退款申请的金额、原因与审批流程进度。

## 结构

- 订单号 (ds-refund-card__order)
- 金额 (ds-refund-card__amount)
- 原因 (ds-refund-card__reason)
- 审批流 (ds-refund-card__flow)
- 状态

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

卡片可聚焦查看凭证；审批操作可达。

## 使用细则

- 金额使用等宽字体。
- 审批流按步骤展示当前节点。
- 驳回必须填写理由。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-refund-card is-approving" tabindex="0" aria-label="退款申请，订单 SO-88231，金额 299 元，原因商品与描述不符，主管审批中"><div class="ds-refund-card__head"><span class="ds-refund-card__order">SO-88231</span><strong class="ds-refund-card__amount">¥299</strong></div><p class="ds-refund-card__reason">商品与描述不符 · 已开封使用 2 天</p><ol class="ds-refund-card__flow"><li class="is-done">客服审核</li><li class="is-current">主管审批</li><li>财务打款</li></ol></article>
```

## React 示例

```tsx
<RefundRequestCard order="SO-88231" amount={299} reason="商品与描述不符" state="approving" flow={[{ step: "主管审批", state: "current" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 金额等宽字体
- [ ] 审批流展示当前节点
- [ ] 驳回需填理由
- [ ] 卡片可聚焦看凭证
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
