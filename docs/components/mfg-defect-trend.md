# 不良率趋势

[返回组件目录](../README.md) · 制造 / 工业 · v3 新增

## 目的与边界

以折线展示不良率变化趋势与目标线对比。

## 结构

- 当前不良率 (ds-defect-trend__now)
- 目标线 (ds-defect-trend__goal)
- 折线图 (ds-defect-trend__chart)
- 环比 (ds-defect-trend__cmp)

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

图表可聚焦；数据点有 aria-label；区间可切换。

## 使用细则

- 超目标线红色警示。
- 环比用箭头加数字。
- 支持按班次筛选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-defect-trend" tabindex="0" aria-label="不良率趋势，当前 1.8%，目标 2.0%，较昨日下降 0.3 个百分点"><div class="ds-defect-trend__head"><strong class="ds-defect-trend__now">1.8%</strong><span class="ds-defect-trend__goal">目标 ≤ 2.0%</span><span class="ds-defect-trend__cmp is-down">↓ 0.3pp</span></div><svg class="ds-defect-trend__chart" viewBox="0 0 240 60" aria-hidden="true"><line x1="0" y1="18" x2="240" y2="18" stroke="var(--ds-danger)" stroke-dasharray="4 3"/><polyline points="0,40 40,34 80,38 120,26 160,30 200,22 240,20" fill="none" stroke="var(--ds-accent)" stroke-width="2"/></svg></section>
```

## React 示例

```tsx
<DefectRateTrend current={1.8} goal={2} series={[{ d: "10-12", v: 2.4 }]} compare={-0.3} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 超目标红色警示
- [ ] 环比箭头加数字
- [ ] 按班次筛选
- [ ] 数据点有 aria-label
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
