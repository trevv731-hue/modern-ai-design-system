# 未读分隔线

[返回组件目录](../README.md) · 通讯 · v3 新增

## 目的与边界

在会话流中标出已读与未读的边界，方便用户定位新消息。

## 结构

- 分隔线 (ds-unread-line)
- 未读标签
- 消息计数

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

纯展示元素，不接收焦点；边界由读屏文字说明。

## 使用细则

- 首次进入时滚动到分隔线而非最新消息。
- 标签含未读条数。
- 全部读完后分隔线消失并说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-unread-line" role="separator"><span>以下 4 条未读</span></div>
```

## React 示例

```tsx
<UnreadDivider count={4} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 标签含未读条数
- [ ] 首次进入滚动到分隔线
- [ ] 读完后分隔消失
- [ ] 边界可被读屏说明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
