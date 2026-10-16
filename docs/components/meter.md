# 仪表刻度条

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

精确表达物理资源（内存、带宽容量、CPU 峰值）的消耗分布与安全阈值。

## 结构

- 分类说明标签
- 当前数值与占比
- 物理容量刻度槽
- 动态安全/警告色阶

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

使用语义原生 meter 元素或 role=meter，读屏软件自动朗读当前值与极值。

## 使用细则

- 依据阈值区间自动呈现 secondary、warning 或 danger 警示状态。
- 两端保持饱满胶囊圆角，不产生溢出白边。
- 数值和单位使用等宽字体。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div style="display:grid;gap:6px;width:100%"><div class="ds-toolbar"><small>物理内存负载</small><small style="font-weight:600;font-variant-numeric:tabular-nums">1.8 / 4.0 GB (45%)</small></div><meter class="ds-meter" value="45" min="0" max="100" low="70" high="85" optimum="40" aria-label="物理内存负载"></meter></div>
```

## React 示例

```tsx
<Meter label="物理内存负载" value={45} max={100} note="1.8 / 4.0 GB" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 进度刻度平滑填充
- [ ] 高负载状态下色阶自动切换
- [ ] 读屏器正确播报当前百分比
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
