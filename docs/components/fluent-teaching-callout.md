# Fluent 教学提示气泡

[返回组件目录](../README.md) · Windows / Fluent · v3 新增

## 目的与边界

首次进入或功能更新时围绕目标元素解释一次，用户确认后消失，不重复打扰。

## 结构

- 气泡外壳 (ds-teach-callout)
- 标题与说明正文
- 目标元素高亮环
- 知道了 / 下一步按钮

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

打开后焦点进入气泡；Enter 或 Space 确认；Escape 等同关闭且不丢失当前位置。

## 使用细则

- 教学气泡每次会话最多出现一次，可在设置中关闭。
- 说明文字给出可执行的下一步，不只是描述界面。
- 气泡不遮挡目标元素本身，位置不够时滚动到可见区域。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-teach-callout" role="dialog" aria-label="新功能提示"><strong>批量测速</strong><p>选中多个节点后一次测速，结果按延迟排序。</p><button type="button" class="ds-button">知道了</button></div>
```

## React 示例

```tsx
<FluentTeachingCallout title="批量测速" onDismiss={close}>选中多个节点后一次测速。</FluentTeachingCallout>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 关闭后不再重复弹出
- [ ] 焦点进入气泡且可键盘关闭
- [ ] 说明中包含可执行动作
- [ ] 气泡不会盖住被解释的元素
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
