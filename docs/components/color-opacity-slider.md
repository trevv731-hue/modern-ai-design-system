# 棋盘格透明度 Alpha 调色滑杆

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Figma 与 Sketch 专业设计工具级别的 Alpha 透明度调节滑块；集成国际标准灰白微棋盘格透明度底图、当前基色到透明的渐变图层、圆形定位微滑块与实时百分比。

## 结构

- 棋盘格底层背景 (.ds-checkerboard / conic-gradient)
- 基准色透明度水平线性渐变层
- 外圈高对比描边圆滑块
- 底部标签与等宽实时透明度百分比

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

Tab 聚焦透明度滑动控件；左右方向键以 1% 精细调整；PageUp / PageDown 跨步 10% 调节；Home / End 直达 0% 与 100%。

## 使用细则

- 棋盘格底层使用纯 CSS conic-gradient 绘制 8px 像素单元，彻底免除外部图片请求。
- 渐变层通过 --ds-alpha-color 动态注入当前选中的 Hex/HSL 基准色。
- 透明度数值严格采用等宽字体与 tabular-nums，百分比数值变化时整体排版不抖动。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-alpha-slider" role="region" aria-label="透明度滑杆" style="--ds-alpha-color:#00ffff;--ds-alpha-pos:75%"><div class="ds-alpha-slider__track"><div class="ds-alpha-slider__gradient"></div><div class="ds-alpha-slider__thumb"></div><input type="range" min="0" max="100" value="75" class="ds-alpha-slider__input" aria-label="Alpha 透明度" id="alpha-slider-input-batch12"></div><div class="ds-alpha-slider__footer"><span>Alpha 透明度</span><span class="ds-alpha-slider__val">75%</span></div></div>
```

## React 示例

```tsx
<AlphaColorSlider value={75} baseColor="#00ffff" label="Alpha 透明度" onChange={setAlpha} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 棋盘格图案在浅色与深色主题下均清晰可辨
- [ ] 滑块精准映射实际透明度百分比
- [ ] 拖拽滑动过程中 120fps 无掉帧重排
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
