# 快捷键矩阵画板

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Raycast、macOS 与 Warp 风格的快捷键速查速记画板；提供立体拟物键帽与分类清单。

## 结构

- 分组大类标题栏
- 操作说明名称
- 立体下沉按键帽 (Kbd Keycap)
- 组合按键序列

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

画板内容为静态展示；用户在操作系统中按下对应热键直接触发实际功能。

## 使用细则

- 键帽采用底部 2px 强化硬边与微妙投影，还原物理键盘真实按压手感。
- 鼠标悬停整行时键帽微幅浮动 (translateY(-1px))，提升交互愉悦感。
- 字体严格采用等宽字体 (ds-type-mono)，保证 ⌘, ⌥, ⇧, ⌃ 符号美观。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-kbd-matrix"><div class="ds-kbd-group"><div class="ds-kbd-group__title">全局操作</div><div class="ds-kbd-row"><span class="ds-kbd-row__label">唤起指令中心</span><span class="ds-kbd-combo"><kbd class="ds-kbd-key">⌘</kbd><kbd class="ds-kbd-key">K</kbd></span></div><div class="ds-kbd-row"><span class="ds-kbd-row__label">快速切换节点</span><span class="ds-kbd-combo"><kbd class="ds-kbd-key">⌘</kbd><kbd class="ds-kbd-key">P</kbd></span></div><div class="ds-kbd-row"><span class="ds-kbd-row__label">刷新连接延迟</span><span class="ds-kbd-combo"><kbd class="ds-kbd-key">⌘</kbd><kbd class="ds-kbd-key">R</kbd></span></div></div></div>
```

## React 示例

```tsx
<ShortcutCheatsheet categories={shortcutList} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 拟物键帽按压投影真实分明
- [ ] 等宽字符与修饰符号对齐规整
- [ ] 深浅模式下键帽对比度均满足标准
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
