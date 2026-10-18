# 车队车辆卡

[返回组件目录](../README.md) · 物流 / 供应链 · v3 新增

## 目的与边界

展示车辆位置、状态、司机与里程信息。

## 结构

- 车牌 (ds-fleet-vehicle__plate)
- 状态 (ds-fleet-vehicle__state)
- 司机
- 位置与速度
- 今日里程

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

卡片可聚焦查看轨迹；联系司机按钮可达。

## 使用细则

- 离线车辆置灰并显示最后心跳。
- 超速与疲劳驾驶有标记。
- 支持按状态筛选车辆。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-fleet-vehicle is-running" tabindex="0" role="button" aria-label="车辆 京A12345，行驶中，司机李强，G4 京港澳高速，时速 82，今日里程 318 公里"><div class="ds-fleet-vehicle__head"><strong class="ds-fleet-vehicle__plate">京A·12345</strong><span class="ds-fleet-vehicle__state is-running">行驶中</span></div><p class="ds-fleet-vehicle__driver">司机 李强 ★4.8 · 厢式 9.6m</p><p class="ds-fleet-vehicle__loc">G4 京港澳高速 · 82 km/h</p><p class="ds-fleet-vehicle__odo">今日里程 318 km · 油耗 28.4 L</p></article>
```

## React 示例

```tsx
<FleetVehicleCard plate="京A·12345" state="running" driver="李强 · ★4.8" loc="G4 京港澳高速 · 82 km/h" odo="318 km" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 离线置灰显最后心跳
- [ ] 超速疲劳有标记
- [ ] 按状态筛选
- [ ] 卡片可聚焦看轨迹
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
