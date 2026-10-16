# macOS 经典微光音量微调浮动 HUD

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

macOS 经典毛玻璃半透明大圆角方块音量调节提示浮层（Sound Volume Bezel HUD）；深色磨砂高斯模糊壳体、喇叭声波图标、16 段白色高亮微刻度条。

## 结构

- 正方大圆角毛玻璃外壳 (.ds-volume-bezel)
- 拟物喇叭声波微投影图标 (.ds-volume-bezel__icon)
- 微内嵌刻度槽 (.ds-volume-bezel__meter)
- 16 格白色发光微刻度方块 (.ds-volume-bezel__tick)
- 静音独立图标切换

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

快捷音量键（VolumeUp / VolumeDown / Mute）触发播报与动画。

## 使用细则

- role="status" 与 aria-live="polite" 实时语音报读当前系统音量级别（如 10/16 或 静音）。
- 白色高亮刻度与暗底对比度达到 14:1。
- 适合音视频播放器、系统状态提示、耳机音量调节与多媒体工作台。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-volume-bezel" role="status" aria-live="polite" aria-label="系统音量: 10/16"><span class="ds-volume-bezel__icon" aria-hidden="true">🔊</span><div class="ds-volume-bezel__meter" aria-hidden="true"><span class="ds-volume-bezel__tick is-active"></span><span class="ds-volume-bezel__tick is-active"></span><span class="ds-volume-bezel__tick is-active"></span><span class="ds-volume-bezel__tick is-active"></span><span class="ds-volume-bezel__tick is-active"></span><span class="ds-volume-bezel__tick is-active"></span><span class="ds-volume-bezel__tick is-active"></span><span class="ds-volume-bezel__tick is-active"></span><span class="ds-volume-bezel__tick is-active"></span><span class="ds-volume-bezel__tick is-active"></span><span class="ds-volume-bezel__tick"></span><span class="ds-volume-bezel__tick"></span><span class="ds-volume-bezel__tick"></span><span class="ds-volume-bezel__tick"></span><span class="ds-volume-bezel__tick"></span><span class="ds-volume-bezel__tick"></span></div></div>
```

## React 示例

```tsx
<MacAudioVolumeBezelHud level={10} maxLevel={16} isMuted={false} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 磨砂半透明方块居中悬浮
- [ ] 10 格白色激活微方块排列齐整
- [ ] 喇叭微投影温润
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
