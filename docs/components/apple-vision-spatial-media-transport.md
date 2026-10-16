# VisionOS 空间悬浮毛玻璃媒体播放主控条

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间计算视窗底部浮动磨砂玻璃媒体播放器控件（Spatial Glass Media Transport Bar）；全透明双曲高斯模糊长药丸底座、播放/暂停纯色宝石圆钮、前后 15 秒快速跳跃钮、细粒度进度滑槽与空间音频沉浸开关。

## 结构

- 全圆角悬浮空间玻璃底板 (.ds-spatial-transport)
- 居中突出纯色高亮播放圆钮 (.ds-spatial-transport__btn--play)
- 两翼快退/快进 15 秒微按钮 (.ds-spatial-transport__btn)
- 横向半透明时间进度滑轨 (.ds-spatial-transport__scrub, .ds-spatial-transport__fill)
- 独立空间音频耳机图标切换按钮 (.ds-spatial-transport__btn.is-active)

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

Space 快速切换播放与暂停；ArrowLeft / ArrowRight 步进快退与快进。

## 使用细则

- 具备 role="region" 与 aria-label="VisionOS 浮动空间媒体播放条"。
- 播放进度带有 role="progressbar" 与 aria-valuenow。
- 适合沉浸式空间影音播放器、全景音频控制台、VR/AR 媒体视窗。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-transport" role="region" aria-label="VisionOS 浮动空间媒体播放条"><button type="button" class="ds-spatial-transport__btn" aria-label="快退 15 秒">↺</button><button type="button" class="ds-spatial-transport__btn ds-spatial-transport__btn--play" aria-label="暂停">⏸</button><button type="button" class="ds-spatial-transport__btn" aria-label="快进 15 秒">↻</button><div class="ds-spatial-transport__scrub" role="progressbar" aria-valuenow="37" aria-label="播放进度"><div class="ds-spatial-transport__fill"></div></div><span class="ds-spatial-transport__time">01:24 / 03:48</span><button type="button" class="ds-spatial-transport__btn is-active" aria-label="空间音频 已开启" aria-pressed="true" title="空间全景音效">🎧</button></div>
```

## React 示例

```tsx
<VisionSpatialMediaTransport isPlaying={true} currentTime="01:24" totalTime="03:48" isSpatialAudio={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 毛玻璃底座通透漂浮
- [ ] 中间播放按键青色显眼
- [ ] 空间音频耳机按键微高亮
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
