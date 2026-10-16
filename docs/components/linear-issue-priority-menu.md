# Linear 触觉多级工单优先级选择微面板

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Linear 与 Jira 风格的精细工单优先级选择弹出面板；包含 Urgent（赤红）、High（橙红）、Medium（黄）、Low（天蓝）与无优先级选项，支持单键快捷键与选定标记。

## 结构

- 圆角微型浮层底座 (.ds-priority-menu)
- 多级优先级菜单项 (.ds-priority-item)
- 状态彩色语义图标 (.ds-priority-item__icon)
- 优先级中文/英文标签
- 右侧数字快捷键徽章 (.ds-priority-item__kbd)

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

上下箭头在各优先级选项间导航；按数字键 1~4 或 0 瞬间选定；Enter 确认；Escape 关闭。

## 使用细则

- 采用 role="menu" 与 role="menuitemradio"，严格遵循 WAI-ARIA 菜单无障碍约定。
- 选定项使用柔和强调背景 (.is-selected) 与加粗字重，辨识度极高。
- 适合工单管理、任务看板、缺陷跟踪与敏捷协作工具。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-priority-menu" role="menu" aria-label="优先级选择菜单"><button type="button" role="menuitemradio" aria-checked="true" class="ds-priority-item is-selected"><div class="ds-priority-item__left"><span class="ds-priority-item__icon ds-priority-item__icon--urgent">!</span><span>紧急 Urgent</span></div><kbd class="ds-priority-item__kbd">1</kbd></button><button type="button" role="menuitemradio" aria-checked="false" class="ds-priority-item"><div class="ds-priority-item__left"><span class="ds-priority-item__icon ds-priority-item__icon--high">▲</span><span>高 High</span></div><kbd class="ds-priority-item__kbd">2</kbd></button><button type="button" role="menuitemradio" aria-checked="false" class="ds-priority-item"><div class="ds-priority-item__left"><span class="ds-priority-item__icon ds-priority-item__icon--med">■</span><span>中 Medium</span></div><kbd class="ds-priority-item__kbd">3</kbd></button><button type="button" role="menuitemradio" aria-checked="false" class="ds-priority-item"><div class="ds-priority-item__left"><span class="ds-priority-item__icon ds-priority-item__icon--low">▼</span><span>低 Low</span></div><kbd class="ds-priority-item__kbd">4</kbd></button></div>
```

## React 示例

```tsx
<LinearPriorityMenu selected="urgent" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 优先级色标符合国际通行规范
- [ ] 快捷键徽标垂直居中
- [ ] 菜单项悬停平滑反馈
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
