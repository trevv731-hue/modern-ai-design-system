# 商品对比表

[返回组件目录](../README.md) · 电商 · v3 新增

## 目的与边界

并排比较多个型号的参数差异，帮助用户在购买前做出选择。

## 结构

- 参数行 (ds-product-compare)
- 列头型号
- 更优值单元格
- 行表头

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

表格语义导航；行表头使用 th scope="row"。

## 使用细则

- 更优值用图标加文字标注，不只用背景色。
- 参数分组可折叠，避免超长表格。
- 移动端允许横向滚动并固定首列。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<table class="ds-product-compare"><caption class="ds-sr-only">商品对比</caption><thead><tr><th scope="col">参数</th><th scope="col">标准版</th><th scope="col">专业版</th></tr></thead><tbody><tr><th scope="row">价格</th><td>¥299</td><td class="is-better">¥499</td></tr><tr><th scope="row">云同步</th><td>1 GB</td><td class="is-better">100 GB</td></tr><tr><th scope="row">协作人数</th><td>3 人</td><td class="is-better">不限</td></tr></tbody></table>
```

## React 示例

```tsx
<ProductCompareTable rows={[{ label: "价格", values: ["¥299", "¥499"], better: 1 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 更优值有图标加文字
- [ ] 行表头使用 scope
- [ ] 移动端可横向滚动
- [ ] 参数分组可折叠
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
