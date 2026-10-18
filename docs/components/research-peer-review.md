# 同行评审意见卡

[返回组件目录](../README.md) · 科研 / 学术 · v3 新增

## 目的与边界

展示审稿人对稿件各维度的评分与文字意见。

## 结构

- 审稿人 (ds-peer-review__reviewer)
- 评分维度 (ds-peer-review__score)
- 意见正文
- 推荐等级 (ds-peer-review__verdict)
- 作者回复

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

维度评分可读；意见可展开；回复按钮可达。

## 使用细则

- 评分按维度分别展示。
- 推荐等级用文字与颜色双表示。
- 意见可标记为已读。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-peer-review"><div class="ds-peer-review__head"><span class="ds-peer-review__avatar" aria-hidden="true">审</span><div><strong class="ds-peer-review__reviewer">审稿人 2</strong><span class="ds-peer-review__verdict is-minor">小修后接收</span></div></div><dl class="ds-peer-review__score"><div><dt>创新性</dt><dd>4/5</dd></div><div><dt>方法严谨性</dt><dd>5/5</dd></div><div><dt>实验充分性</dt><dd>3/5</dd></div></dl><p class="ds-peer-review__text">实验设置合理，建议补充端上性能对比以支撑“跨端一致”的结论。</p><button type="button">撰写回复</button></article>
```

## React 示例

```tsx
<PeerReviewCard reviewer="审稿人 2" verdict="小修后接收" scores={{ "创新性": 4, "方法严谨性": 5 }} text="建议补充端上性能对比。" onReply={reply} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 评分按维度展示
- [ ] 等级文字颜色双表示
- [ ] 意见可标记已读
- [ ] 回复按钮可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
