# 语音消息条

[返回组件目录](../README.md) · 通讯 · v3 新增

## 目的与边界

播放语音消息并展示时长、波形与播放进度。

## 结构

- 播放按钮 (ds-voice-msg__play)
- 波形
- 时长
- 进度
- 倍速切换

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

空格播放或暂停；左右方向键快进快退。

## 使用细则

- 波形高度随进度填充，不只用颜色。
- 未播放时展示总时长。
- 支持 1x / 1.5x / 2x 倍速且当前倍速可读。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-voice-msg" role="group" aria-label="语音消息"><button type="button" class="ds-voice-msg__play" aria-label="播放">▶</button><span class="ds-voice-msg__wave" aria-hidden="true"><i style="height:40%"></i><i style="height:70%"></i><i style="height:55%"></i><i style="height:90%"></i><i style="height:35%"></i><i style="height:60%"></i></span><span class="ds-voice-msg__time">0:12</span><button type="button" class="ds-voice-msg__rate">1.5x</button></div>
```

## React 示例

```tsx
<VoiceMessage duration="0:12" rate="1.5x" onPlay={togglePlay} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 空格播放暂停
- [ ] 波形随进度填充
- [ ] 展示总时长
- [ ] 倍速可读且可切换
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
