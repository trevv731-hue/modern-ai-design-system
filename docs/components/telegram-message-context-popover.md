# Telegram & Meta 消息长按快捷动作浮动菜单

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

即时通讯应用中长按或右键消息唤起的浮动动作卡片（Message Context Popover）；包含回复、转发、复制、置顶、翻译与危险删除操作，带有 Apple 物理弹性弹出动画与微图标排版。

## 结构

- 毛玻璃浮动菜单外壳 (.ds-msg-context-menu)
- 菜单操作项 (.ds-msg-context-menu__item, .ds-msg-context-menu__item.is-danger)
- 操作图标与文字 (.ds-msg-context-menu__item-left)
- 键盘快捷键提示 (.ds-msg-context-menu__shortcut)

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

方向键上下浏览操作；Enter 激活操作；Escape 快速关闭菜单并将焦点返还消息。

## 使用细则

- 菜单具有 role="menu"，每项具有 role="menuitem"。
- 危险操作（如删除）使用 danger 警示色，且与常规操作保持合理间距。
- 弹出位置自适应靠近被触发消息气泡边缘。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-msg-context-menu" role="menu" aria-label="消息快捷操作"><button type="button" class="ds-msg-context-menu__item" role="menuitem"><div class="ds-msg-context-menu__item-left"><span>↩</span><span>Reply</span></div><span class="ds-msg-context-menu__shortcut">⌘R</span></button><button type="button" class="ds-msg-context-menu__item" role="menuitem"><div class="ds-msg-context-menu__item-left"><span>📋</span><span>Copy Text</span></div><span class="ds-msg-context-menu__shortcut">⌘C</span></button><button type="button" class="ds-msg-context-menu__item" role="menuitem"><div class="ds-msg-context-menu__item-left"><span>📌</span><span>Pin Message</span></div><span class="ds-msg-context-menu__shortcut">⌘P</span></button><button type="button" class="ds-msg-context-menu__item is-danger" role="menuitem"><div class="ds-msg-context-menu__item-left"><span>🗑</span><span>Delete</span></div><span class="ds-msg-context-menu__shortcut">⌫</span></button></div>
```

## React 示例

```tsx
<TelegramMessageContextPopover isOpen={true} onAction={() => {}} onClose={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 菜单弹出动效利落平滑
- [ ] 快捷键标识等宽对齐
- [ ] 删除危险动作红字警示明确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
