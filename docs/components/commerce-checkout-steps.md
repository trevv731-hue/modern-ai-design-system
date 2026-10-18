# 结算步骤条

[返回组件目录](../README.md) · 电商 · v3 新增

## 目的与边界

展示结账流程的整体进度，让用户清楚所处步骤与剩余步骤。

## 结构

- 步骤序列 (ds-checkout-steps__step)
- 完成态
- 当前态
- 待办态

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

已解锁步骤可点击回跳；未解锁步骤不接收焦点。

## 使用细则

- 每步标注状态文字，不只靠颜色与图标。
- 回跳已完成的步骤需保留已填信息。
- 步骤总数恒定可见，如“第 2 步，共 3 步”。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<ol class="ds-checkout-steps" aria-label="结算进度"><li class="ds-checkout-steps__step is-done">配送地址<small>已填写</small></li><li class="ds-checkout-steps__step is-current" aria-current="step">支付方式<small>第 2 步，共 3 步</small></li><li class="ds-checkout-steps__step">确认订单<small>待完成</small></li></ol>
```

## React 示例

```tsx
<CheckoutSteps current={1} steps={["配送地址", "支付方式", "确认订单"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 每步有状态文字
- [ ] 当前步设 aria-current
- [ ] 步骤总数可见
- [ ] 已完成步骤可回跳且保留信息
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
