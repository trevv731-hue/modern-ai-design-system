# 加油记录行

[返回组件目录](../README.md) · 汽车 / 用车服务 · v3 新增

## 目的与边界

展示一次加油记录的油量、金额与单价。

## 结构

- 日期 (ds-fuel-log__date)
- 油量 (ds-fuel-log__liters)
- 金额 (ds-fuel-log__amount)
- 单价 (ds-fuel-log__price)
- 油站 (ds-fuel-log__station)

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

行可聚焦查看电子小票；单价高于近期均价以 status 语义播报。

## 使用细则

- 金额等宽右对齐。
- 油站名称过长省略展示。
- 支持按月份汇总油耗。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-fuel-log" tabindex="0" role="button" aria-label="加油记录，2026-06-08，42.5 升，金额 318.75 元，单价 7.5 元每升，中石化城东站"><span class="ds-fuel-log__date">2026-06-08</span><span class="ds-fuel-log__liters">42.5 L</span><span class="ds-fuel-log__amount">¥318.75</span><span class="ds-fuel-log__price">7.50 元/L</span><span class="ds-fuel-log__station">中石化城东站</span></div>
```

## React 示例

```tsx
<FuelLogRow date="2026-06-08" liters={42.5} amount={318.75} station="中石化城东站" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 金额右对齐
- [ ] 单价展示
- [ ] 油站省略
- [ ] 月度汇总
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
