# Linear & Notion 多条件筛选规则微面板

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Linear 与 Notion 现代协作软件中标志性的高级属性筛选规则微浮层；由“属性名 ▾”、“逻辑符 ▾”与“值 ✕”三个连贯药丸胶囊组成，支持一键重置与应用。

## 结构

- 弹出面板外壳 (.ds-filter-popover)
- 大写辅助说明标题 (.ds-filter-popover__title)
- 三段式过滤条件胶囊行 (.ds-filter-popover__row)
- 独立属性过滤胶囊 (.ds-filter-popover__pill)
- 底部重置与确认动作栏 (.ds-filter-popover__actions)

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

Tab 依次聚焦各过滤胶囊并回车展开选项；Esc 取消并关闭浮层；Enter 确认应用筛选。

## 使用细则

- 规则胶囊行紧凑排列，高亮显示已过滤的数值药丸，直观呈现查询逻辑。
- 底部操作栏分离重置与应用操作，避免误触丢失已构建的复合条件。
- 适合任务看板多维过滤、复杂日志查询台、电商商品聚合筛选及数据库视图构建。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-filter-popover" role="dialog" aria-label="数据多条件筛选器"><span class="ds-filter-popover__title">筛选规则 (Filter Rule)</span><div class="ds-filter-popover__row"><span class="ds-filter-popover__pill">Priority ▾</span><span class="ds-filter-popover__pill">is ▾</span><span class="ds-filter-popover__pill" style="color:var(--ds-action)">Urgent ✕</span></div><div class="ds-filter-popover__actions"><button type="button" class="ds-button ds-button--ghost" style="min-height:26px;font-size:11px">重置</button><button type="button" class="ds-button ds-button--primary" style="min-height:26px;font-size:11px">应用筛选</button></div></div>
```

## React 示例

```tsx
<LinearPropertyFilterPopover property="Priority" operator="is" value="Urgent" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三个条件药丸水平排布整齐
- [ ] 高亮条件值可一键移除
- [ ] 弹窗投影立体感符合设计规范
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
