# 批量选择栏

[返回组件目录](../README.md) · 表格 · v3 新增

## 目的与边界

在多选后浮出批量操作栏，展示已选数量与可执行操作。

## 结构

- 已选计数 (ds-bulk-bar__count)
- 操作按钮组
- 全选当前页
- 清除选择

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

栏内按钮可 Tab 到达；Esc 清除选择。

## 使用细则

- 破坏性操作需二次确认。
- 操作后保留选择状态并播报结果。
- 已选数量支持跨页累计展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-bulk-bar" role="toolbar" aria-label="批量操作"><span class="ds-bulk-bar__count">已选 12 项</span><button type="button">标记完成</button><button type="button">移动到…</button><button type="button" class="is-danger">删除</button><button type="button" aria-label="清除选择">✕</button></div>
```

## React 示例

```tsx
<BulkSelectBar count={12} actions={["标记完成", "移动到…", "删除"]} onClear={clear} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 破坏性操作二次确认
- [ ] 操作后播报结果
- [ ] 跨页累计计数
- [ ] Esc 清除选择
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
