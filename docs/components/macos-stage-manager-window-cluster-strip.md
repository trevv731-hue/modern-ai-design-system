# macOS 台前调度多窗口集群叠放指示条

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

macOS 台前调度（Stage Manager）侧边栏中的多应用窗口空间叠放集群指示条（Window Cluster Strip）；展示集群缩略图层叠效果、关联应用图标集（⚡/📝/🌐）、窗口总数统计（3 windows）与一键前台激活按键。

## 结构

- 圆角窗口集群指示条 (.ds-stage-cluster-strip)
- 三层错位层叠应用缩略图标 (.ds-stage-cluster-strip__thumb-stack, .ds-stage-cluster-strip__thumb)
- 集群标题与窗口数量标签 (.ds-stage-cluster-strip__meta, .ds-stage-cluster-strip__title, .ds-stage-cluster-strip__count)
- 一键前台激活按键 (.ds-stage-cluster-strip__action)

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

Tab 聚焦激活按钮；Enter 或 Space 触发激活当前窗口集群并置于前台。

## 使用细则

- 具备 role="group" 与 aria-label 完整播报窗口集群名称与窗口总数。
- 三层错位层叠直观再现 macOS Stage Manager 经典窗口堆叠拟物层次。
- 适合多任务工作区切换器、侧边栏快捷窗口管理、桌面生产力工具。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-stage-cluster-strip" role="group" aria-label="台前调度窗口集群：Development & Docs，包含 3 个窗口"><div class="ds-stage-cluster-strip__thumb-stack" aria-hidden="true"><div class="ds-stage-cluster-strip__thumb">⚡</div><div class="ds-stage-cluster-strip__thumb">📝</div><div class="ds-stage-cluster-strip__thumb">🌐</div></div><div class="ds-stage-cluster-strip__meta"><span class="ds-stage-cluster-strip__title">Development & Docs</span><span class="ds-stage-cluster-strip__count">3 windows</span></div><button type="button" class="ds-stage-cluster-strip__action" aria-label="切换到窗口组：Development & Docs">↗</button></div>
```

## React 示例

```tsx
<MacStageManagerWindowClusterStrip clusterName="Development & Docs" windowCount={3} appIcons={["⚡", "📝", "🌐"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三层窗口拟物层叠
- [ ] 3 windows 清晰统计
- [ ] 一键前台激活切换
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
