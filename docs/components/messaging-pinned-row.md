# 置顶会话条

[返回组件目录](../README.md) · 通讯 · v3 新增

## 目的与边界

在会话顶部固定重要消息或公告，支持展开与取消置顶。

## 结构

- 置顶图标 (ds-pin-row__icon)
- 内容摘要
- 展开按钮
- 取消置顶

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

Tab 聚焦展开与取消按钮；Enter 执行。

## 使用细则

- 置顶数量给出上限提示。
- 取消置顶后不删除原消息。
- 系统公告类置顶标注来源。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pin-row"><span class="ds-pin-row__icon" aria-hidden="true">📌</span><div class="ds-pin-row__body"><strong>群公告</strong><p>本周五团建地点改为滨江绿地，报名接龙已开启</p></div><button type="button">展开</button><button type="button" aria-label="取消置顶">✕</button></div>
```

## React 示例

```tsx
<PinnedRow title="群公告" body="本周五团建地点改为滨江绿地" onExpand={expand} onUnpin={unpin} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 置顶数量有上限提示
- [ ] 取消置顶不删原消息
- [ ] 公告标注来源
- [ ] 操作按钮可键盘到达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
