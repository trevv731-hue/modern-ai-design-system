# 日历热力图

[返回组件目录](../README.md) · 数据 · v3 新增

## 目的与边界

用日期网格表达每天的活动强度，便于发现长期趋势与空档。

## 结构

- 网格容器 (ds-cal-heat)
- 日期单元
- 强度图例
- 月份标签

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

每个格子带可读日期与数值；键盘可按列表顺序浏览。

## 使用细则

- 强度分级至少三级并给出图例。
- 无数据日期显式留空，不与 0 混淆。
- 悬浮显示具体日期与数值。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cal-heat" role="img" aria-label="近 30 天活跃热力图"><span class="ds-cal-heat__cell" data-level="1"></span><span class="ds-cal-heat__cell" data-level="3"></span><span class="ds-cal-heat__cell" data-level="0"></span><span class="ds-cal-heat__legend">少 → 多</span></div>
```

## React 示例

```tsx
<CalendarHeatmap days={[{ date: "10-16", level: 1 }, { date: "10-17", level: 3 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 强度分级有图例
- [ ] 无数据与 0 可区分
- [ ] 悬浮显示日期与数值
- [ ] 键盘可浏览格子
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
