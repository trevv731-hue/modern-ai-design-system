# Figma 画布切片导出预设悬浮工具栏

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Figma 无限画布选中图层切片导出倍率与格式预设悬浮工具栏（Canvas Export Slice Preset Floating HUD）；包含 @1x / @2x / @3x 多倍率分段切换、导出格式药丸（PNG/SVG/PDF）与一键导出按钮。

## 结构

- 悬浮圆角工具条 (.ds-export-slice-hud)
- 多倍率单选分段芯片群 (.ds-export-slice-hud__density-chips, .ds-export-slice-hud__chip)
- 格式等宽徽标 (.ds-export-slice-hud__format)
- 主色导出按钮 (.ds-export-slice-hud__export-btn)

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

Tab 遍历各倍率芯片与导出按键；左右方向键切换单选倍率，Enter 执行导出。

## 使用细则

- 具备 role="toolbar" 与内部 role="radiogroup" 规范。
- 当前选中的倍率芯片使用 is-active 样式高亮。
- 适合设计协同画布、切图导出插件、前端资源提取面板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-export-slice-hud" role="toolbar" aria-label="画布切片导出预设工具栏"><div class="ds-export-slice-hud__density-chips" role="radiogroup" aria-label="切片导出缩放比例"><button type="button" role="radio" aria-checked="false" class="ds-export-slice-hud__chip">@1x</button><button type="button" role="radio" aria-checked="true" class="ds-export-slice-hud__chip is-active">@2x</button><button type="button" role="radio" aria-checked="false" class="ds-export-slice-hud__chip">@3x</button></div><span class="ds-export-slice-hud__format">PNG</span><button type="button" class="ds-export-slice-hud__export-btn" aria-label="导出 @2x PNG 切片">Export</button></div>
```

## React 示例

```tsx
<FigmaCanvasExportSliceHud activeDensity="@2x" densities={["@1x", "@2x", "@3x"]} format="PNG" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] @1x/@2x/@3x 倍率分段清晰
- [ ] PNG 等宽格式微标
- [ ] Export 按钮交互完整
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
