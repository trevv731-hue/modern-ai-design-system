# 矩形树图块格

[返回组件目录](../README.md) · 数据 · v3 新增

## 目的与边界

用面积表达占比，适合展示磁盘、流量或预算的构成。

## 结构

- 块格容器 (ds-treemap)
- 分类区块
- 占比标签
- 悬浮明细

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

静态图表；提供等效列表与数值。

## 使用细则

- 区块面积与真实数值成比例，不等比误导。
- 面积过小的分类合并为“其他”。
- 悬浮显示具体数值与占比。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-treemap" role="img" aria-label="流量构成矩形树图"><span class="ds-treemap__block" style="flex:3">API 62%</span><span class="ds-treemap__block" style="flex:1">静态 21%</span><span class="ds-treemap__block" style="flex:1">其他 17%</span></div>
```

## React 示例

```tsx
<TreemapBlockGrid blocks={[{ label: "API", ratio: 62 }, { label: "静态", ratio: 21 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 面积与数值成比例
- [ ] 小分类合并为其他
- [ ] 悬浮显示数值与占比
- [ ] 等效列表可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
