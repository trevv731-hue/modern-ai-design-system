# GitHub Actions 跨平台矩阵构建网格

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub Actions CI/CD 多操作系统与多运行时矩阵构建状态网格（Multi-OS & Arch Matrix Build Job Grid）；按 Ubuntu / macOS / Windows 行划分、针对 Node.js 18 / 20 / 22 矩阵单元格展示成功、失败与运行中状态微标。

## 结构

- 紧凑圆角矩阵容器 (.ds-matrix-job-grid)
- 工作流名称与版本标签头部 (.ds-matrix-job-grid__header)
- 操作系统行单元 (.ds-matrix-job-grid__row, .ds-matrix-job-grid__os)
- 矩阵单元格网格及绿勾/红叉/黄点状态微标 (.ds-matrix-job-grid__cells, .ds-matrix-job-grid__cell)

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

Tab 导航进入网格；各构建单元格 title 播报对应 OS 与运行时的构建结果。

## 使用细则

- 具备 role="region" 与 aria-label 说明跨平台构建矩阵状态。
- 状态单元格通过颜色与语义符号（✓/✕/●）双重传递状态，无障碍合规。
- 适合自动化 CI/CD 仪表板、多平台发布监控、DevOps 流水线。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-matrix-job-grid" role="region" aria-label="test-matrix 跨平台构建矩阵状态"><div class="ds-matrix-job-grid__header"><span>构建矩阵: test-matrix</span><span style="font-family:var(--ds-type-mono);font-size:11px;color:var(--ds-muted)">Node 18/20/22</span></div><div class="ds-matrix-job-grid__rows"><div class="ds-matrix-job-grid__row"><span class="ds-matrix-job-grid__os">Ubuntu</span><div class="ds-matrix-job-grid__cells"><span class="ds-matrix-job-grid__cell is-success" title="Ubuntu Node v18: pass">✓</span><span class="ds-matrix-job-grid__cell is-success" title="Ubuntu Node v20: pass">✓</span><span class="ds-matrix-job-grid__cell is-success" title="Ubuntu Node v22: pass">✓</span></div></div><div class="ds-matrix-job-grid__row"><span class="ds-matrix-job-grid__os">macOS</span><div class="ds-matrix-job-grid__cells"><span class="ds-matrix-job-grid__cell is-success" title="macOS Node v18: pass">✓</span><span class="ds-matrix-job-grid__cell is-success" title="macOS Node v20: pass">✓</span><span class="ds-matrix-job-grid__cell is-running" title="macOS Node v22: running">●</span></div></div><div class="ds-matrix-job-grid__row"><span class="ds-matrix-job-grid__os">Windows</span><div class="ds-matrix-job-grid__cells"><span class="ds-matrix-job-grid__cell is-success" title="Windows Node v18: pass">✓</span><span class="ds-matrix-job-grid__cell is-failure" title="Windows Node v20: fail">✕</span><span class="ds-matrix-job-grid__cell is-success" title="Windows Node v22: pass">✓</span></div></div></div></div>
```

## React 示例

```tsx
<GitHubActionsMatrixJobGrid workflowName="test-matrix" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] Ubuntu/macOS/Windows 三行分立
- [ ] 9 格矩阵状态符号清晰
- [ ] 失败项红底白叉醒目
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
