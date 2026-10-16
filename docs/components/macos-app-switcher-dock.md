# macOS ⌘Tab 悬浮毛玻璃应用切换面板

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

macOS 经典的 ⌘Tab 快捷应用切换器（App Switcher HUD）；大圆角深层亚克力毛玻璃背景、56px 高精图标单元、高亮选中外框与运行中绿色微点指示。

## 结构

- 大圆角居中悬浮底座 (.ds-mac-switcher)
- 56px 独立应用图标格 (.ds-mac-switcher__item)
- 应用运行状态指示小绿点 (.ds-mac-switcher__badge)
- 当前选定高亮外轮廓态 (.is-active)
- 悬停微缩放微交互

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

Tab 或方向键右在各运行中 App 间切换选中；Shift+Tab 或方向键左反向移动；Enter 切换至对应 App；Esc 退出面板。

## 使用细则

- 悬浮居中排布，选中项外轮廓包含 2px 高亮 outline 与强调背景色，视觉焦点极其明晰。
- 右下角绿点指示当前进程活动状态，重现 macOS 经典系统交互细节。
- 适合桌面客户端多任务管理、标签页快速跳转 HUD 及全屏快捷抽屉。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-mac-switcher" role="listbox" aria-label="macOS ⌘Tab 应用程序切换窗口"><div role="option" aria-selected="true" class="ds-mac-switcher__item is-active" title="Finder"><span>📁</span><span class="ds-mac-switcher__badge"></span></div><div role="option" aria-selected="false" class="ds-mac-switcher__item" title="Terminal"><span>⌨️</span><span class="ds-mac-switcher__badge"></span></div><div role="option" aria-selected="false" class="ds-mac-switcher__item" title="Xcode"><span>🛠️</span><span class="ds-mac-switcher__badge"></span></div><div role="option" aria-selected="false" class="ds-mac-switcher__item" title="Safari"><span>🧭</span><span class="ds-mac-switcher__badge"></span></div></div>
```

## React 示例

```tsx
<MacAppSwitcherHud />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 图标单元正方圆润排列整齐
- [ ] 运行中微绿点醒目不突兀
- [ ] 选中外框间距均匀
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
