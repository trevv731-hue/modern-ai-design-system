# 树形缩进列表

[返回组件目录](../README.md) · 布局 · v3 新增

## 目的与边界

以缩进和展开箭头展示层级结构，如文件树或目录。

## 结构

- 树容器 (ds-tree-indent)
- 层级行
- 展开箭头
- 缩进参考线
- 叶子项

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

方向键展开收起与移动；右方向键进入子级；左方向键返回父级。

## 使用细则

- 展开状态在刷新后保留。
- 缩进参考线帮助识别层级深度。
- 叶子项无箭头但保持对齐。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tree-indent" role="tree" aria-label="目录树"><div class="ds-tree-indent__row is-open" role="treeitem" aria-expanded="true"><span class="ds-tree-indent__arrow" aria-hidden="true">▾</span><span aria-hidden="true">📁</span>src</div><div class="ds-tree-indent__row is-child" role="treeitem"><span class="ds-tree-indent__arrow is-leaf" aria-hidden="true"></span><span aria-hidden="true">📄</span>index.ts</div><div class="ds-tree-indent__row is-child" role="treeitem"><span class="ds-tree-indent__arrow is-leaf" aria-hidden="true"></span><span aria-hidden="true">📄</span>tokens.ts</div><div class="ds-tree-indent__row" role="treeitem"><span class="ds-tree-indent__arrow" aria-hidden="true">▸</span><span aria-hidden="true">📁</span>docs</div></div>
```

## React 示例

```tsx
<TreeIndent nodes={[{ label: "src", open: true, children: [{ label: "index.ts", leaf: true }] }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 展开状态刷新保留
- [ ] 缩进参考线可见
- [ ] 叶子项无箭头对齐
- [ ] 方向键层级导航
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
