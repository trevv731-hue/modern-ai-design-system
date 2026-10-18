# 计划停电公告行

[返回组件目录](../README.md) · 能源 / 电力运维 · v3 新增

## 目的与边界

展示一条计划停电公告的时间范围、区域与执行状态。

## 结构

- 时间 (ds-power-outage__time)
- 区域 (ds-power-outage__area)
- 原因 (ds-power-outage__reason)
- 状态 (ds-power-outage__state)

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

行可聚焦查看影响范围；执行中以 alert 语义播报。

## 使用细则

- 计划中黄色、执行中红色、已完成绿色。
- 影响范围以文字列出。
- 执行前 24 小时突出提醒。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-power-outage is-planned" tabindex="0" role="button" aria-label="计划停电，06-20 09:00 至 17:00，文晖路两侧小区，线路迁改，计划中"><span class="ds-power-outage__time">06-20 09:00-17:00</span><strong class="ds-power-outage__area">文晖路两侧小区</strong><span class="ds-power-outage__reason">线路迁改</span><span class="ds-power-outage__state is-planned">计划中</span></div>
```

## React 示例

```tsx
<OutageScheduleRow time="06-20 09:00-17:00" area="文晖路两侧小区" reason="线路迁改" state="planned" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态配色
- [ ] 影响范围文字
- [ ] 24 小时提醒
- [ ] 执行中播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
