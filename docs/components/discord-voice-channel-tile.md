# Discord 语音频道成员瓦片

[返回组件目录](../README.md) · 协作 / 团队 · v3 新增

## 目的与边界

在语音频道内以紧凑瓦片展示成员发言状态、静音与共享状态，一眼判断谁在说话。

## 结构

- 频道标题行 (ds-voice-channel__head)
- 成员瓦片网格 (ds-voice-channel__grid)
- 成员瓦片 (ds-voice-tile)
- 发言光圈与静音角标

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

Tab 进入成员瓦片；Enter 打开成员操作菜单；Escape 关闭菜单并保留焦点。

## 使用细则

- 发言状态用描边光圈加图标表达，不靠音量条闪烁。
- 静音与关闭摄像头是两种状态，图标与文字都要区分。
- 成员超过 12 人时折叠为计数，不无限铺开。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-voice-channel" aria-label="语音频道"><header class="ds-voice-channel__head"><strong>值班室</strong><span class="ds-badge">3 人</span></header><div class="ds-voice-channel__grid"><div class="ds-voice-tile ds-voice-tile--speaking" tabindex="0" role="button" aria-label="成员 Aether，正在发言"><span class="ds-voice-tile__avatar">AE</span><span class="ds-voice-tile__name">Aether</span><span class="ds-voice-tile__flag" aria-hidden="true">🎙</span></div><div class="ds-voice-tile" tabindex="0" role="button" aria-label="成员 周舟，已静音"><span class="ds-voice-tile__avatar">周</span><span class="ds-voice-tile__name">周舟</span><span class="ds-voice-tile__flag" aria-hidden="true">🔇</span></div></div></section>
```

## React 示例

```tsx
<DiscordVoiceChannelTile name="值班室" members={[{ name: "Aether", speaking: true }, { name: "周舟", muted: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 正在发言状态有非颜色的第二重提示
- [ ] 静音与摄像头状态不会互相混淆
- [ ] 键盘可以聚焦每个成员瓦片
- [ ] 成员数量变化不导致频道高度跳动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
