# 最近搜索列表

[返回组件目录](../README.md) · 搜索 · v3 新增

## 目的与边界

展示用户最近的搜索记录，支持一键重搜与单条删除。

## 结构

- 列表容器 (ds-recent-search)
- 搜索词
- 时间
- 删除按钮
- 清空全部

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

Tab 遍历删除按钮；回车重新搜索。

## 使用细则

- 按时间倒序展示。
- 删除单条不刷新整页。
- 提供“清空全部”并有确认。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-recent-search" role="group" aria-label="最近搜索"><p class="ds-recent-search__title">最近搜索</p><ul><li><button type="button">设计规范</button><time>2 小时前</time><button type="button" aria-label="删除记录 设计规范">✕</button></li><li><button type="button">Fluent 动效</button><time>昨天</time><button type="button" aria-label="删除记录 Fluent 动效">✕</button></li></ul><button type="button" class="ds-recent-search__clear">清空全部</button></div>
```

## React 示例

```tsx
<RecentSearchList items={[{ term: "设计规范", time: "2 小时前" }, { term: "Fluent 动效", time: "昨天" }]} onClearAll={clearAll} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 按时间倒序
- [ ] 单条删除不刷新页面
- [ ] 清空全部有确认
- [ ] 删除按钮有可读名称
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
