# 设备状态卡

[返回组件目录](../README.md) · 制造 / 工业 · v3 新增

## 目的与边界

展示一台设备的运行状态、稼动率与当前工单。

## 结构

- 设备编号 (ds-machine-card__code)
- 状态 (ds-machine-card__state)
- 稼动率 (ds-machine-card__oee)
- 当前工单
- 报警信息

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

卡片可聚焦查看详情；报警使用 status 语义播报。

## 使用细则

- 运行绿色、待机黄色、故障红色。
- 稼动率低于目标黄色提示。
- 离线设备置灰。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-machine-card is-running" tabindex="0" role="button" aria-label="设备 CNC-08，运行中，稼动率 87%，工单 MO-20481，主轴温度偏高"><div class="ds-machine-card__head"><strong class="ds-machine-card__code">CNC-08</strong><span class="ds-machine-card__state is-running">运行中</span></div><p class="ds-machine-card__meta">工单 MO-20481 · 轴承座 ×320</p><div class="ds-machine-card__oee" aria-hidden="true"><i style="width:87%"></i></div><p class="ds-machine-card__alarm">主轴温度偏高 · 14:20</p></article>
```

## React 示例

```tsx
<MachineStatusCard code="CNC-08" state="running" oee={87} order="MO-20481" alarm="主轴温度偏高" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 状态四色区分
- [ ] 稼动率低于目标黄色
- [ ] 离线置灰
- [ ] 报警 status 播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
