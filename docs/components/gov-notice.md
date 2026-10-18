# 政务公告卡

[返回组件目录](../README.md) · 政务服务 / 一网通办 · v3 新增

## 目的与边界

展示一条政务公告的标题、摘要与发布信息。

## 结构

- 标题 (ds-gov-notice__title)
- 摘要 (ds-gov-notice__excerpt)
- 发布单位 (ds-gov-notice__org)
- 时间 (ds-gov-notice__time)
- 置顶标记

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

卡片可聚焦查看公告全文；置顶公告以文字标注不只颜色。

## 使用细则

- 置顶公告红色标记。
- 摘要两行截断。
- 发布单位与时间等宽展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-gov-notice is-pinned" tabindex="0" role="button" aria-label="政务公告，关于 2026 年度社保缴费基数调整的通知，2026-06-01 发布，置顶"><div class="ds-gov-notice__head"><strong class="ds-gov-notice__title">关于 2026 年度社保缴费基数调整的通知</strong><span class="ds-gov-notice__pin">置顶</span></div><p class="ds-gov-notice__excerpt">自 2026 年 7 月起，职工社会保险缴费基数上下限将按全省全口径城镇单位就业人员平均工资的 60% 至 300% 核定。</p><div class="ds-gov-notice__foot"><span class="ds-gov-notice__org">市医疗保障局</span><span class="ds-gov-notice__time">2026-06-01</span></div></article>
```

## React 示例

```tsx
<GovNoticeCard title="关于 2026 年度社保缴费基数调整的通知" excerpt="自 2026 年 7 月起调整缴费基数上下限。" org="市医疗保障局" time="2026-06-01" pinned />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 置顶标记
- [ ] 摘要截断
- [ ] 单位时间
- [ ] 全文查看
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
