# 体重趋势图

[返回组件目录](../README.md) · 健康 / 运动 · v3 新增

## 目的与边界

以折线展示体重变化趋势与目标差距。

## 结构

- 折线 (ds-weight-trend__line)
- 数据点
- 目标线 (ds-weight-trend__goal)
- 最新值 (ds-weight-trend__now)
- 周期切换

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

容器可聚焦；折线有文字摘要。

## 使用细则

- 周/月/年周期可切换。
- 目标线虚线并与当前值标差距。
- 下降用绿色、上升用红色仅作装饰，正文以数字为准。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-weight-trend" tabindex="0" role="img" aria-label="近 7 日体重从 68.4 降至 67.8 公斤，低于目标线 0.2"><svg viewBox="0 0 240 80" aria-hidden="true"><line class="ds-weight-trend__goal" x1="0" y1="24" x2="240" y2="24"/><polyline class="ds-weight-trend__line is-down" points="10,60 46,56 82,50 118,44 154,38 190,32 226,26"/></svg><div class="ds-weight-trend__foot"><strong class="ds-weight-trend__now">67.8 kg</strong><span>较 7 天前 -0.6</span><span>距目标 68.0 还差 -0.2</span></div></div>
```

## React 示例

```tsx
<WeightTrendChart points={[68.4, 68.1, 67.9, 68.2, 67.9, 67.8]} goal={68} unit="kg" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 周期可切换
- [ ] 目标线虚线标差距
- [ ] 正文以数字为准
- [ ] 折线有文字摘要
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
