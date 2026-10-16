# macOS 显示器色彩描述文件校准器

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

macOS Sequoia 与 Apple Pro Display XDR 风格显示器专业色彩空间与伽马曲线校准微面板（Display Color Profile & Gamma Ramp Calibrator）；包含 Apple Display (P3-1600 nits) / Display P3 / sRGB 预设单选列表、D65 白点标定标签及伽马曲线参数。

## 结构

- 专业色彩配置面板 (.ds-color-profile-calibrator)
- 标题与 D65 白点微芯片 (.ds-color-profile-calibrator__header, .ds-color-profile-calibrator__d65)
- 单选项色彩预设列表 (.ds-color-profile-calibrator__profiles, .ds-color-profile-calibrator__item)
- 右侧等宽伽马与白点读数 (.ds-color-profile-calibrator__gamma)

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

Tab 遍历预设列表；上下方向键或 Space / Enter 激活当前选中的色彩描述文件。

## 使用细则

- 具备 role="radiogroup" 与内部 role="radio" 键盘无障碍规范。
- 当前激活预设采用焦点描边与轻量立体微投影。
- 适合系统偏好设置、设计软件色彩管理、专业校色客户端。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-color-profile-calibrator" role="radiogroup" aria-label="macOS 显示器色彩描述文件校准器"><div class="ds-color-profile-calibrator__header"><span>色彩描述文件</span><span class="ds-color-profile-calibrator__d65">D65 标定</span></div><div class="ds-color-profile-calibrator__profiles"><div role="radio" tabindex="0" aria-checked="true" class="ds-color-profile-calibrator__item is-active"><span>Apple Display (P3-1600 nits)</span><span class="ds-color-profile-calibrator__gamma">Gamma 2.2 / D65</span></div><div role="radio" tabindex="-1" aria-checked="false" class="ds-color-profile-calibrator__item"><span>Display P3</span><span class="ds-color-profile-calibrator__gamma">Gamma 2.2 / D65</span></div><div role="radio" tabindex="-1" aria-checked="false" class="ds-color-profile-calibrator__item"><span>sRGB IEC61966-2.1</span><span class="ds-color-profile-calibrator__gamma">sRGB / D65</span></div></div></div>
```

## React 示例

```tsx
<MacDisplayColorProfileCalibrator activeProfile="Apple Display (P3-1600 nits)" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] D65 标定高亮芯片
- [ ] Apple P3 1600 nits 选项
- [ ] Gamma 2.2 等宽参数清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
