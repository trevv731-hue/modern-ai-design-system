# iOS 18 Safari 地址栏网页缩放与阅读器控制 HUD

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

iOS 18 Safari 地址栏点击 aA 弹出的网页缩放与阅读视图微调面板（Safari Page Zoom & Reader HUD）；包含减号/百分比/加号一体步进微控、点击百分比直接重置、竖线分隔符及一键阅读视图切换快捷按钮。

## 结构

- 圆角微阴影浮动气泡卡片 (.ds-safari-zoom-hud)
- 紧凑加减号三段式步进药丸 (.ds-safari-zoom-hud__stepper)
- 等宽百分比数值与居中重置交互 (.ds-safari-zoom-hud__pct)
- 垂直分割细线 (.ds-safari-zoom-hud__sep)
- 右侧书本图样阅读器模式切换 (.ds-safari-zoom-hud__action)

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

Tab 导航各按钮；Enter 或 Space 调整百分比或打开阅读器；Escape 关闭浮层。

## 使用细则

- 具备 role="dialog" 与 aria-label，加减按钮附带明确的无障碍标签。
- 缩放百分比数值字体加粗居中，与背景对比度良好。
- 适合浏览器扩展、阅读器应用、排版调试工作台、无障碍视图调整面板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-safari-zoom-hud" role="dialog" aria-label="Safari 网页文字缩放与阅读器控制 HUD"><div class="ds-safari-zoom-hud__stepper"><button type="button" class="ds-safari-zoom-hud__btn" aria-label="缩小字号">-</button><span class="ds-safari-zoom-hud__pct" title="点击重置为 100%">100%</span><button type="button" class="ds-safari-zoom-hud__btn" aria-label="放大字号">+</button></div><span class="ds-safari-zoom-hud__sep" aria-hidden="true"></span><button type="button" class="ds-safari-zoom-hud__action"><span>📖</span><span>阅读视图</span></button></div>
```

## React 示例

```tsx
<IosSafariPageZoomHud zoom={100} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 减号、百分比、加号排列紧凑
- [ ] 竖线分割自然
- [ ] 阅读视图文字与图标水平居中
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
