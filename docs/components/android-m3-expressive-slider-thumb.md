# Android 15 M3 表现力弹性触控滑块

[返回组件目录](../README.md) · Android / Material · v3 新增

## 目的与边界

遵循 Android 15 Material You 表现力滑块准则，加厚连续药丸轨道、触控时手柄动态微膨胀、支持精准微调与高可触达性。

## 结构

- 表现力滑块外壳 (ds-m3-exp-slider)
- 加厚药丸滑轨 (ds-m3-exp-slider__track)
- 填充进度条 (ds-m3-exp-slider__fill)
- 触控膨胀手柄 (ds-m3-exp-slider__thumb)

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

ArrowRight/ArrowUp 步进数值；ArrowLeft/ArrowDown 减少数值；PageUp/PageDown 大步进。

## 使用细则

- 滑轨高度加宽至 18px 胶囊形态，大幅提高触摸与粗略拖动命中率。
- 手柄在按压拖动（:active）时通过 transform: scale(1.25) 给出强烈的物理触觉反馈。
- 符合标准 slider 无障碍角色，附带 aria-valuenow 与上下界声明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-m3-exp-slider" role="region" aria-label="音量调节滑块"><div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600"><span>Media Volume</span><span>70%</span></div><div class="ds-m3-exp-slider__track" role="slider" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" aria-label="媒体音量：70%"><div class="ds-m3-exp-slider__fill" style="width: 70%"></div><div class="ds-m3-exp-slider__thumb" style="left: 70%">🔊</div></div></div>
```

## React 示例

```tsx
<AndroidM3ExpressiveSliderThumb label="Media Volume" value={70} onChange={(val) => console.log(val)} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 拖动手柄时弹性缩放顺畅无滞后
- [ ] 左右键能平滑按步长调节滑块数值
- [ ] 高对比度模式下手柄具有清晰的描边轮廓
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
