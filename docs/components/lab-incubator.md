# 培养箱状态卡

[返回组件目录](../README.md) · 实验室管理 · v3 新增

## 目的与边界

展示一台培养箱的温度、气体浓度与门体状态。

## 结构

- 设备名 (ds-lab-incubator__name)
- 温度 (ds-lab-incubator__metric)
- CO2 浓度
- 湿度
- 门状态 (ds-lab-incubator__door)

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

卡片可聚焦查看历史曲线；开门异常以 alert 语义播报。

## 使用细则

- 三项环境指标并列。
- 数值偏离设定值黄色预警。
- 开门状态文字标识。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-lab-incubator is-warn" tabindex="0" role="button" aria-label="培养箱状态，CO2 培养箱 A1，温度 37.1 摄氏度，二氧化碳 4.8%，湿度 95%，箱门关闭，温度偏高"><div class="ds-lab-incubator__head"><strong class="ds-lab-incubator__name">CO₂ 培养箱 A1</strong><span class="ds-lab-incubator__door is-closed">箱门关闭</span></div><div class="ds-lab-incubator__metrics"><span class="ds-lab-incubator__metric"><em>温度</em><strong>37.1℃</strong></span><span class="ds-lab-incubator__metric"><em>CO₂</em><strong>4.8%</strong></span><span class="ds-lab-incubator__metric"><em>湿度</em><strong>95%</strong></span></div></article>
```

## React 示例

```tsx
<IncubatorStatusCard name="CO₂ 培养箱 A1" temp={37.1} co2={4.8} humidity={95} doorOpen={false} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三项指标
- [ ] 偏离预警
- [ ] 门状态文字
- [ ] 历史曲线
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
