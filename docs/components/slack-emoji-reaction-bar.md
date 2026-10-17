# Slack 表情回应条

[返回组件目录](../README.md) · 协作 / 团队 · v3 新增

## 目的与边界

在消息下方聚合表情回应与数量，支持一键增减，并保留完整回应者名单。

## 结构

- 回应条容器 (ds-reaction-bar)
- 回应胶囊 (ds-reaction-bar__pill)
- 添加回应按钮
- 回应者名单弹层

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

Tab 进入每个回应胶囊；Enter 切换自己的回应；状态变化用 aria-pressed 表达。

## 使用细则

- 数量为 0 时移除胶囊，不保留空占位。
- 是否包含自己在内用 aria-pressed 明确表达。
- 回应者名单完整可查，不因为折叠丢失。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-reaction-bar" role="group" aria-label="表情回应"><button type="button" class="ds-reaction-bar__pill" aria-pressed="true" aria-label="👍 3 人，含你">👍 3</button><button type="button" class="ds-reaction-bar__pill" aria-pressed="false" aria-label="🎉 1 人">🎉 1</button><button type="button" class="ds-reaction-bar__add" aria-label="添加表情回应">☺+</button></div>
```

## React 示例

```tsx
<SlackEmojiReactionBar reactions={[{ emoji: "👍", count: 3, mine: true }, { emoji: "🎉", count: 1 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 计数为 0 时胶囊自动移除
- [ ] 自己的回应状态可被辅助技术识别
- [ ] 回应者名单完整可达
- [ ] 重复操作不会重复计数
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
