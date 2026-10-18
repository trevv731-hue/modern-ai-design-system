# 出价记录行

[返回组件目录](../README.md) · 拍卖 / 竞拍平台 · v3 新增

## 目的与边界

展示一条出价记录的出价人与金额。

## 结构

- 出价人 (ds-auc-bid__user)
- 金额 (ds-auc-bid__amount)
- 时间 (ds-auc-bid__time)
- 领先标识 (ds-auc-bid__lead)

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

行可聚焦查看出价详情；领先出价以文字标识。

## 使用细则

- 金额红色等宽。
- 领先行文字标注。
- 时间等宽展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-auc-bid is-lead" tabindex="0" role="button" aria-label="出价记录，出价人 藏家 7288，金额 128,000 元，06-18 15:42，当前领先"><strong class="ds-auc-bid__amount">¥128,000</strong><span class="ds-auc-bid__user">藏家 7288</span><span class="ds-auc-bid__time">06-18 15:42</span><span class="ds-auc-bid__lead">领先</span></div>
```

## React 示例

```tsx
<BidHistoryRow user="藏家 7288" amount={128000} time="06-18 15:42" lead />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 金额红色
- [ ] 领先标识
- [ ] 时间等宽
- [ ] 出价详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
