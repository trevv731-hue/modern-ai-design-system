# VisionOS 3D 浮动触觉景深数字微调步进器

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间计算空间景深数字步进微调器（Spatial Depth Numeric Stepper）；玻璃微悬浮外壳、触控物理微按压缩放反馈、等宽大号居中数值、防越界自禁用状态。

## 结构

- 双曲圆角浮动外壳 (.ds-spatial-stepper)
- 触控按键带微按压弹性 (.ds-spatial-stepper__btn)
- 等宽字号核心数值居中 (.ds-spatial-stepper__val)
- 悬浮主色光晕反馈 (.ds-spatial-stepper__btn:hover)
- 极简无边框减增符号

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

ArrowUp / ArrowRight 增加数值，ArrowDown / ArrowLeft 减少数值，Home/End 跳至极值。

## 使用细则

- role="group" 配合数值 span aria-live="polite" 实时播报当前步进量。
- 按钮到达 min / max 自动禁用并带有明确 aria-disabled。
- 适合空间视差距离微调、3D图层Z轴高度设置、字体字号滑块伴生微调。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-stepper" role="group" aria-label="空间深度微调步进器"><button type="button" class="ds-spatial-stepper__btn" aria-label="减少数值">−</button><span class="ds-spatial-stepper__val" aria-live="polite">5</span><button type="button" class="ds-spatial-stepper__btn" aria-label="增加数值">+</button></div>
```

## React 示例

```tsx
<VisionSpatialDepthStepper value={5} min={0} max={10} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 加减按钮正方圆角微内凹
- [ ] 数值居中等宽不抖动
- [ ] 按压缩放动效顺畅
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
