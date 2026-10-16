# 极简浮动播放条

[返回组件目录](../README.md) · 媒体 · CSS / HTML / React

## 目的与边界

Spotify 与 Apple Music 风格的微型浮动音频播控条；支持封面缩略、进度微调与弹簧播放手感。

## 结构

- 圆角微磨砂封面唱片位
- 曲目与艺术家元信息
- 高精交互进度拖拽条
- 物理触感圆形播控键

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

Tab 聚焦至播放/暂停按钮或进度条；Space 切换播放/暂停；左右方向键快进或后退 5 秒。

## 使用细则

- 磨砂亚克力玻璃材质搭配 1px 细微光泽边框，悬浮感突出。
- 播控按钮使用 scale(1.1) 触感反馈与对比反色高亮。
- 进度条支持直接点击跳转并实时反馈当前与剩余时间。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-audio-player"><div class="ds-audio-player__cover" aria-hidden="true">📻</div><div class="ds-audio-player__info"><div class="ds-audio-player__title">Cybernetic Horizons (Extended Mix)</div><div class="ds-audio-player__artist">Kavinsky &amp; The Midnight</div><div class="ds-audio-player__track"><span class="ds-audio-player__time">1:32</span><div class="ds-audio-player__bar"><div class="ds-audio-player__fill" style="width:42%"></div></div><span class="ds-audio-player__time">3:45</span></div></div><div class="ds-audio-player__controls"><button type="button" class="ds-audio-player__btn ds-audio-player__btn--play" aria-label="播放" data-toast="播放音乐">▶</button></div></div>
```

## React 示例

```tsx
<MiniAudioPlayer title="Cybernetic Horizons" artist="The Midnight" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 半透明毛玻璃底板与底层内容分离清晰
- [ ] 播放键触感动效利落迅速
- [ ] 进度条圆角与填充平滑匹配
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
