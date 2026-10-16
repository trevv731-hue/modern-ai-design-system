# 多环同心资源利用率仪表盘

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Tesla 车载仪表与 Cyberpunk 服务器监控大盘风格的同心圆环仪表盘；单图元集成 CPU、GPU、内存等同心嵌套环形进度条、中央核心负载数值与图例行。

## 结构

- 同心多重 SVG 环形轨道与彩色进度圈
- 圆环中央大号等宽核心百分比
- 右侧多维资源彩色圆点图例
- 右侧等宽即时利用率读数

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

Tab 聚焦仪表簇；Enter 打开系统活动监视器进程明细。

## 使用细则

- 多环使用 stroke-dasharray 与 stroke-dashoffset 计算进度，完全由 SVG 矢量引擎驱动。
- 三种资源分别绑定 action 蓝色、accent 亮色与 warning 琥珀金，色彩层次分明。
- 紧凑卡片横向布局，在仪表盘栅格中占用极小空间却承载极高信息密度。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-radial-cluster" role="region" aria-label="硬件资源仪表盘"><div class="ds-radial-cluster__graphic"><svg class="ds-radial-cluster__svg" viewBox="0 0 88 88" aria-hidden="true"><circle class="ds-radial-cluster__track" cx="44" cy="44" r="36"></circle><circle class="ds-radial-cluster__track" cx="44" cy="44" r="28"></circle><circle class="ds-radial-cluster__track" cx="44" cy="44" r="20"></circle><circle class="ds-radial-cluster__meter" cx="44" cy="44" r="36" stroke="var(--ds-action)" stroke-dasharray="226.2" stroke-dashoffset="49.7"></circle><circle class="ds-radial-cluster__meter" cx="44" cy="44" r="28" stroke="var(--ds-accent)" stroke-dasharray="175.9" stroke-dashoffset="66.8"></circle><circle class="ds-radial-cluster__meter" cx="44" cy="44" r="20" stroke="var(--ds-warning)" stroke-dasharray="125.6" stroke-dashoffset="20.1"></circle></svg><div class="ds-radial-cluster__center">78%</div></div><div class="ds-radial-cluster__legend"><div class="ds-radial-cluster__item"><span class="ds-radial-cluster__dot" style="background:var(--ds-action)"></span><span>CPU 负载</span><span class="ds-radial-cluster__val">78%</span></div><div class="ds-radial-cluster__item"><span class="ds-radial-cluster__dot" style="background:var(--ds-accent)"></span><span>GPU 计算</span><span class="ds-radial-cluster__val">62%</span></div><div class="ds-radial-cluster__item"><span class="ds-radial-cluster__dot" style="background:var(--ds-warning)"></span><span>RAM 占用</span><span class="ds-radial-cluster__val">84%</span></div></div></div>
```

## React 示例

```tsx
<RadialGaugeCluster cpu={78} gpu={62} ram={84} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 同心圆环圆心严格重合对齐
- [ ] 圆环端点带 round 圆润倒角
- [ ] 数值与图例文本基线对齐
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
