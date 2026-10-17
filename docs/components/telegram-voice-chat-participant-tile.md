# Telegram 群组实时语音连麦发言者气泡

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 Telegram 语音连麦与 Discord Stage 发言者状态气泡，发言时环绕动态绿色脉冲波纹光环，附带麦克风状态角标与发言者名称。

## 结构

- 发言者总卡片 (ds-voice-tile)
- 动态声音光环 (ds-voice-tile__halo)
- 圆形头像 (ds-voice-tile__avatar)
- 麦克风/举手状态微徽章 (ds-voice-tile__badge)
- 发言者用户名 (ds-voice-tile__name)

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

Tab 键在各语音参与者之间导航；Enter 打开用户个人资料或发起私聊。

## 使用细则

- 检测到说话音量时头像外层激发绿色波纹扩散动画，直观指示谁在发言。
- 头像右下角悬挂微型麦克风或举手角标，清晰区分发言人与普通听众。
- 开启减少动效模式时禁用波纹扩散，转为静态绿色实体描边。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-voice-tile is-speaking" role="region" aria-label="连麦发言者：Alex Rivera，正在发言"><div class="ds-voice-tile__halo"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='54' height='54' viewBox='0 0 54 54'%3E%3Ccircle cx='27' cy='27' r='27' fill='%236366f1'/%3E%3Ctext x='27' y='33' font-size='18' text-anchor='middle' fill='white' font-family='sans-serif'%3EAR%3C/text%3E%3C/svg%3E" alt="Alex Rivera" class="ds-voice-tile__avatar"><div class="ds-voice-tile__badge" aria-label="麦克风已开启">🎙️</div></div><span class="ds-voice-tile__name">Alex Rivera</span></div>
```

## React 示例

```tsx
<TelegramVoiceChatParticipantTile name="Alex Rivera" isSpeaking={true} isMuted={false} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 发言光环扩散动画流畅且不影响头像居中对齐
- [ ] 用户名超长时自动省略不换行
- [ ] 屏幕阅读器准确读取当前发言人姓名与开麦状态
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
