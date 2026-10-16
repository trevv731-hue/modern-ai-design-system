# Raycast 里程碑达成彩带礼花卡片

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Raycast 与 Linear 任务全量交付时的彩带礼花与里程碑庆祝卡片（Milestone Celebration Confetti Canvas）；全圆角轻拟物白底/暗底浮层、居中奖杯金徽标、高亮彩屑飘散效果、达成总结文案及一键继续动作按键。

## 结构

- 圆角轻阴影卡片基底 (.ds-confetti-canvas)
- 多色飘散细长彩带与五彩纸屑 (.ds-confetti-canvas__particles, .ds-confetti-canvas__p)
- 居中胜利庆祝奖杯图标 (.ds-confetti-canvas__trophy)
- 加粗里程碑达成大标题与说明 (.ds-confetti-canvas__title, .ds-confetti-canvas__desc)
- 醒目操作确认按键 (.ds-confetti-canvas__btn)

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

Tab 聚焦确认按键；Enter 或 Space 关闭庆祝卡片。

## 使用细则

- 具备 role="region" 与 aria-label 说明里程碑达成庆祝卡片。
- 彩屑动效轻量优雅，在 prefers-reduced-motion 下自动静态停靠。
- 适合任务完成、迭代交付、打卡里程碑、成就解锁庆祝场景。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-confetti-canvas" role="region" aria-label="里程碑达成庆祝卡片：全部里程碑已达成！"><div class="ds-confetti-canvas__particles" aria-hidden="true"><span class="ds-confetti-canvas__p" style="left:15%;top:20%;background-color:#ff3b88"></span><span class="ds-confetti-canvas__p" style="left:45%;top:15%;background-color:#00f0ff"></span><span class="ds-confetti-canvas__p" style="left:75%;top:25%;background-color:#84cc16"></span></div><div class="ds-confetti-canvas__content"><span class="ds-confetti-canvas__trophy" aria-hidden="true">🎉</span><h4 class="ds-confetti-canvas__title">全部里程碑已达成！</h4><p class="ds-confetti-canvas__desc">本季度交付任务 100% 验收通过，系统稳定性指标达标。</p><button type="button" class="ds-confetti-canvas__btn">太棒了，继续前进</button></div></div>
```

## React 示例

```tsx
<RaycastConfettiCelebration title="全部里程碑已达成！" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 奖杯与文字居中平衡
- [ ] 微型彩屑飘散点缀
- [ ] 确认按键颜色鲜明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
