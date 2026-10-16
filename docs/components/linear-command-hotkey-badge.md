# Linear 风格实体微凹快捷键组合徽章

[返回组件目录](../README.md) · 通用 · CSS / HTML / React

## 目的与边界

Linear、Raycast 与 GitHub 风格的实体微凹立体机械快捷键组合行；具备独立上下光照渐变键帽底座、微加厚底边与中间连接符。

## 结构

- 快捷键组合容器 (.ds-keycap-combo)
- 独立键帽小胶囊 (.ds-keycap-cap)
- 键盘特殊符号与字母
- 键位间连接符 (.ds-keycap-sep)

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

提供完整可读可访问名称，屏幕阅读器按序列读出组合快捷键。

## 使用细则

- 键帽背景采用垂直微阶梯渐变与 2px 底边边框，重现机械键盘键帽的物理高度。
- 字体严格采用等宽字体（--ds-type-mono），符号居中平衡。
- 适合嵌入命令菜单、工具栏提示气泡、帮助手册与设置页面。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-keycap-combo" role="group" aria-label="快捷键组合 ⌘ ⇧ P"><kbd class="ds-keycap-cap">⌘</kbd><span class="ds-keycap-sep">+</span><kbd class="ds-keycap-cap">⇧</kbd><span class="ds-keycap-sep">+</span><kbd class="ds-keycap-cap">P</kbd></div>
```

## React 示例

```tsx
<KeycapComboBadge keys={["⌘", "⇧", "P"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 键帽微阴影与底部厚度立体感真实
- [ ] 等宽符号在不同缩放比下对齐良好
- [ ] 组合键文本可访问性无障碍完整
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
