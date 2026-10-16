# 磁带机带速微调与精准音调推子

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

复古发烧级开盘母带录音机 ±10% 机械线性带速与音调校准推子（Tape Playback Speed & Pitch Detent Fader）；具备零点机械凹槽居中锁定、频闪同步指示器（STROBE LOCK）及两极刻度读数。

## 结构

- 硬质金属面板 (.ds-tape-pitch-fader)
- 标题与绿色频闪锁定状态 (.ds-tape-pitch-fader__header, .ds-tape-pitch-fader__strobe)
- 带机械零点中心标线滑槽 (.ds-tape-pitch-fader__slot, .ds-tape-pitch-fader__center-detent)
- 立体倒角金属滑块 (.ds-tape-pitch-fader__thumb)
- 底部 -10% / 0 / +10% 刻度标 (.ds-tape-pitch-fader__scale)

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

Tab 聚焦滑槽；左右方向键以 0.5% 步长微调速度，Home 键复位归零。

## 使用细则

- 具备 role="slider" 与 aria-valuemin / aria-valuenow 完整可访问规范。
- 零点机械刻度标清晰，指示中心原速锁定位置。
- 适合复古音频播放器、DJ 混音变频台、母带录音控制台。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tape-pitch-fader" role="group" aria-label="磁带机播放速度与音调微调推子"><div class="ds-tape-pitch-fader__header"><span>PITCH / SPEED DETENT</span><span class="ds-tape-pitch-fader__strobe"><span style="font-size:8px">●</span> STROBE LOCK</span></div><div class="ds-tape-pitch-fader__slot" tabindex="0" role="slider" aria-valuemin="-10" aria-valuemax="10" aria-valuenow="0" aria-valuetext="0.0%" aria-label="带速微调"><div class="ds-tape-pitch-fader__track"><div class="ds-tape-pitch-fader__center-detent"></div><div class="ds-tape-pitch-fader__thumb" style="left:50%" aria-hidden="true"></div></div></div><div class="ds-tape-pitch-fader__scale" aria-hidden="true"><span>-10%</span><span>0 (LOCK)</span><span>+10%</span></div></div>
```

## React 示例

```tsx
<AnalogTapePlaybackSpeedPitchFader pitchPct={0.0} strobeLocked={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] STROBE LOCK 绿色状态
- [ ] 零位中心刻度凹槽
- [ ] ±10% 经典发烧级跨度
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
