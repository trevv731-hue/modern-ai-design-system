# 专业调音台双声道多段 LED 音频 VU 表

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Logic Pro 与专业混音硬件台风格的双声道 (L/R) 多段物理 LED 音频电平指示计；集成绿-黄-红三级预警光段、微弱发光阴影与瞬态跳动响应。

## 结构

- 电平表外框底座 (.ds-vu-meter)
- L / R 左右声道独立通道行 (.ds-vu-channel)
- 声道等宽通道字母标签 (.ds-vu-channel__label)
- LED 跑道槽底座 (.ds-vu-track)
- 三级预警多段矩形光片 (.ds-vu-seg)

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

作为音频动态遥测图元，提供 role="img" 与精确声道电平无障碍说明。

## 使用细则

- 分段通过绿 (安全) -> 黄 (近峰值) -> 红 (过载削波) 严格三段分色，激活段带有柔和同色微光扩散 box-shadow。
- 未激活段保持 0.3 透明度与底色，还原真实 LED 灭灯时的物理透镜质感。
- 纯 CSS opacity 过渡极速（60ms），不引发几何重排。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-vu-meter" role="img" aria-label="双声道音频 VU 电平表"><div class="ds-vu-channel"><span class="ds-vu-channel__label">L</span><div class="ds-vu-track"><div class="ds-vu-seg ds-vu-seg--green is-on"></div><div class="ds-vu-seg ds-vu-seg--green is-on"></div><div class="ds-vu-seg ds-vu-seg--green is-on"></div><div class="ds-vu-seg ds-vu-seg--green is-on"></div><div class="ds-vu-seg ds-vu-seg--green is-on"></div><div class="ds-vu-seg ds-vu-seg--green is-on"></div><div class="ds-vu-seg ds-vu-seg--yellow is-on"></div><div class="ds-vu-seg ds-vu-seg--yellow is-on"></div><div class="ds-vu-seg ds-vu-seg--red"></div><div class="ds-vu-seg ds-vu-seg--red"></div></div></div><div class="ds-vu-channel"><span class="ds-vu-channel__label">R</span><div class="ds-vu-track"><div class="ds-vu-seg ds-vu-seg--green is-on"></div><div class="ds-vu-seg ds-vu-seg--green is-on"></div><div class="ds-vu-seg ds-vu-seg--green is-on"></div><div class="ds-vu-seg ds-vu-seg--green is-on"></div><div class="ds-vu-seg ds-vu-seg--green is-on"></div><div class="ds-vu-seg ds-vu-seg--green is-on"></div><div class="ds-vu-seg ds-vu-seg--yellow is-on"></div><div class="ds-vu-seg ds-vu-seg--yellow"></div><div class="ds-vu-seg ds-vu-seg--red"></div><div class="ds-vu-seg ds-vu-seg--red"></div></div></div></div>
```

## React 示例

```tsx
<StudioVuMeter leftLevel={8} rightLevel={7} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 红绿黄分段颜色明确符合行业标准
- [ ] 发光阴影柔和自然无光斑瑕疵
- [ ] 左右声道排列间距对称紧凑
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
