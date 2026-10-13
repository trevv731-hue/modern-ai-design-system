# 按钮

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

提交一个明确且可完成的动作；每个任务区域最多一个主要按钮。

## 结构

- 可读的动词标签
- 可选前置图标
- 异步加载指示
- 44px 默认点击区域

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

Tab 进入；Enter 或 Space 执行动作；loading 和 disabled 期间禁止重复执行。

## 使用细则

- 主要按钮使用 action/onAction；次要按钮使用实底和描边。
- 异步开始立即显示加载状态，只有确认成功才显示成功反馈。
- 删除等高影响动作使用 danger；不能只用红色表达风险。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-toolbar"><button class="ds-button" data-toast="已触发示例操作">主要操作</button><button class="ds-button ds-button--secondary">次要操作</button><button class="ds-button ds-button--ghost">文本操作</button><button class="ds-button" disabled>不可用</button></div>
```

## React 示例

```tsx
<Button loading={saving} onClick={save}>保存设置</Button>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 连续点击只发送一个请求
- [ ] 禁用状态不改变布局
- [ ] 标签扩大 200% 时仍可读
- [ ] 按钮文本与底色对比度至少 4.5:1
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
