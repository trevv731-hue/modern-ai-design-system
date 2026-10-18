# SLA 响应计时器

[返回组件目录](../README.md) · 客服 / 工单 · v3 新增

## 目的与边界

显示工单 SLA 剩余响应时间与目标时限。

## 结构

- 优先级标签 (ds-sla-timer__pri)
- 剩余时间 (ds-sla-timer__left)
- 进度条 (ds-sla-timer__bar)
- 目标说明 (ds-sla-timer__goal)

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

时间变化使用 aria-live 播报；不自动抢焦点。

## 使用细则

- 剩余不足 25% 黄色、已超时红色。
- 倒计时秒级更新。
- 超时后给升级处理入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sla-timer is-high" role="timer" aria-label="SLA 剩余 1 小时 24 分 30 秒，目标 2 小时响应"><span class="ds-sla-timer__pri is-high">高优先级</span><strong class="ds-sla-timer__left">01:24:30</strong><div class="ds-sla-timer__bar" aria-hidden="true"><i style="width:28%"></i></div><span class="ds-sla-timer__goal">目标 2 小时响应</span></div>
```

## React 示例

```tsx
<SlaResponseTimer priority="high" left="01:24:30" total="02:00:00" goal="2 小时响应" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 不足 25% 黄色
- [ ] 超时红色升级入口
- [ ] 秒级更新播报
- [ ] 不自动抢焦点
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
