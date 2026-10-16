# macOS Sequoia 沉浸式交通灯红黄绿窗口控制栏

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

macOS Sequoia 风格的沉浸式无缝标题与窗口控制栏；配备左侧红黄绿物理交通灯按键（带悬停符号展示）、居中窗口标题与右侧就绪状态胶囊。

## 结构

- 40px 高度磨砂高斯模糊标题栏 (.ds-mac-titlebar)
- 左侧三色交通灯容器 (.ds-mac-lights)
- 红、黄、绿独立控制圆点 (.ds-mac-light--close, --min, --max)
- 中部居中文档/应用标题 (.ds-mac-titlebar__title)
- 右侧操作状态区 (.ds-mac-titlebar__actions)

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

Tab 聚焦各个控制按钮；Enter/Space 触发关闭、最小化或最大化。

## 使用细则

- 交通灯符号默认 color: transparent，悬停容器整体显示真实微符号，精准还原 macOS 原生交互。
- 采用 backdrop-filter: blur(20px) 与微细边框，贴合系统窗口视觉层次。
- 左右两侧采用等宽预留（70px），确保中间标题几何居中不偏移。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-mac-titlebar" role="toolbar" aria-label="macOS 窗口标题控制栏"><div class="ds-mac-lights"><button type="button" class="ds-mac-light ds-mac-light--close" aria-label="关闭窗口">×</button><button type="button" class="ds-mac-light ds-mac-light--min" aria-label="最小化窗口">−</button><button type="button" class="ds-mac-light ds-mac-light--max" aria-label="最大化窗口">+</button></div><div class="ds-mac-titlebar__title"><span>🍎</span><span>AetherLink Client — macOS Sequoia</span></div><div class="ds-mac-titlebar__actions"><span class="ds-badge" style="font-size:10px">就绪</span></div></div>
```

## React 示例

```tsx
<MacTrafficLightBar title="AetherLink Client" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 交通灯悬停时符号平滑显现
- [ ] 标题文字严格处于中间位置
- [ ] 浅色深色主题下磨砂背景通透
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
