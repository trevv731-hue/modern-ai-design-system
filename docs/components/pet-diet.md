# 喂食计划卡

[返回组件目录](../README.md) · 宠物服务 · v3 新增

## 目的与边界

展示一天内各餐的喂食克数与时间安排。

## 结构

- 餐次标签 (ds-pet-diet__slot)
- 克数 (ds-pet-diet__gram)
- 时间 (ds-pet-diet__time)
- 完成环 (ds-pet-diet__ring)

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

行可聚焦标记已喂；已喂餐次以文字标注。

## 使用细则

- 餐次三档：早、午、晚。
- 克数等宽展示。
- 完成态用对勾环。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pet-diet is-done" tabindex="0" role="button" aria-label="喂食计划，早餐，120 克，08:00，已喂食"><span class="ds-pet-diet__slot">早餐</span><span class="ds-pet-diet__gram">120 g</span><span class="ds-pet-diet__time">08:00</span><span class="ds-pet-diet__ring is-done" role="img" aria-label="已喂食">✓</span></div>
```

## React 示例

```tsx
<PetDietPlanCard slot="早餐" gram={120} time="08:00" done />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三餐计划
- [ ] 克数等宽
- [ ] 完成环
- [ ] 标记已喂
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
