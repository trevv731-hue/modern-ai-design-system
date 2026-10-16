# Figma 画布图层导出规格矩阵卡

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Figma 右侧属性栏图层导出规格矩阵（Layer Export Format Matrix）；支持多重倍率（0.5x/1x/2x/3x）、文件格式（PNG/JPG/SVG/PDF）、色域配置（Display P3 / sRGB）与一键批量导出。

## 结构

- 紧凑白色浮动面板 (.ds-figma-export-matrix)
- 标题与色彩空间头部行 (.ds-figma-export-matrix__row, .ds-figma-export-matrix__suffix)
- 倍率与格式双下拉选择行 (.ds-figma-export-matrix__select)
- 通栏主要导出动作按键 (.ds-figma-export-matrix__btn)

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

Tab 遍历选择框与导出按键；Alt+Down 展开下拉菜单；Enter 确认导出。

## 使用细则

- 具备 role="region" 与 aria-label 说明 Figma 导出规格矩阵。
- 所有 select 均包含明确的可访问标签（aria-label）。
- 适合专业图形设计软件、切图导出面板、资源编译器界面。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-figma-export-matrix" role="region" aria-label="Figma 导出规格矩阵"><div class="ds-figma-export-matrix__row"><span style="font-size:12px;font-weight:700;color:var(--ds-ink)">导出 Export</span><span class="ds-figma-export-matrix__suffix">Display P3</span></div><div class="ds-figma-export-matrix__row"><select class="ds-figma-export-matrix__select" aria-label="导出分辨率倍率"><option>1x</option><option selected>2x (Retina)</option><option>3x</option></select><select class="ds-figma-export-matrix__select" aria-label="导出文件格式"><option selected>PNG</option><option>JPG</option><option>SVG</option><option>PDF</option></select></div><button type="button" class="ds-figma-export-matrix__btn"><span>📤 导出选定图层 (2x PNG)</span></button></div>
```

## React 示例

```tsx
<FigmaCanvasExportMatrix density="2x" format="PNG" colorSpace="Display P3" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] Display P3 灰度标记清晰
- [ ] 双下拉框并排整洁
- [ ] 导出按钮包含选中倍率动态提示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
