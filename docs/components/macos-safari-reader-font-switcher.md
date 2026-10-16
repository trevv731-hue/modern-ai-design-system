# Safari 阅读器字体与版式选择微面板

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

macOS 与 iOS Safari 阅读器（Reader Mode）顶栏点击弹出字体与纸张配色选择面板（Reader Typographic Font & Theme Switcher）；顶部四颗圆形纸张底色药丸（白纸、羊皮纸、深灰、夜间纯黑）及经典高质量排版字体列表单选。

## 结构

- 规整浮动气泡容器 (.ds-safari-font-switcher)
- 顶部四色圆形纸质主题选择药丸 (.ds-safari-font-switcher__themes, .ds-safari-font-switcher__pill)
- 垂直经典阅读字体列表项 (.ds-safari-font-switcher__fonts, .ds-safari-font-switcher__item)
- 选中状态高亮浅底与右侧对勾标记 (.is-selected)
- 符合人机工程学的舒适行高与触控热区

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

ArrowDown / ArrowUp 切换字体；Enter 选中当前字体或主题；Escape 关闭面板。

## 使用细则

- 具备 role="dialog" 与 aria-label 说明 Safari 阅读器字体与版式面板。
- 四色主题药丸均配备明确无障碍标签，对勾状态清晰可感知。
- 适合电子书阅读器、文档沉浸模式、富文本排版定制工具。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-safari-font-switcher" role="dialog" aria-label="Safari 阅读器字体与版式面板"><div class="ds-safari-font-switcher__themes"><button type="button" class="ds-safari-font-switcher__pill is-active" style="background-color:#ffffff" aria-label="主题：白纸"></button><button type="button" class="ds-safari-font-switcher__pill" style="background-color:#fbf0d9" aria-label="主题：羊皮纸"></button><button type="button" class="ds-safari-font-switcher__pill" style="background-color:#4a4a4c" aria-label="主题：深灰"></button><button type="button" class="ds-safari-font-switcher__pill" style="background-color:#1c1c1e" aria-label="主题：夜间"></button></div><div class="ds-safari-font-switcher__fonts"><button type="button" class="ds-safari-font-switcher__item is-selected"><span>San Francisco</span><span>✓</span></button><button type="button" class="ds-safari-font-switcher__item"><span>New York (Serif)</span></button><button type="button" class="ds-safari-font-switcher__item"><span>Charter</span></button></div></div>
```

## React 示例

```tsx
<MacSafariReaderFontSwitcher currentFont="San Francisco" currentTheme="white" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四色主题圆点排列整齐
- [ ] 字体列表紧凑易点
- [ ] 当前字体选中带浅色底与勾号
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
