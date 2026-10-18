# 营养成分面板

[返回组件目录](../README.md) · 餐饮 / 美食 · v3 新增

## 目的与边界

展示菜品热量与三大营养素构成及占比。

## 结构

- 热量汇总 (ds-nutrition__cal)
- 营养素条 (ds-nutrition__bar)
- 分段 (ds-nutrition__seg)
- 明细列表

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

面板可聚焦；每项有文字数值。

## 使用细则

- 占比按热量贡献而非重量。
- 高钠高糖有文字提示。
- 支持按 100g 与整份切换。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-nutrition" tabindex="0" role="group" aria-label="营养成分：热量 486 千卡，碳水 45%，蛋白 30%，脂肪 25%"><p class="ds-nutrition__cal"><strong>486</strong> 千卡 / 份</p><div class="ds-nutrition__bar" aria-hidden="true"><span class="ds-nutrition__seg is-carb" style="width:45%"></span><span class="ds-nutrition__seg is-protein" style="width:30%"></span><span class="ds-nutrition__seg is-fat" style="width:25%"></span></div><ul class="ds-nutrition__list"><li><span>碳水</span><em>54.6 g</em></li><li><span>蛋白</span><em>36.4 g</em></li><li><span>脂肪</span><em>13.5 g</em></li><li><span>钠</span><em>1,240 mg · 偏高</em></li></ul></div>
```

## React 示例

```tsx
<NutritionFactsPanel calories={486} carbs={54.6} protein={36.4} fat={13.5} sodium="1,240 mg" basis="份" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 占比按热量贡献
- [ ] 高钠高糖文字提示
- [ ] 支持 100g 整份切换
- [ ] 每项有文字数值
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
