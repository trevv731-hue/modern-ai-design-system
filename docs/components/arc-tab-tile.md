# Arc 浏览器侧边微标签

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

Arc Browser 与 Safari 18 竖向侧栏微标签磁贴；支持图标、音频播放指示、悬停右滑微弹与悬停关闭按钮。

## 结构

- 应用/网站微图标
- 标题单行截断文本
- 音频播放指示扬声器
- 悬停显隐关闭微按钮 (×)
- 激活强调色背板

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

Tab 聚焦至标签磁贴；Enter 切换当前标签页；聚焦关闭按钮时 Space 关闭。

## 使用细则

- 悬停时使用 translateX(2px) 进行极微小横向右移，模拟物理书签微探出的触感。
- 关闭按钮在默认状态下 opacity: 0，悬停或聚焦时平滑显现，保持侧栏视觉极简。
- 激活状态带有主题 accent-soft 柔底与 1px 细线边框，主次层级清晰。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-arc-tab is-active" role="tab" aria-selected="true" tabindex="0" data-toast="切换至控制台标签"><div class="ds-arc-tab__main"><span class="ds-arc-tab__icon">🪐</span><span class="ds-arc-tab__title">AetherLink 控制台</span></div><div class="ds-arc-tab__actions"><span class="ds-arc-tab__audio">🔊</span><button type="button" class="ds-arc-tab__close" aria-label="关闭标签" data-toast="关闭标签">×</button></div></div>
```

## React 示例

```tsx
<ArcTabTile icon="🪐" title="AetherLink 控制台" isAudio={true} isActive={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 悬停右移与关闭按钮淡入平滑无卡顿
- [ ] 音频扬声器图标与标题对齐协调
- [ ] 深浅主题下激活色块文字辨识度高
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
