# macOS & Raycast 悬浮模糊全局指令控制台

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

Raycast 与 Spotlight 风格的全局浮动指令面板；支持模糊搜索、分类动作流（建议、导航、工具）、选中项高光指示、热键胶囊（↵ 打开、⌘K 动作）与底部上下文动作栏。

## 结构

- 毛玻璃浮动底盘 (.ds-raycast-palette)
- 搜索输入框与微图标 (.ds-raycast-palette__input-box)
- 分组标题与结果列表 (.ds-raycast-palette__list, .ds-raycast-palette__group-title)
- 结果项、图标与快捷键标签 (.ds-raycast-palette__item, .ds-raycast-palette__item-icon, .ds-raycast-palette__kbd)
- 底部操作指示栏 (.ds-raycast-palette__footer)

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

Tab 或上下方向键在指令列表间循环移动；Enter 执行选中动作；Cmd+K 展开辅助动作；Escape 关闭指令台。

## 使用细则

- 容器具备 role="combobox" 与 aria-expanded，列表项具备 role="option" 与 aria-selected。
- 输入框即时过滤结果，无匹配时展示清晰空状态。
- 底部热键与操作在深浅色主题下保持高对比度。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-raycast-palette" role="dialog" aria-label="全局指令控制台"><div class="ds-raycast-palette__input-box"><span aria-hidden="true">🔍</span><input type="search" placeholder="Type a command or search..." aria-label="搜索指令" id="preview-more-palette-input"></div><ul class="ds-raycast-palette__list" role="listbox"><li class="ds-raycast-palette__group-title" role="presentation">Suggested</li><li class="ds-raycast-palette__item is-selected" role="option" aria-selected="true"><div class="ds-raycast-palette__item-left"><span class="ds-raycast-palette__item-icon">⚡</span><span>Open Modern AI Design System</span></div><kbd class="ds-raycast-palette__kbd">↵</kbd></li><li class="ds-raycast-palette__item" role="option" aria-selected="false"><div class="ds-raycast-palette__item-left"><span class="ds-raycast-palette__item-icon">🎨</span><span>Toggle Dark / Light Theme</span></div><kbd class="ds-raycast-palette__kbd">⌘T</kbd></li><li class="ds-raycast-palette__item" role="option" aria-selected="false"><div class="ds-raycast-palette__item-left"><span class="ds-raycast-palette__item-icon">📋</span><span>Copy CSS Variables Token</span></div><kbd class="ds-raycast-palette__kbd">⌘C</kbd></li></ul><div class="ds-raycast-palette__footer"><span>Raycast Core v2.4</span><div class="ds-raycast-palette__footer-actions"><span>Open <kbd class="ds-raycast-palette__kbd">↵</kbd></span><span>Actions <kbd class="ds-raycast-palette__kbd">⌘K</kbd></span></div></div></div>
```

## React 示例

```tsx
<MacOSRaycastCommandPalette isOpen={true} query="" onSelect={() => {}} onClose={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 上下方向键导航与 Enter 执行反馈明确
- [ ] 选项选中状态与热键标签对比度合格
- [ ] 支持 Escape 键一键关闭并交还焦点
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
