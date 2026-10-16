# Notion & Linear 柔色高亮说明引述块

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Notion、Linear 与 GitHub 文档中经典的带图标说明引述块（Rich Callout Box）；支持左侧 prominent 表情图标徽标与右侧优雅排版的提示正文。

## 结构

- 圆角微内凹背景卡片 (.ds-notion-callout)
- 左侧 20px 语义 Emoji 图标 (.ds-notion-callout__icon)
- 右侧自适应正文段落 (.ds-notion-callout__body)

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

作为语义化 role="note" 展示，无障碍屏幕阅读器自动按批注/备忘报读。

## 使用细则

- 背景采用柔和内陷浅色（--ds-inset），保持低饱和不刺眼，自然融入正文段落流。
- 左侧图标默认 flex-shrink:0，防止多行文本折行时挤压图标。
- 适合技术文档备忘提示、重要系统通知、前置注意事项及最佳实践推荐。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-notion-callout" role="note"><span class="ds-notion-callout__icon" aria-hidden="true">💡</span><div class="ds-notion-callout__body">系统已自动启用增量快照备份，所有关键状态与设计 Token 均支持 100% 离线完整回溯。</div></div>
```

## React 示例

```tsx
<NotionRichCalloutBox icon="💡">说明文字</NotionRichCalloutBox>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 图标与首行文字基线对齐舒适
- [ ] 边框线细腻柔和
- [ ] 浅深色主题下字色对比度充足
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
