# 反馈感谢状态

[返回组件目录](../README.md) · 反馈 · v3 新增

## 目的与边界

在用户提交反馈后确认收到，并说明后续处理方式。

## 结构

- 成功图标 (ds-fb-thanks__icon)
- 感谢文案
- 工单号
- 后续说明
- 返回入口

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

状态使用 status 语义；返回按钮可聚焦。

## 使用细则

- 说明预计回复时间。
- 提供工单号便于追踪。
- 引导继续探索而非死胡同。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-fb-thanks" role="status"><span class="ds-fb-thanks__icon" aria-hidden="true">🎉</span><strong>感谢你的反馈</strong><p>工单号 #FB-20261018-042，我们会在 2 个工作日内回复你。</p><button type="button">返回产品</button></div>
```

## React 示例

```tsx
<FeedbackThanks ticket="FB-20261018-042" eta="2 个工作日" onBack={back} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 说明预计回复时间
- [ ] 提供工单号
- [ ] 引导继续探索
- [ ] status 语义
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
