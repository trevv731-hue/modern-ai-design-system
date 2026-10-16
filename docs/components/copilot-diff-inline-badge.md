# GitHub Copilot 行内代码变更建议微标

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

GitHub Copilot、Cursor 与 Claude Code 风格的行内代码补全与差异修改建议操作浮条；包含增删行数统计（+14 -3）、采纳与拒绝快捷操作按键。

## 结构

- 等宽浮条微容器 (.ds-diff-badge)
- 新增与删除行数统计 (.ds-diff-badge__stat)
- 细垂直分割线 (.ds-diff-badge__divider)
- 快捷操作按钮组 (.ds-diff-badge__actions)
- 采纳与忽略彩色小按钮 (.ds-diff-badge__btn--accept, --reject)

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

Tab 在采纳和拒绝按钮间移动；Enter 或快捷键 Tab 采纳代码建议；Escape 忽略建议。

## 使用细则

- 绿色表示增行，红色表示删行，严格使用等宽数字，避免文本长度变化引起弹跳。
- 按钮采用对应半透明色（--ds-success-soft / --ds-danger-soft），保持视觉轻量不喧宾夺主。
- 适合代码编辑器行内提示、AI 补全浮层、Git 审查行内评论工具。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-diff-badge" role="group" aria-label="代码变更建议：增加 14 行，删除 3 行"><div class="ds-diff-badge__stat"><span class="ds-diff-badge__stat--add">+14</span><span class="ds-diff-badge__stat--del">−3</span></div><div class="ds-diff-badge__divider"></div><div class="ds-diff-badge__actions"><button type="button" class="ds-diff-badge__btn ds-diff-badge__btn--accept" aria-label="采纳建议">✓ 采纳</button><button type="button" class="ds-diff-badge__btn ds-diff-badge__btn--reject" aria-label="拒绝建议">× 忽略</button></div></div>
```

## React 示例

```tsx
<CopilotDiffInlineBadge additions={14} deletions={3} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 增删统计数字与按钮水平对齐
- [ ] 采纳拒绝按钮悬停明度微增
- [ ] 键盘回车可顺利触发操作
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
