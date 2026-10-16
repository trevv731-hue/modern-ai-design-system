# GitHub 提交流水线状态与检查流节点

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

GitHub Actions、PR 与 GitLab 风格的提交节点与 CI/CD 流水线状态行；集成圆点状态指示（成功对勾 / 失败红叉）、提交说明、等宽哈希标签及作者时间元信息。

## 结构

- 节点横向外框 (.ds-commit-node)
- 左侧主信息组 (.ds-commit-node__main)
- 18px 圆形状态指示器 (.ds-commit-node__status--pass, --fail)
- 单行自适应提交说明 (.ds-commit-node__msg)
- 等宽 Git 提交哈希胶囊 (.ds-commit-node__hash)
- 右侧作者与相对时间元信息 (.ds-commit-node__meta)

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

Tab 聚焦提交节点；Enter 导航跳转至该次提交的 Git diff 页面。

## 使用细则

- 状态圆点具有明确的 aria-label 说明，提供完整的无障碍支持。
- 提交说明文本单行自适应弹性伸缩并带省略号，哈希与时间信息固定宽度。
- 适合用于持续集成监控、代码版本历史查看器及变更发布说明列表。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-commit-node" role="listitem"><div class="ds-commit-node__main"><div class="ds-commit-node__status ds-commit-node__status--pass" aria-label="流水线通过">✓</div><span class="ds-commit-node__msg">feat(router): 引入 QUIC 多路复用低延迟流传输</span><span class="ds-commit-node__hash">8c3d9a1</span></div><div class="ds-commit-node__meta"><span>Linus</span><span>·</span><span>10分钟前</span></div></div>
```

## React 示例

```tsx
<GitCommitFlowNode message="feat(router): 引入 QUIC 多路复用低延迟流传输" hash="8c3d9a1" author="Linus" time="10分钟前" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 提交信息长文本自适应截断不溢出
- [ ] 状态圆点符号与颜色对比鲜明
- [ ] 哈希等宽字体对齐规整
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
