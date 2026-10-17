# Windows 通知中心分组

[返回组件目录](../README.md) · Windows / Fluent · v3 新增

## 目的与边界

按应用聚合通知，支持展开与折叠、单条清除和整组清除，避免通知刷屏覆盖当前工作。

## 结构

- 分组标题与计数 (ds-notify-group__head)
- 展开 / 折叠开关
- 通知卡片列表
- 整组清除按钮

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

Tab 进入分组；Enter 展开折叠；分组内通知按 Tab 顺序进入；清除后焦点落到下一条或分组头。

## 使用细则

- 分组标题写明应用名与未读条数。
- 清除操作后可撤销，撤销时间不少于 5 秒。
- 重要通知不能只靠自动消失的 Toast 承载。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-notify-group" aria-label="通知分组"><header class="ds-notify-group__head"><strong>订阅更新</strong><span class="ds-badge ds-badge--info">3 条</span><button type="button" class="ds-button ds-button--ghost" aria-expanded="true">折叠</button></header><ul class="ds-notify-group__list"><li class="ds-notify-item"><strong>节点已更新</strong><span>19 个节点导入成功</span></li><li class="ds-notify-item"><strong>测速完成</strong><span>最快 42 ms</span></li></ul></section>
```

## React 示例

```tsx
<WindowsNotificationCenterGroup app="订阅更新" items={[{ title: "节点已更新", body: "19 个节点导入成功" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 折叠与展开状态对屏幕阅读器可见
- [ ] 清除后可撤销，撤销入口可键盘到达
- [ ] 分组计数与实际条目数一致
- [ ] 通知内容不写入凭据或完整链接
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
