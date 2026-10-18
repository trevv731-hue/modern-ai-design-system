# 会议提醒卡

[返回组件目录](../README.md) · 日程 · v3 新增

## 目的与边界

在会议临近时弹出提醒，提供加入、稍后提醒与缺席操作。

## 结构

- 会议标题 (ds-meet-remind__title)
- 倒计时
- 加入按钮
- 稍后提醒
- 缺席

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

Tab 在三个操作间移动；Esc 稍后提醒。

## 使用细则

- 倒计时精确到分钟。
- 加入按钮为主行动且默认聚焦。
- 稍后提醒提供 5/10/15 分钟选项。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-meet-remind" role="alertdialog" aria-label="会议提醒"><p class="ds-meet-remind__title">设计规范评审</p><p class="ds-meet-remind__count">5 分钟后开始 · 14:00 - 15:00</p><div class="ds-meet-remind__actions"><button type="button" class="is-primary">加入会议</button><button type="button">稍后提醒</button><button type="button">缺席</button></div></div>
```

## React 示例

```tsx
<MeetingReminder title="设计规范评审" startsIn={5} range="14:00 - 15:00" onJoin={join} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 倒计时精确到分钟
- [ ] 加入按钮默认聚焦
- [ ] 稍后提醒给时长选项
- [ ] Esc 触发稍后提醒
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
