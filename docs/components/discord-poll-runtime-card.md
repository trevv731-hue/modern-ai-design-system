# Discord 频道投票进度卡

[返回组件目录](../README.md) · 协作 / 团队 · v3 新增

## 目的与边界

在频道内展示进行中的投票、各选项票数与剩余时间，避免重复投票或结果歧义。

## 结构

- 问题标题与剩余时间
- 选项行 (ds-poll-card__option)
- 票数与百分比
- 总票数与已选标记

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

Tab 在选项间移动；Enter 投票；已投票后选项变为只读结果。

## 使用细则

- 投票前不展示各选项票数，避免从众偏差；可配置为始终可见。
- 剩余时间使用统一文案，倒计时结束自动锁定结果。
- 已选项用图标加文字标注，不只用颜色。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-poll-card" role="region" aria-label="频道投票"><header class="ds-poll-card__head"><strong>下一次维护窗口？</strong><span class="ds-badge">剩余 4 小时</span></header><div class="ds-poll-card__option" tabindex="0" role="button" aria-label="选项：周三凌晨，当前 12 票，48%"><span class="ds-poll-card__bar" style="width:48%"></span><span>周三凌晨</span><span class="ds-poll-card__count">12 票 · 48%</span></div><div class="ds-poll-card__option" tabindex="0" role="button" aria-label="选项：周日深夜，当前 13 票，52%"><span class="ds-poll-card__bar" style="width:52%"></span><span>周日深夜</span><span class="ds-poll-card__count">13 票 · 52%</span></div><footer class="ds-poll-card__meta">共 25 票</footer></div>
```

## React 示例

```tsx
<DiscordPollRuntimeCard question="下一次维护窗口？" options={[{ label: "周三凌晨", votes: 12 }, { label: "周日深夜", votes: 13 }]} endsIn="剩余 4 小时" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 总票数等于各选项票数之和
- [ ] 投票截止时间明确且到期后锁定
- [ ] 已选选项有图标与文字双重提示
- [ ] 键盘可完成投票全流程
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
