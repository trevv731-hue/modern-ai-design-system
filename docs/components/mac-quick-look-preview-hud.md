# macOS 空格键快速查看悬浮预览 HUD

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

macOS Finder 空格键快速查看悬浮卡片（Quick Look Floating Preview HUD）；带有深色文件视窗预览、半透明像素分辨率标签、文件类型大小元数据行与右下角快速打开方式动作按钮。

## 结构

- 高景深圆角悬浮视窗 (.ds-quick-look)
- 大号文件类型图标视窗 (.ds-quick-look__preview)
- 半透明高反差规格徽标 (.ds-quick-look__meta-badge)
- 底部元数据双行排版 (.ds-quick-look__info)
- 主操作动作按钮 (.ds-quick-look__action)

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

Space 键快速打开/关闭；ArrowDown 预览同目录下一个文件；Enter 触发打开方式。

## 使用细则

- role="dialog" 带有 aria-modal="false" 与清晰的 aria-label 报读文件名与规格。
- 支持 Escape 退出预览并将焦点归还至原文件列表行。
- 适合桌面文件管理器、设计资源库、附件预览抽屉与云盘检索列表。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-quick-look" role="dialog" aria-modal="false" aria-label="快速查看: Architecture-2026.fig"><div class="ds-quick-look__preview"><span class="ds-quick-look__icon" aria-hidden="true">🎨</span><span class="ds-quick-look__meta-badge">3840 × 2160</span></div><div class="ds-quick-look__info"><div><div class="ds-quick-look__title">Architecture-2026.fig</div><div class="ds-quick-look__sub">Figma Document · 42.8 MB</div></div><button type="button" class="ds-quick-look__action">打开方式</button></div></div>
```

## React 示例

```tsx
<MacQuickLookPreviewHud fileName="Architecture-2026.fig" fileType="Figma Document" fileSize="42.8 MB" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 大号图标投影温和
- [ ] 右下角胶囊磨砂透明自然
- [ ] 按钮点击态微透明反馈
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
