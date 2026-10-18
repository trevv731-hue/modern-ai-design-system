# 房源卡

[返回组件目录](../README.md) · 房产 / 租赁 · v3 新增

## 目的与边界

展示房源图片、价格、户型与核心卖点。

## 结构

- 图片占位 (ds-property-card__media)
- 价格 (ds-property-card__price)
- 标题与位置 (ds-property-card__body)
- 标签 (ds-property-card__tags)
- 收藏按钮

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

卡片可聚焦查看详情；收藏按钮可达并播报状态。

## 使用细则

- 价格使用等宽字体强调。
- 卖点标签最多 3 个。
- 已售与已租状态置灰。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-property-card" tabindex="0" role="button" aria-label="房源，阳光家园精装两居，月租 5200 元，89 平方米，2 室 1 厅，朝阳区望京"><div class="ds-property-card__media" aria-hidden="true"><span>图</span></div><div class="ds-property-card__body"><strong>阳光家园 · 精装两居</strong><span>89㎡ · 2室1厅 · 朝阳区望京</span></div><p class="ds-property-card__price">¥5,200<small>/月</small></p><div class="ds-property-card__tags"><span>近地铁</span><span>南北通透</span></div><button type="button" aria-label="收藏房源">☆</button></article>
```

## React 示例

```tsx
<PropertyListingCard title="阳光家园 · 精装两居" price={5200} area="89㎡ · 2室1厅" district="朝阳区望京" tags={["近地铁", "南北通透"]} collected={false} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 价格等宽强调
- [ ] 标签最多 3 个
- [ ] 已租置灰
- [ ] 收藏播报状态
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
