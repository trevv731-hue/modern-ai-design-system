# 复古母带机磁头方位角李萨如图形相位仪

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

致敬 Studer / Otari 录音母带开盘机磁头校准李萨如示波仪（Tape Head Azimuth Lissajous Meter）；圆形深绿荧光示波器显像管、X/Y 中心十字瞄准基准线、倾斜 45° 极化相位椭圆轨迹、底部相位一致性百分比与对齐判定指示。

## 结构

- 纯黑发烧级机架外壳 (.ds-azimuth-meter)
- 正圆微发光磷光绿色示波屏幕 (.ds-azimuth-meter__screen)
- 十字中心定位准星网线 (.ds-azimuth-meter__crosshair-x, .ds-azimuth-meter__crosshair-y)
- 发光 45° 旋转李萨如动态相位环 (.ds-azimuth-meter__phase-ellipse)
- 底部等宽立体角位状态徽章 (.ds-azimuth-meter__foot)

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

无需直接按键，通过音频校准通道输入信号动态呈现相位椭圆。

## 使用细则

- 具备 role="region" 与 aria-label 说明磁头方位角相位仪与对齐状态。
- 示波图形绿色荧光在暗底环境下对比度超过 12:1。
- 适合母带级音频分析仪、双声道立体声相位监测、拟物专业录音室工作台。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-azimuth-meter" role="region" aria-label="磁头方位角李萨如图形相位仪"><div class="ds-azimuth-meter__screen" aria-hidden="true"><span class="ds-azimuth-meter__crosshair-x"></span><span class="ds-azimuth-meter__crosshair-y"></span><div class="ds-azimuth-meter__phase-ellipse" style="transform:rotate(-45deg)"></div></div><div class="ds-azimuth-meter__foot"><span>PHASE: 98.4%</span><span>ALIGNED</span></div></div>
```

## React 示例

```tsx
<AnalogTapeHeadAzimuthMeter phaseAngle={-45} coherence="98.4%" status="ALIGNED" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 正圆示波管带绿色暗部晕光
- [ ] 十字准星纤细精准
- [ ] 45度发光椭圆相位极佳
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
