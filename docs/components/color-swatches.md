# 色样选择器

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

macOS 系统偏好与 Figma 风格的圆形色样调色盘；用于个性化主题色、节点标签颜色与分类标识选择。

## 结构

- 水平色盘行
- 圆形色块单选按钮
- 1px 内嵌镜面边缘
- 选中状态白色勾选符号 (✓)

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

Tab 进入色盘组；左右方向键选择色块；Enter 或 Space 确认选择。

## 使用细则

- 每个圆盘使用 CSS 变量 --ds-swatch-c 驱动，结构与样式完全解耦。
- 选中时外圈呈现 focus 强调环，内部呈现对比鲜明的微对勾。
- 悬停时具备微膨胀触感（scale(1.18)）。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-swatches" role="radiogroup" aria-label="主题基色选择"><button type="button" class="ds-swatch-item is-active" style="--ds-swatch-c:#3B82F6" aria-label="科技蓝" aria-checked="true" data-toast="已选科技蓝"></button><button type="button" class="ds-swatch-item" style="--ds-swatch-c:#10B981" aria-label="翡翠绿" aria-checked="false" data-toast="已选翡翠绿"></button><button type="button" class="ds-swatch-item" style="--ds-swatch-c:#F59E0B" aria-label="琥珀金" aria-checked="false" data-toast="已选琥珀金"></button><button type="button" class="ds-swatch-item" style="--ds-swatch-c:#EF4444" aria-label="宝石红" aria-checked="false" data-toast="已选宝石红"></button><button type="button" class="ds-swatch-item" style="--ds-swatch-c:#8B5CF6" aria-label="幻紫" aria-checked="false" data-toast="已选幻紫"></button></div>
```

## React 示例

```tsx
<ColorSwatches colors={presetColors} activeColor="#3B82F6" onChange={setColor} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 每个色样均拥有独立的无障碍 aria-label 颜色说明
- [ ] 单选组键盘左右键无障碍循环
- [ ] 选中勾选在不同明度颜色下清晰易辨
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
