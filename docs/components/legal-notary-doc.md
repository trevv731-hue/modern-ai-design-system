# 公证文书卡

[返回组件目录](../README.md) · 法律 / 合规 · v3 新增

## 目的与边界

展示公证书关键信息：公证事项、编号、公证处与有效期。

## 结构

- 标题 (ds-notary-doc__title)
- 公证书编号 (ds-notary-doc__no)
- 公证处 (ds-notary-doc__org)
- 有效期 (ds-notary-doc__valid)
- 印章占位 (ds-notary-doc__seal)

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

卡片可聚焦；编号支持一键复制。

## 使用细则

- 临期证书黄色提醒。
- 印章为装饰性占位，不承担语义。
- 支持下载电子公证书。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-notary-doc is-expiring" tabindex="0"><span class="ds-notary-doc__seal" aria-hidden="true">公章</span><h4 class="ds-notary-doc__title">出生公证书</h4><p class="ds-notary-doc__no">（2026）京国立内字第 8823 号</p><p class="ds-notary-doc__org">北京市国立公证处</p><p class="ds-notary-doc__valid">有效期 2026-10-12 至 2027-10-11 · 即将到期</p></article>
```

## React 示例

```tsx
<NotaryDocCard title="出生公证" no="（2026）京国立内字第 8823 号" org="北京市国立公证处" valid="2026-10-12 至 2027-10-11" expiring />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 临期黄色提醒
- [ ] 印章为装饰占位
- [ ] 编号一键复制
- [ ] 可下载电子版
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
