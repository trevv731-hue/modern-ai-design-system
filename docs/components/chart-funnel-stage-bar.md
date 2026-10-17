# 漏斗阶段条形图

[返回组件目录](../README.md) · 数据 · v3 新增

## 目的与边界

按顺序展示各阶段的留存数量与转化率，说明流失发生在哪一步。

## 结构

- 阶段行 (ds-funnel__stage)
- 阶段名与数量
- 宽度条与转化率
- 流失提示

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

静态图表；每个阶段提供等效文本，可通过列表浏览。

## 使用细则

- 每个阶段同时给出数量与百分比，不只用宽度表达。
- 流失最大的阶段需要文字标注。
- 数据缺失时显示空状态，不用 0 填充。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-funnel" role="img" aria-label="漏斗：访问 1200，注册 480，激活 210"><div class="ds-funnel__stage" style="width:100%"><strong>访问</strong><span>1200</span></div><div class="ds-funnel__stage" style="width:40%"><strong>注册</strong><span>480 · 40%</span></div><div class="ds-funnel__stage" style="width:17%"><strong>激活</strong><span>210 · 44%</span></div></div>
```

## React 示例

```tsx
<FunnelStageBar stages={[{ label: "访问", value: 1200 }, { label: "注册", value: 480 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 数量与百分比同时可见
- [ ] 最大流失阶段有标注
- [ ] 缺数据时不显示假 0
- [ ] 等效文本可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
