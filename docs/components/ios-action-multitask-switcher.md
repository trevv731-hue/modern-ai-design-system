# iOS 18 多任务后台应用切换卡片

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

iOS 18 底部上滑多任务切换界面的浮动应用缩略图卡片（App Switcher Swipe Card）；圆角大曲率视窗、顶部应用图标与名称标题栏、骨架占位视窗、底部手势指示横条及轻微按压缩放反馈。

## 结构

- 高大圆角悬浮卡片 (.ds-app-switcher-card)
- 应用图标标题胶囊栏 (.ds-app-switcher-card__bar)
- 微缩内容骨架展示区 (.ds-app-switcher-card__body)
- 底部手势药丸横杠 (.ds-app-switcher-card__pill)
- 悬浮与拖拽轻微物理缩放

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

ArrowLeft / ArrowRight 切换卡片；Enter 切换进入该应用；Delete 或向上滑动手势关闭应用。

## 使用细则

- 具备 role="button" 与 tabindex="0"，通过 aria-label 完整宣布应用名称与状态。
- 支持纯键盘 Enter/Space 激活及 Delete 退出。
- 适合移动端网页样机、多任务应用后台管理、多标签页 3D 轮播。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-app-switcher-card" role="button" tabindex="0" aria-label="多任务切换卡片: Terminal Pro"><div class="ds-app-switcher-card__bar"><span class="ds-app-switcher-card__icon" aria-hidden="true">⚡</span><span class="ds-app-switcher-card__title">Terminal Pro</span></div><div class="ds-app-switcher-card__body"><div class="ds-app-switcher-card__skeleton" style="width:80%"></div><div class="ds-app-switcher-card__skeleton" style="width:60%"></div><div class="ds-app-switcher-card__skeleton" style="width:90%"></div><div class="ds-app-switcher-card__pill" aria-hidden="true"></div></div></div>
```

## React 示例

```tsx
<IosAppSwitcherCard appName="Terminal Pro" icon="⚡" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 28px 超大圆角自然顺滑
- [ ] 悬浮缩放无毛边
- [ ] 顶部栏与内容区分界清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
