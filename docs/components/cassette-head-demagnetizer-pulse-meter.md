# 卡带磁头消磁仪磁通脉冲衰减表

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

模拟卡带机磁头消磁流程的仪表（Demagnetizer Gauss Pulse Meter）；以柱状衰减波形展示交流消磁脉冲的放电过程，并给出残余磁通量与安全阈值。

## 结构

- 仪表容器 (.ds-demagnetizer-pulse-meter)
- 标题与安全状态栏 (.ds-demagnetizer-pulse-meter__header, .ds-demagnetizer-pulse-meter__status)
- 脉冲衰减柱形舞台 (.ds-demagnetizer-pulse-meter__stage, .ds-demagnetizer-pulse-meter__bar)
- 放电周期与残余值页脚 (.ds-demagnetizer-pulse-meter__footer)

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

无需交互：柱形标记 aria-hidden，由容器以 region + aria-label 统一播报残余磁通量与状态。

## 使用细则

- 纯展示组件，柱形必须 aria-hidden，避免屏幕阅读器逐柱朗读。
- 状态文案直接给出是否安全，不要只显示一个数值。
- 适合作为复古设备面板的过程可视化，不作为精确测量读数使用。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-demagnetizer-pulse-meter" role="region" aria-label="磁头消磁仪磁通量脉冲表：Playback &amp; Record Head，残余磁通量 0.08 Gauss，状态 已消磁"><div class="ds-demagnetizer-pulse-meter__header"><span>DEMAG GAUSS PULSE</span><span class="ds-demagnetizer-pulse-meter__status">0.08 G SAFE</span></div><div class="ds-demagnetizer-pulse-meter__stage" aria-hidden="true"><div class="ds-demagnetizer-pulse-meter__bar" style="height: 40%"></div><div class="ds-demagnetizer-pulse-meter__bar" style="height: 75%"></div><div class="ds-demagnetizer-pulse-meter__bar" style="height: 95%"></div><div class="ds-demagnetizer-pulse-meter__bar" style="height: 60%"></div><div class="ds-demagnetizer-pulse-meter__bar" style="height: 30%"></div><div class="ds-demagnetizer-pulse-meter__bar" style="height: 15%"></div><div class="ds-demagnetizer-pulse-meter__bar" style="height: 8%"></div></div><div class="ds-demagnetizer-pulse-meter__footer"><span>Decaying 60Hz AC</span><span>RESIDUAL: &lt;0.1 G</span></div></div>
```

## React 示例

```tsx
<CassetteHeadDemagnetizerPulseMeter headUnit="Playback & Record Head" residualGauss={0.08} isDemagComplete />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 0.08 G SAFE 状态醒目
- [ ] 衰减柱形由高到低可读
- [ ] 页脚残余阈值明确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
