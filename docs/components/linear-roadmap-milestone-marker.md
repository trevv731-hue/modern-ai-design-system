# Linear 产品战略路线图里程碑标记器

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Linear 与 Productboard 产品战略路线图甘特图里程碑节点标记器（Roadmap Strategic Milestone Marker）；包含目标季度标签（Q4 2026）、战略主题标题、完成百分比胶囊（85%）与菱形旋转节点标记。

## 结构

- 紧凑圆角里程碑标记器 (.ds-roadmap-milestone)
- 45° 旋转菱形主色节点 (.ds-roadmap-milestone__diamond)
- 等宽季度标签与战略标题 (.ds-roadmap-milestone__quarter, .ds-roadmap-milestone__title)
- 绿色圆角完成度微胶囊 (.ds-roadmap-milestone__progress)

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

Tab 聚焦路线图里程碑节点；Enter 或 Space 打开里程碑关联的目标与工单详情抽屉。

## 使用细则

- 具备 role="button" 与完整 aria-label 播报季度、标题与完成率。
- 菱形节点旋转 45° 并具备外发光轮廓。
- 适合战略规划甘特图、项目里程碑追踪、团队 OKR 看板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-roadmap-milestone" role="button" tabindex="0" aria-label="产品路线图里程碑：Q4 2026 Design System v3 Multi-Platform Parity，完成率 85%"><div class="ds-roadmap-milestone__diamond" aria-hidden="true"></div><span class="ds-roadmap-milestone__quarter">Q4 2026</span><span class="ds-roadmap-milestone__title">Multi-Platform Parity</span><span class="ds-roadmap-milestone__progress">85%</span></div>
```

## React 示例

```tsx
<LinearRoadmapMilestoneMarker quarter="Q4 2026" title="Multi-Platform Parity" completionPct={85} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] Q4 2026 醒目等宽
- [ ] 旋转菱形主色节点
- [ ] 85% 绿色完成度胶囊
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
