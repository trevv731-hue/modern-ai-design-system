# Spotify DJ 过渡说明卡

[返回组件目录](../README.md) · 消费端媒体 · v3 新增

## 目的与边界

在自动 DJ 切换曲目时说明为什么切到这一首，并给出保留或跳过的选择。

## 结构

- 卡片外壳 (ds-dj-card)
- DJ 头像与语气提示
- 切换理由文本
- 跳过与保留按钮

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

Tab 进入跳过与保留按钮；Enter 执行；状态变化通过 polite live region 播报。

## 使用细则

- 理由基于可解释的信号，例如同一艺人或收听时段。
- 无法解释时如实说明“随机推荐”，不编造理由。
- 跳过与保留操作需要即时反馈。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-dj-card"><header class="ds-dj-card__head"><span class="ds-persona" aria-label="DJ">DJ</span><strong>接下来</strong></header><p>因为你最近常听深夜值班，接着放同一位艺人的慢歌。</p><footer class="ds-dj-card__foot"><button type="button" class="ds-button ds-button--secondary">跳过</button><button type="button" class="ds-button">保留</button></footer></article>
```

## React 示例

```tsx
<SpotifyDJTransitionCard reason="因为你最近常听深夜值班，接着放同一位艺人的慢歌。" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 切换理由可解释且具体
- [ ] 无理由时如实说明随机
- [ ] 操作后有即时反馈
- [ ] 键盘可完成跳过与保留
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
