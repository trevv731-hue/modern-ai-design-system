# iOS 18 悬浮手势抽屉拖拽胶囊手柄

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

Apple iOS 18 控制中心与灵动岛交互抽屉风格的悬浮拖拽手柄药丸；集成磨砂毛玻璃底座、居中触感凹槽抓手棒、左侧功能标题与右侧就绪微标。

## 结构

- 44px 悬浮药丸胶囊 (.ds-drawer-pill)
- 左侧图标与标题组 (.ds-drawer-pill__lead)
- 居中 32px 物理触感抓手横条 (.ds-drawer-pill__handle)
- 右侧高亮状态指示胶囊 (.ds-drawer-pill__badge)

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

Tab 聚焦手柄；Enter 或 Space 展开或收起对应的内容抽屉面板；支持触摸上下滑动手势。

## 使用细则

- 采用 backdrop-filter: blur(20px) 与微柔阴影，在深色和浅色壁纸上均具有极佳悬浮立体感。
- 抓手横条默认居中且透明度 0.6，交互按压微缩放（scale(0.97)），触感真实。
- 适合作为底部半屏抽屉、快捷控制中心入口及侧边功能呼出条。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-drawer-pill" role="button" tabindex="0" aria-label="Siri 建议快捷指令 抽屉操作手柄"><div class="ds-drawer-pill__lead"><span>✨</span><span>Siri 建议快捷指令</span></div><div class="ds-drawer-pill__handle" aria-hidden="true"></div><span class="ds-drawer-pill__badge">就绪</span></div>
```

## React 示例

```tsx
<IosActionDrawerPill title="Siri 建议快捷指令" badge="就绪" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 手柄抓手条几何居中无偏移
- [ ] 按压微缩放物理反馈自然
- [ ] 毛玻璃背景磨砂通透
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
