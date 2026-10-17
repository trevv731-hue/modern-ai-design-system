# Spotify 正在播放控制条

[返回组件目录](../README.md) · 消费端媒体 · v3 新增

## 目的与边界

常驻底部提供当前曲目信息、播放控制与音量，让播放状态在任何页面都可见可控。

## 结构

- 左区曲目信息 (ds-nowbar__track)
- 中区传输控制
- 进度条与时间
- 右区音量与设备

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

Space 播放/暂停；左右方向键快退快进；Tab 依次进入各控制按钮。

## 使用细则

- 进度条显示已播与总时长两个数值，不只用滑块位置。
- 无网络或没有可播放设备时禁用按钮并说明原因。
- 曲目名过长时滚动或截断，不挤压控制区。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-nowbar" role="region" aria-label="正在播放"><div class="ds-nowbar__track"><span class="ds-nowbar__art" aria-hidden="true">♪</span><div><strong>深夜值班</strong><span>Aether Radio</span></div></div><div class="ds-nowbar__controls"><button type="button" class="ds-button ds-button--ghost" aria-label="上一首">⏮</button><button type="button" class="ds-button ds-button--secondary" aria-label="暂停">⏸</button><button type="button" class="ds-button ds-button--ghost" aria-label="下一首">⏭</button></div><div class="ds-nowbar__progress"><span class="ds-nowbar__time">01:12</span><div class="ds-nowbar__track-bar"><span style="width:38%"></span></div><span class="ds-nowbar__time">03:09</span></div></div>
```

## React 示例

```tsx
<SpotifyNowPlayingBar title="深夜值班" artist="Aether Radio" elapsed="01:12" duration="03:09" paused={false} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 已播时间与总时长同时可见
- [ ] 不可用状态有文字说明
- [ ] 长曲目名不挤压控制区
- [ ] 键盘可完成播放与跳转
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
