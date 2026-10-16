# DAW 5段参量均衡滤波曲线视窗

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

Ableton Live、Logic Pro 与 FabFilter Pro-Q 级别的专业 5 段参量均衡器（Parametric EQ）；展示网格频响背景、动态平滑 SVG 贝塞尔滤波曲线与拖拽调节节点。

## 结构

- 音频面板外壳 (.ds-eq-band)
- 顶栏频段状态标题 (.ds-eq-band__head)
- 暗黑滤波示波视窗 (.ds-eq-band__screen)
- 等距频响网格参考线 (.ds-eq-band__grid)
- 矢量滤波动态平滑曲线 (.ds-eq-band__curve)
- 发光中心控制频点手柄 (.ds-eq-band__node)

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

Tab 在各 EQ 节点间遍历；方向键微调选中频点的中心频率（X轴）与增益衰减（Y轴）。

## 使用细则

- 曲线使用矢量 SVG 配合系统高亮色，手柄节点自带外发光光晕与精确坐标指示。
- 手柄节点具备 role="slider" 与 aria-label，保障专业音频界面的可访问性。
- 适合数字音频工作站（DAW）、声卡控制中心、流媒体音效器及会议室降噪调音台。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-eq-band" role="region" aria-label="5-Band 参量均衡曲线器"><div class="ds-eq-band__head"><span>5-Band 参量均衡曲线器</span><span style="color:var(--ds-accent)">EQ ACTIVE</span></div><div class="ds-eq-band__screen"><div class="ds-eq-band__grid" aria-hidden="true"></div><svg class="ds-eq-band__curve" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M 0 50 Q 20 20, 40 65 T 80 25 T 100 50" fill="none" stroke="var(--ds-accent)" stroke-width="2.5"></path></svg><div class="ds-eq-band__node" style="left:20%;top:35%" title="80Hz: +3dB" role="slider" aria-label="80Hz 频段增益" tabindex="0"></div><div class="ds-eq-band__node" style="left:40%;top:65%" title="250Hz: -2dB" role="slider" aria-label="250Hz 频段增益" tabindex="0"></div><div class="ds-eq-band__node" style="left:80%;top:25%" title="4kHz: +4.5dB" role="slider" aria-label="4kHz 频段增益" tabindex="0"></div></div></div>
```

## React 示例

```tsx
<ParametricEqBandVisualizer />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 示波曲线平滑无锯齿断裂
- [ ] 频点手柄居中吸附在曲线上
- [ ] 暗黑示波视窗深邃专业
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
