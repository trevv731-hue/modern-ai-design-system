# 续方申请行

[返回组件目录](../README.md) · 医药 / 药店 · v3 新增

## 目的与边界

展示一次续方申请的原始处方与审核进度。

## 结构

- 原处方号 (ds-pharm-refill__from)
- 药品 (ds-pharm-refill__drug)
- 申请时间 (ds-pharm-refill__time)
- 审核状态 (ds-pharm-refill__state)

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

行可聚焦查看审核详情；审核通过以 status 语义播报。

## 使用细则

- 状态四态：待审核、已通过、已驳回、已发药。
- 原处方号等宽展示。
- 驳回需附原因入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pharm-refill is-approved" tabindex="0" role="button" aria-label="续方申请，原处方 RX20260501-0032，二甲双胍缓释片，申请于 2026-06-10，已通过"><span class="ds-pharm-refill__from">RX20260501-0032</span><strong class="ds-pharm-refill__drug">二甲双胍缓释片</strong><span class="ds-pharm-refill__time">06-10</span><span class="ds-pharm-refill__state is-approved">已通过</span></div>
```

## React 示例

```tsx
<RefillRequestRow from="RX20260501-0032" drug="二甲双胍缓释片" time="06-10" state="approved" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态审核
- [ ] 原处方号
- [ ] 驳回原因
- [ ] 通过播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
