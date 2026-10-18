# 关注列表行

[返回组件目录](../README.md) · 拍卖 / 竞拍平台 · v3 新增

## 目的与边界

展示一件关注拍品的当前价与我的出价上限。

## 结构

- 拍品名 (ds-auc-watch__title)
- 当前价 (ds-auc-watch__price)
- 我的上限 (ds-auc-watch__cap)
- 状态 (ds-auc-watch__state)

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

行可聚焦调整出价上限；被超越以 alert 语义播报。

## 使用细则

- 状态三态：领先、被超越、未出价。
- 上限与当前价对照。
- 超出上限高亮提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-auc-watch is-outbid" tabindex="0" role="button" aria-label="关注拍品，宋拓石门颂册页，当前价 96,000 元，我的上限 95,000 元，已被超越"><strong class="ds-auc-watch__title">宋拓石门颂册页</strong><span class="ds-auc-watch__price">¥96,000</span><span class="ds-auc-watch__cap">上限 ¥95,000</span><span class="ds-auc-watch__state is-outbid">被超越</span></div>
```

## React 示例

```tsx
<WatchlistLotRow title="宋拓石门颂册页" price={96000} cap={95000} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态状态
- [ ] 上限对照
- [ ] 超出提示
- [ ] 调整上限
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
