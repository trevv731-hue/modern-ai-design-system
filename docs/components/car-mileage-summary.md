# 里程统计卡

[返回组件目录](../README.md) · 汽车 / 用车服务 · v3 新增

## 目的与边界

展示本月行驶里程与平均油耗统计。

## 结构

- 月里程 (ds-mileage-summary__mileage)
- 平均油耗 (ds-mileage-summary__consumption)
- 环比 (ds-mileage-summary__cmp)
- 对比条 (ds-mileage-summary__bar)

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

卡片可聚焦查看历史趋势；油耗高于上月以 status 语义播报。

## 使用细则

- 月里程为主视觉数字。
- 油耗以百公里升数展示。
- 环比以箭头加数字呈现。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-mileage-summary" tabindex="0" role="img" aria-label="里程统计，本月行驶 1,286 公里，平均油耗 7.4 升每百公里，较上月下降 3%"><strong class="ds-mileage-summary__mileage">1,286<small>km</small></strong><div class="ds-mileage-summary__bar" aria-hidden="true"><i style="width:74%"></i></div><span class="ds-mileage-summary__consumption">平均油耗 7.4 L/100km</span><span class="ds-mileage-summary__cmp is-down">↓ 3%</span></article>
```

## React 示例

```tsx
<MileageSummaryCard mileage={1286} consumption={7.4} compare={-3} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 里程主数字
- [ ] 百公里油耗
- [ ] 环比箭头
- [ ] 历史趋势
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
