# Apple Watch 三环同心运动活力圆环图元

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Apple Watch 标志性的同心活力三环（活动 Move、锻炼 Exercise、站立 Stand）；基于高精度 SVG 动态弧度与圆角端点渲染，旁边附带各项指标数值与目标对照。

## 结构

- 卡片底座 (.ds-activity-rings)
- 同心圆 SVG 绘制视窗 (.ds-activity-rings__svg-box)
- 红、绿、青三色独立圆弧轨迹 (.ds-activity-rings__track)
- 右侧指标图例群 (.ds-activity-rings__legend)
- 彩色指示圆点与等宽数值 (.ds-activity-rings__dot, --val)

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

Tab 聚焦圆环卡片；屏幕阅读器按顺序朗读三项维度的达成百分比与数值。

## 使用细则

- 圆弧轨迹使用 stroke-dasharray 与 stroke-dashoffset 精确计算百分比，端点带 stroke-linecap="round"。
- 采用高纯度鲜艳霓虹原色（红 #fa114f、荧光绿 #a1ff00、天青 #00f0ff），在暗色与亮色模式均具强对比。
- 适合健身打卡、系统资源三维分配率（CPU、内存、I/O）及多维任务完成度展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-activity-rings" role="region" aria-label="Apple Watch 活力三环"><div class="ds-activity-rings__svg-box"><svg viewBox="0 0 100 100" width="100" height="100"><circle cx="50" cy="50" r="40" stroke="rgba(250,17,79,0.2)" stroke-width="8" fill="none"></circle><circle cx="50" cy="50" r="40" stroke="#fa114f" stroke-width="8" class="ds-activity-rings__track" stroke-dasharray="251.3" stroke-dashoffset="62.8" transform="rotate(-90 50 50)"></circle><circle cx="50" cy="50" r="28" stroke="rgba(161,255,0,0.2)" stroke-width="8" fill="none"></circle><circle cx="50" cy="50" r="28" stroke="#a1ff00" stroke-width="8" class="ds-activity-rings__track" stroke-dasharray="175.9" stroke-dashoffset="0" transform="rotate(-90 50 50)"></circle><circle cx="50" cy="50" r="16" stroke="rgba(0,240,255,0.2)" stroke-width="8" fill="none"></circle><circle cx="50" cy="50" r="16" stroke="#00f0ff" stroke-width="8" class="ds-activity-rings__track" stroke-dasharray="100.5" stroke-dashoffset="16.7" transform="rotate(-90 50 50)"></circle></svg></div><div class="ds-activity-rings__legend"><div class="ds-activity-rings__row"><span class="ds-activity-rings__dot ds-activity-rings__dot--red"></span><span class="ds-activity-rings__val">450</span><span class="ds-activity-rings__target">/ 600 KCAL</span></div><div class="ds-activity-rings__row"><span class="ds-activity-rings__dot ds-activity-rings__dot--green"></span><span class="ds-activity-rings__val">35</span><span class="ds-activity-rings__target">/ 30 MIN</span></div><div class="ds-activity-rings__row"><span class="ds-activity-rings__dot ds-activity-rings__dot--cyan"></span><span class="ds-activity-rings__val">10</span><span class="ds-activity-rings__target">/ 12 HRS</span></div></div></div>
```

## React 示例

```tsx
<AppleWatchActivityRings move={450} exercise={35} stand={10} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 同心圆端点圆润无锯齿
- [ ] 三色图例数值对齐清晰
- [ ] 超额完成时无圆弧断裂
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
