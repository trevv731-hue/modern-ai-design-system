# 药品信息卡

[返回组件目录](../README.md) · 医药 / 药店 · v3 新增

## 目的与边界

展示一种药品的规格、适应症与购买限制。

## 结构

- 药品名 (ds-pharm-drug__name)
- 规格 (ds-pharm-drug__spec)
- 适应症 (ds-pharm-drug__indication)
- 处方标识 (ds-pharm-drug__tag)
- 价格 (ds-pharm-drug__price)

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

卡片可聚焦查看说明书；处方药限制以文字说明。

## 使用细则

- 处方药红色标识，OTC 绿色标识。
- 适应症两行截断。
- 价格与规格并列展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-pharm-drug is-rx" tabindex="0" role="button" aria-label="药品信息，布洛芬缓释胶囊，规格 0.3g 每粒 20 粒，用于缓解轻至中度疼痛，处方药，需凭处方购买，价格 32.80 元"><div class="ds-pharm-drug__head"><strong class="ds-pharm-drug__name">布洛芬缓释胶囊</strong><span class="ds-pharm-drug__tag is-rx">处方药</span></div><span class="ds-pharm-drug__spec">0.3g × 20 粒</span><p class="ds-pharm-drug__indication">用于缓解轻至中度疼痛及感冒引起的发热</p><span class="ds-pharm-drug__price">¥32.80</span></article>
```

## React 示例

```tsx
<DrugInfoCard name="布洛芬缓释胶囊" spec="0.3g × 20 粒" indication="用于缓解轻至中度疼痛及感冒引起的发热" rx price={32.8} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 处方标识
- [ ] 规格展示
- [ ] 适应症截断
- [ ] 购买限制
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
