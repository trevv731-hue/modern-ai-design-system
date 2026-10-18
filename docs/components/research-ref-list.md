# 参考文献列表

[返回组件目录](../README.md) · 科研 / 学术 · v3 新增

## 目的与边界

聚合文献库中的参考文献，支持跳转原文与本地副本。

## 结构

- 列表 (ds-ref-list)
- 条目
- 原文链接 (ds-ref-list__link)
- 本地 PDF 标记
- 分组标题

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

条目可聚焦；链接可达；分组标题为标题语义。

## 使用细则

- 有本地 PDF 的条目标记。
- 失效链接置灰并标注。
- 支持按年份分组。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-ref-list" role="list"><p class="ds-ref-list__group">2026 年</p><div class="ds-ref-list__item" role="listitem" tabindex="0"><span class="ds-ref-list__title">设计令牌在多端的编译一致性研究</span><a class="ds-ref-list__link" href="#paper-1">原文</a><span class="ds-ref-list__local" aria-label="有本地 PDF">PDF</span></div><p class="ds-ref-list__group">2024 年</p><div class="ds-ref-list__item" role="listitem" tabindex="0"><span class="ds-ref-list__title">组件库的演化分析方法</span><a class="ds-ref-list__link is-dead" aria-label="链接已失效">原文</a></div></div>
```

## React 示例

```tsx
<ReferenceList groups={[{ year: "2026", items: [{ title: "设计令牌在多端的编译一致性研究", local: true }] }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 本地 PDF 条目标记
- [ ] 失效链接置灰标注
- [ ] 按年份分组
- [ ] 条目可聚焦可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
