# Telegram 沉浸式多会话分组选项卡栏

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 Telegram 桌面端与移动端核心的会话文件夹标签栏，支持横向平滑滚动、带角标未读计数、静音分组弱化区分与激活底线平滑滑移。

## 结构

- 横向滚动栏容器 (ds-folder-tabs)
- 分类标签项 (ds-folder-tabs__tab)
- 未读计数胶囊 (ds-folder-tabs__badge)
- 静音标记 (is-muted)
- 激活滑块底线 (::after)

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

ArrowLeft/ArrowRight 在分类间横向切换；Home 移至首项，End 移至末项。

## 使用细则

- 未读角标自动区分正常提醒（高亮背景）与免打扰静音群组（灰色弱化背景）。
- 标签栏采用隐藏滚动条设计，支持触摸手势平滑横向拖拽。
- 选中标签下方显示 2px 品牌色圆角指示线条，切换时带有流畅的水平滑动感。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-folder-tabs" role="tablist" aria-label="会话分组标签"><button type="button" class="ds-folder-tabs__tab is-active" role="tab" aria-selected="true"><span>全部会话</span><span class="ds-folder-tabs__badge">14</span></button><button type="button" class="ds-folder-tabs__tab" role="tab" aria-selected="false"><span>个人私聊</span><span class="ds-folder-tabs__badge">3</span></button><button type="button" class="ds-folder-tabs__tab" role="tab" aria-selected="false"><span>工作群组</span><span class="ds-folder-tabs__badge is-muted">8</span></button><button type="button" class="ds-folder-tabs__tab" role="tab" aria-selected="false"><span>频道广播</span><span class="ds-folder-tabs__badge is-muted">26</span></button></div>
```

## React 示例

```tsx
<TelegramFolderTabBadgeStrip tabs={[{ id: "all", label: "全部会话", count: 14 }]} onTabSelect={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 切换标签时对应未读角标颜色随之自适应联动
- [ ] 免打扰静音状态角标对比度符合可读性要求
- [ ] 无障碍角色设定为 tablist，并带有正确的 aria-selected 标识
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
