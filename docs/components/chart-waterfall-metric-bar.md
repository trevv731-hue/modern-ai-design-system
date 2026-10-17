# 瀑布图增减条

[返回组件目录](../README.md) · 数据 · v3 新增

## 目的与边界

按顺序拆解一个总量如何被各项增减影响，看清贡献最大项。

## 结构

- 图表外壳 (ds-waterfall)
- 增减色条
- 累计连接线
- 轴标签与数值

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

静态图表；提供等效数值列表。

## 使用细则

- 每项写明增减数值与方向。
- 累计线与实际总量一致。
- 数据不完整时说明缺失项。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-waterfall" role="img" aria-label="延迟构成瀑布图：基线 60，+22 出口，−8 缓存"><span class="ds-waterfall__bar" data-delta="60" style="height:40%">基线 60</span><span class="ds-waterfall__bar" data-delta="22" style="height:15%">+22</span><span class="ds-waterfall__bar" data-delta="-8" style="height:6%">−8</span></div>
```

## React 示例

```tsx
<WaterfallMetricBar items={[{ label: "基线", delta: 60 }, { label: "出口", delta: 22 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 每项写明数值与方向
- [ ] 累计线与总量一致
- [ ] 缺失数据有说明
- [ ] 数值列表可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
