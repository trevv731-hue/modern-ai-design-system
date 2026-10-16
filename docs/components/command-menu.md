# 指令面板

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

macOS Spotlight 与现代极客工具的核心入口；支持键盘全局唤出，即时模糊过滤导航、操作与设置。

## 结构

- 全屏居中悬浮框
- 实时过滤输入栏
- 分组命令列表
- 底栏按键提示

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

全局 ⌘K / Ctrl+K 呼出；方向键 ↑/↓ 移动高亮；Enter 触发命令；Escape 立即退出。

## 使用细则

- 支持拼音、英文与快捷词模糊匹配。
- 按类别分组（如“常用动作”、“节点切换”、“系统偏好”）。
- 高亮条目保持高对比度与平滑跟随，不产生滚动撕裂。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-toolbar"><button class="ds-button ds-button--secondary" data-open-command>呼出指令面板 <kbd class="ds-key" style="margin-left:6px">⌘K</kbd></button></div>
```

## React 示例

```tsx
<CommandMenu open={open} onClose={() => setOpen(false)} items={commands} onSelect={run} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] Ctrl+K / ⌘K 均可唤出指令面板
- [ ] 上下方向键切换高亮项且不触发页面滚动
- [ ] 执行动作后自动关闭面板并给予结果反馈
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
