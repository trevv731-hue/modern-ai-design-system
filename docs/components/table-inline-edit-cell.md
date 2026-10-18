# 行内编辑单元格

[返回组件目录](../README.md) · 表格 · v3 新增

## 目的与边界

在表格中直接编辑单元格内容，避免跳转独立编辑页。

## 结构

- 单元格 (ds-edit-cell)
- 编辑态输入
- 确认与取消
- 校验提示

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

Enter 或双击进入编辑；Enter 确认；Esc 取消；Tab 移动到下一单元格。

## 使用细则

- 编辑态有明确视觉区分。
- 校验失败时阻止确认并说明原因。
- 必填单元格进入编辑时自动全选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-edit-cell is-editing"><input value="¥899.00" aria-label="编辑价格"><div class="ds-edit-cell__actions"><button type="button" class="is-primary">确认</button><button type="button">取消</button></div></div>
```

## React 示例

```tsx
<InlineEditCell label="价格" value="¥899.00" editing onSubmit={save} onCancel={cancel} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 编辑态视觉明确
- [ ] 校验失败阻止确认
- [ ] 必填进入即全选
- [ ] Esc 取消且 Tab 移动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
