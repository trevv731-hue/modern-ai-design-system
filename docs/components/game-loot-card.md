# 战利品卡

[返回组件目录](../README.md) · 游戏 / 娱乐 · v3 新增

## 目的与边界

展示掉落物品的图标、稀有度与数量，支持领取。

## 结构

- 物品图标 (ds-loot-card__icon)
- 名称
- 稀有度光效 (ds-loot-card__glow)
- 数量
- 领取按钮

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

卡片可聚焦查看属性；领取按钮可达。

## 使用细则

- 稀有度用边框颜色与光效双表示。
- 重复物品显示转换代币。
- 领取后有去重确认。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-loot-card is-epic" tabindex="0" role="button" aria-label="战利品 暗影之刃，史诗稀有度，数量 1"><span class="ds-loot-card__icon" aria-hidden="true">🗡</span><div class="ds-loot-card__body"><strong>暗影之刃</strong><span class="ds-loot-card__rarity">史诗 · 唯一掉落</span></div><button type="button" class="ds-loot-card__claim">领取</button></div>
```

## React 示例

```tsx
<LootRewardCard name="暗影之刃" rarity="史诗" note="唯一掉落" qty={1} onClaim={claim} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 稀有度边框光效双表示
- [ ] 重复物品显转换代币
- [ ] 领取有去重确认
- [ ] 卡片可聚焦看属性
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
