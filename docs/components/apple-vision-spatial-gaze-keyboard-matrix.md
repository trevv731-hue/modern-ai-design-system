# VisionOS 空间注视虚拟数字按键矩阵

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间计算视线注视与手势轻捏虚拟数字键盘（Spatial Gaze Virtual Keypad Matrix）；悬浮高斯模糊半透明底板、等宽实时输入字符预览窗、3x4 数字与退格确认按键网格及注视高亮微浮动微动效。

## 结构

- 深色毛玻璃立体悬浮窗 (.ds-spatial-gaze-keyboard)
- 单行等宽实时字符读数框 (.ds-spatial-gaze-keyboard__preview)
- 3x4 规整按键行容器 (.ds-spatial-gaze-keyboard__row)
- 注视高亮微立体按键 (.ds-spatial-gaze-keyboard__key)

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

通过视线注视悬浮高亮按键，手指轻捏 (Tap/Space) 触发输入；Tab 键支持全键盘辅助输入。

## 使用细则

- 具备 role="region" 与 aria-label 说明空间注视数字键盘。
- 预览区具备 aria-live="polite" 实时播报当前输入内容。
- 适合 VisionOS 空间密码输入、安全认证 PIN 码、空间计算计算器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-gaze-keyboard" role="region" aria-label="空间注视虚拟数字按键矩阵"><div class="ds-spatial-gaze-keyboard__preview" aria-live="polite">PIN: 849</div><div class="ds-spatial-gaze-keyboard__row"><button type="button" class="ds-spatial-gaze-keyboard__key" aria-label="按键 1">1</button><button type="button" class="ds-spatial-gaze-keyboard__key" aria-label="按键 2">2</button><button type="button" class="ds-spatial-gaze-keyboard__key" aria-label="按键 3">3</button></div><div class="ds-spatial-gaze-keyboard__row"><button type="button" class="ds-spatial-gaze-keyboard__key" aria-label="按键 4">4</button><button type="button" class="ds-spatial-gaze-keyboard__key" aria-label="按键 5">5</button><button type="button" class="ds-spatial-gaze-keyboard__key" aria-label="按键 6">6</button></div></div>
```

## React 示例

```tsx
<VisionSpatialGazeKeyboardMatrix value="PIN: 849" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 数字输入预览居上
- [ ] 按键矩阵排列工整
- [ ] 磨砂毛玻璃背景深邃
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
