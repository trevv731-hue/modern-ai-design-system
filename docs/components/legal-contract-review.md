# 合同审查面板

[返回组件目录](../README.md) · 法律 / 合规 · v3 新增

## 目的与边界

汇总合同审查结果：风险总分、各等级条款数量与审查进度。

## 结构

- 风险总分 (ds-contract-review__score)
- 等级统计 (ds-contract-review__stats)
- 审查进度 (ds-contract-review__progress)
- 趋势对比

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

面板可聚焦；统计项可点击筛选条款；进度条使用 progressbar 语义。

## 使用细则

- 风险等级用颜色与文字双提示。
- 总分变化给出较初稿的趋势。
- 支持按等级筛选条款列表。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-contract-review"><div class="ds-contract-review__head"><strong class="ds-contract-review__score">72<small> / 100 风险分</small></strong><span class="ds-contract-review__trend is-down">↓ 8 较初稿</span></div><div class="ds-contract-review__stats"><span class="is-high">高风险 2</span><span class="is-medium">中风险 5</span><span class="is-low">低风险 11</span></div><div class="ds-contract-review__progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" aria-label="审查进度"><i style="width:80%"></i></div><p class="ds-contract-review__meta">已审查 80% 条款 · 共 18 条</p></div>
```

## React 示例

```tsx
<ContractReviewPanel score={72} trend={-8} high={2} medium={5} low={11} progress={80} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 等级颜色文字双提示
- [ ] 总分有趋势对比
- [ ] 按等级筛选条款
- [ ] 进度条可键盘读取
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
