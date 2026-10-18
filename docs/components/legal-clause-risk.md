# 条款风险行

[返回组件目录](../README.md) · 法律 / 合规 · v3 新增

## 目的与边界

展示单个条款的风险等级、摘要与修订建议。

## 结构

- 等级标签 (ds-clause-risk__level)
- 条款号与标题 (ds-clause-risk__title)
- 条款摘要
- 修订建议 (ds-clause-risk__fix)
- 状态

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

行可聚焦展开修订建议；采纳与忽略按钮可达。

## 使用细则

- 高风险条款置顶排列。
- 修订建议可一键采纳或忽略。
- 支持与条款原文对比查看。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-clause-risk is-high" tabindex="0"><div class="ds-clause-risk__head"><span class="ds-clause-risk__level">高风险</span><strong class="ds-clause-risk__title">第 8.2 条 · 保密期限</strong></div><p class="ds-clause-risk__summary">保密义务永久有效，未设例外情形。</p><p class="ds-clause-risk__fix">建议增加“法律法规强制披露”例外条款。</p><div class="ds-clause-risk__foot"><button type="button" class="is-primary">采纳建议</button><button type="button">查看原文</button><button type="button">忽略</button></div></article>
```

## React 示例

```tsx
<ClauseRiskRow no="第 8.2 条" title="保密期限" level="high" summary="保密义务永久有效，未设例外情形。" fix="建议增加例外条款。" status="open" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 高风险条款置顶
- [ ] 建议一键采纳或忽略
- [ ] 可与原文对比
- [ ] 行可聚焦读摘要
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
