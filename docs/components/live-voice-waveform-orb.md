# Siri & Gemini 拟态声波多彩呼吸发光球

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Apple Intelligence Siri 与 Google Gemini 2.0 风格的动态多色径向渐变流光语音助手球；支持听取、思考与脉冲光环环形发散动效。

## 结构

- 72px 极光流体圆形球体 (.ds-voice-orb)
- 径向扩散外发光光晕 (.ds-voice-orb__pulse)
- 内部居中麦克风或火花图元 (.ds-voice-orb__icon)
- 鼠标悬停放大与立体内阴影

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

Tab 聚焦发光球；Enter 或 Space 开始或停止语音收音。

## 使用细则

- 采用多色复合径向渐变（天蓝、紫罗兰、粉红、群青），呈现饱满多维光感。
- 脉冲光环完全基于 GPU 合成层（scale + opacity），零页面排版开销。
- 适合用于 AI 对话工作区唤醒入口、实时语音交互面板及智能助手组件。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-voice-orb" role="button" aria-label="智能语音交互助手" tabindex="0"><div class="ds-voice-orb__pulse"></div><span class="ds-voice-orb__icon" aria-hidden="true">🎙️</span></div>
```

## React 示例

```tsx
<VoiceAssistantOrb isListening={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 径向渐变色彩过渡丝滑绚丽
- [ ] 脉冲光环扩散动效平顺无断点
- [ ] 键盘聚焦无障碍标签清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
