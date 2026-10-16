# VS Code & Cursor 底部状态栏微型交互坞

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

VS Code 与 Cursor IDE 底部经典的等宽状态栏组件；包含 SSH 远端连接药丸、Git 分支超前/落后指示器、实时编译同步旋转指示、问题告警计数及行号列号编码指示。

## 结构

- 底栏自适应容器 (.ds-status-bar)
- 左右两端操作按钮群 (.ds-status-bar__group)
- 强调色状态药丸项 (.ds-status-bar-item--accent)
- 微型图标与文本对齐规范 (.ds-status-bar-item__icon)
- 等宽字符与单行无折行约束

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

Tab 在底栏各个状态按钮间快速遍历；Enter 或 Space 唤起对应面板（如分支切换器、问题面板、编码选择器）。

## 使用细则

- 每个底栏按钮均声明明确的 aria-label 与 role="button"，同步状态声明 aria-live="polite"。
- 悬停与聚焦状态提供轻度背景色高亮反馈，对比度符合 WCAG AA 标准。
- 适合代码编辑器、云开发工作台、实时监控控制台及开发者工具底栏。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-status-bar" role="toolbar" aria-label="IDE 状态栏"><div class="ds-status-bar__group"><button type="button" class="ds-status-bar-item ds-status-bar-item--accent" aria-label="远程主机连接"><span class="ds-status-bar-item__icon">⤿</span><span>SSH: prod-us</span></button><button type="button" class="ds-status-bar-item" aria-label="Git 分支 main, 2 超前 1 落后"><span class="ds-status-bar-item__icon">⎇</span><span>main* 2↑ 1↓</span></button><button type="button" class="ds-status-bar-item" aria-label="问题报告: 0 错误, 2 警告"><span>⊗ 0 ⚠ 2</span></button></div><div class="ds-status-bar__group"><button type="button" class="ds-status-bar-item" aria-label="跳转光标位置 行 42 列 18"><span>Ln 42, Col 18</span></button><button type="button" class="ds-status-bar-item" aria-label="字符编码 UTF-8"><span>UTF-8</span></button><button type="button" class="ds-status-bar-item" aria-label="语言模式 TypeScript JSX"><span>TypeScript JSX</span></button></div></div>
```

## React 示例

```tsx
<VscodeStatusBarItem branch="main*" ahead={2} behind={1} line={42} col={18} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 状态栏项高度对齐统一
- [ ] 强调色项与常规项过渡自然
- [ ] 图标与数字文字间距舒适
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
