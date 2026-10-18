# 美容预约卡

[返回组件目录](../README.md) · 美妆 / 美容 · v3 新增

## 目的与边界

展示一次美容服务的预约信息与状态。

## 结构

- 项目 (ds-beauty-appt__item)
- 美容师 (ds-beauty-appt__staff)
- 时间 (ds-beauty-appt__time)
- 状态 (ds-beauty-appt__state)
- 价格 (ds-beauty-appt__price)

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

卡片可聚焦查看预约详情；待确认状态以 status 语义播报。

## 使用细则

- 状态四态：待确认、已确认、进行中、已完成。
- 时间等宽。
- 价格红色等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-beauty-appt is-confirmed" tabindex="0" role="button" aria-label="美容预约，项目 小气泡深层清洁，美容师 安娜，6 月 22 日 15:00，已确认，价格 398 元"><div class="ds-beauty-appt__head"><strong class="ds-beauty-appt__item">小气泡深层清洁</strong><span class="ds-beauty-appt__state is-confirmed">已确认</span></div><div class="ds-beauty-appt__meta"><span class="ds-beauty-appt__staff">美容师 安娜</span><span class="ds-beauty-appt__time">06-22 15:00</span></div><span class="ds-beauty-appt__price">¥398</span></article>
```

## React 示例

```tsx
<BeautyAppointmentCard item="小气泡深层清洁" staff="安娜" time="06-22 15:00" price={398} state="confirmed" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态状态
- [ ] 时间等宽
- [ ] 价格红色
- [ ] 预约详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
