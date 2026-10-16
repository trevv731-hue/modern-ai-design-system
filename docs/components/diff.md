# 差异比对视图

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

GitHub PR 与 Git CLI 风格的代码/配置增删对比器；清晰标注新增行、删除行与上下文行。

## 结构

- 头部文件名与增减计数
- 行号安全边距 (Gutter)
- 增减符号标识符 (+ / -)
- 语法等宽代码正文

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

滚动条可获得焦点按方向键滚动；代码正文支持双击复制与全选。

## 使用细则

- 行号区域启用 user-select: none，避免复制时带入无意义行号。
- 新增行（绿色）与删除行（红色）使用极低透明度软底色，保证字迹对比度。
- 等宽字体统一使用 var(--ds-type-mono)。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-diff" style="width:100%"><div class="ds-diff__header"><span>tokens/web.json</span><div style="display:flex;gap:6px"><span class="ds-badge ds-badge--success">+1</span><span class="ds-badge ds-badge--danger">-1</span></div></div><div class="ds-diff__body"><div class="ds-diff-line ds-diff-line--del"><span class="ds-diff__num">14</span><span class="ds-diff__marker">-</span><code class="ds-diff__code">"timeout": 5000,</code></div><div class="ds-diff-line ds-diff-line--add"><span class="ds-diff__num">14</span><span class="ds-diff__marker">+</span><code class="ds-diff__code">"timeout": 12000, // 优化高延迟抖动容限</code></div><div class="ds-diff-line ds-diff-line--ctx"><span class="ds-diff__num">15</span><span class="ds-diff__marker"> </span><code class="ds-diff__code">"maxConnections": 128</code></div></div></div>
```

## React 示例

```tsx
<DiffViewer filename="tokens/web.json" lines={diffLines} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 增减行文字对比度不低于 4.5:1
- [ ] 代码复制时不夹带行号和标记符号
- [ ] 横向超长行能水平平滑滚动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
