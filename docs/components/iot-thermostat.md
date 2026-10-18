# 智能温控旋钮

[返回组件目录](../README.md) · 智能家居 / IoT · v3 新增

## 目的与边界

以旋钮展示当前室温、目标温度与运行模式。

## 结构

- 当前温度 (ds-thermostat__now)
- 目标温度 (ds-thermostat__target)
- 模式切换 (ds-thermostat__modes)
- 旋钮环 (ds-thermostat__ring)
- 湿度

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

加减按钮可键盘操作；目标温度使用 slider 语义播报。

## 使用细则

- 制热与制冷模式用颜色区分。
- 目标温度步进 0.5 度。
- 离线设备置灰显示最后状态。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-thermostat is-heat" aria-label="客厅空调，当前 23.5 度，目标 24 度，制热模式，湿度 46%"><div class="ds-thermostat__ring" style="--p:60%" aria-hidden="true"><span class="ds-thermostat__now">23.5°</span><strong class="ds-thermostat__target">24°</strong></div><div class="ds-thermostat__modes"><button type="button" class="is-active">制热</button><button type="button">制冷</button><button type="button">送风</button><button type="button">除湿</button></div><p class="ds-thermostat__meta">湿度 46% · 室外 8°</p></section>
```

## React 示例

```tsx
<SmartThermostatDial room="客厅空调" current={23.5} target={24} mode="heat" humidity={46} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 模式颜色区分
- [ ] 目标步进 0.5 度
- [ ] 离线置灰显最后状态
- [ ] slider 语义播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
