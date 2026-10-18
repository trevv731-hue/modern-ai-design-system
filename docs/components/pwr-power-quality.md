# 电能质量仪表组

[返回组件目录](../README.md) · 能源 / 电力运维 · v3 新增

## 目的与边界

以仪表组展示电压偏差、频率偏差与谐波畸变率。

## 结构

- 指标环 (ds-power-quality__ring)
- 指标名
- 实测值 (ds-power-quality__value)
- 限值 (ds-power-quality__limit)

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

每项可聚焦查看历史曲线；超限项以 alert 语义播报。

## 使用细则

- 合格绿色、超限红色。
- 三项并列展示。
- 限值以文字标注在环下。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-power-quality" aria-label="电能质量，电压偏差 2.1%，限值 5%，合格；频率偏差 0.02 赫兹，限值 0.2 赫兹，合格；谐波畸变率 3.4%，限值 4%，合格"><div class="ds-power-quality__item" tabindex="0" aria-label="电压偏差 2.1%，限值 5%，合格"><span class="ds-power-quality__ring" style="--p:42%" aria-hidden="true"><b>42%</b></span><em>电压偏差</em><span class="ds-power-quality__value">2.1%</span><span class="ds-power-quality__limit">限值 5%</span></div><div class="ds-power-quality__item" tabindex="0" aria-label="频率偏差 0.02 赫兹，限值 0.2 赫兹，合格"><span class="ds-power-quality__ring" style="--p:10%" aria-hidden="true"><b>10%</b></span><em>频率偏差</em><span class="ds-power-quality__value">0.02 Hz</span><span class="ds-power-quality__limit">限值 0.2 Hz</span></div><div class="ds-power-quality__item" tabindex="0" aria-label="谐波畸变率 3.4%，限值 4%，合格"><span class="ds-power-quality__ring" style="--p:85%" aria-hidden="true"><b>85%</b></span><em>谐波畸变率</em><span class="ds-power-quality__value">3.4%</span><span class="ds-power-quality__limit">限值 4%</span></div></section>
```

## React 示例

```tsx
<PowerQualityGauge items={[{ label: "电压偏差", value: "2.1%", limit: "5%", pct: 42 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 合格绿色
- [ ] 超限红色
- [ ] 三项并列
- [ ] 限值文字
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
