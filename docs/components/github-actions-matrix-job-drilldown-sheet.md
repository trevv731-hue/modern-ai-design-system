# GitHub Actions 矩阵执行多环境维度下钻清单

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub Actions CI 流水线中跨平台多架构执行矩阵（Matrix Strategy Execution Sheet）；展示针对 Ubuntu、macOS 与 Windows 及不同 Node 运行时（Node v20.x）的矩阵作业单元格、实时通过状态与并发统计。

## 结构

- 紧凑矩阵作业清单面板 (.ds-matrix-drilldown-sheet)
- 工作流标题与矩阵总数徽标 (.ds-matrix-drilldown-sheet__header, .ds-matrix-drilldown-sheet__badge)
- 三列环境作业矩阵网格 (.ds-matrix-drilldown-sheet__grid)
- 作业环境单元格 (操作系统/运行时/状态) (.ds-matrix-drilldown-sheet__cell)
- 底栏并发状态与通过统计 (.ds-matrix-drilldown-sheet__footer)

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

Tab 聚焦矩阵执行清单；屏幕阅读器自动播报工作流名称、总作业数与各项作业运行状态。

## 使用细则

- 具备 role="region" 与 role="list" 保证完整的无障碍树解析。
- 跨平台多版本单元格排列工整，即时反映各平台的构建健康度。
- 适合多端开源库构建视图、跨平台测试流水线、云原生自动化发布。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-matrix-drilldown-sheet" role="region" aria-label="矩阵作业执行清单：Cross-Platform CI Tests，通过 9/9 项作业"><div class="ds-matrix-drilldown-sheet__header"><span>Cross-Platform CI Tests</span><span class="ds-matrix-drilldown-sheet__badge">Matrix: 9</span></div><div class="ds-matrix-drilldown-sheet__grid" role="list"><div class="ds-matrix-drilldown-sheet__cell" role="listitem"><span class="ds-matrix-drilldown-sheet__cell-os">ubuntu-22.04</span><span class="ds-matrix-drilldown-sheet__cell-node">Node v20.x</span><span class="ds-matrix-drilldown-sheet__cell-status">✓ PASS</span></div><div class="ds-matrix-drilldown-sheet__cell" role="listitem"><span class="ds-matrix-drilldown-sheet__cell-os">macos-14</span><span class="ds-matrix-drilldown-sheet__cell-node">Node v20.x</span><span class="ds-matrix-drilldown-sheet__cell-status">✓ PASS</span></div><div class="ds-matrix-drilldown-sheet__cell" role="listitem"><span class="ds-matrix-drilldown-sheet__cell-os">windows-2022</span><span class="ds-matrix-drilldown-sheet__cell-node">Node v20.x</span><span class="ds-matrix-drilldown-sheet__cell-status">✓ PASS</span></div></div><div class="ds-matrix-drilldown-sheet__footer"><span>ALL JOBS CONCURRENT</span><span>Status: 9/9 Success</span></div></div>
```

## React 示例

```tsx
<GitHubActionsMatrixJobDrilldownSheet workflow="Cross-Platform CI Tests" matrixTotal={9} passedCount={9} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 跨平台多环境并排
- [ ] 9/9 全绿状态一目了然
- [ ] 并发作业高效调度
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
