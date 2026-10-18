# 门铃事件行

[返回组件目录](../README.md) · 智能家居 / IoT · v3 新增

## 目的与边界

展示一次门铃事件的截图、访客与处理状态。

## 结构

- 访客截图 (ds-doorbell-row__thumb)
- 时间 (ds-doorbell-row__time)
- 访客描述
- 包裹标记 (ds-doorbell-row__parcel)
- 操作

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

行可聚焦查看录像；包裹标记有文字标签。

## 使用细则

- 未查看事件高亮。
- 包裹到达绿色标记。
- 异常逗留黄色提醒。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-doorbell-row is-new" tabindex="0" role="button" aria-label="门铃事件，今天 14:32，快递员，检测到包裹，未查看"><span class="ds-doorbell-row__thumb" aria-hidden="true">📦</span><div class="ds-doorbell-row__body"><strong>今天 14:32</strong><span>快递员 · 门口逗留 42 秒</span></div><span class="ds-doorbell-row__parcel">检测到包裹</span><button type="button">看录像</button></div>
```

## React 示例

```tsx
<DoorbellEventRow time="今天 14:32" visitor="快递员" parcel duration="42 秒" isNew />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 未查看事件高亮
- [ ] 包裹到达绿色标记
- [ ] 异常逗留黄色
- [ ] 行可聚焦看录像
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
