# Slack 频道引用胶囊

[返回组件目录](../README.md) · 协作 / 团队 · v3 新增

## 目的与边界

在正文内以胶囊形式引用频道或成员，点击可跳转，复制时保留可读文本。

## 结构

- 胶囊外壳 (ds-mention-chip)
- 频道图标或头像
- 名称文本
- 私有频道锁标

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

胶囊作为内联链接参与 Tab 顺序；Enter 跳转到目标；复制时保留 #频道名 文本。

## 使用细则

- 私有频道附加锁标与文字说明，不只换颜色。
- 胶囊内的名称与跳转目标一致，不做别名混淆。
- 在消息输入框中删除胶囊时整体删除。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<p>结果已同步到 <span class="ds-mention-chip" role="link" tabindex="0" aria-label="跳转到频道 值班通知"># 值班通知</span> 和 <span class="ds-mention-chip ds-mention-chip--private" role="link" tabindex="0" aria-label="跳转到私有频道 权限变更">🔒 权限变更</span></p>
```

## React 示例

```tsx
<span>已同步 <SlackChannelMentionChip name="值班通知" /> 与 <SlackChannelMentionChip name="权限变更" private /></span>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 私有频道有图标与文字双重标识
- [ ] 胶囊可键盘激活
- [ ] 复制文本保留可读名称
- [ ] 删除操作一次移除整个胶囊
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
