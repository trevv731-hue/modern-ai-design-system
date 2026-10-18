# 冻结列

[返回组件目录](../README.md) · 表格 · v3 新增

## 目的与边界

在横向滚动时固定关键列，如首列名称或末列操作。

## 结构

- 冻结列 (ds-pin-col)
- 阴影分隔
- 滚动容器
- 冻结切换

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

滚动容器可聚焦；方向键横向滚动。

## 使用细则

- 冻结列与滚动列之间有阴影分隔。
- 冻结设置可切换并记住偏好。
- 窄屏下冻结列数自动减少。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pin-col"><table><tr><td class="is-pinned">设计规范 v3</td><td>评审中</td><td>42 个组件</td><td>10-16</td><td class="is-actions"><button type="button">编辑</button></td></tr></table></div>
```

## React 示例

```tsx
<PinnedColumn first="设计规范 v3" cells={["评审中", "42 个组件", "10-16"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 冻结列有阴影分隔
- [ ] 冻结设置可切换记忆
- [ ] 窄屏减少冻结列数
- [ ] 滚动容器方向键可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
