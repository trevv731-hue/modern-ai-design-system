# Linear 工单双向关联依赖徽标

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Linear 风格的高密度工单相互关联标记微胶囊；展示关系类型（blocks、blocked by、relates to）、关联目标工单号及目标工单的当前完成状态圆点。

## 结构

- 圆角微边框药丸 (.ds-issue-relation)
- 语义动作小图标 (.ds-issue-relation__icon)
- 关系类型说明 (.ds-issue-relation__label)
- 等宽工单标识 (.ds-issue-relation__id)
- 目标工单状态彩色圆点 (.ds-issue-relation__status)

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

Tab 导航至关联徽标；Enter 或 Space 打开目标工单详情浮层。

## 使用细则

- 具备 role="link" 与 tabindex="0"，通过 aria-label 完整报读关系类型、工单 ID 与状态。
- 微型状态圆点配合文字提示，不单独依赖颜色传达语义。
- 适合复杂敏捷项目依赖图谱、缺陷追踪、阻塞分析与版本发布清单。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-issue-relation" role="link" tabindex="0" aria-label="工单关联: blocks ENG-402, 当前状态 In Progress"><span class="ds-issue-relation__icon" aria-hidden="true">⛔</span><span class="ds-issue-relation__label">blocks</span><span class="ds-issue-relation__id">ENG-402</span><span class="ds-issue-relation__status" title="工单状态: In Progress"></span></div>
```

## React 示例

```tsx
<LinearIssueRelationBadge relation="blocks" issueId="ENG-402" status="In Progress" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 关系标签与工单号层次分明
- [ ] 状态小圆点圆润且色彩鲜艳
- [ ] 悬浮背景变暗微反馈细腻
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
