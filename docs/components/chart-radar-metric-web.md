# 雷达指标网

[返回组件目录](../README.md) · 数据 · v3 新增

## 目的与边界

在同一组维度上比较多个方案，突出强弱差异而不是总分。

## 结构

- 雷达网格 (ds-radar)
- 维度轴标签
- 数据多边形
- 图例

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

静态图表；图例与数值以文本提供。

## 使用细则

- 维度数量控制在 3–8 个。
- 每个维度写明单位与方向。
- 重叠多边形需要可切换显示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-radar" role="img" aria-label="模型对比雷达图：准确率、速度、成本、稳定性"><span class="ds-radar__axis" aria-hidden="true"></span><span class="ds-radar__shape" aria-hidden="true"></span><ul class="ds-radar__legend"><li>准确率</li><li>速度</li><li>成本</li><li>稳定性</li></ul></div>
```

## React 示例

```tsx
<RadarMetricWeb axes={[{ label: "准确率", value: 86 }, { label: "速度", value: 72 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 维度数量在合理区间
- [ ] 维度写明单位与方向
- [ ] 重叠图形可切换
- [ ] 数值以文本可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
