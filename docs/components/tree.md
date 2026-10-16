# 树形层级导航

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

VS Code 与 GitHub 风格的代码与文件目录树；支持多层级折叠展开、选中指示与键盘无障碍遍历。

## 结构

- 树形外层容器
- 层级缩进引导线
- 展开收起箭头 Chevron
- 文件类型语义图标
- 项目标签

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

上下方向键移动焦点；右方向键展开目录；左方向键收起目录或跳至父目录；Enter 选中当前项。

## 使用细则

- 通过 border-left 提供淡淡的垂直层级参考线，多层目录清晰不混乱。
- 选中项具备圆角背景高光与加粗强调。
- 展开收起箭头使用 transform 旋转，性能卓越。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tree" role="tree" aria-label="项目配置文件" style="width:100%;max-width:280px"><div class="ds-tree-item is-expanded" role="treeitem" aria-expanded="true"><div class="ds-tree-item__row is-active" tabindex="0"><span class="ds-tree-item__chevron" aria-hidden="true">▶</span><span class="ds-tree-item__icon" aria-hidden="true">📁</span><span>config/</span></div><div class="ds-tree-item__group" role="group"><div class="ds-tree-item" role="treeitem"><div class="ds-tree-item__row" tabindex="-1"><span style="width:14px"></span><span class="ds-tree-item__icon" aria-hidden="true">📄</span><span>routes.json</span></div></div><div class="ds-tree-item" role="treeitem"><div class="ds-tree-item__row" tabindex="-1"><span style="width:14px"></span><span class="ds-tree-item__icon" aria-hidden="true">📄</span><span>dns.yaml</span></div></div></div></div></div>
```

## React 示例

```tsx
<FileTree items={fileTreeData} selectedId="routes" onSelect={openFile} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 键盘方向键能顺利在层级间导航
- [ ] 缩进连线在高 DPI 下无锯齿断裂
- [ ] 选中项色彩在当前主题下满足对比度
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
