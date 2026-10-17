# Meta Instagram 互动故事投票贴纸卡

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 Instagram Story 互动投票贴纸，大尺寸易触控双选项药丸按钮、点击后即时揭晓胜率百分比与柔和边框。

## 结构

- 贴纸卡片总外壳 (ds-story-poll)
- 投票问题标头 (ds-story-poll__question)
- 选项按钮组 (ds-story-poll__options)
- 单项投票药丸按钮 (ds-story-poll__btn)
- 选项标签与百分比统计

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

Tab 键在两项投票按钮间切换；Enter 投出选票并揭晓实时百分比。

## 使用细则

- 采用轻巧圆角卡片质感，适合作为浮动贴纸层叠于故事全屏背景之上。
- 选项按钮高度达到 44px 舒适触摸标准，文字与 Emoji 趣味结合。
- 投票完成后即刻呈现双方百分比，胜出选项带有品牌色加粗高亮。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-story-poll" role="region" aria-label="Instagram 互动故事投票"><p class="ds-story-poll__question">Love the new frosted glass UI?</p><div class="ds-story-poll__options"><button type="button" class="ds-story-poll__btn" aria-label="投票：Yes 😍 (82%)"><span>Yes 😍</span><span style="font-weight:700;color:var(--ds-accent)">82%</span></button><button type="button" class="ds-story-poll__btn" aria-label="投票：No 😢 (18%)"><span>No 😢</span><span style="font-weight:700;color:var(--ds-muted)">18%</span></button></div></div>
```

## React 示例

```tsx
<MetaInstagramStoryPollSticker question="Love the new frosted glass UI?" optA="Yes 😍" optB="No 😢" pctA={82} pctB={18} onVote={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 点击即刻揭晓双方胜率，数字展示清晰
- [ ] 选项药丸在浅色与深色模式下均保持舒适对比度
- [ ] 辅助技术可准确读出问题与各选项当前的投票占比
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
