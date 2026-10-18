# 分屏拖拽条

[返回组件目录](../README.md) · 布局 · v3 新增

## 目的与边界

在分屏布局中拖动调整两侧面板宽度，支持键盘精确操作。

## 结构

- 拖拽手柄 (ds-pane-resizer)
- 聚焦环
- 宽度提示
- 双击复位

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

手柄可聚焦；左右方向键每次调整 8px；Home/End 贴边；双击复位。

## 使用细则

- 拖拽时显示当前宽度提示。
- 最小宽度约束避免面板不可用
- 触屏支持加大命中区。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pane-resizer" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整面板宽度" aria-valuenow="38" aria-valuemin="20" aria-valuemax="80"><span class="ds-pane-resizer__grip" aria-hidden="true"></span><span class="ds-pane-resizer__tip" aria-hidden="true">38%</span></div>
```

## React 示例

```tsx
<PaneResizer percent={38} min={20} max={80} onChange={setPercent} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 拖拽显示宽度提示
- [ ] 最小宽度有约束
- [ ] 方向键精确调整
- [ ] 双击复位
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
