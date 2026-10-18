# 展位卡

[返回组件目录](../README.md) · 活动 / 票务 · v3 新增

## 目的与边界

展示赞助商展位编号、级别与位置导航入口。

## 结构

- 展位号 (ds-booth-card__no)
- 赞助商名称 (ds-booth-card__name)
- 级别标签 (ds-booth-card__tier)
- 位置 (ds-booth-card__loc)
- 导航按钮

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

卡片可聚焦；导航按钮可达。

## 使用细则

- 赞助级别用标签区分。
- 已打卡展位有标记。
- 位置支持一键导航。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-booth-card" tabindex="0" role="button" aria-label="展位 B-12，云栖科技，金牌赞助，展馆 B1 主通道"><span class="ds-booth-card__no">B-12</span><div class="ds-booth-card__body"><strong class="ds-booth-card__name">云栖科技</strong><span class="ds-booth-card__tier is-gold">金牌赞助</span></div><span class="ds-booth-card__loc">展馆 B1 · 主通道</span><button type="button">导航</button></article>
```

## React 示例

```tsx
<SponsorBoothCard no="B-12" name="云栖科技" tier="gold" loc="展馆 B1 · 主通道" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 级别标签区分
- [ ] 已打卡有标记
- [ ] 位置一键导航
- [ ] 卡片可聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
