# 饮水追踪

[返回组件目录](../README.md) · 健康 / 运动 · v3 新增

## 目的与边界

以杯子网格追踪每日饮水量与目标完成度。

## 结构

- 杯子网格 (ds-water-intake__cups)
- 已饮标记
- 总量 (ds-water-intake__total)
- 目标
- 快捷添加

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

每个杯子可聚焦切换；总量变化播报。

## 使用细则

- 一杯容量固定并注明，如 250ml。
- 支持撤销误点。
- 达标后给鼓励文案。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-water-intake" role="group" aria-label="今日饮水 1500 毫升，目标 2000 毫升"><div class="ds-water-intake__cups" aria-hidden="true"><span class="is-full">🥤</span><span class="is-full">🥤</span><span class="is-full">🥤</span><span class="is-full">🥤</span><span class="is-full">🥤</span><span class="is-full">🥤</span><span>🥤</span><span>🥤</span></div><p class="ds-water-intake__total"><strong>1,500</strong> / 2,000 ml</p><div class="ds-water-intake__actions"><button type="button">+250ml</button><button type="button">撤销</button></div></div>
```

## React 示例

```tsx
<WaterIntakeTracker cups={8} filled={6} cupMl={250} onFill={fill} onUndo={undo} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 一杯容量注明
- [ ] 支持撤销误点
- [ ] 达标给鼓励文案
- [ ] 杯子可聚焦切换
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
