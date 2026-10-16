# 触觉厚胶囊物理滑杆

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

iOS 18 控制中心与 macOS 菜单栏风格的加厚胶囊物理滑条；支持连续拖拽、音量/亮度图标、实时百分比数值与高亮填充层。

## 结构

- 44px 加厚超椭圆圆角底槽
- 高亮填充色彩层 (scaleX 合成器驱动)
- 内部左侧状态微图标与说明
- 内部右侧等宽实时百分比读数

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

Tab 聚焦滑杆；左右方向键以 step 增减数值；PageUp / PageDown 快速跨步。

## 使用细则

- 填充层纯通过 CSS 变量 --ds-slider-pct 与 transform: scaleX() 驱动，保证 120fps 丝滑拖拽且无重排。
- 文字与图标位于填充层上方 (z-index: 2)，文字在浅色与深色背景下均具备清晰对比度。
- 采用 44px 舒适触摸高度，符合移动端与触控板首选操作尺寸。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-haptic-slider" role="meter" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style="--ds-slider-pct:0.68"><div class="ds-haptic-slider__fill"></div><div class="ds-haptic-slider__content"><div class="ds-haptic-slider__label"><span>🔊</span><span>动态出口带宽配额</span></div><span class="ds-haptic-slider__val">68%</span></div><input type="range" min="0" max="100" value="68" class="ds-haptic-slider__input" aria-label="带宽配额"></div>
```

## React 示例

```tsx
<HapticStepSlider value={68} icon="🔊" label="出口带宽配额" onChange={setBandwidth} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 拖拽填充层响应跟手无延迟重排
- [ ] 百分比数值等宽排版不抖动
- [ ] 读屏器能正确感知实时当前值
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
