# Telegram 匿名投票与测验互动竞猜卡

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 Telegram 频道与群组的多选投票与竞猜卡片，支持动态百分比柱状填充、匿名/实名状态说明与投票撤回操作。

## 结构

- 卡片总容器 (ds-quiz-poll)
- 投票类型与总票数头栏 (ds-quiz-poll__header)
- 问题主标 (ds-quiz-poll__question)
- 选项列表 (ds-quiz-poll__options)
- 单选项按钮 (ds-quiz-poll__opt)
- 百分比平滑填充底条 (ds-quiz-poll__opt-fill)
- 底栏说明与撤销操作 (ds-quiz-poll__footer)

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

ArrowUp/ArrowDown 在各个投票选项间导航；Space 或 Enter 投出选票。

## 使用细则

- 选项点击后平滑展开彩色百分比填充条，百分比文字采用加粗等宽字体。
- 明确标示该投票是 Anonymous Poll（匿名）还是 Public Poll（公开投票）。
- 底部提供撤销投票或查看结果的轻量文字动作。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-quiz-poll" role="region" aria-label="互动投票：哪项平台动效物理手感最佳？"><div class="ds-quiz-poll__header"><span>Anonymous Poll</span><span>Total: 842 votes</span></div><h4 class="ds-quiz-poll__question">Which native physics curve feels best?</h4><div class="ds-quiz-poll__options"><div class="ds-quiz-poll__opt" role="button" tabindex="0" aria-label="iOS 阻尼弹簧 (64%)"><div class="ds-quiz-poll__opt-fill" style="width: 64%"></div><span class="ds-quiz-poll__opt-label">iOS Spring Physics</span><span class="ds-quiz-poll__opt-pct">64%</span></div><div class="ds-quiz-poll__opt" role="button" tabindex="0" aria-label="Android M3 强调曲线 (26%)"><div class="ds-quiz-poll__opt-fill" style="width: 26%"></div><span class="ds-quiz-poll__opt-label">Android M3 Emphasized</span><span class="ds-quiz-poll__opt-pct">26%</span></div><div class="ds-quiz-poll__opt" role="button" tabindex="0" aria-label="macOS 超柔弹性 (10%)"><div class="ds-quiz-poll__opt-fill" style="width: 10%"></div><span class="ds-quiz-poll__opt-label">macOS Gentle Spring</span><span class="ds-quiz-poll__opt-pct">10%</span></div></div><div class="ds-quiz-poll__footer"><span>Poll created by Design Core</span><span>Retract Vote</span></div></div>
```

## React 示例

```tsx
<TelegramPollQuizVoteCard question="Which native physics curve feels best?" options={[{ id: "1", label: "iOS Spring", pct: 64 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 投票后百分比条平滑填充无突变
- [ ] 未投票与已投票状态对比度清晰
- [ ] 无障碍角色设定为单选或多选组，实时播报百分比
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
