# iOS 18 StandBy 待机床头时钟卡片

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

iOS 17/18 横屏充电待机模式巨型数字时钟卡片（StandBy Mode Nightstand Clock Card）；深黑 OLED 纯净背景、极高字重的并排巨幅时间读数、微型秒数显示、顶部日期与闹钟提示及专为暗室防眩目优化的红光夜间模式。

## 结构

- 纯黑圆角卡片基底 (.ds-standby-clock)
- 支持暗室柔光红色夜景变体 (.ds-standby-clock--night) 与暖橙日光变体 (.ds-standby-clock--solar)
- 巨幅粗体等宽时间读数 (.ds-standby-clock__time)
- 顶部精简日期与下次闹钟时间 (.ds-standby-clock__meta)
- 底部 StandBy 模式状态与天文日出提示 (.ds-standby-clock__footer)

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

横屏锁屏自动激活；单击切换红色夜间防眩光模式。

## 使用细则

- 具备 role="region" 与清晰的 aria-label 反映当前完整时间。
- 红光夜间模式符合暗室暗适应无障碍标准，字体大而清晰。
- 适合桌面时钟、大屏信息看板、锁屏待机常显（AOD）界面。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-standby-clock ds-standby-clock--night" role="region" aria-label="iOS StandBy 待机时钟：09:41"><div class="ds-standby-clock__meta"><span>10月16日 星期四</span><span>⏰ 07:30</span></div><div class="ds-standby-clock__time"><span>09:41</span><span class="ds-standby-clock__sec">28</span></div><div class="ds-standby-clock__footer"><span>STANDBY MODE</span><span>☀️ 日出 06:12</span></div></div>
```

## React 示例

```tsx
<IosStandbyClockCard hours="09" minutes="41" seconds="28" mode="night" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 纯黑背景衬托纯红巨幅时间
- [ ] 秒数与时分主次分明
- [ ] 顶部与底部细字规范平衡
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
