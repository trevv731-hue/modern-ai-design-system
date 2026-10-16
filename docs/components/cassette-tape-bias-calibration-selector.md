# 磁带机物理偏磁校准与均衡选择器

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

专业开盘母带录音机磁带物理偏磁校准与 EQ 均衡选择按键组（Tape Bias & EQ Calibration Rotary Selector）；Normal (Type I, 120µs) / CrO2 (Type II, 70µs) / Metal (Type IV, 70µs) 三联微机械按键及独立微型绿色/琥珀色 LED 状态灯。

## 结构

- 嵌入式微质感基框 (.ds-tape-bias-selector)
- 标题与当前选定档位读数 (.ds-tape-bias-selector__header)
- 三列等宽档位按键网格 (.ds-tape-bias-selector__group)
- 独立按键与微型发光 LED (.ds-tape-bias-selector__btn, .ds-tape-bias-selector__led)
- 带磁带型号与均衡时间常数文本 (.ds-tape-bias-selector__type, .ds-tape-bias-selector__eq)

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

Tab 聚焦选择器；ArrowLeft / ArrowRight 或直接点击按键切换磁带偏磁档位。

## 使用细则

- 具备 role="region" 与 role="radiogroup"，按键具备 role="radio" 与 aria-checked。
- 选定状态通过边框、背景及发光微型 LED 三重强化。
- 适合模拟音频母带工作站、复古音频播放器、专业声学插件。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tape-bias-selector" role="region" aria-label="磁带物理偏磁校准：当前选定 CrO2"><div class="ds-tape-bias-selector__header"><span>TAPE BIAS / EQ</span><span style="font-family:var(--ds-type-mono);color:var(--ds-accent)">CrO2</span></div><div class="ds-tape-bias-selector__group" role="radiogroup" aria-label="磁带规格档位"><button type="button" role="radio" aria-checked="false" class="ds-tape-bias-selector__btn"><div class="ds-tape-bias-selector__led" aria-hidden="true"></div><span class="ds-tape-bias-selector__type">Type I</span><span class="ds-tape-bias-selector__eq">120 µs</span></button><button type="button" role="radio" aria-checked="true" class="ds-tape-bias-selector__btn is-active"><div class="ds-tape-bias-selector__led" aria-hidden="true"></div><span class="ds-tape-bias-selector__type">Type II</span><span class="ds-tape-bias-selector__eq">70 µs</span></button><button type="button" role="radio" aria-checked="false" class="ds-tape-bias-selector__btn"><div class="ds-tape-bias-selector__led" aria-hidden="true"></div><span class="ds-tape-bias-selector__type">Type IV</span><span class="ds-tape-bias-selector__eq">70 µs</span></button></div></div>
```

## React 示例

```tsx
<AnalogTapeBiasCalibrationSelector selectedType="CrO2" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] Type I / II / IV 三联排布
- [ ] Type II 绿色微 LED 点亮
- [ ] 120µs / 70µs 刻度专业准确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
