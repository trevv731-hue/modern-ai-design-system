# 知识点掌握度

[返回组件目录](../README.md) · 教育 / 学习 · v3 新增

## 目的与边界

以五级刻度展示单个知识点的掌握程度与复习建议。

## 结构

- 刻度 (ds-knowledge-check__scale)
- 等级标签
- 掌握度读数
- 复习按钮

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

刻度可聚焦；等级变化时播报。

## 使用细则

- 五级：未学、初学、熟悉、掌握、精通。
- 低于熟悉给出复习入口。
- 等级颜色之外有文字标签。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-knowledge-check"><div class="ds-knowledge-check__head"><strong>二叉树遍历</strong><span class="ds-knowledge-check__level is-familiar">熟悉</span></div><div class="ds-knowledge-check__scale" role="meter" aria-valuenow="3" aria-valuemin="0" aria-valuemax="4" aria-label="掌握度 3 级，共 5 级"><i class="is-on"></i><i class="is-on"></i><i class="is-on"></i><i></i><i></i></div><p class="ds-knowledge-check__tip">建议 3 天内复习 1 次以巩固。</p><button type="button">安排复习</button></div>
```

## React 示例

```tsx
<KnowledgeCheckChip topic="二叉树遍历" level={3} tip="建议 3 天内复习 1 次以巩固。" onReview={review} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 五级刻度齐全
- [ ] 低于熟悉给复习入口
- [ ] 等级有文字标签
- [ ] 等级变化播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
