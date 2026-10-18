# 保留价卡

[返回组件目录](../README.md) · 拍卖 / 竞拍平台 · v3 新增

## 目的与边界

展示一件拍品的保留价设置与达到情况。

## 结构

- 拍品名 (ds-auc-reserve__title)
- 保留价 (ds-auc-reserve__price)
- 当前价对照 (ds-auc-reserve__cur)
- 状态 (ds-auc-reserve__state)

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

卡片可聚焦查看保留价规则；未达到以 status 语义播报。

## 使用细则

- 状态两态：已达保留价、未达保留价。
- 保留价文字说明不展示具体值时标注保密。
- 当前价对照展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-auc-reserve is-met" tabindex="0" role="button" aria-label="保留价，元龙泉窑鬲式炉，保留价 88,000 元，当前价 92,000 元，已达保留价"><div class="ds-auc-reserve__head"><strong class="ds-auc-reserve__title">元龙泉窑鬲式炉</strong><span class="ds-auc-reserve__state is-met">已达保留价</span></div><div class="ds-auc-reserve__nums"><span class="ds-auc-reserve__cur">当前 ¥92,000</span><span class="ds-auc-reserve__price">保留 ¥88,000</span></div></article>
```

## React 示例

```tsx
<ReservePriceCard title="元龙泉窑鬲式炉" reserve={88000} current={92000} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 两态状态
- [ ] 价格对照
- [ ] 规则查看
- [ ] 保密标注
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
