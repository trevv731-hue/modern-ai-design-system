# AI 双模型竞技场响应并排对比卡

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

LMSYS Chatbot Arena 风格的双模型盲测并排对比视窗；并排展示 Model A 与 Model B 响应正文、首字延迟（TTFT）、吞吐速率，以及“A 更好 / B 更好 / 平局”投票动作组。

## 结构

- 对比卡容器 (.ds-model-arena-card)
- 左右双栏网格 (.ds-model-arena-card__grid, .ds-model-arena-card__col)
- 单栏模型标题与速率统计 (.ds-model-arena-card__col-header, .ds-model-arena-card__col-stats)
- 响应正文 (.ds-model-arena-card__col-body)
- 底部投票裁决栏 (.ds-model-arena-card__vote-bar, .ds-model-arena-card__vote-btn)

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

Tab 在模型 A 投票、模型 B 投票和平局按钮间切换；Enter 提交裁决并揭晓真实模型名称。

## 使用细则

- 左右双栏在小屏设备（<=640px）自动堆叠为单栏。
- 投票前模型名称保密（显示 Model A / Model B），投票后方可解锁真实模型标签。
- 正文排版保持对比度并支持等宽代码高亮。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-model-arena-card" role="region" aria-label="AI 双模型对比盲测竞技场"><div class="ds-model-arena-card__grid"><div class="ds-model-arena-card__col"><div class="ds-model-arena-card__col-header"><span>Model A</span><span class="ds-model-arena-card__col-stats">TTFT: 240ms · 92 tok/s</span></div><div class="ds-model-arena-card__col-body">Provides clean, modular code with comprehensive TypeScript annotations.</div></div><div class="ds-model-arena-card__col"><div class="ds-model-arena-card__col-header"><span>Model B</span><span class="ds-model-arena-card__col-stats">TTFT: 180ms · 114 tok/s</span></div><div class="ds-model-arena-card__col-body">Offers concise code snippets with detailed inline architectural rationale.</div></div></div><div class="ds-model-arena-card__vote-bar"><button type="button" class="ds-model-arena-card__vote-btn" aria-label="投票：Model A 表现更优">👈 Model A is better</button><button type="button" class="ds-model-arena-card__vote-btn" aria-label="投票：两者表现平局">🤝 Tie</button><button type="button" class="ds-model-arena-card__vote-btn" aria-label="投票：Model B 表现更优">Model B is better 👉</button></div></div>
```

## React 示例

```tsx
<AIModelArenaCompareCard modelAName="Model A" modelBName="Model B" onVote={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 双栏响应并排对齐且支持移动端自适应
- [ ] 三项投票按键焦点与标签清晰
- [ ] 模型性能参数带明确单位说明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
