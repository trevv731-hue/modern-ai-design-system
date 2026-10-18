# 电费账单卡

[返回组件目录](../README.md) · 能源 / 电力运维 · v3 新增

## 目的与边界

展示一期电费账单的峰谷平电量构成与应付金额。

## 结构

- 账期 (ds-power-bill__period)
- 电量分段 (ds-power-bill__segment)
- 电费 (ds-power-bill__amount)
- 环比 (ds-power-bill__cmp)

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

卡片可聚焦查看计费明细；欠费状态以 alert 语义播报。

## 使用细则

- 峰、谷、平三段分别配色展示。
- 环比以箭头加数字呈现。
- 金额为主视觉数字。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-power-bill" tabindex="0" role="button" aria-label="电费账单，5 月账期，峰 320 度、平 480 度、谷 260 度，应付 486.5 元，环比下降 6%"><div class="ds-power-bill__head"><strong class="ds-power-bill__period">5 月账期</strong><span class="ds-power-bill__cmp is-down">↓ 6%</span></div><div class="ds-power-bill__segments"><span class="ds-power-bill__segment is-peak">峰<strong>320 度</strong></span><span class="ds-power-bill__segment is-flat">平<strong>480 度</strong></span><span class="ds-power-bill__segment is-valley">谷<strong>260 度</strong></span></div><strong class="ds-power-bill__amount">¥486.50</strong></article>
```

## React 示例

```tsx
<ElectricityBillCard period="5 月账期" segments={[{ label: "峰", kwh: 320 }]} amount={486.5} compare={-6} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三段配色
- [ ] 环比箭头
- [ ] 金额主数字
- [ ] 计费明细
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
