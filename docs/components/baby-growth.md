# 成长记录行

[返回组件目录](../README.md) · 母婴亲子 · v3 新增

## 目的与边界

展示一次宝宝身高体重的测量记录与百分位。

## 结构

- 月龄 (ds-baby-growth__age)
- 身高 (ds-baby-growth__height)
- 体重 (ds-baby-growth__weight)
- 百分位 (ds-baby-growth__pct)

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

行可聚焦查看生长曲线；低于 P3 以 alert 语义播报。

## 使用细则

- 百分位以进度条展示。
- 身高厘米、体重千克。
- 月龄文字标注。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-baby-growth is-ok" tabindex="0" role="button" aria-label="成长记录，12 月龄，身高 76.5 厘米，体重 9.8 千克，体重百分位 P62，处于正常范围"><span class="ds-baby-growth__age">12 月龄</span><span class="ds-baby-growth__height">76.5 cm</span><span class="ds-baby-growth__weight">9.8 kg</span><div class="ds-baby-growth__bar" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" aria-label="体重百分位"><span class="ds-baby-growth__fill" style="width:62%"></span></div><span class="ds-baby-growth__pct">P62</span></div>
```

## React 示例

```tsx
<BabyGrowthChartRow age="12 月龄" height={76.5} weight={9.8} percentile={62} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] progressbar 语义
- [ ] 百分位展示
- [ ] 身高体重
- [ ] 生长曲线
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
