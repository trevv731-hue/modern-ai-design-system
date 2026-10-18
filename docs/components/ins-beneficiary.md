# 受益人指定卡

[返回组件目录](../README.md) · 保险 / 理赔 · v3 新增

## 目的与边界

展示保单受益人指定及其受益顺位与分配比例。

## 结构

- 姓名 (ds-beneficiary__name)
- 关系 (ds-beneficiary__relation)
- 顺位 (ds-beneficiary__order)
- 比例 (ds-beneficiary__share)

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

受益人可聚焦修改；比例合计校验失败以 alert 语义播报。

## 使用细则

- 顺位以序数标签展示。
- 比例条按 100% 归一化。
- 合计不足或超过 100% 红色警示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-beneficiary" aria-label="受益人指定，王芳，配偶，第一顺位，50%；王子涵，子女，第一顺位，50%；合计 100%"><strong class="ds-beneficiary__name">王芳</strong><span class="ds-beneficiary__relation">配偶</span><span class="ds-beneficiary__order">第一顺位</span><span class="ds-beneficiary__share" aria-hidden="true"><i style="width:50%"></i></span><span class="ds-beneficiary__pct">50%</span><span class="ds-beneficiary__name">王子涵</span><span class="ds-beneficiary__relation">子女</span><span class="ds-beneficiary__order">第一顺位</span><span class="ds-beneficiary__share" aria-hidden="true"><i style="width:50%"></i></span><span class="ds-beneficiary__pct">50%</span><span class="ds-beneficiary__total">合计 100%</span></article>
```

## React 示例

```tsx
<PolicyBeneficiaryCard people={[{ name: "王芳", relation: "配偶", order: 1, share: 50 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 顺位序数标签
- [ ] 比例条归一化
- [ ] 合计校验
- [ ] 可修改
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
