# 倒计时环

[返回组件目录](../README.md) · 日程 · v3 新增

## 目的与边界

以环形进度展示距离会议或截止时间的剩余量。

## 结构

- 环轨 (ds-count-ring__track)
- 进度弧
- 剩余时间
- 事件标题

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

剩余时间以文字可读；弧进度有 aria-valuenow。

## 使用细则

- 最后 5 分钟改变环色并附文字提醒。
- 时间归零后切换为“已开始”。
- 弧进度同时提供文字数值。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-count-ring" role="timer" aria-label="倒计时"><svg viewBox="0 0 72 72" width="72" height="72" aria-hidden="true"><circle class="ds-count-ring__track" cx="36" cy="36" r="30"></circle><circle class="ds-count-ring__fill" cx="36" cy="36" r="30" stroke-dasharray="132 188" transform="rotate(-90 36 36)"></circle></svg><div class="ds-count-ring__label"><strong>04:32</strong><small>设计评审</small></div></div>
```

## React 示例

```tsx
<CountdownRing remaining="04:32" title="设计评审" progress={0.7} urgent />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 最后 5 分钟变色加文字
- [ ] 归零切换为已开始
- [ ] 弧进度有文字数值
- [ ] role=timer 语义正确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
