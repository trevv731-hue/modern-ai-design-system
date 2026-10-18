# 搜索范围标签

[返回组件目录](../README.md) · 搜索 · v3 新增

## 目的与边界

在不同内容范围（全部、文档、图片、成员）间切换搜索结果。

## 结构

- 标签项 (ds-scope-tabs__tab)
- 范围名
- 结果计数
- 当前态

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

左右方向键切换标签；当前标签 aria-selected。

## 使用细则

- 每个标签展示该范围的结果数。
- 切换时保留搜索关键词。
- 零结果范围仍展示但置灰说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-scope-tabs" role="tablist" aria-label="搜索范围"><button type="button" role="tab" aria-selected="true" class="is-active">全部<em>266</em></button><button type="button" role="tab" aria-selected="false">文档<em>96</em></button><button type="button" role="tab" aria-selected="false">图片<em>128</em></button><button type="button" role="tab" aria-selected="false" class="is-empty">成员<em>0</em></button></div>
```

## React 示例

```tsx
<SearchScopeTabs scopes={[{ label: "全部", count: 266 }, { label: "文档", count: 96 }]} active="全部" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 标签展示结果计数
- [ ] 切换保留关键词
- [ ] 零结果置灰说明
- [ ] tablist 键盘操作
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
