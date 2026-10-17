# AI 长期记忆条目卡

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

让被记住的偏好、事实可见可删，说明来源与时间，避免模型悄悄积累不可控信息。

## 结构

- 条目卡外壳 (ds-memory-card)
- 记忆内容
- 来源与时间
- 删除入口

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

Tab 进入删除按钮；Enter 删除并给出撤销入口。

## 使用细则

- 每条记忆标明来源会话与写入时间。
- 删除后提供撤销，避免误删重要上下文。
- 敏感信息默认不写入，写入前给出提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-memory-card"><p>用户偏好：报告先给结论再给证据。</p><footer class="ds-memory-card__foot"><span>来源：值班复盘 · 10-16 21:04</span><button type="button" class="ds-button ds-button--ghost">删除</button></footer></article>
```

## React 示例

```tsx
<AIMemoryEntryCard text="用户偏好：报告先给结论再给证据。" source="值班复盘 · 10-16 21:04" onDelete={remove} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 每条记忆有来源与时间
- [ ] 删除可撤销
- [ ] 敏感信息默认不写入
- [ ] 键盘可完成删除与撤销
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
