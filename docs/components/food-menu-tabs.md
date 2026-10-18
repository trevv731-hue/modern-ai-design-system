# 菜品分类标签

[返回组件目录](../README.md) · 餐饮 / 美食 · v3 新增

## 目的与边界

在菜单顶部切换菜品分类并显示数量。

## 结构

- 标签组 (ds-menu-tabs)
- 分类名
- 数量徽标
- 当前指示器

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

标签为 tab 语义；左右方向键切换；当前项 aria-selected。

## 使用细则

- 分类数量徽标可见。
- 当前分类指示器随滑动移动。
- 分类过多时横向滚动并指示溢出。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-menu-tabs" role="tablist" aria-label="菜品分类"><button type="button" role="tab" aria-selected="true">热菜 <em>26</em></button><button type="button" role="tab" aria-selected="false">凉菜 <em>12</em></button><button type="button" role="tab" aria-selected="false">主食 <em>8</em></button><button type="button" role="tab" aria-selected="false">饮品 <em>15</em></button></div>
```

## React 示例

```tsx
<MenuCategoryTabs categories={[{ name: "热菜", count: 26 }, { name: "凉菜", count: 12 }]} active={0} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 分类数量徽标可见
- [ ] 指示器随滑动移动
- [ ] 溢出有滚动指示
- [ ] tab 语义与方向键
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
