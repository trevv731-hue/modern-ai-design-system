# 划词悬浮富文本动作条

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

Notion 与 Medium 风格的富文本悬浮快捷操作气泡条；带毛玻璃半透明材质、加粗、斜体、插入超链接、代码块微按钮与垂直分割细线。

## 结构

- 毛玻璃半透明容器 (.ds-float-toolbar)
- 加粗 (B)、斜体 (I) 格式微按钮
- 14px 高度极细垂直分隔线 (.ds-float-sep)
- 链接与行内代码快捷按钮
- 微立体柔和浮层阴影

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

Tab 在工具栏按钮间循环；Enter/Space 触发格式化；Escape 隐藏工具栏；快捷键 Ctrl+B/Ctrl+I 同步映射。

## 使用细则

- 采用 backdrop-filter: blur(16px) 毛玻璃与 --ds-chrome 材质，与底层文字产生细腻的物理景深穿透感。
- 按钮尺寸 26px × 26px，紧凑精致，hover 时平滑提供 --ds-surface 背景高亮。
- 适合放置于选中文本正上方 8px 处作为划词悬浮菜单。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-float-toolbar" role="toolbar" aria-label="格式化选项"><button type="button" class="ds-float-btn is-active" aria-label="加粗" data-toast="加粗选中文字"><b>B</b></button><button type="button" class="ds-float-btn" aria-label="斜体" data-toast="斜体选中文字"><i>I</i></button><span class="ds-float-sep"></span><button type="button" class="ds-float-btn" aria-label="插入超链接" data-toast="添加超链接">🔗</button><button type="button" class="ds-float-btn" aria-label="行内代码" data-toast="转换为代码块">`&lt;&gt;`</button></div>
```

## React 示例

```tsx
<FloatingTextToolbar onBold={toggleBold} onItalic={toggleItalic} onLink={insertLink} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 毛玻璃半透明质感在深浅主题下均显高级
- [ ] 各格式按钮激活与悬停对比度达标
- [ ] 键盘焦点移动流畅且无死循环
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
