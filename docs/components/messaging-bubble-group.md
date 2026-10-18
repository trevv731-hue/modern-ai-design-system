# 消息气泡组

[返回组件目录](../README.md) · 通讯 · v3 新增

## 目的与边界

将同一发送者的连续消息归组，并标注日期分隔与发送状态。

## 结构

- 日期分隔 (ds-bubble-group__day)
- 己方气泡
- 对方气泡
- 发送状态

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

气泡内容可被读屏朗读；状态变化通过 live region 播报。

## 使用细则

- 己方与对方气泡靠对齐与颜色双重区分。
- 日期变化处插入分隔行。
- 发送失败给出重试入口，不静默丢弃。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-bubble-group"><div class="ds-bubble-group__day">今天</div><div class="ds-bubble-group__row is-mine">规范链接我发你邮箱了<span class="ds-bubble-group__state">已读</span></div><div class="ds-bubble-group__row">收到，下午三点会议室见</div></div>
```

## React 示例

```tsx
<BubbleGroup day="今天" mine="规范链接我发你邮箱了" theirs="收到，下午三点会议室见" state="已读" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 己方对方靠对齐加颜色区分
- [ ] 日期分隔行存在
- [ ] 发送失败可重试
- [ ] 状态变化有播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
