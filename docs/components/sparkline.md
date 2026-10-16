# 微型趋势图

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

在极小空间（指标卡、表格行、状态栏）内展示数值走势，如延迟波动或瞬时吞吐量。

## 结构

- SVG 矢量折线
- 平滑贝塞尔过渡
- 端点活跃指示点
- 数值与单位辅助标签

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

纯视觉数据图表不获得键盘焦点；容器提供 aria-label 供屏幕阅读器朗读概览。

## 使用细则

- 优先纯 SVG 矢量绘制，零外部图表库依赖。
- 折线端点带状态呼吸圆点，强化最新时效感。
- 深浅模式和自定义调色板自适应颜色。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-toolbar" style="justify-content:flex-start;gap:20px;align-items:center"><div style="display:flex;flex-direction:column;gap:4px"><strong>延迟抖动 (RTT)</strong><div style="display:flex;align-items:center;gap:12px"><svg class="ds-sparkline" width="120" height="32" viewBox="0 0 120 32" aria-label="延迟走势：平均 24ms"><path d="M0,22 Q15,8 30,18 T60,10 T90,20 T120,6" fill="none" stroke="var(--ds-secondary)" stroke-width="2.2" stroke-linecap="round"/><circle cx="120" cy="6" r="3.5" fill="var(--ds-secondary)"/></svg><span class="ds-badge ds-badge--success"><span class="ds-status-dot ds-status-dot--live"></span> 24ms</span></div></div></div>
```

## React 示例

```tsx
<Sparkline data={[22,8,18,10,20,6]} label="延迟走势" current="24ms" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] SVG 在高分屏下平滑无锯齿
- [ ] 端点实时指示点随数据高亮
- [ ] 提供清晰的 aria-label 可访问性说明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
