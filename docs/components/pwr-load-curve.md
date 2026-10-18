# 负荷曲线卡

[返回组件目录](../README.md) · 能源 / 电力运维 · v3 新增

## 目的与边界

以曲线展示当日负荷变化、峰值时段与警戒线对比。

## 结构

- 当前负荷 (ds-load-curve__now)
- 峰值 (ds-load-curve__peak)
- 曲线 (ds-load-curve__chart)
- 时段说明 (ds-load-curve__note)

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

图表可聚焦查看逐时数据；越过警戒线以 status 语义播报。

## 使用细则

- 超过供电能力时以红色警戒线标注。
- 峰值时段以文字说明。
- 曲线按 24 小时展开。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-load-curve" tabindex="0" role="img" aria-label="负荷曲线，当前 3,860 千瓦，今日峰值 5,120 千瓦出现在 15 时，警戒线 5,500 千瓦"><div class="ds-load-curve__head"><strong class="ds-load-curve__now">3,860 kW</strong><span class="ds-load-curve__peak">峰值 5,120 kW · 15 时</span></div><svg class="ds-load-curve__chart" viewBox="0 0 240 60" aria-hidden="true"><line x1="0" y1="12" x2="240" y2="12" stroke="var(--ds-danger)" stroke-dasharray="4 3"/><polyline points="0,48 30,44 60,38 90,30 120,22 150,14 180,18 210,26 240,32" fill="none" stroke="var(--ds-accent)" stroke-width="2"/></svg><span class="ds-load-curve__note">警戒线 5,500 kW</span></section>
```

## React 示例

```tsx
<PowerLoadCurveCard now={3860} peak={5120} limit={5500} series={[{ h: 0, v: 1200 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 警戒线红色
- [ ] 峰值时段文字
- [ ] 24 小时曲线
- [ ] 逐时数据
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
