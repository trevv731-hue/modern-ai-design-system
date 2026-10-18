# 知识库文章卡

[返回组件目录](../README.md) · 客服 / 工单 · v3 新增

## 目的与边界

展示帮助中心文章的标题、摘要与有用度。

## 结构

- 标题 (ds-kb-article__title)
- 分类标签
- 摘要 (ds-kb-article__sum)
- 浏览量 (ds-kb-article__views)
- 有用率

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

卡片可聚焦打开文章；有用与无用按钮可达。

## 使用细则

- 有用率低于 60% 黄色提示优化。
- 摘要最多两行。
- 支持按分类筛选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-kb-article" tabindex="0" role="button" aria-label="知识库文章，如何申请退款，售后分类，有用率 92%，浏览 12840 次"><h4 class="ds-kb-article__title">如何申请退款</h4><span class="ds-kb-article__cat">售后</span><p class="ds-kb-article__sum">介绍退款条件、申请流程与到账时间，覆盖 7 天无理由场景。</p><div class="ds-kb-article__meta"><span class="ds-kb-article__views">浏览 12,840</span><span class="ds-kb-article__helpful">92% 有用</span></div></article>
```

## React 示例

```tsx
<KnowledgeArticleCard title="如何申请退款" category="售后" summary="介绍退款条件、流程与到账时间。" views={12840} helpful={0.92} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 有用率低黄色提示
- [ ] 摘要最多两行
- [ ] 按分类筛选
- [ ] 有用无用按钮可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
