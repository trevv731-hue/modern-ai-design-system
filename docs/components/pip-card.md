# 画中画微浮窗

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

macOS 原生视窗与流媒体画中画 (PiP) 风格的可折叠轻量浮窗；集成实时视频/图表监视画面与浮动快捷控制钮。

## 结构

- 画中画画面承载区
- 悬浮半透明快捷控制组 (关闭/恢复)
- 实时运行指示点 (Live)
- 浮窗底部标题栏

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

Tab 导航至放大/关闭控制按钮；Enter/Space 触发放大恢复或关闭浮窗。

## 使用细则

- 悬停时运用 scale(1.02) 与 36px 大投影，强化物理层级的悬浮感知。
- 控制按钮位于视频区域右上角，半透明暗色背景确保在各种明暗视频画面中清晰可见。
- 标题栏与视频区域实底隔离，文字自动单行省略截断。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pip" role="region" aria-label="画中画监视器"><div class="ds-pip__screen"><span>实时拓扑监控</span><div class="ds-pip__overlay"><button type="button" class="ds-pip__btn" aria-label="放大恢复" data-toast="恢复大窗口">⤢</button><button type="button" class="ds-pip__btn" aria-label="关闭画中画" data-toast="关闭浮窗">×</button></div></div><div class="ds-pip__caption"><span class="ds-pip__title">新加坡 Core-01 流量流向</span><span class="ds-pip__live">● 实时</span></div></div>
```

## React 示例

```tsx
<PipCard title="Core-01 流量监控" isLive={true} onExpand={expand} onClose={close} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 浮窗投影深邃自然层次分明
- [ ] 右上角操作按钮悬浮微放大平滑
- [ ] 标题文字过长时自动平滑省略
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
