# 开盘磁带机磁头方位角李萨如相位示波仪

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

模拟广播级模拟磁带录音机磁头方位角（Tape Head Azimuth）与双声道相位对准的李萨如 X-Y 轴示波仪（Lissajous Phase Scope HUD）；展示 10kHz 标准校准音频信号、相位差角度数（+1.4°）、绿色荧光屏刻度网格与相位锁止状态（LOCKED）。

## 结构

- 复古深色示波器面板 (.ds-azimuth-scope-hud)
- 校准标题与锁定状态徽标 (.ds-azimuth-scope-hud__header, .ds-azimuth-scope-hud__lock)
- 绿色荧光屏与十字扫描网格 (.ds-azimuth-scope-hud__screen, .ds-azimuth-scope-hud__grid)
- 动态 45° 旋转李萨如椭圆图元 (.ds-azimuth-scope-hud__lissajous)
- 底部相位差与测试频率 (.ds-azimuth-scope-hud__footer)

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

Tab 聚焦李萨如示波仪；屏幕阅读器自动播报当前磁带轨道名称、相位差与校准状态。

## 使用细则

- 具备 role="region" 与 aria-label 完整描述当前磁头方位角校准指标。
- 经典 45° 椭圆李萨如曲线直观反映左右声道高频相位一致性。
- 适合高保真音频工作站、母带重置插件、复古模拟硬件仿真系统。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-azimuth-scope-hud" role="region" aria-label="磁头方位角李萨如图示仪：Stereo Master Tape 15 IPS，相位差 +1.4°，状态 已校准，测试频率 10.0kHz"><div class="ds-azimuth-scope-hud__header"><span>AZIMUTH LISSAJOUS</span><span class="ds-azimuth-scope-hud__lock">LOCKED</span></div><div class="ds-azimuth-scope-hud__screen" aria-hidden="true"><div class="ds-azimuth-scope-hud__grid"></div><div class="ds-azimuth-scope-hud__lissajous" style="transform:rotate(46.4deg)"></div></div><div class="ds-azimuth-scope-hud__footer"><span>ΔΦ: +1.4°</span><span>TEST TONE: 10.0 kHz</span></div></div>
```

## React 示例

```tsx
<CassetteHeadAzimuthAlignmentOscilloscope trackName="Stereo Master Tape 15 IPS" phaseDifferentialDeg={1.4} isPhaseLocked={true} frequencyKhz={10.0} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 45° 李萨如精密相位
- [ ] LOCKED 状态绿色锁定
- [ ] 10.0 kHz 广播级标定
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
