# 宝石鉴定证书

[返回组件目录](../README.md) · 珠宝首饰 · v3 新增

## 目的与边界

展示一张宝石鉴定证书的 4C 参数与鉴定结论。

## 结构

- 证书号 (ds-jwl-cert__no)
- 闪光点 (ds-jwl-cert__sparkle)
- 参数网格 (ds-jwl-cert__grid)
- 单项参数 (ds-jwl-cert__c)
- 结论 (ds-jwl-cert__conclusion)

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

卡片可聚焦查看证书大图；闪光动画在减少动态偏好下停止。

## 使用细则

- 4C：颜色、净度、切工、克拉。
- 证书号等宽展示。
- 结论如天然钻石。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-jwl-cert" tabindex="0" role="button" aria-label="鉴定证书，证书号 NGTC-2026-08812，颜色 D，净度 VVS1，切工 3EX，克拉 1.02，结论 天然钻石"><span class="ds-jwl-cert__sparkle" aria-hidden="true">✦</span><div class="ds-jwl-cert__head"><strong class="ds-jwl-cert__no">NGTC-2026-08812</strong></div><div class="ds-jwl-cert__grid"><span class="ds-jwl-cert__c">颜色<strong>D</strong></span><span class="ds-jwl-cert__c">净度<strong>VVS1</strong></span><span class="ds-jwl-cert__c">切工<strong>3EX</strong></span><span class="ds-jwl-cert__c">克拉<strong>1.02</strong></span></div><span class="ds-jwl-cert__conclusion">天然钻石</span></article>
```

## React 示例

```tsx
<GemCertificateCard no="NGTC-2026-08812" color="D" clarity="VVS1" cut="3EX" carat="1.02" conclusion="天然钻石" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 4C 参数
- [ ] 证书号展示
- [ ] 闪光动画
- [ ] 减少动态降级
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
