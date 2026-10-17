# AI 系统提示词版本卡

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

管理提示词的迭代版本，显示生效状态、变更摘要与回滚入口。

## 结构

- 版本卡外壳 (ds-prompt-card)
- 版本号与生效标记
- 变更摘要
- 对比与回滚入口

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

Tab 进入对比与回滚按钮；Enter 执行；回滚需要确认。

## 使用细则

- 只标记一个生效版本，避免歧义。
- 变更摘要写具体差异，不写“优化了一下”。
- 回滚前提示影响范围。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-prompt-card"><header class="ds-prompt-card__head"><strong>v2.3</strong><span class="ds-badge ds-badge--success">生效中</span></header><p>新增输出长度限制与引用格式要求。</p><footer class="ds-prompt-card__foot"><button type="button" class="ds-button ds-button--ghost">与上一版对比</button><button type="button" class="ds-button ds-button--secondary">回滚</button></footer></article>
```

## React 示例

```tsx
<AISystemPromptVersionCard version="v2.3" active note="新增输出长度限制与引用格式要求。" onRollback={rollback} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 同时只有一个生效版本
- [ ] 变更摘要具体可读
- [ ] 回滚前提示影响范围
- [ ] 键盘可完成对比与回滚
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
