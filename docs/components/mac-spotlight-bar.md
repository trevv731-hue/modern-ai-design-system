# macOS 悬浮指令搜索栏

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

macOS Sequoia 与 Raycast 风格的高斯模糊浮动全局指令搜索条；集成放大镜检索图标、即时输入、分类过滤微胶囊 (如 系统动作) 与键盘快捷键键帽提示 (如 ⌘K / ↵)。

## 结构

- 高斯模糊半透明背板 (.ds-spotlight-bar)
- 搜索放大镜微图标
- 无边框自适应输入区
- 右侧分类过滤胶囊与快捷键微键帽

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

全局 ⌘K / Ctrl+K 唤起；Enter 提交检索动作；Tab 切换过滤标签；Escape 退出关闭。

## 使用细则

- 采用 backdrop-filter: blur(20px) 极高深度高斯模糊，与底层内容完美隔离。
- 右侧快捷键键帽采用等宽字体与微立体边框，提示极速击键流。
- 宽度最大支持 540px，自适应移动端与桌面端屏幕。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spotlight-bar" role="search" aria-label="Spotlight 快速启动"><span class="ds-spotlight-bar__icon" aria-hidden="true">🔍</span><input type="text" class="ds-spotlight-bar__input" placeholder="搜索应用、文件或快捷指令…" value="Anycast 测速" aria-label="输入指令"><div class="ds-spotlight-bar__badges"><span class="ds-spotlight-bar__tag">系统动作</span><kbd class="ds-spotlight-bar__shortcut">⌘↵ 执行</kbd></div></div>
```

## React 示例

```tsx
<SpotlightSearchBar filterTag="系统动作" shortcut="⌘↵" onSubmit={runCommand} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 毛玻璃质感在深浅主题下均能看清文字
- [ ] 输入框文字高对比度且无外框突兀重绘
- [ ] 快捷键标签排版对齐
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
