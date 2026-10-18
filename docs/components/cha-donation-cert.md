# 捐赠证书卡

[返回组件目录](../README.md) · 公益 / 捐赠 · v3 新增

## 目的与边界

展示一张捐赠证书的编号、金额与开具日期。

## 结构

- 证书编号 (ds-donation-cert__no)
- 捐赠人 (ds-donation-cert__donor)
- 金额 (ds-donation-cert__amount)
- 日期 (ds-donation-cert__date)

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

卡片可聚焦下载 PDF；证书编号可一键复制。

## 使用细则

- 证书以描边强调仪式感。
- 金额为红色主数字。
- 编号等宽并提供复制。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-donation-cert" tabindex="0" aria-label="捐赠证书，编号 CS-2026-04517，捐赠人 张伟，捐赠金额 1,000 元，开具日期 2026-05-19"><p class="ds-donation-cert__no">CS-2026-04517</p><strong class="ds-donation-cert__donor">张伟</strong><strong class="ds-donation-cert__amount">¥1,000</strong><span class="ds-donation-cert__date">2026-05-19</span></article>
```

## React 示例

```tsx
<DonationCertificateCard no="CS-2026-04517" donor="张伟" amount={1000} date="2026-05-19" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 证书描边
- [ ] 金额红色主数字
- [ ] 编号可复制
- [ ] PDF 下载
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
