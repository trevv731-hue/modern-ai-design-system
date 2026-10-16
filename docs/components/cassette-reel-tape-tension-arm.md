# 开盘录音机动态走带张力臂与阻尼摆杆

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

专业 1/4" 与 1/2" 开盘母带录音机磁带走带张力臂动态阻尼平衡摆杆（Reel Tape Tension Arm & Damper Gauge）；物理弹簧阻尼摆臂角度指示标、左右供带与收带张力平衡刻度及松弛/理想/过紧三段警示。

## 结构

- 硬质金属质感外框 (.ds-tape-tension-arm)
- 标题与实时张力百分比读数 (.ds-tape-tension-arm__header)
- 机械张力滑槽与摆臂滑块 (.ds-tape-tension-arm__track, .ds-tape-tension-arm__indicator)
- 底部 LO / IDEAL / HI 三级刻度标签 (.ds-tape-tension-arm__labels)

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

Tab 聚焦张力监视窗；屏幕阅读器播报张力通道名称、当前张力百分比与安全状态。

## 使用细则

- 具备 role="region" 与 aria-label 完整描述走带张力臂状态。
- 滑块平滑横向位移指示，在 prefers-reduced-motion 下直接跳跃定位。
- 适合专业母带模拟设备、开盘机控制面板、音频走带仿真器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tape-tension-arm" role="region" aria-label="磁带张力缓冲臂：Left Supply Reel，张力负载 58% (正常)"><div class="ds-tape-tension-arm__header"><span>TENSION ARM</span><span style="font-family:var(--ds-type-mono);color:var(--ds-accent)">58%</span></div><div class="ds-tape-tension-arm__arc-box" aria-hidden="true"><div class="ds-tape-tension-arm__track"><div class="ds-tape-tension-arm__indicator" style="left:58%"></div></div></div><div class="ds-tape-tension-arm__labels"><span>LO (松弛)</span><span>IDEAL (理想)</span><span>HI (过紧)</span></div></div>
```

## React 示例

```tsx
<AnalogReelTapeTensionArm tensionPercent={58} channel="Left Supply Reel" status="正常" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 58% 理想张力居中
- [ ] 滑块平滑定位
- [ ] LO/IDEAL/HI 经典专业刻度
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
