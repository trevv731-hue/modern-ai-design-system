# Figma 画布磁吸对齐参考线与间距指示

[返回组件目录](../README.md) · 布局 · CSS / HTML / React

## 目的与边界

Figma 与 Sketch 矢量画板动态磁吸对齐指示器（Dynamic Canvas Snap Guidelines & Spacing Tags）；拖拽图元时动态呈现的洋红高亮中心水平/垂直对齐基准线、精准像素测距微胶囊（16px）与元素包围虚框。

## 结构

- 深色矢量画布容器 (.ds-canvas-snap-guides)
- 图元半透明高亮线框 (.ds-canvas-snap-guides__box)
- 洋红水平与垂直对齐导线 (.ds-canvas-snap-guides__line-x, .ds-canvas-snap-guides__line-y)
- 导线上叠放的像素测距数字药丸 (.ds-canvas-snap-guides__tag)
- 完全不阻挡点击交互的穿透指针 (pointer-events: none)

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

拖拽图元靠近边界时自动吸附；按住 Alt 查看全向相对间距。

## 使用细则

- 具备 role="region" 与 aria-label 描述 Figma 画布磁吸对齐参考线与间距指示。
- 洋红高亮线在深色画布上具有 10:1 以上对比度，辨识度高。
- 适合图形设计编辑器、低代码拖拽画布、网页排版构建器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-canvas-snap-guides" role="region" aria-label="Figma 画布磁吸对齐参考线与间距指示"><div class="ds-canvas-snap-guides__box" style="left:24px;top:20px;width:90px;height:50px"></div><div class="ds-canvas-snap-guides__box" style="left:170px;top:70px;width:120px;height:50px"></div><div class="ds-canvas-snap-guides__line-x"></div><div class="ds-canvas-snap-guides__line-y"></div><span class="ds-canvas-snap-guides__tag">16px</span></div>
```

## React 示例

```tsx
<FigmaCanvasSnapGuides snapDist="16px" activeAxis="both" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 深色画布中洋红参考线极其醒目
- [ ] 16px 间距标签精准贴合
- [ ] 两个元素线框层级分明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
