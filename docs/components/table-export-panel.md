# 导出面板

[返回组件目录](../README.md) · 表格 · v3 新增

## 目的与边界

在导出前选择格式、字段范围与数据处理方式。

## 结构

- 格式选择 (ds-export-panel__format)
- 字段清单
- 行数范围
- 导出按钮

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

面板内 Tab 循环；Esc 关闭；回车执行导出。

## 使用细则

- 默认仅导出当前筛选结果。
- 字段清单支持全选与反选。
- 大导出给出预计行数与耗时提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-export-panel" role="dialog" aria-modal="true" aria-label="导出数据"><p class="ds-export-panel__scope">导出当前筛选结果：1,240 行</p><div class="ds-export-panel__format" role="radiogroup" aria-label="格式"><label><input type="radio" name="fmt" checked><span>CSV</span></label><label><input type="radio" name="fmt"><span>Excel</span></label><label><input type="radio" name="fmt"><span>JSON</span></label></div><div class="ds-export-panel__fields"><label><input type="checkbox" checked><span>商品名称</span></label><label><input type="checkbox" checked><span>价格</span></label><label><input type="checkbox"><span>库存</span></label></div><button type="button" class="is-primary">导出 1,240 行</button></div>
```

## React 示例

```tsx
<ExportPanel scope="1,240 行" formats={["CSV", "Excel", "JSON"]} fields={[{ label: "商品名称", on: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 默认导出筛选结果
- [ ] 字段支持全选反选
- [ ] 大导出给行数耗时提示
- [ ] 回车执行导出
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
