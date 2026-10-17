# YouTube 超级感谢徽标

[返回组件目录](../README.md) · 消费端媒体 · v3 新增

## 目的与边界

在评论或消息旁标注观众付费支持，金额区间可分级但不展示精确金额。

## 结构

- 徽标外壳 (ds-thanks-badge)
- 心形图标
- 感谢等级文本
- 可选悬浮说明

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

徽标静态展示；悬浮说明同时提供键盘焦点可达的等效文本。

## 使用细则

- 只展示区间等级，不展示精确金额。
- 等级说明可在设置中关闭。
- 颜色之外必须有文字标识。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-thanks-badge" role="status" aria-label="超级感谢支持者，等级 2">❤ 超级感谢 · Lv2</div>
```

## React 示例

```tsx
<YouTubeSuperThanksBadge level={2} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 不展示精确金额
- [ ] 等级有文字说明
- [ ] 可在设置中关闭展示
- [ ] 屏幕阅读器可读出等级
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
