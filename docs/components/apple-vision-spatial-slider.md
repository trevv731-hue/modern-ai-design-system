# Apple VisionOS 空间浮空景深音量滑块

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间计算与拟态深度立体滑杆；展示浮动玻璃质感导轨、双色能量填充条与悬浮发光立体圆滑块。

## 结构

- 悬浮控制台面板 (.ds-spatial-slider)
- 顶栏景深毫米刻度与名称 (.ds-spatial-slider__head)
- 圆角凹陷立体滑道 (.ds-spatial-slider__track)
- 渐变能量充盈条 (.ds-spatial-slider__fill)
- 高光悬浮微发光滑块 (.ds-spatial-slider__thumb)

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

左右方向键以 1% 步进调节景深；PageUp/PageDown 以 10% 步进快调；Home/End 瞬切极值。

## 使用细则

- 滑块悬停时尺寸放大 1.15 倍并增强外发光，模拟空间凝视与手势捏合意图。
- 支持 role="slider" 与 aria-valuenow 读数，支持屏幕阅读器精确报读。
- 适合空间音频景深调节、三维模型视差位移、立体光源高度控制与 VR 音量调节。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-slider" role="region" aria-label="空间音频景深距离"><div class="ds-spatial-slider__head"><span>空间音频景深距离</span><span style="font-family:var(--ds-type-mono);color:var(--ds-accent)">65mm</span></div><div class="ds-spatial-slider__track" style="--ds-spatial-val:65%" role="slider" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" aria-label="空间音频景深距离" tabindex="0"><div class="ds-spatial-slider__fill"></div><div class="ds-spatial-slider__thumb"></div></div></div>
```

## React 示例

```tsx
<VisionSpatialDepthSlider value={65} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 渐变充盈条与滑块位置严格对齐
- [ ] 悬停外发光过渡柔和
- [ ] 方向键步进无延迟
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
