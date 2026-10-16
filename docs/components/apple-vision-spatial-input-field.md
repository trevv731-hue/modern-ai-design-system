# VisionOS 空间悬浮毛玻璃文本输入框

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间计算视线注视悬浮磨砂玻璃输入框（Spatial Frosted Glass Text Input Field）；空间毛玻璃超高模糊底板、聚光聚焦高亮外边框、前置半透明图标及带一键快速清空动作圆钮。

## 结构

- 双曲高景深毛玻璃框 (.ds-spatial-input)
- 聚焦外圈微光晕 (.ds-spatial-input:focus-within)
- 前置微弱功能图标 (.ds-spatial-input__icon)
- 无边框透明原生输入区 (.ds-spatial-input__control)
- 圆形微透明清空按键 (.ds-spatial-input__clear)

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

Tab 导航聚焦；输入文字后 Escape 或点击清空按键快速归零。

## 使用细则

- 具备 role="search" 与 aria-label，输入框具备明确的占位与无障碍标签。
- 聚焦态光晕不依赖纯颜色，附带清晰的高亮轮廓线。
- 适合全屏空间计算搜索、沉浸式浮动控制台、AR/VR 虚拟键盘输入。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-input" role="search" aria-label="空间模糊搜索输入框"><span class="ds-spatial-input__icon" aria-hidden="true">🔍</span><input type="text" class="ds-spatial-input__control" placeholder="搜索空间场景或指令…" value="VisionOS" aria-label="搜索空间场景或指令…"><button type="button" class="ds-spatial-input__clear" aria-label="清空输入">×</button></div>
```

## React 示例

```tsx
<VisionSpatialGlassInput placeholder="搜索空间场景或指令…" value="VisionOS" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 毛玻璃底板通透自然
- [ ] 聚焦时边框发光微高亮
- [ ] 右侧叉号微圆钮对齐居中
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
