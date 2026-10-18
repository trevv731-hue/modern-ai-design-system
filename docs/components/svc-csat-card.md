# 满意度评分卡

[返回组件目录](../README.md) · 客服 / 工单 · v3 新增

## 目的与边界

展示客服满意度平均分与各星级分布。

## 结构

- 平均分 (ds-csat-card__avg)
- 分布条 (ds-csat-card__bars)
- 样本量 (ds-csat-card__total)
- 环比趋势

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

卡片可聚焦查看评价原文；分数有文字不只颜色。

## 使用细则

- 分布条按星级降序展示。
- 低分评价可下钻查看。
- 环比变化用箭头加数字。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-csat-card" tabindex="0" aria-label="满意度评分，平均 4.6 分，共 1284 份评价，环比上升 0.2"><div class="ds-csat-card__avg"><strong>4.6</strong><small>/ 5.0</small></div><div class="ds-csat-card__bars"><div class="ds-csat-card__row"><span>5 星</span><i style="width:76%"></i><em>76%</em></div><div class="ds-csat-card__row"><span>4 星</span><i style="width:15%"></i><em>15%</em></div><div class="ds-csat-card__row"><span>3 星</span><i style="width:6%"></i><em>6%</em></div><div class="ds-csat-card__row"><span>2 星及以下</span><i style="width:3%"></i><em>3%</em></div></div><p class="ds-csat-card__total">共 1,284 份 · <span class="is-up">↑ 0.2</span></p></section>
```

## React 示例

```tsx
<CsatScoreCard average={4.6} total={1284} distribution={[{ stars: 5, count: 980 }]} trend={0.2} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 分布按星级降序
- [ ] 低分可下钻
- [ ] 环比箭头加数字
- [ ] 分数有文字
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
