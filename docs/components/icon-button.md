# 图标按钮

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

提供窗口、工具栏中的紧凑动作，必须有可访问名称。

## 结构

- 18–20px 图标
- 至少 36px 桌面点击区
- 可访问名称
- 可选原生 tooltip

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

Tab 导航；Enter/Space 激活。不要让 tooltip 成为唯一名称。

## 使用细则

- 只有高辨识度动作可以省略可见文字。
- 移动端点击区扩大到 48px。
- 窗口控制区不参与拖拽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<button class="ds-button ds-button--secondary ds-button--icon" aria-label="刷新列表" title="刷新列表" data-toast="列表已刷新">↻</button>
```

## React 示例

```tsx
<IconButton label="刷新列表" onClick={refresh}>↻</IconButton>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 屏幕阅读器读出“刷新列表，按钮”
- [ ] 键盘焦点完整可见
- [ ] 图标与文字动作结果一致
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
