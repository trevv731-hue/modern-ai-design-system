# Meta / Instagram 动态幻彩渐变故事头像环

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Meta (Instagram/WhatsApp) 与主流移动端广泛使用的流光头像光环组件；支持未读故事（Conic Gradient 暖色动态流动环）、正在直播（LIVE 脉冲红点徽标）、已读灰环，以及头像点按时的弹性按压缩放反馈。

## 结构

- 头像光环包裹容器 (.ds-story-avatar-ring)
- 旋转渐变流光外圈 (.ds-story-avatar-ring__gradient)
- 隔离间隙圈 (.ds-story-avatar-ring__gap)
- 头像核心图像 (.ds-story-avatar-ring__img)
- 直播状态微胶囊 (.ds-story-avatar-ring__live-badge)

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

Tab 聚焦头像；Enter 或 Space 打开故事全屏播放视窗；屏幕阅读器清晰播报用户名称与直播状态。

## 使用细则

- 渐变环使用 Instagram 标志性的紫-洋红-橙-黄多色渐变，或 AI 产品的极光青蓝渐变。
- 系统开启 prefers-reduced-motion 时，停止旋转动效，保留静态渐变彩环。
- 头像点击时提供 scale(0.94) 弹性形变反馈。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-story-avatar-ring is-live" role="button" tabindex="0" aria-label="Elena Vance 的即时故事，正在直播中，点击观看"><div class="ds-story-avatar-ring__gradient" aria-hidden="true"></div><div class="ds-story-avatar-ring__gap"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='24' fill='%236366f1'/%3E%3Ctext x='24' y='28' font-size='16' text-anchor='middle' fill='white' font-family='sans-serif'%3EEV%3C/text%3E%3C/svg%3E" alt="Elena Vance 头像" class="ds-story-avatar-ring__img"></div><span class="ds-story-avatar-ring__live-badge">LIVE</span></div>
```

## React 示例

```tsx
<MetaStoryAvatarGradientRing userName="Elena Vance" avatarSrc="data:image/svg+xml,..." isLive={true} hasUnreadStory={true} onClick={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 渐变环旋转在减弱动态效果下平稳暂停
- [ ] LIVE 徽标对比度与文字清晰
- [ ] 头像支持键盘聚焦与回车触发
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
