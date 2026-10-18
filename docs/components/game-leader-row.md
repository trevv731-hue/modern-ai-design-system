# 排行榜行

[返回组件目录](../README.md) · 游戏 / 娱乐 · v3 新增

## 目的与边界

展示玩家排名、段位、分数与名次变化。

## 结构

- 排名 (ds-leader-row__rank)
- 玩家信息
- 段位徽章 (ds-leader-row__tier)
- 分数 (ds-leader-row__score)
- 变化 (ds-leader-row__delta)

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

行可聚焦查看战绩；当前用户行有标记。

## 使用细则

- 前三名有特殊样式但不只靠颜色。
- 名次变化用箭头与数字双表示。
- 自己所在行锚定高亮。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-leader-row is-self" tabindex="0" role="button" aria-label="第 7 名，夜枭，最强王者，4820 分，上升 3 名"><span class="ds-leader-row__rank">7</span><span class="ds-leader-row__avatar" aria-hidden="true">枭</span><div class="ds-leader-row__info"><strong>夜枭</strong><span class="ds-leader-row__tier is-master">最强王者</span></div><span class="ds-leader-row__score">4,820</span><span class="ds-leader-row__delta is-up"><span aria-hidden="true">▲</span>3</span></div>
```

## React 示例

```tsx
<LeaderboardRow rank={7} player="夜枭" tier="最强王者" score={4820} delta={3} isSelf />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 前三特殊样式不只颜色
- [ ] 变化箭头数字双表示
- [ ] 自己行锚定高亮
- [ ] 行可聚焦看战绩
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
