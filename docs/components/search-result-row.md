# 搜索结果行

[返回组件目录](../README.md) · 搜索 · v3 新增

## 目的与边界

展示单条搜索结果的标题、摘要、路径与相关性元信息。

## 结构

- 类型图标 (ds-result-row__icon)
- 标题
- 摘要高亮
- 路径
- 时间
- 相关度

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

整行可聚焦；回车打开；方向键在结果间移动。

## 使用细则

- 摘要中命中词加粗。
- 路径展示来源位置
- 相关度只在排序为相关度时展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-result-row" tabindex="0" role="button"><span class="ds-result-row__icon" aria-hidden="true">📄</span><div class="ds-result-row__body"><strong>2026 <mark>设计规范</mark></strong><p>第三章更新了玻璃层级与<mark>设计规范</mark>评审流程…</p><span class="ds-result-row__path">项目资料 / 设计 / 规范</span></div><time>10-16</time></div>
```

## React 示例

```tsx
<SearchResultRow title="2026 设计规范" snippet="第三章更新了玻璃层级与设计规范评审流程…" path="项目资料 / 设计 / 规范" time="10-16" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 摘要命中词加粗
- [ ] 路径展示来源位置
- [ ] 相关度按需展示
- [ ] 整行可键盘打开
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
