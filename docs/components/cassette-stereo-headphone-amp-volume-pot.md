# 录音室耳机放大器步进衰减电位器

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

复古专业母带监听耳机放大器 24 阶分立步进衰减大旋钮电位器（Stereo Headphone Amp Stepped Volume Attenuator Potentiometer）；展示金属滚花大旋钮与红色发光指示针、当前分贝衰减读数（-12dB）、阻抗匹配（250Ω）与独立静音键。

## 结构

- 同心立体金属旋钮外框 (.ds-headphone-amp-pot)
- 标题与静音按键栏 (.ds-headphone-amp-pot__header)
- 立体金属旋钮盘与红色指示针 (.ds-headphone-amp-pot__knob-stage, .ds-headphone-amp-pot__pointer)
- 中央白色等宽分贝读数 (.ds-headphone-amp-pot__db)
- 底部阻抗与物理 1/4" TRS 插孔标签 (.ds-headphone-amp-pot__footer)

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

Tab 聚焦静音按键及控制面板；Enter 触发一键立体声静音切换。

## 使用细则

- 具备 role="group" 与 aria-label 完整描述当前耳机放大器衰减分贝。
- 旋转指示针具备红色高亮与微光投影。
- 适合专业母带工作站、发烧级耳放控制面板、音频硬件仿真器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-headphone-amp-pot" role="group" aria-label="耳机放大器步进衰减电位器：当前 -12 dB"><div class="ds-headphone-amp-pot__header"><span>HEADPHONE AMP</span><button type="button" style="border:none;background:var(--ds-inset);color:var(--ds-muted);padding:2px 6px;border-radius:4px;cursor:pointer;font-size:10px;font-weight:700">MUTE</button></div><div class="ds-headphone-amp-pot__knob-stage" aria-hidden="true"><div class="ds-headphone-amp-pot__pointer" style="transform:rotate(-9deg);transform-origin:50% 32px"></div><span class="ds-headphone-amp-pot__db">-12dB</span></div><div class="ds-headphone-amp-pot__footer"><span>IMPEDANCE: 250Ω</span><span>1/4" TRS JACK</span></div></div>
```

## React 示例

```tsx
<AnalogHeadphoneAmpVolumePot dbValue={-12} impedanceOhms={250} isMuted={false} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 金属滚花大旋钮
- [ ] -12dB 居中清晰
- [ ] 250Ω 阻抗发烧匹配
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
