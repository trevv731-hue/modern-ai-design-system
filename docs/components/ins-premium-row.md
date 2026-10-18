# 保费缴纳行

[返回组件目录](../README.md) · 保险 / 理赔 · v3 新增

## 目的与边界

展示一期保费的金额、到期日与缴纳状态。

## 结构

- 期次 (ds-premium-row__term)
- 金额 (ds-premium-row__amount)
- 到期日 (ds-premium-row__due)
- 状态 (ds-premium-row__state)

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

行可聚焦跳转支付；逾期状态以 alert 语义播报。

## 使用细则

- 已缴绿色、待缴黄色、逾期红色。
- 金额右对齐等宽展示。
- 逾期行提供补缴入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-premium-row is-due" tabindex="0" role="button" aria-label="第 3 期保费，8,640 元，到期日 2026-11-05，待缴纳"><span class="ds-premium-row__term">第 3 期</span><span class="ds-premium-row__amount">¥8,640</span><span class="ds-premium-row__due">2026-11-05</span><span class="ds-premium-row__state is-due">待缴纳</span></div>
```

## React 示例

```tsx
<PremiumPaymentRow term={3} amount={8640} due="2026-11-05" state="due" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态配色
- [ ] 金额右对齐
- [ ] 逾期补缴入口
- [ ] 可聚焦支付
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
