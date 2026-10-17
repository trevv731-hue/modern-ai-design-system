# AI 音乐与语音生成多轨混音工作条

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

灵感源自 Suno、Udio 与 ElevenLabs 音频生成工作台，展示生成歌曲的动态波形振幅、分轨隔离胶囊（人声、贝斯、鼓组）与模型元数据。

## 结构

- 卡片总容器 (ds-audio-gen-track)
- 音轨标题与模型元信息 (ds-audio-gen-track__header)
- 音频振幅波形条组 (ds-audio-gen-track__wave)
- 波形柱元 (ds-audio-gen-track__bar)
- 分轨隔离胶囊标签 (ds-audio-gen-track__stem-chips)

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

Space 播放/暂停生成音频；Tab 切换分轨静音/独奏开关。

## 使用细则

- 波形条采用彩色渐变垂直延伸，模拟专业数字音频工作站（DAW）界面质感。
- 提供 Vocals、Bass、Drums 等分轨开关胶囊，支持用户自由选择伴奏或清唱输出。
- 标明所用生成模型版本（如 Suno v3.5）与生成总音频时长。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-audio-gen-track" role="region" aria-label="AI 生成音频音轨：Synthwave Dream"><div class="ds-audio-gen-track__header"><span>Synthwave Dream #04</span><span style="font-size:11px;color:var(--ds-muted)">Suno v3.5 · 180s</span></div><div class="ds-audio-gen-track__wave" aria-hidden="true"><div class="ds-audio-gen-track__bar" style="height:12px"></div><div class="ds-audio-gen-track__bar" style="height:28px"></div><div class="ds-audio-gen-track__bar" style="height:36px"></div><div class="ds-audio-gen-track__bar" style="height:20px"></div><div class="ds-audio-gen-track__bar" style="height:32px"></div><div class="ds-audio-gen-track__bar" style="height:14px"></div></div><div class="ds-audio-gen-track__stem-chips"><span class="ds-audio-gen-track__chip is-active">Vocals</span><span class="ds-audio-gen-track__chip is-active">Bass</span><span class="ds-audio-gen-track__chip">Drums</span><span class="ds-audio-gen-track__chip">Synths</span></div></div>
```

## React 示例

```tsx
<AIAudioGenerationWaveformTrack title="Synthwave Dream" model="Suno v3.5" stems={["Vocals", "Bass", "Drums"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 分轨标签支持一键点击切换激活高亮
- [ ] 波形在各宽度屏幕下自适应伸缩
- [ ] 屏幕阅读器准确读取曲目名及可用的音轨分层
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
