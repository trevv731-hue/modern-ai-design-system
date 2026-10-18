# 对战计分板

[返回组件目录](../README.md) · 游戏 / 娱乐 · v3 新增

## 目的与边界

展示对局双方比分、击杀数据与剩余时间。

## 结构

- 双方标识 (ds-scoreboard__team)
- 比分 (ds-scoreboard__score)
- 玩家行
- KDA
- 计时器 (ds-scoreboard__timer)

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

计分板打开时焦点可进入；表格行可聚焦查看详情。

## 使用细则

- 领先方有视觉强调但不贬低对手。
- 支持按击杀/伤害/治疗排序。
- 加时与赛点有明确文案。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-scoreboard"><div class="ds-scoreboard__head"><span class="ds-scoreboard__team is-a">蓝队</span><span class="ds-scoreboard__score">3 : 2</span><span class="ds-scoreboard__team is-b">红队</span><span class="ds-scoreboard__timer">07:24</span></div><table><thead><tr><th scope="col">玩家</th><th scope="col">击杀</th><th scope="col">死亡</th><th scope="col">助攻</th><th scope="col">伤害</th></tr></thead><tbody><tr><td>影刃</td><td>8</td><td>2</td><td>4</td><td>24,180</td></tr><tr><td>月读</td><td>5</td><td>3</td><td>6</td><td>18,420</td></tr><tr><td>铁壁</td><td>1</td><td>4</td><td>11</td><td>9,860</td></tr></tbody></table><p class="ds-scoreboard__note">赛点 · 再赢一回合结束</p></div>
```

## React 示例

```tsx
<MatchScoreboard teams={[{ name: "蓝队", score: 3 }, { name: "红队", score: 2 }]} timer="07:24" rows={[{ player: "影刃", kills: 8, deaths: 2, assists: 4, damage: 24180 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 领先方强调不贬低
- [ ] 支持多维排序
- [ ] 加时赛点文案明确
- [ ] 行可聚焦看详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
