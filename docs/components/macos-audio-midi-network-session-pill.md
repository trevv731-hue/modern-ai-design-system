# macOS 音频 MIDI 网络会话连接微胶囊

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

macOS 音频 MIDI 设置中 RTP-MIDI 实时网络会话状态指示胶囊（Audio MIDI Network Session Status Pill）；展示远程主机 Bonjour 广播名称、往返延迟毫秒数（RTT: 1.2ms）、实时连接绿点与一键断开会话按键。

## 结构

- 紧凑胶囊药丸 (.ds-midi-network-pill)
- 实时在线脉冲绿点 (.ds-midi-network-pill__dot)
- 主机等宽广播域名 (.ds-midi-network-pill__host)
- 往返延迟等宽读数 (.ds-midi-network-pill__latency)
- 断开会话按键 (.ds-midi-network-pill__btn)

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

Tab 聚焦断开按键；Enter 或 Space 触发断开网络 MIDI 会话。

## 使用细则

- 具备 role="group" 与 aria-label 完整播报网络主机名称与往返延迟。
- 断开按键悬停呈现警戒红，符合 macOS 网络音频设备规范。
- 适合专业网络编曲工作流、跨设备合成器联动、舞台实时音频传输。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-midi-network-pill" role="group" aria-label="MIDI 网络会话：MacBook-Pro.local:5004，已连接，延迟 1.2ms，丢包率 0%"><span class="ds-midi-network-pill__dot" aria-hidden="true"></span><span class="ds-midi-network-pill__host">MacBook-Pro.local:5004</span><span class="ds-midi-network-pill__latency">RTT: 1.2ms</span><button type="button" class="ds-midi-network-pill__btn" aria-label="断开与 MacBook-Pro.local:5004 的 MIDI 会话">✕</button></div>
```

## React 示例

```tsx
<MacAudioMidiNetworkSessionPill hostName="MacBook-Pro.local:5004" rttMs={1.2} packetLoss={0.0} isConnected={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 1.2ms 低延迟极客呈现
- [ ] Bonjour 局域网广播规范
- [ ] 一键安全断开
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
