# macOS Sequoia 级联分栏文件目录浏览器

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

macOS Sequoia Finder 经典的 NeXTSTEP 多列分级级联目录浏览器；支持横向平铺多层级文件夹、高亮选定项目及右侧指引箭头。

## 结构

- 横向可横滚分栏容器 (.ds-finder-columns)
- 纵向单列滚动目录栏 (.ds-finder-col)
- 文件与文件夹行项 (.ds-finder-item)
- 选中高亮行态 (.ds-finder-item.is-selected)
- 左侧类型图标与文件名 (.ds-finder-item__left)
- 右侧子层级前进指示箭头 (.ds-finder-item__chevron)

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

上下箭头在当前列各文件间导航；右箭头进入子文件夹展开新列；左箭头返回上一级父列。

## 使用细则

- 选中项采用系统强调色（--ds-action）反白展示，提供直观的路径追踪体验。
- 每列独立纵向滚动，多列超出时容器横向滚动，重现 Finder 的层级展开逻辑。
- 适合复杂云存储文件管理、知识库文档树、代码工程模块检索及资产管理器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-finder-columns" role="region" aria-label="macOS 分栏文件浏览器"><div class="ds-finder-col" role="listbox" aria-label="第 1 层目录"><div role="option" aria-selected="false" class="ds-finder-item"><div class="ds-finder-item__left"><span>📁</span><span class="ds-finder-item__text">Applications</span></div><span class="ds-finder-item__chevron" aria-hidden="true">›</span></div><div role="option" aria-selected="true" class="ds-finder-item is-selected"><div class="ds-finder-item__left"><span>📁</span><span class="ds-finder-item__text">Projects</span></div><span class="ds-finder-item__chevron" aria-hidden="true">›</span></div></div><div class="ds-finder-col" role="listbox" aria-label="第 2 层目录"><div role="option" aria-selected="true" class="ds-finder-item is-selected"><div class="ds-finder-item__left"><span>📁</span><span class="ds-finder-item__text">ui-design-system</span></div><span class="ds-finder-item__chevron" aria-hidden="true">›</span></div><div role="option" aria-selected="false" class="ds-finder-item"><div class="ds-finder-item__left"><span>📁</span><span class="ds-finder-item__text">AetherLink</span></div><span class="ds-finder-item__chevron" aria-hidden="true">›</span></div></div><div class="ds-finder-col" role="listbox" aria-label="第 3 层目录"><div role="option" aria-selected="true" class="ds-finder-item is-selected"><div class="ds-finder-item__left"><span>📁</span><span class="ds-finder-item__text">web</span></div><span class="ds-finder-item__chevron" aria-hidden="true">›</span></div><div role="option" aria-selected="false" class="ds-finder-item"><div class="ds-finder-item__left"><span>📁</span><span class="ds-finder-item__text">tokens</span></div><span class="ds-finder-item__chevron" aria-hidden="true">›</span></div></div></div>
```

## React 示例

```tsx
<MacFinderColumnView />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 分栏边框垂直贯通无截断
- [ ] 选定项高亮与箭头色彩协调
- [ ] 长文件名自适应省略号截断
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
