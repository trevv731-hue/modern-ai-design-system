# 灵动胶囊浮岛

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

iOS 灵动岛与 macOS 顶部通知胶囊；悬浮于视窗正上方，以形变动效实时展示核心连接状态、播放进度或下载摘要。

## 结构

- 自适应圆角胶囊外壳
- 前置状态微指示点
- 中间主状态说明
- 尾部轻量操作或徽标

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

Tab 聚焦至灵动岛内部交互控件；Space/Enter 展开扩展面板；Escape 退出展开。

## 使用细则

- 默认呈现极致紧凑的微药丸轮廓，不遮挡主操作视区。
- 展开时自顶部居中向四周弹性延展（scale & transform）。
- 高层级阴影（0 12px 28px -6px）与内嵌细高光保证任何背景下皆清晰可见。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div style="display:flex;justify-content:center;width:100%;padding:12px 0"><div class="ds-island" role="status" aria-live="polite"><div class="ds-island__capsule"><div class="ds-island__leading"><span class="ds-status-dot ds-status-dot--live"></span><span>香港 IPLC 专线</span></div><div class="ds-island__trailing"><span class="ds-badge ds-badge--success">24ms</span></div></div></div></div>
```

## React 示例

```tsx
<DynamicIsland leading={<><span className="ds-status-dot ds-status-dot--live" /><span>香港专线</span></>} trailing={<span className="ds-badge ds-badge--success">24ms</span>} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 胶囊悬浮高光在深色浅色下层次清晰
- [ ] 展开动效流畅无布局重排
- [ ] 状态切换时读屏器通过 aria-live 播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
