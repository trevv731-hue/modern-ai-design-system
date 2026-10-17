# Windows 11 贴靠布局选择器

[返回组件目录](../README.md) · Windows / Fluent · v3 新增

## 目的与边界

悬停或按下最大化按钮时展示可选分屏布局，让窗口贴靠一步完成，不需要用户手动拖拽缩放边框。

## 结构

- 44×38px 最大化触发区
- 布局弹层 (ds-snap-layouts__panel)
- 2/3/4 分区布局单元 (ds-snap-layouts__cell)
- 键盘提示说明

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

Win+Z 打开布局；方向键在布局单元间移动；Enter 应用当前布局；Escape 关闭弹层并把焦点还给触发按钮。

## 使用细则

- 布局单元按实际屏幕比例绘制，不画无法实现的分区。
- 未选择分区时不要立即改变窗口尺寸，先给出预览高亮。
- 弹层延迟约为 400ms，避免鼠标划过最大化按钮时闪现。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-snap-layouts"><button type="button" class="ds-snap-layouts__trigger" aria-label="选择贴靠布局" aria-expanded="true">▣</button><div class="ds-snap-layouts__panel" role="menu" aria-label="贴靠布局"><button type="button" role="menuitemradio" aria-checked="true" aria-label="左半屏 / 右半屏"><span class="ds-snap-layouts__cell" style="flex:1"></span><span class="ds-snap-layouts__cell" style="flex:1"></span></button><button type="button" role="menuitemradio" aria-checked="false" aria-label="左 1/3 与右 2/3"><span class="ds-snap-layouts__cell" style="flex:1"></span><span class="ds-snap-layouts__cell" style="flex:2"></span></button><button type="button" role="menuitemradio" aria-checked="false" aria-label="四等分"><span class="ds-snap-layouts__cell" style="flex:1"></span><span class="ds-snap-layouts__cell" style="flex:1"></span><span class="ds-snap-layouts__cell" style="flex:1"></span><span class="ds-snap-layouts__cell" style="flex:1"></span></button><span class="ds-snap-layouts__hint">Win + Z 打开布局</span></div>
```

## React 示例

```tsx
<WindowsSnapLayoutsPicker layouts={[2, 3, 4]} onPick={applyLayout} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 弹层中的布局单元数与实际可选分区一致
- [ ] Escape 关闭后焦点回到最大化按钮
- [ ] 窄屏下不展示四等分等无法实现的布局
- [ ] 高对比模式下分区边界仍然可见
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
