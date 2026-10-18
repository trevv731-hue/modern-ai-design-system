# 汇总行

[返回组件目录](../README.md) · 表格 · v3 新增

## 目的与边界

在表格底部固定展示合计与统计值，滚动时始终可见。

## 结构

- 汇总行 (ds-sum-row)
- 合计值
- 统计项
- 计算说明

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

汇总行为静态文本；计算说明可聚焦查看。

## 使用细则

- 合计值随筛选结果实时更新。
- 说明合计口径，如“含税”。
- 数值列右对齐并使用等宽字体。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sum-row" role="row"><span class="ds-sum-row__label">合计（含税）</span><span class="ds-sum-row__value">¥18,742.00</span><span class="ds-sum-row__meta">12 笔 · 均值 ¥1,561.83</span><button type="button" aria-label="查看计算说明">ⓘ</button></div>
```

## React 示例

```tsx
<StickySummaryRow label="合计（含税）" value="¥18,742.00" meta="12 笔 · 均值 ¥1,561.83" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 合计随筛选实时更新
- [ ] 说明合计口径
- [ ] 数值右对齐等宽字体
- [ ] 计算说明可查看
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
