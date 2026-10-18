# 用品订单行

[返回组件目录](../README.md) · 宠物服务 · v3 新增

## 目的与边界

展示一单宠物用品的周期配送信息。

## 结构

- 商品名 (ds-pet-supply__item)
- 规格 (ds-pet-supply__spec)
- 配送周期 (ds-pet-supply__cycle)
- 下次配送 (ds-pet-supply__next)

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

行可聚焦修改配送计划；周期配送以 status 语义播报。

## 使用细则

- 配送周期文字展示。
- 下次日期等宽。
- 暂停订阅文字标识。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pet-supply is-active" tabindex="0" role="button" aria-label="用品订单，无谷全价猫粮，规格 2 千克，每 30 天配送一次，下次 2026-07-02，配送中"><strong class="ds-pet-supply__item">无谷全价猫粮</strong><span class="ds-pet-supply__spec">2 kg</span><span class="ds-pet-supply__cycle">每 30 天</span><span class="ds-pet-supply__next">下次 07-02</span></div>
```

## React 示例

```tsx
<PetSupplyOrderRow item="无谷全价猫粮" spec="2 kg" cycle="每 30 天" next="07-02" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 周期展示
- [ ] 日期等宽
- [ ] 暂停标识
- [ ] 修改计划
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
