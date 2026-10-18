# 洗车预约卡

[返回组件目录](../README.md) · 汽车 / 用车服务 · v3 新增

## 目的与边界

展示一次洗车预约的门店、时间与服务类型。

## 结构

- 门店 (ds-carwash__shop)
- 时间 (ds-carwash__time)
- 服务 (ds-carwash__service)
- 状态 (ds-carwash__state)

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

卡片可聚焦取消或修改预约；已取消状态置灰。

## 使用细则

- 服务类型以徽标展示。
- 状态用文字不只颜色。
- 临近预约时间黄色提醒。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-carwash is-confirmed" tabindex="0" role="button" aria-label="洗车预约，车洁士城西店，2026-06-10 14:00，精洗打蜡，已确认"><div class="ds-carwash__head"><strong class="ds-carwash__shop">车洁士城西店</strong><span class="ds-carwash__state is-confirmed">已确认</span></div><p class="ds-carwash__time">2026-06-10 14:00</p><span class="ds-carwash__service">精洗打蜡</span></article>
```

## React 示例

```tsx
<CarWashBookingCard shop="车洁士城西店" time="2026-06-10 14:00" service="精洗打蜡" state="confirmed" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 服务徽标
- [ ] 状态文字
- [ ] 临近提醒
- [ ] 取消改约
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
