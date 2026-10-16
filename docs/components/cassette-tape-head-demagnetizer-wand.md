# 复古开盘磁头消磁仪动态残磁表

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

专业录音母带开盘机磁头消磁校准仪（Tape Head Demagnetizer AC Flux Meter）；深黑防爆工程塑料外壳、残磁量百分比光电刻度条（绿黄红瞬态渐变）、消磁进行中告警指示与 50Hz 交流强磁脉冲触发物理按键。

## 结构

- 纯黑工程级机身槽板 (.ds-demagnetizer-wand)
- 顶部状态双态微指示 (.ds-demagnetizer-wand__head)
- 横向残余磁通量刻度光条 (.ds-demagnetizer-wand__gauge, .ds-demagnetizer-wand__bar)
- 等宽百分比读数与标尺 (.ds-demagnetizer-wand__flux)
- 红色危险高磁脉冲瞬态按钮 (.ds-demagnetizer-wand__trigger)

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

点击触发脉冲高频消磁循环；自动倒计时完成退磁消磁动作。

## 使用细则

- 具备 role="region" 与 aria-label 说明磁带机磁头退磁校准仪。
- 高压/高磁危险提示具备明显视觉警示，红黄绿刻度层次丰富。
- 适合复古录音室拟物设备、硬件声卡控制面板、复古音频交互套件。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-demagnetizer-wand" role="region" aria-label="磁带机磁头退磁校准仪"><div class="ds-demagnetizer-wand__head"><span>DEMAGNETIZER AC FLUX</span><span style="color:#10b981">○ READY</span></div><div class="ds-demagnetizer-wand__gauge"><div class="ds-demagnetizer-wand__bar" style="width:42%"></div><span class="ds-demagnetizer-wand__flux">RESIDUAL FLUX</span><span class="ds-demagnetizer-wand__flux">42%</span></div><button type="button" class="ds-demagnetizer-wand__trigger">⚡ 脉冲高频消磁循环 (50Hz AC)</button></div>
```

## React 示例

```tsx
<AnalogTapeHeadDemagnetizer fluxPercentage={42} isDemagnetizing={false} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 纯黑仪表壳扎实
- [ ] 42% 残磁进度条清晰
- [ ] 红色消磁按钮拟物有力
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
