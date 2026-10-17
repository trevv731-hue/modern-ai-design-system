# iOS 实时活动锁屏动态卡片

[返回组件目录](../README.md) · iOS / 移动 · v3 新增

## 目的与边界

呈现 iOS 16/17/18 灵动锁屏实时活动（Live Activities），直观追踪打车配送、航班动态或异步任务进度。

## 结构

- 高斯暗色容器 (ds-live-activity)
- 标题与状态栏 (ds-live-activity__header)
- 预计送达时间 (ds-live-activity__eta)
- 流体进度条 (ds-live-activity__track)
- 定位信标 (ds-live-activity__pin)
- 车牌/凭据底栏 (ds-live-activity__footer)

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

Tab 键聚焦卡片本身，支持展开详细行程与联系司机等操作。

## 使用细则

- 始终提供精确的 ETA 倒计时与清晰进度信标，避免用户焦虑。
- 背景采用深色超高斯模糊玻璃质感，字符对比度符合 WCAG AA 规范。
- 在屏幕窄屏模式（如小屏手机）下自动撑满宽度并自适应边距。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-live-activity" role="region" aria-label="实时活动：专车预计 4 分钟后到达"><div class="ds-live-activity__header"><div class="ds-live-activity__title"><span aria-hidden="true">🚕</span><span>Premier Ride</span></div><span class="ds-live-activity__eta">4 min</span></div><div class="ds-live-activity__track"><div class="ds-live-activity__fill" style="width: 72%"></div><span class="ds-live-activity__pin" style="left: 72%" aria-hidden="true">🚗</span></div><div class="ds-live-activity__footer"><span>Toyota Camry · 粤A·88888</span><span>On Time</span></div></div>
```

## React 示例

```tsx
<IOSLiveActivityLockscreenWidget title="Premier Ride" eta="4 min" progress={72} subtext="Toyota Camry · 粤A·88888" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 进度信标沿水平轴精确映射百分比，位置过渡平滑无抖动
- [ ] 辅助技术可准确读出预计送达时间和载具车牌信息
- [ ] 高对比度模式下进度轨道与文字均有清晰边界
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
