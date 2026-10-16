# macOS 电池健康度与峰值性能面板

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

macOS Sequoia 系统设置电池健康状况与峰值容量管理面板（Battery Health & Maximum Capacity Sheet）；最大容量百分比实时读数、充放电循环计数、电池健康状态等级及峰值性能支持说明。

## 结构

- 微透圆角系统设置卡片 (.ds-battery-health-sheet)
- 健康指标行与等宽数值 (.ds-battery-health-sheet__row, .ds-battery-health-sheet__val)
- 细字体健康状态说明 (.ds-battery-health-sheet__desc)

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

Tab 聚焦面板可交互元素；屏幕阅读器按顺序朗读各行参数指标。

## 使用细则

- 具备 role="region" 与 aria-label 说明电池健康状况面板。
- 健康百分比与循环计数使用等宽数字，排版整洁。
- 适合系统设置中心、硬件健康监视器、设备诊断仪表板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-battery-health-sheet" role="region" aria-label="电池健康状况面板"><div class="ds-battery-health-sheet__row"><span>电池最大容量</span><span class="ds-battery-health-sheet__val">94%</span></div><div class="ds-battery-health-sheet__row"><span style="font-size:11px;color:var(--ds-muted)">循环计数</span><span style="font-family:var(--ds-type-mono);font-size:11px;color:var(--ds-ink)">182 次</span></div><div class="ds-battery-health-sheet__row"><span style="font-size:11px;color:var(--ds-muted)">状态</span><span style="font-size:11px;color:var(--ds-success);font-weight:700">正常</span></div><p class="ds-battery-health-sheet__desc">电池目前支持正常的峰值性能。</p></div>
```

## React 示例

```tsx
<MacBatteryHealthSheet healthPercentage={94} cycleCount={182} condition="正常" peakPerformance={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 94% 绿色高亮健康度
- [ ] 循环计数与状态分行排布
- [ ] 底部峰值性能提示文案
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
