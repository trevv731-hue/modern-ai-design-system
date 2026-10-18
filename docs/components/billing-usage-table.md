# 用量明细表

[返回组件目录](../README.md) · 计费 · v3 新增

## 目的与边界

按计费项展示本期用量、单价与小计，供用户核对账单。

## 结构

- 表头 (ds-usage-table)
- 计费项行
- 用量
- 单价
- 小计
- 合计行

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

表格语义导航；行表头 th scope="row"；合计行加粗。

## 使用细则

- 超量部分单独标注阶梯价。
- 免费额度行置灰并注明“含在套餐内”。
- 支持导出 CSV 核对。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<table class="ds-usage-table"><caption class="ds-sr-only">本期用量明细</caption><thead><tr><th scope="col">计费项</th><th scope="col">用量</th><th scope="col">单价</th><th scope="col">小计</th></tr></thead><tbody><tr><th scope="row">API 调用</th><td>1,240,000</td><td>¥0.002</td><td>¥2,480.00</td></tr><tr><th scope="row">存储</th><td>381 GB</td><td>¥0.12/GB</td><td>¥45.72</td></tr><tr class="is-free"><th scope="row">团队席位（含 10 个）</th><td>10</td><td>—</td><td>¥0.00</td></tr></tbody><tfoot><tr><th scope="row">合计</th><td colspan="2"></td><td>¥2,525.72</td></tr></tfoot></table>
```

## React 示例

```tsx
<UsageTable rows={[{ item: "API 调用", usage: "1,240,000", unitPrice: "¥0.002", subtotal: "¥2,480.00" }]} total="¥2,525.72" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 超量标注阶梯价
- [ ] 免费额度行置灰注明
- [ ] 支持导出 CSV
- [ ] 合计行加粗
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
