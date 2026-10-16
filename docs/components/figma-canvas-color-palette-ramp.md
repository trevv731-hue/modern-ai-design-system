# Figma 设计系统色板阶梯渐变条

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Figma 与 Tailwind 设计系统颜色阶梯条（Design System Color Scale Ramp 50-900）；横向紧密排列 10 级单色阶梯、支持色块悬浮纵向缩放突出显示、当前选中色阶 HEX 实时读数与一键取色。

## 结构

- 紧凑微圆角色板外框 (.ds-color-palette-ramp)
- 标题与当前高亮 HEX 读数头部 (.ds-color-palette-ramp__header)
- 10 阶单色连续色条容器 (.ds-color-palette-ramp__swatches)
- 独立阶梯色块单元 (.ds-color-palette-ramp__swatch)
- 底部 50-900 明度极值标签 (.ds-color-palette-ramp__meta)

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

ArrowLeft / ArrowRight 切换所选色阶；Enter 确认选定当前色块。

## 使用细则

- 具备 role="region" 与 aria-label 说明设计变量色阶条。
- 每个色块具备独立的 aria-label 与 aria-pressed 选中状态。
- 适合设计系统变量配置、主题色彩调试器、代码生成器取色面板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-color-palette-ramp" role="region" aria-label="Indigo Scale 设计变量色阶条"><div class="ds-color-palette-ramp__header"><span>Indigo Scale</span><span style="font-family:var(--ds-type-mono);color:var(--ds-accent)">500: #6366f1</span></div><div class="ds-color-palette-ramp__swatches"><button type="button" class="ds-color-palette-ramp__swatch" style="background-color:#eef2ff" aria-label="Indigo 50 #eef2ff" aria-pressed="false"></button><button type="button" class="ds-color-palette-ramp__swatch" style="background-color:#c7d2fe" aria-label="Indigo 200 #c7d2fe" aria-pressed="false"></button><button type="button" class="ds-color-palette-ramp__swatch is-selected" style="background-color:#6366f1" aria-label="Indigo 500 #6366f1" aria-pressed="true"></button><button type="button" class="ds-color-palette-ramp__swatch" style="background-color:#4338ca" aria-label="Indigo 700 #4338ca" aria-pressed="false"></button><button type="button" class="ds-color-palette-ramp__swatch" style="background-color:#312e81" aria-label="Indigo 900 #312e81" aria-pressed="false"></button></div><div class="ds-color-palette-ramp__meta"><span>50 (Light)</span><span>900 (Dark)</span></div></div>
```

## React 示例

```tsx
<FigmaCanvasColorPaletteRamp scaleName="Indigo Scale" selectedStep={500} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 500: #6366f1 读数清晰
- [ ] 色阶连续渐变自然
- [ ] 选中项焦点外框明确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
