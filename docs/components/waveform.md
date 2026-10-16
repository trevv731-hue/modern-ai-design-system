# 音频频谱波形

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

iOS 语音备忘录与现代 AI 语音助手声波柱；用于麦克风实时输入、音频播放进度与语音会话律动可视化。

## 结构

- 水平排列胶囊声波条
- 高度缩放变换因子 (--ds-bar-h)
- 实时语音呼吸动效 (Live)
- 激活播放进度色阶

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

纯视觉频谱不获得焦点；若是可拖拽音频进度条，支持左右键步进。

## 使用细则

- 采用 transform: scaleY 而非 height 驱动声波高低，彻底规避布局重排。
- 两端保持饱满胶囊圆角，柱间距均匀美观。
- 支持 --ds-bar-h CSS 自定义属性动态注入实时振幅。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-toolbar" style="justify-content:flex-start;gap:16px;align-items:center"><div class="ds-waveform" role="img" aria-label="麦克风声波输入"><span class="ds-waveform-bar is-active is-live" style="--ds-bar-h:0.35"></span><span class="ds-waveform-bar is-active is-live" style="--ds-bar-h:0.75"></span><span class="ds-waveform-bar is-active is-live" style="--ds-bar-h:1.0"></span><span class="ds-waveform-bar is-active is-live" style="--ds-bar-h:0.55"></span><span class="ds-waveform-bar is-active is-live" style="--ds-bar-h:0.85"></span><span class="ds-waveform-bar is-live" style="--ds-bar-h:0.4"></span><span class="ds-waveform-bar is-live" style="--ds-bar-h:0.65"></span><span class="ds-waveform-bar is-live" style="--ds-bar-h:0.3"></span></div><span class="ds-badge ds-badge--info">AI 语音监听中</span></div>
```

## React 示例

```tsx
<AudioWaveform bars={[35, 75, 100, 55, 85, 40, 65, 30]} isLive />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 声波律动在 60fps 下无掉帧
- [ ] 使用 scaleY 变换无布局回流
- [ ] 减弱动效模式下保持静态柱状图
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
