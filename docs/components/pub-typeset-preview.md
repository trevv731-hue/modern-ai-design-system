# 排版预览

[返回组件目录](../README.md) · 媒体 / 出版 · v3 新增

## 目的与边界

预览排版的分栏、字体与字号设置效果。

## 结构

- 设置区 (ds-typeset-preview__controls)
- 分栏选项
- 字体选项 (ds-typeset-preview__control)
- 预览页 (ds-typeset-preview__page)

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

设置项可聚焦调整；预览实时更新并以 status 播报。

## 使用细则

- 分栏 1/2/3 可切换。
- 正文字体三选：宋体、黑体、楷体。
- 预览使用真实文本段落。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-typeset-preview" aria-label="排版预览，双栏，宋体，小四字号"><div class="ds-typeset-preview__controls" role="radiogroup" aria-label="排版设置"><button type="button" class="ds-typeset-preview__control is-active" role="radio" aria-checked="true">双栏</button><button type="button" class="ds-typeset-preview__control" role="radio" aria-checked="false">宋体</button><button type="button" class="ds-typeset-preview__control" role="radio" aria-checked="false">小四</button></div><div class="ds-typeset-preview__page is-two-col" aria-hidden="true"><p>古籍数字化是一项长期性、基础性工作。近年来，随着人工智能技术的发展，OCR 识别与自动校对能力显著提升，为大规模古籍整理提供了新的技术路径。</p><p>本文提出一种基于大语言模型的校对方法，通过领域语料微调与检索增强生成相结合，在保持原貌完整性的前提下提升校对准确率。</p></div></section>
```

## React 示例

```tsx
<TypesettingPreview columns={2} font="宋体" size="小四" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 分栏切换
- [ ] 字体三选
- [ ] 实时预览
- [ ] 设置播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
