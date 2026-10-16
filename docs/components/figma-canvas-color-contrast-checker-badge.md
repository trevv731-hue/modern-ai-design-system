# Figma 画布色彩对比度实时检测徽标

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Figma 插件与 WCAG 无障碍色彩对比度实时检测徽标（Canvas Real-time Color Contrast Ratio Badge）；实时对比度比值大字读数、AA / AAA 评级徽章、前景色与背景色微圆点色彩对照及实时无障碍合规状态。

## 结构

- 圆角微拟物对比度条 (.ds-contrast-checker-badge)
- 加粗高对比度等宽比值 (.ds-contrast-checker-badge__ratio)
- 绿底 AA/AAA 评级胶囊 (.ds-contrast-checker-badge__pill)
- 前景色与背景色圆点取样框 (.ds-contrast-checker-badge__samples, .ds-contrast-checker-badge__sample)

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

Tab 聚焦徽标；屏幕阅读器自动播报当前对比度比值与 WCAG 评级。

## 使用细则

- 具备 role="status" 与 aria-label 完整播报色彩对比度及合规等级。
- 前景色背景色圆点带有 title 提示色值。
- 适合设计系统工具、色彩调色板检查、无障碍自动化审计面板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-contrast-checker-badge" role="status" aria-label="色彩对比度检测：19.4:1，符合 AAA 级规范"><span class="ds-contrast-checker-badge__ratio">19.4:1</span><span class="ds-contrast-checker-badge__pill">AAA</span><div class="ds-contrast-checker-badge__samples" aria-hidden="true"><span class="ds-contrast-checker-badge__sample" style="background:#0a0a0c" title="前景色: #0a0a0c"></span><span class="ds-contrast-checker-badge__sample" style="background:#ffffff" title="背景色: #ffffff"></span></div></div>
```

## React 示例

```tsx
<FigmaCanvasColorContrastCheckerBadge ratio="19.4:1" level="AAA" isPass={true} foreground="#0a0a0c" background="#ffffff" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 19.4:1 绿色加粗数值
- [ ] AAA 绿色微胶囊标签
- [ ] 黑白双色取样点
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
