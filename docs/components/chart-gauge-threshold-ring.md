# 阈值仪表环

[返回组件目录](../README.md) · 数据 · v3 新增

## 目的与边界

显示当前值在阈值区间中的位置，比纯数字更快判断是否越界。

## 结构

- 环形轨道 (ds-gauge-ring)
- 当前值弧段
- 阈值刻线
- 中心数值与单位

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

静态指标；中心数值与状态文本可读。

## 使用细则

- 阈值刻线写明数值与含义。
- 越界状态用文字加颜色双重表达。
- 无阈值配置时说明“未设置阈值”。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-gauge-ring" role="img" aria-label="CPU 使用率 68%，警告阈值 75%"><span class="ds-gauge-ring__value">68%</span><span class="ds-gauge-ring__note">阈值 75%</span></div>
```

## React 示例

```tsx
<GaugeThresholdRing value={68} threshold={75} unit="%" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 阈值刻线写明数值与含义
- [ ] 越界状态双重表达
- [ ] 无阈值有说明
- [ ] 状态文本可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
