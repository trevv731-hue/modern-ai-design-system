# 筛选工具栏

[返回组件目录](../README.md) · 搜索 · v3 新增

## 目的与边界

在搜索结果顶部集中放置搜索框与常用筛选入口。

## 结构

- 搜索框 (ds-filter-bar__input)
- 筛选按钮
- 排序按钮
- 视图切换
- 重置

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

Tab 遍历各控件；/ 快捷键聚焦搜索框。

## 使用细则

- 已应用筛选在按钮上显示数量角标。
- 重置按钮仅在存在筛选时可用。
- 筛选状态变化即时刷新结果并播报。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-filter-bar" role="search"><div class="ds-filter-bar__input"><span aria-hidden="true">🔍</span><input type="search" value="设计规范" aria-label="搜索"><kbd>/</kbd></div><button type="button" class="is-active">筛选<span class="ds-filter-bar__count">3</span></button><button type="button">排序：相关度</button><div class="ds-filter-bar__views" role="group" aria-label="视图"><button type="button" aria-pressed="true" aria-label="列表视图">☰</button><button type="button" aria-pressed="false" aria-label="网格视图">▦</button></div></div>
```

## React 示例

```tsx
<FilterBar query="设计规范" filters={3} sort="相关度" view="list" onSearch={setQuery} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 筛选按钮显示数量角标
- [ ] 重置仅在有筛选时可用
- [ ] 状态变化有播报
- [ ] / 快捷键聚焦搜索框
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
