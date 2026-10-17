# Spotify 循环画面徽标

[返回组件目录](../README.md) · 消费端媒体 · v3 新增

## 目的与边界

提示当前曲目带有循环短片，并提供关闭入口，避免动态内容干扰。

## 结构

- 徽标外壳 (ds-canvas-badge)
- 循环图标
- “循环画面”文本
- 关闭按钮

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

关闭按钮独立可达；Enter 关闭循环画面；减少动效模式默认关闭。

## 使用细则

- 减少动效偏好下默认不播放循环画面。
- 关闭状态持久化到当前账号。
- 循环画面不承载歌词等关键信息。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-canvas-badge" role="status" aria-label="当前曲目包含循环画面"><span aria-hidden="true">🔁</span><span>循环画面</span><button type="button" class="ds-button ds-button--ghost" aria-label="关闭循环画面">关闭</button></div>
```

## React 示例

```tsx
<SpotifyCanvasLoopBadge onDisable={disableCanvas} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 减少动效偏好下不自动播放
- [ ] 关闭状态可持久化
- [ ] 关键信息不依赖循环画面
- [ ] 关闭按钮可键盘操作
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
