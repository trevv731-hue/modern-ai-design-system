# Figma 调色板无障碍色阶生成微芯片

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Figma 调色板生成器与色彩设计系统（Color Palette Generator & Contrast Ramp Chip）；展示基准主色（Brand Blue #0284c7）、5阶明度梯度（100/300/500/700/900）、WCAG AAA 高对比合规评级与无障碍梯度标尺。

## 结构

- 紧凑圆角色阶卡片 (.ds-palette-generator-chip)
- 色卡名称与 WCAG AAA 绿色合规微标 (.ds-palette-generator-chip__header, .ds-palette-generator-chip__wcag)
- 5 阶渐变色块排布 (.ds-palette-generator-chip__ramp, .ds-palette-generator-chip__step)
- 底部等宽基准十六进制色值与梯度说明 (.ds-palette-generator-chip__footer)

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

Tab 聚焦调色板生成器；屏幕阅读器播报基准色值名称、十六进制代码与无障碍等级。

## 使用细则

- 具备 role="group" 与 aria-label 完整播报色彩名称与 WCAG 评级。
- 5阶明度色块文字均符合对应底色的对比度规范。
- 适合设计系统变量管理插件、WCAG 无障碍配色工具、前端色板构建器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-palette-generator-chip" role="group" aria-label="调色板色阶生成器：Brand Blue (#0284c7)，WCAG AAA (7.2:1)"><div class="ds-palette-generator-chip__header"><span>Brand Blue</span><span class="ds-palette-generator-chip__wcag">WCAG AAA (7.2:1)</span></div><div class="ds-palette-generator-chip__ramp" aria-hidden="true"><div class="ds-palette-generator-chip__step" style="background:#e0f2fe;color:#0369a1">100</div><div class="ds-palette-generator-chip__step" style="background:#7dd3fc;color:#0c4a6e">300</div><div class="ds-palette-generator-chip__step" style="background:#0284c7;color:#ffffff">500</div><div class="ds-palette-generator-chip__step" style="background:#0369a1;color:#ffffff">700</div><div class="ds-palette-generator-chip__step" style="background:#0c4a6e;color:#ffffff">900</div></div><div class="ds-palette-generator-chip__footer"><span>基准: #0284c7</span><span>5 阶无障碍梯度</span></div></div>
```

## React 示例

```tsx
<FigmaCanvasPaletteGeneratorChip baseColorName="Brand Blue" baseHex="#0284c7" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] WCAG AAA 绿色评级
- [ ] 5 阶色阶平滑过渡
- [ ] 基准十六进制标定工整
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
