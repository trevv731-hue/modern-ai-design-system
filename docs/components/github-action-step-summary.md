# GitHub Actions CI/CD 流水线步骤概要卡

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub Actions 与 Vercel 部署控制台风格的任务步骤清单摘要卡片（CI/CD Job Run Step Summary）；深浅自适应、头部运行分支与工作流名、各步骤耗时与绿色勾选状态清单。

## 结构

- 结构化圆角卡片 (.ds-action-summary)
- 微内陷底色头部栏 (.ds-action-summary__head)
- 无边框任务步骤条目列表 (.ds-action-summary__list)
- 绿色高亮成功标记徽标 (.ds-action-summary__icon)
- 右侧等宽耗时字色 (.ds-action-summary__time)

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

Tab 键依次聚焦各个步骤以查看该步骤的详细控制台 stdout 日志。

## 使用细则

- role="region" 配合 aria-label 完整概述任务名称与分支。
- 步骤成功状态由绿色勾选符和文本共同支持，对比度达到 WCAG AAA 标级。
- 适合持续集成流水线、构建进度展示、自动化测试报告与微服务部署看板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-action-summary" role="region" aria-label="GitHub Actions 工作流概要: CI Pipeline / Test &amp; Build"><div class="ds-action-summary__head"><span>CI Pipeline / Test &amp; Build</span><span style="font-family:var(--ds-type-mono);font-weight:500;opacity:0.8">(main)</span></div><ul class="ds-action-summary__list"><li class="ds-action-summary__step"><span style="display:inline-flex;align-self:center;align-items:center"><span class="ds-action-summary__icon" aria-hidden="true">✓</span><span>Set up Node.js v24.x</span></span><span class="ds-action-summary__time">1.2s</span></li><li class="ds-action-summary__step"><span style="display:inline-flex;align-self:center;align-items:center"><span class="ds-action-summary__icon" aria-hidden="true">✓</span><span>Install dependencies</span></span><span class="ds-action-summary__time">14.5s</span></li><li class="ds-action-summary__step"><span style="display:inline-flex;align-self:center;align-items:center"><span class="ds-action-summary__icon" aria-hidden="true">✓</span><span>Run motion &amp; contrast linter</span></span><span class="ds-action-summary__time">3.1s</span></li><li class="ds-action-summary__step"><span style="display:inline-flex;align-self:center;align-items:center"><span class="ds-action-summary__icon" aria-hidden="true">✓</span><span>Execute test suite (182 specs)</span></span><span class="ds-action-summary__time">2.8s</span></li></ul></div>
```

## React 示例

```tsx
<GithubActionJobSummary workflowName="CI Pipeline / Test & Build" branch="main" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 头部内凹底色与主体清晰区分
- [ ] 步骤列表左右对齐严谨
- [ ] 绿色对勾鲜艳清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
