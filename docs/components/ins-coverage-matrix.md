# 保障责任矩阵

[返回组件目录](../README.md) · 保险 / 理赔 · v3 新增

## 目的与边界

以矩阵对比各保障责任的保额、免赔额与优选标记。

## 结构

- 表头 (ds-coverage-matrix thead)
- 责任行 (tbody tr)
- 保额单元格
- 免赔额单元格
- 优选标记 (is-better)

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

表格容器可横向滚动；单元格聚焦时朗读完整内容。

## 使用细则

- 优选单元格以勾选标记加文字说明。
- 金额右对齐等宽展示。
- 免赔额为 0 时展示无免赔。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-coverage-matrix" role="region" aria-label="保障责任矩阵，4 项责任" tabindex="0"><table><caption class="ds-coverage-matrix__caption">平安福重疾险 · 保障责任</caption><thead><tr><th scope="col">责任</th><th scope="col">保额</th><th scope="col">免赔额</th></tr></thead><tbody><tr><th scope="row">重疾</th><td class="is-better">500,000</td><td>无免赔</td></tr><tr><th scope="row">轻症</th><td>150,000</td><td>无免赔</td></tr><tr><th scope="row">意外医疗</th><td>30,000</td><td>500</td></tr><tr><th scope="row">住院津贴</th><td>200 / 天</td><td>3 天</td></tr></tbody></table></div>
```

## React 示例

```tsx
<CoverageMatrixTable product="平安福重疾险" rows={[{ item: "重疾", amount: "500,000", deductible: "无免赔", better: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 优选勾选标记
- [ ] 金额右对齐
- [ ] 无免赔文字
- [ ] 横向滚动容器
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
