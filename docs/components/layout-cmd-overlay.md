# 命令面板遮罩

[返回组件目录](../README.md) · 布局 · v3 新增

## 目的与边界

以遮罩加居中面板的形式提供全局命令入口，支持模糊搜索与分组。

## 结构

- 遮罩 (ds-cmd-overlay)
- 面板
- 搜索输入
- 分组结果
- 快捷键提示

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

打开时焦点落在搜索框；上下方向键移动；回车执行；Esc 关闭。

## 使用细则

- 最近使用置顶展示。
- 每项右侧展示对应快捷键。
- 无匹配时给出最接近的建议。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cmd-overlay" role="presentation"><div class="ds-cmd-overlay__panel" role="dialog" aria-modal="true" aria-label="命令面板"><input type="search" value="新建" aria-label="搜索命令"><ul role="listbox" aria-label="命令结果"><li role="option" aria-selected="true"><span aria-hidden="true">📄</span>新建文档<kbd>⌘N</kbd></li><li role="option" aria-selected="false"><span aria-hidden="true">📁</span>新建项目<kbd>⌘⇧N</kbd></li></ul></div></div>
```

## React 示例

```tsx
<CommandOverlay query="新建" items={[{ label: "新建文档", shortcut: "⌘N" }]} active={0} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 打开焦点在搜索框
- [ ] 每项展示快捷键
- [ ] 最近使用置顶
- [ ] 无匹配给最接近建议
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
