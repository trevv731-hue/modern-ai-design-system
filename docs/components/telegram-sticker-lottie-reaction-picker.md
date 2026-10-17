# Telegram 动态表情贴纸阻尼折叠抽屉面板

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 Telegram 贴纸与动画表情浮动选择面板，提供即时搜索框、最近使用快捷贴纸栏与悬浮弹簧微缩放网格。

## 结构

- 面板主视窗 (ds-sticker-picker)
- 搜索过滤栏 (ds-sticker-picker__header)
- 搜索输入框 (ds-sticker-picker__search)
- 最近常用快捷栏 (ds-sticker-picker__recents)
- 贴纸网格陈列区 (ds-sticker-picker__grid)
- 单项贴纸按钮 (ds-sticker-picker__item)

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

Tab 键在搜索框、最近项与网格间移动；方向键遍历贴纸；Enter 选择贴纸并发送。

## 使用细则

- 鼠标悬停或轻触贴纸时触发微弹簧放大 (scale 1.22)，提供极具趣味性的触感反馈。
- 顶部设有快速搜索框与最近使用栏，大幅缩短用户寻找目标表情的时间。
- 整体采用圆角浮层设计与细腻边缘阴影，可方便地锚定在聊天输入框上方。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sticker-picker" role="dialog" aria-label="贴纸与表情选择器"><div class="ds-sticker-picker__header"><input type="search" class="ds-sticker-picker__search" placeholder="搜索贴纸或表情..." aria-label="搜索表情贴纸" id="preview-b3-sticker-search"></div><div class="ds-sticker-picker__recents" aria-label="最近常用"><button type="button" class="ds-sticker-picker__recent-btn" aria-label="最近使用：点赞">👍</button><button type="button" class="ds-sticker-picker__recent-btn" aria-label="最近使用：火箭">🚀</button><button type="button" class="ds-sticker-picker__recent-btn" aria-label="最近使用：爱心">❤️</button><button type="button" class="ds-sticker-picker__recent-btn" aria-label="最近使用：派对">🎉</button></div><div class="ds-sticker-picker__grid" role="listbox"><button type="button" class="ds-sticker-picker__item" role="option">🔥</button><button type="button" class="ds-sticker-picker__item" role="option">✨</button><button type="button" class="ds-sticker-picker__item" role="option">💯</button><button type="button" class="ds-sticker-picker__item" role="option">👏</button><button type="button" class="ds-sticker-picker__item" role="option">⚡</button><button type="button" class="ds-sticker-picker__item" role="option">💡</button><button type="button" class="ds-sticker-picker__item" role="option">🏆</button><button type="button" class="ds-sticker-picker__item" role="option">💎</button></div></div>
```

## React 示例

```tsx
<TelegramStickerLottieReactionPicker onSelect={(sticker) => console.log(sticker)} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 指针移过贴纸网格时动画柔和顺畅，无重排或掉帧
- [ ] 输入搜索词能过滤表情，点击最近常用项能立即触发回调
- [ ] 高对比度与减少动效模式下贴纸边界清晰且无缩放
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
