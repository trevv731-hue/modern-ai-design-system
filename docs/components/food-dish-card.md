# 菜品卡

[返回组件目录](../README.md) · 餐饮 / 美食 · v3 新增

## 目的与边界

以图文卡展示招牌菜品，支持推荐理由与加购。

## 结构

- 菜品图 (ds-dish-card__thumb)
- 名称与价格
- 推荐语
- 评分 (ds-dish-card__rating)
- 加购按钮

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

卡片可聚焦查看大图；加购按钮可达。

## 使用细则

- 推荐语说明差异点而非形容词堆砌。
- 图片加载失败显示占位。
- 估清菜品置灰并说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-dish-card" tabindex="0" role="button" aria-label="招牌狮子头，42 元，评分 4.8，手工剁肉，肥瘦三七"><div class="ds-dish-card__thumb" aria-hidden="true">🍲</div><div class="ds-dish-card__body"><strong>招牌狮子头</strong><p class="ds-dish-card__why">手工剁肉，肥瘦三七，文火两小时</p><p class="ds-dish-card__foot"><span class="ds-dish-card__rating">★ 4.8</span><span class="ds-dish-card__price">¥42</span></p></div><button type="button" class="ds-dish-card__add">加购</button></article>
```

## React 示例

```tsx
<DishCard name="招牌狮子头" why="手工剁肉，肥瘦三七，文火两小时" price={42} rating="4.8" onAdd={add} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 推荐语说明差异点
- [ ] 图片失败显占位
- [ ] 估清置灰说明
- [ ] 卡片可聚焦看大图
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
