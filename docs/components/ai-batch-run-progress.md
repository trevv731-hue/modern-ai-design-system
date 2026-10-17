# AI 批量运行进度条

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

显示批量任务的完成数量、失败数量与预计剩余时间，可随时中止。

## 结构

- 进度条外壳 (ds-batch-run)
- 完成 / 总数计数
- 进度轨道与填充
- 中止按钮

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

Tab 进入中止按钮；Enter 中止；进度变化通过 polite live region 定期播报。

## 使用细则

- 显示真实完成数与失败数，不估算为乐观值。
- 预计剩余时间随实际速度更新，不可用时显示“计算中”。
- 中止后保留已完成结果。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-batch-run" role="status" aria-label="批量运行进度"><div class="ds-batch-run__meta"><strong>已完成 128 / 200</strong><span>失败 3 · 预计剩余 2 分 10 秒</span></div><div class="ds-batch-run__track"><span style="width:64%"></span></div><button type="button" class="ds-button ds-button--secondary">中止</button></div>
```

## React 示例

```tsx
<AIBatchRunProgress done={128} total={200} failed={3} eta="预计剩余 2 分 10 秒" onAbort={abort} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 完成数与失败数为真实统计
- [ ] 剩余时间不可用时说明计算中
- [ ] 中止后保留已完成结果
- [ ] 进度变化可被辅助技术感知
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
