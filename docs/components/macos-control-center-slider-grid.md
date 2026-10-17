# macOS 控制中心拟真触控滑块矩阵

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

macOS 顶部控制中心显示器亮度与系统音量物理推子；采用宽胶囊滑动槽、背景自适应高亮填充层、动态图标明暗变化与百分比微数值。

## 结构

- 控制中心面板外壳 (.ds-control-center-grid)
- 胶囊滑块轨道 (.ds-control-slider)
- 高光填充条 (.ds-control-slider__fill)
- 图标与数值覆盖层 (.ds-control-slider__content)

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

左右方向键按 5% 步进调节；PageUp / PageDown 按 20% 调节；Home/End 分别调节至 0% 与 100%。

## 使用细则

- 控件具备 role="slider"，并拥有对应的 aria-valuenow 与 aria-valuetext。
- 滑块填充高度覆盖整个槽位，带来饱满的物理推子手感。
- 静音或最低亮度时图标自动切换为斜线或熄灭样式。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-control-center-grid" role="region" aria-label="macOS 控制中心硬件调节"><div class="ds-control-slider" role="slider" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="显示器亮度：当前 75%"><div class="ds-control-slider__fill" style="width: 75%"></div><div class="ds-control-slider__content"><span>☀️ Display</span><span>75%</span></div></div><div class="ds-control-slider" role="slider" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" aria-label="系统音量：当前 60%"><div class="ds-control-slider__fill" style="width: 60%"></div><div class="ds-control-slider__content"><span>🔊 Sound</span><span>60%</span></div></div></div>
```

## React 示例

```tsx
<MacOSControlCenterSliderGrid brightness={75} sound={60} onBrightnessChange={() => {}} onSoundChange={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 物理推子手感饱满符合 macOS 规范
- [ ] 方向键步进调节无障碍指标精准
- [ ] 图标与数值在滑块背景变化时保持可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
