# GitHub Copilot 内联建议

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

在光标处以内联幽灵文本展示补全建议，并说明接受、拒绝与查看备选的方式。

## 结构

- 幽灵文本 (ds-inline-suggest)
- 接受提示键
- 备选切换入口
- 忽略入口

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

Tab 接受；Escape 拒绝；Alt+] 与 Alt+[ 切换备选。

## 使用细则

- 幽灵文本与真实代码视觉可区分，不误导为已输入内容。
- 拒绝后短时间内不再重复同一建议。
- 未提供来源时说明为自动补全。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-inline-suggest" role="status" aria-label="内联补全建议"><code>const retryCount = config.retry ?? 3;</code><span class="ds-inline-suggest__hint">Tab 接受 · Alt+] 下一个</span><button type="button" class="ds-button ds-button--ghost">忽略</button></div>
```

## React 示例

```tsx
<GithubCopilotInlineSuggest code="const retryCount = config.retry ?? 3;" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 幽灵文本与真实代码可区分
- [ ] 拒绝后不立即重复
- [ ] 说明为自动补全来源
- [ ] 键盘可接受与切换
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
