# GitHub 多分支拓扑提交泳道图

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

GitHub 与 GitLab 分支提交历史图形化泳道卡（Commit Graph Swimlane）；双轴多轨道垂直拓扑连线、彩色分支提交圆点（主干蓝、合并紫、特性绿）、提交说明摘要、6位等宽 Hash 徽标与作者标识。

## 结构

- 纵向流水线列表卡片 (.ds-commit-swimlane)
- 左侧紧凑多轨道提交拓扑图元 (.ds-commit-swimlane__graph, .ds-commit-swimlane__node)
- 分支类型多色圆点 (.ds-commit-swimlane__node--merge, .ds-commit-swimlane__node--feat)
- 自动截断的提交消息文本 (.ds-commit-swimlane__msg)
- 等宽 Commit SHA 微标 (.ds-commit-swimlane__sha)

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

Tab 在提交列表项与 Commit SHA 间移动；Enter 查看对应 Commit 详情。

## 使用细则

- 具备 role="region" 与 aria-label 说明多分支提交图谱。
- 各分支色彩区别明显，且依赖位置语义区分主干与分支。
- 适合 Git 客户端、CI/CD 提交追踪、版本发布日志与代码审查记录。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-commit-swimlane" role="region" aria-label="分支提交关系泳道图"><div class="ds-commit-swimlane__row"><div class="ds-commit-swimlane__graph" aria-hidden="true"><span class="ds-commit-swimlane__track"></span><span class="ds-commit-swimlane__node ds-commit-swimlane__node--feat"></span></div><span class="ds-commit-swimlane__msg" title="feat: add visionos spatial transport bar">feat: add visionos spatial transport bar</span><code class="ds-commit-swimlane__sha">8f3a1c</code><span class="ds-commit-swimlane__author">trevv</span></div><div class="ds-commit-swimlane__row"><div class="ds-commit-swimlane__graph" aria-hidden="true"><span class="ds-commit-swimlane__track"></span><span class="ds-commit-swimlane__node ds-commit-swimlane__node--merge"></span></div><span class="ds-commit-swimlane__msg" title="merge branch feat/spatial into main">merge branch feat/spatial into main</span><code class="ds-commit-swimlane__sha">b2e04d</code><span class="ds-commit-swimlane__author">github-actions</span></div><div class="ds-commit-swimlane__row"><div class="ds-commit-swimlane__graph" aria-hidden="true"><span class="ds-commit-swimlane__track"></span><span class="ds-commit-swimlane__node"></span></div><span class="ds-commit-swimlane__msg" title="fix: align rotary knob detent arc">fix: align rotary knob detent arc</span><code class="ds-commit-swimlane__sha">69c5e2</code><span class="ds-commit-swimlane__author">trevv</span></div></div>
```

## React 示例

```tsx
<GithubCommitGraphSwimlane />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三行提交记录行高规整
- [ ] 绿、紫、蓝三色提交节点层次分明
- [ ] 等宽 SHA 标签居右对齐
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
