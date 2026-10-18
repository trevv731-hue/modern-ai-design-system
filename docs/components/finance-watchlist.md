# 自选分组

[返回组件目录](../README.md) · 金融 / 交易 · v3 新增

## 目的与边界

按分组管理自选标的，支持拖拽排序与分组切换。

## 结构

- 分组标签 (ds-watchlist__tabs)
- 列表 (ds-watchlist__list)
- 拖拽手柄 (ds-watchlist__handle)
- 新建按钮

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

标签可切换；编辑模式下支持键盘移动条目；删除有撤销。

## 使用细则

- 拖拽排序必须提供键盘替代方案。
- 分组与条目数可见。
- 支持批量粘贴代码导入。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-watchlist"><div class="ds-watchlist__tabs" role="tablist" aria-label="自选分组"><button type="button" role="tab" aria-selected="true">自选股 <em>6</em></button><button type="button" role="tab" aria-selected="false">持仓 <em>3</em></button><button type="button" role="tab" aria-selected="false">观察 <em>12</em></button><button type="button" class="ds-watchlist__add" aria-label="新建分组">+</button></div><ul class="ds-watchlist__list"><li><span class="ds-watchlist__handle" aria-hidden="true">⋮⋮</span><span class="ds-watchlist__name">中芯国际</span><span class="ds-watchlist__code">688981</span><span class="is-up">+2.14%</span></li><li><span class="ds-watchlist__handle" aria-hidden="true">⋮⋮</span><span class="ds-watchlist__name">比亚迪</span><span class="ds-watchlist__code">002594</span><span class="is-down">-0.87%</span></li><li><span class="ds-watchlist__handle" aria-hidden="true">⋮⋮</span><span class="ds-watchlist__name">招商银行</span><span class="ds-watchlist__code">600036</span><span class="is-up">+0.42%</span></li></ul></div>
```

## React 示例

```tsx
<WatchlistGroup groups={[{ name: "自选股", items: [{ name: "中芯国际", code: "688981", pct: 2.14 }] }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 拖拽有键盘替代
- [ ] 分组与条目数可见
- [ ] 支持批量导入代码
- [ ] 删除可撤销
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
