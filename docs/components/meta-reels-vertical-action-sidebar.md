# Meta Reels 沉浸式短视频右侧互动浮条

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 Instagram Reels 与沉浸式全屏流媒体的垂直悬浮互动栏，包含点赞心形、评论气泡、纸飞机转发与旋转黑胶唱片音轨徽章。

## 结构

- 垂直浮动列 (ds-reels-sidebar)
- 互动操作槽 (ds-reels-sidebar__item)
- 圆形半透明按钮 (ds-reels-sidebar__icon-btn)
- 高亮数字计数 (ds-reels-sidebar__count)
- 旋转黑胶唱片 (ds-reels-sidebar__disc)

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

Tab 键在点赞、评论、分享按钮间切换；L 键快捷点赞；C 键打开评论。

## 使用细则

- 按钮背景采用深黑半透明高斯模糊材质，在各种明暗视频背景上均保持高度可见。
- 点赞或触摸时触发弹簧微放大动效，心形图标提供即时粉红激活高亮。
- 底部黑胶唱片采用 GPU 合成器旋转动画，象征当前视频的原声正在播放。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-reels-sidebar" role="toolbar" aria-label="短视频侧边互动栏"><div class="ds-reels-sidebar__item"><button type="button" class="ds-reels-sidebar__icon-btn" aria-label="点赞视频">❤️</button><span class="ds-reels-sidebar__count">84.2K</span></div><div class="ds-reels-sidebar__item"><button type="button" class="ds-reels-sidebar__icon-btn" aria-label="评论视频">💬</button><span class="ds-reels-sidebar__count">1.4K</span></div><div class="ds-reels-sidebar__item"><button type="button" class="ds-reels-sidebar__icon-btn" aria-label="分享转发">↗️</button><span class="ds-reels-sidebar__count">280</span></div><div class="ds-reels-sidebar__item"><div class="ds-reels-sidebar__disc" aria-label="背景原声音轨正在旋转"><div class="ds-reels-sidebar__disc-inner"></div></div></div></div>
```

## React 示例

```tsx
<MetaReelsVerticalActionSidebar likes="84.2K" comments="1.4K" shares="280" onLike={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 唱片旋转流畅且 CPU 消耗微乎其微
- [ ] 数字文字附带文字阴影，保证在明亮视频下清晰可读
- [ ] 减少动效模式下唱片停止旋转，呈现静态唱片
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
