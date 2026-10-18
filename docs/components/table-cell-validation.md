# 单元格校验

[返回组件目录](../README.md) · 表格 · v3 新增

## 目的与边界

在表格输入中即时校验格式与范围，错误单元格给出可操作提示。

## 结构

- 单元格 (ds-cell-valid)
- 错误图标
- 错误说明
- 修正建议

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

错误单元格聚焦时朗读说明；Tab 可移动到下一个错误。

## 使用细则

- 错误说明具体到规则，如“需为 1-9999 的整数”。
- 一键应用修正建议。
- 全部错误汇总在提交按钮旁。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cell-valid is-error"><input value="0" aria-label="库存" aria-invalid="true"><span class="ds-cell-valid__msg">需为 1-9999 的整数</span><button type="button">修正为 1</button></div>
```

## React 示例

```tsx
<CellValidation label="库存" value="0" error="需为 1-9999 的整数" suggestion="修正为 1" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 错误说明具体到规则
- [ ] 一键应用修正建议
- [ ] 错误汇总在提交旁
- [ ] Tab 跳到下一错误
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
