# 表情回应栏

[返回组件目录](../README.md) · 通讯 · v3 新增

## 目的与边界

对单条消息快速添加表情回应，并展示已有回应的分布。

## 结构

- 添加入口 (ds-emoji-bar__add)
- 回应分布
- 回应计数
- 我的回应

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

回应按钮可聚焦；计数变化通过 live region 播报。

## 使用细则

- 我的回应高亮且可再次点击取消。
- 同类回应合并计数，不重复铺开。
- 常用表情置顶但不遮挡消息内容。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-emoji-bar" role="group" aria-label="表情回应"><button type="button" class="ds-emoji-bar__add" aria-label="添加回应">＋</button><button type="button" class="is-mine">👍 3</button><button type="button">🎉 1</button></div>
```

## React 示例

```tsx
<EmojiBar reactions={[{ emoji: "👍", count: 3, mine: true }, { emoji: "🎉", count: 1 }]} onAdd={pickEmoji} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 我的回应可取消
- [ ] 同类回应合并计数
- [ ] 计数变化有播报
- [ ] 添加入口有可读名称
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
