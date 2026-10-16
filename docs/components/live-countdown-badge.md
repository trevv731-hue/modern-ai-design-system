# 实时流转倒计时胶囊

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Apple 灵动岛 (Dynamic Island) 与 Uber Live Activity 风格的呼吸倒计时药丸；带有呼吸光环圆点、高对比等宽数字与状态说明。

## 结构

- 呼吸缩放脉冲指示点 (animation: ds-pulse)
- 等宽等高倒计时时分秒数字
- 微型状态说明标签
- 超椭圆圆角高光底板

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

作为动态状态提醒图元提供 role="status" 与完整 aria-label。

## 使用细则

- 呼吸灯动画纯使用 scale(1) 到 scale(1.35) 与 opacity 变换，纯 GPU 合成无重排。
- 时间数字严格使用等宽 tabular-nums，秒数跳动时药丸宽度绝对稳定。
- 在紧急状态（如 SLA 即将超期或证书即将失效）时自动变为红色光晕。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-countdown-pill" role="status" aria-label="SLA 宽限期剩余 04:58"><span class="ds-countdown-pill__pulse"></span><span class="ds-countdown-pill__time">04:58</span><span class="ds-countdown-pill__label">SLA 宽限期</span></div>
```

## React 示例

```tsx
<LiveCountdownPill label="SLA 宽限期" remaining="04:58" isUrgent={false} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 呼吸脉冲光晕柔和无撕裂
- [ ] 时间字符等宽且秒数跳动不改变药丸宽度
- [ ] 高对比模式下轮廓分明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
