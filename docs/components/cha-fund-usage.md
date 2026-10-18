# 资金用途分解

[返回组件目录](../README.md) · 公益 / 捐赠 · v3 新增

## 目的与边界

以堆叠条与图例展示项目资金的用途构成。

## 结构

- 堆叠条 (ds-fund-usage__bar)
- 分段 (ds-fund-usage__seg)
- 图例 (ds-fund-usage__legend)
- 总额 (ds-fund-usage__total)

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

分段可聚焦查看拨付明细；单项占比超 60% 以 status 语义播报。

## 使用细则

- 执行、管理、筹资三类分色。
- 每段附百分比文字。
- 图例与堆叠条颜色一一对应。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-fund-usage" aria-label="资金用途分解，总额 86,400 元，项目执行 78%，行政管理 12%，筹资费用 10%"><div class="ds-fund-usage__bar" aria-hidden="true"><span class="ds-fund-usage__seg is-exec" style="width:78%"></span><span class="ds-fund-usage__seg is-admin" style="width:12%"></span><span class="ds-fund-usage__seg is-raise" style="width:10%"></span></div><div class="ds-fund-usage__legend"><span class="is-exec" tabindex="0" aria-label="项目执行 78%">项目执行 78%</span><span class="is-admin" tabindex="0" aria-label="行政管理 12%">行政管理 12%</span><span class="is-raise" tabindex="0" aria-label="筹资费用 10%">筹资费用 10%</span></div><p class="ds-fund-usage__total">总额 ¥86,400</p></section>
```

## React 示例

```tsx
<FundUsageBreakdown total={86400} segments={[{ label: "项目执行", pct: 78, kind: "exec" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三类分色
- [ ] 百分比文字
- [ ] 图例对应
- [ ] 超 60% 提示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
