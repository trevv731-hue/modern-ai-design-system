# Pioneer DJ 硬件双通道触觉交叉推子

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Pioneer DJ、Native Instruments Traktor 与专业混音台风格的物理交叉淡入淡出滑杆（Crossfader）；包含 Deck A / Deck B 声道标识、物理推子凹槽、中点刻度与立体拨帽。

## 结构

- 推子控制台外壳 (.ds-dj-crossfader)
- 顶栏双声道标签与名称 (.ds-dj-crossfader__head)
- 深色内凹推子轨道 (.ds-dj-crossfader__slot)
- 居中物理盲点刻度线 (.ds-dj-crossfader__center-notch)
- 等宽立体金属拨帽 (.ds-dj-crossfader__cap)
- 拨帽居中红色指示刻度 (.ds-dj-crossfader__cap-line)

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

左右方向键微调推子位置（1% 步进）；PageUp/PageDown 快速切至 Deck A 或 Deck B；Home/End 瞬切两端。

## 使用细则

- 采用 role="slider" 并具备完整的 aria-valuenow 与上下界限定义。
- 推子拨帽包含垂直红色指示线，重现顶级物理调音台的盲操体验。
- 适合音频混音器、视频前后 A/B 轨道过渡比例控制及模型对比权重调节。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-dj-crossfader" role="group" aria-label="双通道 DJ 混音交叉推子"><div class="ds-dj-crossfader__head"><span class="ds-dj-crossfader__deck-a">◄ DECK A</span><span style="color:var(--ds-muted)">CROSSFADER</span><span class="ds-dj-crossfader__deck-b">DECK B ►</span></div><div class="ds-dj-crossfader__slot" style="--ds-fader-pos:50%" role="slider" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" tabindex="0"><div class="ds-dj-crossfader__center-notch" aria-hidden="true"></div><div class="ds-dj-crossfader__cap" aria-hidden="true"><div class="ds-dj-crossfader__cap-line"></div></div></div></div>
```

## React 示例

```tsx
<DjMixerCrossfader position={50} deckAName="DECK A" deckBName="DECK B" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 推子拨帽滑动位置与百分比变量一致
- [ ] 中点刻度对齐清晰
- [ ] 方向键调整无障碍无抖动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
