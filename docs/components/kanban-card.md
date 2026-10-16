# 敏捷任务看板卡片

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Linear 与 Notion 风格的可拖拽任务看板卡片；集成业务标签、优先级图标、任务编号与负责人头像。

## 结构

- 任务分类微胶囊标签
- 任务标题正文
- 任务 ID 标识符
- 优先级红黄绿指示圆点
- 负责人微头像

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

Tab 聚焦至卡片；Enter 打开卡片详情模态窗；Space 可配合拖拽动作。

## 使用细则

- 悬停时运用 translateY(-2px) 与主题阴影上浮，营造纸质卡片被拿起的物理手感。
- 优先级点与标签色彩统一采用语义变量，不硬编码色值。
- 标题文字两行截断，避免卡片过长破坏看板纵向规整性。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-kanban" role="article" tabindex="0" data-toast="打开任务详情"><div class="ds-kanban__tags"><span class="ds-kanban__tag">网络内核</span><span class="ds-kanban__tag">v3.2</span></div><h4 class="ds-kanban__title">支持 QUIC 协议多径流聚合传输</h4><div class="ds-kanban__meta"><div style="display:inline-flex;align-items:center;gap:6px"><span style="font-family:var(--ds-type-mono);font-size:11px">AET-284</span><span style="color:var(--ds-danger);font-weight:700">● 紧急</span></div><span class="ds-avatar ds-avatar--xs" title="Trevor">T</span></div></div>
```

## React 示例

```tsx
<KanbanCard title="支持 QUIC 协议" priority="urgent" id="AET-284" assignee="Trevor" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 悬浮上浮动效平滑顺畅
- [ ] 聚焦边框完整包裹卡片边缘
- [ ] 标签与正文对比度达标
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
