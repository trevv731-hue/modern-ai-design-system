# 集点卡

[返回组件目录](../README.md) · 咖啡 / 茶饮门店 · v3 新增

## 目的与边界

展示会员集点进度与兑换奖励。

## 结构

- 集点网格 (ds-cafe-stamp__grid)
- 已集点 (ds-cafe-stamp__dot is-on)
- 奖励说明 (ds-cafe-stamp__reward)
- 进度 (ds-cafe-stamp__bar)

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

进度以 progressbar 语义播报；集满可兑换。

## 使用细则

- 满 10 点兑换一杯。
- 已集点用对勾点。
- 进度条同步展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-cafe-stamp" aria-label="集点卡，已集 7 点，还需 3 点兑换免费中杯饮品"><div class="ds-cafe-stamp__grid" aria-hidden="true"><span class="ds-cafe-stamp__dot is-on">✓</span><span class="ds-cafe-stamp__dot is-on">✓</span><span class="ds-cafe-stamp__dot is-on">✓</span><span class="ds-cafe-stamp__dot is-on">✓</span><span class="ds-cafe-stamp__dot is-on">✓</span><span class="ds-cafe-stamp__dot is-on">✓</span><span class="ds-cafe-stamp__dot is-on">✓</span><span class="ds-cafe-stamp__dot"></span><span class="ds-cafe-stamp__dot"></span><span class="ds-cafe-stamp__dot"></span></div><div class="ds-cafe-stamp__bar" role="progressbar" aria-valuenow="7" aria-valuemin="0" aria-valuemax="10" aria-label="集点进度"><span class="ds-cafe-stamp__fill" style="width:70%"></span></div><p class="ds-cafe-stamp__reward">再 3 点兑换免费中杯</p></article>
```

## React 示例

```tsx
<LoyaltyStampCard filled={7} total={10} reward="免费中杯饮品" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] progressbar 语义
- [ ] 对勾点
- [ ] 奖励说明
- [ ] 满点兑换
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
