# AI 实时语音双工交互流光球体

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

灵感源自 OpenAI Advanced Voice Mode、Apple Intelligence Siri Glow 与 Gemini Live，呈现多向网格彩色流光球体与双工语音状态。

## 结构

- 声控光晕基座 (ds-voice-orb-hub)
- 流光多向网格球体 (ds-voice-orb)
- 旋转渐变网格层 (ds-voice-orb__mesh)
- 高亮核心触控区 (ds-voice-orb__core)
- 双工状态胶囊 (ds-voice-orb__status)

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

Space 或 Enter 键切换聆听/静音状态；双击打断语音回复。

## 使用细则

- 球体渐变层采用合成器旋转与呼吸缩放，严禁操作非合成器属性。
- 下方状态胶囊明确提示当前是 Listening（聆听）、Thinking（推理）还是 Speaking（朗读）。
- 在开启 prefers-reduced-motion 时停止球体旋转动画，保留静态渐变流光。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-voice-orb-hub" role="region" aria-label="AI 语音交互流光球体"><div class="ds-voice-orb" role="button" tabindex="0" aria-label="点击打断或暂停语音"><div class="ds-voice-orb__mesh" aria-hidden="true"></div><div class="ds-voice-orb__core" aria-hidden="true">🎙️</div></div><div class="ds-voice-orb__status"><span aria-hidden="true">●</span><span>Listening · 双工实时聆听</span></div></div>
```

## React 示例

```tsx
<AIAudioWaveVoiceOrb status="Listening" isListening={true} onToggle={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 旋转动效流畅且 CPU 占用低
- [ ] 点击球体或空格键可切换语音双工状态
- [ ] 屏幕阅读器能准确获知实时语音连接状态
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
