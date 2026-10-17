# Meta / WhatsApp 阅后即焚倒计时时钟徽标

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

WhatsApp 与 Signal 经典的限时存续/阅后即焚消息状态指示微徽标；展示微型沙漏时钟图标、剩余存续时间倒计时（如 23h left）与自毁状态视觉警示。

## 结构

- 微型倒计时胶囊 (.ds-ephemeral-timer-pill)
- 动态脉冲时钟图标 (.ds-ephemeral-timer-pill__clock)
- 存续倒计时文字

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

纯状态提示组件；屏幕阅读器通过 aria-label 完整朗读阅后即焚剩余时间与自毁说明。

## 使用细则

- 时间文字采用等宽字体（font-family: var(--ds-type-mono)），避免数字跳动引起页面晃动。
- 当剩余时间少于 1 小时时，胶囊自动切换为橙红预警色。
- 适合嵌入聊天气泡时间戳旁或会话顶栏。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-ephemeral-timer-pill" role="status" aria-label="限时阅后即焚消息：剩余 23 小时后自动自毁删除"><span class="ds-ephemeral-timer-pill__clock" aria-hidden="true">⏳</span><span>23h left</span></div>
```

## React 示例

```tsx
<MetaEphemeralMessageTimerPill remainingHours={23} isUrgent={false} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 沙漏时钟微动画在减弱动态效果下平稳静态呈现
- [ ] 等宽时间数字无晃动
- [ ] 预警颜色对比度达标
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
