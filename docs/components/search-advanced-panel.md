# 高级搜索面板

[返回组件目录](../README.md) · 搜索 · v3 新增

## 目的与边界

展开更多精细条件（时间范围、所有者、标签组合）进行精确检索。

## 结构

- 面板外壳 (ds-adv-search)
- 条件分组
- 时间范围
- 所有者选择
- 标签组合
- 应用与重置

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

面板内 Tab 循环；Esc 收起；回车应用。

## 使用细则

- 条件支持“包含全部/任一”逻辑切换。
- 时间范围提供常用预设。
- 已应用的折叠条件在按钮上显示摘要。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-adv-search" role="region" aria-label="高级搜索"><div class="ds-adv-search__row"><label for="adv-owner">所有者</label><input id="adv-owner" value="林晓"></div><div class="ds-adv-search__row"><label for="adv-from">时间范围</label><input id="adv-from" type="date" value="2026-10-01"><span>至</span><input type="date" value="2026-10-18"></div><div class="ds-adv-search__row"><span id="adv-logic">标签匹配</span><select aria-labelledby="adv-logic"><option>包含全部</option><option>包含任一</option></select></div><div class="ds-adv-search__actions"><button type="button">重置</button><button type="button" class="is-primary">应用筛选</button></div></div>
```

## React 示例

```tsx
<AdvancedSearchPanel owner="林晓" from="2026-10-01" to="2026-10-18" logic="all" onApply={apply} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 支持包含全部与任一
- [ ] 时间有常用预设
- [ ] 折叠按钮显示摘要
- [ ] Esc 收起且回车应用
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
