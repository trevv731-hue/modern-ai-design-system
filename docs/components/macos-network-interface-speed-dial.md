# macOS 活跃网络接口实时速率与流量指示窗

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

macOS Sequoia 与 iStat Menus 风格活跃网络接口实时流量与上下行速率指示窗（Active Network Interface Bandwidth Meter）；绿色活跃状态标签、双向箭头上传与下载实时带宽等宽读数及本机局域网 IP 地址。

## 结构

- 圆角微拟物网络卡片 (.ds-network-interface-dial)
- 接口名称与状态徽标头部 (.ds-network-interface-dial__header, .ds-network-interface-dial__badge)
- 上下行两列等宽速率栏 (.ds-network-interface-dial__speeds, .ds-network-interface-dial__stat)
- 底部等宽 IP 地址显示 (.ds-network-interface-dial__ip)

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

Tab 聚焦网络监视窗；屏幕阅读器自动播报当前接口名称、实时下载与上传速率。

## 使用细则

- 具备 role="region" 与 aria-label 完整播报网络接口名称与上下行速率。
- 上下行速率采用独立粗体等宽字体，杜绝界面晃动。
- 适合系统性能监视器、网络管理工具、开发者网络调试浮窗。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-network-interface-dial" role="region" aria-label="网络接口 en0 (Wi-Fi 6E)：下载 28.6 MB/s，上传 4.2 MB/s"><div class="ds-network-interface-dial__header"><span>en0 (Wi-Fi 6E)</span><span class="ds-network-interface-dial__badge">活跃</span></div><div class="ds-network-interface-dial__speeds"><div class="ds-network-interface-dial__stat"><span class="ds-network-interface-dial__label">↓ 下载</span><span class="ds-network-interface-dial__val">28.6 MB/s</span></div><div class="ds-network-interface-dial__stat"><span class="ds-network-interface-dial__label">↑ 上传</span><span class="ds-network-interface-dial__val">4.2 MB/s</span></div></div><div class="ds-network-interface-dial__ip">IP: 192.168.1.84</div></div>
```

## React 示例

```tsx
<MacNetworkInterfaceSpeedDial interfaceName="en0 (Wi-Fi 6E)" downloadSpeed="28.6 MB/s" uploadSpeed="4.2 MB/s" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 活跃绿色微徽标醒目
- [ ] 下载/上传双分栏排布
- [ ] IP 地址等宽规范
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
