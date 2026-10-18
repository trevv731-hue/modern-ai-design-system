# 杯测评分卡

[返回组件目录](../README.md) · 咖啡 / 茶饮门店 · v3 新增

## 目的与边界

展示一款咖啡豆的杯测分项与总分。

## 结构

- 豆名 (ds-cafe-cup__name)
- 分项行 (ds-cafe-cup__row)
- 分值 (ds-cafe-cup__score)
- 总分 (ds-cafe-cup__total)

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

卡片可聚焦查看分项评语；80 分以上精品级标识。

## 使用细则

- 五项分项 10 分制。
- 总分放大突出。
- 精品级绿色标识。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-cafe-cup is-specialty" tabindex="0" role="button" aria-label="杯测评分，花魁 7.0，干湿香 9.0，风味 8.5，余韵 8.0，酸质 8.5，干净度 8.5，总分 85.0，精品级"><div class="ds-cafe-cup__head"><strong class="ds-cafe-cup__name">花魁 7.0</strong><span class="ds-cafe-cup__badge">精品级</span></div><div class="ds-cafe-cup__rows"><span class="ds-cafe-cup__row">干湿香<strong class="ds-cafe-cup__score">9.0</strong></span><span class="ds-cafe-cup__row">风味<strong class="ds-cafe-cup__score">8.5</strong></span><span class="ds-cafe-cup__row">余韵<strong class="ds-cafe-cup__score">8.0</strong></span><span class="ds-cafe-cup__row">酸质<strong class="ds-cafe-cup__score">8.5</strong></span><span class="ds-cafe-cup__row">干净度<strong class="ds-cafe-cup__score">8.5</strong></span></div><span class="ds-cafe-cup__total">85.0</span></article>
```

## React 示例

```tsx
<CuppingScoreCard name="花魁 7.0" scores={{ aroma: 9, flavor: 8.5, aftertaste: 8, acidity: 8.5, cleanliness: 8.5 }} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 五项分项
- [ ] 总分突出
- [ ] 精品标识
- [ ] 分项评语
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
