# Linear 通知收件箱行

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

在一行内给出变更摘要、来源对象与已读状态，支持批量标记而不逐条打开。

## 结构

- 行容器 (ds-inbox-row)
- 未读圆点与来源类型
- 变更摘要
- 时间与归档入口

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

Tab 进入每行；Space 多选；A 全部已读；Escape 退出多选。

## 使用细则

- 未读状态有文字或图标双重标识。
- 批量操作前说明影响条数。
- 归档可撤销。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-inbox-row" role="group" aria-label="通知行"><span class="ds-inbox-row__dot" aria-hidden="true">•</span><span class="ds-badge">状态变更</span><strong>AET-248 已标记为处理中</strong><span class="ds-inbox-row__time">10 分钟前</span><button type="button" class="ds-button ds-button--ghost">归档</button></div>
```

## React 示例

```tsx
<LinearNotificationInboxRow summary="AET-248 已标记为处理中" kind="状态变更" time="10 分钟前" unread />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 未读状态双重标识
- [ ] 批量操作说明影响条数
- [ ] 归档可撤销
- [ ] 键盘可完成批量操作
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
