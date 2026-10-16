# Linear 工单子任务环形比例进度指示器

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Linear 风格的子问题完成度进度指示微组件；包含微型圆锥渐变进度圆环、分数比例（如 3/5）及自适应状态说明，兼具极致紧凑与信息完整度。

## 结构

- 圆角微底色胶囊容器 (.ds-subtask-progress)
- 圆锥渐变微环图元 (.ds-subtask-progress__ring)
- 等宽分数显示字型 (.ds-subtask-progress__ratio)
- 次级灰度完成度说明 (.ds-subtask-progress__text)
- 自适应主题强调色变量

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

作为语义化 progressbar 读取，可设置 tabindex="0" 接受焦点并响应键盘回车展开详细子任务列表。

## 使用细则

- 具备 role="progressbar"、aria-valuenow、aria-valuemin 与 aria-valuemax。
- 在有限空间内呈现图形与数值双重编码，色盲用户亦能通过 3/5 明确进度。
- 适合敏捷研发工单列表、项目里程碑清单、Checklist 完成度展示及多步骤流水线。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-subtask-progress" role="progressbar" aria-label="子工单进度" aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style="--ds-subtask-pct:60%"><div class="ds-subtask-progress__ring" aria-hidden="true"></div><span class="ds-subtask-progress__ratio">3/5</span><span class="ds-subtask-progress__text">60% 完成</span></div>
```

## React 示例

```tsx
<LinearSubtaskProgressIndicator completed={3} total={5} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 微型环外圈圆润内凹适中
- [ ] 文字与微环垂直居中对齐
- [ ] 进度百分比计算精准无误
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
