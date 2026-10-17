# GitHub 版本说明区块

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

按新增、修复、变更分组展示版本内容，并标明影响范围与升级提示。

## 结构

- 版本头 (ds-release-notes__head)
- 分组列表
- 条目与关联问题编号
- 升级提示

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

静态文本；链接与编号可 Tab 到达。

## 使用细则

- 每条说明附问题编号，便于追溯。
- 破坏性变更单独分组并给出迁移路径。
- 未完成的条目不写入正式版本说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-release-notes"><header class="ds-release-notes__head"><strong>v3.4.0</strong><span>发布于 10-17</span></header><section><h3>修复</h3><ul><li>订阅刷新失败后保留输入内容（AET-248）</li></ul></section><section><h3>变更</h3><ul><li>默认密度改为舒适（AET-251）</li></ul></section></article>
```

## React 示例

```tsx
<GithubReleaseNotesBlock version="v3.4.0" releasedAt="发布于 10-17" groups={[{ title: "修复", items: ["订阅刷新失败后保留输入内容（AET-248）"] }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 每条说明附问题编号
- [ ] 破坏性变更单独分组
- [ ] 未完成条目不写入
- [ ] 链接可键盘访问
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
