# macOS 隔空投送动态雷达发现面板

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

macOS Sequoia 与 iOS 18 AirDrop 隔空投送雷达脉冲扫描与周围设备发现面板（AirDrop Dynamic Discovery Radar Wave）；三层同心微光雷达波纹环绕、发现的周围联系人设备头像、设备型号名称及一键发送文件进度环。

## 结构

- 大圆角居中雷达面板 (.ds-airdrop-radar)
- 同心脉冲雷达波纹框 (.ds-airdrop-radar__wave-box, .ds-airdrop-radar__ring)
- 中心发光天线标志 (.ds-airdrop-radar__center)
- 水平排列的周围目标头像与名称 (.ds-airdrop-radar__targets, .ds-airdrop-radar__target)

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

Tab 在周围设备间导航；Enter 触发向选定设备发送文件。

## 使用细则

- 具备 role="region" 与 aria-label 说明隔空投送雷达发现面板。
- 每个目标按键具备独立的 aria-label 发送操作指引。
- 适合系统分享菜单、局域网快速传输工具、多设备协同面板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-airdrop-radar" role="region" aria-label="隔空投送动态雷达发现面板"><div class="ds-airdrop-radar__wave-box" aria-hidden="true"><div class="ds-airdrop-radar__ring"></div><div class="ds-airdrop-radar__ring ds-airdrop-radar__ring--mid"></div><div class="ds-airdrop-radar__ring ds-airdrop-radar__ring--inner"></div><div class="ds-airdrop-radar__center">📡</div></div><span style="font-size:11px;color:var(--ds-muted);font-weight:600">正在扫描周围隔空投送设备…</span><div class="ds-airdrop-radar__targets"><button type="button" class="ds-airdrop-radar__target" aria-label="发送文件至 Sarah's Mac"><div class="ds-airdrop-radar__target-avatar">S</div><span class="ds-airdrop-radar__target-name">Sarah's Mac</span></button><button type="button" class="ds-airdrop-radar__target" aria-label="发送文件至 Alex's iPad"><div class="ds-airdrop-radar__target-avatar">A</div><span class="ds-airdrop-radar__target-name">Alex's iPad</span></button></div></div>
```

## React 示例

```tsx
<MacAirDropTargetRadar discovering={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三层同心波纹层次丰富
- [ ] 中心发光雷达天线点睛
- [ ] 两台周围设备并列待选
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
