# Raycast 键盘全景快捷键指引浮层

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

Raycast 与 Linear 风格的全局模态快捷键速查面板；双列网格陈列系统核心动作指令、微凹键帽徽章与关闭控件。

## 结构

- 浮层容器外框 (.ds-hotkey-sheet)
- 顶部标题栏与关闭动作 (.ds-hotkey-sheet__head)
- 双列操作与快捷键网格 (.ds-hotkey-sheet__grid)
- 单行快捷键对照行 (.ds-hotkey-sheet__row)
- 微凸键帽标签组 (.ds-hotkey-sheet__keys, .ds-hotkey-sheet__key)

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

Tab 移动焦点；Escape 关闭面板；组合快捷键在当前页面全局有效。

## 使用细则

- 键帽标签利用微阴影 box-shadow: 0 1px 0 rgba(0,0,0,0.1) 还原真实键盘微机械质感。
- 双列等宽自适应布局，支持移动端单列自适应回退。
- 与整个界面的语义变量无缝联动，深浅模式下键盘字符始终清晰辨识。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-hotkey-sheet" role="dialog" aria-modal="true" aria-label="快捷键指引面板"><div class="ds-hotkey-sheet__head"><h4 class="ds-hotkey-sheet__title">全景键盘快捷键一览</h4><button type="button" class="ds-button ds-button--ghost" aria-label="关闭面板">×</button></div><div class="ds-hotkey-sheet__grid"><div class="ds-hotkey-sheet__row"><span>全局搜索面板</span><div class="ds-hotkey-sheet__keys"><kbd class="ds-hotkey-sheet__key">⌘</kbd><kbd class="ds-hotkey-sheet__key">K</kbd></div></div><div class="ds-hotkey-sheet__row"><span>打开侧边标签页</span><div class="ds-hotkey-sheet__keys"><kbd class="ds-hotkey-sheet__key">⌘</kbd><kbd class="ds-hotkey-sheet__key">B</kbd></div></div><div class="ds-hotkey-sheet__row"><span>切换深浅模式</span><div class="ds-hotkey-sheet__keys"><kbd class="ds-hotkey-sheet__key">⌘</kbd><kbd class="ds-hotkey-sheet__key">⇧</kbd><kbd class="ds-hotkey-sheet__key">D</kbd></div></div><div class="ds-hotkey-sheet__row"><span>唤出终端控制台</span><div class="ds-hotkey-sheet__keys"><kbd class="ds-hotkey-sheet__key">⌃</kbd><kbd class="ds-hotkey-sheet__key">&#96;</kbd></div></div></div></div>
```

## React 示例

```tsx
<RaycastHotkeyOverlay onClose={handleClose} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 双列键帽排版规整对齐
- [ ] 键帽微阴影与字符等宽居中
- [ ] Escape 键可正确关闭对话框
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
