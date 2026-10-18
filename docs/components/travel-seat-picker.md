# 值机选座图

[返回组件目录](../README.md) · 出行 / 交通 · v3 新增

## 目的与边界

以机舱平面图展示座位分布并支持选座。

## 结构

- 舱位图 (ds-seat-picker__map)
- 座位格 (ds-seat-picker__seat)
- 通道
- 图例 (ds-seat-picker__legend)
- 已选摘要

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

座位可聚焦选择；方向键在网格内移动；选择后播报座位号。

## 使用细则

- 座位状态用图标与文字双区分。
- 安全出口排有额外说明。
- 锁定座位不可选并说明原因。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-seat-picker" role="group" aria-label="选座，已选 32A"><div class="ds-seat-picker__map" role="grid" aria-label="座位图"><div class="ds-seat-picker__row"><span class="ds-seat-picker__seat" role="gridcell" aria-label="12A 可选">A</span><span class="ds-seat-picker__seat" role="gridcell" aria-label="12B 已占用">B</span><span class="ds-seat-picker__aisle" aria-hidden="true"></span><span class="ds-seat-picker__seat" role="gridcell" aria-label="12C 可选">C</span><span class="ds-seat-picker__seat" role="gridcell" aria-label="12D 已选">D</span></div><div class="ds-seat-picker__row"><span class="ds-seat-picker__seat" role="gridcell" aria-label="13A 安全出口">A</span><span class="ds-seat-picker__seat is-exit" role="gridcell" aria-label="13B 安全出口，加宽座位">B</span><span class="ds-seat-picker__aisle" aria-hidden="true"></span><span class="ds-seat-picker__seat" role="gridcell" aria-label="13C 可选">C</span><span class="ds-seat-picker__seat" role="gridcell" aria-label="13D 可选">D</span></div></div><div class="ds-seat-picker__legend" aria-hidden="true"><span class="is-free">可选</span><span class="is-taken">已占用</span><span class="is-picked">已选</span><span class="is-exit">安全出口</span></div></div>
```

## React 示例

```tsx
<SeatPickerMap rows={[["free", "taken", "aisle", "free", "picked"]]} onPick={pick} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 座位状态图标文字双区分
- [ ] 安全出口排有说明
- [ ] 锁定座位说明原因
- [ ] 网格方向键可移动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
