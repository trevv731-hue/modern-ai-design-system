# 代码微胶囊

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

高频单行命令、Token 或订阅链接的极简展示与一键复制；兼顾 Vercel / Stripe 终端微交互。

## 结构

- 等宽代码文本容器
- 一键复制动作按钮
- 成功对勾状态过渡

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

Tab 聚焦复制按钮；Enter/Space 触发复制；屏幕阅读器通过 live region 获取反馈。

## 使用细则

- 长链接或凭据自动溢出省略，避免撑坏父容器。
- 敏感数据支持脱敏显示或点击后展示。
- 复制成功必须给出微反馈（如对勾形变或 Toast）。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-snippet"><code>clash -d ~/.config/clash -f config.yaml</code><button class="ds-snippet__copy" data-snippet="clash -d ~/.config/clash -f config.yaml" aria-label="复制终端命令" title="复制">⧉</button></div>
```

## React 示例

```tsx
<Snippet code="clash -d ~/.config/clash -f config.yaml" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 文本可手动鼠标选中复制
- [ ] 一键复制按钮具备状态反馈
- [ ] 在小屏窄容器内文本自动省略
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
