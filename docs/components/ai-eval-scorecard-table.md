# AI 评测记分表

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

用固定测试集对比各模型或提示词版本的表现，给出可复现的分数与差异。

## 结构

- 表格外框 (ds-scorecard)
- 行：模型或版本
- 列：各项指标
- 差异标注

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

表格可横向滚动并可通过键盘滚动；表头使用 th scope。

## 使用细则

- 写明测试集名称与样本量，不给无来源的分数。
- 差异用数值和方向同时表达。
- 运行失败的单元格显示失败原因，不留空白。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-scorecard" tabindex="0" aria-label="评测记分表"><table class="ds-table"><caption class="ds-sr-only">评测结果</caption><thead><tr><th scope="col">版本</th><th scope="col">准确率</th><th scope="col">延迟</th></tr></thead><tbody><tr><td>v2.3</td><td>86% (+4%)</td><td>820 ms</td></tr><tr><td>v2.2</td><td>82%</td><td>910 ms</td></tr></tbody></table></div>
```

## React 示例

```tsx
<AIEvalScorecardTable rows={[{ label: "v2.3", accuracy: "86% (+4%)", latency: "820 ms" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 标明测试集与样本量
- [ ] 差异同时给出数值与方向
- [ ] 失败单元格写明原因
- [ ] 表格可通过键盘滚动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
