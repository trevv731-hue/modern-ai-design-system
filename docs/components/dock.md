# 桌面悬浮应用坞

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

macOS 与 iPadOS 标志性的桌面悬浮 Dock 工具坞；悬浮于界面边缘，提供大圆角毛玻璃与放大动效。

## 结构

- 药丸圆角磨砂悬浮坞
- 高层级环境阴影
- 独立图标按钮
- 当前运行活跃小圆点
- 垂直分割线

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

Tab 进入应用坞；左右方向键移动高亮；Enter 打开对应应用或工具面板。

## 使用细则

- 悬停图标具备自然放大的弹簧手感（scale(1.25) translateY(-4px)）。
- 活动项目底部附带微指示点（.ds-dock__dot），清晰指示当前开启的面板。
- 两端保持饱满圆角与深色高景深阴影。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-dock" role="toolbar" aria-label="悬浮快捷应用坞"><button class="ds-dock__item" aria-label="仪表盘" data-toast="打开仪表盘">📊</button><button class="ds-dock__item is-active" aria-label="实时节点" data-toast="切换至节点">🌐<span class="ds-dock__dot"></span></button><button class="ds-dock__item" aria-label="日志终端" data-toast="打开终端">💻</button><div class="ds-dock__separator" aria-hidden="true"></div><button class="ds-dock__item" aria-label="偏好设置" data-toast="打开系统设置">⚙️</button></div>
```

## React 示例

```tsx
<FloatingDock items={dockApps} activeId="nodes" onSelect={handleLaunch} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 悬停放大动效使用 transform compositor 运行无卡顿
- [ ] 活跃圆点居中对齐图标下方
- [ ] 减弱动效偏好下放大动效优雅平息
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
