# 活动倒计时卡

[返回组件目录](../README.md) · 活动 / 票务 · v3 新增

## 目的与边界

突出展示活动信息与开赛倒计时，引导报名。

## 结构

- 封面占位 (ds-event-count__media)
- 活动名称 (ds-event-count__body)
- 倒计时数字 (ds-event-count__timer)
- 时间与地点
- 报名按钮

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

卡片可聚焦；报名按钮可达；倒计时使用 aria-live 播报。

## 使用细则

- 倒计时按天时分秒分组展示。
- 已报名状态显示取消入口。
- 时间地点图标加文字。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-event-count" tabindex="0" aria-label="2026 前端开发者大会，11-08 09:00，国家会议中心，距开始 12 天 5 小时 30 分"><div class="ds-event-count__media" aria-hidden="true"><span>封面</span></div><div class="ds-event-count__body"><strong>2026 前端开发者大会</strong><span>11-08 09:00 · 国家会议中心</span></div><div class="ds-event-count__timer" role="timer" aria-label="倒计时"><span><b>12</b><i>天</i></span><span><b>05</b><i>时</i></span><span><b>30</b><i>分</i></span><span><b>08</b><i>秒</i></span></div><button type="button">立即报名</button></article>
```

## React 示例

```tsx
<EventCountdownCard title="2026 前端开发者大会" date="11-08 09:00" location="国家会议中心" days={12} hours={5} minutes={30} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 倒计时天时分秒分组
- [ ] 已报名显取消入口
- [ ] 时间地点图标文字
- [ ] 倒计时 aria-live
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
