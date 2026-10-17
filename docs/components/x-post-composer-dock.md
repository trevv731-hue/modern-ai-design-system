# X 发帖输入条

[返回组件目录](../README.md) · 消费端媒体 · v3 新增

## 目的与边界

在一行内完成撰写、附加内容与发布，实时显示剩余字数与发布范围。

## 结构

- 输入条外壳 (ds-composer)
- 文本输入区
- 附件与表情按钮
- 字数提示与发布按钮

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

Ctrl+Enter 发布；Tab 进入附件与发布按钮；Escape 清空草稿确认。

## 使用细则

- 字数提示在接近上限时明确提示，不静默截断。
- 发布范围在按钮附近可见，不埋在菜单里。
- 发布失败保留草稿内容。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-composer" role="group" aria-label="撰写帖子"><input id="composer-text" type="text" placeholder="有什么新鲜事？" aria-label="帖子内容"><button type="button" class="ds-button ds-button--ghost" aria-label="添加图片">🖼</button><button type="button" class="ds-button ds-button--ghost" aria-label="添加表情">☺</button><span class="ds-composer__count">剩余 244 字</span><button type="button" class="ds-button">发布</button></div>
```

## React 示例

```tsx
<XPostComposerDock placeholder="有什么新鲜事？" remaining={244} onPost={post} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 接近字数上限时提示而非截断
- [ ] 发布范围可见
- [ ] 失败后草稿保留
- [ ] 键盘可完成发布
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
