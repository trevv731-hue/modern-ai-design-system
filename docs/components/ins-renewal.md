# 续保提醒卡

[返回组件目录](../README.md) · 保险 / 理赔 · v3 新增

## 目的与边界

提醒保单临近到期并展示宽限期与续保入口。

## 结构

- 险种 (ds-renewal__product)
- 到期日 (ds-renewal__due)
- 倒计时 (ds-renewal__countdown)
- 宽限期说明 (ds-renewal__grace)
- 续保按钮

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

卡片可聚焦；60 天内黄色、30 天内红色播报。

## 使用细则

- 倒计时以剩余天数文字呈现。
- 宽限期 60 天固定说明。
- 按钮直达续保页面。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-renewal is-soon" tabindex="0" aria-label="续保提醒，百万医疗 2026 版，到期日 2026-12-01，剩余 18 天，宽限期 60 天"><div class="ds-renewal__head"><strong class="ds-renewal__product">百万医疗 2026 版</strong><span class="ds-renewal__countdown">剩余 18 天</span></div><p class="ds-renewal__due">到期日 2026-12-01</p><p class="ds-renewal__grace">到期后 60 天内仍可续保，保障不间断</p><button type="button">立即续保</button></article>
```

## React 示例

```tsx
<PolicyRenewalCard product="百万医疗 2026 版" due="2026-12-01" left={18} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 天数文字倒计时
- [ ] 60/30 天分级配色
- [ ] 宽限期说明
- [ ] 直达续保
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
