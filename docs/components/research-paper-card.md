# 论文卡片

[返回组件目录](../README.md) · 科研 / 学术 · v3 新增

## 目的与边界

展示论文标题、作者、发表 venue 与摘要，支持收藏与原文入口。

## 结构

- 标题 (ds-paper-card__title)
- 作者 (ds-paper-card__authors)
- Venue 与年份
- 摘要 (ds-paper-card__abstract)
- 被引与标签
- 操作

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

卡片可聚焦展开摘要；收藏按钮 aria-pressed。

## 使用细则

- 摘要默认折叠两行。
- 被引数随时间更新并注明来源。
- 预印本有明确标记。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-paper-card" tabindex="0" role="button" aria-label="论文 设计令牌在多端的编译一致性研究，作者 林岚 等，发表于 CHI 2026，被引 42 次"><div class="ds-paper-card__body"><h4 class="ds-paper-card__title">设计令牌在多端的编译一致性研究</h4><p class="ds-paper-card__authors">林岚 · 周牧 · A. Nguyen · +3</p><p class="ds-paper-card__venue">CHI 2026 · 论文 · <span class="is-preprint">预印本已入库</span></p><p class="ds-paper-card__abstract">本文提出一种令牌编译框架，在 Web、iOS 与 Android 三端保持语义一致，并在 12 个业务系统验证……</p></div><div class="ds-paper-card__meta"><span>被引 42</span><span>阅读 1.2k</span><button type="button" aria-pressed="false" aria-label="收藏">☆</button></div></article>
```

## React 示例

```tsx
<PaperCard title="设计令牌在多端的编译一致性研究" authors="林岚 · 周牧 · A. Nguyen · +3" venue="CHI 2026" cited={42} abstract="本文提出一种令牌编译框架……" onSave={save} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 摘要默认折叠两行
- [ ] 预印本明确标记
- [ ] 收藏按钮 aria-pressed
- [ ] 被引注明来源
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
