# Discord 舞台频道观众条

[返回组件目录](../README.md) · 协作 / 团队 · v3 新增

## 目的与边界

显示舞台模式的发言者与听众规模，并给出举手请求入口，控制发言秩序。

## 结构

- 舞台信息头 (ds-stage-meter__head)
- 发言者名单
- 观众计数
- 举手请求按钮

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

Tab 进入举手按钮；Enter 发起或取消请求；状态变化通过 polite live region 播报。

## 使用细则

- 观众数来自实时统计，未连接时显示“—”。
- 举手状态需要可见确认，不只用按钮颜色变化。
- 发言者人数受限时说明上限，不静默拒绝。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-stage-meter" role="region" aria-label="舞台频道"><header class="ds-stage-meter__head"><strong>发布说明 · 舞台</strong><span class="ds-badge ds-badge--success">进行中</span></header><div class="ds-stage-meter__speakers"><span class="ds-persona" aria-label="发言者 Aether">AE</span><span class="ds-persona" aria-label="发言者 Iris">I</span></div><div class="ds-stage-meter__audience">观众 128 人</div><button type="button" class="ds-button ds-button--secondary">举手</button></div>
```

## React 示例

```tsx
<DiscordStageAudienceMeter title="发布说明 · 舞台" speakers={["Aether", "Iris"]} audience={128} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 观众数与实时统计一致
- [ ] 举手后给出可见确认
- [ ] 发言名额满时说明原因
- [ ] 状态变化会被辅助技术播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
