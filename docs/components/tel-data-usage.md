# 流量用量仪表

[返回组件目录](../README.md) · 电信 / 网络运维 · v3 新增

## 目的与边界

以环形仪表展示套餐流量已用比例与剩余可用天数。

## 结构

- 仪表环 (ds-data-usage__ring)
- 已用量 (ds-data-usage__used)
- 剩余折算 (ds-data-usage__left)
- 周期提示 (ds-data-usage__note)

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

仪表可聚焦；超 80% 黄色预警、超 100% 红色播报。

## 使用细则

- 已用 80% 起黄色预警、100% 红色断网提示。
- 剩余流量按剩余天数折算日均可用。
- 百分比数字同时以文字呈现。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-data-usage is-warn" tabindex="0" role="img" aria-label="套餐流量已用 41 GB，共 50 GB，已用 82%，剩余 9 GB，日均可用 1 GB"><span class="ds-data-usage__ring" style="--p:82%" aria-hidden="true"><b>82%</b></span><div class="ds-data-usage__info"><span class="ds-data-usage__used">41 / 50 GB</span><span class="ds-data-usage__left">剩余 9 GB · 日均 1 GB</span><span class="ds-data-usage__note">账单周期剩余 9 天</span></div></section>
```

## React 示例

```tsx
<DataUsageGauge used={41} total={50} days={9} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 80% 黄色预警
- [ ] 100% 红色
- [ ] 日均折算
- [ ] 数字有文字
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
