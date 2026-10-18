# 列宽调整手柄

[返回组件目录](../README.md) · 表格 · v3 新增

## 目的与边界

拖动表头边界调整列宽，双击自适应内容宽度。

## 结构

- 列头 (ds-col-resize__head)
- 拖拽手柄
- 宽度提示
- 自适应

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

手柄可聚焦；左右方向键调整；双击或 Home 自适应。

## 使用细则

- 拖拽时实时显示列宽像素。
- 最小列宽保证内容可读。
- 列宽调整结果本地持久化。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-col-resize"><div class="ds-col-resize__head">商品名称<span class="ds-col-resize__handle" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整列宽"></span></div><span class="ds-col-resize__tip" aria-hidden="true">240px</span></div>
```

## React 示例

```tsx
<ColumnResizer label="商品名称" width={240} onChange={setWidth} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 拖拽实时显示像素
- [ ] 最小列宽保证可读
- [ ] 双击自适应内容
- [ ] 列宽本地持久化
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
