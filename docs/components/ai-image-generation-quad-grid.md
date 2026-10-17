# AI 图像四分宫格实时渲染与放大矩阵

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

复刻 Midjourney、Flux 与 DALL-E 经典的 2x2 四分图实时生成结果矩阵，提供变体数字角标、一键单图放大（U1~U4）与微调变体（V1~V4）。

## 结构

- 卡片总外壳 (ds-image-quad)
- 四宫格图像网格 (ds-image-quad__grid)
- 单图单元格 (ds-image-quad__cell)
- 变体编号角标 (ds-image-quad__badge)
- 操作工具栏 (ds-image-quad__toolbar)
- 放大与微调按钮簇 (ds-image-quad__btn-group)

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

Tab 键在各放大与变体按钮间遍历；Enter 确认生成放大任务。

## 使用细则

- 四宫格严格保持 1:1 等比例正方形排列，圆角边框裁切利落。
- 单图左下角标明 1~4 变体序号，下方对应 U1~U4（Upscale）与 V1~V4（Variation）操作。
- 图片正在生成时单元格内可呈现微光波纹骨架加载态。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-image-quad" role="region" aria-label="AI 图像生成 2x2 四分预览与放大矩阵"><div class="ds-image-quad__grid"><div class="ds-image-quad__cell"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Crect width='140' height='140' fill='%236366f1'/%3E%3Ctext x='70' y='76' font-size='20' text-anchor='middle' fill='white' font-family='sans-serif'%3EVariant 1%3C/text%3E%3C/svg%3E" alt="生成图像变体 1" class="ds-image-quad__img"><span class="ds-image-quad__badge">1</span></div><div class="ds-image-quad__cell"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Crect width='140' height='140' fill='%23ec4899'/%3E%3Ctext x='70' y='76' font-size='20' text-anchor='middle' fill='white' font-family='sans-serif'%3EVariant 2%3C/text%3E%3C/svg%3E" alt="生成图像变体 2" class="ds-image-quad__img"><span class="ds-image-quad__badge">2</span></div><div class="ds-image-quad__cell"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Crect width='140' height='140' fill='%2306b6d4'/%3E%3Ctext x='70' y='76' font-size='20' text-anchor='middle' fill='white' font-family='sans-serif'%3EVariant 3%3C/text%3E%3C/svg%3E" alt="生成图像变体 3" class="ds-image-quad__img"><span class="ds-image-quad__badge">3</span></div><div class="ds-image-quad__cell"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Crect width='140' height='140' fill='%2310b981'/%3E%3Ctext x='70' y='76' font-size='20' text-anchor='middle' fill='white' font-family='sans-serif'%3EVariant 4%3C/text%3E%3C/svg%3E" alt="生成图像变体 4" class="ds-image-quad__img"><span class="ds-image-quad__badge">4</span></div></div><div class="ds-image-quad__toolbar"><div class="ds-image-quad__btn-group"><button type="button" class="ds-image-quad__btn" aria-label="高清放大第 1 张">U1</button><button type="button" class="ds-image-quad__btn" aria-label="高清放大第 2 张">U2</button><button type="button" class="ds-image-quad__btn" aria-label="高清放大第 3 张">U3</button><button type="button" class="ds-image-quad__btn" aria-label="高清放大第 4 张">U4</button></div><div class="ds-image-quad__btn-group"><button type="button" class="ds-image-quad__btn" aria-label="针对第 1 张做微调变体">V1</button><button type="button" class="ds-image-quad__btn" aria-label="针对第 2 张做微调变体">V2</button></div></div></div>
```

## React 示例

```tsx
<AIImageGenerationQuadGrid onUpscale={(idx) => console.log(idx)} onVariation={(idx) => console.log(idx)} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四宫格在不同屏幕宽度下自适应缩放无畸变
- [ ] 操作按钮点击响应灵敏，提供明显的激活色反馈
- [ ] 无障碍标签清晰说明每颗按钮代表放大或变体的哪张图片
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
