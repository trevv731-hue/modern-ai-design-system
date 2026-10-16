# Figma 设计变量双色样本色卡胶囊

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Figma 设计系统调色板变量色块卡片（Design Token Swatch Chip）；左右分割展示同一语义 Token 在 Light/Dark 模式下的色值对比、等宽变量名、HEX 代码及一键快捷复制按钮。

## 结构

- 紧凑圆角样本条 (.ds-color-swatch-chip)
- 深浅双拼半透明视窗 (.ds-color-swatch-chip__preview)
- 左浅右深对比分割色块 (.ds-color-swatch-chip__split-l, .ds-color-swatch-chip__split-r)
- 等宽 Token 变量标识 (.ds-color-swatch-chip__name)
- 微型复制动作按钮 (.ds-color-swatch-chip__copy)

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

Tab 聚焦复制按钮；Enter 或 Space 快捷复制当前 Token 变量代码。

## 使用细则

- role="region" 与 aria-label 完整宣布 Token 变量名称与深浅色值。
- 复制按钮具备独立 aria-label="复制 $color-brand-primary 颜色值"。
- 适合设计系统变量手册、CSS/Swift 变量提取工具、主题调色调试台。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-color-swatch-chip" role="region" aria-label="设计变量色卡: $color-brand-primary, 浅色 #3B82F6, 深色 #1D4ED8" style="--ds-swatch-light:#3b82f6;--ds-swatch-dark:#1d4ed8"><div class="ds-color-swatch-chip__preview" aria-hidden="true"><div class="ds-color-swatch-chip__split-l"></div><div class="ds-color-swatch-chip__split-r"></div></div><div class="ds-color-swatch-chip__meta"><span class="ds-color-swatch-chip__name">$color-brand-primary</span><span class="ds-color-swatch-chip__hex">#3B82F6 / #1D4ED8</span></div><button type="button" class="ds-color-swatch-chip__copy" aria-label="复制 $color-brand-primary 颜色值">⧉</button></div>
```

## React 示例

```tsx
<FigmaColorSwatchToken tokenName="$color-brand-primary" hexLight="#3B82F6" hexDark="#1D4ED8" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 双拼色块对半平分严谨
- [ ] Token 等宽字体清晰
- [ ] 复制按钮小巧且右对齐
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
