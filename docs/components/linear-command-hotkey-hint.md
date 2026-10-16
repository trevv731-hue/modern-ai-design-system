# Linear & Raycast 浮动快捷键微提示 HUD

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

Linear 与 Raycast 底部浮动常驻快捷键引导胶囊（Hotkey Helper HUD）；以小号圆角微阴影按键展示当前视窗常用操作（搜索、新建工单、呼出帮助），视觉极轻且不抢夺主视觉。

## 结构

- 胶囊全圆角容器 (.ds-hotkey-hint)
- 组合提示子项 (.ds-hotkey-hint__item)
- 物理微微内凹键帽 (.ds-hotkey-hint__key)
- 点状微弱分隔符 (.ds-hotkey-hint__sep)
- 等宽加粗按键字形

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

无需直接交互；提示的快捷键（如 ⌘K、C、?）在全页面全局监听。

## 使用细则

- role="status" 声明为非侵入式微提示，不会打断屏幕阅读器主流程。
- 按键符号配合文字提示，无额外视觉歧义。
- 适合底部常驻状态条、命令面板底部操作栏、表单底部辅助区。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-hotkey-hint" role="status" aria-label="快捷键提示"><div class="ds-hotkey-hint__item"><span>搜索</span><kbd class="ds-hotkey-hint__key">⌘</kbd><kbd class="ds-hotkey-hint__key">K</kbd></div><span class="ds-hotkey-hint__sep" aria-hidden="true"></span><div class="ds-hotkey-hint__item"><span>新建工单</span><kbd class="ds-hotkey-hint__key">C</kbd></div><span class="ds-hotkey-hint__sep" aria-hidden="true"></span><div class="ds-hotkey-hint__item"><span>帮助</span><kbd class="ds-hotkey-hint__key">?</kbd></div></div>
```

## React 示例

```tsx
<LinearCommandHotkeyHint hints={[{ label: "搜索", keys: ["⌘", "K"] }, { label: "新建工单", keys: ["C"] }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 按键高光微内阴影层次清晰
- [ ] 点状分隔符垂直居中对齐
- [ ] 胶囊整体微弱悬浮投影自然
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
