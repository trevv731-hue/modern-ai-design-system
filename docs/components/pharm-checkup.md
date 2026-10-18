# 体检报告卡

[返回组件目录](../README.md) · 医药 / 药店 · v3 新增

## 目的与边界

展示一份体检报告的日期、机构与异常项概况。

## 结构

- 报告日期 (ds-pharm-checkup__date)
- 体检机构 (ds-pharm-checkup__org)
- 异常项 (ds-pharm-checkup__abnormal)
- 结论 (ds-pharm-checkup__verdict)

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

卡片可聚焦查看报告原文；异常项以 alert 语义播报。

## 使用细则

- 异常项数量红色突出。
- 结论文字完整展示。
- 报告日期等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-pharm-checkup is-abnormal" tabindex="0" role="button" aria-label="体检报告，2026-04-18，市中心医院，异常项 3 项，结论 血脂偏高，建议复查"><div class="ds-pharm-checkup__head"><strong class="ds-pharm-checkup__date">2026-04-18</strong><span class="ds-pharm-checkup__abnormal">异常 3 项</span></div><span class="ds-pharm-checkup__org">市中心医院 · 入职体检</span><p class="ds-pharm-checkup__verdict">血脂偏高，建议 3 个月后复查</p></article>
```

## React 示例

```tsx
<HealthCheckupReportCard date="2026-04-18" org="市中心医院" abnormal={3} verdict="血脂偏高，建议复查" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 异常计数
- [ ] 结论完整
- [ ] 日期等宽
- [ ] 报告原文
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
