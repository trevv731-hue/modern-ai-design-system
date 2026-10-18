# 费用估算表

[返回组件目录](../README.md) · 法律 / 合规 · v3 新增

## 目的与边界

估算案件各项费用并汇总总额。

## 结构

- 项目行 (ds-fee-estimate__row)
- 项目名与计费说明
- 金额 (ds-fee-estimate__amount)
- 合计 (ds-fee-estimate__total)
- 备注

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

行可聚焦查看计费依据；金额使用等宽字体右对齐。

## 使用细则

- 金额右对齐并使用等宽字体。
- 风险代理需标注封顶金额。
- 合计行视觉强调。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-fee-estimate"><div class="ds-fee-estimate__row"><span class="ds-fee-estimate__name">律师代理费<small>按标的额 3% 收取</small></span><span class="ds-fee-estimate__amount">¥30,000</span></div><div class="ds-fee-estimate__row"><span class="ds-fee-estimate__name">诉讼费<small>一审案件受理费</small></span><span class="ds-fee-estimate__amount">¥8,900</span></div><div class="ds-fee-estimate__row"><span class="ds-fee-estimate__name">保全费与担保费<small>财产保全 100 万</small></span><span class="ds-fee-estimate__amount">¥5,000</span></div><div class="ds-fee-estimate__total"><span>合计</span><strong>¥43,900</strong></div><p class="ds-fee-estimate__note">以上为估算，最终以法院与律所结算为准</p></div>
```

## React 示例

```tsx
<LegalFeeEstimate items={[{ name: "律师代理费", amount: 30000, note: "按标的额 3% 收取" }]} total={43900} note="最终以法院与律所结算为准" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 金额右对齐等宽
- [ ] 风险代理标封顶
- [ ] 合计行强调
- [ ] 行可聚焦看依据
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
