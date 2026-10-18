# 月台调度看板

[返回组件目录](../README.md) · 物流 / 供应链 · v3 新增

## 目的与边界

以网格展示月台与时间的占用调度。

## 结构

- 时间轴 (ds-dock-board__axis)
- 月台列 (ds-dock-board__dock)
- 占用格 (ds-dock-board__cell)
- 车辆信息
- 空闲态

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

占用格可聚焦查看单据；空闲格可点击分配。

## 使用细则

- 占用格显示车次与剩余时间。
- 冲突分配高亮提示。
- 支持拖拽调整月台。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-dock-board"><div class="ds-dock-board__axis" aria-hidden="true"><span>08:00</span><span>10:00</span><span>12:00</span><span>14:00</span></div><div class="ds-dock-board__rows"><div class="ds-dock-board__dock"><span class="ds-dock-board__name">1 号月台</span><div class="ds-dock-board__cells"><span class="ds-dock-board__cell is-busy" tabindex="0" role="button" aria-label="1 号月台 8 点到 10 点，京A12345 卸货，剩余 40 分钟">京A12345 · 卸货</span><span class="ds-dock-board__cell is-free" role="button" aria-label="1 号月台 10 点到 12 点空闲" tabindex="0">空闲</span><span class="ds-dock-board__cell is-free" tabindex="0" role="button" aria-label="1 号月台 12 点到 14 点空闲">空闲</span></div></div><div class="ds-dock-board__dock"><span class="ds-dock-board__name">2 号月台</span><div class="ds-dock-board__cells"><span class="ds-dock-board__cell is-free" tabindex="0" role="button" aria-label="2 号月台 8 点到 10 点空闲">空闲</span><span class="ds-dock-board__cell is-busy" tabindex="0" role="button" aria-label="2 号月台 10 点到 12 点，沪B67890 装货，剩余 1 小时">沪B67890 · 装货</span><span class="ds-dock-board__cell is-free" tabindex="0" role="button" aria-label="2 号月台 12 点到 14 点空闲">空闲</span></div></div></div></div>
```

## React 示例

```tsx
<DockScheduleBoard docks={[{ name: "1 号月台", cells: [{ from: "08:00", to: "10:00", vehicle: "京A12345", state: "busy" }] }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 占用格显车次剩余时间
- [ ] 冲突分配高亮
- [ ] 支持拖拽调整
- [ ] 空闲格可分配
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
