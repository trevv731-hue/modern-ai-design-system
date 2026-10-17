# 箱线图分布带

[返回组件目录](../README.md) · 数据 · v3 新增

## 目的与边界

展示一组数据的中位数、四分位与离群值，比平均值更能说明分布。

## 结构

- 箱体 (ds-boxplot__box)
- 中位数线
- 须线
- 离群点

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

静态图表；提供等效数值文本。

## 使用细则

- 同时给出中位数、上下四分位与样本量。
- 离群点单独标注，不混入箱体。
- 样本量过小时提示结论不可靠。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-boxplot" role="img" aria-label="延迟分布：中位数 82ms，四分位 64–120ms"><div class="ds-boxplot__box"><span class="ds-boxplot__median" style="left:46%"></span></div><span class="ds-boxplot__whisker"></span><span class="ds-boxplot__outlier" aria-hidden="true"></span></div>
```

## React 示例

```tsx
<BoxPlotBand median={82} lower={64} upper={120} samples={186} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 中位数与四分位同时给出
- [ ] 离群点单独标注
- [ ] 样本量过小时有提示
- [ ] 等效文本可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
