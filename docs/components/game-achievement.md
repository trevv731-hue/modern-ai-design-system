# 成就徽章

[返回组件目录](../README.md) · 游戏 / 娱乐 · v3 新增

## 目的与边界

展示已解锁成就的稀有度与进行中成就的进度。

## 结构

- 徽章 (ds-achievement__badge)
- 名称
- 稀有度 (ds-achievement__rarity)
- 进度 (ds-achievement__prog)
- 解锁日期

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

徽章可聚焦查看获取条件；进度有可读文本。

## 使用细则

- 稀有度用边框与光效双表示。
- 进行中成就显示当前进度。
- 隐藏成就未解锁时只显示轮廓。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-achievement" tabindex="0" role="button" aria-label="成就 百人斩，传说稀有度，已解锁于 10-12"><span class="ds-achievement__badge is-legendary" aria-hidden="true">🏆</span><div class="ds-achievement__body"><strong>百人斩</strong><span class="ds-achievement__rarity is-legendary">传说 · 2.1% 玩家拥有</span><span class="ds-achievement__date">解锁于 10-12</span></div></div>
```

## React 示例

```tsx
<AchievementBadge name="百人斩" rarity="传说" percent="2.1%" unlockedAt="10-12" progress={100} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 稀有度边框光效双表示
- [ ] 进行中显示进度
- [ ] 隐藏成就只显轮廓
- [ ] 徽章可聚焦看条件
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
