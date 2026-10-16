# Figma 画布图层测量尺寸标注药丸

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Figma 画布图层选中时动态距离测量与尺寸标注浮动药丸（Canvas Selection Distance & Dimensions Floating Pill）；实时显示选框宽度与高度（W × H 等宽粗体大字）、与父级或相邻图层相对间距微标。

## 结构

- 高对比度洋红/玫红药丸徽标 (.ds-dimension-label-hud)
- 等宽尺寸宽高数值 (.ds-dimension-label-hud__dim)
- 微型半透明间距距离标签 (.ds-dimension-label-hud__dist)

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

Tab 聚焦尺寸标注；屏幕阅读器自动播报当前图层测量宽高与间距距离。

## 使用细则

- 具备 role="status" 与 aria-label 完整播报图层测量尺寸与间距。
- 高饱和玫红底色在任意复杂画布背景上均清晰可辨。
- 适合设计画布测量工具、CSS 盒子模型检查器、前端尺寸标记插件。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-dimension-label-hud" role="status" aria-label="图层测量尺寸：宽 380，高 240，与父容器间距 16 像素"><span class="ds-dimension-label-hud__dim">380 <span class="ds-dimension-label-hud__sep">×</span> 240</span><span class="ds-dimension-label-hud__dist" title="间距">16px</span></div>
```

## React 示例

```tsx
<FigmaCanvasDimensionLabelHud width={380} height={240} distance={16} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 380 × 240 鲜红标注浮条
- [ ] 16px 间距微型黑透胶囊
- [ ] 等宽数字规范工整
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
