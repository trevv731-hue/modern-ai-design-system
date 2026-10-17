# macOS 菜单栏电源健康与高能耗应用弹出卡

[返回组件目录](../README.md) · macOS / 桌面 · v3 新增

## 目的与边界

复刻 macOS 菜单栏与电池控制台下拉浮窗，展示当前电量百分比、电源供电状态（电池/适配器）与正在大量消耗能耗的应用程序进程列表。

## 结构

- 半透明毛玻璃卡片 (ds-battery-flyout)
- 大字号电量标头 (ds-battery-flyout__pct)
- 电源供电模式说明 (ds-battery-flyout__status)
- 能耗进程分组标题 (ds-battery-flyout__section-title)
- 高能耗进程清单 (ds-battery-flyout__list)

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

Tab 键在耗电进程间移动；Enter 可查看进程详细能耗或终止任务。

## 使用细则

- 顶部突出展示大号电量数字与电池图标，供电模式自动标记电源适配器状态。
- 清晰列举当前高耗电后台任务（如模拟器、本地模型推理），帮助用户定位发热与掉电根源。
- 毛玻璃材质与系统原生桌面环境深度融合。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-battery-flyout" role="region" aria-label="电池电量与能耗监测：当前 88%，电源适配器已连接"><div class="ds-battery-flyout__header"><div class="ds-battery-flyout__pct"><span aria-hidden="true">🔋</span><span>88%</span></div><span class="ds-battery-flyout__status">Power Adapter</span></div><div class="ds-battery-flyout__section-title">Significant Energy</div><ul class="ds-battery-flyout__list"><li class="ds-battery-flyout__item"><div class="ds-battery-flyout__item-left"><span>🌐</span><span>Xcode Simulator</span></div><span style="font-size:11px;color:var(--ds-muted)">14.2%</span></li><li class="ds-battery-flyout__item"><div class="ds-battery-flyout__item-left"><span>⚡</span><span>Local LLM Runner</span></div><span style="font-size:11px;color:var(--ds-muted)">28.4%</span></li></ul></div>
```

## React 示例

```tsx
<MacOSMenuBarBatteryFlyout percentage={88} source="Power Adapter" processes={[{ name: "Xcode Simulator", icon: "🌐", usage: "14.2%" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 电量百分比字型清晰，深浅色主题自适应高亮
- [ ] 耗电列表项排列紧凑，间距与对齐规范
- [ ] 辅助技术可准确读出电量及各进程消耗
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
