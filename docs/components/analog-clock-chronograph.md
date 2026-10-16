# Dieter Rams 精密计时机械刻度表盘

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

博朗 Dieter Rams 工业美学与 Apple Watch Hermès 风格的高精度机械计时表盘；配备立体秒针、分针、时针动态旋转，顶部独立秒表子表盘与右侧实体日历窗。

## 结构

- 140px 正圆表壳 (.ds-chronograph)
- 秒表分钟小表盘 (.ds-chronograph__subdial)
- 赤红超细高对比秒针 (.ds-chronograph__hand-sec)
- 墨黑圆角分针与时针 (.ds-chronograph__hand-min, --hour)
- 轴心防脱红白固定圆心 (.ds-chronograph__center)
- 右侧等宽物理日历窗 (.ds-chronograph__date)

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

具备完整 aria-label 报读时分秒与当前日期，屏幕阅读器完全无障碍。

## 使用细则

- 指针旋转严格采用 CSS 自定义属性 --ds-chrono-sec/min/hour，配合 GPU 合成旋转层，零排版重绘。
- 秒针使用纯色亮红（#fa114f），重现经典工业设计物理手表的视觉焦点。
- 适合桌面仪表盘时钟、任务倒计时看板、高精度秒表及工业传感器时间戳。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-chronograph" role="img" aria-label="机械精密计时表盘：10点24分12秒" style="--ds-chrono-sec:72deg;--ds-chrono-min:146deg;--ds-chrono-hour:312deg"><div class="ds-chronograph__subdial" aria-hidden="true">60</div><div class="ds-chronograph__hand-hour" aria-hidden="true"></div><div class="ds-chronograph__hand-min" aria-hidden="true"></div><div class="ds-chronograph__hand-sec" aria-hidden="true"></div><div class="ds-chronograph__center" aria-hidden="true"></div><span class="ds-chronograph__date" aria-label="当前日期 16日">16</span></div>
```

## React 示例

```tsx
<AnalogClockChronograph seconds={12} minutes={24} hours={10} date={16} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三指针旋转轴心严格重合
- [ ] 日期视窗字号清晰对齐
- [ ] 深浅主题下金属边缘立体感突出
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
