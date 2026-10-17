# Telegram 动态音频波形气泡播放器

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

Telegram 与 WhatsApp 经典沉浸式语音留言播放组件；展示自适应振幅条阵列（Waveform Spectrum）、已播/未播双色渐进填充、播放/暂停弹性缩放圆形按钮、倍速播放切换药丸（1.0x / 1.5x / 2.0x），以及毫秒级剩余时长计时器。

## 结构

- 语音气泡外壳 (.ds-voice-bubble)
- 弹性播放控制按钮 (.ds-voice-bubble__play-btn)
- 振幅波形柱阵列 (.ds-voice-bubble__waveform, .ds-voice-bubble__bar)
- 时长显示与进度元数据 (.ds-voice-bubble__meta, .ds-voice-bubble__duration)
- 倍速切换胶囊 (.ds-voice-bubble__speed-btn)

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

Tab 聚焦播放按钮；Space 或 Enter 切换播放与暂停；方向键 Left/Right 可快退或快进 5 秒；倍速按钮 Enter 循环切换。

## 使用细则

- 波形条振幅根据真实音频采样高度（10%–100%）呈现，未播部分为柔和浅色，已播部分为高对比强调色。
- 播放按钮点击时应用 scale(0.92) 瞬时弹性反馈。
- 状态文本直接朗读总时长与当前播放进度，屏幕阅读器对图形波形做 aria-hidden。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-voice-bubble" role="region" aria-label="语音留言播放器：时长 0:38，当前进度 0:14，播放倍速 1.5x"><button type="button" class="ds-voice-bubble__play-btn" aria-label="播放语音留言"><span aria-hidden="true">▶</span></button><div class="ds-voice-bubble__body"><div class="ds-voice-bubble__waveform" aria-hidden="true"><span class="ds-voice-bubble__bar is-played" style="height: 35%"></span><span class="ds-voice-bubble__bar is-played" style="height: 70%"></span><span class="ds-voice-bubble__bar is-played" style="height: 100%"></span><span class="ds-voice-bubble__bar is-played" style="height: 55%"></span><span class="ds-voice-bubble__bar is-played" style="height: 85%"></span><span class="ds-voice-bubble__bar" style="height: 60%"></span><span class="ds-voice-bubble__bar" style="height: 40%"></span><span class="ds-voice-bubble__bar" style="height: 90%"></span><span class="ds-voice-bubble__bar" style="height: 45%"></span><span class="ds-voice-bubble__bar" style="height: 25%"></span></div><div class="ds-voice-bubble__meta"><span class="ds-voice-bubble__duration">0:14 / 0:38</span><button type="button" class="ds-voice-bubble__speed-btn" aria-label="切换播放倍速：当前 1.5x">1.5x</button></div></div></div>
```

## React 示例

```tsx
<TelegramVoiceWaveformPlayer duration="0:38" currentTime="0:14" playbackSpeed="1.5x" isPlaying={false} waveformAmplitudes={[35, 70, 100, 55, 85, 60, 40, 90, 45, 25]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 播放控制带明确播放与暂停状态无障碍播报
- [ ] 波形条已播与未播双色明确区分
- [ ] 倍速切换胶囊支持键盘聚焦与切换
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
