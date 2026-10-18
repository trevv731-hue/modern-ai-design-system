# OEE 仪表组

[返回组件目录](../README.md) · 制造 / 工业 · v3 新增

## 目的与边界

以仪表组展示设备综合效率及其三个分项。

## 结构

- 综合 OEE (ds-oee-gauge__total)
- 分项仪表 (ds-oee-gauge__item)
- 指标环 (ds-oee-gauge__ring)
- 目标线 (ds-oee-gauge__goal)

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

仪表可聚焦；数值有文字不只颜色；低于目标黄色播报。

## 使用细则

- 综合值居中突出。
- 时间开动率、性能开动率、合格率分项展示。
- 低于目标线黄色。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-oee-gauge" aria-label="OEE 综合 78%，时间开动率 92%，性能开动率 86%，合格率 98%，目标 85%"><div class="ds-oee-gauge__total"><strong>78%</strong><small>综合 OEE · 目标 85%</small></div><div class="ds-oee-gauge__items"><div class="ds-oee-gauge__item" tabindex="0" aria-label="时间开动率 92%"><span class="ds-oee-gauge__ring" style="--p:92%" aria-hidden="true"><b>92%</b></span><em>时间开动率</em></div><div class="ds-oee-gauge__item is-low" tabindex="0" aria-label="性能开动率 86%"><span class="ds-oee-gauge__ring" style="--p:86%" aria-hidden="true"><b>86%</b></span><em>性能开动率</em></div><div class="ds-oee-gauge__item" tabindex="0" aria-label="合格率 98%"><span class="ds-oee-gauge__ring" style="--p:98%" aria-hidden="true"><b>98%</b></span><em>合格率</em></div></div></section>
```

## React 示例

```tsx
<OeeGaugeCluster total={78} availability={92} performance={86} quality={98} goal={85} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 综合值居中突出
- [ ] 分项三项展示
- [ ] 低于目标黄色
- [ ] 数值有文字
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
