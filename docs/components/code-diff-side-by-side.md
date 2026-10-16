# 双栏代码差异比对查看器

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

GitHub PR 与 Cursor 风格的左右双栏 Git 代码改动对比卡片；集成行号同步对齐、删除行红色高亮与新增行绿色柔底，适用于代码审查与配置演进。

## 结构

- 卡片标题栏与文件名说明
- 左右两栏网格等宽并排布局
- 等宽行号列 (.ds-split-line__num)
- 红底删除行 (.ds-split-line--del)
- 绿底新增行 (.ds-split-line--add)

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

Tab 聚焦双栏对比视图；支持鼠标拖拽行选文字进行代码复制。

## 使用细则

- 左右两栏严格保持行高对齐，利用 CSS grid: 1fr 1fr 消除由于内容不对称引发的垂直错位。
- 增删颜色严格对应 successSoft 与 dangerSoft 语义变量，在深浅主题下文字均达 4.5:1 对比度。
- 中间带 1px 细线分隔，视觉清晰规整。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-split-diff" role="region" aria-label="配置文件改动比对"><div class="ds-split-diff__header"><span>config/router.rs</span><span>双栏比对视图</span></div><div class="ds-split-diff__panes"><div class="ds-split-diff__pane"><div class="ds-split-line ds-split-line--del"><span class="ds-split-line__num">42</span><span>- proxy_pass: "http://legacy-node:8080";</span></div><div class="ds-split-line"><span class="ds-split-line__num">43</span><span>  timeout_ms: 5000;</span></div></div><div class="ds-split-diff__pane"><div class="ds-split-line ds-split-line--add"><span class="ds-split-line__num">42</span><span>+ proxy_pass: "https://quic-mesh:8443";</span></div><div class="ds-split-line"><span class="ds-split-line__num">43</span><span>  timeout_ms: 5000;</span></div></div></div></div>
```

## React 示例

```tsx
<DualPaneCodeDiff fileName="config/router.rs" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 左右行高严格对齐不产生错位
- [ ] 删除与新增行代码色彩辨识度高
- [ ] 代码字号等宽且单行自适应截断
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
