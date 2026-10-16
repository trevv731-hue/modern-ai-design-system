# macOS 数码测色计 32 色阵列取色板

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

macOS Sequoia 数码测色计与 Adobe 调色板风格的 32 色网格色盘；支持单色悬停放大浮出、十六进制色值实时采样及底部预览块联动。

## 结构

- 色盘控制台面板 (.ds-color-matrix)
- 顶栏色板统计标题 (.ds-color-matrix__head)
- 8x4 三十二宫格色块矩阵 (.ds-color-matrix__grid)
- 单独色块微交互放大单元 (.ds-color-matrix__cell)
- 底部十六进制采样预览栏 (.ds-color-matrix__meta)
- 方形实时色样块 (.ds-color-matrix__preview)

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

方向键在色块网格间移动；Enter 或 Space 采样当前色彩；Tab 导航出矩阵。

## 使用细则

- 色块悬停采用 GPU transform scale 放大配合细微投影浮出，操作反馈细腻明确。
- 底部展示选中色的 Hex 编码与方形样块，提供即时采样反馈。
- 适合设计工具画板着色器、主题色自定义配置中心及图表配色方案切换器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-color-matrix" role="region" aria-label="macOS 32色阵列取色板"><div class="ds-color-matrix__head"><span>macOS Digital Color Matrix</span><span>32 SWATCHES</span></div><div class="ds-color-matrix__grid"><div class="ds-color-matrix__cell" style="background-color:#ef4444" role="button" tabindex="0" aria-label="拾取颜色 #ef4444"></div><div class="ds-color-matrix__cell" style="background-color:#f97316" role="button" tabindex="0" aria-label="拾取颜色 #f97316"></div><div class="ds-color-matrix__cell" style="background-color:#f59e0b" role="button" tabindex="0" aria-label="拾取颜色 #f59e0b"></div><div class="ds-color-matrix__cell" style="background-color:#84cc16" role="button" tabindex="0" aria-label="拾取颜色 #84cc16"></div><div class="ds-color-matrix__cell" style="background-color:#10b981" role="button" tabindex="0" aria-label="拾取颜色 #10b981"></div><div class="ds-color-matrix__cell" style="background-color:#06b6d4" role="button" tabindex="0" aria-label="拾取颜色 #06b6d4"></div><div class="ds-color-matrix__cell" style="background-color:#3b82f6" role="button" tabindex="0" aria-label="拾取颜色 #3b82f6"></div><div class="ds-color-matrix__cell" style="background-color:#6366f1" role="button" tabindex="0" aria-label="拾取颜色 #6366f1"></div></div><div class="ds-color-matrix__meta"><div style="display:flex;align-items:center;gap:6px"><div class="ds-color-matrix__preview" style="background-color:#3b82f6"></div><span>#3B82F6</span></div><span style="color:var(--ds-muted);font-size:10px">HEX SAMPLER</span></div></div>
```

## React 示例

```tsx
<MacColorMatrixPalette selectedColor="#3b82f6" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 网格缝隙严谨等距
- [ ] 悬停色块放大且层次置顶
- [ ] 采样读数十六进制清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
