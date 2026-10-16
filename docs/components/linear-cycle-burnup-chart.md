# Linear 迭代周期范围与燃尽进度仪表卡

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Linear 敏捷项目管理风格的 Sprint 周期范围与完成度燃尽卡片（Cycle Burnup & Scope Progress Tracker）；展示当前已交付点数与总工作量范围、线性渐变完成度进度槽、预期理想目标标记线与剩余天数。

## 结构

- 圆角微阴影数据卡 (.ds-cycle-burnup)
- 头部周期名与等宽点数计数 (.ds-cycle-burnup__title, .ds-cycle-burnup__stats)
- 线性渐变完成度进度条 (.ds-cycle-burnup__fill)
- 橙黄理想进度基准标记线 (.ds-cycle-burnup__target)
- 底部完成百分比徽标与剩余天数 (.ds-cycle-burnup__foot)

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

Tab 键聚焦燃尽卡片；Enter 键展开详细每日燃尽曲线抽屉。

## 使用细则

- role="region" 配合 aria-label 完整播报周期名称、完成点数与百分比。
- 颜色满足 WCAG AAA 标级，且具备数值文字与位置双重标识。
- 适合项目看板、Sprint 规划复盘、里程碑交付监控与团队周报。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cycle-burnup" role="region" aria-label="Cycle 42 · Q4 Sprint 燃尽进度: 84/120 点 (70%)"><div class="ds-cycle-burnup__head"><span class="ds-cycle-burnup__title">Cycle 42 · Q4 Sprint</span><span class="ds-cycle-burnup__stats">84 / 120 pts</span></div><div class="ds-cycle-burnup__track" aria-hidden="true"><div class="ds-cycle-burnup__fill" style="width:70%"></div><div class="ds-cycle-burnup__target" style="left:80%" title="预期目标: 80%"></div></div><div class="ds-cycle-burnup__foot"><span class="ds-cycle-burnup__badge">70% 完成</span><span>剩余 <strong>4</strong> 天</span></div></div>
```

## React 示例

```tsx
<LinearCycleBurnupChart cycleName="Cycle 42 · Q4 Sprint" completedPoints={84} totalScope={120} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 渐变进度条两端圆润
- [ ] 目标基准线垂直贯穿
- [ ] 数字点数等宽排列
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
