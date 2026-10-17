# Telegram 数字藏品与星标赞赏礼物卡

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 Telegram Stars 赞赏与 Fragment 稀有数字藏品礼物卡，带有耀金金属微光描边、稀有度标签、星标定价与唯一转让哈希编号。

## 结构

- 金属光泽外框卡 (ds-crypto-gift-card)
- 3D 拟物礼物图标 (ds-crypto-gift-card__icon)
- 礼物名称 (ds-crypto-gift-card__title)
- 稀有度渐变徽标 (ds-crypto-gift-card__rarity)
- 星标金额 (ds-crypto-gift-card__price)
- 数字藏品哈希凭据 (ds-crypto-gift-card__hash)

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

Tab 键聚焦礼物卡；Enter 唤起转赠或链上存证查询。

## 使用细则

- 金黄渐变金属描边搭配半透明深色微光背景，突出数字资产的尊贵稀缺感。
- 稀有度徽标采用渐变红色/金色背景胶囊，标明 Legendary、Rare 或 Epic 编号。
- 底部提供轻量等宽字体藏品唯一凭证 ID。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-crypto-gift-card" role="region" aria-label="Telegram 数字藏品礼物：Astral Rocket"><div class="ds-crypto-gift-card__icon" aria-hidden="true">🚀</div><div class="ds-crypto-gift-card__title">Astral Rocket</div><span class="ds-crypto-gift-card__rarity">Legendary #42</span><span class="ds-crypto-gift-card__price">⭐ 250 Stars</span><span class="ds-crypto-gift-card__hash">ID: frag-9920-x1</span></div>
```

## React 示例

```tsx
<TelegramGiftCryptoCollectibleCard title="Astral Rocket" icon="🚀" rarity="Legendary #42" stars={250} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 星标图标与价格数值对齐规整
- [ ] 金色边框在浅色与深色主题下视觉层次鲜明
- [ ] 辅助技术可读出礼物名称、稀有度与星标价值
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
