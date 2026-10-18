# 赛季通行证轨道

[返回组件目录](../README.md) · 游戏 / 娱乐 · v3 新增

## 目的与边界

展示赛季通行证等级轨道与奖励解锁状态。

## 结构

- 等级轨道 (ds-battle-pass__track)
- 等级节点 (ds-battle-pass__node)
- 免费轨奖励
- 付费轨奖励
- 当前进度

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

节点可聚焦查看奖励；已达成未领取有播报。

## 使用细则

- 免费与付费轨左右分列。
- 当前等级有视觉锚点。
- 未领取奖励有数量徽标。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-battle-pass"><p class="ds-battle-pass__head">S3 赛季 · 当前 Lv.18 · 再 1,200 经验升级</p><div class="ds-battle-pass__track"><div class="ds-battle-pass__node is-done"><span class="ds-battle-pass__lv">15</span><span class="ds-battle-pass__free" aria-hidden="true">🎁</span><span class="ds-battle-pass__premium" aria-hidden="true">👑</span></div><div class="ds-battle-pass__node is-done"><span class="ds-battle-pass__lv">16</span><span class="ds-battle-pass__free is-claim" aria-hidden="true">🎁</span><span class="ds-battle-pass__premium" aria-hidden="true">🗡</span></div><div class="ds-battle-pass__node is-current" aria-current="step"><span class="ds-battle-pass__lv">17</span><span class="ds-battle-pass__free" aria-hidden="true">🎁</span><span class="ds-battle-pass__premium" aria-hidden="true">🎽</span></div><div class="ds-battle-pass__node is-locked"><span class="ds-battle-pass__lv">18</span><span class="ds-battle-pass__free" aria-hidden="true">🎁</span><span class="ds-battle-pass__premium" aria-hidden="true">🎒</span></div></div><button type="button">领取 2 个奖励</button></div>
```

## React 示例

```tsx
<BattlePassTrack season="S3" level={18} expToNext={1200} nodes={[{ level: 15, state: "done", free: "🎁", premium: "👑" }, { level: 16, state: "done", free: "🎁", premium: "🗡" }]} claimable={2} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 免费付费轨分列
- [ ] 当前等级视觉锚点
- [ ] 未领奖励数量徽标
- [ ] 节点可聚焦看奖励
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
