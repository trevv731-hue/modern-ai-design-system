# macOS 菜单栏隔空播放 2 多房间音频路由面板

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

macOS 顶部菜单栏音频输出切换面板（AirPlay 2 Multi-Room Route Sheet）；列出可用输出设备、分组状态与音量，并标注当前输出目标、无损格式与同步延迟。

## 结构

- 半透明圆角路由面板 (.ds-airplay-route-sheet)
- 标题与同步状态徽标 (.ds-airplay-route-sheet__header, .ds-airplay-route-sheet__badge)
- 输出设备清单 (.ds-airplay-route-sheet__devices, .ds-airplay-route-sheet__row)
- 设备名与分组标记 (.ds-airplay-route-sheet__name)
- 单设备音量 (.ds-airplay-route-sheet__vol)
- 格式与延迟页脚 (.ds-airplay-route-sheet__footer)

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

Tab 在设备行之间移动；Enter 或 Space 切换输出目标；Escape 关闭面板并把焦点交还菜单栏图标。

## 使用细则

- 面板使用 region 角色，aria-label 需说明当前输出设备。
- 设备清单使用 role="list" 与 listitem，让屏幕阅读器读出设备数量。
- 已分组与未分组用不同符号区分，不能只靠颜色表达。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-airplay-route-sheet" role="region" aria-label="隔空播放 2 多房间音频路由：当前输出至 Living Room Stereo HomePod"><div class="ds-airplay-route-sheet__header"><span>AirPlay 2 Multi-Room</span><span class="ds-airplay-route-sheet__badge">Synced</span></div><div class="ds-airplay-route-sheet__devices" role="list"><div class="ds-airplay-route-sheet__row" role="listitem"><span class="ds-airplay-route-sheet__name"><span>✓</span><span>MacBook Pro Speakers</span></span><span class="ds-airplay-route-sheet__vol">72%</span></div><div class="ds-airplay-route-sheet__row" role="listitem"><span class="ds-airplay-route-sheet__name"><span>✓</span><span>Living Room HomePod</span></span><span class="ds-airplay-route-sheet__vol">85%</span></div><div class="ds-airplay-route-sheet__row" role="listitem"><span class="ds-airplay-route-sheet__name"><span>○</span><span>Studio Display</span></span><span class="ds-airplay-route-sheet__vol">0%</span></div></div><div class="ds-airplay-route-sheet__footer"><span>Lossless 24-bit/48kHz</span><span>Latency: &lt;5ms</span></div></div>
```

## React 示例

```tsx
<MacMenuBarAirPlayAudioRouteSheet activeRoute="Living Room Stereo HomePod" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 当前输出设备明确
- [ ] 分组状态不只靠颜色
- [ ] 音量与无损格式信息完整
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
