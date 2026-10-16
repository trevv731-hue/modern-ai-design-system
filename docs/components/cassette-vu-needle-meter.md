# 复古发烧级双指针白炽暖光模拟 VU 表

[返回组件目录](../README.md) · 媒体 · CSS / HTML / React

## 目的与边界

经典 McIntosh 与 Marantz 胆机风格的双通道指针式模拟 VU 表；暖金发光表盘背光、-20dB 至 +3dB 精确刻度、超快响应摆针及红光削波过载指示灯。

## 结构

- 深木纹/黑金属外壳 (.ds-analog-vu)
- 暖黄色白炽微光渐变表盘 (.ds-analog-vu__meter)
- 等宽分贝刻度字列 (.ds-analog-vu__scale)
- 底部固定旋转细针 (.ds-analog-vu__needle)
- 右上角峰值红光过载报警点 (.ds-analog-vu__peak)

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

作为专业音频监测仪表呈现，Tab 遍历并在无障碍层通过 role="region" 报读分贝读数。

## 使用细则

- 表盘刻度符合高反差暗黑/暖黄对比，避免细针丢失视觉焦点。
- 摆针旋转角度与峰值通过 CSS 变量绑定，性能纯 compositor 渲染。
- 适合母带处理工作站、流媒体直播推流台、复古音乐播放器及专业声卡驱动面板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-analog-vu" role="region" aria-label="模拟双指针 VU 表：左声道 -14dB，右声道 -8dB"><div class="ds-analog-vu__meter"><div class="ds-analog-vu__scale"><span>-20</span><span>-10</span><span>-5</span><span>0</span><span style="color:#991b1b">+3</span></div><div class="ds-analog-vu__needle" style="--ds-vu-angle:-14deg" aria-hidden="true"></div><div class="ds-analog-vu__peak" style="--ds-vu-peak:0.2" title="通道 1 正常"></div></div><div class="ds-analog-vu__meter"><div class="ds-analog-vu__scale"><span>-20</span><span>-10</span><span>-5</span><span>0</span><span style="color:#991b1b">+3</span></div><div class="ds-analog-vu__needle" style="--ds-vu-angle:-8deg" aria-hidden="true"></div><div class="ds-analog-vu__peak" style="--ds-vu-peak:0.2" title="通道 2 正常"></div></div></div>
```

## React 示例

```tsx
<AnalogDualVuMeter leftAngle={-14} rightAngle={-8} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 双表盘左右对称平衡
- [ ] 细针旋转原点在底部中央
- [ ] 刻度字型清晰工整
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
