# macOS 智能鱼眼放大 Dock 任务栏

[返回组件目录](../README.md) · macOS / 桌面 · v3 新增

## 目的与边界

复刻 macOS 经典桌面 Dock，提供超高斯模糊玻璃底座、图标悬停鱼眼微放大、弹簧阻尼微动效以及应用运行态指示微圆点。

## 结构

- 玻璃底托容器 (ds-dock-shelf)
- 应用图元外壳 (ds-dock-shelf__item)
- 应用图标主体 (ds-dock-shelf__icon)
- 运行态微圆点 (ds-dock-shelf__dot)
- 区域垂直分割线 (ds-dock-shelf__divider)

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

Tab 在各项图标之间轮转导航；Enter 或 Space 触发启动并执行弹簧跳跃反馈。

## 使用细则

- 底座采用毛玻璃半透明容器，内部图标悬停放大仅驱动 transform: scale，禁止修改宽高几何尺寸。
- 提供圆点状态指示器标记后台常驻应用，支持键盘导航高亮。
- 在开启减少动效模式时禁用放大拉伸，保持图标平稳常态。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-dock-shelf" role="toolbar" aria-label="macOS 桌面应用启动栏"><div class="ds-dock-shelf__item" role="button" tabindex="0" aria-label="访达 (Finder)"><div class="ds-dock-shelf__icon">📁</div><div class="ds-dock-shelf__dot" aria-hidden="true"></div></div><div class="ds-dock-shelf__item" role="button" tabindex="0" aria-label="启动台 (Launchpad)"><div class="ds-dock-shelf__icon">🚀</div><div class="ds-dock-shelf__dot" aria-hidden="true"></div></div><div class="ds-dock-shelf__item" role="button" tabindex="0" aria-label="终端 (Terminal)"><div class="ds-dock-shelf__icon">💻</div><div class="ds-dock-shelf__dot" aria-hidden="true"></div></div><div class="ds-dock-shelf__divider" aria-hidden="true"></div><div class="ds-dock-shelf__item" role="button" tabindex="0" aria-label="废纸篓 (Trash)"><div class="ds-dock-shelf__icon">🗑️</div></div></div>
```

## React 示例

```tsx
<MacOSDockMagnificationShelf onLaunch={(app) => console.log(app)} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 指针移入应用图标时平滑放大并略微上移，离开时柔和恢复
- [ ] 应用常驻圆点具有高对比度可见性，深色与浅色自适应切换
- [ ] 强制颜色模式下拥有清晰外边框轮廓
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
