# 空结果状态

[返回组件目录](../README.md) · 搜索 · v3 新增

## 目的与边界

在搜索无结果时说明原因，并给出修正建议与替代操作。

## 结构

- 插画区 (ds-search-empty__art)
- 主文案
- 原因说明
- 建议操作

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

建议操作可键盘到达；状态变化播报一次。

## 使用细则

- 给出具体原因：拼写、范围过窄、无权限。
- 提供 2-3 个可执行建议。
- 避免只写“无结果”结束对话。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-search-empty" role="status"><span class="ds-search-empty__art" aria-hidden="true">🔍</span><strong>没有找到“设计規范”的结果</strong><p>可能是拼写有误，或筛选条件过于严格</p><div class="ds-search-empty__actions"><button type="button">搜索“设计规范”</button><button type="button">清除筛选条件</button></div></div>
```

## React 示例

```tsx
<SearchEmptyState query="设计規范" reason="可能是拼写有误，或筛选条件过于严格" onRetry={retry} onClear={clear} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 说明具体原因
- [ ] 提供 2-3 个建议
- [ ] 建议可键盘执行
- [ ] status 语义且只播报一次
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
