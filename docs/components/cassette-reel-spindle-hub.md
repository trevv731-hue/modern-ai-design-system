# 复古开盘磁带机 3 爪转盘轮毂驱动牙盘

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

致敬专业开盘带机与卡式磁带的三爪驱动机械轮毂（Vintage Tape Spindle Hub）；同心金属与塑料复合圆环、3 个等分 120° 辐射啮合凸爪、中央金属定位圆孔。

## 结构

- 正圆内凹机械底盘 (.ds-tape-spindle)
- 同心内凹牙盘圈 (.ds-tape-spindle__teeth)
- 120° 三向辐射啮合卡齿 (.ds-tape-spindle__spoke)
- 中央精密定位深孔 (.ds-tape-spindle__hole)
- 支持任意旋转角度动态传参

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

无需直接按键，伴随播放控制按键联动旋转。

## 使用细则

- role="img" 配合 aria-label 说明磁带轮毂与当前旋转角度。
- 纯 CSS 几何实现，不依赖外部静态图片，缩放不失真。
- 适合复古音频录音机、音乐播放动画、数字音频母带界面。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tape-spindle" role="img" aria-label="磁带驱动轴心牙盘，旋转角度 45度" style="transform:rotate(45deg)"><div class="ds-tape-spindle__teeth" aria-hidden="true"><span class="ds-tape-spindle__spoke ds-tape-spindle__spoke--1"></span><span class="ds-tape-spindle__spoke ds-tape-spindle__spoke--2"></span><span class="ds-tape-spindle__spoke ds-tape-spindle__spoke--3"></span><div class="ds-tape-spindle__hole"></div></div></div>
```

## React 示例

```tsx
<RetroTapeSpindleHub angle={45} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三爪严格 120 度对称分布
- [ ] 内凹阴影与外圈高光层次分明
- [ ] 中央圆孔精密居中
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
