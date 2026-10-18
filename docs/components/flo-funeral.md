# 祭奠用花卡

[返回组件目录](../README.md) · 鲜花 / 花店 · v3 新增

## 目的与边界

展示一款祭奠用花商品的类型与配送时间。

## 结构

- 类型 (ds-flo-funeral__kind)
- 主花材 (ds-flo-funeral__flower)
- 价格 (ds-flo-funeral__price)
- 配送时段 (ds-flo-funeral__slot)
- 状态 (ds-flo-funeral__state)

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

卡片可聚焦预约配送；已预约状态以 status 语义播报。

## 使用细则

- 类型两态：花圈、花篮。
- 配色肃穆文字说明。
- 配送时段等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-flo-funeral" tabindex="0" role="button" aria-label="祭奠用花，白菊花圈，主花材 白菊与黄菊，价格 680 元，配送时段 06-21 07:00 前，可预约"><div class="ds-flo-funeral__head"><strong class="ds-flo-funeral__kind">白菊花圈</strong><span class="ds-flo-funeral__state is-open">可预约</span></div><span class="ds-flo-funeral__flower">白菊 · 黄菊 · 适量配叶</span><div class="ds-flo-funeral__foot"><span class="ds-flo-funeral__price">¥680</span><span class="ds-flo-funeral__slot">送达 06-21 07:00 前</span></div></article>
```

## React 示例

```tsx
<FuneralFlowerCard kind="白菊花圈" flower="白菊 · 黄菊" price={680} slot="06-21 07:00 前" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 两态类型
- [ ] 肃穆说明
- [ ] 时段等宽
- [ ] 预约配送
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
