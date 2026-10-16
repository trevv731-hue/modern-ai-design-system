# MacBook Pro OLED Touch Bar 触控动态滑块

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

致敬 MacBook Pro OLED Touch Bar 沉浸式动态触控滑块（OLED Touch Bar Slider）；全黑极客底色、前置功能微图标、平滑青紫霓虹渐变发光填充条及实时等宽数值。

## 结构

- 全圆角纯黑深槽容器 (.ds-touchbar-slider)
- 左侧明度/音量微图标 (.ds-touchbar-slider__icon)
- 青蓝向电紫渐变发光进度条 (.ds-touchbar-slider__fill)
- 右侧高亮等宽实时百分比 (.ds-touchbar-slider__val)
- 支持点击与滑动手势调节

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

ArrowLeft / ArrowDown 递减 1%；ArrowRight / ArrowUp 递增 1%；Home / End 快速归零或满载。

## 使用细则

- 具备 role="slider" 与 aria-valuenow 完整反映当前调节百分比。
- 发光渐变条具备良好可视范围，纯黑底色与高亮填充对比度极高。
- 适合车载中控屏、专业音频外设工作台、极客外设虚拟控制坞。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-touchbar-slider" role="group" aria-label="Touch Bar 触控滑块"><span class="ds-touchbar-slider__icon" aria-hidden="true">🔆</span><div class="ds-touchbar-slider__track" style="--ds-tb-val:64%" role="slider" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100" aria-label="Touch Bar 亮度或音量调节" tabindex="0"><div class="ds-touchbar-slider__fill"></div></div><span class="ds-touchbar-slider__val">64%</span></div>
```

## React 示例

```tsx
<MacTouchBarSliderScrub value={64} icon="🔆" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 纯黑药丸胶囊精致立体
- [ ] 渐变发光滑块色彩亮丽
- [ ] 百分比右对齐等宽显示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
