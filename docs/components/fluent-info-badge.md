# Fluent 信息徽标

[返回组件目录](../README.md) · Windows / Fluent · v3 新增

## 目的与边界

在图标或文字旁提示新内容、数量或需要注意的状态，用很小的面积传达可扫读的信号。

## 结构

- 徽标外壳 (ds-info-badge)
- 数值或圆点
- 宿主图标或文字
- 可选描边隔离

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

徽标本身不获得焦点；宿主控件提供可访问名称并在名称中包含徽标含义。

## 使用细则

- 数值超过 99 时显示 99+，不截断为无法理解的字符。
- 徽标必须配合可访问名称，不靠颜色或位置单独表达。
- 未知数量时用圆点而不是编造数字。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-toolbar"><span class="ds-info-badge" role="status" aria-label="3 条未读通知">3</span><span>通知</span><span class="ds-info-badge ds-info-badge--dot" role="status" aria-label="有新的活动"></span><span>活动</span></div>
```

## React 示例

```tsx
<FluentInfoBadge count={3} label="未读通知" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 徽标数值与真实未读数一致
- [ ] 屏幕阅读器读出的名称包含徽标含义
- [ ] 徽标在深色与浅色主题下都不被背景吞没
- [ ] 缩放 200% 时徽标不遮挡宿主图标
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
