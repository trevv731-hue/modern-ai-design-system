# 排队等待卡

[返回组件目录](../README.md) · 客服 / 工单 · v3 新增

## 目的与边界

展示排队位置、预计等待时间与取消入口。

## 结构

- 排队位置 (ds-queue-wait__pos)
- 预计等待 (ds-queue-wait__eta)
- 进度条 (ds-queue-wait__bar)
- 取消按钮

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

预计时间使用 aria-live 更新；取消按钮可达。

## 使用细则

- 位置与预计时间实时刷新。
- 等待过久给留言入口。
- 取消排队需二次确认。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-queue-wait" role="status" aria-label="排队中，前面还有 3 位，预计等待 4 分钟，今日共 12 位"><strong class="ds-queue-wait__pos">第 3 位</strong><p class="ds-queue-wait__eta">预计等待 约 4 分钟</p><div class="ds-queue-wait__bar" aria-hidden="true"><i style="width:25%"></i></div><p class="ds-queue-wait__total">今日已服务 12 位</p><button type="button">取消排队</button></section>
```

## React 示例

```tsx
<QueueWaitCard position={3} eta="约 4 分钟" total={12} onCancel={cancel} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 位置时间实时刷新
- [ ] 过久给留言入口
- [ ] 取消需二次确认
- [ ] aria-live 更新
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
