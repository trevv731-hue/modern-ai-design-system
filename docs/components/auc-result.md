# 竞拍结果卡

[返回组件目录](../README.md) · 拍卖 / 竞拍平台 · v3 新增

## 目的与边界

展示一件拍品的成交结果与买家信息。

## 结构

- 拍品名 (ds-auc-result__title)
- 成交价 (ds-auc-result__price)
- 买家 (ds-auc-result__buyer)
- 状态 (ds-auc-result__state)

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

卡片可聚焦查看成交确认单；流拍以 alert 语义播报。

## 使用细则

- 状态三态：已成交、待付款、已流拍。
- 成交价红色大字。
- 买家脱敏展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-auc-result is-sold" tabindex="0" role="button" aria-label="竞拍结果，清雍正矾红彩云龙纹盏，成交价 2,360,000 元，买家 藏家 3306，已成交，待付款"><strong class="ds-auc-result__title">清雍正矾红彩云龙纹盏</strong><span class="ds-auc-result__price">¥2,360,000</span><div class="ds-auc-result__meta"><span class="ds-auc-result__buyer">藏家 3306</span><span class="ds-auc-result__state is-sold">已成交 · 待付款</span></div></article>
```

## React 示例

```tsx
<AuctionResultCard title="清雍正矾红彩云龙纹盏" price={2360000} buyer="藏家 3306" state="sold" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态结果
- [ ] 成交价大字
- [ ] 买家脱敏
- [ ] 确认单
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
