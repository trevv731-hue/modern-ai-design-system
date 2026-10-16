# 服务状态监控条

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

GitHub 与 Stripe 风格的 90 天运行可用性微条矩阵；用于展示节点集群 SLA、故障率与每日健康度。

## 结构

- 服务名称与实时 SLA 徽标
- 90 天微细竖条刻度槽 (Ticks)
- 故障/异常色阶状态
- 起止日期与全部在线指示

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

Tab 或方向键在竖条间导航；聚焦竖条可展示对应日期的检测日志。

## 使用细则

- 竖条采用圆角 2px 细条，悬停时使用 scaleY(1.15) 纵向微挺立，手感精致。
- 正常状态采用 success 绿色，波动为 warning，故障为 danger。
- 提供准确的日期与事件 tooltip 文本，保障无障碍感知。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-uptime"><div class="ds-uptime__header"><span>新加坡直连专线可用性</span><span class="ds-badge ds-badge--success">99.98% SLA</span></div><div class="ds-uptime__bars" aria-label="近期状态"><div class="ds-uptime__tick" title="10-01: 正常"></div><div class="ds-uptime__tick" title="10-02: 正常"></div><div class="ds-uptime__tick" title="10-03: 正常"></div><div class="ds-uptime__tick" data-status="degraded" title="10-04: 轻微波动"></div><div class="ds-uptime__tick" title="10-05: 正常"></div><div class="ds-uptime__tick" title="10-06: 正常"></div><div class="ds-uptime__tick" title="10-07: 正常"></div><div class="ds-uptime__tick" title="10-08: 正常"></div><div class="ds-uptime__tick" data-status="down" title="10-09: 专线割接中断"></div><div class="ds-uptime__tick" title="10-10: 正常"></div><div class="ds-uptime__tick" title="10-11: 正常"></div><div class="ds-uptime__tick" title="10-12: 正常"></div><div class="ds-uptime__tick" title="10-13: 正常"></div><div class="ds-uptime__tick" title="10-14: 正常"></div><div class="ds-uptime__tick" title="10-15: 正常"></div></div><div class="ds-uptime__footer"><span>15 天前</span><span style="color:var(--ds-success);font-weight:600">● 全部系统在线</span><span>今天</span></div></div>
```

## React 示例

```tsx
<UptimePulseBar name="香港 01 专线" sla="99.99%" days={30} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 小竖条密集排列下鼠标悬浮精确
- [ ] 异常红黄绿状态对比明显
- [ ] SLA 徽标文字与背景对比达标
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
