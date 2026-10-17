# Figma 网格间距 HUD

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

在选中网格布局时显示列数、行间距与列间距，支持直接拖动调整而不是推测数值。

## 结构

- HUD 外壳 (ds-grid-hud)
- 列数值滑块
- 行间距与列间距
- 实时预览提示

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

方向键调整列数与间距；Shift 加速；Escape 关闭 HUD。

## 使用细则

- 拖动只改变布局参数，不改变元素内容。
- 数值显示单位，不使用相对描述。
- 参数超范围时给出限制提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-grid-hud" role="group" aria-label="网格布局参数"><span class="ds-grid-hud__label">列数 4</span><span class="ds-grid-hud__label">列间距 16</span><span class="ds-grid-hud__label">行间距 24</span><span class="ds-grid-hud__note">拖动可实时预览</span></div>
```

## React 示例

```tsx
<FigmaGridLayoutGapHud columns={4} columnGap={16} rowGap={24} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 拖动不改变内容
- [ ] 数值带单位
- [ ] 超范围时提示限制
- [ ] 键盘可调整参数
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
