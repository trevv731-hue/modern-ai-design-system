# 标签溢出菜单

[返回组件目录](../README.md) · 布局 · v3 新增

## 目的与边界

当标签数量超出容器宽度时，将溢出标签收纳进菜单。

## 结构

- 溢出按钮 (ds-tab-overflow__btn)
- 菜单
- 标签项
- 计数

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

溢出按钮 aria-expanded；菜单项可聚焦；方向键导航。

## 使用细则

- 溢出按钮显示被收纳数量。
- 当前激活标签永不被收纳。
- 激活溢出标签时自动滚动到可视区。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tab-overflow"><button type="button" class="ds-tab-overflow__btn" aria-expanded="false" aria-haspopup="menu">更多 <em>5</em><span aria-hidden="true">▾</span></button><ul role="menu" hidden><li role="menuitem">标签 7</li><li role="menuitem">标签 8</li><li role="menuitem">标签 9</li></ul></div>
```

## React 示例

```tsx
<TabOverflowMenu hiddenCount={5} items={["标签 7", "标签 8", "标签 9"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 溢出按钮显示收纳数量
- [ ] 当前标签不被收纳
- [ ] 激活溢出标签自动滚动
- [ ] 菜单键盘可操作
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
