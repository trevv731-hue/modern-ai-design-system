# 投保方案卡

[返回组件目录](../README.md) · 保险 / 理赔 · v3 新增

## 目的与边界

展示一个投保方案的年缴保费与核心保障供选择。

## 结构

- 方案名 (ds-quote-card__plan)
- 推荐标记 (ds-quote-card__tag)
- 年缴保费 (ds-quote-card__price)
- 保障列表 (ds-quote-card__perks)
- 选择按钮

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

卡片可聚焦选择；已选状态按钮禁用并文字说明。

## 使用细则

- 推荐方案以描边强调。
- 保费为主视觉数字，价格用红色强调。
- 核心保障逐条列出。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-quote-card is-recommended" tabindex="0" aria-label="投保方案，尊享版，推荐，年缴 6,888 元，含重疾 50 万、医疗 600 万、意外 100 万"><div class="ds-quote-card__head"><strong class="ds-quote-card__plan">尊享版</strong><span class="ds-quote-card__tag">推荐</span></div><strong class="ds-quote-card__price">¥6,888<span>/年</span></strong><ul class="ds-quote-card__perks"><li>重疾 50 万</li><li>医疗 600 万</li><li>意外 100 万</li></ul><button type="button">选择此方案</button></article>
```

## React 示例

```tsx
<InsuranceQuoteCard plan="尊享版" price={6888} perks={["重疾 50 万", "医疗 600 万"]} recommended />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 推荐描边强调
- [ ] 保费主数字
- [ ] 保障逐条
- [ ] 已选禁用
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
