# 办件结果行

[返回组件目录](../README.md) · 政务服务 / 一网通办 · v3 新增

## 目的与边界

展示一个办件的审批结论与结果文件。

## 结构

- 事项 (ds-affair-result__title)
- 结论 (ds-affair-result__verdict)
- 办结时间 (ds-affair-result__time)
- 文件入口

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

行可聚焦下载批文或证照；不予许可以 alert 语义播报。

## 使用细则

- 许可绿色、不予许可红色、补正黄色。
- 批文与证照分别提供入口。
- 办结时间等宽展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-affair-result is-approved" tabindex="0" role="button" aria-label="办件结果，个体工商户开业登记，准予许可，2026-06-12 办结，可下载营业执照"><strong class="ds-affair-result__title">个体工商户开业登记</strong><span class="ds-affair-result__verdict is-approved">准予许可</span><span class="ds-affair-result__time">2026-06-12 办结</span><span class="ds-affair-result__file">下载营业执照</span></div>
```

## React 示例

```tsx
<AffairResultRow title="个体工商户开业登记" verdict="approved" time="2026-06-12" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态结论
- [ ] 批文证照入口
- [ ] 办结时间
- [ ] 不予许可播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
