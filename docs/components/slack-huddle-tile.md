# Slack Huddle 语音瓦片

[返回组件目录](../README.md) · 协作 / 团队 · v3 新增

## 目的与边界

在频道顶部展示正在进行的临时语音会话，包含参与者、共享状态与一键加入。

## 结构

- 会话外壳 (ds-huddle)
- 参与者头像组
- 共享屏幕提示
- 加入按钮

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

Tab 聚焦加入按钮；Enter 加入或离开；离开后焦点回到按钮并更新文案。

## 使用细则

- 有人共享屏幕时明确标注，不只用缩略图。
- 加入后按钮文案变为“离开”，状态同步。
- 音频不可用时说明原因并禁用按钮。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-huddle" role="region" aria-label="Huddle 语音会话"><div class="ds-persona-stack"><span class="ds-persona" aria-label="参与者 Aether">AE</span><span class="ds-persona" aria-label="参与者 周舟">周</span><span class="ds-persona ds-persona--more" aria-label="另有 1 名参与者">+1</span></div><div class="ds-huddle__info"><strong>正在讨论延迟问题</strong><span>有人正在共享屏幕</span></div><button type="button" class="ds-button">加入</button></div>
```

## React 示例

```tsx
<SlackHuddleTile title="正在讨论延迟问题" participants={["Aether", "周舟", "Kai"]} sharing />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 共享状态有文字说明
- [ ] 加入与离开状态同步更新
- [ ] 不可用时按钮禁用并说明原因
- [ ] 参与者数量与头像组一致
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
