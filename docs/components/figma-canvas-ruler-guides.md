# Figma 无限画布毫米像素对齐标尺与参考线

[返回组件目录](../README.md) · 布局 · CSS / HTML / React

## 目的与边界

Figma 与 Photoshop 风格的画布顶部与左侧像素标尺视窗（Canvas Ruler & Guide Overlays）；带有交汇原点角落、等距刻度微字、青色十字对齐导线与坐标悬浮数值徽标。

## 结构

- 画布工作区双轴容器 (.ds-canvas-ruler)
- 顶部水平刻度尺条 (.ds-canvas-ruler__top)
- 左侧垂直刻度尺条 (.ds-canvas-ruler__left)
- 荧光青色对齐参考线 (.ds-canvas-ruler__guide-x, .ds-canvas-ruler__guide-y)
- 微型坐标浮动气泡徽标 (.ds-canvas-ruler__tag)

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

Shift+R 快捷键切换标尺显隐，方向键微调参考线坐标。

## 使用细则

- role="region" 与 aria-label 报读当前捕获参考线的实时坐标。
- 参考线带有微发光阴影，在深浅画布底色下均高保真可见。
- 适合网页原型画布、海报排版编辑器、矢量图形工具及设计走查系统。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-canvas-ruler" role="region" aria-label="画布标尺辅助线，X坐标 140px，Y坐标 65px"><div class="ds-canvas-ruler__corner" aria-hidden="true"></div><div class="ds-canvas-ruler__top" aria-hidden="true"><span>0</span><span>50</span><span>100</span><span>150</span><span>200</span><span>250</span></div><div class="ds-canvas-ruler__left" aria-hidden="true"><span>0</span><span>50</span><span>100</span></div><div class="ds-canvas-ruler__guide-x" aria-hidden="true"></div><div class="ds-canvas-ruler__guide-y" aria-hidden="true"></div><div class="ds-canvas-ruler__tag">X:140 Y:65</div></div>
```

## React 示例

```tsx
<FigmaCanvasRulerGuides xGuide={140} yGuide={65} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 角落正方交汇块边框对齐
- [ ] 刻度文字等宽且微弱不刺眼
- [ ] 青色参考线发光微投影自然
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
