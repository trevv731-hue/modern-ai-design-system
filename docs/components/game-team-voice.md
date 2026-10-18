# 队伍语音位

[返回组件目录](../README.md) · 游戏 / 娱乐 · v3 新增

## 目的与边界

展示队伍成员语音状态与静音控制。

## 结构

- 成员位 (ds-team-voice__slot)
- 头像
- 说话指示 (ds-team-voice__wave)
- 静音按钮
- 连接状态

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

静音按钮可聚焦；成员位可聚焦查看资料。

## 使用细则

- 说话中用动效但幅度克制。
- 断线成员置灰并显示重连中。
- 自己永远在第一位且不可静音自己发言。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-team-voice" role="group" aria-label="队伍语音，4 人"><div class="ds-team-voice__slot is-speaking" tabindex="0" role="button" aria-label="夜枭，正在说话"><span class="ds-team-voice__avatar" aria-hidden="true">枭</span><span class="ds-team-voice__wave" aria-hidden="true"><i></i><i></i><i></i></span><button type="button" aria-label="静音夜枭">🔇</button></div><div class="ds-team-voice__slot" tabindex="0" role="button" aria-label="月读，在线"><span class="ds-team-voice__avatar" aria-hidden="true">月</span><button type="button" aria-label="静音月读">🔊</button></div><div class="ds-team-voice__slot is-muted" tabindex="0" role="button" aria-label="铁壁，已被静音"><span class="ds-team-voice__avatar" aria-hidden="true">铁</span><span class="ds-team-voice__tag">已静音</span></div><div class="ds-team-voice__slot is-offline" tabindex="0" role="button" aria-label="青鸾，掉线重连中"><span class="ds-team-voice__avatar" aria-hidden="true">鸾</span><span class="ds-team-voice__tag">重连中</span></div></div>
```

## React 示例

```tsx
<TeamVoiceSlots members={[{ name: "夜枭", state: "speaking" }, { name: "月读", state: "online" }, { name: "铁壁", state: "muted" }, { name: "青鸾", state: "offline" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 说话动效幅度克制
- [ ] 断线置灰显重连中
- [ ] 自己不可静音自己
- [ ] 静音按钮可聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
