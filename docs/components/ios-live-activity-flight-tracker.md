# iOS 18 灵动岛航旅实时活动追踪卡

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

iOS 18 锁屏与灵动岛展开态实时航班动态卡片（Dynamic Island Live Activity）；纯黑深色背景、起降机场等宽大字号代码、飞行弧线小飞机航迹动画、登机口与准点胶囊状态指示。

## 结构

- 黑底圆角卡片容器 (.ds-flight-tracker)
- 航线起止点大号字徽 (.ds-flight-tracker__code)
- 动态航迹虚线与小飞机标 (.ds-flight-tracker__plane)
- 准点绿色微晶胶囊 (.ds-flight-tracker__pill)
- 底部航旅关键元信息栏 (.ds-flight-tracker__meta)

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

Tab 键可聚焦至卡片，Enter 展开全屏航线地图。

## 使用细则

- 通过 role="region" 与 aria-label 完整描述航班号、起降地与剩余时间。
- 色彩采用高对比度荧光青与翠绿，强光下高可读性。
- 适合航班动态追踪、网约车行程卡、外卖骑手进度锁屏提醒。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-flight-tracker" role="region" aria-label="航班动态: UA 857 SFO 至 PVG"><div class="ds-flight-tracker__route"><div><div class="ds-flight-tracker__code">SFO</div><div class="ds-flight-tracker__city">旧金山</div></div><div class="ds-flight-tracker__arc"><span class="ds-flight-tracker__plane" aria-hidden="true">✈</span><div class="ds-flight-tracker__line" aria-hidden="true"></div></div><div style="text-align:right"><div class="ds-flight-tracker__code">PVG</div><div class="ds-flight-tracker__city">上海浦东</div></div></div><div class="ds-flight-tracker__meta"><span class="ds-flight-tracker__pill"><span aria-hidden="true">●</span><span>飞行中 · 准点</span></span><span>登机口: <strong>G92</strong></span><span>剩余: <strong>4小时18分</strong></span></div></div>
```

## React 示例

```tsx
<IosLiveActivityFlightCard flightNumber="UA 857" origin="SFO" destination="PVG" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 机场三字码加粗醒目
- [ ] 航迹飞机居中悬浮投影
- [ ] 绿色准点药丸微发光
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
