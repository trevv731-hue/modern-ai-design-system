# Linear 敏捷看板泳道折叠徽标切换器

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

Linear 与 Jira 敏捷看板横向泳道折叠展开与统计徽标切换器（Kanban Swimlane Collapse & Count Badge Toggle）；包含旋转指示折叠箭头、泳道类别名称、工单总量计数徽章及快捷键盘导航。

## 结构

- 圆角微拟物触发条 (.ds-swimlane-toggle)
- 旋转指示箭头 (.ds-swimlane-toggle__chevron)
- 泳道分组文本
- 等宽工单统计计数徽章 (.ds-swimlane-toggle__count)

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

Enter 或 Space 切换泳道折叠与展开状态；Tab 导航至下一个泳道。

## 使用细则

- 具备 aria-expanded 与 aria-label 说明当前泳道名称、数量与折叠状态。
- 折叠箭头动效平滑且在 prefers-reduced-motion 下自动关闭过渡。
- 适合复杂任务看板、分组工单流、甘特图层级大纲。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<button type="button" class="ds-swimlane-toggle" aria-expanded="true" aria-label="Core Runtime 看板泳道，包含 14 个工单，当前已展开"><span class="ds-swimlane-toggle__chevron" aria-hidden="true">▼</span><span>Core Runtime</span><span class="ds-swimlane-toggle__count">14</span></button>
```

## React 示例

```tsx
<LinearSwimlaneCollapseToggle name="Core Runtime" count={14} isCollapsed={false} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 箭头指示清晰微动态旋转
- [ ] 14 个工单计数胶囊显眼
- [ ] 底色悬浮响应柔和
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
