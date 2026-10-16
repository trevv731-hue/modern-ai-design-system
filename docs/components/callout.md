# 情境引述卡

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

比 Alert 更亲和、适合长篇文档的情境引述通告；兼顾 Notion 与 GitHub Primer 的阅读质感。

## 结构

- 前置语义图标或 Emoji
- 加粗标题
- 结构化说明正文
- 左侧语义强化边条

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

纯展示类卡片不参与键盘焦点；若内部包含链接或按钮，内部控件依序 Tab。

## 使用细则

- 背景使用柔和的软色调，与正文内容形成温和对比。
- 左侧细色条强化信息等级（info, success, warning, danger）。
- 文字段落保持合适行高与最大行宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<aside class="ds-callout ds-callout--info" role="region" aria-label="订阅更新通知"><span class="ds-callout__icon" aria-hidden="true">💡</span><div class="ds-callout__body"><strong>内核自动更新已就绪</strong><p>当前运行核心为 2026.10 增强版，已自动启用多路径 Multipath-TCP 支持。</p></div></aside>
```

## React 示例

```tsx
<Callout tone="info" icon="💡" title="内核更新已就绪">{children}</Callout>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 图标与首行标题对齐整洁
- [ ] 浅深与暖纸主题下文字对比度合格
- [ ] 多行长文本排版自然不局促
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
