# Fluent 面包屑导航条

[返回组件目录](../README.md) · Windows / Fluent · v3 新增

## 目的与边界

显示当前位置的层级路径，父级可点击返回，当前层只读，路径过长时折叠中间层级。

## 结构

- nav 地标
- 父级链接序列
- 折叠占位按钮
- 当前层文本
- 分隔符

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

Tab 依次进入可点击父级；折叠占位按钮用 Enter 展开完整路径。

## 使用细则

- 当前页面不做成链接，并用 aria-current=page 标注。
- 分隔符 aria-hidden，避免被反复朗读。
- 宽度不足时折叠中间层级，保留首层与末层。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<nav class="ds-crumb-bar" aria-label="面包屑"><a href="#overview">设计系统</a><span class="ds-crumb-bar__sep" aria-hidden="true">›</span><button type="button" class="ds-crumb-bar__ellipsis" aria-label="展开中间层级">…</button><span class="ds-crumb-bar__sep" aria-hidden="true">›</span><span aria-current="page">按钮</span></nav>
```

## React 示例

```tsx
<FluentBreadcrumbBar items={[{ href: "#overview", label: "设计系统" }, { label: "按钮" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 当前层不是链接且带 aria-current
- [ ] 分隔符不会被屏幕阅读器逐字读出
- [ ] 折叠层级展开后路径完整可读
- [ ] 窄屏下路径不会溢出容器
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
