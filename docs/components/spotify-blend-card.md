# Spotify Blend 合奏卡

[返回组件目录](../README.md) · 消费端媒体 · v3 新增

## 目的与边界

把两个人的口味合并成一份共享歌单，并说明匹配度来源而不是给出模糊的“很像”。

## 结构

- 卡片外壳 (ds-blend-card)
- 双方头像交叠
- 匹配度百分比
- 共享歌单入口

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

卡片内的歌单入口是链接，Tab 可达；Enter 打开。

## 使用细则

- 匹配度写明计算口径，例如共同收藏的曲目占比。
- 一方隐私设置不允许共享时说明原因。
- 共享歌单更新频率明确标注。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-blend-card"><div class="ds-blend-card__avatars"><span class="ds-persona" aria-label="成员 Aether">AE</span><span class="ds-persona" aria-label="成员 周舟">周</span></div><strong>78% 口味重合</strong><span class="ds-blend-card__note">基于 24 首共同收藏 · 每天更新</span><button type="button" class="ds-button">打开 Blend</button></article>
```

## React 示例

```tsx
<SpotifyBlendCard people={["Aether", "周舟"]} match={78} note="基于 24 首共同收藏 · 每天更新" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 匹配度说明计算口径
- [ ] 隐私限制时给出原因
- [ ] 更新频率明确可见
- [ ] 歌单入口可键盘打开
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
