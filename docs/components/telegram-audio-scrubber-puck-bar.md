# Telegram 精密音频拖拽定位进度棒

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 Telegram 音频播放器高精度拖拽定位条，提供毫秒级对齐微圆圆球、流体填充条与已播/总时长精确等宽排版。

## 结构

- 卡片总外壳 (ds-audio-puck-bar)
- 滑动凹槽滑轨 (ds-audio-puck-bar__track)
- 已播进度填充条 (ds-audio-puck-bar__fill)
- 高精度触控圆球 (ds-audio-puck-bar__puck)
- 毫秒时间戳底栏 (ds-audio-puck-bar__times)

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

ArrowLeft/ArrowRight 前进或后退 5 秒；Home 跳至开头，End 跳至末尾。

## 使用细则

- 手柄圆球悬浮在滑轨上方并带有双层白色微描边，触摸拖拽极其精准。
- 时间戳采用等宽 monospace 字体，避免倒计时跳字引起宽度晃动。
- 在深浅色模式下音轨填充色随系统品牌主色动态变化。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-audio-puck-bar" role="region" aria-label="高精度音频滑动进度条"><div class="ds-audio-puck-bar__track" role="slider" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" aria-label="当前进度 45%"><div class="ds-audio-puck-bar__fill" style="width: 45%"></div><div class="ds-audio-puck-bar__puck" style="left: 45%"></div></div><div class="ds-audio-puck-bar__times"><span>01:24.45</span><span>03:08.00</span></div></div>
```

## React 示例

```tsx
<TelegramAudioScrubberPuckBar currentProgress={45} currentTime="01:24.45" totalTime="03:08.00" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 拖动圆球平滑吸附在手指或光标位置
- [ ] 键盘步进操作准确更新无障碍当前进度值
- [ ] 强制颜色模式下圆球与轨道边缘清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
