# 更新日志投票

[返回组件目录](../README.md) · 反馈 · v3 新增

## 目的与边界

在更新日志条目下收集“有帮助”反馈，并关联具体版本。

## 结构

- 版本号 (ds-log-vote__version)
- 更新摘要
- 有帮助按钮
- 无帮助按钮
- 感谢状态

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

两个反馈按钮均可聚焦；点击后禁用并致谢。

## 使用细则

- 投票后展示感谢且不可改。
- 无帮助时追问具体原因。
- 按版本分组展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-log-vote"><p class="ds-log-vote__version">v3.12.0 · 10-16</p><p class="ds-log-vote__summary">新增表格冻结列与批量操作栏</p><div class="ds-log-vote__actions"><button type="button" aria-pressed="true">👍 有帮助 86</button><button type="button" aria-pressed="false">🤔 无帮助 4</button></div></div>
```

## React 示例

```tsx
<ChangelogVote version="v3.12.0" date="10-16" summary="新增表格冻结列与批量操作栏" helpful={86} unhelpful={4} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 投票后致谢不可改
- [ ] 无帮助追问原因
- [ ] 按版本分组
- [ ] 两个按钮均可聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
