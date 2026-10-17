# AI 实时打字机流式输出与脉冲光标

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

大语言模型实时流式文本生成展示（Streaming Response）；包含等宽文本流动、平滑呼吸发光脉冲光标（Cursor Pulse）、生成速率指示器（如 84 tok/s）与带流光警示的立即终止按键。

## 结构

- 流式文本容器 (.ds-streaming-response)
- 文本正文 (.ds-streaming-response__text)
- 呼吸微光光标 (.ds-streaming-response__cursor)
- 速率指标与停止生成页脚 (.ds-streaming-response__footer, .ds-streaming-response__stop-btn)

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

Tab 聚焦停止生成按钮；Space 或 Enter 立即中断当前推理并保留已生成文本。

## 使用细则

- 光标呼吸动画采用 CSS transform，在 prefers-reduced-motion 下静止显示。
- 流式文本平滑追加，不因长单词频繁截断导致视口上下跳动。
- 停止按钮点击后给出即时反馈，防止重复发送停止请求。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-streaming-response" role="status" aria-live="polite" aria-label="AI 正在流式生成回答，速率 84 Tokens/s"><div class="ds-streaming-response__text">Modern AI design systems combine the physics of Apple with the predictability of Android Material 3...<span class="ds-streaming-response__cursor" aria-hidden="true"></span></div><div class="ds-streaming-response__footer"><span>84 tokens/s · Claude 3.7</span><button type="button" class="ds-streaming-response__stop-btn" aria-label="停止生成">⏹ Stop</button></div></div>
```

## React 示例

```tsx
<AIStreamingShimmerCursor streamingText="Modern AI design systems combine the physics of Apple..." tokensPerSec={84} isGenerating={true} onStop={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 具有 aria-live="polite" 屏幕阅读器友好广播
- [ ] 光标脉冲动效流畅不引起卡顿
- [ ] 停止按钮触控区域达标且状态清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
