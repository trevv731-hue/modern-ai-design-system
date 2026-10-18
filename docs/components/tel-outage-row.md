# 故障事件行

[返回组件目录](../README.md) · 电信 / 网络运维 · v3 新增

## 目的与边界

展示一次网络故障的影响范围与抢修进度。

## 结构

- 时间 (ds-outage-row__time)
- 区域 (ds-outage-row__zone)
- 影响用户 (ds-outage-row__users)
- 原因 (ds-outage-row__cause)
- 进度 (ds-outage-row__progress)

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

行可聚焦查看抢修详情；未恢复事件以 alert 语义播报。

## 使用细则

- 未恢复红色、已恢复绿色。
- 影响用户数过万加粗突出。
- 进度条附百分比文字。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-outage-row is-active" tabindex="0" role="button" aria-label="未恢复故障，09:15 起，滨江片区，影响 12,000 用户，原因 光缆挖断，处理进度 65%"><span class="ds-outage-row__time">09:15 起</span><strong class="ds-outage-row__zone">滨江片区</strong><span class="ds-outage-row__users">12,000 用户</span><span class="ds-outage-row__cause">光缆挖断</span><div class="ds-outage-row__progress" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" aria-label="处理进度"><i style="width:65%"></i></div></div>
```

## React 示例

```tsx
<OutageIncidentRow time="09:15 起" zone="滨江片区" users={12000} cause="光缆挖断" progress={65} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 未恢复红色
- [ ] 已恢复绿色
- [ ] 影响用户加粗
- [ ] 进度百分比
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
