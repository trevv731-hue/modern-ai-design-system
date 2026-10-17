# 桑基流量带图

[返回组件目录](../README.md) · 数据 · v3 新增

## 目的与边界

表达流量或资源在节点之间的分流，直观显示主要路径与损耗。

## 结构

- 节点列 (ds-sankey__node)
- 流量带 (ds-sankey__band)
- 数值标签
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

静态图表；提供等效表格。

## 使用细则

- 带宽与流量成正比，不等比误导。
- 节点名称与数值同时显示。
- 分支过多时允许只看主要路径。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sankey" role="img" aria-label="流量分流桑基图：入口 1000，规则 620，直连 380"><span class="ds-sankey__node">入口 1000</span><span class="ds-sankey__band" style="width:62%"></span><span class="ds-sankey__node">规则 620</span></div>
```

## React 示例

```tsx
<SankeyFlowBand flows={[{ from: "入口", to: "规则", value: 620 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 带宽与流量成正比
- [ ] 节点名与数值同时显示
- [ ] 可筛选主要路径
- [ ] 等效表格可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
