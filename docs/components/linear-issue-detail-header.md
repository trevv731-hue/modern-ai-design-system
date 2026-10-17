# Linear 问题详情头

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

在工作项顶部集中展示编号、状态、负责人与优先级，让上下文不依赖滚动位置记忆。

## 结构

- 编号与标题行
- 状态徽标
- 负责人头像
- 优先级图标与创建时间

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

Tab 依次进入状态、负责人等可编辑控件；Enter 打开选择菜单。

## 使用细则

- 编号与标题始终同行可见，窄屏才换行。
- 状态与优先级同时给出文字，不只用图标。
- 创建时间显示绝对时间，鼠标悬浮可看完整时间戳。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<header class="ds-issue-head" role="group" aria-label="问题详情"><span class="ds-issue-head__id">AET-248</span><strong class="ds-issue-head__title">订阅刷新偶发失败</strong><span class="ds-badge ds-badge--warning">处理中</span><span class="ds-persona" aria-label="负责人 周舟">周</span><span class="ds-issue-head__meta">高优先级 · 创建于 10-15</span></header>
```

## React 示例

```tsx
<LinearIssueDetailHeader id="AET-248" title="订阅刷新偶发失败" status="处理中" assignee="周舟" priority="high" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 编号与标题在窄屏仍可读
- [ ] 状态与优先级有文字说明
- [ ] 时间显示完整可核对
- [ ] 键盘可操作各编辑控件
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
