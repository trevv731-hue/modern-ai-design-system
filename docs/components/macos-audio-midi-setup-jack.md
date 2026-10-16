# macOS 音频设备物理接口插孔矩阵

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

macOS Audio MIDI Setup 与专业音频接口控制中心物理插孔矩阵（Physical Jack & Channel Routing Matrix）；展示 1/4" TRS 与 XLR 拟物插孔、采样率规格（96 kHz / 24-bit）、活跃声道高亮光环及通道标签。

## 结构

- 硬质拟物音频插孔卡片 (.ds-audio-midi-jack)
- 标题与等宽采样率徽标 (.ds-audio-midi-jack__header, .ds-audio-midi-jack__rate)
- 4声道单选项插孔网格 (.ds-audio-midi-jack__ports, .ds-audio-midi-jack__port)
- 立体同心金属插孔视窗与插孔眼 (.ds-audio-midi-jack__socket, .ds-audio-midi-jack__hole)

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

Tab 聚焦音频端口矩阵；方向键或 Click 切换选中的音频路由声道。

## 使用细则

- 具备 role="region" 与内部 role="radiogroup" 完整支持声道单选切换。
- 同心圆插孔采用多重金属反光与内阴影立体质感。
- 适合专业音频工作站（DAW）、声卡驱动控制台、流媒体推流通道设置。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-audio-midi-jack" role="region" aria-label="macOS 音频 MIDI 设置物理插孔矩阵"><div class="ds-audio-midi-jack__header"><span>Audio Interface</span><span class="ds-audio-midi-jack__rate">96 kHz / 24-bit</span></div><div class="ds-audio-midi-jack__ports" role="radiogroup" aria-label="物理音频输入输出端口"><button type="button" role="radio" aria-checked="true" class="ds-audio-midi-jack__port is-active" aria-label="端口 IN 1 (已路由)"><div class="ds-audio-midi-jack__socket" aria-hidden="true"><div class="ds-audio-midi-jack__hole"></div></div><span class="ds-audio-midi-jack__label">IN 1</span></button><button type="button" role="radio" aria-checked="false" class="ds-audio-midi-jack__port" aria-label="端口 IN 2"><div class="ds-audio-midi-jack__socket" aria-hidden="true"><div class="ds-audio-midi-jack__hole"></div></div><span class="ds-audio-midi-jack__label">IN 2</span></button><button type="button" role="radio" aria-checked="false" class="ds-audio-midi-jack__port" aria-label="端口 OUT 1"><div class="ds-audio-midi-jack__socket" aria-hidden="true"><div class="ds-audio-midi-jack__hole"></div></div><span class="ds-audio-midi-jack__label">OUT 1</span></button><button type="button" role="radio" aria-checked="false" class="ds-audio-midi-jack__port" aria-label="端口 OUT 2"><div class="ds-audio-midi-jack__socket" aria-hidden="true"><div class="ds-audio-midi-jack__hole"></div></div><span class="ds-audio-midi-jack__label">OUT 2</span></button></div></div>
```

## React 示例

```tsx
<MacAudioMidiJackMatrix sampleRate="96 kHz / 24-bit" activeChannel={0} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 96 kHz 采样率徽标
- [ ] 同心金属插孔立体逼真
- [ ] 活跃声道光环清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
