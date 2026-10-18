# 电子票券

[返回组件目录](../README.md) · 活动 / 票务 · v3 新增

## 目的与边界

展示活动门票的票种、座位与入场二维码。

## 结构

- 活动名 (ds-ticket-pass__title)
- 票种与座位 (ds-ticket-pass__meta)
- 二维码 (ds-ticket-pass__qr)
- 票号 (ds-ticket-pass__no)
- 入场按钮

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

卡片可聚焦；二维码有文字说明；入场按钮可达。

## 使用细则

- 二维码为装饰占位并附票号文字。
- 已使用票券置灰并显示状态。
- 支持加入卡包。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-ticket-pass" tabindex="0" aria-label="电子票券，2026 前端开发者大会，VIP 通票，A 区 3 排 12 号，票号 TKT-88231"><h4 class="ds-ticket-pass__title">2026 前端开发者大会</h4><p class="ds-ticket-pass__meta">VIP 通票 · A 区 3 排 12 号 · 11-08 09:00</p><div class="ds-ticket-pass__qr" aria-hidden="true"></div><p class="ds-ticket-pass__no">票号 TKT-88231</p><div class="ds-ticket-pass__foot"><button type="button">出示入场</button><button type="button">加入卡包</button></div></article>
```

## React 示例

```tsx
<EventTicketPass title="2026 前端开发者大会" type="VIP 通票" seat="A 区 3 排 12 号" no="TKT-88231" date="11-08 09:00" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 二维码附票号文字
- [ ] 已用票券置灰
- [ ] 支持加入卡包
- [ ] 卡片可聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
