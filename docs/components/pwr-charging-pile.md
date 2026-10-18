# 充电桩状态行

[返回组件目录](../README.md) · 能源 / 电力运维 · v3 新增

## 目的与边界

展示一个充电桩的使用状态与本次充电信息。

## 结构

- 桩号 (ds-charging-pile__no)
- 状态 (ds-charging-pile__state)
- 功率 (ds-charging-pile__power)
- 计费 (ds-charging-pile__fee)

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

行可聚焦查看充电订单；故障与离线状态以 alert 语义播报。

## 使用细则

- 空闲绿色、充电中蓝色、预约黄色、故障离线红色。
- 充电中显示实时功率与已充电量。
- 状态文字不只颜色。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-charging-pile is-charging" tabindex="0" role="button" aria-label="充电桩 P-023，充电中，功率 60 千瓦，已充 34 度，计费 28.4 元"><strong class="ds-charging-pile__no">P-023</strong><span class="ds-charging-pile__state is-charging">充电中</span><span class="ds-charging-pile__power">60 kW · 已充 34 度</span><span class="ds-charging-pile__fee">¥28.40</span></div>
```

## React 示例

```tsx
<ChargingPileStatusRow no="P-023" state="charging" power="60 kW · 已充 34 度" fee={28.4} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态配色
- [ ] 实时功率
- [ ] 计费金额
- [ ] 充电订单
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
