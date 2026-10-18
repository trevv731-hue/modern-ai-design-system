# 大厅取号卡

[返回组件目录](../README.md) · 政务服务 / 一网通办 · v3 新增

## 目的与边界

展示政务大厅现场取号的排队信息与预计等待时间。

## 结构

- 窗口类型 (ds-queue-ticket__type)
- 号码 (ds-queue-ticket__no)
- 前方等待 (ds-queue-ticket__waiting)
- 预计时间 (ds-queue-ticket__eta)

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

卡片可聚焦取消取号；临近叫号以 status 语义播报。

## 使用细则

- 号码为主视觉大字。
- 前方等待人数与预计时间文字展示。
- 过号红色并提示重新取号。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-queue-ticket is-near" tabindex="0" role="status" aria-label="取号卡，综合受理窗口，号码 A038，前方等待 2 人，预计 8 分钟后叫号，临近"><div class="ds-queue-ticket__head"><strong class="ds-queue-ticket__type">综合受理窗口</strong><span class="ds-queue-ticket__no">A038</span></div><p class="ds-queue-ticket__waiting">前方等待 2 人</p><span class="ds-queue-ticket__eta">预计 8 分钟后叫号</span></article>
```

## React 示例

```tsx
<QueueTicketCard type="综合受理窗口" no="A038" waiting={2} eta={8} state="near" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 号码主视觉
- [ ] 等待人数
- [ ] 预计时间
- [ ] 过号提示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
