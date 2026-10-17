# Figma 自动布局尺寸 HUD

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

选中自动布局容器时在边缘显示尺寸、间距与对齐方式，便于直接调整而不打开面板。

## 结构

- HUD 外壳 (ds-al-hud)
- 尺寸数值标签
- 间距标记线
- 对齐图标组

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

方向键微调尺寸；Shift+方向键以 10 为步长；Escape 关闭 HUD。

## 使用细则

- 尺寸与间距显示真实数值，单位明确。
- HUD 不遮挡选中对象的内容区域。
- 缩放画布时 HUD 保持可读，不随比例失真。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-al-hud" role="status" aria-label="自动布局尺寸"><span class="ds-al-hud__size">宽 320 · 高 180</span><span class="ds-al-hud__gap">间距 12</span><span class="ds-al-hud__align" aria-hidden="true">⇤</span></div>
```

## React 示例

```tsx
<FigmaAutoLayoutResizeHud width={320} height={180} gap={12} align="start" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 尺寸与间距带上明确单位
- [ ] HUD 不遮挡内容
- [ ] 画布缩放时文字保持可读
- [ ] 键盘可微调尺寸
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
