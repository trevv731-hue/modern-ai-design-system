# Raycast & Linear 全局悬浮指令面板

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

Raycast 与 Linear 风格的全局模态指令控制面板；集成模糊搜索输入框、分组操作列表、高亮选中行与右侧快捷键徽章。

## 结构

- 磨砂高斯模糊悬浮弹窗 (.ds-cmd-dialog)
- 顶部集成搜索栏 (.ds-cmd-dialog__search)
- 分组类别标题 (.ds-cmd-group-title)
- 快捷指令操作行 (.ds-cmd-row)
- 右侧快捷键提示 (.ds-kbd)

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

上下方向键在指令列表间导航；Enter 执行当前指令；Escape 关闭指令面板。

## 使用细则

- 面板采用 backdrop-filter: blur(24px) 拟真多层材质，配合深色大范围扩散阴影带来绝佳悬浮层级感。
- 选中行切换仅改变背景与强调色，不发生布局抖动或跳动。
- 输入框内置自动聚焦，键盘上下键循环选择高亮。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cmd-dialog" role="dialog" aria-modal="true" aria-label="全局指令搜索面板"><div class="ds-cmd-dialog__search"><span aria-hidden="true">⌘</span><input type="text" class="ds-cmd-dialog__input" placeholder="输入命令或搜索..." value="Deploy"></div><div class="ds-cmd-dialog__list"><span class="ds-cmd-group-title">建议操作</span><div class="ds-cmd-row is-active"><div class="ds-cmd-row__lead"><span>⚡</span><span>执行边缘集群热部署</span></div><span class="ds-kbd">⌘B</span></div><div class="ds-cmd-row"><div class="ds-cmd-row__lead"><span>🔍</span><span>搜索全局代码与符号...</span></div><span class="ds-kbd">⌘P</span></div><div class="ds-cmd-row"><div class="ds-cmd-row__lead"><span>🌙</span><span>切换界面主题配色</span></div><span class="ds-kbd">⌘T</span></div></div></div>
```

## React 示例

```tsx
<CommandPaletteModal onSelect={handleSelect} onClose={handleClose} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 弹窗在不同视口宽度下自动适配居中
- [ ] 高亮选中行背景与强调色柔和清晰
- [ ] 快捷键标签尺寸规范无折行
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
