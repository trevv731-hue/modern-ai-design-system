# 对话框

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

需要集中注意或确认的短任务，优先采用原生 dialog。

## 结构

- 可读标题
- 正文
- 主要/取消动作
- 可访问关闭按钮

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

打开后焦点进入；Tab 留在模态范围；Escape 关闭；关闭后恢复触发按钮焦点。

## 使用细则

- 删除等危险场景把取消作为默认焦点。
- 长设置流程使用页面而不是不断堆叠弹窗。
- dialog 使用 showModal，禁止仅以 display:block 伪造模态。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<button class="ds-button ds-button--secondary" data-open-dialog>打开对话框</button>
```

## React 示例

```tsx
<Dialog open={open} onClose={() => setOpen(false)} title="确认操作">{content}</Dialog>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 背景不可交互
- [ ] 标题可被读出
- [ ] Escape 和关闭按钮都可用
- [ ] 焦点返回触发按钮
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
