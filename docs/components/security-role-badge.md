# 角色徽标

[返回组件目录](../README.md) · 安全 · v3 新增

## 目的与边界

在成员列表中标注角色类型与权限范围。

## 结构

- 角色名 (ds-role-badge)
- 权限范围摘要
- 可继承标记

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

徽标可聚焦；展开权限范围用按钮触发。

## 使用细则

- 自定义角色展示具体权限数量。
- 所有者与管理员用不同图标加文字区分。
- 悬停或聚焦时展示权限摘要。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<button type="button" class="ds-role-badge is-admin"><span aria-hidden="true">🛡️</span>管理员<small>12 项权限</small></button>
```

## React 示例

```tsx
<RoleBadge name="管理员" scope="12 项权限" tone="admin" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 自定义角色展示权限数量
- [ ] 所有者管理员图标加文字区分
- [ ] 聚焦展示权限摘要
- [ ] 徽标可键盘展开
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
