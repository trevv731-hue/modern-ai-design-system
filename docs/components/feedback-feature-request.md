# 功能请求卡

[返回组件目录](../README.md) · 反馈 · v3 新增

## 目的与边界

收集用户对功能的期望，展示投票数与官方状态。

## 结构

- 投票按钮 (ds-feat-req__vote)
- 标题
- 描述
- 状态标记
- 评论数

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

投票按钮 aria-pressed；卡片可聚焦查看详情。

## 使用细则

- 状态流转：已收到 → 规划中 → 开发中 → 已上线。
- 投票后不可重复计数。
- 已上线请求展示版本号。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-feat-req" tabindex="0" role="button"><button type="button" class="ds-feat-req__vote" aria-pressed="false" aria-label="投票支持"><span aria-hidden="true">▲</span><strong>248</strong></button><div class="ds-feat-req__body"><strong>支持表格跨页全选</strong><p>批量操作时希望跨页累计选择，避免逐页勾选。</p><div class="ds-feat-req__meta"><span class="ds-feat-req__state is-planned">规划中</span><span>32 条评论</span></div></div></div>
```

## React 示例

```tsx
<FeatureRequestCard title="支持表格跨页全选" body="批量操作时希望跨页累计选择。" votes={248} state="规划中" comments={32} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 状态流转四阶段
- [ ] 投票不可重复计数
- [ ] 已上线展示版本号
- [ ] 投票按钮 aria-pressed
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
