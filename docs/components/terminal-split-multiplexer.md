# tmux & Warp 分屏多窗格终端虚拟工作台

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

tmux、Warp 与 Zed 风格的高性能多窗格分屏虚拟终端；支持横向/纵向多窗格平铺、高亮激活窗格边框、独立命令标题栏与底部会话状态指示条。

## 结构

- 分屏终端容器 (.ds-term-multiplexer)
- 双栏分屏工作区 (.ds-term-multiplexer__panes)
- 独立终端窗格 (.ds-term-pane)
- 激活窗格高亮指示 (.ds-term-pane.is-active)
- 窗格命令标题栏 (.ds-term-pane__head)
- 底部 tmux 绿色会话状态栏 (.ds-term-multiplexer__status)

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

Ctrl+b 配合方向键在窗格间切换焦点；支持标准等宽输入与滚屏操作。

## 使用细则

- 窗格激活时利用 box-shadow: inset 0 0 0 1px var(--ds-accent) 实现无布局抖动的焦点高亮。
- 底部状态栏模拟原生终端的窗口索引与电源指示，增强沉浸式开发者体验。
- 适用于云原生监控终端、DevOps 流水线日志及集成式代码编辑预览环境。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-term-multiplexer" role="region" aria-label="分屏多窗格终端"><div class="ds-term-multiplexer__panes"><div class="ds-term-pane is-active"><div class="ds-term-pane__head"><span>nvim src/index.ts</span><span>pane 1</span></div><pre class="ds-term-pane__body">const server = createServer();
server.listen(8080);</pre></div><div class="ds-term-pane"><div class="ds-term-pane__head"><span>cargo watch -x run</span><span>pane 2</span></div><pre class="ds-term-pane__body">Finished dev [unoptimized] target(s)
Running `target/debug/app`</pre></div></div><div class="ds-term-multiplexer__status"><span class="ds-term-multiplexer__window-pill">0:bash*</span><span>tmux: 2 windows · session: main</span><span>⚡ 100%</span></div></div>
```

## React 示例

```tsx
<SplitTerminalMultiplexer activePane={0} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 激活窗格边框高亮对比鲜明
- [ ] 窗格内代码使用等宽字体对齐
- [ ] 底部状态栏在不同屏幕自适应
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
