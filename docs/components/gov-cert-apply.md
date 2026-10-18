# 证照申请行

[返回组件目录](../README.md) · 政务服务 / 一网通办 · v3 新增

## 目的与边界

展示一张证照的申请状态与有效期信息。

## 结构

- 证照名 (ds-cert-apply__name)
- 证照号 (ds-cert-apply__no)
- 有效期 (ds-cert-apply__valid)
- 状态 (ds-cert-apply__state)

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

行可聚焦查看电子证照；即将过期以 status 语义播报。

## 使用细则

- 有效绿色、即将过期黄色、已过期红色。
- 证照号等宽展示。
- 电子证照提供下载入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cert-apply is-expiring" tabindex="0" role="button" aria-label="证照申请，食品经营许可证，编号 JY33010620260123，有效期至 2026-07-31，即将过期"><strong class="ds-cert-apply__name">食品经营许可证</strong><span class="ds-cert-apply__no">JY33010620260123</span><span class="ds-cert-apply__valid">有效期至 2026-07-31</span><span class="ds-cert-apply__state is-expiring">即将过期</span></div>
```

## React 示例

```tsx
<CertificateApplyRow name="食品经营许可证" no="JY33010620260123" valid="2026-07-31" state="expiring" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态配色
- [ ] 证照号等宽
- [ ] 有效期展示
- [ ] 电子证照下载
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
