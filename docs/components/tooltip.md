# 浮动提示

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

在悬停或获得焦点时，为图标按钮、简写或截断文本提供轻量上下文解释，不抢占主任务焦点。

## 结构

- 指向小三角
- 高对比微型面板
- 单行解释文本
- 无障碍 aria-describedby 绑定

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

不接受独立键盘焦点；随被解释控件的 focus-visible 自动显现，按 Escape 隐藏。

## 使用细则

- Tooltip 绝不能包含关键操作或不可缺失的表单错误。
- 触控设备优先保留可见文本标签，避免过度依赖悬浮。
- 文本采用反色或中性深色底板，与内容保持至少 4.5:1 对比度。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-toolbar" style="justify-content:flex-start;gap:12px"><div class="ds-tooltip-wrapper"><button class="ds-button ds-button--secondary ds-button--icon" aria-label="网络诊断" aria-describedby="tip-diag">⚡</button><span role="tooltip" id="tip-diag" class="ds-tooltip">快速网络与链路诊断</span></div><div class="ds-tooltip-wrapper"><button class="ds-button ds-button--secondary ds-button--icon" aria-label="导出配置" aria-describedby="tip-export">⤓</button><span role="tooltip" id="tip-export" class="ds-tooltip">导出当前脱敏配置</span></div></div>
```

## React 示例

```tsx
<Tooltip text="快速网络与链路诊断"><Button variant="secondary">⚡</Button></Tooltip>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 获得键盘焦点时 Tooltip 可见
- [ ] Tooltip 文本不会被外层 overflow 容器裁切
- [ ] 屏幕阅读器通过 aria-describedby 朗读说明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
