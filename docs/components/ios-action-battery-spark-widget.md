# iOS 18 锁屏环形电量与设备能量小组件

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

iOS 18 锁屏界面环形电量进度小组件（Lockscreen Circular Battery Widget）；SVG 矢量高精度环形进度圈、中央设备微图标与实时电量百分比、低电量自动变色。

## 结构

- 正圆微阴影小组件容器 (.ds-battery-widget)
- SVG 矢量高精度圆环 (.ds-battery-widget__svg, .ds-battery-widget__fill)
- 圆心设备类型小图标 (.ds-battery-widget__icon)
- 等宽加粗居中百分比数值 (.ds-battery-widget__val)
- 端点圆角无接缝闭合

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

Tab 聚焦组件；Enter 查看设备电池健康度与预计剩余使用时长。

## 使用细则

- role="meter" 与 aria-valuenow 完整反映当前电量数值。
- 电量颜色由绿色/黄色/红色语义化支持，不单独依赖颜色传达低电量状态。
- 适合锁屏常驻监控、外接蓝牙设备电量、硬件仪表板与车载能耗卡。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-battery-widget" role="meter" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" aria-label="MacBook Pro 电池电量: 78%" style="--ds-bat-offset:41.4"><svg class="ds-battery-widget__svg" viewBox="0 0 70 70" aria-hidden="true"><circle class="ds-battery-widget__track" cx="35" cy="35" r="30"></circle><circle class="ds-battery-widget__fill" cx="35" cy="35" r="30"></circle></svg><span class="ds-battery-widget__icon" aria-hidden="true">⚡</span><span class="ds-battery-widget__val">78%</span></div>
```

## React 示例

```tsx
<IosBatteryLockscreenWidget level={78} deviceName="MacBook Pro" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 环形进度弧线平滑顺畅
- [ ] 闪电图标与百分比垂直居中
- [ ] 绿色填充鲜艳高对比
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
