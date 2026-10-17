# AI 联网搜索结果列表

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

列出模型参考的网页结果，包含标题、域名与时间，便于核验来源时效性。

## 结构

- 列表外壳 (ds-search-list)
- 结果条目 (ds-search-item)
- 标题与域名
- 抓取时间

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

条目是链接，Tab 可达；列表过长时可滚动。

## 使用细则

- 显示域名而不是完整长链接。
- 标注抓取时间，过期结果需要提示。
- 无法访问的结果标明失效。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-search-list" role="region" aria-label="联网搜索结果"><ol class="ds-search-list__items"><li class="ds-search-item"><a href="#result">订阅刷新失败排查</a><span>aether.local · 抓取于 10-17 20:31</span></li><li class="ds-search-item ds-search-item--stale"><a href="#result">旧版延迟统计说明</a><span>aether.local · 抓取于 08-02，可能已过期</span></li></ol></div>
```

## React 示例

```tsx
<AIWebSearchResultList results={[{ title: "订阅刷新失败排查", domain: "aether.local", fetchedAt: "抓取于 10-17 20:31" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 结果展示域名而非长链接
- [ ] 标注抓取时间
- [ ] 过期或失效结果有提示
- [ ] 键盘可遍历结果条目
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
