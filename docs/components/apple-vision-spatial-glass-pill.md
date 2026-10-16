# VisionOS 空间悬浮毛玻璃胶囊快捷栏

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间计算空间悬浮毛玻璃胶囊选项卡组（Spatial Floating Glass Capsule Tab Bar）；超厚毛玻璃磨砂高斯模糊底板、高光边缘切角反光、触觉悬浮白色激活高亮底板及图标文字组合排版。

## 结构

- 全圆角超厚玻璃容器 (.ds-spatial-glass-bar)
- 极简透明胶囊按钮项 (.ds-spatial-glass-bar__item)
- 选中项高亮实底药丸 (.ds-spatial-glass-bar__item.is-active)
- 微弱边缘内高光反光 (.ds-spatial-glass-bar)
- 触碰悬浮微透明渐变 (.ds-spatial-glass-bar__item:hover)

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

ArrowLeft / ArrowRight 在选项卡间切换聚焦；Enter 激活切换。

## 使用细则

- 具备 role="tablist" 与各子项 role="tab" 及 aria-selected 属性。
- 支持键盘无缝轮转导航，prefers-reduced-motion 下直接跳切。
- 适合空间视窗常驻主控条、媒体播放器浮动工具条、沉浸式全屏快速切换坞。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-glass-bar" role="tablist" aria-label="空间毛玻璃胶囊快捷栏"><button type="button" role="tab" aria-selected="false" class="ds-spatial-glass-bar__item"><span class="ds-spatial-glass-bar__icon" aria-hidden="true">🏠</span><span>主页</span></button><button type="button" role="tab" aria-selected="true" class="ds-spatial-glass-bar__item is-active"><span class="ds-spatial-glass-bar__icon" aria-hidden="true">🪐</span><span>空间</span></button><button type="button" role="tab" aria-selected="false" class="ds-spatial-glass-bar__item"><span class="ds-spatial-glass-bar__icon" aria-hidden="true">⚙️</span><span>偏好</span></button></div>
```

## React 示例

```tsx
<VisionSpatialGlassPill items={[{ id: "home", label: "主页", icon: "🏠" }, { id: "spatial", label: "空间", icon: "🪐" }]} activeId="spatial" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 外壳全圆角且带有微弱反光
- [ ] 激活项有实体背景微投影
- [ ] 图标文字水平对齐居中
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
