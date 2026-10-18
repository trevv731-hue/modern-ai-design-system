# 消息输入栏

[返回组件目录](../README.md) · 通讯 · v3 新增

## 目的与边界

提供多行文本输入与附件、表情、发送等辅助操作。

## 结构

- 附件按钮
- 输入区 (ds-input-bar__field)
- 表情按钮
- 发送按钮
- 字数提示

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

Enter 发送，Shift+Enter 换行；Tab 遍历工具按钮。

## 使用细则

- 空内容时发送按钮禁用并说明原因。
- 超长输入给出字数上限提示。
- 粘贴大文件时即时提示大小限制。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-input-bar"><button type="button" aria-label="添加附件">📎</button><div class="ds-input-bar__field" role="textbox" aria-multiline="true" tabindex="0" aria-label="消息内容">下午三点会议室见</div><button type="button" aria-label="选择表情">😊</button><button type="button" class="ds-input-bar__send">发送</button></div>
```

## React 示例

```tsx
<MessageInputBar onSend={sendMessage} placeholder="输入消息" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] Enter 发送且 Shift+Enter 换行
- [ ] 空内容禁用发送
- [ ] 超长输入有字数提示
- [ ] 附件按钮有可读名称
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
