# iOS StandBy 待机夜钟与智能小组件翻页卡

[返回组件目录](../README.md) · iOS / 移动 · v3 新增

## 目的与边界

复刻 iOS 待机显示模式（StandBy Mode）夜钟与智能小组件翻页卡，纯黑背景搭配低照度荧光暖橙数字与垂直页码指示点。

## 结构

- OLED 纯黑圆角卡片 (ds-standby-clock-card)
- 超大等宽时钟数字 (ds-standby-clock-card__time)
- 上下午指示器 (ds-standby-clock-card__ampm)
- 日期与小组件页码底栏 (ds-standby-clock-card__footer)
- 垂直分页指示点 (ds-standby-clock-card__dots)

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

ArrowUp/ArrowDown 上下翻动智能小组件切片；Enter 唤醒主屏幕。

## 使用细则

- 纯黑 OLED 底色避免暗光刺眼，时间数字提供细腻暖橙微光晕投影。
- 时间数字强制采用 tabular-nums 等宽排版，秒/分跳跃时页面纹丝不动。
- 右下角垂直分页点提示当前处于多合一智能叠放第几张卡片。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-standby-clock-card" role="region" aria-label="iOS 待机夜钟：当前时间 09:41 AM"><div class="ds-standby-clock-card__time"><span>09:41</span><span class="ds-standby-clock-card__ampm">AM</span></div><div class="ds-standby-clock-card__footer"><span>Tuesday, Oct 17</span><div class="ds-standby-clock-card__dots" aria-hidden="true"><div class="ds-standby-clock-card__dot is-active"></div><div class="ds-standby-clock-card__dot"></div><div class="ds-standby-clock-card__dot"></div></div></div></div>
```

## React 示例

```tsx
<IOSStandbySmartStackClock time="09:41" ampm="AM" date="Tuesday, Oct 17" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 暖橙字体在暗光背景下具有超过 7:1 的极高无障碍对比度
- [ ] 上下翻页动效符合 iOS 物理弹性曲线
- [ ] 辅助技术完整播报当前时间与日期
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
