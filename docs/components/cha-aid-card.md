# 救援物资卡

[返回组件目录](../README.md) · 公益 / 捐赠 · v3 新增

## 目的与边界

展示一批救援物资的品类、数量与发往目的地。

## 结构

- 物资与数量 (ds-aid-card__item)
- 目的地 (ds-aid-card__dest)
- 物流状态 (ds-aid-card__state)

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

卡片可聚焦查看物流轨迹；运输中状态以 status 语义播报。

## 使用细则

- 物资品类以图标加文字展示。
- 数量等宽并附单位。
- 物流状态文字不只颜色。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-aid-card is-transit" tabindex="0" role="button" aria-label="救援物资，折叠床 500 张、棉被 1,000 床，发往 甘肃陇南，运输中，预计 06-15 抵达"><div class="ds-aid-card__head"><strong class="ds-aid-card__item">折叠床 500 张 · 棉被 1,000 床</strong><span class="ds-aid-card__state is-transit">运输中</span></div><p class="ds-aid-card__dest">发往 甘肃陇南 · 预计 06-15 抵达</p></article>
```

## React 示例

```tsx
<AidReliefCard item="折叠床 500 张 · 棉被 1,000 床" dest="甘肃陇南" eta="06-15" state="transit" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 图标加文字
- [ ] 数量等宽
- [ ] 状态文字
- [ ] 物流轨迹
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
