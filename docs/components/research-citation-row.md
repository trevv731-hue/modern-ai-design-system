# 引用条目

[返回组件目录](../README.md) · 科研 / 学术 · v3 新增

## 目的与边界

以编号列表展示参考文献条目与 DOI，支持复制引用格式。

## 结构

- 编号 (ds-citation-row__no)
- 作者与标题
- 期刊卷期页
- 年份与 DOI
- 复制按钮

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

行可聚焦；复制按钮可达并播报结果。

## 使用细则

- 支持 GB/T 7714 与 APA 两种格式切换。
- DOI 可点击跳转。
- 长标题两行截断。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-citation-row" tabindex="0" role="listitem" aria-label="参考文献 1，林岚 等，设计令牌在多端的编译一致性研究，CHI 2026，DOI 10.1145/0000000"><span class="ds-citation-row__no">[1]</span><div class="ds-citation-row__body"><strong>林岚, 周牧, NGUYEN A, 等. 设计令牌在多端的编译一致性研究[J]. CHI, 2026.</strong><span class="ds-citation-row__doi">DOI: 10.1145/0000000</span></div><button type="button" aria-label="复制引用">复制</button></div>
```

## React 示例

```tsx
<CitationRow index={1} text="林岚, 周牧, 等. 设计令牌在多端的编译一致性研究[J]. CHI, 2026." doi="10.1145/0000000" onCopy={copy} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 两种引用格式切换
- [ ] DOI 可跳转
- [ ] 长标题两行截断
- [ ] 复制结果播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
