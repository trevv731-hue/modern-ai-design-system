# 批量操作撤销

[返回组件目录](../README.md) · 表格 · v3 新增

## 目的与边界

在执行批量修改后提供限时撤销入口，降低误操作损失。

## 结构

- 提示条 (ds-undo-toast)
- 操作摘要
- 撤销按钮
- 倒计时进度

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

撤销按钮可聚焦；倒计时结束自动消失。

## 使用细则

- 撤销窗口不少于 8 秒。
- 摘要说明影响行数。
- 倒计时进度可视化。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-undo-toast" role="status"><span>已将 12 项标记为完成</span><button type="button">撤销</button><span class="ds-undo-toast__timer" aria-hidden="true"><i style="width:60%"></i></span></div>
```

## React 示例

```tsx
<BulkUndoToast summary="已将 12 项标记为完成" remaining={5} onUndo={undo} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 撤销窗口不少于 8 秒
- [ ] 摘要说明影响行数
- [ ] 倒计时进度可视化
- [ ] 超时自动消失
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
