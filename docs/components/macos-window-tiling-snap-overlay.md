# macOS Sequoia 窗口多向磁吸分屏手势指示器

[返回组件目录](../README.md) · macOS / 桌面 · v3 新增

## 目的与边界

复刻 macOS Sequoia 原生窗口磁吸分屏手势指示浮层，展示左右半屏、上下半屏与四角四分屏的磁吸预览落点。

## 结构

- 分屏面板外壳 (ds-window-snap-overlay)
- 说明标题
- 2x2 分区网格 (ds-window-snap-overlay__grid)
- 目标吸附高亮区 (ds-window-snap-overlay__zone.is-highlighted)
- 普通分区 (ds-window-snap-overlay__zone)

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

方向键或快捷键 ⌥⌃← / ⌥⌃→ 选择目标磁吸分屏方位；Enter 确认窗口平铺。

## 使用细则

- 当窗口拖拽至屏幕边缘时，高亮分区以柔和蓝色虚线/实体框与微光背景呈现。
- 采用轻量毛玻璃半透明底质，不阻挡被吸附窗口的背景内容。
- 提供常用的左半屏、右半屏、以及四角四分屏网格选项。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-window-snap-overlay" role="region" aria-label="窗口磁吸分屏网格"><div style="font-size:11px;font-weight:600;color:var(--ds-muted)">Window Tiling Zones</div><div class="ds-window-snap-overlay__grid"><div class="ds-window-snap-overlay__zone is-highlighted">Left Half</div><div class="ds-window-snap-overlay__zone">Right Half</div><div class="ds-window-snap-overlay__zone">Top Left</div><div class="ds-window-snap-overlay__zone">Top Right</div></div></div>
```

## React 示例

```tsx
<MacOSWindowTilingSnapOverlay activeZone="Left Half" onSelectZone={(zone) => console.log(zone)} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 激活分区以清晰的品牌蓝光晕标示
- [ ] 松开鼠标或确认时窗口立即平滑变换尺寸
- [ ] 屏幕阅读器准确读出目标吸附区域名称
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
