# macOS 风格窗口壳体

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

macOS Sequoia 原生视窗镀铬外壳；整合三色可交互红绿灯控制按钮、磨砂标题栏与窗口内容画布。

## 结构

- 圆角窗口轮廓与深层投影
- 红黄绿物理红绿灯按钮
- 居中应用标题栏
- 内容隔离底层画布

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

Tab 可导航至窗口内交互控件；红绿灯按钮支持点击与键盘 Enter 触发关闭或最小化。

## 使用细则

- 标题栏底色采用 chrome 语义变量与毛玻璃通透质感，极具 macOS 工业质感。
- 窗口外边框具备微妙 1px 细线描边与 42px 大景深阴影，浮层感强烈。
- 红黄绿三色控制点尺寸为 12px，间距 7px，精确还原原生物理比例。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-mac-window"><div class="ds-mac-titlebar"><div class="ds-mac-lights"><span class="ds-mac-light ds-mac-light--close" role="button" aria-label="关闭窗口" data-toast="关闭窗口"></span><span class="ds-mac-light ds-mac-light--min" role="button" aria-label="最小化窗口" data-toast="最小化窗口"></span><span class="ds-mac-light ds-mac-light--max" role="button" aria-label="最大化窗口" data-toast="全屏最大化"></span></div><span class="ds-mac-title">AetherLink — 节点调度中心</span><div style="width:48px"></div></div><div class="ds-mac-content"><div style="display:flex;align-items:center;justify-content:space-between"><strong style="font-size:14px">系统就绪</strong><span class="ds-badge ds-badge--success">多径模式已激活</span></div><p style="font-size:12px;color:var(--ds-muted);margin:8px 0 0">已接入 12 个边缘网关，自动优选延迟最低的出口路径。</p></div></div>
```

## React 示例

```tsx
<MacWindow title="AetherLink"><DashboardContent /></MacWindow>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 红绿灯三色比例与圆角精确匹配 macOS 规范
- [ ] 深浅模式下标题栏与内容区明暗层级自然
- [ ] 红绿灯按钮具备可访问名称与点击反馈
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
