# 加价阶梯表

[返回组件目录](../README.md) · 拍卖 / 竞拍平台 · v3 新增

## 目的与边界

展示不同价格区间对应的最小加价幅度。

## 结构

- 表头 (ds-auc-inc__head)
- 价格区间 (ds-auc-inc__range)
- 加价幅度 (ds-auc-inc__step)
- 当前区间 (is-current)

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

行可聚焦查看阶梯说明；当前区间文字高亮。

## 使用细则

- 区间五档递增。
- 当前区间蓝色高亮。
- 加价幅度等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<table class="ds-auc-inc"><caption class="ds-auc-inc__head">加价阶梯 · 当前区间 1 万至 5 万</caption><tbody><tr class="ds-auc-inc__row"><td class="ds-auc-inc__range">1 万以下</td><td class="ds-auc-inc__step">+500</td></tr><tr class="ds-auc-inc__row is-current"><td class="ds-auc-inc__range">1 万 – 5 万</td><td class="ds-auc-inc__step">+1,000</td></tr><tr class="ds-auc-inc__row"><td class="ds-auc-inc__range">5 万 – 10 万</td><td class="ds-auc-inc__step">+2,000</td></tr><tr class="ds-auc-inc__row"><td class="ds-auc-inc__range">10 万 – 50 万</td><td class="ds-auc-inc__step">+5,000</td></tr><tr class="ds-auc-inc__row"><td class="ds-auc-inc__range">50 万以上</td><td class="ds-auc-inc__step">+10,000</td></tr></tbody></table>
```

## React 示例

```tsx
<BidIncrementTable currentRange="1 万 – 5 万" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 五档阶梯
- [ ] 当前高亮
- [ ] 幅度等宽
- [ ] 阶梯说明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
