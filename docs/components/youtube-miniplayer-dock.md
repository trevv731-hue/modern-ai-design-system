# YouTube 迷你播放器

[返回组件目录](../README.md) · 消费端媒体 · v3 新增

## 目的与边界

离开播放页后继续以小窗播放，保留基本控制与返回入口，不打断浏览。

## 结构

- 小窗外壳 (ds-mini)
- 视频区域
- 标题与频道
- 关闭与展开按钮

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

Tab 进入小窗控件；Enter 展开回播放页；Escape 关闭播放。

## 使用细则

- 小窗不遮挡页面主要操作区，可停靠四角。
- 关闭播放后释放资源，不继续后台加载。
- 标题过长时截断并保留完整名称供辅助技术读取。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-mini" role="region" aria-label="迷你播放器"><div class="ds-mini__video" aria-hidden="true">▶</div><div class="ds-mini__meta"><strong>值班交接演示</strong><span>Aether Link</span></div><button type="button" class="ds-button ds-button--ghost" aria-label="展开播放器">⤢</button><button type="button" class="ds-button ds-button--ghost" aria-label="关闭播放">×</button></div>
```

## React 示例

```tsx
<YouTubeMiniplayerDock title="值班交接演示" channel="Aether Link" onExpand={expand} onClose={close} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 小窗位置不遮挡主要操作
- [ ] 关闭后停止加载
- [ ] 长标题截断但完整可读
- [ ] 键盘可展开与关闭
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
