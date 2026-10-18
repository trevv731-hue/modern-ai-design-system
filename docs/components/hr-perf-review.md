# 绩效评估卡

[返回组件目录](../README.md) · 人力资源 / 招聘 · v3 新增

## 目的与边界

展示绩效周期内的目标完成情况与自评、上级评分。

## 结构

- 周期 (ds-perf-review__cycle)
- 目标列表 (ds-perf-review__goal)
- 自评与上级评 (ds-perf-review__score)
- 等级 (ds-perf-review__grade)

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

目标行可聚焦查看详情；评分使用 slider 语义。

## 使用细则

- 自评与上级评分并列对比。
- 差距大于 10 分黄色提示校准。
- 等级用徽章强调。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-perf-review" aria-label="2026 上半年绩效评估"><div class="ds-perf-review__head"><span class="ds-perf-review__cycle">2026 H1</span><span class="ds-perf-review__grade is-a">A</span></div><ul class="ds-perf-review__goals"><li><span>完成设计系统 v3 重构</span><div class="ds-perf-review__score"><em>自评 90</em><em>上级 88</em></div></li><li><span>组件覆盖率提升至 95%</span><div class="ds-perf-review__score"><em>自评 85</em><em>上级 92</em></div></li></ul></section>
```

## React 示例

```tsx
<PerformanceReviewCard cycle="2026 H1" goals={[{ text: "完成设计系统 v3 重构", self: 90, manager: 88 }]} grade="A" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 自评上级并列对比
- [ ] 分差大黄色校准
- [ ] 等级徽章强调
- [ ] 目标行可聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
