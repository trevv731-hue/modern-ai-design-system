# 空气质量仪表

[返回组件目录](../README.md) · 智能家居 / IoT · v3 新增

## 目的与边界

展示室内空气质量数值、等级与分项指标。

## 结构

- PM2.5 数值 (ds-air-quality__value)
- 等级标签 (ds-air-quality__level)
- 指标网格 (ds-air-quality__items)
- 趋势 (ds-air-quality__trend)

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

仪表可聚焦；等级有文字不只颜色；恶化时 status 播报。

## 使用细则

- 等级按优、良、中、差四色。
- 分项指标最多 4 个。
- 超标时给净化建议。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-air-quality is-good" role="status" aria-label="空气质量，PM2.5 42 微克每立方米，等级良"><div class="ds-air-quality__head"><strong class="ds-air-quality__value">42</strong><div><span class="ds-air-quality__level">良</span><small>PM2.5 μg/m³</small></div></div><div class="ds-air-quality__items"><span>CO₂ <b>620ppm</b></span><span>甲醛 <b>0.03</b></span><span>VOC <b>0.4</b></span><span>温度 <b>23.5°</b></span></div><p class="ds-air-quality__trend">较昨日 <em class="is-down">↓ 8%</em></p></section>
```

## React 示例

```tsx
<AirQualityGauge pm25={42} level="good" items={[{ label: "CO₂", value: "620ppm" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 等级四色区分
- [ ] 分项最多 4 个
- [ ] 超标给净化建议
- [ ] 恶化 status 播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
