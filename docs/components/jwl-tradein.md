# 以旧换新估价卡

[返回组件目录](../README.md) · 珠宝首饰 · v3 新增

## 目的与边界

展示一件旧珠宝的折旧估价与换新抵用金额。

## 结构

- 旧品 (ds-jwl-tradein__old)
- 折旧估价 (ds-jwl-tradein__depr)
- 可抵用 (ds-jwl-tradein__credit)
- 备注 (ds-jwl-tradein__note)

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

卡片可聚焦提交换新申请；估价与抵用红色展示。

## 使用细则

- 估价按当日金价与成色计算。
- 抵用可叠加新品优惠。
- 备注注明凭证要求。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-jwl-tradein" tabindex="0" role="button" aria-label="以旧换新，旧品 18K 金项链，折旧估价 3200 元，可抵用 3200 元，需附原始发票"><div class="ds-jwl-tradein__head"><strong class="ds-jwl-tradein__old">18K 金项链</strong></div><div class="ds-jwl-tradein__rows"><span class="ds-jwl-tradein__depr">折旧估价 ¥3,200</span><span class="ds-jwl-tradein__credit">可抵用 ¥3,200</span></div><span class="ds-jwl-tradein__note">需附原始发票</span></article>
```

## React 示例

```tsx
<TradeInCard old="18K 金项链" depr={3200} credit={3200} note="需附原始发票" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 折旧估价
- [ ] 抵用金额
- [ ] 凭证备注
- [ ] 换新申请
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
