# 服药计划行

[返回组件目录](../README.md) · 医药 / 药店 · v3 新增

## 目的与边界

展示一天内早中晚三个时段的服药安排。

## 结构

- 时段标签 (ds-pharm-dose__slot)
- 药品 (ds-pharm-dose__drug)
- 剂量 (ds-pharm-dose__qty)
- 完成环 (ds-pharm-dose__ring)

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

行可聚焦标记完成；已完成环以文字标注。

## 使用细则

- 三时段：早、中、晚。
- 完成态用对勾环加文字。
- 餐前餐后明确标注。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pharm-dose is-done" tabindex="0" role="button" aria-label="服药计划，早 08:00，阿莫西林胶囊 2 粒，餐后，已完成"><span class="ds-pharm-dose__slot">早 · 08:00</span><strong class="ds-pharm-dose__drug">阿莫西林胶囊</strong><span class="ds-pharm-dose__qty">2 粒 · 餐后</span><span class="ds-pharm-dose__ring is-done" role="img" aria-label="已完成">✓</span></div>
```

## React 示例

```tsx
<DosageScheduleRow slot="早 · 08:00" drug="阿莫西林胶囊" qty="2 粒 · 餐后" done />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三时段
- [ ] 剂量展示
- [ ] 完成环
- [ ] 餐前餐后
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
