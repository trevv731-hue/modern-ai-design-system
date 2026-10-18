# 健康指标磁贴

[返回组件目录](../README.md) · 健康 / 运动 · v3 新增

## 目的与边界

以小磁贴展示单项健康指标与环比变化。

## 结构

- 图标 (ds-metric-tile__icon)
- 指标名
- 数值 (ds-metric-tile__value)
- 单位
- 环比 (ds-metric-tile__delta)

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

磁贴可聚焦查看详情；环比有文字方向。

## 使用细则

- 环比用箭头与文字双表示。
- 异常指标加文字说明而非仅变色。
- 磁贴网格在窄屏折行。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-metric-tile" tabindex="0" role="button" aria-label="血氧 98%，较昨日 +1%"><span class="ds-metric-tile__icon" aria-hidden="true">🩸</span><p class="ds-metric-tile__name">血氧饱和度</p><p class="ds-metric-tile__value">98<em>%</em></p><p class="ds-metric-tile__delta is-up"><span aria-hidden="true">↑</span> 较昨日 +1%</p></div>
```

## React 示例

```tsx
<HealthMetricTile name="血氧饱和度" value="98" unit="%" delta="+1%" trend="up" icon="🩸" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 环比箭头文字双表示
- [ ] 异常指标文字说明
- [ ] 窄屏磁贴折行
- [ ] 磁贴可聚焦看详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
