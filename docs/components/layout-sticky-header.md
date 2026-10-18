# 吸顶头部

[返回组件目录](../README.md) · 布局 · v3 新增

## 目的与边界

页面滚动时保持可见的头部，承载标题与关键操作。

## 结构

- 头部外壳 (ds-sticky-head)
- 标题
- 关键操作
- 滚动阴影
- 折叠态

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

操作按钮可聚焦；折叠态仅显示标题与主操作。

## 使用细则

- 滚动超过一屏后出现阴影强化层次。
- 大标题在滚动中折叠为紧凑标题。
- 吸顶不遮挡锚点跳转目标。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sticky-head is-scrolled"><div class="ds-sticky-head__title"><strong>组件规范总览</strong><small>569 个组件 · 12 个分类</small></div><div class="ds-sticky-head__actions"><button type="button">筛选</button><button type="button" class="is-primary">新建组件</button></div></div>
```

## React 示例

```tsx
<StickyHeader title="组件规范总览" meta="569 个组件 · 12 个分类" scrolled />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 滚动后出现阴影
- [ ] 大标题折叠为紧凑
- [ ] 不遮挡锚点目标
- [ ] 操作按钮可聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
