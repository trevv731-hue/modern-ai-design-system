# AI 工具调用审批卡

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

在模型请求执行敏感工具前集中展示名称、参数与影响范围，由人明确批准或拒绝。

## 结构

- 审批卡外壳 (ds-tool-approval)
- 工具名与风险等级
- 参数明细表
- 允许 / 拒绝按钮

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

打开时焦点落在“拒绝”按钮；Tab 在按钮间移动；Enter 执行；Escape 等同拒绝。

## 使用细则

- 参数必须完整展示，不折叠关键路径与命令。
- 高危操作默认焦点给拒绝，不默认允许。
- 审批结果记录到日志，包含执行者与时间戳。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tool-approval" role="alertdialog" aria-label="工具调用审批"><header class="ds-tool-approval__head"><strong>执行 Shell 命令</strong><span class="ds-badge ds-badge--danger">高风险</span></header><dl class="ds-tool-approval__params"><div><dt>command</dt><dd>systemctl restart aether</dd></div><div><dt>cwd</dt><dd>/srv/aether</dd></div></dl><footer class="ds-tool-approval__foot"><button type="button" class="ds-button ds-button--secondary">拒绝</button><button type="button" class="ds-button ds-button--danger">允许一次</button></footer></div>
```

## React 示例

```tsx
<AIToolApprovalCard tool="执行 Shell 命令" risk="high" params={{ command: "systemctl restart aether" }} onDecide={decide} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 参数完整可见且不被截断
- [ ] 高风险操作默认焦点在拒绝
- [ ] 审批记录包含执行者与时间
- [ ] Escape 不会静默批准
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
