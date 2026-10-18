# 志愿者排班卡

[返回组件目录](../README.md) · 活动 / 票务 · v3 新增

## 目的与边界

展示志愿者的岗位、时段与签到状态。

## 结构

- 岗位 (ds-volunteer-shift__role)
- 时段 (ds-volunteer-shift__time)
- 地点 (ds-volunteer-shift__loc)
- 负责人
- 状态 (ds-volunteer-shift__state)

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

卡片可聚焦查看详情；签到按钮可达。

## 使用细则

- 进行中与待开始状态区分。
- 临近开始黄色提醒。
- 完成后可领取志愿证明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-volunteer-shift is-assigned" tabindex="0" aria-label="志愿者排班，签到引导，11-08 08:00 至 12:00，北门签到处，负责人赵敏，已分配"><div class="ds-volunteer-shift__head"><strong class="ds-volunteer-shift__role">签到引导</strong><span class="ds-volunteer-shift__state is-assigned">已分配</span></div><p class="ds-volunteer-shift__time">11-08 08:00 ~ 12:00</p><p class="ds-volunteer-shift__loc">北门签到处 · 负责人 赵敏</p><button type="button">签到上岗</button></article>
```

## React 示例

```tsx
<VolunteerShiftCard role="签到引导" time="11-08 08:00-12:00" location="北门签到处" leader="赵敏" state="assigned" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 进行中待开始区分
- [ ] 临近开始黄色
- [ ] 完成领志愿证明
- [ ] 卡片可聚焦看详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
