# macOS 顶部菜单栏电池电量与能耗大户详情面板

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

macOS 顶部状态栏电池图标点击弹出的原生浮动卡片（Menu Bar Battery & Energy Drainer Popover）；直观显示当前电量百分比（84%）、电源适配器供电状态、电池健康状态，以及正在消耗大量电能的应用程序清单（Xcode、Chrome、Simulator）。

## 结构

- 半透明圆角卡片 (.ds-menu-bar-battery-popover)
- 电量百分比与标题头部 (.ds-menu-bar-battery-popover__header, .ds-menu-bar-battery-popover__pct)
- 供电模式与健康度描述 (.ds-menu-bar-battery-popover__status)
- 高能耗应用程序清单栏 (.ds-menu-bar-battery-popover__drainers, .ds-menu-bar-battery-popover__app-row)

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

Tab 聚焦电池详情卡片；Escape 键关闭浮层并让焦点返回菜单栏电池图标。

## 使用细则

- 具备 role="dialog" 与 aria-label 完整描述当前电池电量与健康状态。
- 清晰列举正在消耗大量电能的应用，符合 macOS 原生视觉约定。
- 适合系统状态监控工具、能耗优化仪表板、桌面原生插件。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-menu-bar-battery-popover" role="dialog" aria-label="电池详情：84% 充电中，状态 Normal"><div class="ds-menu-bar-battery-popover__header"><span>电池电量</span><span class="ds-menu-bar-battery-popover__pct">84%</span></div><div class="ds-menu-bar-battery-popover__status">⚡ 电源适配器供电中 · 健康度: Normal</div><div class="ds-menu-bar-battery-popover__drainers"><span class="ds-menu-bar-battery-popover__drainer-title">消耗大量电能的应用程序</span><div class="ds-menu-bar-battery-popover__app-row"><span>Xcode</span><span class="ds-menu-bar-battery-popover__app-energy">High</span></div><div class="ds-menu-bar-battery-popover__app-row"><span>Google Chrome</span><span class="ds-menu-bar-battery-popover__app-energy">Medium</span></div><div class="ds-menu-bar-battery-popover__app-row"><span>Simulator</span><span class="ds-menu-bar-battery-popover__app-energy">Low</span></div></div></div>
```

## React 示例

```tsx
<MacMenuBarBatteryPopover percent={84} isCharging={true} health="Normal" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 84% 高亮醒目
- [ ] 消耗大量电能应用清晰列出
- [ ] macOS 原生状态栏质感
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
