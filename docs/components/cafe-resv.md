# 门店预约卡

[返回组件目录](../README.md) · 咖啡 / 茶饮门店 · v3 新增

## 目的与边界

展示一次门店到店预约的时间与桌型信息。

## 结构

- 日期 (ds-cafe-resv__date)
- 时间 (ds-cafe-resv__time)
- 人数 (ds-cafe-resv__people)
- 桌型 (ds-cafe-resv__table)
- 状态 (ds-cafe-resv__state)

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

卡片可聚焦查看预约码；待确认状态以 status 语义播报。

## 使用细则

- 状态三态：待确认、已确认、已到店。
- 日期时间等宽。
- 桌型文字展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-cafe-resv is-confirmed" tabindex="0" role="button" aria-label="门店预约，2026-06-20，14:30，2 人，靠窗双人桌，已确认"><div class="ds-cafe-resv__head"><strong class="ds-cafe-resv__date">06-20</strong><span class="ds-cafe-resv__time">14:30</span><span class="ds-cafe-resv__state is-confirmed">已确认</span></div><div class="ds-cafe-resv__meta"><span class="ds-cafe-resv__people">2 人</span><span class="ds-cafe-resv__table">靠窗双人桌</span></div></article>
```

## React 示例

```tsx
<CafeReservationCard date="06-20" time="14:30" people={2} table="靠窗双人桌" state="confirmed" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态状态
- [ ] 日期时间
- [ ] 桌型展示
- [ ] 预约码
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
