# 捐赠记录行

[返回组件目录](../README.md) · 公益 / 捐赠 · v3 新增

## 目的与边界

展示一笔捐赠的金额、时间与去向项目。

## 结构

- 金额 (ds-donation-row__amount)
- 时间 (ds-donation-row__time)
- 项目 (ds-donation-row__project)
- 状态 (ds-donation-row__state)

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

行可聚焦查看捐赠票据；待开票状态以 status 语义播报。

## 使用细则

- 金额等宽右对齐。
- 状态用文字不只颜色。
- 支持按项目筛选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-donation-row is-receipt" tabindex="0" role="button" aria-label="捐赠记录，200 元，2026-05-18 14:32，乡村小学图书角，待开票"><span class="ds-donation-row__amount">¥200.00</span><span class="ds-donation-row__time">2026-05-18 14:32</span><span class="ds-donation-row__project">乡村小学图书角</span><span class="ds-donation-row__state is-receipt">待开票</span></div>
```

## React 示例

```tsx
<DonationRecordRow amount={200} time="2026-05-18 14:32" project="乡村小学图书角" state="receipt" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 金额等宽右对齐
- [ ] 状态文字
- [ ] 项目筛选
- [ ] 票据入口
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
