# 登录会话行

[返回组件目录](../README.md) · 安全 · v3 新增

## 目的与边界

展示账号的活跃登录会话，支持单独或批量下线。

## 结构

- 设备图标 (ds-session-row__icon)
- 设备与位置
- 登录时间
- 当前会话标记
- 下线按钮

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

Tab 遍历下线按钮；当前会话不可下线并说明原因。

## 使用细则

- 当前设备明确标注。
- 地理位置变化大时高亮提醒。
- 批量下线前给出影响数量确认。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-session-row is-current"><span class="ds-session-row__icon" aria-hidden="true">💻</span><div class="ds-session-row__info"><strong>MacBook Pro · 上海</strong><span>最近活跃：刚刚 · Chrome</span></div><span class="ds-session-row__tag">当前设备</span><button type="button" disabled>下线</button></div>
```

## React 示例

```tsx
<SessionRow device="MacBook Pro · 上海" lastActive="刚刚 · Chrome" current />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 当前设备明确标注
- [ ] 位置异常高亮
- [ ] 批量下线有数量确认
- [ ] 当前会话禁用并说明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
