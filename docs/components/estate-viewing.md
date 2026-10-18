# 看房预约卡

[返回组件目录](../README.md) · 房产 / 租赁 · v3 新增

## 目的与边界

展示一次看房预约的时间、方式与经纪人。

## 结构

- 时间 (ds-viewing__time)
- 房源 (ds-viewing__body)
- 方式 (ds-viewing__mode)
- 状态 (ds-viewing__state)
- 改期操作

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

卡片可聚焦；线上看房给入会入口。

## 使用细则

- 线上与线下方式用图标区分。
- 临近预约黄色提醒。
- 支持一键改期。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-viewing is-confirmed" tabindex="0" aria-label="看房预约，10-22 19:00，阳光家园 3-1202，线下看房，经纪人刘敏，已确认"><span class="ds-viewing__time">10-22<br>19:00</span><div class="ds-viewing__body"><strong>阳光家园 3-1202</strong><span class="ds-viewing__mode">线下看房 · 刘敏</span></div><span class="ds-viewing__state is-confirmed">已确认</span><button type="button">改期</button></article>
```

## React 示例

```tsx
<ViewingAppointmentCard property="阳光家园 3-1202" time="10-22 19:00" mode="offline" agent="刘敏" state="confirmed" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 线上线下图标区分
- [ ] 临近预约黄色
- [ ] 一键改期
- [ ] 线上给入会入口
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
