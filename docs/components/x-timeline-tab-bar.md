# X 时间线标签栏

[返回组件目录](../README.md) · 消费端媒体 · v3 新增

## 目的与边界

在“为你推荐”和“正在关注”之间切换同一区域内容，保持当前位置不被刷新。

## 结构

- 标签栏容器 (ds-xtabs)
- 标签项 (ds-xtabs__tab)
- 活动指示线
- 未读标记

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

左右方向键切换；Enter 激活；aria-selected 与 aria-current 同步。

## 使用细则

- 切换标签保留滚动位置，不跳回顶部。
- 未读标记有数字或文本，不只用圆点。
- 标签数量固定，不随内容动态增减。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-xtabs" role="tablist" aria-label="时间线"><button type="button" class="ds-xtabs__tab" role="tab" aria-selected="true">为你推荐</button><button type="button" class="ds-xtabs__tab" role="tab" aria-selected="false">正在关注<span class="ds-xtabs__badge">12</span></button></div>
```

## React 示例

```tsx
<XTimelineTabBar tabs={[{ id: "for-you", label: "为你推荐" }, { id: "following", label: "正在关注", unread: 12 }]} active="for-you" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 切换后滚动位置保留
- [ ] 未读标记包含数量
- [ ] 标签数量固定
- [ ] 键盘可切换标签
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
