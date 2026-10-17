# 散点聚类图

[返回组件目录](../README.md) · 数据 · v3 新增

## 目的与边界

在两个维度上观察样本分布与聚类，识别异常点而不是只看汇总值。

## 结构

- 坐标区 (ds-scatter)
- 数据点
- 聚类外框
- 轴标签与单位

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

静态图表；提供等效数据表与异常点说明。

## 使用细则

- 两个轴都写明单位。
- 异常点可单独标注说明。
- 点数过多时提供筛选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-scatter" role="img" aria-label="延迟与丢包散点图，3 个聚类，2 个异常点"><span class="ds-scatter__point" style="left:20%;bottom:40%"></span><span class="ds-scatter__point" style="left:70%;bottom:20%"></span><span class="ds-scatter__point ds-scatter__point--outlier" style="left:88%;bottom:76%"></span></div>
```

## React 示例

```tsx
<ScatterClusterPlot points={[{ x: 82, y: 0.4 }, { x: 140, y: 3.2, outlier: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 两轴写明单位
- [ ] 异常点可标注
- [ ] 点数过多可筛选
- [ ] 数据表可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
