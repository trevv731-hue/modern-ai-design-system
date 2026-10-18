# 地块环境卡

[返回组件目录](../README.md) · 智慧农业 · v3 新增

## 目的与边界

展示一块地块的位置、种植作物与关键环境指标。

## 结构

- 地块名 (ds-field-card__name)
- 面积 (ds-field-card__area)
- 作物 (ds-field-card__crop)
- 指标组 (ds-field-card__stat)
- 状态 (ds-field-card__state)

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

卡片可聚焦查看历史曲线；指标越界以 status 语义播报。

## 使用细则

- 指标正常绿色、预警黄色、越界红色。
- 面积以亩为单位等宽展示。
- 状态徽标同时给出文字。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-field-card" tabindex="0" role="button" aria-label="地块 东区 3 号田，120 亩，冬小麦，地温 12 ℃，含水率 22%，墒情 适宜"><div class="ds-field-card__head"><strong class="ds-field-card__name">东区 3 号田</strong><span class="ds-field-card__state is-ok">适宜</span></div><p class="ds-field-card__crop">冬小麦 · <span class="ds-field-card__area">120 亩</span></p><div class="ds-field-card__stats"><span class="ds-field-card__stat">地温<strong>12 ℃</strong></span><span class="ds-field-card__stat">含水率<strong>22%</strong></span><span class="ds-field-card__stat">pH<strong>6.8</strong></span></div></article>
```

## React 示例

```tsx
<FieldConditionCard name="东区 3 号田" area={120} crop="冬小麦" stats={[{ label: "地温", value: "12 ℃" }]} state="ok" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 指标三态配色
- [ ] 面积亩等宽
- [ ] 状态文字
- [ ] 可聚焦看曲线
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
