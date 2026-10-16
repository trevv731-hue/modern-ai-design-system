# Linear 实时同步状态脉冲药丸

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Linear 协作引擎 WebSocket 实时长连接同步状态指示药丸（Real-Time Sync Pill）；绿色脉冲微光晕、当前同步状态（SYNCED）、当前 WebSocket 往返延迟毫秒数及重连交互。

## 结构

- 全圆角胶囊容器 (.ds-linear-sync-status)
- 双重扩散呼吸小光点 (.ds-linear-sync-status__dot, .ds-linear-sync-status__ping)
- 同步状态文本 (SYNCED / CONNECTING)
- 等宽延迟徽标 (.ds-linear-sync-status__latency)

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

Tab 聚焦同步指示药丸；Enter 触发手动强制重新连接。

## 使用细则

- 具备 role="status" 与 aria-label 完整播报连接状态与往返延迟。
- 脉冲动效克制，在 prefers-reduced-motion 下自动暂停。
- 适用于协作看板、协同画板、分布式云端数据库同步指示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-linear-sync-status" role="status" aria-label="实时同步状态：SYNCED，延迟：18ms"><span class="ds-linear-sync-status__dot"><span class="ds-linear-sync-status__ping" aria-hidden="true"></span></span><span>SYNCED</span><span class="ds-linear-sync-status__latency">18ms</span></div>
```

## React 示例

```tsx
<LinearSyncStatusIndicator status="SYNCED" latencyMs={18} socketEndpoint="wss://linear.app/live" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 绿色微点带脉冲光圈
- [ ] 18ms 延迟等宽对齐
- [ ] 整体药丸高度仅 24px 极致紧凑
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
