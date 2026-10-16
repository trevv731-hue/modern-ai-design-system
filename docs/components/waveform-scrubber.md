# 音频波形交互进度滑杆

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Soundcloud 与 Apple Voice Memos 风格的专业波形拖拽指示滑块；采用镜像对称柱状图、已播放高亮着色、绝对定位拖拽游标针以及时间码悬浮微气泡。

## 结构

- 多柱状波形轨道 (.ds-wave-scrubber__track)
- 已播放高亮色块 (.is-played)
- 高亮竖向游标针与时间气泡
- 底部当前时间与总时长等宽排版

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

Tab 聚焦波形轨道；左右方向键快进或后退 5 秒；Space 切换播放与暂停；Home/End 跳转起止点。

## 使用细则

- 波形柱高度采用百分比预先归一化，支持自适应各类音频频谱数据。
- 播放进度通过 CSS 变量 --ds-scrub-x 驱动游标位置与着色计算，滑动极为平滑。
- 时间码采用等宽数字 tabular-nums，避免读数跳动时宽度闪烁。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-wave-scrubber" role="region" aria-label="音频波形进度控制器" style="--ds-scrub-x:42%"><div class="ds-wave-scrubber__track" tabindex="0"><div class="ds-wave-scrubber__bar is-played" style="height:25%"></div><div class="ds-wave-scrubber__bar is-played" style="height:55%"></div><div class="ds-wave-scrubber__bar is-played" style="height:80%"></div><div class="ds-wave-scrubber__bar is-played" style="height:45%"></div><div class="ds-wave-scrubber__bar is-played" style="height:90%"></div><div class="ds-wave-scrubber__bar" style="height:70%"></div><div class="ds-wave-scrubber__bar" style="height:40%"></div><div class="ds-wave-scrubber__bar" style="height:60%"></div><div class="ds-wave-scrubber__bar" style="height:30%"></div><div class="ds-wave-scrubber__bar" style="height:20%"></div><div class="ds-wave-scrubber__needle"></div><div class="ds-wave-scrubber__bubble">01:09</div></div><div class="ds-wave-scrubber__footer"><span>01:09</span><span>02:45</span></div></div>
```

## React 示例

```tsx
<WaveformAudioScrubber progress={42} currentTime="01:09" duration="02:45" onSeek={handleSeek} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 波形柱高度比例真实自然
- [ ] 游标针与时间微气泡精准定位
- [ ] 已播放与未播放对比清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
