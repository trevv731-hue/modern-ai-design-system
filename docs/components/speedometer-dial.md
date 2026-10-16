# 仪表盘罗盘指针

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

网络测速与系统负载仪表罗盘；带有半圆彩色环形刻度、物理红色指示针与大字号实时读数。

## 结构

- 半圆刻度圆弧底槽
- 高亮主题强调色活跃弧段
- 红色物理指针 (transform-origin: bottom)
- 中心金属圆心锚点
- 当前速率读数与单位

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

作为状态测量图元提供 role="meter" 与当前数值的 aria-valuenow 与 aria-valuemax。

## 使用细则

- 指针旋转角度纯通过 CSS 自定义属性 (--ds-needle-deg) 与 transform:rotate 驱动，性能极高。
- 指针下端固定于圆心，配合立方贝塞尔平滑减速，具有真实的物理指针阻尼感。
- 大字号数字采用 tabular-nums 等宽排版，频繁刷新速率时不产生横向抖动。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-speedometer" role="meter" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" aria-label="实时下行速率"><div class="ds-speedometer__gauge"><div class="ds-speedometer__arc"></div><div class="ds-speedometer__needle" style="--ds-needle-deg:63deg"></div><div class="ds-speedometer__center"></div></div><div class="ds-speedometer__val">850 <span class="ds-speedometer__unit">Mbps</span></div><small style="font-size:11px;color:var(--ds-muted);margin-top:2px">下行峰值带宽</small></div>
```

## React 示例

```tsx
<SpeedometerDial value={85} max={100} unit="Mbps" label="下行峰值带宽" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 指针旋转平滑带物理阻尼感
- [ ] 刻度弧线圆滑规整无锯齿
- [ ] 读屏器能正确感知实时速率
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
