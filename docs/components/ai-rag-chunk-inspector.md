# AI 检索片段检查器

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

展示回答引用了哪些原文片段、相关度与出处，让依据可核验。

## 结构

- 检查器外壳 (ds-rag-inspector)
- 片段文本
- 相关度与来源
- 跳转原文入口

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

片段列表可用方向键浏览；跳转入口是链接，Enter 打开。

## 使用细则

- 片段保留原文，不做摘要替换。
- 相关度给出分值与排序依据。
- 未命中时明确说明“无相关片段”。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-rag-inspector" role="region" aria-label="检索片段"><ol class="ds-rag-inspector__list"><li class="ds-rag-inspector__chunk"><p>刷新失败通常与订阅链接有效期有关。</p><footer><span>相关度 0.82 · 值班手册 第 3 节</span><button type="button" class="ds-button ds-button--ghost">打开原文</button></footer></li></ol></div>
```

## React 示例

```tsx
<AIRagChunkInspector chunks={[{ text: "刷新失败通常与订阅链接有效期有关。", score: 0.82, source: "值班手册 第 3 节" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 片段为原文而非摘要
- [ ] 相关度有分值与排序说明
- [ ] 无命中时给出明确空状态
- [ ] 键盘可浏览与跳转
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
