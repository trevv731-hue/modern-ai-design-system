# 区间面积带图

[返回组件目录](../README.md) · 数据 · v3 新增

## 目的与边界

展示数值的波动区间与中位数，适合延迟、温度等带上下界的指标。

## 结构

- 图表外壳 (ds-area-band)
- 区间带
- 中位线
- 时间轴

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

静态图表；提供等效数值表。

## 使用细则

- 区间带上界与下界都要有数值标签。
- 中位线与实际值区分开。
- 采样间隔在图例中说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-area-band" role="img" aria-label="延迟区间：60–140ms，中位 82ms"><span class="ds-area-band__band" aria-hidden="true"></span><span class="ds-area-band__median" aria-hidden="true"></span><span class="ds-area-band__axis" aria-hidden="true"></span></div>
```

## React 示例

```tsx
<AreaRangeBand points={[{ at: "10:00", min: 60, max: 140, median: 82 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 区间上下界有数值
- [ ] 中位线与实际值可区分
- [ ] 采样间隔有说明
- [ ] 等效数值表可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
