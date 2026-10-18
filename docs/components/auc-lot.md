# 拍品卡

[返回组件目录](../README.md) · 拍卖 / 竞拍平台 · v3 新增

## 目的与边界

展示一件拍品的当前竞价与出价热度。

## 结构

- 拍品名 (ds-auc-lot__title)
- 当前价 (ds-auc-lot__price)
- 出价数 (ds-auc-lot__bids)
- 状态 (ds-auc-lot__state)
- 缩略图 (ds-auc-lot__thumb)

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

卡片可聚焦进入拍品页；领先/被超越以文字加颜色提示。

## 使用细则

- 状态四态：竞价中、即将结束、已成交、已流拍。
- 当前价红色等宽。
- 出价数以徽标展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-auc-lot is-live" tabindex="0" role="button" aria-label="拍品，明代青花缠枝莲纹梅瓶，当前价 128,000 元，出价 23 次，竞价中"><span class="ds-auc-lot__thumb" aria-hidden="true">瓷</span><div class="ds-auc-lot__body"><strong class="ds-auc-lot__title">明代青花缠枝莲纹梅瓶</strong><div class="ds-auc-lot__meta"><span class="ds-auc-lot__price">¥128,000</span><span class="ds-auc-lot__bids">23 次出价</span><span class="ds-auc-lot__state is-live">竞价中</span></div></div></article>
```

## React 示例

```tsx
<AuctionLotCard title="明代青花缠枝莲纹梅瓶" price={128000} bids={23} state="live" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态状态
- [ ] 当前价红色
- [ ] 出价计数
- [ ] 进入拍品页
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
