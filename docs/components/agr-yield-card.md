# 产量对比卡

[返回组件目录](../README.md) · 智慧农业 · v3 新增

## 目的与边界

展示一块地的预计产量与实测产量对比及差异分析。

## 结构

- 作物 (ds-yield-card__crop)
- 预估值 (ds-yield-card__estimate)
- 实测值 (ds-yield-card__actual)
- 差异 (ds-yield-card__diff)
- 对比条 (ds-yield-card__bar)

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

卡片可聚焦查看历年产量；低于预估 10% 以 status 语义播报。

## 使用细则

- 预估与实测双条按最大值归一化。
- 差异百分比以文字加箭头展示。
- 超产绿色、减产黄色。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-yield-card is-below" tabindex="0" aria-label="产量对比，冬小麦，预估 650 公斤每亩，实测 592 公斤每亩，低于预估 8.9%"><strong class="ds-yield-card__crop">冬小麦 · 东区 3 号田</strong><div class="ds-yield-card__bars" aria-hidden="true"><span class="ds-yield-card__bar is-estimate" style="width:100%"></span><span class="ds-yield-card__bar is-actual" style="width:91%"></span></div><div class="ds-yield-card__nums"><span class="ds-yield-card__estimate">预估 650 公斤/亩</span><span class="ds-yield-card__actual">实测 592 公斤/亩</span></div><span class="ds-yield-card__diff">↓ 8.9%</span></section>
```

## React 示例

```tsx
<HarvestYieldCard crop="冬小麦" estimate={650} actual={592} unit="公斤/亩" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 双条归一化
- [ ] 差异箭头文字
- [ ] 超产绿色
- [ ] 历年产量
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
