# 面包屑

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

说明深层页面的父级路径，帮助返回上下文。

## 结构

- nav 地标
- 按层级排序的链接
- 视觉分隔符
- 当前页文本

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

Tab 到父级链接；当前页无需做重复可点击链接。

## 使用细则

- 浅层单页不强行加入面包屑。
- 分隔符 aria-hidden。
- 移动端可保留最近两级并允许展开。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<nav aria-label="面包屑"><a href="#overview">设计系统</a> <span aria-hidden="true"> / </span><a href="#components">组件</a> <span aria-hidden="true"> / </span><span aria-current="page">按钮</span></nav>
```

## React 示例

```tsx
<Breadcrumb items={[{ href: "#overview", label: "设计系统" }, { href: "#components", label: "组件" }, { label: "按钮" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 链接文本具有上下文
- [ ] 当前页面有 aria-current
- [ ] 分隔符不会被反复读出
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
