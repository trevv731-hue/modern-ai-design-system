# 能耗图表

[返回组件目录](../README.md) · 智能家居 / IoT · v3 新增

## 目的与边界

以分时柱状图展示家庭用电量与峰值时段。

## 结构

- 今日用电 (ds-energy-chart__total)
- 分时柱状 (ds-energy-chart__bars)
- 峰值提示 (ds-energy-chart__peak)
- 环比对比

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

图表可聚焦；每根柱子有 aria-label；数据可切换日周月。

## 使用细则

- 柱高按电量比例。
- 峰值时段黄色标记。
- 支持日周月切换。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-energy-chart" tabindex="0" aria-label="今日用电 8.6 度，峰值 19 时 1.2 度，较昨日下降 5%"><div class="ds-energy-chart__head"><strong class="ds-energy-chart__total">8.6<small>度</small></strong><span class="ds-energy-chart__peak">峰值 19 时 · 1.2 度</span></div><div class="ds-energy-chart__bars" aria-hidden="true"><i style="height:18%"></i><i style="height:12%"></i><i style="height:30%"></i><i style="height:46%"></i><i style="height:62%"></i><i class="is-peak" style="height:100%"></i><i style="height:72%"></i></div><p class="ds-energy-chart__cmp">较昨日 <em class="is-down">↓ 5%</em></p></section>
```

## React 示例

```tsx
<EnergyUsageChart total={8.6} hours={[{ h: "00", kwh: 0.2 }, { h: "18", kwh: 1.2, peak: true }]} compare={-5} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 柱高按电量比例
- [ ] 峰值黄色标记
- [ ] 日周月切换
- [ ] 柱子有 aria-label
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
