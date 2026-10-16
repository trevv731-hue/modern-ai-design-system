# 复古音频电位器旋钮与刻度弧线

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

致敬 SSL / Neve 录音棚调音台模拟旋钮电位器（Analog Rotary Potentiometer Knob）；270 度径向刻度虚线环、径向渐变金属旋钮滚花外圈、发光指示针与中心金属倒角盖帽、等宽 dB 增益指示。

## 结构

- 径向深色金属旋钮壳体 (.ds-rotary-potentiometer__body)
- 外围 270° 径向虚线刻度环 (.ds-rotary-potentiometer__ticks)
- 青色高光旋转指示针 (.ds-rotary-potentiometer__pointer)
- 中心双色斜面金属盖帽 (.ds-rotary-potentiometer__cap)
- 下方大写声道标题与 dB 数值 (.ds-rotary-potentiometer__label, .ds-rotary-potentiometer__val)

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

ArrowLeft / ArrowDown 逆时针调小；ArrowRight / ArrowUp 顺时针调大。

## 使用细则

- 具备 role="slider" 与 aria-valuenow 完整反映旋钮旋转刻度。
- 高对比度发光指示指针，支持无缝旋转角度动态控制。
- 适合音频合成器、专业混音推子、专业调音台、硬件拟物控制面板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-rotary-potentiometer" role="group" aria-label="模拟电位器旋钮 MASTER GAIN"><div class="ds-rotary-potentiometer__body" style="--ds-knob-rot:45deg" tabindex="0" role="slider" aria-label="MASTER GAIN" aria-valuenow="45"><div class="ds-rotary-potentiometer__ticks" aria-hidden="true"></div><div class="ds-rotary-potentiometer__pointer" aria-hidden="true"></div><div class="ds-rotary-potentiometer__cap" aria-hidden="true"></div></div><span class="ds-rotary-potentiometer__label">MASTER GAIN</span><span class="ds-rotary-potentiometer__val">+4.5 dB</span></div>
```

## React 示例

```tsx
<AnalogRotaryPotentiometerKnob label="MASTER GAIN" value="+4.5 dB" rotation={45} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 旋钮圆润且带金属渐变立体感
- [ ] 指针朝向 45 度清晰可见
- [ ] 下方标注与 dB 增益数字居中
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
