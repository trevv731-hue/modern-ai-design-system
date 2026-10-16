# Git 分支拓扑图元

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

GitHub 与 GitLab 风格的提交拓扑节点；集成时间线竖轴连接线、分支胶囊、提交摘要与 SHA 哈希。

## 结构

- 垂直时间线轨道与分支连接线
- 分支高亮实心锚点 (Dot)
- 分支名微胶囊标签
- 提交摘要标题
- SHA 校验码与时间戳

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

Tab 聚焦至图元；Enter 查看该次提交的 Git diff 变更或复制 SHA。

## 使用细则

- 时间线连接线通过绝对定位贯穿上下，实现无缝连续的提交拓扑结构。
- 悬停时运用 translateX(3px) 进行横向微移反馈，保持操作精致感。
- SHA 哈希与分支名采用等宽字体 (var(--ds-type-mono))，结构工整严谨。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-git-node" role="article" tabindex="0" data-toast="查看 Commit 详情"><div class="ds-git-node__track"><div class="ds-git-node__line"></div><div class="ds-git-node__dot"></div></div><div class="ds-git-node__content"><div style="display:flex;align-items:center;gap:8px;min-width:0"><span class="ds-git-node__pill">⎇ feat/quic</span><span class="ds-git-node__message">支持 QUIC 0-RTT 握手加速</span></div><div style="display:flex;align-items:center;gap:6px;flex-shrink:0"><span class="ds-git-node__sha">7f2a1b9</span><span style="color:var(--ds-muted);font-size:11px">2m 前</span></div></div></div>
```

## React 示例

```tsx
<GitBranchNode branch="feat/quic" message="支持 QUIC 0-RTT 握手加速" sha="7f2a1b9" time="2m 前" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 时间线上下连接平滑无断裂错位
- [ ] 悬停微移反馈利落不抖动
- [ ] SHA 哈希等宽对齐规整清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
