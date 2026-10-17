# GitHub 代码评审讨论串

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

把针对某一处代码的评论按串聚合，显示解决状态与参与人，避免评审意见散落。

## 结构

- 讨论串外壳 (ds-review-thread)
- 代码位置提示
- 评论列表
- 解决与回复入口

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

Tab 进入每条评论的操作按钮；Enter 回复；Escape 收起长串。

## 使用细则

- 代码位置写明文件与行号，跳转后保留讨论串状态。
- 解决状态由提出者或被指派者确认，不自动关闭。
- 过期讨论（代码已改）明确标注。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-review-thread" role="region" aria-label="代码评审讨论串"><header class="ds-review-thread__head"><strong>subscription.ts:48</strong><span class="ds-badge ds-badge--warning">待解决</span></header><ul class="ds-review-thread__list"><li class="ds-review-thread__comment"><strong>周舟</strong><p>这里的重试次数建议改为配置项。</p></li></ul><footer class="ds-review-thread__foot"><button type="button" class="ds-button ds-button--ghost">回复</button><button type="button" class="ds-button ds-button--secondary">标记解决</button></footer></section>
```

## React 示例

```tsx
<GithubCodeReviewThread location="subscription.ts:48" status="待解决" comments={[{ author: "周舟", body: "这里的重试次数建议改为配置项。" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 代码位置写明文件与行号
- [ ] 解决需人工确认
- [ ] 过期讨论明确标注
- [ ] 键盘可完成回复与标记
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
