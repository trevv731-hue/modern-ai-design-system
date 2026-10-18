# 玩家状态 HUD

[返回组件目录](../README.md) · 游戏 / 娱乐 · v3 新增

## 目的与边界

在游戏画面内展示玩家头像、等级、生命与资源条。

## 结构

- 头像与等级 (ds-player-hud__avatar)
- 生命条 (ds-player-hud__hp)
- 资源条 (ds-player-hud__mp)
- 经验条
- 状态图标

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

HUD 默认不抢焦点；设置面板可聚焦打开。

## 使用细则

- 血条随伤害有短暂闪烁但可关闭。
- 低血量有边缘警示。
- Buff 图标悬停显示剩余时间。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-player-hud"><div class="ds-player-hud__avatar" aria-hidden="true">影</div><div class="ds-player-hud__bars"><p class="ds-player-hud__name">影刃 · Lv.42</p><div class="ds-player-hud__hp" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" aria-label="生命值 68%"><i style="width:68%"></i></div><div class="ds-player-hud__mp" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" aria-label="法力值 45%"><i style="width:45%"></i></div></div><div class="ds-player-hud__buffs" aria-label="状态：急速 12 秒，中毒 4 秒"><span aria-hidden="true">⚡</span><span aria-hidden="true">☠</span></div></div>
```

## React 示例

```tsx
<PlayerHud name="影刃" level={42} hp={68} mp={45} buffs={["急速", "中毒"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 血条闪烁可关闭
- [ ] 低血量边缘警示
- [ ] Buff 悬停显时间
- [ ] HUD 不抢焦点
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
