# 快捷键提示

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

展示可用的键盘命令，而不把显示标签误当真实绑定。

## 结构

- kbd 元素
- 平台正确的修饰键
- 对应动作说明

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

提示本身不接受焦点；只有已实现的快捷键才展示。

## 使用细则

- macOS 用 ⌘，Windows/Linux 用 Ctrl。
- 应用在输入框中不拦截原生编辑快捷键。
- 冲突快捷键提供替代按钮。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<span>搜索组件 <kbd class="ds-key">Ctrl</kbd> + <kbd class="ds-key">K</kbd></span>
```

## React 示例

```tsx
<KeyboardHint label="搜索组件" keys={["Ctrl", "K"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 快捷键实际绑定
- [ ] 输入框中行为不冲突
- [ ] 不同平台标签正确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
