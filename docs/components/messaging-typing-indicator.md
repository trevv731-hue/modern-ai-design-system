# 正在输入指示器

[返回组件目录](../README.md) · 通讯 · v3 新增

## 目的与边界

在对端正在输入时给出轻量反馈，避免用户重复发送。

## 结构

- 指示器 (ds-typing)
- 动画点
- 对方名称

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

状态变化通过 live region 礼貌播报。

## 使用细则

- 单点动画不超过 3 个圆点。
- 群聊多人输入时合并为一条提示。
- 尊重减少动效偏好，退化为静态文字。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<span class="ds-typing" role="status"><span class="ds-typing__dots" aria-hidden="true"><i></i><i></i><i></i></span>林晓 正在输入…</span>
```

## React 示例

```tsx
<TypingIndicator name="林晓" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 动画点不超过 3 个
- [ ] 群聊多人输入合并提示
- [ ] 减少动效时退化静态文字
- [ ] 状态播报礼貌不打断
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
