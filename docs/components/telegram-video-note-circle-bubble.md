# Telegram 圆形视讯留言泡泡与环形进度条

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

Telegram 最具辨识度的圆形视讯留言泡泡（Telescope Circular Video Note）；包含圆形视讯视窗、外圈环形播放流光进度圈、静音切换微徽标与双击暂停互动。

## 结构

- 圆形外壳 (.ds-video-note)
- 环形旋转进度条 (.ds-video-note__ring)
- 微缩圆形视讯画面 (.ds-video-note__thumb)
- 扬声器与剩余时长胶囊 (.ds-video-note__badge)

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

Tab 聚焦视讯气泡；Space 或 Enter 切换静音/播放；双击暂停视频流。

## 使用细则

- 环形进度条使用旋转变换，在减弱动态效果下平稳暂停。
- 视频圆形遮罩使用 border-radius: 9999px 与 overflow: hidden，确保 Compositor 硬件加速。
- 明确播报当前视频留言作者与时长。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-video-note" role="region" aria-label="Telegram 圆形视讯留言：时长 0:28，点击切换播放与静音"><div class="ds-video-note__ring" aria-hidden="true"></div><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Ccircle cx='70' cy='70' r='70' fill='%23374151'/%3E%3Ctext x='70' y='76' font-size='24' text-anchor='middle' fill='white' font-family='sans-serif'%3EVIDEO%3C/text%3E%3C/svg%3E" alt="视讯留言画面预览" class="ds-video-note__thumb"><div class="ds-video-note__badge">🔊 0:28</div></div>
```

## React 示例

```tsx
<TelegramVideoNoteCircleBubble duration="0:28" isMuted={false} onToggle={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 圆形遮罩裁剪光滑无毛刺
- [ ] 环形进度条与视频中心完美同心
- [ ] 提供清晰的静音与时长状态播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
