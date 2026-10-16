# 复古开盘磁带走带机物理传输控制面板

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

致敬 Braun 与 Nagra 复古磁带录音机的纯物理走带传输控制按键组（Tape Transport Controls）；具有倒带、播放、快进、停止、录音按键，录音按键触发红色 LED 发光微灯珠。

## 结构

- 金属微内陷底托 (.ds-tape-transport)
- 方形高反弹走带按键 (.ds-tape-transport__btn)
- 独立鲜红录音高亮状态 (.ds-tape-transport__btn--rec)
- 红色微发光录音指示灯珠 (.ds-tape-transport__led)
- 按压物理微下凹动效反馈

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

ArrowLeft / ArrowRight 切换控制按键，Space 触发播放/停止，R 触发录音。

## 使用细则

- role="toolbar" 与 aria-label 声明走带控制工具栏。
- 每个按钮具备明确的 aria-label 说明当前动作与快捷键。
- 适合播客录音工具、音频剪辑工作站、复古音乐播放器及语音备忘录。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tape-transport" role="toolbar" aria-label="磁带走带机传输控制面板"><button type="button" class="ds-tape-transport__btn" aria-label="倒带">⏮</button><button type="button" class="ds-tape-transport__btn is-active" aria-label="播放">▶</button><button type="button" class="ds-tape-transport__btn" aria-label="快进">⏭</button><button type="button" class="ds-tape-transport__btn" aria-label="停止">⏹</button><button type="button" class="ds-tape-transport__btn ds-tape-transport__btn--rec" aria-label="录音">⏺</button><span class="ds-tape-transport__led" aria-label="录音指示灯激活"></span></div>
```

## React 示例

```tsx
<RetroTapeTransportDeck isPlaying={true} isRecording={false} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 按键边角微弧度与微阴影
- [ ] 录音红点与LED高亮呼应
- [ ] 按压有明确的缩放反馈
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
