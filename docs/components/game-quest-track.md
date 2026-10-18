# 任务追踪器

[返回组件目录](../README.md) · 游戏 / 娱乐 · v3 新增

## 目的与边界

在游戏界面侧边追踪当前任务目标与奖励。

## 结构

- 任务名 (ds-quest-track__title)
- 目标项 (ds-quest-track__obj)
- 进度 (ds-quest-track__prog)
- 奖励预览
- 折叠按钮

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

任务可折叠展开；目标完成状态播报。

## 使用细则

- 最多同时追踪 3 个任务。
- 完成目标有划线与庆祝。
- 奖励可悬停预览。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-quest-track"><div class="ds-quest-track__head"><strong class="ds-quest-track__title">失踪的商队</strong><button type="button" aria-label="折叠任务">▾</button></div><ul><li class="is-done"><span class="ds-quest-track__obj">调查马车残骸</span><span class="ds-quest-track__prog">1/1</span></li><li><span class="ds-quest-track__obj">击败掠夺者</span><span class="ds-quest-track__prog">4/8</span></li><li><span class="ds-quest-track__obj">找回货箱</span><span class="ds-quest-track__prog">0/3</span></li></ul><p class="ds-quest-track__reward">奖励：1200 经验 · 精铁 ×2</p></div>
```

## React 示例

```tsx
<QuestTracker title="失踪的商队" objectives={[{ name: "调查马车残骸", done: 1, total: 1 }, { name: "击败掠夺者", done: 4, total: 8 }]} reward="1200 经验 · 精铁 ×2" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 最多同时追踪 3 个
- [ ] 完成目标划线庆祝
- [ ] 奖励可悬停预览
- [ ] 任务可折叠展开
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
