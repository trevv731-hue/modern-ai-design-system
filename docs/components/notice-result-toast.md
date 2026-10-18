# 操作结果提示

[返回组件目录](../README.md) · 通知 · v3 新增

## 目的与边界

对用户操作给出即时反馈，支持成功、失败与撤销入口。

## 结构

- 状态图标 (ds-result-toast__icon)
- 结果文案
- 操作按钮
- 关闭
- 进度倒计时

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

toast 出现时焦点不强制转移；关闭按钮可聚焦。

## 使用细则

- 失败时给出重试入口。
- 可撤销操作保留撤销按钮数秒。
- 多个 toast 堆叠且最新在上。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-result-toast is-success" role="status"><span class="ds-result-toast__icon" aria-hidden="true">✓</span><span>已保存修改</span><button type="button">撤销</button><button type="button" aria-label="关闭提示">✕</button></div>
```

## React 示例

```tsx
<ResultToast tone="success" message="已保存修改" action="撤销" onAction={undo} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 失败有重试入口
- [ ] 可撤销操作保留撤销
- [ ] 堆叠最新在上
- [ ] 不强制抢焦点
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
