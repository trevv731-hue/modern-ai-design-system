# 光伏逆变器卡

[返回组件目录](../README.md) · 能源 / 电力运维 · v3 新增

## 目的与边界

展示一台光伏逆变器的实时发电功率与转换效率。

## 结构

- 设备号 (ds-inverter__no)
- 发电功率 (ds-inverter__power)
- 转换效率 (ds-inverter__eff)
- 日发电量 (ds-inverter__daily)
- 状态 (ds-inverter__state)

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

卡片可聚焦查看发电曲线；离线状态以 alert 语义播报。

## 使用细则

- 在线绿色、限功率黄色、离线红色。
- 实时功率为主视觉数字。
- 效率低于 90% 黄色提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-inverter is-online" tabindex="0" role="button" aria-label="逆变器 INV-08，实时发电 62.4 千瓦，转换效率 97.8%，日发电量 386 度，在线"><div class="ds-inverter__head"><strong class="ds-inverter__no">INV-08</strong><span class="ds-inverter__state is-online">在线</span></div><strong class="ds-inverter__power">62.4<small>kW</small></strong><div class="ds-inverter__meta"><span class="ds-inverter__eff">效率 97.8%</span><span class="ds-inverter__daily">日发电 386 度</span></div></article>
```

## React 示例

```tsx
<SolarInverterCard no="INV-08" power={62.4} eff={97.8} daily={386} state="online" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态配色
- [ ] 功率主数字
- [ ] 效率 90% 阈值
- [ ] 发电曲线
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
