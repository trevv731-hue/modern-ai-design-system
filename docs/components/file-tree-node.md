# IDE 文件树 Git 状态节点

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

VS Code 与 JetBrains 工作区风格的代码与配置文件树形行；支持层级缩进、展开折叠三角、类型图标与 Git 增删改状态标签。

## 结构

- 缩进层级指示偏移量 (--ds-file-indent)
- 折叠/展开旋转三角箭头
- 文件类型矢量微图标
- 文件名正文
- 右侧 M/U/D 彩色 Git 状态角标

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

Tab 或方向键在文件节点间上下浏览；Enter 打开文件；Space 或右方向键展开目录。

## 使用细则

- 缩进通过 CSS 变量 --ds-file-indent 参数化计算，支持多级深度平滑缩进。
- Git 状态角标使用 warning 黄色 (M)、success 绿色 (U)、danger 红色 (D)，与行业标准完全统一。
- 悬停与激活态背景与侧边栏融合自然，单行文本溢出时平滑省略。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div style="width:100%;display:flex;flex-direction:column;gap:2px"><div class="ds-file-node is-expanded" style="--ds-file-indent:10px" role="treeitem" aria-expanded="true"><div class="ds-file-node__main"><span class="ds-file-node__chevron" aria-hidden="true">▶</span><span class="ds-file-node__icon">📁</span><span class="ds-file-node__name">src/core</span></div></div><div class="ds-file-node is-active" style="--ds-file-indent:24px" role="treeitem" aria-selected="true"><div class="ds-file-node__main"><span style="width:12px"></span><span class="ds-file-node__icon">📄</span><span class="ds-file-node__name">quic_engine.ts</span></div><span class="ds-file-node__badge ds-file-node__badge--m">M</span></div><div class="ds-file-node" style="--ds-file-indent:24px" role="treeitem"><div class="ds-file-node__main"><span style="width:12px"></span><span class="ds-file-node__icon">📄</span><span class="ds-file-node__name">tunnel.spec.ts</span></div><span class="ds-file-node__badge ds-file-node__badge--u">U</span></div></div>
```

## React 示例

```tsx
<FileTreeGitNode name="quic_engine.ts" gitStatus="M" depth={1} isActive={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三角箭头展开折叠旋转平滑利落
- [ ] 多级缩进排版严格垂直对齐
- [ ] Git 状态字符等宽且背景色弱对比达标
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
