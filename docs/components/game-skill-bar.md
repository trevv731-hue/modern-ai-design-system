# 技能栏

[返回组件目录](../README.md) · 游戏 / 娱乐 · v3 新增

## 目的与边界

展示技能图标、快捷键与冷却状态。

## 结构

- 技能格 (ds-skill-bar__slot)
- 图标
- 快捷键 (ds-skill-bar__key)
- 冷却遮罩 (ds-skill-bar__cd)
- 不可用态

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

技能格可聚焦；回车施放；冷却中禁用并播报剩余秒数。

## 使用细则

- 冷却以环形或纵向遮罩呈现。
- 就绪技能有微光但不常亮。
- 锁定技能灰显并说明条件。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-skill-bar" role="toolbar" aria-label="技能栏"><button type="button" class="ds-skill-bar__slot" aria-label="技能 斩击，快捷键 1"><span aria-hidden="true">⚔</span><kbd class="ds-skill-bar__key">1</kbd></button><button type="button" class="ds-skill-bar__slot" aria-label="技能 火球，快捷键 2"><span aria-hidden="true">🔥</span><kbd class="ds-skill-bar__key">2</kbd></button><button type="button" class="ds-skill-bar__slot is-cd" aria-label="技能 疾跑，冷却中，剩余 3 秒，快捷键 3"><span aria-hidden="true">💨</span><i class="ds-skill-bar__cd" style="--cd:40%"></i><kbd class="ds-skill-bar__key">3</kbd></button><button type="button" class="ds-skill-bar__slot is-locked" aria-label="技能 终极技，未解锁" disabled><span aria-hidden="true">🌟</span><kbd class="ds-skill-bar__key">R</kbd></button></div>
```

## React 示例

```tsx
<SkillBar skills={[{ icon: "⚔", key: "1", state: "ready" }, { icon: "🔥", key: "2", state: "ready" }, { icon: "💨", key: "3", state: "cd", cdPct: 40 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 冷却遮罩清晰
- [ ] 就绪微光不常亮
- [ ] 锁定灰显说明条件
- [ ] 冷却禁用播报剩余
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
