# Arc 命令栏胶囊

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

把当前可执行命令压缩成一处可搜索入口，用键盘直达而不依赖菜单层级。

## 结构

- 胶囊外壳 (ds-arc-cmd)
- 搜索输入框
- 结果行 (ds-arc-cmd__row)
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

Cmd+T 打开；输入过滤；上下方向键选择；Enter 执行；Escape 关闭。

## 使用细则

- 空结果给出可执行建议，不展示空白列表。
- 结果行显示命令名与快捷键，不把快捷键读进名称。
- 关闭后焦点回到原页面控件。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-arc-cmd" role="search"><input id="arc-cmd-input" type="search" placeholder="搜索命令或页面…" aria-label="搜索命令"><ul class="ds-arc-cmd__list"><li class="ds-arc-cmd__row"><span>新建分屏</span><kbd class="ds-key">⌘</kbd><kbd class="ds-key">⇧</kbd><kbd class="ds-key">N</kbd></li></ul></div>
```

## React 示例

```tsx
<ArcCommandBarPill commands={[{ label: "新建分屏", keys: ["⌘", "⇧", "N"] }]} onRun={run} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 空结果给出可操作建议
- [ ] 快捷键与命令名分列展示
- [ ] 关闭后焦点回到原控件
- [ ] 键盘可完成搜索与执行
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
